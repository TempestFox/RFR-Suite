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


/* ── Drum Roll Number Picker ──────────────────────────────────────────────────

   Replaces <input type="number"> on mobile with a tactile drum-roll picker.
   Desktop is unaffected — native inputs remain.

   Usage — add data attributes to any number input:
     data-drum              required: marks this input for drum upgrade
     data-drum-min="1"      minimum value (default 0)
     data-drum-max="20"     maximum value (default 20)
     data-drum-start="10"   value shown when picker first opens (default: mid-point)
     data-drum-label="Roll" optional label shown in the sheet header

   Inputs are upgraded automatically on DOMContentLoaded.
   For dynamically created inputs, call: upgradeDrum(inputElement)

   ──────────────────────────────────────────────────────────────────────── */

(function () {

    var ITEM_H    = 48;   // px height of each number row
    var VISIBLE   = 5;    // how many rows visible (must be odd)
    var sheet     = null; // the bottom sheet DOM node
    var drumEl    = null; // the drum track
    var activeInput = null;
    var prevValue   = null;
    var currentVal  = null;
    var minVal, maxVal;

    // ── Build the sheet once ──────────────────────────────────────────────
    function buildSheet() {
        sheet = document.createElement('div');
        sheet.id = 'drum-sheet';
        sheet.innerHTML = `
            <div id="drum-backdrop"></div>
            <div id="drum-panel">
                <div id="drum-header">
                    <span id="drum-label"></span>
                    <button id="drum-close" type="button">&#10005;</button>
                </div>
                <div id="drum-viewport">
                    <div id="drum-track"></div>
                    <div id="drum-selector-top"></div>
                    <div id="drum-selector-bot"></div>
                </div>
            </div>`;
        document.body.appendChild(sheet);

        drumEl = sheet.querySelector('#drum-track');

        sheet.querySelector('#drum-backdrop').addEventListener('click', function () {
            closeDrum(true);
        });
        sheet.querySelector('#drum-close').addEventListener('click', function () {
            closeDrum(false);
        });

        // Touch scroll
        var touchY = 0, startOffset = 0, isDragging = false;
        drumEl.addEventListener('touchstart', function (e) {
            touchY      = e.touches[0].clientY;
            startOffset = currentOffset();
            isDragging  = true;
        }, { passive: true });
        drumEl.addEventListener('touchmove', function (e) {
            if (!isDragging) return;
            var dy = e.touches[0].clientY - touchY;
            setOffset(startOffset + dy, false);
        }, { passive: true });
        drumEl.addEventListener('touchend', function () {
            isDragging = false;
            snap();
        }, { passive: true });

        // Mouse scroll (desktop testing)
        drumEl.addEventListener('wheel', function (e) {
            e.preventDefault();
            var dir = e.deltaY > 0 ? -1 : 1;
            setVal(currentVal - dir);
            applyOffset(true);
        }, { passive: false });

        // Swipe-down to dismiss
        var panelEl = sheet.querySelector('#drum-panel');
        var pTouchY = 0, pStartTop = 0;
        panelEl.addEventListener('touchstart', function (e) {
            pTouchY   = e.touches[0].clientY;
            pStartTop = 0;
        }, { passive: true });
        panelEl.addEventListener('touchmove', function (e) {
            var dy = e.touches[0].clientY - pTouchY;
            if (dy > 0) panelEl.style.transform = 'translateY(' + dy + 'px)';
        }, { passive: true });
        panelEl.addEventListener('touchend', function (e) {
            var dy = e.changedTouches[0].clientY - pTouchY;
            panelEl.style.transform = '';
            if (dy > 80) closeDrum(true);
        }, { passive: true });
    }

    // ── Helpers ───────────────────────────────────────────────────────────
    function currentOffset() {
        var t = drumEl.style.transform;
        var m = t.match(/translateY\((-?[\d.]+)px\)/);
        return m ? parseFloat(m[1]) : 0;
    }

    function setOffset(offset, animate) {
        var mid   = Math.floor(VISIBLE / 2);
        var minOff = -(( maxVal - minVal) * ITEM_H);
        var maxOff = 0;
        offset = Math.max(minOff, Math.min(maxOff, offset));
        drumEl.style.transition = animate ? 'transform .25s cubic-bezier(.4,0,.2,1)' : 'none';
        drumEl.style.transform  = 'translateY(' + offset + 'px)';
        // Update current value from offset
        var idx = Math.round(-offset / ITEM_H);
        setVal(minVal + idx);
    }

    function applyOffset(animate) {
        var idx = currentVal - minVal;
        setOffset(-(idx * ITEM_H), animate);
    }

    function snap() {
        applyOffset(true);
    }

    function setVal(v) {
        currentVal = Math.max(minVal, Math.min(maxVal, v));
        if (activeInput) activeInput.value = currentVal;
        // Update highlight classes
        drumEl.querySelectorAll('.drum-item').forEach(function (el) {
            var itemVal = parseInt(el.dataset.val);
            var dist    = Math.abs(itemVal - currentVal);
            el.className = 'drum-item' + (dist === 0 ? ' drum-active' : dist === 1 ? ' drum-near' : dist === 2 ? ' drum-far' : ' drum-gone');
        });
    }

    // ── Open / close ──────────────────────────────────────────────────────
    function openDrum(input) {
        if (!sheet) buildSheet();
        activeInput = input;
        prevValue   = input.value;
        minVal      = parseInt(input.dataset.drumMin  || input.min  || 0);
        maxVal      = parseInt(input.dataset.drumMax  || input.max  || 20);
        var start   = parseInt(input.dataset.drumStart || input.value) || Math.round((minVal + maxVal) / 2);
        start       = Math.max(minVal, Math.min(maxVal, start));

        var label = input.dataset.drumLabel || input.placeholder || '';
        sheet.querySelector('#drum-label').textContent = label;

        // Build items
        drumEl.innerHTML = '';
        // Add padding items above and below so centre aligns properly
        var pad = Math.floor(VISIBLE / 2);
        for (var p = 0; p < pad; p++) {
            var ph = document.createElement('div');
            ph.className = 'drum-item drum-pad';
            ph.style.height = ITEM_H + 'px';
            drumEl.appendChild(ph);
        }
        for (var v = minVal; v <= maxVal; v++) {
            var el = document.createElement('div');
            el.className = 'drum-item';
            el.dataset.val = v;
            el.textContent = v;
            el.style.height = ITEM_H + 'px';
            drumEl.appendChild(el);
        }
        for (var p2 = 0; p2 < pad; p2++) {
            var ph2 = document.createElement('div');
            ph2.className = 'drum-item drum-pad';
            ph2.style.height = ITEM_H + 'px';
            drumEl.appendChild(ph2);
        }

        currentVal = start;
        drumEl.style.transition = 'none';
        applyOffset(false);
        setVal(currentVal);

        sheet.classList.add('open');
        setTimeout(function () { sheet.querySelector('#drum-panel').style.transform = ''; }, 10);
    }

    function closeDrum(apply) {
        if (!sheet) return;
        sheet.classList.remove('open');
        if (!apply && activeInput) {
            activeInput.value = prevValue;
        }
        activeInput = null;
    }

    // ── Upgrade a single input ────────────────────────────────────────────
    function upgradeDrum(input) {
        if (!input || input.dataset.drumUpgraded) return;
        input.dataset.drumUpgraded = '1';
        input.addEventListener('focus', function (e) {
            if (window.innerWidth > 600) return;
            e.preventDefault();
            input.blur();
            openDrum(input);
        });
        // Also handle click for cases where focus doesn't fire
        input.addEventListener('click', function (e) {
            if (window.innerWidth > 600) return;
            e.preventDefault();
            input.blur();
            openDrum(input);
        });
        // Prevent keyboard from appearing
        input.addEventListener('keydown', function (e) {
            if (window.innerWidth <= 600) e.preventDefault();
        });
    }

    // ── Auto-upgrade on load ──────────────────────────────────────────────
    function initDrums(root) {
        (root || document).querySelectorAll('input[data-drum]:not([data-drum-upgraded])').forEach(upgradeDrum);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDrums);
    } else {
        initDrums();
    }

    window.upgradeDrum  = upgradeDrum;
    window.initDrums    = initDrums;

})();
