const itemData = {
  // --- ENCHANTING (Wondrous Items, Wands, Staves, Clothing) ---
  "Amulet of Incineration": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "2000 gp",
    components: ["1x Robust Essence", "1x Entropic Flame Heart"],
    drakkenheim_recipe: "[Animus] Elemental, [Bones] Spine, [Dust] Entropic Flame Dust, [Fluid] Monster Blood",
    tags: ["Drakkenheim"],
    stats: "While wearing this amulet, you have resistance to fire damage. In addition, when you cast a spell that deals fire damage, you can add your spellcasting ability modifier to one damage roll of that spell."
  },
  "Amulet of Primal Wisdom": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "2000 gp",
    components: ["1x Robust Essence", "1x Predatory Bloom"],
    drakkenheim_recipe: "[Animus] Plant, [Bones] Stems, [Hair] Leaves, [Hide] Bark",
    tags: ["Drakkenheim"],
    stats: "Your Wisdom score increases by 2, to a maximum of 20. Additionally, you have advantage on Wisdom (Survival) checks made to track creatures through natural terrain."
  },
  "Bracers of Arc Lightning": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "2000 gp",
    components: ["1x Robust Essence", "1x Elemental Essence"],
    drakkenheim_recipe: "[Animus] Elemental, [Hide] Skin, [Dust] Elemental Dust, [Fluid] Elemental Fluid",
    tags: ["Drakkenheim"],
    stats: "While wearing these bracers, you can use an action to cast the Lightning Bolt spell (save DC 15). Once used, this property can't be used again until the next dawn."
  },
  "Executioner's Hood": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "1500 gp",
    components: ["1x Robust Essence", "1x Executioner's Blade Plate"],
    drakkenheim_recipe: "[Animus] Construct, [Hide] Leather, [Fluid] Oil",
    tags: ["Drakkenheim"],
    stats: "While wearing this hood, you have advantage on Charisma (Intimidation) checks. Additionally, your melee weapon attacks deal an extra 1d6 damage to creatures that are Prone."
  },
  "Haze-Walker Boots": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Uncommon", attunement: "Yes",
    baseDC: 13, baseTime: 24, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "400 gp",
    components: ["1x Frail Essence", "1x Haze Husk Bones"],
    drakkenheim_recipe: "[Animus] Undead, [Hide] Skin, [Dust] Undead Dust",
    tags: ["Drakkenheim"],
    stats: "While wearing these boots, you ignore difficult terrain created by the Haze. You also have advantage on saving throws against effects that would increase your contamination level while traveling."
  },
  "Lantern of Bewildering": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Rare", attunement: "No",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "2500 gp",
    components: ["1x Robust Essence", "1x Warp Witch Lantern"],
    drakkenheim_recipe: "[Animus] Undead, [Fluid] Ectoplasm, [Dust] Undead Dust, [Fluid] Contaminated Ichor",
    tags: ["Drakkenheim"],
    stats: "This lantern sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that start their turn in the bright light must succeed on a DC 15 Intelligence saving throw or have the Bewildered condition until the start of their next turn."
  },
  "Scepter of the Octarine King": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Very Rare", attunement: "Yes",
    baseDC: 17, baseTime: 720, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "18000 gp",
    components: ["1x Potent Essence", "1x Heart of the Starved King"],
    drakkenheim_recipe: "[Animus] Undead, [Bones] Skull, [Fluid] Contaminated Ichor, [Dust] Undead Dust",
    tags: ["Drakkenheim"],
    stats: "This scepter has 10 charges. You can use an action to expend charges to cast the following spells: Blight (4 charges), Circle of Death (6 charges), or Ray of Enfeeblement (2 charges). It regains 1d6+4 charges daily at dawn."
  },
  "Staff of the Haze": {
    category: "Enchanting", type: "Staff", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "4000 gp",
    components: ["1x Robust Essence", "1x Living Deep Haze"],
    drakkenheim_recipe: "[Animus] Elemental, [Fluid] Contaminated Ichor, [Dust] Elemental Dust",
    tags: ["Drakkenheim"],
    stats: "While holding this staff, you are immune to the effects of the Haze. You can use an action to cast Fog Cloud or Gaseous Form using the staff's magic. Once used, Gaseous Form cannot be cast again until the next dawn."
  },
  "Wand of Jinxes": {
    category: "Enchanting", type: "Wand", rarity: "Rare", attunement: "No",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "2500 gp",
    components: ["1x Robust Essence", "1x Spectral Ectoplasm"],
    drakkenheim_recipe: "[Animus] Any Animus, [Fluid] Goopy Ooze, [Hair] Hair from an Undead, [Hide] Bark",
    tags: ["Drakkenheim"],
    stats: "This wand has 7 charges. While holding it, you can use a reaction when a creature you can see within 60 feet makes an attack roll or saving throw to expend 1 charge and subtract 1d4 from the result."
  },
  "Wand of the Precocious Apprentice": {
    category: "Enchanting", type: "Wand", rarity: "Uncommon", attunement: "No",
    baseDC: 13, baseTime: 24, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "500 gp",
    components: ["1x Frail Essence", "1x Haze Husk Bones"],
    drakkenheim_recipe: "[Animus] Any, [Bones] Bones from an Undead, [Dust] Fey Dust, [Fluid] Ectoplasm",
    tags: ["Drakkenheim"],
    stats: "Once per turn when you deal damage to a creature using a cantrip while holding this wand, one target of that cantrip takes an extra 1d4 damage of the type dealt by the spell."
  },
  "Wand of the Arcane Anomaly": {
    category: "Enchanting", type: "Wand", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "3500 gp",
    components: ["1x Robust Essence", "1x Siphoning Eye"],
    drakkenheim_recipe: "[Animus] Aberration, [Fluid] Contaminated Ichor, [Dust] Delerium Dust, [Organs] Brain",
    tags: ["Drakkenheim"],
    stats: "This wand has 7 charges. You can use an action to expend 1 charge to cast a spell. Roll a d20; on a 1, you trigger a random Arcane Anomaly in addition to the spell effect. The wand regains 1d6+1 charges at dawn."
  },
  "Web-Strider Cloak": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Uncommon", attunement: "Yes",
    baseDC: 13, baseTime: 24, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "600 gp",
    components: ["1x Frail Essence", "1x Ethereal Spinneret"],
    drakkenheim_recipe: "[Animus] Monstrosity, [Hide] Chitin, [Fluid] Monster Blood",
    tags: ["Drakkenheim"],
    stats: "While wearing this cloak, you have a climbing speed equal to your walking speed. You can also move across vertical surfaces and ceilings while leaving your hands free."
  },
  "Haze-Filter Mask": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Uncommon", attunement: "No",
    baseDC: 13, baseTime: 24, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "500 gp",
    components: ["1x Frail Essence", "1x Mutant Rat Tail"],
    drakkenheim_recipe: "[Animus] Any, [Hide] Skin, [Dust] Elemental Dust, [Fluid] Chemical Solution",
    tags: ["Drakkenheim"],
    stats: "While wearing this mask, you have advantage on saving throws against the effects of the Haze and against inhaled poisons or gases."
  },
  "Soul-Catcher Net": {
    category: "Enchanting", type: "Weapon (Net)", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "2500 gp",
    components: ["1x Robust Essence", "1x Gravekeeper's Lantern"],
    drakkenheim_recipe: "[Animus] Undead, [Fluid] Ectoplasm, [Bones] Spine, [Hide] Skin",
    tags: ["Drakkenheim"],
    stats: "A creature hit by this net is Restrained. If the creature is a Ghost or similar incorporeal undead, it cannot use its Etherealness or Incorporeal Movement traits while restrained by the net."
  },
  "Drakkenheim City Map (Enchanted)": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Uncommon", attunement: "No",
    baseDC: 13, baseTime: 24, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "300 gp",
    components: ["1x Frail Essence", "1x Graffiti Pigment"],
    drakkenheim_recipe: "[Animus] Construct, [Dust] Elemental Dust, [Fluid] Chemical Solution",
    tags: ["Drakkenheim"],
    stats: "While holding this map within the city of Drakkenheim, you always know your exact location. Additionally, the map highlights the nearest safe haven or faction stronghold you have discovered."
  },
  "Beholder-Eye Focus": {
    category: "Enchanting", type: "Wondrous Item", rarity: "Very Rare", attunement: "Yes",
    baseDC: 17, baseTime: 720, requiredCheck: "Spellcasting Ability (Survival)", marketValue: "15000 gp",
    components: ["1x Potent Essence", "1x Warped Eye Stalk"],
    drakkenheim_recipe: "[Animus] Aberration, [Organs] Eyes, [Fluid] Contaminated Ichor, [Hide] Skin",
    tags: ["Drakkenheim"],
    stats: "While holding this focus, you can use an action to shoot a random Eye Ray (as per the Warped Beholder stat block). Once used, this property cannot be used again until you finish a short or long rest."
  },

  // --- SMITHING (Weapons and Armor) ---
  "Blade of Retribution": {
    category: "Smithing", type: "Weapon (Any Sword)", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Strength (Smith's Tools)", marketValue: "2500 gp",
    components: ["1x Robust Essence", "1x Tower Dragon's Heart"],
    drakkenheim_recipe: "[Animus] Dragon, [Bones] Skull, [Hide] Scales, [Fluid] Monster Blood",
    tags: ["Drakkenheim"],
    stats: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. When a creature hits you with a melee attack, you can use your reaction to make one melee weapon attack against that creature with this blade."
  },
  "Delerium Dagger": {
    category: "Smithing", type: "Weapon (Dagger)", rarity: "Uncommon", attunement: "No",
    baseDC: 13, baseTime: 24, requiredCheck: "Strength (Smith's Tools)", marketValue: "500 gp",
    components: ["1x Frail Essence", "1x Delerium Geode Shard"],
    drakkenheim_recipe: "[Animus] Any, [Dust] Delerium Dust, [Fluid] Contaminated Ichor",
    tags: ["Drakkenheim"],
    stats: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. On a hit, the target takes an extra 1d4 necrotic damage."
  },
  "Ripper's Blade": {
    category: "Smithing", type: "Weapon (Greatsword)", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Strength (Smith's Tools)", marketValue: "2500 gp",
    components: ["1x Robust Essence", "1x Ripper Blade"],
    drakkenheim_recipe: "[Animus] Monstrosity, [Bones] Spine, [Fluid] Monster Blood, [Hide] Skin",
    tags: ["Drakkenheim"],
    stats: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you reduce a creature to 0 hit points with this weapon, you can move up to half your speed and make one additional attack as a bonus action."
  },
  "Whirling Bonesaw": {
    category: "Smithing", type: "Weapon (Greataxe)", rarity: "Very Rare", attunement: "Yes",
    baseDC: 17, baseTime: 720, requiredCheck: "Strength (Smith's Tools)", marketValue: "12000 gp",
    components: ["1x Potent Essence", "1x Ripper Blade"],
    drakkenheim_recipe: "[Animus] Any Animus, [Bones] Ribs, [Fluid] Elemental Fluid, [Hide] Plates",
    tags: ["Drakkenheim"],
    stats: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. Once on your turn when you hit a Bloodied creature using this weapon, you can make one additional attack with this weapon as part of the same action."
  },
  "Delerium Armor": {
    category: "Smithing", type: "Armor (Heavy)", rarity: "Very Rare", attunement: "Yes",
    baseDC: 17, baseTime: 720, requiredCheck: "Strength (Smith's Tools)", marketValue: "15000 gp",
    components: ["1x Potent Essence", "1x Delerium Geode Fragments"],
    drakkenheim_recipe: "[Animus] Any, [Hide] Plates, [Dust] Delerium Dust, [Fluid] Contaminated Ichor",
    tags: ["Drakkenheim"],
    stats: "While wearing this armor, you have resistance to necrotic damage. However, while you are attuned to the armor, you cannot remove contamination levels by any means other than a Purge Contamination spell or similar high-level magic."
  },
  "Garmyr Greataxe": {
    category: "Smithing", type: "Weapon (Greataxe)", rarity: "Uncommon", attunement: "No",
    baseDC: 13, baseTime: 24, requiredCheck: "Strength (Smith's Tools)", marketValue: "450 gp",
    components: ["1x Frail Essence", "1x Lord's Great-Antlers"],
    drakkenheim_recipe: "[Animus] Monstrosity, [Bones] Skull, [Fluid] Monster Blood",
    tags: ["Drakkenheim"],
    stats: "You gain a +1 bonus to attack and damage rolls made with this weapon. When you hit a creature with this weapon, you can use a bonus action to let out a terrifying howl; the target must succeed on a DC 12 Wisdom saving throw or be Frightened until the start of your next turn."
  },
  "Mace of the Murky Depths": {
    category: "Smithing", type: "Weapon (Mace)", rarity: "Rare", attunement: "Yes",
    baseDC: 15, baseTime: 168, requiredCheck: "Strength (Smith's Tools)", marketValue: "2000 gp",
    components: ["1x Robust Essence", "1x Corrosive Tentacle Stalk"],
    drakkenheim_recipe: "[Animus] Monstrosity, [Fluid] Acidic Bile, [Hide] Skin, [Bones] Ribs",
    tags: ["Drakkenheim"],
    stats: "You gain a +1 bonus to attack and damage rolls made with this weapon. On a hit, the target takes an additional 2d6 acid damage. While holding the mace, you can breathe underwater."
  },
  "Warded Plate": {
    category: "Smithing", type: "Armor (Plate)", rarity: "Rare", attunement: "No",
    baseDC: 15, baseTime: 168, requiredCheck: "Strength (Smith's Tools)", marketValue: "5000 gp",
    components: ["1x Robust Essence", "1x Stone-Scale Plates"],
    drakkenheim_recipe: "[Animus] Dragon, [Hide] Scales, [Bones] Ribs, [Fluid] Monster Blood",
    tags: ["Drakkenheim"],
    stats: "While wearing this armor, you have a +1 bonus to AC. Additionally, you have advantage on saving throws against being moved or knocked prone against your will."
  },
  "Shield of the Tower Guardian": {
    category: "Smithing", type: "Armor (Shield)", rarity: "Very Rare", attunement: "Yes",
    baseDC: 17, baseTime: 720, requiredCheck: "Strength (Smith's Tools)", marketValue: "8000 gp",
    components: ["1x Potent Essence", "1x Jewel-Encrusted Scales"],
    drakkenheim_recipe: "[Animus] Construct, [Hide] Metal Scales, [Bones] Plates, [Fluid] Oil",
    tags: ["Drakkenheim"],
    stats: "While holding this shield, you have a +2 bonus to AC. As a reaction when you or a creature within 5 feet is hit by a ranged spell attack, you can cause the shield to absorb the spell, neutralizing its effect. Once used, this property cannot be used again until the next dawn."
  },
  "Vampiric Rapier": {
    category: "Smithing", type: "Weapon (Rapier)", rarity: "Very Rare", attunement: "Yes",
    baseDC: 17, baseTime: 720, requiredCheck: "Strength (Smith's Tools)", marketValue: "14000 gp",
    components: ["1x Potent Essence", "1x Vampire Lord's Heart"],
    drakkenheim_recipe: "[Animus] Undead, [Fluid] Noble Vampire Blood, [Natural Weapons] Vampiric Fangs, [Hide] Skin",
    tags: ["Drakkenheim"],
    stats: "You gain a +2 bonus to attack and damage rolls made with this weapon. When you hit a creature with this weapon, you deal an extra 2d6 necrotic damage, and you regain hit points equal to the necrotic damage dealt."
  },
  "World-Ender's Plate": {
    category: "Smithing", type: "Armor (Plate)", rarity: "Legendary", attunement: "Yes",
    baseDC: 20, baseTime: 2160, requiredCheck: "Strength (Smith's Tools)", marketValue: "50000 gp",
    components: ["1x Mythical Essence", "1x Delerium Heart Fragment"],
    drakkenheim_recipe: "[Animus] Aberration, [Hide] Mutated Skin, [Dust] Delerium Dust, [Fluid] Contaminated Ichor",
    tags: ["Drakkenheim"],
    stats: "While wearing this armor, you have a +3 bonus to AC, and you are immune to necrotic and poison damage. Additionally, you are immune to the effects of the Haze and cannot gain levels of contamination while wearing the plate."
  },

  // --- ALCHEMY (Potions and Consumables) ---
  "Aqua Delerium": {
    category: "Alchemy", type: "Potion", rarity: "Rare", attunement: "No",
    baseDC: 15, baseTime: 24, requiredCheck: "Intelligence (Alchemist's Supplies)", marketValue: "500 gp",
    components: ["1x Robust Essence", "1x Contaminated Ichor"],
    drakkenheim_recipe: "[Animus] Aberration, [Fluid] Contaminated Ichor, [Fluid] Goopy Ooze",
    tags: ["Drakkenheim"],
    stats: "Consumable. When you drink this potion, you regain 4d4 + 4 hit points. However, you must succeed on a DC 13 Constitution saving throw or gain one level of contamination."
  },
  "Delerium Grenade": {
    category: "Alchemy", type: "Consumable", rarity: "Uncommon", attunement: "No",
    baseDC: 13, baseTime: 24, requiredCheck: "Intelligence (Alchemist's Supplies)", marketValue: "150 gp",
    components: ["1x Frail Essence", "1x Bioluminescent Spores"],
    drakkenheim_recipe: "[Animus] Any, [Dust] Delerium Dust, [Fluid] Contaminated Ichor",
    tags: ["Drakkenheim"],
    stats: "As an action, you can throw this grenade at a point within 60 feet. Each creature within a 10-foot radius must make a DC 13 Dexterity saving throw, taking 3d6 force damage and gaining one level of contamination on a failed save."
  },
  "Philter of Purification": {
    category: "Alchemy", type: "Potion", rarity: "Rare", attunement: "No",
    baseDC: 15, baseTime: 24, requiredCheck: "Intelligence (Alchemist's Supplies)", marketValue: "1000 gp",
    components: ["1x Robust Essence", "1x Ectoplasmic Marrow"],
    drakkenheim_recipe: "[Animus] Any, [Fluid] Purified Water, [Fluid] Contaminated Ichor, [Dust] Undead Dust",
    tags: ["Drakkenheim"],
    stats: "When you drink this potion, you lose 1d4 levels of contamination. If this reduces your contamination to 0, you also regain 4d8 hit points."
  }
};