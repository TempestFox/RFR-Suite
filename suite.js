/* ============================================================
   HELIANA'S GUIDE — SUITE.JS
   Shared behaviour for all suite tools.
   Link after suite.css on any page that uses custom selects.
   Last updated: v1.1
   ============================================================ */

/* ── Custom Select Component ──────────────────────────────────────────────

   Replaces native <select> elements with animated slide-down dropdowns.
   The original <select> is hidden but kept in the DOM and stays in sync,
   so all existing JS (.value, onchange, dispatchEvent) works unchanged.

   SETUP — two ways to use:

   1. Automatic (recommended):
      Call initCustomSelects() after your page content is ready.
      It upgrades every <select> on the page.

   2. Single element (for JS-generated selects):
      upgradeSelect(document.getElementById('my-select'));

   MODIFIERS — add as attributes on the original <select>:
      data-cs-gold      gold accent instead of green
      data-cs-compact   smaller padding for tight/inline rows

   ──────────────────────────────────────────────────────────────────────── */

(function () {

    var currentlyOpen = null;

    // ── Close on outside click or Escape ──────────────────────────────────
    document.addEventListener('click', function () {
        if (currentlyOpen) closeDropdown(currentlyOpen);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && currentlyOpen) closeDropdown(currentlyOpen);
    });
    window.addEventListener('scroll', function () {
        if (currentlyOpen) positionPanel(currentlyOpen);
    }, true);
    window.addEventListener('resize', function () {
        if (currentlyOpen) positionPanel(currentlyOpen);
    });

    // ── Core helpers ───────────────────────────────────────────────────────

    function positionPanel(wrap) {
        var btn   = wrap.querySelector('.cs-btn');
        var panel = wrap.querySelector('.cs-dropdown');
        if (!btn || !panel) return;
        var r = btn.getBoundingClientRect();
        var dropHeight = 260; // approximate max panel height
        var spaceBelow = window.innerHeight - (r.bottom + 4);
        var spaceAbove = r.top - 4;
        panel.style.left     = r.left + 'px';
        panel.style.width    = r.width + 'px';
        panel.style.minWidth = Math.max(r.width, 140) + 'px';
        if (spaceBelow >= dropHeight || spaceBelow >= spaceAbove) {
            // enough room below — drop down
            panel.style.top    = (r.bottom + 4) + 'px';
            panel.style.bottom = 'auto';
        } else {
            // not enough room — drop up
            panel.style.bottom = (window.innerHeight - r.top + 4) + 'px';
            panel.style.top    = 'auto';
        }
    }

    function openDropdown(wrap) {
        if (currentlyOpen && currentlyOpen !== wrap) closeDropdown(currentlyOpen);
        positionPanel(wrap);
        wrap.classList.add('open');
        currentlyOpen = wrap;
    }

    function closeDropdown(wrap) {
        wrap.classList.remove('open');
        if (currentlyOpen === wrap) currentlyOpen = null;
    }

    function syncLabel(select, labelEl) {
        var opt = select.options[select.selectedIndex];
        var isEmpty = !opt || (opt.disabled && opt.value === '');
        labelEl.textContent = opt ? opt.text : '\u2014 Select \u2014';
        var btn = labelEl.closest('.cs-btn');
        if (btn) btn.dataset.empty = isEmpty ? 'true' : 'false';
    }

    function buildOptions(select, panel, labelEl) {
        panel.innerHTML = '';
        var currentVal = select.value;

        for (var i = 0; i < select.options.length; i++) {
            var opt = select.options[i];
            if (opt.disabled) continue;

            var div = document.createElement('div');
            div.className = 'cs-opt' + (opt.value === currentVal ? ' cs-selected' : '');
            div.textContent = opt.text;
            div.dataset.value = opt.value;

            (function (div, opt, select, panel, labelEl) {
                div.addEventListener('click', function (e) {
                    e.stopPropagation();
                    select.value = opt.value;
                    panel.querySelectorAll('.cs-opt').forEach(function (o) {
                        o.classList.remove('cs-selected');
                    });
                    div.classList.add('cs-selected');
                    syncLabel(select, labelEl);
                    var wrap = div.closest('.cs-wrap');
                    if (wrap) closeDropdown(wrap);
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                });
            })(div, opt, select, panel, labelEl);

            panel.appendChild(div);
        }
    }

    // ── Main upgrade function ──────────────────────────────────────────────

    function upgradeSelect(select) {
        if (!select || select.dataset.csUpgraded) return;
        select.dataset.csUpgraded = '1';

        var wrap = document.createElement('div');
        wrap.className = 'cs-wrap'
            + (select.hasAttribute('data-cs-gold')    ? ' cs-wrap--gold'    : '')
            + (select.hasAttribute('data-cs-compact') ? ' cs-wrap--compact' : '');

        // Transfer layout styles from original select to wrapper
        ['flex', 'flex-grow', 'flex-shrink', 'flex-basis',
         'width', 'min-width', 'max-width',
         'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'
        ].forEach(function (prop) {
            var val = select.style.getPropertyValue(prop);
            if (val) wrap.style.setProperty(prop, val);
        });

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cs-btn';
        btn.dataset.empty = 'true';

        var labelEl = document.createElement('span');
        labelEl.className = 'cs-label';

        var arrowEl = document.createElement('span');
        arrowEl.className = 'cs-arrow';
        arrowEl.innerHTML = '&#9662;';

        btn.appendChild(labelEl);
        btn.appendChild(arrowEl);

        var panel = document.createElement('div');
        panel.className = 'cs-dropdown';

        select.parentNode.insertBefore(wrap, select);
        wrap.appendChild(btn);
        wrap.appendChild(panel);
        wrap.appendChild(select);
        select.style.display = 'none';

        buildOptions(select, panel, labelEl);
        syncLabel(select, labelEl);

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (wrap.classList.contains('open')) {
                closeDropdown(wrap);
            } else {
                openDropdown(wrap);
            }
        });

        select.addEventListener('change', function () {
            syncLabel(select, labelEl);
        });
    }

    // ── Public API ─────────────────────────────────────────────────────────

    window.initCustomSelects = function (root) {
        (root || document).querySelectorAll('select:not([data-cs-upgraded])').forEach(upgradeSelect);
    };

    window.upgradeSelect = upgradeSelect;

})();
