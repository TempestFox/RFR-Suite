const creatureData = {
    "Aberration": {
        skill: "Arcana", assessment: "d20 + INT + Arcana", harvest: "d20 + DEX/Spellcasting + Arcana",
        parts: [
            { name: "Antenna", dc: 5, tags: ["Edible"] }, { name: "Eye", dc: 5, tags: ["Edible"] },
            { name: "Flesh", dc: 5, tags: ["Edible"] }, { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] },
            { name: "Bone", dc: 10, tags: ["Edible"] }, { name: "Egg", dc: 10, tags: ["Edible"] },
            { name: "Fat", dc: 10, tags: ["Edible"] }, { name: "Pouch of Claws", dc: 10, tags: [] },
            { name: "Pouch of Teeth", dc: 10, tags: [] }, { name: "Tentacle", dc: 10, tags: [] },
            { name: "Heart", dc: 15, tags: ["Edible"] }, { name: "Liver", dc: 15, tags: ["Edible"] },
            { name: "Phial of Mucus", dc: 15, tags: ["Fluid"] }, { name: "Stinger", dc: 15, tags: [] },
            { name: "Brain", dc: 20, tags: ["Edible"] }, { name: "Chitin", dc: 20, tags: [] },
            { name: "Hide", dc: 20, tags: [] }, { name: "Main Eye", dc: 20, tags: ["Volatile"], ruptureType: "Eye Ray/Psychic Blast", ruptureSave: "See Statblock" }
        ],
        modifiers: {
            "Broodling": { parts: [{ name: "Broodling Toxin", dc: 12, tags: ["Fluid"] }] },
            "Lesser Aboleth Broodmother": { parts: [{ name: "Aboleth Mucus", dc: 15, tags: ["Fluid"] }] },
            "Aboleth Broodmother (Boss)": { 
                parts: [
                    { name: "Eye", dc: 5, tags: ["Unique"] }, 
                    { name: "Tentacle", dc: 10, tags: ["Unique", "Edible"] }, 
                    { name: "Broodling Sac", dc: 15, tags: ["Unique"] },
                    { name: "Hide", dc: 20, tags: ["Unique"] }
                ] 
            },
            "Lesser Brood Chrysalis": { parts: [{ name: "Chrysalis Shell", dc: 15, tags: [] }] },
            "Brood Chrysalis": { parts: [{ name: "Chrysalis Shell", dc: 20, tags: [] }] },
            "Greater Brood Chrysalis": { parts: [{ name: "Chrysalis Shell", dc: 25, tags: [] }] },
            "Starved Dreamholder": { parts: [{ name: "Aberrant Eye", dc: 15, tags: [] }] },
            "Dreamholder (Boss)": { 
                parts: [
                    { name: "Subeye", dc: 5, tags: ["Unique", "Edible"] }, 
                    { name: "Bone", dc: 10, tags: ["Unique"] }, 
                    { name: "Brain", dc: 20, tags: ["Unique"] },
                    { name: "Hide", dc: 20, tags: ["Unique"] },
                    { name: "Main Eye", dc: 20, tags: ["Unique", "Volatile"], ruptureType: "Psychic Blast", ruptureSave: "DC 15 INT (See Statblock for Damage)" }
                ] 
            },
            "Glutted Dreamholder": { parts: [{ name: "Dream Essence", dc: 25, tags: ["Fluid"] }] }
        }
    },
    "Beast": {
        skill: "Survival", assessment: "d20 + INT + Survival", harvest: "d20 + DEX + Survival",
        parts: [
            { name: "Antenna", dc: 5, tags: ["Edible"] }, { name: "Eye", dc: 5, tags: ["Edible"] },
            { name: "Flesh", dc: 5, tags: ["Edible"] }, { name: "Hair", dc: 5, tags: [] },
            { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] },
            { name: "Antler", dc: 10, tags: [] }, { name: "Beak", dc: 10, tags: [] },
            { name: "Bone", dc: 10, tags: ["Edible"] }, { name: "Egg", dc: 10, tags: ["Edible"] },
            { name: "Fat", dc: 10, tags: ["Edible"] }, { name: "Fin", dc: 10, tags: [] },
            { name: "Horn", dc: 10, tags: [] }, { name: "Pincer", dc: 10, tags: [] },
            { name: "Pouch of Claws", dc: 10, tags: [] }, { name: "Pouch of Teeth", dc: 10, tags: [] },
            { name: "Talon", dc: 10, tags: [] }, { name: "Tusk", dc: 10, tags: [] },
            { name: "Heart", dc: 15, tags: ["Edible"] }, { name: "Liver", dc: 15, tags: ["Edible"] },
            { name: "Poison Gland", dc: 15, tags: [] }, { name: "Pouch of Feathers", dc: 15, tags: [] },
            { name: "Pouch of Scales", dc: 15, tags: [] }, { name: "Stinger", dc: 15, tags: [] },
            { name: "Tentacle", dc: 15, tags: [] }, { name: "Chitin", dc: 20, tags: [] },
            { name: "Pelt", dc: 20, tags: [] }
        ],
        modifiers: {}
    },
    "Celestial": {
        skill: "Religion", assessment: "d20 + INT + Religion", harvest: "d20 + DEX/Spellcasting + Religion",
        parts: [
            { name: "Eye", dc: 5, tags: ["Edible"] }, { name: "Flesh", dc: 5, tags: ["Edible"] },
            { name: "Hair", dc: 5, tags: [] }, { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] },
            { name: "Pouch of Dust", dc: 5, tags: ["Edible"] }, { name: "Bone", dc: 10, tags: ["Edible"] },
            { name: "Fat", dc: 10, tags: ["Edible"] }, { name: "Horn", dc: 10, tags: [] },
            { name: "Pouch of Teeth", dc: 10, tags: [] }, { name: "Heart", dc: 15, tags: ["Edible"] },
            { name: "Liver", dc: 15, tags: ["Edible"] }, { name: "Pouch of Feathers", dc: 15, tags: [] },
            { name: "Pouch of Scales", dc: 15, tags: [] }, { name: "Brain", dc: 20, tags: ["Edible"] },
            { name: "Skin", dc: 20, tags: [] }, { name: "Soul", dc: 25, tags: ["Volatile"], ruptureType: "Planar Instability", ruptureSave: "DC 15 CHA (See Statblock for Effect)" }
        ],
        modifiers: {}
    },
    "Construct": {
        skill: "Investigation", assessment: "d20 + INT + Investigation", harvest: "d20 + DEX + Investigation",
        parts: [
            { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Phial of Oil", dc: 5, tags: ["Fluid"] },
            { name: "Flesh", dc: 10, tags: ["Edible"] }, { name: "Plating", dc: 10, tags: [] },
            { name: "Stone", dc: 10, tags: [] }, { name: "Bone", dc: 15, tags: ["Edible"] },
            { name: "Gears", dc: 15, tags: [] }, { name: "Heart", dc: 15, tags: ["Edible"] },
            { name: "Liver", dc: 15, tags: ["Edible"] }, { name: "Brain", dc: 20, tags: ["Edible"] },
            { name: "Instructions", dc: 20, tags: [] }, { name: "Lifespark", dc: 25, tags: ["Volatile"], ruptureType: "Arcane Explosion", ruptureSave: "DC 15 DEX (See Statblock for Damage)" }
        ],
        modifiers: {
            "Flying Magnetite Weapon": { parts: [{ name: "Magnetite Shards", dc: 10, tags: [] }, { name: "Arcanomagnetic Core", dc: 15, tags: [] }] },
            "Magnetite Armour": { parts: [{ name: "Magnetite Plating", dc: 15, tags: [] }, { name: "Animated Helm", dc: 20, tags: [] }] },
            "Swarm of Magnetite Cutlery": { parts: [{ name: "Magnetite Utensils", dc: 10, tags: [] }] },
            "Kobold Mech": { parts: [{ name: "Volatile Fuel", dc: 10, tags: ["Fluid", "Volatile"], ruptureType: "Explosion", ruptureSave: "DC 12 DEX (See Statblock for Damage)" }, { name: "Arcanomechanical Core", dc: 15, tags: [] }] }
        }
    },
    "Dragon": {
        skill: "Survival", assessment: "d20 + INT + Survival", harvest: "d20 + DEX + Survival",
        parts: [
            { name: "Eye", dc: 5, tags: ["Edible"] }, { name: "Flesh", dc: 5, tags: ["Edible"] },
            { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Bone", dc: 10, tags: ["Edible"] },
            { name: "Egg", dc: 10, tags: ["Edible"] }, { name: "Fat", dc: 10, tags: ["Edible"] },
            { name: "Pouch of Claws", dc: 10, tags: [] }, { name: "Pouch of Teeth", dc: 10, tags: [] },
            { name: "Horn", dc: 15, tags: [] }, { name: "Liver", dc: 15, tags: ["Edible"] },
            { name: "Pouch of Scales", dc: 15, tags: [] }, { name: "Heart", dc: 20, tags: ["Edible"] },
            { name: "Breath Sac", dc: 25, tags: ["Volatile"], ruptureType: "Breath Discharge", ruptureSave: "See Statblock" }
        ],
        modifiers: {
            "Magnetite Wyrmling": { parts: [{ name: "Magnetite Scales", dc: 15, tags: [] }] },
            "Young Magnetite Dragon": { parts: [{ name: "Magnetite Scales", dc: 18, tags: [] }] },
            "Adult Magnetite Dragon": { parts: [{ name: "Magnetite Scales", dc: 20, tags: [] }, { name: "Hexofuga (Spines)", dc: 20, tags: [] }] },
            "Ancient Magnetite Dragon": { parts: [{ name: "Magnetite Scales", dc: 25, tags: [] }, { name: "Hexofuga (Spines)", dc: 25, tags: [] }, { name: "Magnetic Heart", dc: 30, tags: [] }] },
            "Magnetite Dragon (Boss)": { 
                parts: [
                    { name: "Flesh", dc: 5, tags: ["Unique", "Edible"] }, 
                    { name: "Bone", dc: 10, tags: ["Unique"] }, 
                    { name: "Pouch of Scales", dc: 15, tags: ["Unique"] },
                    { name: "Horn", dc: 20, tags: ["Unique"] }
                ] 
            }
        }
    },
    "Elemental": {
        skill: "Arcana", assessment: "d20 + INT + Arcana", harvest: "d20 + DEX/Spellcasting + Arcana",
        parts: [
            { name: "Eye", dc: 5, tags: ["Edible"] }, { name: "Primordial Dust", dc: 5, tags: ["Edible"] },
            { name: "Bone", dc: 10, tags: ["Edible"] }, { name: "Volatile Mote", dc: 15, tags: ["Volatile"], ruptureType: "Elemental Burst", ruptureSave: "DC 13 DEX (See Statblock for Damage)" },
            { name: "Core", dc: 25, tags: ["Volatile"], ruptureType: "Major Elemental Burst", ruptureSave: "DC 16 DEX (See Statblock for Damage)" }
        ],
        modifiers: {
            "Mini Tar Elemental": { parts: [{ name: "Elemental Tar", dc: 12, tags: ["Fluid"] }] },
            "Possessed Mining Suit": { parts: [{ name: "Arcane Power Source (Crystal)", dc: 15, tags: [] }] },
            "Tar Elemental": { parts: [{ name: "Elemental Tar", dc: 15, tags: ["Fluid"] }] },
            "Tarchaeologist": { parts: [{ name: "Arcane Power Source (Crystal)", dc: 15, tags: [] }] },
            "Tarannosaurus Rex": { parts: [{ name: "Arcane Power Source (Crystal)", dc: 15, tags: [] }, { name: "Elemental Tar", dc: 15, tags: ["Fluid"] }] }
        }
    },
    "Fey": {
        skill: "Arcana", assessment: "d20 + INT + Arcana", harvest: "d20 + DEX/Spellcasting + Arcana",
        parts: [
            { name: "Antenna", dc: 5, tags: ["Edible"] }, { name: "Eye", dc: 5, tags: ["Edible"] },
            { name: "Flesh", dc: 5, tags: ["Edible"] }, { name: "Hair", dc: 5, tags: [] },
            { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Antler", dc: 10, tags: [] },
            { name: "Beak", dc: 10, tags: [] }, { name: "Bone", dc: 10, tags: ["Edible"] },
            { name: "Egg", dc: 10, tags: ["Edible"] }, { name: "Horn", dc: 10, tags: [] },
            { name: "Pouch of Claws", dc: 10, tags: [] }, { name: "Pouch of Teeth", dc: 10, tags: [] },
            { name: "Talon", dc: 10, tags: [] }, { name: "Tusk", dc: 10, tags: [] },
            { name: "Fat", dc: 15, tags: ["Edible"] }, { name: "Heart", dc: 15, tags: ["Edible"] },
            { name: "Liver", dc: 15, tags: ["Edible"] }, { name: "Poison Gland", dc: 15, tags: [] },
            { name: "Pouch of Feathers", dc: 15, tags: [] }, { name: "Pouch of Scales", dc: 15, tags: [] },
            { name: "Tentacle", dc: 15, tags: [] }, { name: "Tongue", dc: 15, tags: [] },
            { name: "Brain", dc: 20, tags: ["Edible"] }, { name: "Pelt", dc: 20, tags: [] },
            { name: "Pouch of Dust", dc: 20, tags: ["Edible"] }, { name: "Skin", dc: 20, tags: [] },
            { name: "Psyche", dc: 25, tags: ["Volatile"], ruptureType: "Possession", ruptureSave: "DC 15 CHA (See Statblock for Effect)" }
        ],
        modifiers: {
            "Faerie-o'-Fire": { parts: [{ name: "Radiant Dust", dc: 15, tags: [] }, { name: "Wisp Core", dc: 20, tags: [] }] }
        }
    },
    "Fiend": {
        skill: "Religion", assessment: "d20 + INT + Religion", harvest: "d20 + DEX/Spellcasting + Religion",
        parts: [
            { name: "Eye", dc: 5, tags: ["Edible"] }, { name: "Flesh", dc: 5, tags: ["Edible"] },
            { name: "Hair", dc: 5, tags: [] }, { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] },
            { name: "Pouch of Dust", dc: 5, tags: ["Edible"] }, { name: "Beak", dc: 10, tags: [] },
            { name: "Bone", dc: 10, tags: ["Edible"] }, { name: "Horn", dc: 10, tags: [] },
            { name: "Pouch of Claws", dc: 10, tags: [] }, { name: "Pouch of Teeth", dc: 10, tags: [] },
            { name: "Fat", dc: 15, tags: ["Edible"] }, { name: "Heart", dc: 15, tags: ["Edible"] },
            { name: "Liver", dc: 15, tags: ["Edible"] }, { name: "Poison Gland", dc: 15, tags: [] },
            { name: "Pouch of Feathers", dc: 15, tags: [] }, { name: "Pouch of Scales", dc: 15, tags: [] },
            { name: "Brain", dc: 20, tags: ["Edible"] }, { name: "Skin", dc: 20, tags: [] },
            { name: "Soul", dc: 25, tags: ["Volatile"], ruptureType: "Planar Instability", ruptureSave: "DC 15 CHA (See Statblock for Effect)" }
        ],
        modifiers: {
            "Swarm of Fiendcats": { parts: [{ name: "Fiend Fur", dc: 15, tags: [] }, { name: "Cursed Whiskers", dc: 18, tags: [] }] }
        }
    },
    "Giant": {
        skill: "Medicine", assessment: "d20 + INT + Medicine", harvest: "d20 + DEX + Medicine",
        parts: [
            { name: "Flesh", dc: 5, tags: ["Edible"] }, { name: "Hair", dc: 5, tags: [] },
            { name: "Nail", dc: 5, tags: [] }, { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] },
            { name: "Bone", dc: 10, tags: ["Edible"] }, { name: "Fat", dc: 10, tags: ["Edible"] },
            { name: "Tooth", dc: 10, tags: [] }, { name: "Liver", dc: 15, tags: ["Edible"] },
            { name: "Heart", dc: 15, tags: ["Edible", "Volatile"], ruptureType: "Elemental Discharge", ruptureSave: "DC 15 CON (See Statblock for Damage)" },
            { name: "Skin", dc: 20, tags: [] }
        ],
        modifiers: {}
    },
    "Humanoid": {
        skill: "Medicine", assessment: "d20 + INT + Medicine", harvest: "d20 + DEX + Medicine",
        parts: [
            { name: "Eye", dc: 5, tags: [] }, { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] },
            { name: "Bone", dc: 10, tags: ["Edible"] }, { name: "Egg", dc: 10, tags: ["Edible"] },
            { name: "Pouch of Teeth", dc: 10, tags: [] }, { name: "Heart", dc: 15, tags: ["Edible"] },
            { name: "Liver", dc: 15, tags: ["Edible"] }, { name: "Pouch of Feathers", dc: 15, tags: [] },
            { name: "Pouch of Scales", dc: 15, tags: [] }, { name: "Brain", dc: 20, tags: ["Edible"] },
            { name: "Skin", dc: 20, tags: [] }
        ],
        modifiers: {}
    },
    "Monstrosity": {
        skill: "Survival", assessment: "d20 + INT + Survival", harvest: "d20 + DEX + Survival",
        parts: [
            { name: "Antenna", dc: 5, tags: ["Edible"] }, { name: "Eye", dc: 5, tags: ["Edible"] },
            { name: "Flesh", dc: 5, tags: ["Edible"] }, { name: "Hair", dc: 5, tags: [] },
            { name: "Phial of Blood", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Antler", dc: 10, tags: [] },
            { name: "Beak", dc: 10, tags: [] }, { name: "Bone", dc: 10, tags: ["Edible"] },
            { name: "Egg", dc: 10, tags: ["Edible"] }, { name: "Fat", dc: 10, tags: ["Edible"] },
            { name: "Fin", dc: 10, tags: [] }, { name: "Horn", dc: 10, tags: [] },
            { name: "Pincer", dc: 10, tags: [] }, { name: "Pouch of Claws", dc: 10, tags: [] },
            { name: "Pouch of Teeth", dc: 10, tags: [] }, { name: "Talon", dc: 10, tags: [] },
            { name: "Tusk", dc: 10, tags: [] }, { name: "Heart", dc: 15, tags: ["Edible"] },
            { name: "Liver", dc: 15, tags: ["Edible"] }, { name: "Poison Gland", dc: 15, tags: [] },
            { name: "Pouch of Feathers", dc: 15, tags: [] }, { name: "Pouch of Scales", dc: 15, tags: [] },
            { name: "Stinger", dc: 15, tags: [] }, { name: "Tentacle", dc: 15, tags: [] },
            { name: "Chitin", dc: 20, tags: [] }, { name: "Pelt", dc: 20, tags: [] }
        ],
        modifiers: {
            "Mirrormic": { parts: [{ name: "Reflective Membrane", dc: 15, tags: [] }] },
            "Swarm of Baby Mimics": { parts: [{ name: "Mimic Adhesive", dc: 12, tags: ["Fluid"] }] },
            "Emaciated Tavern Mimic Brain": { parts: [{ name: "Grey Matter", dc: 15, tags: [] }] },
            "Tavern Mimic Brain": { parts: [{ name: "Grey Matter", dc: 18, tags: [] }] },
            "Nourished Tavern Mimic Brain": { parts: [{ name: "Grey Matter", dc: 20, tags: [] }] },
            "Tavern Mimic (Boss)": { 
                parts: [
                    { name: "Pouch of Teeth", dc: 10, tags: ["Unique"] }, 
                    { name: "Tongue", dc: 15, tags: ["Unique", "Edible"] }, 
                    { name: "Stomach", dc: 15, tags: ["Unique"] },
                    { name: "Brain", dc: 20, tags: ["Unique"] },
                    { name: "Skin", dc: 20, tags: ["Unique"] }
                ] 
            }
        }
    },
    "Ooze": {
        skill: "Nature", assessment: "d20 + INT + Nature", harvest: "d20 + DEX + Nature",
        parts: [
            { name: "Phial of Acid", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Phial of Mucus", dc: 10, tags: ["Edible", "Fluid"] },
            { name: "Vesicle", dc: 15, tags: ["Edible"] }, { name: "Membrane", dc: 20, tags: [] }
        ],
        modifiers: {
            "Tetrahedrooze": { parts: [{ name: "Mutating Gel", dc: 10, tags: ["Fluid"] }] },
            "Hexahedrooze": { parts: [{ name: "Mutating Gel", dc: 13, tags: ["Fluid"] }] },
            "Octahedrooze": { parts: [{ name: "Mutating Gel", dc: 15, tags: ["Fluid"] }] },
            "Decahedrooze": { parts: [{ name: "Mutating Gel", dc: 17, tags: ["Fluid"] }] },
            "Dodecahedrooze": { parts: [{ name: "Mutating Gel", dc: 19, tags: ["Fluid"] }] },
            "Icosahedrooze": { parts: [{ name: "Mutating Gel", dc: 25, tags: ["Fluid"] }] },
            "Polyhedrooze (Boss)": { 
                parts: [
                    { name: "Gooey Wishbone", dc: 5, tags: ["Unique"] }, 
                    { name: "Phial of Acid", dc: 5, tags: ["Unique", "Fluid"] }, 
                    { name: "Phial of Mucus", dc: 10, tags: ["Unique", "Edible", "Fluid"] },
                    { name: "Vesicle", dc: 15, tags: ["Unique"] },
                    { name: "Membrane", dc: 20, tags: ["Unique"] }
                ] 
            }
        }
    },
    "Plant": {
        skill: "Nature", assessment: "d20 + INT + Nature", harvest: "d20 + DEX + Nature",
        parts: [
            { name: "Phial of Sap", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Tuber", dc: 5, tags: ["Edible"] },
            { name: "Bundle of Roots", dc: 10, tags: ["Edible"] }, { name: "Phial of Wax", dc: 10, tags: ["Edible", "Fluid"] },
            { name: "Pouch of Hyphae", dc: 10, tags: ["Edible"] }, { name: "Pouch of Leaves", dc: 10, tags: [] },
            { name: "Pouch of Seeds", dc: 10, tags: [] }, { name: "Poison Gland", dc: 15, tags: ["Edible"] },
            { name: "Pouch of Pollen", dc: 15, tags: ["Edible", "Volatile"], ruptureType: "Sneeze/Choke Cloud", ruptureSave: "DC 15 CON (See Statblock for Effect)" },
            { name: "Pouch of Spores", dc: 15, tags: ["Edible", "Volatile"], ruptureType: "Spore Cloud", ruptureSave: "DC 15 CON (See Statblock for Effect)" },
            { name: "Bark", dc: 20, tags: ["Edible"] }, { name: "Membrane", dc: 20, tags: ["Edible"] }
        ],
        modifiers: {}
    },
    "Undead": {
        skill: "Medicine", assessment: "d20 + INT + Medicine", harvest: "d20 + DEX + Medicine",
        parts: [
            { name: "Bone", dc: 5, tags: ["Edible"] }, { name: "Eye", dc: 5, tags: ["Edible"] },
            { name: "Phial of Congealed Blood", dc: 5, tags: ["Edible", "Fluid"] }, { name: "Marrow", dc: 10, tags: ["Edible"] },
            { name: "Pouch of Teeth", dc: 10, tags: [] }, { name: "Rancid Fat", dc: 10, tags: ["Edible"] },
            { name: "Ethereal Ichor", dc: 15, tags: ["Edible", "Fluid"] }, { name: "Undying Flesh", dc: 15, tags: ["Edible"] },
            { name: "Undying Heart", dc: 20, tags: ["Edible", "Volatile"], ruptureType: "Necrotic Pulse", ruptureSave: "DC 15 CON (See Statblock for Damage)" }
        ],
        modifiers: {
            "Mummified Immortal": { parts: [{ name: "Immortal Wrappings", dc: 15, tags: [] }, { name: "Preserved Heart", dc: 20, tags: [] }] }
        }
    }
};
// ── Ingredient Data ────────────────────────────────────────────────────────
// Canonical source for all edible component mechanics and flavour text.
// Keyed by part type → creature type → { buff, scaling, flavour }
// buff:    mechanical effect (short, display-ready)
// scaling: rarity scaling notes where applicable (string or null)
// flavour: in-world culinary/lore description for player-facing tools
//
// Parts with a single universal buff use a top-level { buff, scaling, flavour }
// Parts with per-type variation use { [CreatureType]: { buff, scaling, flavour } }

const ingredientData = {

    Blood: {
        _universal: true,
        buff: "The first time each turn you hit a [T] with an attack, it deals bonus damage of the attack's type.",
        scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
        flavour: {
            Aberration: "Aberration blood carries a faint psychic charge that lingers even after the creature's death. Those who consume it feel a creeping hunger — a predator's instinct awakened toward whatever aberrant kin first shed that blood.",
            Beast: "Beast blood runs thick with the cold fury of a natural hunter. Ingesting it briefly rewires your instincts, and for a few hours your strikes against familiar prey carry the weight of a lifetime's practice.",
            Celestial: "Celestial blood blazes with divine light even in a pan. It smells of ozone and fresh linen, and those who eat it describe a radiant warmth that sharpens their edge against creatures of holy interest.",
            Construct: "Construct blood is often a viscous alchemical fluid or charged brine. It crackles faintly against the tongue and leaves the body primed to discharge raw force against its manufactured kin.",
            Dragon: "Dragon blood sears going down and leaves a metallic aftertaste that clings for hours. The elemental charge it carries seeps into every swing — those who taste it strike with the same fury the dragon once breathed.",
            Fey: "Fey blood is mercurial and sweet, shifting colour in the pan. It smells of crushed herbs and old forest. Those who consume it find themselves uncannily sharp against the fey's nearest cousins.",
            Fiend: "Fiend blood chars the tongue slightly and carries the sulphurous bite of the lower planes. The fire it kindles doesn't leave the body quickly — it finds its way into every blow against the infernal.",
            Giant: "Giant blood is heavy and iron-rich, flooding the body with a warmth that borders on feverish. It carries the elemental affinity of the giant who bore it, and your strikes against them hit with the same elemental current.",
            Humanoid: "Humanoid blood has no inherent magical potency — but when harvested from the rare specimen who carries a spark of the arcane, that charge is undeniable. It sharpens instincts against those of similar bearing.",
            Monstrosity: "Monstrosity blood is thick, often dark, and carries the resonance of a creature evolved purely for predation. It turns your strikes thunderous against those of its own terrible kind.",
            Ooze: "Ooze 'blood' is more of a caustic secretion that barely qualifies as fluid. Alchemically treated, it imparts a mild acidic charge that lingers in the muscles, making blows against oozes land with stinging precision.",
            Plant: "Plant sap, when harvested from a magical specimen, carries a woody bitterness and the faint smell of pollen. It primes the body's strikes with a quiet vegetative fury.",
            Undead: "Undead blood is cold, syrupy, and faintly luminescent. Most chefs recommend heavy seasoning. The necrotic energy it carries seeps into your attacks against the walking dead."
        }
    },

    Bone: {
        _universal: false,
        Aberration: {
            buff: "Advantage on saving throws against the Stunned condition.",
            scaling: null,
            flavour: "Aberration bones are often twisted, asymmetrical, and oddly warm to the touch. Rendered into a broth, they leave the mind feeling guarded — like a door quietly shut against foreign intrusion."
        },
        Beast: {
            buff: "Advantage on saving throws against the Blinded condition.",
            scaling: null,
            flavour: "Beast bones are dense and richly marrow-filled. The broth they produce is hearty and grounding, and those who consume it find their eyes stay clear and open long after the meal."
        },
        Celestial: {
            buff: "Gain temporary hit points at the start of each minute.",
            scaling: "Uncommon: 1d6 | Rare: 2d6 | Very Rare: 3d6 | Legendary: 4d6",
            flavour: "Celestial bones are luminous and faintly warm to the touch. The broth they make practically glows, and every sip feels like a small restoration — the body's reserves quietly refilled, minute by minute."
        },
        Construct: {
            buff: "Advantage on saving throws against gaining levels of Exhaustion.",
            scaling: null,
            flavour: "Construct bones — rods, struts, and ceramic spars — must be ground fine before cooking. The resulting broth is mineral-sharp and oddly energising, fending off the weariness that comes from long exertion."
        },
        Dragon: {
            buff: "Advantage on saving throws against the Frightened condition.",
            scaling: null,
            flavour: "Dragon bones carry decades of elemental charge. A broth made from them smells of the dragon's breath type and leaves a draconic stubbornness in the bones — fear finds less purchase."
        },
        Elemental: {
            buff: "Advantage on saving throws against extreme weather and temperature.",
            scaling: null,
            flavour: "Elemental bones are the crystalline or mineral cores of their host. Ground and cooked, they produce a broth that feels like armour against the world's extremes — cold, heat, storm."
        },
        Fey: {
            buff: "Advantage on saving throws against the Charmed condition.",
            scaling: null,
            flavour: "Fey bones are hollow, fine as porcelain, and smell of wildflowers when cooked. Their broth imparts a strange grace that resists the most insidious enchantments."
        },
        Fiend: {
            buff: "Advantage on saving throws against the Poisoned condition.",
            scaling: null,
            flavour: "Fiend bones char before they cook and smell of burning pitch. The broth is an acquired taste, but those who manage it find an iron resistance to the poisons that flow through fiendish veins."
        },
        Giant: {
            buff: "Advantage on saving throws against the Restrained condition.",
            scaling: null,
            flavour: "Giant bones are enormous and take half the day to properly render down. The result is a dense, strengthening stock — the body held firm against the forces that would pin it in place."
        },
        Humanoid: {
            buff: "Advantage on saving throws against diseases.",
            scaling: null,
            flavour: "Humanoid bones produce a modest, clear broth. What they lack in spectacle they make up for in resilience — the deep knowledge of mortal sickness locked in ordinary bone shields against disease."
        },
        Monstrosity: {
            buff: "Advantage on saving throws against the Paralysed condition.",
            scaling: null,
            flavour: "Monstrosity bones are often barbed or irregularly dense, the legacy of creatures built to survive things that would kill anything else. Their broth fortifies the nervous system against paralysis."
        },
        Plant: {
            buff: "Cannot be put to sleep by magic.",
            scaling: null,
            flavour: "Plant bone — the woody heartwood of a magical specimen — makes a pale, mildly sweet broth that holds a peculiar charm: it locks the mind against magical sleep."
        },
        Undead: {
            buff: "Immediately regain hit points. Advantage on saving throws against diseases.",
            scaling: "Uncommon: 1d4+1 HP | Rare: 2d4+2 HP | Very Rare: 3d4+3 HP | Legendary: 4d4+4 HP",
            flavour: "Undead bones carry necrotic energy that is difficult to fully cook out. The resulting broth is gamy and bitter, but powerful: the body immediately draws on it for a burst of restoration and a resilience against disease."
        }
    },

    Brain: {
        _universal: false,
        Aberration: {
            buff: "Communicate telepathically with creatures you can see within range (shared language required). Higher rarities add Advantage on Insight checks and Detect Thoughts.",
            scaling: "Uncommon: 30 ft. | Rare: 90 ft. (+Adv Insight at Very Rare) | Very Rare: 300 ft. | Legendary: 900 ft. (+Detect Thoughts)",
            flavour: "Aberration brains are often gelatinous, many-lobed, and quiver faintly even after harvesting. Eating one creates a peculiar awareness of the minds around you — thoughts not your own brush the edges of perception."
        },
        Celestial: {
            buff: "Gain a bonus to Charisma checks.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Celestial brains are smooth, dense, and smell faintly of incense. They sharpen social instincts dramatically — the right word comes easily, and a celestial's innate grace seeps into every interaction."
        },
        Construct: {
            buff: "Gain a bonus to Intelligence checks.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Construct 'brains' are logic cores, crystal matrices, or mechanical gearing. Dissolved and consumed, they impart a chilly precision to thought — calculations sharpen, patterns clarify."
        },
        Fey: {
            buff: "Gain a bonus to Wisdom checks.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Fey brains shimmer with iridescent pigment and smell of rain-on-stone. Consuming them heightens intuition dramatically — the world seems to whisper its secrets just slightly louder."
        },
        Fiend: {
            buff: "Gain a bonus to Charisma checks.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Fiend brains carry a cunning that resists simple destruction. They leave their consumers sharper socially, with the fiend's trademark persuasive intelligence leaking into every exchange."
        },
        Humanoid: {
            buff: "Gain a bonus to ability checks using one randomly determined skill.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Humanoid brains are the most ethically fraught ingredient in any chef's repertoire. What magical specimens carry, however, is genuine: a skill imprinted in neural architecture that transfers — briefly — to the consumer."
        }
    },

    Egg: {
        _universal: false,
        Aberration: {
            buff: "Grow a tentacle used to hold non-armour items or grapple a creature (uses tentacle's STR modifier).",
            scaling: "Uncommon: STR +0 | Rare: STR +2 | Very Rare: STR +4 | Legendary: STR +6",
            flavour: "Aberration eggs are usually asymmetrical and covered in a translucent membrane through which the contents shift unpleasantly. Eating one causes temporary morphological changes — most notably an extra limb that feels surprisingly your own."
        },
        Beast: {
            buff: "Advantage on saving throws against environmental effects (GM's discretion — adapts to current biome).",
            scaling: null,
            flavour: "Beast eggs are familiar in form but suffused with wild magic. Consuming one triggers a subtle bodily adaptation — fur, scales, glands — whatever the surrounding environment demands."
        },
        Dragon: {
            buff: "Grow a fanged maw natural weapon. Hit deals piercing damage + STR modifier instead of normal unarmed damage.",
            scaling: "Uncommon: 1d6 | Rare: 1d8 | Very Rare: 1d10 | Legendary: 1d12",
            flavour: "Dragon eggs crackle faintly when cracked and smell of their parent's breath type. Eating one causes the jaw to broaden and harden temporarily — an asset in close combat."
        },
        Fey: {
            buff: "Under the effects of the Chameleon Skin spell — shimmer while standing still, becoming hard to see.",
            scaling: null,
            flavour: "Fey eggs are translucent and shimmer with bioluminescence that pulses gently even after cooking. Consuming them coaxes the body's surface into a constant low-level shimmer, making you very difficult to track visually."
        },
        Humanoid: {
            buff: "Gain a swimming or flying speed.",
            scaling: "Uncommon: 30 ft. swim | Rare: 45 ft. swim | Very Rare: 15 ft. fly | Legendary: 30 ft. fly",
            flavour: "Humanoid eggs from magically gifted individuals carry a blueprint for physical transformation. The body reads it and adapts — adding swimming or flying capacity that lasts for hours."
        },
        Monstrosity: {
            buff: "Grow scales granting a new AC calculation. Use this if it exceeds your current AC.",
            scaling: "Uncommon: 12 + Dex mod | Rare: 13 + Dex mod | Very Rare: 14 + Dex mod | Legendary: 15 + Dex mod",
            flavour: "Monstrosity eggs are tough-shelled and hard to crack. What's inside is worth the effort: the body reads the morphological instructions within and grows scales that harden the outer defenses."
        }
    },

    Eye: {
        _universal: false,
        Aberration: {
            buff: "Under the effects of the Detect Magic spell.",
            scaling: "Uncommon: 10 ft. | Rare: 20 ft. | Very Rare: 60 ft. | Legendary: 180 ft.",
            flavour: "Aberration eyes are often multifaceted, wet, and intensely unsettling to handle. They carry a residual magical charge that, once consumed, manifests as a constant awareness of nearby enchantment."
        },
        Beast: {
            buff: "Gain a bonus to Perception checks.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Beast eyes are clear and sharp, built for survival. Cooking them produces a mild, mineral taste, and those who consume them find their own senses honing to match a predator's acuity."
        },
        Celestial: {
            buff: "Under the effects of the Detect Evil and Good spell.",
            scaling: "Uncommon: 10 ft. | Rare: 20 ft. | Very Rare: 60 ft. | Legendary: 180 ft.",
            flavour: "Celestial eyes are pale, almost colourless, and feel warm in the hand. Consuming them imparts an awareness of moral alignments nearby — good and evil become almost visible."
        },
        Dragon: {
            buff: "Gain a bonus to Intimidation checks.",
            scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4",
            flavour: "Dragon eyes are vivid, vertically slit, and carry the predator's imperious gaze even in death. Eating them grants a fraction of that authority — a look that makes creatures reconsider whether they want any part of this fight."
        },
        Elemental: {
            buff: "Know the location of elementals within range (unless protected from divination).",
            scaling: "Uncommon: 10 ft. | Rare: 20 ft. | Very Rare: 60 ft. | Legendary: 180 ft.",
            flavour: "Elemental eyes are often crystalline or composed of the elemental's primary material. Consuming them creates a low-level elemental awareness — nearby elementals become impossible to miss."
        },
        Fey: {
            buff: "Under the effects of the See Invisibility spell.",
            scaling: "Uncommon: 10 ft. | Rare: 20 ft. | Very Rare: 60 ft. | Legendary: 180 ft.",
            flavour: "Fey eyes shimmer with a faint inner light and smell of wildflowers. Consuming them temporarily grants the ability to perceive invisible creatures — a gift the fey use to catch each other in their games."
        },
        Fiend: {
            buff: "See normally in dim light and darkness, both magical and nonmagical.",
            scaling: "Uncommon: 10 ft. | Rare: 20 ft. | Very Rare: 60 ft. | Legendary: 180 ft.",
            flavour: "Fiend eyes are dark, with pupils that swallow almost all the iris. They carry a sight tuned to the deep dark of the lower planes — consuming them grants that same penetrating vision."
        },
        Monstrosity: {
            buff: "Gain Darkvision, or increase existing Darkvision range.",
            scaling: "Uncommon: 30 ft. or +15 ft. | Rare: 60 ft. or +30 ft. | Very Rare: 90 ft. or +45 ft. | Legendary: 120 ft. or +60 ft.",
            flavour: "Monstrosity eyes are varied in form but universal in function: they see in the dark. Whatever architectural adaptations let them do so transfer partially to those who eat them."
        },
        Undead: {
            buff: "Know the location of undead within range (unless protected from divination).",
            scaling: "Uncommon: 10 ft. | Rare: 20 ft. | Very Rare: 60 ft. | Legendary: 180 ft.",
            flavour: "Undead eyes carry the remnant of a soul's final sensation, and that includes an uncanny awareness of their own kind. Consuming them creates a quiet radar for undead in the vicinity."
        }
    },

    Fat: {
        _universal: false,
        Aberration: {
            buff: "Roll a die and subtract the result from Psychic damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Aberration fat is dense, slightly luminescent, and smells faintly of ozone. Rendered down, it coats the body's nervous system against the psychic intrusions aberrations are famous for."
        },
        Beast: {
            buff: "Roll a die and subtract the result from Cold damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Beast fat is rich, clean, and excellent for high-temperature cooking. Beyond its culinary value, it lines the body's extremities against cold — the insulation of a creature built for harsh climates."
        },
        Celestial: {
            buff: "Roll a die and subtract the result from Radiant damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Celestial fat is pale gold and smells of warm light. It melts at a low temperature and carries a radiant gentleness — attenuating the impact of holy damage that would otherwise be overwhelming."
        },
        Construct: {
            buff: "Roll a die and subtract the result from Lightning damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Construct fat — lubricating fluid or conductive gel — is an unusual cooking ingredient. Emulsified correctly, it grounds the body against electrical charge with remarkable efficiency."
        },
        Dragon: {
            buff: "Roll a die and subtract from damage matching the Dragon's Breath type. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Dragon fat carries elemental identity all the way to its molecular structure. Rendered down, it coats the body against the same damage type the dragon would have dealt — a culinary version of the dragon's own resistance."
        },
        Fey: {
            buff: "Roll a die and subtract the result from Poison damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Fey fat smells of forest and petrichor. Light and fragrant in the pan, it leaves the body oddly resistant to the poisons that fey creatures both carry and are vulnerable to."
        },
        Fiend: {
            buff: "Roll a die and subtract the result from Fire damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Fiend fat chars slightly and gives off a sulphurous smoke. Those who manage to eat it properly find an unexpected payoff — a resistance to fire that makes fiendish cookery feel almost worth it."
        },
        Giant: {
            buff: "Roll a die and subtract from the Giant's associated elemental damage type. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Giant fat is enormous in quantity and varies by giant subtype. Properly seasoned, it carries the elemental flavour of its host — and that elemental affinity extends to protection against the same."
        },
        Monstrosity: {
            buff: "Roll a die and subtract the result from Thunder damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Monstrosity fat is dense and slightly gamey. It renders slowly and rewards patience — those who eat it gain a muffling effect against the thunderous forces monstrosities often wield."
        },
        Ooze: {
            buff: "Roll a die and subtract the result from Acid damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Ooze 'fat' — technically a lipid-adjacent secretion — is notoriously difficult to work with. Correctly treated, it imparts a resistance to acid that is, frankly, miraculous given the source."
        },
        Plant: {
            buff: "Roll a die and subtract the result from Poison damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Plant fat (seed oils, magical resin) carries a gentle poison-resistance — evolved to ward off the creatures that would otherwise graze on them. It tastes of herbs and transfers that wariness to the consumer."
        },
        Undead: {
            buff: "Roll a die and subtract the result from Necrotic damage taken. Occurs before resistance.",
            scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
            flavour: "Undead fat is cold, grey, and carries a chill that lingers in the pan. What it produces is a quiet resistance to necrotic forces — the eater absorbing a measure of the undead's own indifference to death."
        }
    },

    Flesh: {
        _universal: false,
        Aberration: { buff: "First attack each turn that hits deals +X Psychic bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Aberration flesh is often soft, strangely textured, and carries a psychic resonance that survives cooking. First contact each encounter crackles with a mental charge that the target feels distinctly." },
        Beast:      { buff: "First attack each turn that hits deals +X Cold bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Beast flesh is the most familiar on the palate — lean, clean, and honest. The cold fury of a natural predator lingers in it, and that cold finds its way into strikes against prey." },
        Celestial:  { buff: "First attack each turn that hits deals +X Radiant bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Celestial flesh is luminous and faintly warm even after cooling. It carries a radiant charge that transfers to the first attack each turn — a brief flare of holy force." },
        Construct:  { buff: "First attack each turn that hits deals +X Lightning bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Construct flesh — synthetic fibre, alchemical composite, or enchanted metal — doesn't behave like other meats. Its electrical charge, however, is undeniable and discharges cleanly on first contact each turn." },
        Dragon:     { buff: "First attack each turn that hits deals +X bonus damage matching the Dragon's Breath type.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Dragon flesh carries the elemental identity of its parent all the way to the muscle fibre. Eating it is an experience, and the elemental charge it imparts to your attacks is genuinely terrifying." },
        Fey:        { buff: "First attack each turn that hits deals +X Poison bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Fey flesh is delicate, faintly sweet, and entirely too pleasant for something so morally ambiguous. It carries a poison-laced magical resonance that lends a subtle sting to each opening strike." },
        Fiend:      { buff: "First attack each turn that hits deals +X Fire bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Fiend flesh is intensely flavoured and requires seasoning to approach palatable. The fire it carries, however, transfers neatly — each first attack of a turn scorches just slightly more than it should." },
        Giant:      { buff: "First attack each turn that hits deals +X bonus damage matching the Giant's element.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Giant flesh is abundant and rich with elemental charge. Every giant has an affinity, and that affinity follows the meat — the first blow each turn lands with that elemental weight behind it." },
        Monstrosity:{ buff: "First attack each turn that hits deals +X Thunder bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Monstrosity flesh is dense, fibrous, and varies wildly in flavour. What doesn't vary is the thunder it carries — monstrosities are built loud, and their flesh transmits that." },
        Plant:      { buff: "First attack each turn that hits deals +X Acid bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Magical plant flesh (fruits, tubers, dense stems) carries an acidic bite that survives cooking. The first attack each turn plants a small corrosive sting that has no business being this effective." },
        Undead:     { buff: "First attack each turn that hits deals +X Necrotic bonus damage.", scaling: "Uncommon: +1 | Rare: +2 | Very Rare: +3 | Legendary: +4", flavour: "Undead flesh requires careful preparation and even more careful mental preparation. What it provides, however, is a necrotic charge that lines every opening strike with the cold authority of death itself." }
    },

    Heart: {
        _universal: true,
        buff: "Know the direction (not distance) of living [T] hearts within range. Blocked by 1 ft. stone, 1 in. metal, lead sheet, or 3 ft. wood/dirt.",
        scaling: "Uncommon: 60 ft. | Rare: 240 ft. | Very Rare: 960 ft. | Legendary: 1 mile",
        flavour: {
            Aberration: "Aberration hearts are often multi-chambered and pulse independently of each other. Eating one creates a lingering resonance with creatures of the same origin — their hearts become audible at range, a slow rhythm in the deep.",
            Beast: "Beast hearts are warm, muscular, and vital. Eating one creates an intimate awareness of other beasts nearby — the heartbeats of wild things becoming perceptible as a compass.",
            Celestial: "Celestial hearts beat with a light that doesn't fully extinguish after death. Consuming one creates a gentle tuning to celestial presence — their direction becomes quietly, impossibly known.",
            Construct: "Construct 'hearts' — power cores, clockwork motors, gyroscopic engines — hum faintly even when removed. Consuming one creates an awareness of similar mechanisms operating in the vicinity.",
            Dragon: "Dragon hearts are enormous, layered with muscle, and carry elemental charge in their chambers. Eating one tunes the consumer to the presence of their kin — draconic hearts becoming detectable at surprising range.",
            Fey: "Fey hearts are small and perfectly formed, beating in complex rhythms. Eating one lends an awareness of fey-kind nearby — their mercurial presence sensed as a flicker at the edge of perception.",
            Fiend: "Fiend hearts are hot even in death and smell of brimstone. Consuming one creates an almost uncomfortably vivid awareness of fiendish hearts in the vicinity — pulling like a dark compass.",
            Giant: "Giant hearts are massive and deeply rhythmic. Consuming one creates a sonar-like awareness of other giants — their enormous hearts beating at a frequency you can now feel in your chest.",
            Humanoid: "Humanoid hearts carry emotional memory as much as anything magical. Their resonance is subtle, but consuming one from a magical specimen creates an awareness of nearby humanoid presence.",
            Monstrosity: "Monstrosity hearts are often built to sustain extreme physical stress. Consuming one creates a faint tracking instinct — the pulse of other monstrosities registering like a second heartbeat.",
            Plant: "Magical plant 'hearts' — heartwood cores or central seed structures — pulse with slow vegetative rhythm. Consuming one extends a quiet awareness of other plant life within range.",
            Undead: "Undead hearts are cold and barely distinguishable from the surrounding tissue. What makes them remarkable is the residual soul-impression they carry — an uncanny radar for other undead."
        }
    },

    Liver: {
        _universal: true,
        buff: "When a [T] hits you with a melee attack, it takes necrotic damage. Once per turn.",
        scaling: "Uncommon: 1d4 | Rare: 1d6 | Very Rare: 1d8 | Legendary: 1d10",
        flavour: {
            Aberration: "Aberration livers process the psychic toxins of their host's diet, and that processing leaves a residue. When an aberration strikes you in melee, what leaks back is something between a chemical burn and a psionic rebuke.",
            Beast: "Beast livers are robust and rich, filtering the wild diet of predator and prey alike. The necrotic charge they leave in the body turns close-quarters aggression from beasts into a punishing two-way transaction.",
            Celestial: "Celestial livers filter the radiant excess of a holy diet. They are warm, luminous, and deeply strange to eat. What they leave behind redirects some of a celestial's own force back at it in melee.",
            Construct: "Construct 'livers' — filtration matrices, alchemical processing units — are cold and precise. When a construct lands a melee hit, the residue conducts back a sharp necrotic charge.",
            Dragon: "Dragon livers process the elemental surplus generated by a dragon's breath. Consuming one leaves the body charged — elemental in nature, necrotic in expression — and punishing against draconic melee attackers.",
            Fey: "Fey livers carry the mercurial toxins of a magical diet. Beautiful and faintly iridescent, they leave the consumer with a passive deterrent — fey melee strikers receive a dose of their own nature, returned as necrotic damage.",
            Fiend: "Fiend livers are heat-resistant, processing infernal energies the way a mortal liver handles alcohol. What they leave behind in the consumer is a kind of punishing aura — close infernal contact draws necrotic feedback.",
            Giant: "Giant livers are enormous and take significant preparation. What they produce is a deterrent effect against giant melee attacks — the elemental and necrotic energies mixing into a discouraging response.",
            Humanoid: "Humanoid livers from magically gifted individuals carry a faint resonance. Melee strikes from humanoids trigger a necrotic response in the consumer's body — a last-ditch biological defence.",
            Monstrosity: "Monstrosity livers filter the extraordinary stresses of a predator's diet. What remains transfers to the consumer as a passive deterrent — close attacks from monstrosities are answered with necrotic recoil.",
            Ooze: "Ooze livers — if that term can be applied to the filtering pseudoorgans of an amorphous creature — process acid efficiently. What they leave in the consumer answers ooze melee contact with a necrotic charge.",
            Plant: "Magical plant livers (nodular filtering structures in larger specimens) process environmental toxins efficiently. Consuming one leaves a passive necrotic response active against plant-based melee attackers."
        }
    },

    Spice: {
        _universal: false,
        Celestial: {
            buff: "Continuously under Feather Fall. At Rare+, also gain a flying speed.",
            scaling: "Uncommon: Feather Fall | Rare: Fly 15 ft. | Very Rare: Fly 30 ft. | Legendary: Fly 60 ft.",
            flavour: "Celestial spice is harvested from the residue of divine passage — a crystalline dust that smells of ozone and incense. At low potency it grants the graceful descent of feather fall; at higher concentrations, actual flight."
        },
        Elemental: {
            buff: "Cast a randomly determined elemental cantrip at will (roll d6: acid splash, concussion, fire bolt, ray of frost, shocking grasp, water whip). Caster level increases with rarity.",
            scaling: "Uncommon: Base level | Rare: 5th-level | Very Rare: 11th-level | Legendary: 17th-level",
            flavour: "Elemental spice is the distilled primordial residue of an elemental's dissolution. Properly handled, it grants the consumer a cantrip drawn randomly from the elemental lexicon — fire, frost, lightning, acid — to cast at will."
        },
        Fey: {
            buff: "Under the effects of Detect Evil and Good. At Rare+, also under Detect Thoughts.",
            scaling: "Uncommon: Detect Evil & Good | Rare: +Detect Thoughts (DC 15) | Very Rare: DC 16 | Legendary: DC 17",
            flavour: "Fey spice is pixie dust, pollen, and glamour compressed into something that smells of a garden at dusk. It opens the mind to what's hidden — first to the presence of evil and good, then at higher potency to thoughts themselves."
        },
        Fiend: {
            buff: "Gain temporary hit points at the start of each minute.",
            scaling: "Uncommon: 2d4 | Rare: 4d4 | Very Rare: 6d4 | Legendary: 8d4",
            flavour: "Fiend spice carries the concentrated heat of the lower planes — a fine powder that smells of sulphur and stings the sinuses. What it gives back is temporary hit points, replenishing at the start of each minute like a slow burn."
        },
        Plant: {
            buff: "Under the effects of the Speak with Plants spell.",
            scaling: null,
            flavour: "Plant spice is pollen, spore, and sap rendered into a usable form. It carries the quiet intelligence of the forest — and the ability to speak with the plants that produced it."
        },
        Undead: {
            buff: "Maximum and current hit points increase.",
            scaling: "Uncommon: 2d4 | Rare: 4d4 | Very Rare: 6d4 | Legendary: 8d4",
            flavour: "Undead spice is harvested from the necrotic residue of undead dissolution. It smells of cold stone and old libraries. What it provides is unsettling but undeniably effective — a boost to maximum and current hit points."
        }
    },

    Tentacle: {
        _universal: true,
        buff: "Advantage on checks made to escape a grapple.",
        scaling: null,
        flavour: {
            Any: "Tentacles from aberrations, monstrosities, and stranger things share one property regardless of origin: powerful, flexible musculature built to seize and hold. Consuming one briefly rewires your own muscle memory for grappling — escaping a hold becomes instinctive."
        }
    }

};


const variableStats = [
    { aplMin: 1,  aplMax: 2,  vdc: 11, vmod: 3,  vdamFlat: 2,  vdamDice: "1d4"  },
    { aplMin: 3,  aplMax: 4,  vdc: 12, vmod: 4,  vdamFlat: 3,  vdamDice: "1d6"  },
    { aplMin: 5,  aplMax: 6,  vdc: 13, vmod: 5,  vdamFlat: 5,  vdamDice: "2d4"  },
    { aplMin: 7,  aplMax: 8,  vdc: 14, vmod: 6,  vdamFlat: 7,  vdamDice: "2d6"  },
    { aplMin: 9,  aplMax: 11, vdc: 15, vmod: 7,  vdamFlat: 10, vdamDice: "3d6"  },
    { aplMin: 12, aplMax: 14, vdc: 16, vmod: 8,  vdamFlat: 14, vdamDice: "4d6"  },
    { aplMin: 15, aplMax: 17, vdc: 17, vmod: 9,  vdamFlat: 21, vdamDice: "6d6"  },
    { aplMin: 18, aplMax: 20, vdc: 18, vmod: 10, vdamFlat: 28, vdamDice: "8d6"  }
];
