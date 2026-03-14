const bestiaryData = [
  {
    "name": "Aboling",
    "metadata": { "size": "Tiny", "type": "Aberration", "tags": [], "alignment": "Neutral", "cr": "1/8" },
    "combat_stats": { "ac": "12", "hp": "7 (2d4 + 2)", "speed": "5 ft., swim 30 ft." },
    "ability_scores": { "STR": 6, "DEX": 14, "CON": 12, "INT": 12, "WIS": 10, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "darkvision 60 ft., passive Perception 10", "languages": "Deep Speech, telepathy 60 ft."
    },
    "traits": [],
    "actions": [
      { "name": "Tentacle", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Broodling",
    "metadata": { "size": "Tiny", "type": "Aberration", "tags": [], "alignment": "Lawful Evil", "cr": "1/2" },
    "combat_stats": { "ac": "12", "hp": "13 (3d4 + 6)", "speed": "10 ft., swim 30 ft." },
    "ability_scores": { "STR": 6, "DEX": 14, "CON": 15, "INT": 3, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "charmed",
      "senses": "blindsight 30 ft., passive Perception 10", "languages": "telepathy 120 ft., understands Deep Speech but can't speak"
    },
    "traits": [
      { "name": "Amphibious", "description": "The broodling can breathe air and water." },
      { "name": "Hive Mind", "description": "Broodlings' minds connect to other broodlings within 5 feet of them, forming a chain of thought. The broodling gains a +3 bonus to Intelligence checks and saving throws, and to its Entrance save DC for each other broodling in such a chain." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The broodling makes two attacks: one with its Bite and one with its Sting." },
      { "name": "Bite", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage." },
      { "name": "Sting", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage and the creature must succeed on a DC 12 Constitution saving throw or have disadvantage on Wisdom saving throws until the end of the broodling's next turn." },
      { "name": "Entrance (1/Day)", "description": "The broodling targets one creature it can see within 10 feet of it. The target must succeed on a DC 6 Wisdom saving throw or be magically charmed by the broodling until the broodling dies or until it is on a different plane of existence from the target. The charmed target is under the broodling's control and can't take reactions. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 30 feet away from the broodling." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Lesser Brood Chrysalis",
    "metadata": { "size": "Large", "type": "Aberration", "tags": [], "alignment": "Lawful Evil", "cr": "6" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "171 (18d10 + 72)", "speed": "5 ft., swim 15 ft." },
    "ability_scores": { "STR": 16, "DEX": 5, "CON": 18, "INT": 16, "WIS": 14, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +7, Wis +5", "skills": "Perception +5", "vulnerabilities": "", "resistances": "", "immunities": "poison", "condition_immunities": "charmed, exhaustion, frightened, poisoned, prone",
      "senses": "blindsight 90 ft. (blind beyond this radius), passive Perception 15", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Amphibious", "description": "The chrysalis can breathe air and water." },
      { "name": "Legendary Resistance (1/Day)", "description": "If the chrysalis fails a saving throw, it can choose to succeed instead." },
      { "name": "Regenerative State", "description": "The chrysalis' hit points reset to its maximum at the start of its turn." },
      { "name": "Sticky Mucus", "description": "When a creature hits the chrysalis with a melee attack, it must succeed on a DC 15 Strength saving throw or become disarmed as its weapon stays stuck to the creature. A creature can use an action to make a DC 15 Strength (Athletics) check, freeing a stuck weapon within its reach on a success. If the attack requires that the attacker touch the aboleth (GM's discretion), then the attacker becomes grappled (escape DC 15) on a failed save. While it is grappled, it can't use that limb. If the attack is a bite, then the creature can't speak while it is grappled in this way." },
      { "name": "Transitional State", "description": "The chrysalis turns into a lesser aboleth broodmother at the start of its fourth turn after becoming a chrysalis, ending any grapples it is a part of." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The chrysalis makes three Sticky Ectoplasm attacks. Each attack must be against a different target." },
      { "name": "Sticky Ectoplasm", "description": "Ranged Weapon Attack: +7 to hit, range 30/90 ft., one target. Hit: 11 (2d6 + 4) acid damage and the target's speed is reduced by 15 feet until the target uses an action to remove the ectoplasm. A creature whose speed is reduced to 0 feet by this effect is restrained (escape DC 15)." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Brood Chrysalis",
    "metadata": { "size": "Huge", "type": "Aberration", "tags": [], "alignment": "Lawful Evil", "cr": "12" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "230 (20d12 + 100)", "speed": "5 ft., swim 15 ft." },
    "ability_scores": { "STR": 20, "DEX": 5, "CON": 20, "INT": 18, "WIS": 14, "CHA": 12 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +9, Wis +6", "skills": "Perception +6", "vulnerabilities": "", "resistances": "", "immunities": "poison", "condition_immunities": "charmed, exhaustion, frightened, poisoned, prone",
      "senses": "blindsight 90 ft. (blind beyond this radius), passive Perception 16", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Amphibious", "description": "The chrysalis can breathe air and water." },
      { "name": "Legendary Resistance (2/Day)", "description": "If the chrysalis fails a saving throw, it can choose to succeed instead." },
      { "name": "Regenerative State", "description": "The chrysalis' hit points reset to its maximum at the start of its turn." },
      { "name": "Sticky Mucus", "description": "When a creature hits the chrysalis with a melee attack, it must succeed on a DC 17 Strength saving throw or become disarmed as its weapon stays stuck to the creature. A creature can use an action to make a DC 17 Strength (Athletics) check, freeing a stuck weapon within its reach on a success. If the attack requires that the attacker touch the aboleth (GM's discretion), then the attacker becomes grappled (escape DC 17) on a failed save. While it is grappled, it can't use that limb. If the attack is a bite, then the creature can't speak while it is grappled in this way." },
      { "name": "Transitional State", "description": "The chrysalis turns into an aboleth broodmother at the start of its fourth turn after becoming a chrysalis, ending any grapples it is a part of." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The chrysalis makes three Sticky Ectoplasm attacks. Each attack must be against a different target." },
      { "name": "Sticky Ectoplasm", "description": "Ranged Weapon Attack: +9 to hit, range 30/90 ft., one target. Hit: 15 (3d6 + 5) acid damage and the target's speed is reduced by 15 feet until the target uses an action to remove the ectoplasm. A creature whose speed is reduced to 0 feet by this effect is restrained (escape DC 17)." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Greater Brood Chrysalis",
    "metadata": { "size": "Huge", "type": "Aberration", "tags": [], "alignment": "Lawful Evil", "cr": "18" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "310 (20d12 + 180)", "speed": "5 ft., swim 15 ft." },
    "ability_scores": { "STR": 24, "DEX": 5, "CON": 28, "INT": 18, "WIS": 16, "CHA": 14 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +15, Wis +9", "skills": "Perception +9", "vulnerabilities": "", "resistances": "", "immunities": "poison", "condition_immunities": "charmed, exhaustion, frightened, poisoned, prone",
      "senses": "blindsight 90 ft. (blind beyond this radius), passive Perception 19", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Amphibious", "description": "The chrysalis can breathe air and water." },
      { "name": "Legendary Resistance (3/Day)", "description": "If the chrysalis fails a saving throw, it can choose to succeed instead." },
      { "name": "Regenerative State", "description": "The chrysalis' hit points reset to its maximum at the start of its turn." },
      { "name": "Sticky Mucus", "description": "When a creature hits the chrysalis with a melee attack, it must succeed on a DC 21 Strength saving throw or become disarmed as its weapon stays stuck to the creature. A creature can use an action to make a DC 21 Strength (Athletics) check, freeing a stuck weapon within its reach on a success. If the attack requires that the attacker touch the aboleth (GM's discretion), then the attacker becomes grappled (escape DC 21) on a failed save. While it is grappled, it can't use that limb. If the attack is a bite, then the creature can't speak while it is grappled in this way." },
      { "name": "Transitional State", "description": "The chrysalis turns into an aboleth broodmother at the start of its fourth turn after becoming a chrysalis, ending any grapples it is a part of." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The chrysalis makes three Sticky Ectoplasm attacks. Each attack must be against a different target." },
      { "name": "Sticky Ectoplasm", "description": "Ranged Weapon Attack: +13 to hit, range 30/90 ft., one target. Hit: 21 (4d6 + 7) acid damage and the target's speed is reduced by 15 feet until the target uses an action to remove the ectoplasm. A creature whose speed is reduced to 0 feet by this effect is restrained (escape DC 21)." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Lesser Aboleth Broodmother",
    "metadata": { "size": "Large", "type": "Aberration", "tags": [], "alignment": "Lawful Evil", "cr": "6" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "127 (15d10 + 45)", "speed": "15 ft., swim 40 ft." },
    "ability_scores": { "STR": 18, "DEX": 10, "CON": 16, "INT": 17, "WIS": 13, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +6, Int +6, Wis +4", "skills": "Athletics +7, History +9, Perception +7", "vulnerabilities": "", "resistances": "", "immunities": "poison", "condition_immunities": "poisoned",
      "senses": "darkvision 120 ft., passive Perception 17", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Amphibious", "description": "The aboleth can breathe air and water." },
      { "name": "Legendary Resistance (3/Day)", "description": "If the aboleth fails a saving throw, it can choose to succeed instead." },
      { "name": "Infectious Mucus", "description": "The aboleth is surrounded by infectious mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased. For the first hour of the disease, the creature takes 2 (1d4) necrotic damage if it ends its turn out of water (it must be at least neck-deep to avoid this damage). After the first hour and until the disease is cured, a creature is unable to gain the benefits of a short or long rest if it does not spend the rest at least neck-deep in water. A creature that fails the saving throw by 5 or more becomes a host of a broodling egg that hatches in 3d6 days." },
      { "name": "Probing Telepathy", "description": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The aboleth makes two Tentacle attacks and uses Birth, if available." },
      { "name": "Tentacle", "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage and the target must make a saving throw against the aboleth's Infectious Mucus trait." },
      { "name": "Birth (Recharge 4-6)", "description": "The aboleth produces a broodling in an unoccupied space within 5 feet of it." },
      { "name": "Entrance (3/Day)", "description": "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Jet", "description": "The aboleth spurts out a pall of ink, heavily obscuring a 20-foot-radius sphere of water centred on the aboleth until the start of its next turn. It then moves up to its swimming speed." },
      { "name": "Tentacle", "description": "The aboleth makes one Tentacle attack." },
      { "name": "Suction Drain (Costs 2 Actions)", "description": "The aboleth attempts to grapple one creature within 10 feet of it with a special tentacle. A creature charmed by the aboleth automatically fails this check. If the aboleth succeeds on the check, the creature takes 14 (4d6) necrotic damage and the aboleth regains a number of hit points equal to half the damage dealt. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Aboleth Broodmother",
    "metadata": { "size": "Large", "type": "Aberration", "tags": [], "alignment": "Lawful Evil", "cr": "16" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "210 (20d10 + 100)", "speed": "15 ft., swim 40 ft." },
    "ability_scores": { "STR": 21, "DEX": 10, "CON": 20, "INT": 18, "WIS": 14, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +10, Int +9, Wis +7", "skills": "Athletics +10, History +14, Perception +12", "vulnerabilities": "", "resistances": "", "immunities": "poison", "condition_immunities": "poisoned",
      "senses": "darkvision 120 ft., passive Perception 22", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Amphibious", "description": "The aboleth can breathe air and water." },
      { "name": "Legendary Resistance (3/Day)", "description": "If the aboleth fails a saving throw, it can choose to succeed instead." },
      { "name": "Infectious Mucus", "description": "The aboleth is surrounded by infectious mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 18 Constitution saving throw. On a failure, the creature is diseased. For the first hour of the disease, the creature takes 4 (1d8) necrotic damage each time it ends its turn out of water (it must be at least neck-deep to avoid this damage). After the first hour and until the disease is cured, a creature is unable to gain the benefits of a short or long rest if it does not spend the rest at least neck-deep in water. A creature that fails the saving throw by 5 or more becomes a host for 1d4 broodling eggs that hatch within 3d6 days." },
      { "name": "Mother of the Swarm (Recharges after a Short or Long Rest)", "description": "If the aboleth would be reduced to 0 hit points, its current hit point total instead resets to 210, it regains any expended uses of Legendary Resistance, it births 2 broodlings, and it gains 210 temporary hit points as a flurry of swamp fauna swarms over it to protect it. Additionally, the aboleth gains a +5 bonus to its attack and damage rolls and can now use the options in the \"Mythic Actions\" section for 1 hour." },
      { "name": "Probing Telepathy", "description": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The aboleth makes three Tentacle attacks and uses Birth, if available." },
      { "name": "Tentacle", "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage plus 4 (1d8) acid damage and the target must make a saving throw against the aboleth's Infectious Mucus trait." },
      { "name": "Birth (Recharge 4-6)", "description": "The aboleth produces a broodling in an unoccupied space within 5 feet of it." },
      { "name": "Entrance (3/Day)", "description": "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 17 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Jet", "description": "The aboleth spurts out a pall of ink, heavily obscuring a 20-foot-radius sphere of water centred on the aboleth until the start of its next turn. It then moves up to its swimming speed." },
      { "name": "Tentacle", "description": "The aboleth makes one Tentacle attack." },
      { "name": "Suction Drain (Costs 2 Actions)", "description": "The aboleth attempts to grapple one creature within 10 feet of it with a special tentacle. A creature charmed by the aboleth automatically fails this contested check. If the aboleth succeeds, the creature takes 21 (6d6) necrotic damage and the aboleth regains hit points equal to half the damage dealt. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
    ],
    "mythic_actions": [
      { "name": "Gestate", "description": "The aboleth recharges and uses Birth. It must use a different legendary action before it can use this one again." },
      { "name": "Rapid Suction Drain", "description": "The aboleth uses its Suction Drain legendary action option. It must use a different legendary action before it uses this one again." }
    ],
    "lair_actions": [
      { "description": "Tempestuous Turbulence. The water within the lair writhes and swirls, causing 6-foot-tall waves to crash over all the low-lying islands. Each creature in the water, or on the ground less than 5 feet above the water's surface, must make a VDC Strength saving throw or be pulled up to 20 feet into the water." },
      { "description": "Plague Tide. The water begins to bubble, filling the lair with noxious, aerosolised droplets. A creature is affected even if it doesn't need to breathe. Each creature must succeed on a VDC Constitution saving throw or become poisoned. If running this hunt at 11th or 17th level, the creature is poisoned as if it had failed a saving throw against the contagion spell (no concentration required). A creature can repeat the saving throw at the end of each of its turns, ending the effect for it on a success." },
      { "description": "Aqua Phantasm. The water in the aboleth broodmother's lair magically becomes a conduit for the unspeakable horrors the broodmother has witnessed in its vast memory. Each creature of the broodmother or broodlings' choice within the lair's waters must succeed on a VDC Wisdom saving throw or take Vdam psychic damage and become frightened of the huddled mass of creatures (wave 1), the chrysalis (wave 2), or the broodmother (wave 3) until the end of its next turn." }
    ],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Flying Magnetite Weapon",
    "metadata": { "size": "Small", "type": "Construct", "tags": [], "alignment": "Unaligned", "cr": "3" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "44 (8d6 + 16)", "speed": "fly 60 ft. (hover)" },
    "ability_scores": { "STR": 17, "DEX": 15, "CON": 14, "INT": 1, "WIS": 10, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "", "immunities": "cold, poison, psychic", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10", "languages": "—"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the weapon made with ferrous weapons or ammunition are made at disadvantage." },
      { "name": "False Appearance", "description": "While the weapon remains motionless, it is indistinguishable from a normal weapon." },
      { "name": "Superconductor", "description": "If the weapon takes 10 or more fire damage in a single instance, it falls prone and, until the end of its next turn, it is incapacitated and its flying speed is reduced to 0 feet." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The weapon makes two melee attacks. It has one of the following attack options, depending on its anatomy." },
      { "name": "Greatsword", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) force damage." },
      { "name": "Maul", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) bludgeoning damage plus 3 (1d6) force damage." },
      { "name": "Pike", "description": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) force damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Magnetite Armour",
    "metadata": { "size": "Medium", "type": "Construct", "tags": [], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "127 (15d8 + 60)", "speed": "40 ft., fly 40 ft. (hover)" },
    "ability_scores": { "STR": 17, "DEX": 14, "CON": 18, "INT": 1, "WIS": 10, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "", "immunities": "cold, poison, psychic", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10", "languages": "—"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the armour made with ferrous weapons or ammunition are made at disadvantage." },
      { "name": "False Appearance", "description": "While the armour remains motionless, it is indistinguishable from a pile of armour plates." },
      { "name": "Superconductor", "description": "If the armour takes 10 or more fire damage in a single instance, it falls prone and, until the end of its next turn, it is incapacitated and its flying speed is reduced to 0 feet." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The armour makes two melee attacks or casts Magnetobolt twice." },
      { "name": "Greatsword", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 4 (1d8) force damage." },
      { "name": "Magnetobolt", "description": "Ranged Spell Attack: +7 to hit, range 90 ft., one target. Hit: 10 (3d6) force damage and the target must succeed on a DC 15 Strength saving throw or be knocked prone. A creature wearing ferrous armour makes this saving throw with disadvantage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Swarm of Magnetite Cutlery",
    "metadata": { "size": "Large", "type": "Swarm of Tiny constructs", "tags": [], "alignment": "Unaligned", "cr": "2" },
    "combat_stats": { "ac": "12", "hp": "52 (7d10 + 14)", "speed": "0 ft., fly 40 ft. (hover)" },
    "ability_scores": { "STR": 13, "DEX": 15, "CON": 15, "INT": 1, "WIS": 1, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "acid", "resistances": "bludgeoning, piercing, slashing", "immunities": "poison, psychic", "condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 5", "languages": "—"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the swarm made with ferrous weapons or ammunition are made at disadvantage." },
      { "name": "Superconductor", "description": "If the swarm takes 10 or more fire damage in a single instance, it falls prone and, until the end of its next turn, it is incapacitated and its flying speed is reduced to 0 feet." },
      { "name": "Swarm", "description": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny utensil. The swarm can't regain hit points or gain temporary hit points." }
    ],
    "actions": [
      { "name": "Jabs", "description": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's space. Hit: 14 (4d6) piercing damage or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Kobold Mech",
    "metadata": { "size": "Medium", "type": "Humanoid (kobold)", "tags": [], "alignment": "Lawful Evil", "cr": "5" },
    "combat_stats": { "ac": "18 (mechsuit)", "hp": "97 (15d8 + 30)", "speed": "40 ft., burrow 20 ft., fly 40 ft. (hover)" },
    "ability_scores": { "STR": 18, "DEX": 16, "CON": 15, "INT": 8, "WIS": 9, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +6", "skills": "Athletics +7, Perception +2", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "darkvision 60 ft., passive Perception 12", "languages": "Common, Draconic"
    },
    "traits": [
      { "name": "Constructed Weakness", "description": "The kobold mech has the following flaw:\nRustable. If the kobold mech takes 10 or more acid damage in a single turn, it becomes restrained until the end of its next turn." },
      { "name": "Pack Tactics", "description": "The kobold mech has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
      { "name": "Piloted", "description": "The kobold mech is piloted by a kobold. The kobold dies if the kobold mech is reduced to 0 hit points." },
      { "name": "Self-Destruct", "description": "When the kobold mech is reduced to 0 hit points, its cache of dynamite immediately explodes. Each creature within 20 feet of the kobold mech must make a DC 14 Dexterity saving throw, taking 21 (6d6) thunder damage on a failure, or half as much damage on a success." }
    ],
    "actions": [
      { "name": "Multiattacks", "description": "The kobold mech makes two attacks with its Cavitation Drill. It can replace one of these attacks with a Javelin Missile." },
      { "name": "Cavitation Drill", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 7 (2d6) thunder damage." },
      { "name": "Javelin Missile (6/Day)", "description": "The kobold mech fires a dynamite-strapped javelin at a point it can see within 120 feet of it. Each creature within 5 feet of that point must make a DC 12 Dexterity saving throw, taking 10 (3d6) thunder damage on a failure, or half as much damage on a success." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Possessed Mining Suit",
    "metadata": { "size": "Huge", "type": "Elemental", "tags": [], "alignment": "Neutral", "cr": "8" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "161 (14d12 + 70)", "speed": "30 ft." },
    "ability_scores": { "STR": 21, "DEX": 10, "CON": 20, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Athletics +8", "vulnerabilities": "", "resistances": "", "immunities": "poison", "condition_immunities": "exhaustion, paralysed, petrified, poisoned, unconscious",
      "senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10", "languages": "Aquan, Terran"
    },
    "traits": [
      { "name": "Arcane Power Source", "description": "An arcane power source—a crystal on the mining suit's rear—can be targeted separately from the mining suit (AC 19, 64 hit points, vulnerability to thunder damage, and immunity to all damage except bludgeoning, force, piercing, and slashing). If the mining suit fails a saving throw against an area of effect, the crystal also fails the saving throw. If the power source is destroyed, the tar elemental possessing the mining suit moves into the nearest unoccupied space without provoking opportunity attacks and the mining suit becomes an inanimate object." },
      { "name": "Flammable", "description": "If the mining suit takes fire damage, it ignites. It takes 10 (3d6) fire damage at the start of each of its turns and its melee attacks deal an additional 10 (3d6) fire damage. If the mining suit is subject to heavy rain or takes 10 or more cold damage in a single instance, the flames are extinguished and the effects end." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The mining suit makes three attacks: one with its Claw, one with its Demolition Drill, and one with its Pseudopod." },
      { "name": "Claw", "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) slashing damage. If the target is a Large or smaller creature, it is grappled (escape DC 16). Until this grapple ends, the mining suit has advantage on attack rolls using its Claw against the target and the mining suit can't use its Claw on another target." },
      { "name": "Demolition Drill", "description": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 15 (3d6 + 5) piercing damage." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage plus 10 (3d6) necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Dragonling",
    "metadata": { "size": "Tiny", "type": "Dragon", "tags": [], "alignment": "Neutral", "cr": "1/8" },
    "combat_stats": { "ac": "13 (natural armour)", "hp": "7 (2d4 + 2)", "speed": "15 ft., fly 30 ft." },
    "ability_scores": { "STR": 10, "DEX": 14, "CON": 12, "INT": 6, "WIS": 10, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "", "immunities": "varies (based on type)", "condition_immunities": "",
      "senses": "darkvision 60 ft., passive Perception 10", "languages": "Draconic"
    },
    "traits": [],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Magnetite Wyrmling",
    "metadata": { "size": "Medium", "type": "Dragon", "tags": [], "alignment": "Neutral", "cr": "1" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "16 (3d8 + 3)", "speed": "30 ft., climb 30 ft., fly 30 ft." },
    "ability_scores": { "STR": 15, "DEX": 10, "CON": 13, "INT": 11, "WIS": 12, "CHA": 13 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +2, Con +3, Wis +3, Cha +3", "skills": "Perception +5, Stealth +2", "vulnerabilities": "", "resistances": "", "immunities": "cold", "condition_immunities": "",
      "senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 15", "languages": "Draconic"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the dragon made with ferrous weapons or ammunition have disadvantage. The area within 10 feet of the dragon is difficult terrain for creatures wearing ferrous armour." },
      { "name": "Superconductor", "description": "If the dragon takes 1 or more fire damage in a single instance, its flying speed is reduced by 20 feet until the end of its next turn. If its flying speed is reduced to 0 feet, it immediately falls 100 feet, and falls a further 100 feet at the start of its next turn." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage." },
      { "name": "Sword Shot", "description": "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 4 (1d4 + 2) piercing damage." },
      { "name": "Breath Weapons (Recharge 5–6)", "description": "The dragon uses one of the following breath weapons.\nStorm of Swords. The dragon fires a torrent of sharp metal objects in a 15-foot cone. Each creature in that area must make a DC 11 Dexterity saving throw, taking 14 (4d6) piercing damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must make a DC 11 Strength saving throw. On a failed save, the creature is pushed up to 30 feet away from the dragon. A creature wearing ferrous armour has disadvantage on this saving throw." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Young Magnetite Dragon",
    "metadata": { "size": "Large", "type": "Dragon", "tags": [], "alignment": "Neutral", "cr": "5" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "85 (10d10 + 30)", "speed": "40 ft., climb 40 ft., fly 40 ft." },
    "ability_scores": { "STR": 17, "DEX": 10, "CON": 16, "INT": 13, "WIS": 10, "CHA": 14 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +3, Con +6, Wis +3, Cha +5", "skills": "Perception +6, Stealth +3", "vulnerabilities": "", "resistances": "", "immunities": "cold", "condition_immunities": "",
      "senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16", "languages": "Common, Draconic"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the dragon made with ferrous weapons or ammunition have disadvantage. The area within 15 feet of the dragon is difficult terrain for creatures wearing ferrous armour." },
      { "name": "Superconductor", "description": "If the dragon takes 5 or more fire damage in a single instance, its flying speed is reduced by 30 feet until the end of its next turn. If its flying speed is reduced to 0 feet, it immediately falls 100 feet, and falls a further 100 feet at the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dragon makes two attacks: one with its Bite and one with its Claws, or two with its Sword Shot." },
      { "name": "Bite", "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10 + 3) piercing damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." },
      { "name": "Sword Shot", "description": "Ranged Weapon Attack: +6 to hit, range 40/120 ft., one target. Hit: 7 (1d8 + 3) piercing damage." },
      { "name": "Breath Weapons (Recharge 5–6)", "description": "The dragon uses one of the following breath weapons.\nStorm of Swords. The dragon fires a torrent of sharp metal objects in a 30-foot cone. Each creature in that area must make a DC 14 Dexterity saving throw, taking 21 (6d6) piercing damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must make a DC 14 Strength saving throw. On a failed save, the creature is pushed up to 40 feet away from the dragon. A creature wearing ferrous armour has disadvantage on this saving throw." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": null, "harvest_check": "Survival",
      "parts": [{ "name": "Magnetite Scales", "dc": 18, "tags": [], "rupture_effect": null }],
      "guaranteed_drops": []
    }
  },
  {
    "name": "Adult Magnetite Dragon",
    "metadata": { "size": "Huge", "type": "Dragon", "tags": [], "alignment": "Neutral", "cr": "14" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "172 (15d12 + 75)", "speed": "40 ft., climb 40 ft., fly 80 ft." },
    "ability_scores": { "STR": 23, "DEX": 10, "CON": 21, "INT": 15, "WIS": 14, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +5, Con +10, Wis +7, Cha +8", "skills": "Perception +12, Religion +7, Stealth +5", "vulnerabilities": "", "resistances": "", "immunities": "cold", "condition_immunities": "",
      "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22", "languages": "Common, Draconic"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the dragon made with ferrous weapons or ammunition have disadvantage. The area within 20 feet of the dragon is difficult terrain for creatures wearing ferrous armour." },
      { "name": "Legendary Resistance (3/Day)", "description": "If the dragon fails a saving throw, it can choose to succeed instead." },
      { "name": "Superconductor", "description": "If the dragon takes 10 or more fire damage in a single instance, its flying speed is reduced by 30 feet until the end of its next turn. If its flying speed is reduced to 0 feet, it immediately falls 100 feet, and falls a further 100 feet at the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dragon makes three attacks: one with its Bite and two with its Claws, or three with its Sword Shot." },
      { "name": "Bite", "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) force damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
      { "name": "Sword Shot", "description": "Ranged Weapon Attack: +11 to hit, range 50/150 ft., one target. Hit: 12 (1d12 + 6) piercing damage." },
      { "name": "Breath Weapons (Recharge 5–6)", "description": "The dragon uses one of the following breath weapons.\nStorm of Swords. The dragon fires a torrent of sharp metal objects in a 60-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 45 (13d6) piercing damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must make a DC 18 Strength saving throw. On a failed save, the creature is pushed up to 60 feet away from the dragon. A creature wearing ferrous armour has disadvantage on this saving throw." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Detect", "description": "The dragon makes a Wisdom (Perception) check." },
      { "name": "Sword Shot", "description": "The dragon makes a Sword Shot attack." },
      { "name": "Blood Bend (Costs 2 Actions)", "description": "The dragon exerts its magnetic control over the iron in creatures' blood. Each creature of the dragon's choice that contains blood and is within 10 feet of the dragon must succeed on a DC 18 Strength saving throw or be moved up to 5 feet in a direction of the dragon's choice and knocked prone. A creature wearing ferrous armour has disadvantage on this saving throw. The dragon can then fly up to half its flying speed." }
    ],
    "mythic_actions": [],
    "lair_actions": [
      { "description": "Magnetic Waves. The lair's magnetised rock emits a pulse affecting all ferrous metals within the lair. Each creature holding a ferrous weapon or wearing ferrous armour must make a VDC Strength saving throw. On a failure, a creature holding a ferrous weapon is disarmed of its weapon, which flies 10 feet in a random direction, and a creature wearing ferrous armour is knocked prone. Roll a d8 and consult the Random Directions table to determine the direction." },
      { "description": "Arcanomagnetic Interference. The lair becomes ensconced in an antimagic field until initiative count 20 of the next round. Each spellcaster in the lair immediately makes a DC 10 Perception check using its spellcasting ability. On a success, it detects the absence of magic in the lair." },
      { "description": "Magnetite Shards. Razor-sharp shards erupt from the ground in a 20-foot radius centred on a point within the lair. Each creature in the area must succeed on a VDC Dexterity saving throw or take Vdam piercing damage. Until initiative count 20 of the next round, the area is subject to nonmagical effects identical to the spike growth spell." }
    ],
    "harvest_and_loot": {
      "assessment_check": null,
      "harvest_check": "Survival",
      "parts": [
        { "name": "Magnetite Scales", "dc": 20, "tags": [], "rupture_effect": null },
        { "name": "Hexofuga (Spines)", "dc": 20, "tags": [], "rupture_effect": null }
      ],
      "guaranteed_drops": []
    }
  },
  {
    "name": "Ancient Magnetite Dragon",
    "metadata": { "size": "Gargantuan", "type": "Dragon", "tags": [], "alignment": "Neutral", "cr": "22" },
    "combat_stats": { "ac": "22 (natural armour)", "hp": "367 (21d20 + 147)", "speed": "40 ft., climb 40 ft., fly 100 ft." },
    "ability_scores": { "STR": 27, "DEX": 10, "CON": 25, "INT": 17, "WIS": 16, "CHA": 19 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +7, Con +14, Wis +10, Cha +11", "skills": "Perception +17, Religion +10, Stealth +7", "vulnerabilities": "", "resistances": "", "immunities": "cold", "condition_immunities": "",
      "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27", "languages": "Common, Draconic"
    },
    "traits": [
      { "name": "Arcanomagnetic Repulsion", "description": "Attacks against the dragon made with ferrous weapons or ammunition have disadvantage. The area within 30 feet of the dragon is difficult terrain for creatures wearing ferrous armour." },
      { "name": "Legendary Resistance (3/Day)", "description": "If the dragon fails a saving throw, it can choose to succeed instead." },
      { "name": "Superconductor", "description": "If the dragon takes 15 or more fire damage in a single instance, its flying speed is reduced by 30 feet until the end of its next turn. If its flying speed is reduced to 0 feet, it immediately falls 100 feet, and falls a further 100 feet at the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dragon makes three attacks: one with its Bite and two with its Claws, or three with its Sword Shot." },
      { "name": "Bite", "description": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) force damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage." },
      { "name": "Sword Shot", "description": "Ranged Weapon Attack: +15 to hit, range 60/180 ft., one target. Hit: 17 (2d8 + 8) piercing damage." },
      { "name": "Breath Weapons (Recharge 5–6)", "description": "The dragon uses one of the following breath weapons.\nStorm of Swords. The dragon fires a torrent of sharp metal objects in a 90-foot cone. Each creature in that area must make a DC 22 Dexterity saving throw, taking 70 (20d6) piercing damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must make a DC 22 Strength saving throw. On a failed save, the creature is pushed up to 60 feet away from the dragon. A creature wearing ferrous armour has disadvantage on this saving throw." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Detect", "description": "The dragon makes a Wisdom (Perception) check." },
      { "name": "Sword Shot", "description": "The dragon makes a Sword Shot attack." },
      { "name": "Blood Bend (Costs 2 Actions)", "description": "The dragon exerts its magnetic control over the iron in creatures' blood. Each creature of the dragon's choice that contains blood and is within 15 feet of the dragon must succeed on a DC 22 Strength saving throw or be moved up to 15 feet in a direction of the dragon's choice and knocked prone. A creature wearing ferrous armour has disadvantage on this saving throw. The dragon can then fly up to half its flying speed." }
    ],
    "mythic_actions": [],
    "lair_actions": [
      { "description": "Magnetic Waves. The lair's magnetised rock emits a pulse affecting all ferrous metals within the lair. Each creature holding a ferrous weapon or wearing ferrous armour must make a VDC Strength saving throw. On a failure, a creature holding a ferrous weapon is disarmed of its weapon, which flies 10 feet in a random direction, and a creature wearing ferrous armour is knocked prone. Roll a d8 and consult the Random Directions table to determine the direction." },
      { "description": "Arcanomagnetic Interference. The lair becomes ensconced in an antimagic field until initiative count 20 of the next round. Each spellcaster in the lair immediately makes a DC 10 Perception check using its spellcasting ability. On a success, it detects the absence of magic in the lair." },
      { "description": "Magnetite Shards. Razor-sharp shards erupt from the ground in a 20-foot radius centred on a point within the lair. Each creature in the area must succeed on a VDC Dexterity saving throw or take Vdam piercing damage. Until initiative count 20 of the next round, the area is subject to nonmagical effects identical to the spike growth spell." }
    ],
    "harvest_and_loot": {
      "assessment_check": null,
      "harvest_check": "Survival",
      "parts": [
        { "name": "Magnetite Scales", "dc": 25, "tags": [], "rupture_effect": null },
        { "name": "Hexofuga (Spines)", "dc": 25, "tags": [], "rupture_effect": null },
        { "name": "Magnetic Heart", "dc": 30, "tags": [], "rupture_effect": null }
      ],
      "guaranteed_drops": []
    }
  },
  {
    "name": "Tetrahedrooze",
    "metadata": { "size": "Tiny", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "1/4" },
    "combat_stats": { "ac": "11 (natural armour)", "hp": "18 (4d4 + 8)", "speed": "15 ft., climb 15 ft." },
    "ability_scores": { "STR": 14, "DEX": 5, "CON": 15, "INT": 1, "WIS": 6, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex -1, Con +4", "skills": "", "vulnerabilities": "", "resistances": "see Reactive Mutations", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled, prone, restrained",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [
      { "name": "Reactive Mutations", "description": "Immediately after the ooze takes damage, it gains resistance to that damage type. The ooze can have up to two resistances from this trait. If the ooze has its maximum number of resistances, the oldest resistance is lost when a new one is gained." },
      { "name": "Spider Climb", "description": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Engulf", "description": "The ooze moves up to its speed. While doing so, it can enter Tiny creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 5 (2d4) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 10 (4d4) acid damage at the start of each of the ooze's turns. When the ooze moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the ooze." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 2 (1d4) acid damage and the target suffers one of the following random effects (roll a d4): 1. The target takes 2 (1d4) force damage. 2. The target takes 2 (1d4) bludgeoning damage. 3. The target takes 2 (1d4) piercing damage. 4. The target takes 2 (1d4) slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Hexahedrooze",
    "metadata": { "size": "Small", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "3" },
    "combat_stats": { "ac": "12 (natural armour)", "hp": "58 (9d6 + 27)", "speed": "20 ft., climb 20 ft." },
    "ability_scores": { "STR": 16, "DEX": 6, "CON": 17, "INT": 3, "WIS": 6, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +0, Con +5", "skills": "", "vulnerabilities": "", "resistances": "see Reactive Mutations", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled, prone, restrained",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [
      { "name": "Reactive Mutations", "description": "Immediately after the ooze takes damage, it gains resistance to that damage type. The ooze can have up to two resistances from this trait. If the ooze has its maximum number of resistances, the oldest resistance is lost when a new one is gained." },
      { "name": "Spider Climb", "description": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ooze makes two Pseudopod attacks. It can replace one attack with Engulf." },
      { "name": "Engulf", "description": "The ooze moves up to its speed. While doing so, it can enter Small or smaller creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a DC 13 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 7 (2d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 14 (4d6) acid damage at the start of each of the ooze's turns. When the ooze moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 13 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the ooze." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 3 (1d6) acid damage and the target suffers one of the following random effects (roll a d6): 1. The target takes 3 (1d6) force damage. 2. The target takes 3 (1d6) bludgeoning damage. 3. The target takes 3 (1d6) piercing damage. 4. The target takes 3 (1d6) slashing damage. 5. The target takes 3 (1d6) cold damage. 6. The target takes 3 (1d6) fire damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Attack", "description": "The ooze makes one Pseudopod attack." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Octahedrooze",
    "metadata": { "size": "Medium", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "12 (natural armour)", "hp": "110 (13d8 + 52)", "speed": "20 ft., climb 20 ft." },
    "ability_scores": { "STR": 17, "DEX": 7, "CON": 19, "INT": 5, "WIS": 6, "CHA": 2 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +1, Con +7", "skills": "", "vulnerabilities": "", "resistances": "see Reactive Mutations", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled, prone, restrained",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [
      { "name": "Reactive Mutations", "description": "Immediately after the ooze takes damage, it gains resistance to that damage type. The ooze can have up to three resistances from this trait. If the ooze has its maximum number of resistances, the oldest resistance is lost when a new one is gained." },
      { "name": "Spider Climb", "description": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ooze makes two Pseudopod attacks. It can replace one attack with Engulf." },
      { "name": "Engulf", "description": "The ooze moves up to its speed. While doing so, it can enter Medium or smaller creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a DC 14 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 9 (2d8) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 18 (4d8) acid damage at the start of each of the ooze's turns. When the ooze moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 14 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the ooze." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d8) acid damage and the target suffers one of the following random effects (roll a d8): 1. The target takes 4 (1d8) force damage. 2. The target takes 4 (1d8) bludgeoning damage. 3. The target takes 4 (1d8) piercing damage. 4. The target takes 4 (1d8) slashing damage. 5. The target takes 4 (1d8) cold damage. 6. The target takes 4 (1d8) fire damage. 7. The target takes 4 (1d8) lightning damage. 8. The target takes 4 (1d8) thunder damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Attack", "description": "The ooze makes one Pseudopod attack." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Decahedrooze",
    "metadata": { "size": "Large", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "9" },
    "combat_stats": { "ac": "13 (natural armour)", "hp": "136 (13d10 + 65)", "speed": "25 ft., climb 25 ft." },
    "ability_scores": { "STR": 18, "DEX": 8, "CON": 21, "INT": 7, "WIS": 6, "CHA": 2 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +3, Con +9", "skills": "", "vulnerabilities": "", "resistances": "see Reactive Mutations", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled, prone, restrained",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [
      { "name": "Reactive Mutations", "description": "Immediately after the ooze takes damage, it gains resistance to that damage type. The ooze can have up to four resistances from this trait. If the ooze has its maximum number of resistances, the oldest resistance is lost when a new one is gained." },
      { "name": "Spider Climb", "description": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ooze makes two Pseudopod attacks. It can replace one attack with Engulf." },
      { "name": "Engulf", "description": "The ooze moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a DC 16 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 11 (2d10) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 22 (4d10) acid damage at the start of each of the ooze's turns. When the ooze moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 16 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the ooze." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d8) acid damage and the target suffers one of the following random effects (roll a d10): 1. The target takes 5 (1d10) force damage. 2. The target takes 5 (1d10) bludgeoning damage. 3. The target takes 5 (1d10) piercing damage. 4. The target takes 5 (1d10) slashing damage. 5. The target takes 5 (1d10) cold damage. 6. The target takes 5 (1d10) fire damage. 7. The target takes 5 (1d10) lightning damage. 8. The target takes 5 (1d10) thunder damage. 9. The target takes 5 (1d10) necrotic damage. 10. The target takes 5 (1d10) radiant damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Attack", "description": "The ooze makes one Pseudopod attack." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Dodecahedrooze",
    "metadata": { "size": "Huge", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "12" },
    "combat_stats": { "ac": "13 (natural armour)", "hp": "200 (16d12 + 72)", "speed": "25 ft., climb 25 ft." },
    "ability_scores": { "STR": 20, "DEX": 9, "CON": 23, "INT": 9, "WIS": 6, "CHA": 2 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +3, Con +10", "skills": "", "vulnerabilities": "", "resistances": "see Reactive Mutations", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled, prone, restrained",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [
      { "name": "Reactive Mutations", "description": "Immediately after the ooze takes damage, it gains resistance to that damage type. The ooze can have up to four resistances from this trait. If the ooze has its maximum number of resistances, the oldest resistance is lost when a new one is gained." },
      { "name": "Spider Climb", "description": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ooze uses Engulf and makes two Pseudopod attacks." },
      { "name": "Engulf", "description": "The ooze moves up to its speed. While doing so, it can enter Huge or smaller creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a DC 17 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 13 (2d12) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 26 (4d12) acid damage at the start of each of the ooze's turns. When the ooze moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 17 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the ooze." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (3d6) acid damage and the target suffers one of the following random effects (roll a d12): 1. The target takes 6 (1d12) force damage. 2. The target takes 6 (1d12) bludgeoning damage. 3. The target takes 6 (1d12) piercing damage. 4. The target takes 6 (1d12) slashing damage. 5. The target takes 6 (1d12) fire damage. 6. The target takes 6 (1d12) cold damage. 7. The target takes 6 (1d12) lightning damage. 8. The target takes 6 (1d12) thunder damage. 9. The target takes 6 (1d12) necrotic damage. 10. The target takes 6 (1d12) radiant damage. 11. The target takes 6 (1d12) poison damage. 12. The target takes 6 (1d12) psychic damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Attack", "description": "The ooze makes one Pseudopod attack." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Icosahedrooze",
    "metadata": { "size": "Gargantuan", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "20" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "350 (20d20 + 140)", "speed": "30 ft., climb 30 ft." },
    "ability_scores": { "STR": 23, "DEX": 10, "CON": 25, "INT": 12, "WIS": 6, "CHA": 3 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +6, Con +13", "skills": "", "vulnerabilities": "", "resistances": "see Reactive Mutations", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled, prone, restrained",
      "senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the ooze fails a saving throw, it can choose to succeed instead." },
      { "name": "Reactive Mutations", "description": "Immediately after the ooze takes damage, it gains resistance to that damage type. The ooze can have up to six resistances from this trait. If the ooze has its maximum number of resistances, the oldest resistance is lost when a new one is gained." },
      { "name": "Spider Climb", "description": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ooze uses Engulf and makes three Pseudopod attacks." },
      { "name": "Engulf", "description": "The ooze moves up to its speed. While doing so, it can enter Gargantuan or smaller creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a DC 21 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 21 (2d20) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 42 (4d20) acid damage at the start of each of the ooze's turns. When the ooze moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 21 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the ooze." },
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 14 (4d6) acid damage and the target suffers one of the following random effects (roll a d20): 1. The target takes 10 (1d20) force damage. 2. The target takes 10 (1d20) bludgeoning damage. 3. The target takes 10 (1d20) piercing damage. 4. The target takes 10 (1d20) slashing damage. 5. The target takes 10 (1d20) fire damage. 6. The target takes 10 (1d20) cold damage. 7. The target takes 10 (1d20) lightning damage. 8. The target takes 10 (1d20) thunder damage. 9. The target takes 10 (1d20) necrotic damage. 10. The target takes 10 (1d20) radiant damage. 11. The target takes 10 (1d20) poison damage. 12. The target takes 10 (1d20) psychic damage. 13. The target must succeed on a DC 21 Strength saving throw or be restrained. The target or a creature within reach of the target can use its action to make a DC 21 Strength check, freeing the restrained creature on a success. 14. The target must succeed on a DC 21 Wisdom saving throw or be afflicted by the confusion spell for 1 minute. 15. The target must succeed on a DC 21 Constitution saving throw or be afflicted by the reduce effect of the enlarge/reduce spell for 1 minute. 16. The target must succeed on a DC 21 Constitution saving throw or be afflicted by the enlarge effect of the enlarge/reduce spell for 1 minute. 17. The target must succeed on a DC 21 Constitution saving throw or be afflicted by the zippit! spell for 1 minute. 18. The target must succeed on a DC 21 Constitution saving throw or its hit point maximum is reduced by 10 (1d20) until it finishes a long rest. The ooze regains a number of hit points equal to this value. A creature whose hit point maximum is reduced to 0 dies. 19. The target must succeed on a DC 21 Strength saving throw or be engulfed by the ooze. 20. Roll twice more on this table." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Attack", "description": "The ooze makes one Pseudopod attack." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Gelatinooze",
    "metadata": { "size": "Tiny", "type": "Ooze", "tags": [], "alignment": "Unaligned", "cr": "1/8" },
    "combat_stats": { "ac": "8", "hp": "9 (2d4 + 4)", "speed": "15 ft." },
    "ability_scores": { "STR": 12, "DEX": 6, "CON": 14, "INT": 1, "WIS": 6, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "", "immunities": "acid", "condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone",
      "senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8", "languages": "—"
    },
    "traits": [],
    "actions": [
      { "name": "Pseudopod", "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) acid damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Starved Dreamholder",
    "metadata": { "size": "Medium", "type": "Aberration", "tags": [], "alignment": "Neutral Evil", "cr": "7" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "91 (14d8 + 28)", "speed": "5 ft., fly 30 ft. (hover)" },
    "ability_scores": { "STR": 10, "DEX": 15, "CON": 14, "INT": 17, "WIS": 15, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "Int +6, Wis +5, Cha +6", "skills": "Perception +8", "vulnerabilities": "", "resistances": "psychic", "immunities": "", "condition_immunities": "prone",
      "senses": "darkvision 120 ft., passive Perception 18", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Keen Sight", "description": "The dreamholder has advantage on Wisdom (Perception) checks that rely on sight." },
      { "name": "Temporal Wake", "description": "While the dreamholder is not incapacitated, any creature that starts its turn within 5 feet of the dreamholder has its speed halved until the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dreamholder makes two attacks: one with its Bite and one with its Eye Ray." },
      { "name": "Bite", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) piercing damage." },
      { "name": "Eye Ray", "description": "The dreamholder shoots one of the following random eye rays (roll a d4): 1. Slowing Ray. 2. Fear Ray. 3. Enervation Ray. 4. Telekinetic Ray." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Dreamholder",
    "metadata": { "size": "Large", "type": "Aberration", "tags": [], "alignment": "Neutral Evil", "cr": "14" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "180 (19d10 + 76)", "speed": "5 ft., fly 30 ft. (hover)" },
    "ability_scores": { "STR": 10, "DEX": 15, "CON": 18, "INT": 19, "WIS": 15, "CHA": 19 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +9, Int +9, Wis +7, Cha +9", "skills": "Perception +12", "vulnerabilities": "", "resistances": "psychic", "immunities": "", "condition_immunities": "prone",
      "senses": "darkvision 120 ft., passive Perception 22", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Keen Sight", "description": "The dreamholder has advantage on Wisdom (Perception) checks that rely on sight." },
      { "name": "Temporal Wake", "description": "While the dreamholder is not incapacitated, any creature that starts its turn within 10 feet of the dreamholder has its speed halved until the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dreamholder makes three attacks: one with its Bite and two with its Eye Rays." },
      { "name": "Bite", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 16 (4d6 + 2) piercing damage." },
      { "name": "Eye Ray", "description": "The dreamholder shoots one of the following random eye rays (roll a d6): 1. Slowing Ray. 2. Fear Ray. 3. Enervation Ray. 4. Telekinetic Ray. 5. Sleep Ray. 6. Petrification Ray." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Eye Ray", "description": "The dreamholder uses one random eye ray." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Glutted Dreamholder",
    "metadata": { "size": "Large", "type": "Aberration", "tags": [], "alignment": "Neutral Evil", "cr": "21" },
    "combat_stats": { "ac": "19 (natural armour)", "hp": "312 (25d10 + 175)", "speed": "5 ft., fly 30 ft. (hover)" },
    "ability_scores": { "STR": 10, "DEX": 15, "CON": 24, "INT": 21, "WIS": 16, "CHA": 21 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +14, Int +12, Wis +10, Cha +12", "skills": "Perception +17", "vulnerabilities": "", "resistances": "psychic", "immunities": "", "condition_immunities": "prone",
      "senses": "darkvision 120 ft., passive Perception 27", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the dreamholder fails a saving throw, it can choose to succeed instead." },
      { "name": "Temporal Wake", "description": "While the dreamholder is not incapacitated, any creature that starts its turn within 20 feet of the dreamholder has its speed halved until the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dreamholder makes four attacks: one with its Bite and three with its Eye Rays." },
      { "name": "Bite", "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 19 (5d6 + 2) piercing damage." },
      { "name": "Eye Ray", "description": "The dreamholder shoots one of the following random eye rays (roll a d10): 1-8. Standard Rays. 9. Disintegration Ray. 10. Death Ray." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Eye Ray", "description": "The dreamholder uses one random eye ray." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Sleepwalker",
    "metadata": { "size": "Medium", "type": "Aberration", "tags": [], "alignment": "Neutral", "cr": "1" },
    "combat_stats": { "ac": "12", "hp": "32 (5d8 + 10)", "speed": "20 ft." },
    "ability_scores": { "STR": 14, "DEX": 10, "CON": 15, "INT": 6, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "psychic", "immunities": "", "condition_immunities": "charmed, frightened",
      "senses": "darkvision 60 ft., passive Perception 10", "languages": "Deep Speech"
    },
    "traits": [
      { "name": "Somnambulist", "description": "The sleepwalker is always considered to be under the effects of the sleep spell but is not incapacitated by it." }
    ],
    "actions": [
      { "name": "Slam", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Horror",
    "metadata": { "size": "Medium", "type": "Aberration", "tags": [], "alignment": "Neutral Evil", "cr": "3" },
    "combat_stats": { "ac": "13", "hp": "52 (8d8 + 16)", "speed": "30 ft." },
    "ability_scores": { "STR": 16, "DEX": 16, "CON": 14, "INT": 11, "WIS": 12, "CHA": 14 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Stealth +5", "vulnerabilities": "", "resistances": "psychic", "immunities": "", "condition_immunities": "frightened",
      "senses": "darkvision 60 ft., passive Perception 11", "languages": "Deep Speech, telepathy 60 ft."
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The horror makes two Claw attacks." },
      { "name": "Claw", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage plus 3 (1d6) psychic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Phantasm",
    "metadata": { "size": "Large", "type": "Aberration", "tags": [], "alignment": "Neutral Evil", "cr": "7" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "102 (12d10 + 36)", "speed": "40 ft." },
    "ability_scores": { "STR": 18, "DEX": 14, "CON": 16, "INT": 13, "WIS": 14, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Int +4, Wis +5, Cha +6", "skills": "Perception +8, Stealth +5", "vulnerabilities": "", "resistances": "psychic", "immunities": "", "condition_immunities": "frightened",
      "senses": "darkvision 120 ft., passive Perception 18", "languages": "Deep Speech, telepathy 120 ft."
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The phantasm makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage." },
      { "name": "Claw", "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage plus 7 (2d6) psychic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Faerie-o'-Fire",
    "metadata": { "size": "Small", "type": "Fey", "tags": [], "alignment": "Chaotic Neutral", "cr": "2" },
    "combat_stats": { "ac": "13", "hp": "31 (7d6 + 7)", "speed": "20 ft., fly 40 ft." },
    "ability_scores": { "STR": 3, "DEX": 17, "CON": 12, "INT": 12, "WIS": 12, "CHA": 15 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Perception +3, Stealth +5", "vulnerabilities": "cold", "resistances": "", "immunities": "fire", "condition_immunities": "",
      "senses": "darkvision 60 ft., passive Perception 13", "languages": "Sylvan"
    },
    "traits": [
      { "name": "Fire Aura", "description": "A creature that touches the faerie or hits it with a melee attack while within 5 feet of it takes 3 (1d6) fire damage." }
    ],
    "actions": [
      { "name": "Fire Ray", "description": "Ranged Spell Attack: +4 to hit, range 60 ft., one target. Hit: 10 (3d6) fire damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Minimic",
    "metadata": { "size": "Tiny", "type": "Monstrosity", "tags": ["Shapechanger"], "alignment": "Neutral", "cr": "1/8" },
    "combat_stats": { "ac": "11 (natural armour)", "hp": "7 (2d4 + 2)", "speed": "15 ft." },
    "ability_scores": { "STR": 10, "DEX": 10, "CON": 12, "INT": 5, "WIS": 10, "CHA": 8 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Stealth +2", "vulnerabilities": "", "resistances": "", "immunities": "acid", "condition_immunities": "prone",
      "senses": "darkvision 60 ft., passive Perception 10", "languages": "—"
    },
    "traits": [
      { "name": "Shapechanger", "description": "The minimic can use its action to polymorph into an object or back into its true, amorphous form." },
      { "name": "Adhesive (Object Form Only)", "description": "The minimic adheres to anything that touches it." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage plus 2 (1d4) acid damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Peeper",
    "metadata": { "size": "Tiny", "type": "Aberration", "tags": [], "alignment": "Neutral", "cr": "1/8" },
    "combat_stats": { "ac": "12", "hp": "5 (2d4)", "speed": "0 ft., fly 30 ft. (hover)" },
    "ability_scores": { "STR": 3, "DEX": 14, "CON": 10, "INT": 10, "WIS": 10, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Perception +4", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "prone",
      "senses": "darkvision 60 ft., passive Perception 14", "languages": "Deep Speech"
    },
    "traits": [],
    "actions": [
      { "name": "Eye Ray", "description": "The peeper shoots one random eye ray (roll a d4): 1. Fear Ray. 2. Slowing Ray. 3. Enervation Ray. 4. Telekinetic Ray." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Tarchaeologist",
    "metadata": { "size": "Medium", "type": "Elemental", "tags": [], "alignment": "Neutral", "cr": "3" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "52 (8d8 + 16)", "speed": "30 ft." },
    "ability_scores": { "STR": 16, "DEX": 16, "CON": 15, "INT": 13, "WIS": 10, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Investigation +3, Sleight of Hand +5", "vulnerabilities": "", "resistances": "", "immunities": "exhaustion, paralysed, unconscious", "condition_immunities": "",
      "senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10", "languages": "Aquan, Terran"
    },
    "traits": [
      { "name": "Arcane Power Source", "description": "The crystal in the tarchaeologist's magitech pistol can be targeted separately from the tarchaeologist (AC 19, 20 hit points, vulnerability to thunder damage, and immunity to all other damage types except bludgeoning, force, piercing, and slashing). If the tarchaeologist fails a saving throw against an area of effect, the crystal also takes half the damage dealt to the tarchaeologist." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The tarchaeologist makes two melee attacks or two ranged attacks." },
      { "name": "Pick", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage." },
      { "name": "Magitech Pistol", "description": "Ranged Weapon Attack: +5 to hit, range 30/90 ft., one target. Hit: 8 (1d10 + 3) force damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Swallybog Sharpfin",
    "metadata": { "size": "Medium", "type": "Humanoid", "tags": ["swallybog"], "alignment": "Neutral", "cr": "3" },
    "combat_stats": { "ac": "16 (hide armour, shield)", "hp": "90 (12d8 + 36)", "speed": "25 ft., swim 40 ft." },
    "ability_scores": { "STR": 16, "DEX": 14, "CON": 17, "INT": 7, "WIS": 13, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Athletics +5, Stealth +4, Survival +3", "vulnerabilities": "", "resistances": "poison", "immunities": "", "condition_immunities": "",
      "senses": "darkvision 60 ft., passive Perception 11", "languages": "Swallybog"
    },
    "traits": [
      { "name": "Amphibious", "description": "The swallybog can breathe air and water." },
      { "name": "Gullible", "description": "The swallybog has disadvantage on Wisdom (Insight) checks." },
      { "name": "Net Master", "description": "Being within 5 feet of a hostile creature doesn't impose disadvantage on the swallybog's ranged attack rolls. Making an attack with a net doesn't limit the number of non-net attacks the swallybog can make (included in actions)." },
      { "name": "Standing Leap", "description": "The swallybog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." },
      { "name": "Swamp Camouflage", "description": "The swallybog has advantage on Dexterity (Stealth) checks made to hide in swampy terrain." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The swallybog makes three attacks: one with its Net and two with its Trident." },
      { "name": "Trident", "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack, plus 5 (2d4) poison damage." },
      { "name": "Net", "description": "Ranged Weapon Attack: +4 to hit, range 5/10 ft., one target. Hit: the target is restrained if it is Large or smaller. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Mini Tar Elemental",
    "metadata": { "size": "Small", "type": "Elemental", "tags": [], "alignment": "Neutral", "cr": "2" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "55 (10d6 + 20)", "speed": "25 ft., burrow 25 ft., swim 30 ft." },
    "ability_scores": { "STR": 16, "DEX": 14, "CON": 15, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "acid, piercing; bludgeoning and slashing from nonmagical attacks", "immunities": "poison", "condition_immunities": "exhaustion, paralysed, petrified, poisoned, unconscious",
      "senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10", "languages": "Aquan, Terran"
    },
    "traits": [
      { "name": "Flammable", "description": "If the elemental takes fire damage, it ignites. It takes 3 (1d6) fire damage at the start of each of its turns and its weapon attacks deal an additional 3 (1d6) fire damage. If the elemental is subject to heavy rain or takes 5 or more cold damage in a single instance, the flames are extinguished and the effects end." },
      { "name": "Oil Form", "description": "When the elemental moves through water, it uses its swimming speed to skim along the water's surface; it can't submerge below the surface of water without a powerful detergent." },
      { "name": "Water Form", "description": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The elemental makes two Slam attacks." },
      { "name": "Slam", "description": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage and the target's speed is reduced by 10 feet until it or another creature within reach of the target uses its action to clean the target. This speed reduction can stack; if the target's walking speed is reduced to 0 feet by this effect, it is restrained." },
      { "name": "Arcane Activation", "description": "The elemental attempts to possess one Medium or smaller corporeal creature in close proximity to an arcane power source, such as a magitech firearm. The creature must succeed on a DC 13 Strength saving throw or be under the elemental's control until the elemental releases it as a bonus action, or the arcane power source is destroyed or is more than 5 feet from the possessed creature. While the elemental controls a creature in this way, the possessed creature gains the features in the Arcane Possession sidebar." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Tar Elemental",
    "metadata": { "size": "Large", "type": "Elemental", "tags": [], "alignment": "Neutral", "cr": "5" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "126 (12d10 + 60)", "speed": "30 ft., burrow 30 ft., swim 60 ft." },
    "ability_scores": { "STR": 19, "DEX": 14, "CON": 20, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "acid, piercing; bludgeoning and slashing from nonmagical attacks", "immunities": "poison", "condition_immunities": "exhaustion, paralysed, petrified, poisoned, unconscious",
      "senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10", "languages": "Aquan, Terran"
    },
    "traits": [
      { "name": "Flammable", "description": "If the elemental takes fire damage, it ignites. It takes 7 (2d6) fire damage at the start of each of its turns and its weapon attacks deal an additional 7 (2d6) fire damage. If the elemental is subject to heavy rain or takes 5 or more cold damage in a single instance, the flames are extinguished and the effects end." },
      { "name": "Oil Form", "description": "When the elemental moves through water, it uses its swimming speed to skim along the water's surface; it can't submerge below the surface of water without a powerful detergent." },
      { "name": "Water Form", "description": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The elemental makes two Slam attacks." },
      { "name": "Slam", "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage and the target's speed is reduced by 10 feet until it or another creature within reach of the target uses its action to clean the target. This speed reduction can stack; if the target's walking speed is reduced to 0 feet by this effect, it is restrained." },
      { "name": "Arcane Activation", "description": "The elemental attempts to possess one Huge or smaller corporeal creature in close proximity to an arcane power source, such as a magitech firearm. The creature must succeed on a DC 15 Strength saving throw or be under the elemental's control until the elemental releases it as a bonus action, or the arcane power source is destroyed or is more than 5 feet from the possessed creature. While the elemental controls a creature in this way, the possessed creature gains the features in the Arcane Possession sidebar." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Tarannosaurus Rex",
    "metadata": { "size": "Huge", "type": "Elemental", "tags": [], "alignment": "Neutral", "cr": "10" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "230 (20d12 + 100)", "speed": "50 ft." },
    "ability_scores": { "STR": 26, "DEX": 14, "CON": 20, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "", "vulnerabilities": "", "resistances": "acid, necrotic, piercing; bludgeoning and slashing from nonmagical attacks", "immunities": "poison", "condition_immunities": "exhaustion, paralysed, petrified, poisoned, unconscious",
      "senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10", "languages": "Aquan, Terran"
    },
    "traits": [
      { "name": "Arcane Power Source", "description": "The crystal in the tarannosaurus' ribcage can be targeted separately from the tarannosaurus (AC 19, 64 hit points, vulnerability to thunder damage, and immunity to all other damage types except bludgeoning, force, piercing, and slashing). If the tarannosaurus fails a saving throw against an area of effect, the crystal also fails the saving throw. If the crystal is destroyed the tar elemental possessing the tarannosaurus moves into the nearest unoccupied space without provoking opportunity attacks and the tarannosaurus crumbles into a pile of inanimate bones." },
      { "name": "Flammable", "description": "If the tarannosaurus takes fire damage, it ignites. It takes 10 (3d6) fire damage at the start of each of its turns and its melee attacks and Taruption deal an additional 10 (3d6) fire damage. If the tarannosaurus is subject to heavy rain or takes 10 or more cold damage in a single instance, the flames are extinguished and the effects end." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The tarannosaurus makes two attacks: one with its Bite and one with its Tail. It can't make both attacks against the same target. It can use Taruption in place of the Bite attack." },
      { "name": "Bite", "description": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 34 (4d12 + 8) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained and the tarannosaurus can't bite another target." },
      { "name": "Tail", "description": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) bludgeoning damage." },
      { "name": "Taruption (Recharge 5-6)", "description": "The tarannosaurus launches a torrent of tar in a 30-foot cone. Each creature in the cone that isn't tar- or water-based must succeed on a DC 17 Strength saving throw or become restrained for 1 minute. A creature can use its action to make a DC 17 Strength check, ending the effect on itself on a success. This area is difficult terrain for 1 minute, or until it is cleaned." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Maestro",
    "metadata": { "size": "Medium", "type": "Humanoid", "tags": ["any race"], "alignment": "any alignment", "cr": "5" },
    "combat_stats": { "ac": "16 (breastplate)", "hp": "91 (14d8 + 28)", "speed": "30 ft." },
    "ability_scores": { "STR": 10, "DEX": 15, "CON": 14, "INT": 12, "WIS": 10, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +5, Cha +6", "skills": "Acrobatics +8, Performance +9, Sleight of Hand +8", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "passive Perception 10", "languages": "any three languages"
    },
    "traits": [
      { "name": "Spellcasting", "description": "The maestro is a 10th-level spellcaster and can cast the following spells, using Charisma as its spellcasting ability (spell save DC 14, +6 to hit with spell attacks):\nAt will: can'trip*, mage hand, vicious mockery\n2/day each: charm person, invisibility, lightning bolt, slow, switcheroo*\n1/day: dominate person\n*See Appendix B; bold indicates combat spell; indicates concentration." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The maestro makes two attacks with its Rapier." },
      { "name": "Rapier", "description": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d8+2) piercing damage." },
      { "name": "Vicious Mockery", "description": "Cantrip: DC 14 Wisdom saving throw, range 60 ft., one target that can hear the maestro. Failure: 5 (2d4) psychic damage and the target has disadvantage on the next attack roll it makes before the end of its next turn." }
    ],
    "bonus_actions": [
      { "name": "Inspire (3/Short or Long Rest)", "description": "The maestro targets one creature within 60 feet of it. If the target can hear the maestro, the target gains a Bardic Inspiration die; a d10. Once within the next 10 minutes, the creature can roll the die and add the number to one ability check, attack roll, or saving throw it makes. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Ranger",
    "metadata": { "size": "Medium", "type": "Humanoid", "tags": ["any race"], "alignment": "any alignment", "cr": "6" },
    "combat_stats": { "ac": "16 (studded leather)", "hp": "149 (23d8 + 46)", "speed": "30 ft. (40 ft. with longstrider)" },
    "ability_scores": { "STR": 14, "DEX": 18, "CON": 14, "INT": 10, "WIS": 16, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +5, Dex +7", "skills": "Animal Handling +6, Perception +6, Stealth +7, Survival +6", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "passive Perception 16", "languages": "any two languages"
    },
    "traits": [
      { "name": "Land's Stride", "description": "Moving through nonmagical difficult terrain costs the ranger no extra movement. It can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard." },
      { "name": "Spellcasting", "description": "The ranger is a 6th-level spellcaster and can cast the following spells, using Wisdom as its spellcasting ability (spell save DC 14, +6 to hit with spell attacks):\n2/day each: cure wounds, locate animals or plants, longstrider, spike growth\n1/day each: conjure animals, wind wall\n*See Appendix B; bold indicates combat spell; indicates concentration." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ranger makes three attacks with its Shortsword or two attacks with its Longbow." },
      { "name": "Shortsword", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
      { "name": "Longbow", "description": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit: 8 (1d8+4) piercing damage." },
      { "name": "Volley", "description": "The ranger makes a separate Longbow attack against each creature of its choice within 10 feet of a point it can see within the weapon's range." },
      { "name": "Whirlwind", "description": "The ranger makes a separate Shortsword attack against each creature of its choice within its reach." }
    ],
    "bonus_actions": [
      { "name": "Hunter's Mark (1/Short or Long Rest)", "description": "The ranger chooses one creature it can see within 90 feet and mystically marks it as its quarry for 1 hour. For the duration, the ranger deals an extra 3 (1d6) damage to the target whenever it hits it with a weapon attack, and the ranger has advantage on any Wisdom (Perception) or Wisdom (Survival) check it makes to find the creature. If the target drops to 0 hit points before this effect ends, the ranger can use a bonus action on a subsequent turn to mark a new creature." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Sorcerer",
    "metadata": { "size": "Medium", "type": "Humanoid", "tags": ["any race"], "alignment": "any alignment", "cr": "4" },
    "combat_stats": { "ac": "11 (14 with mage armor)", "hp": "44 (8d8 + 8)", "speed": "30 ft." },
    "ability_scores": { "STR": 9, "DEX": 12, "CON": 14, "INT": 10, "WIS": 10, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +4, Cha +5", "skills": "Arcana +2, Deception +5, Persuasion +5", "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "passive Perception 10", "languages": "any two languages"
    },
    "traits": [
      { "name": "Metamagic", "description": "The sorcerer has 7 sorcery points and regains all expended sorcery points when it finishes a long rest. It can spend these points in the following ways:\nQuickened Spell. When the sorcerer casts a spell that has a casting time of 1 action, it can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.\nTwinned Spell. When the sorcerer casts a spell that targets only one creature and doesn't have a range of self, it can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip)." },
      { "name": "Spellcasting", "description": "The sorcerer is a 7th-level spellcaster and can cast the following spells, using Charisma as its spellcasting ability (spell save DC 13, +5 to hit with spell attacks):\nAt will: can'trip*, light, magnetobolt, message, shocking grasp\n2/day each: mage armor, misty step, haste, magnetite shard*\n1/day: blinding radiance*\n*See Appendix B; bold indicates combat spell; indicates concentration." }
    ],
    "actions": [
      { "name": "Dagger", "description": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d4+1) piercing damage." },
      { "name": "Magnetobolt", "description": "Ranged Spell Attack: +5 to hit, range 90 ft., one target. Hit: 7 (2d6) force damage and the creature must succeed on a Strength saving throw or be knocked prone. A creature made of ferrous metal or wearing ferrous armour has disadvantage on this saving throw." },
      { "name": "Shocking Grasp", "description": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (2d8) lightning damage and the creature can't take reactions until the start of its next turn. The sorcerer has advantage on the attack roll if the target is wearing armour made of metal." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Fathomcaller Warlock",
    "metadata": { "size": "Medium", "type": "Humanoid", "tags": ["any race"], "alignment": "any alignment", "cr": "9" },
    "combat_stats": { "ac": "13 (16 with mage armor)", "hp": "120 (16d8 + 48)", "speed": "30 ft., swim 40 ft." },
    "ability_scores": { "STR": 9, "DEX": 16, "CON": 16, "INT": 11, "WIS": 15, "CHA": 20 },
    "proficiencies_and_resistances": {
      "saving_throws": "Wis +6, Cha +9", "skills": "Deception +9, Intimidation +9, Religion +4", "vulnerabilities": "", "resistances": "cold", "immunities": "", "condition_immunities": "",
      "senses": "passive Perception 12", "languages": "any two languages"
    },
    "traits": [
      { "name": "Eldritch Mind", "description": "The warlock has advantage on saving throws made to maintain its concentration." },
      { "name": "Spellcasting", "description": "The warlock is a 15th-level spellcaster and can cast the following spells, using Charisma as its spellcasting ability (spell save DC 17, +9 to hit with spell attacks):\nAt will: alter self, detect magic, eldritch blast, mage armor, mage hand, pins & needles*, swarm*\n3/short rest: feverskin*, conjure anomaly*, dimension door, gravity smash*, hold monster, mislead\n1/day: arcanomagnetic storm*, lungburst*, true seeing\n*See Appendix B; bold indicates combat spell; indicates concentration." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The warlock makes three simultaneous Eldritch Blast attacks against the same or different targets within range." },
      { "name": "Dagger", "description": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." },
      { "name": "Eldritch Blast", "description": "Ranged Spell Attack: +9 to hit, range 300 ft., one creature. Hit: 10 (1d10+5) force damage and the warlock can choose to move the target 10 feet further from or closer to the warlock in a straight line." },
      { "name": "Plunge of the Deep (1/Short or Long Rest)", "description": "The warlock teleports it and up to six other willing creatures it can see within 30 feet of it to a body of water it has seen (pond-sized or larger) within 2 miles of it." }
    ],
    "bonus_actions": [
      { "name": "Fathomcaller's Tentacle (4/Day)", "description": "The warlock summons a 10-foot-long tentacle at a point it can see within 60 feet of it, which lasts for 1 minute or until it uses this action again. When it creates the tentacle, the warlock can make a melee spell attack (+9 to hit) with the tentacle against a target within 10 feet of it, dealing 9 (2d8) cold damage on a hit. On its subsequent turns, the warlock can use a bonus action to move the tentacle up to 30 feet and repeat the attack." }
    ],
    "reactions": [
      { "name": "Fathom's Caress", "description": "When the warlock or a creature the warlock can see takes damage while within 10 feet of the tentacle summoned by Fathomcaller's Tentacle, it can choose one of those creatures and reduce the damage to that creature by 9 (2d8)." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": { "assessment_check": null, "harvest_check": null, "parts": [], "guaranteed_drops": [] }
  },
  {
    "name": "Amalgamation",
    "metadata": { "size": "Gargantuan", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "23" },
    "combat_stats": { "ac": "18", "hp": "175 (10d20 + 70) + 175 (10d20 + 70) per player character", "speed": "5 ft." },
    "ability_scores": { "STR": 30, "DEX": 11, "CON": 27, "INT": 22, "WIS": 18, "CHA": 20 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +17, Dex +7, Con +14, Int +13, Wis +11, Cha +5", "skills": "Arcana +13, Deception +12, Insight +11, Perception +11",
      "vulnerabilities": "", "resistances": "", "immunities": "Psychic", "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned, Prone, Stunned",
      "senses": "Truesight 60 ft., passive Perception 21", "languages": "All; telepathy 1 mile"
    },
    "traits": [
      { "name": "Contaminating Presence", "description": "A creature that starts its turn within 120 feet of the Amalgamation is subjected to the following effect. Constitution Saving Throw: DC 20. Failure: The target gains a Contamination level. Failure or Success: 14 (4d6) Necrotic damage." },
      { "name": "Immutable Form", "description": "The Amalgamation has Immunity to any spell or effect that would alter its form." },
      { "name": "Malignancy", "description": "The Amalgamation can’t be teleported or travel to another plane against its will." },
      { "name": "Rejuvenation", "description": "If the Amalgamation is destroyed in the Mortal World, it reappears 1d10 days later with all of its Hit Points unless its roots in the Space Between Worlds are also destroyed." },
      { "name": "Ultimate Corruption", "description": "Necrotic damage dealt by the Amalgamation ignores Resistance and treats Immunity as Resistance instead." }
    ],
    "actions": [], "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Bite", "description": "Melee Attack Roll: +17, reach 10 ft. Hit: 36 (4d12 + 10) Force damage. If the target is a Large or smaller creature Grappled by the Amalgamation, the grapple ends and the target is swallowed. While swallowed, the target has the Blinded and Restrained conditions, has Total Cover from effects originating from outside the Amalgamation, and takes 42 (12d6) Necrotic damage and gains a Contamination level at the start of each of the Amalgamation’s turns. If the Amalgamation takes 50+ damage in a single turn from a creature inside it, it must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which land in spaces within 10 feet of the Amalgamation and have the Prone condition." },
      { "name": "Tentacle", "description": "Melee Attack Roll: +17, reach 60 ft. Hit: 28 (4d8 + 10) Force damage, and the target has the Grappled condition (escape DC 25). While Grappled, the target has the Restrained condition. The Amalgamation has twelve tentacles, each of which can grapple one target." },
      { "name": "Fling", "description": "One Large or smaller object held or creature Grappled by the Amalgamation is thrown up to 60 feet, landing with the Prone condition. If the target strikes a solid surface, it takes 35 (10d6) Force damage." },
      { "name": "Mind-Breaking Whispers (Recharge 5–6)", "description": "Intelligence Saving Throw: DC 25, one creature within 120 feet of the Amalgamation. Failure: The target becomes insane until it finishes a Long Rest. While insane, the target can’t take actions, understand other creatures, read, or speak anything but gibberish. A Greater Restoration or Heal spell ends the effect early. Failure or Success: 70 (20d6) Psychic damage." },
      { "name": "Forced Mutation (1/Round)", "description": "Each creature within 120 feet of the Amalgamation with one or more Contamination levels takes 10 (3d6) Necrotic damage and gains a randomly determined mutation." },
      { "name": "Piper at the Gate (1/Round)", "description": "A Pyknic Maunder appears in an unoccupied space within 30 feet of the Amalgamation, acting after the Amalgamation on Initiative count 20 and under the Amalgamation’s direct control." },
      { "name": "Epic Resistance", "description": "The Amalgamation chooses one condition, spell, or other effect currently affecting them and rolls 1d20. On an 11+, the effect ends on it. The Amalgamation can use this Epic Action even if it would otherwise be unable to take actions." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 30, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Contaminated Ichor", "dc": 30, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": "14 (4d6) Necrotic damage and gain a Contamination level." },
        { "name": "Amalgamation Tentacle", "dc": 30, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x The Crown of Westemär"],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 30)",
        "Fluid: Monster Blood, Contaminated Ichor, Goopy Ooze, Acidic Bile (DC 30)",
        "Organs: Eyes, Heart, Flesh, Guts (DC 30)",
        "Natural Weapons: Tentacles, Teeth (DC 30)",
        "Hair: Hair (DC 30)",
        "Hide: Skin (DC 30)",
        "Dust: Aberrant Dust (DC 30)"
      ]
    }
  },
  {
    "name": "Anomollusk",
    "metadata": { "size": "Huge", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "8" },
    "combat_stats": { "ac": "18", "hp": "125 (10d12 + 60)", "speed": "20 ft., climb 10 ft." },
    "ability_scores": { "STR": 21, "DEX": 6, "CON": 23, "INT": 5, "WIS": 8, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +5, Dex -2, Con +6, Int +0, Wis +2, Cha +1", "skills": "Perception +2, Stealth +5",
      "vulnerabilities": "", "resistances": "Spell damage; Bludgeoning, Piercing, and Slashing from magical attacks", "immunities": "", "condition_immunities": "",
      "senses": "Blindsight 60 ft., passive Perception 12", "languages": "None"
    },
    "traits": [
      { "name": "Snail Trail", "description": "When the anomollusk moves through a space, it fills the space with contaminated mucus that remains for 10 minutes. A creature that ends its turn in the mucus is covered in goop and subjected to the following effect. Dexterity Saving Throw: DC 17. Failure: 20 (8d4) Acid damage, and the target has the Slowed condition. Each time the creature ends its turn with the Slowed condition, it gains a Contamination level. A creature within 5 feet can take an action to clean away the goop, ending the Slowed condition." }
    ],
    "actions": [
      { "name": "Slobber", "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 20 (8d4) Acid damage." },
      { "name": "Creep", "description": "The anomollusk moves up to its Speed, and can enter the spaces of Large or smaller creatures as it does. Each creature whose space it enters is subjected once to the following effect. Strength Saving Throw: DC 17. Success: The target is pushed 5 feet away from the anomollusk into a space of its choice. If the target chooses not to move, it suffers the effects of a failure. Failure: The target has the Prone condition and is subjected to Snail Trail." }
    ],
    "bonus_actions": [],
    "reactions": [
      { "name": "Shell Reflection", "description": "Trigger: The anomollusk takes damage from a spell or magical attack. Response: The attacker takes Radiant damage equal to the triggering damage and causes an Arcane Anomaly." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Anomollusk Shell", "dc": 15, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null },
        { "name": "Contaminated Mucus", "dc": 15, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": "20 (8d4) Acid damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor, Goopy Ooze, Acidic Bile, Mucus (DC 15)",
        "Organs: Eyes, Guts, Glands (DC 15)",
        "Hide: Shell, Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Arcane Wraith",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "13", "hp": "67 (9d8 + 27)", "speed": "0 ft., fly 60 ft." },
    "ability_scores": { "STR": 6, "DEX": 16, "CON": 16, "INT": 17, "WIS": 10, "CHA": 15 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str -2, Dex +3, Con +3, Int +3, Wis +0, Cha +2", "skills": "",
      "vulnerabilities": "", "resistances": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from attacks that aren’t silvered", "immunities": "Necrotic, Poison", "condition_immunities": "Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "The languages it knew in life"
    },
    "traits": [
      { "name": "Incorporeal Movement", "description": "The arcane wraith can move through other creatures and objects as if they were Difficult Terrain. It takes 5 (1d10) Force damage if it ends its turn inside an object." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The arcane wraith makes three Comet Shard attacks." },
      { "name": "Comet Shard", "description": "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 120 ft. Hit: 21 (4d8 + 3) Force damage, and the target is pushed 10 feet away from the arcane wraith." },
      { "name": "Nightmare Pattern (Recharge 5–6)", "description": "Intelligence Saving Throw: DC 14, each creature in a 30-foot Cube centered on a point the arcane wraith can see. Failure: The target has the Blinded condition (save ends). While Blinded, the target has the Immobilized condition. The effect ends for the target if it takes damage or another creature takes an action to shake it out of its nightmare. When the effect ends, the target takes 14 (4d6) Psychic damage." },
      { "name": "Spellcasting", "description": "The arcane wraith casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save DC 14): At Will: Mage Hand (the hand is Invisible), Minor Illusion." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Ectoplasm", "dc": 15, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1d3 uncommon potions or spell scrolls", "1x Spellbook (2d6 wizard spells of 3rd level and lower)"],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 15)",
        "Fluid: Contaminated Ichor, Ectoplasm (DC 15)",
        "Dust: Undead Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Beetle Knight",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "4" },
    "combat_stats": { "ac": "19", "hp": "95 (10d10 + 40)", "speed": "30 ft., climb 20 ft., fly 20 ft." },
    "ability_scores": { "STR": 18, "DEX": 6, "CON": 18, "INT": 3, "WIS": 15, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Dex -2, Con +4, Int -4, Wis +2, Cha -3", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "Charmed, Frightened",
      "senses": "Darkvision 120 ft., passive Perception 12", "languages": "None"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The beetle knight makes two Scything Arm-Blade attacks." },
      { "name": "Scything Arm-Blade", "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 13 (2d8 + 4) Slashing damage." },
      { "name": "Pincer Horn", "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 15 (2d10 + 4) Piercing damage, or 26 (4d10 + 4) Piercing damage if the beetle knight moved 20+ feet straight toward the target immediately before the hit. If the target is Medium or smaller, it has the Grappled condition (escape DC 14). While Grappled, the target has the Restrained condition and the beetle knight can’t use its Pincer Horn against another target." }
    ],
    "bonus_actions": [
      { "name": "Fling", "description": "Strength Saving Throw: DC 14, one creature Grappled by the beetle knight. Failure: The target is thrown up to 1d6 × 10 feet, landing with the Prone condition. If the target strikes a solid surface, it takes 3 (1d6) Bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 14 Dexterity saving throw or take the same damage and have the Prone condition." }
    ],
    "reactions": [
      { "name": "Carapace Parry", "description": "Trigger: A creature the beetle knight can see hits it with an attack. Response: The beetle knight adds 2 to its AC against that attack, possibly causing it to miss." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Scything Arm-Blade", "dc": 10, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null },
        { "name": "Pincer Horn", "dc": 10, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 10)",
        "Organs: Eyes, Guts (DC 10)",
        "Natural Weapons: Blades, Mandibles (DC 10)",
        "Hide: Carapace (DC 10)"
      ]
    }
  },
  {
    "name": "Belfray",
    "metadata": { "size": "Medium", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "14", "hp": "104 (11d10 + 44)", "speed": "20 ft., fly 60 ft." },
    "ability_scores": { "STR": 13, "DEX": 19, "CON": 18, "INT": 7, "WIS": 14, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +1, Dex +7, Con +7, Int -2, Wis +5, Cha -3", "skills": "Stealth +7",
      "vulnerabilities": "", "resistances": "Necrotic, Poison", "immunities": "", "condition_immunities": "Poisoned, Blinded",
      "senses": "Blindsight 60 ft., passive Perception 12", "languages": "None"
    },
    "traits": [
      { "name": "Flyby", "description": "The belfray doesn’t provoke Opportunity Attack action when it flies out of an enemy’s reach." },
      { "name": "Keen Hearing", "description": "The belfray has Advantage on Wisdom (Perception) checks that rely on hearing." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The belfray makes two Claws attacks and one Bite attack. It can replace its Bite with Sonic Blast, if available." },
      { "name": "Claws", "description": "Melee Attack Roll: +7, reach 10 ft. Hit: 15 (2d10 + 4) Slashing damage." },
      { "name": "Bite", "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage, and the target has the Enfeebled condition until the end of the belfray’s next turn. The belfray regains Hit Points equal to the damage dealt by its Bite." },
      { "name": "Sonic Blast (Recharge 5–6)", "description": "Constitution Saving Throw: DC 15, each creature in a 30-foot Emanation originating from the belfray that can hear it. Failure: 22 (4d8 + 4) Thunder damage, and the target has the Weakened condition (save ends). Success: Half damage only." }
    ],
    "bonus_actions": [
      { "name": "Shadow Stealth", "description": "While in Dim Light or Darkness, the belfray takes the Hide action." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Webbed Membrane", "dc": 15, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Heart, Guts (DC 15)",
        "Bones: Skull, Spine (DC 15)",
        "Natural Weapons: Claws, Teeth (DC 15)",
        "Hair: Fur (DC 15)",
        "Hide: Skin, Webbed Membrane (DC 15)"
      ]
    }
  },
  {
    "name": "Big Linda",
    "metadata": { "size": "Huge", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "9" },
    "combat_stats": { "ac": "17", "hp": "168 (16d12 + 48)", "speed": "50 ft." },
    "ability_scores": { "STR": 25, "DEX": 10, "CON": 19, "INT": 2, "WIS": 12, "CHA": 9 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Dex +0, Con +4, Int -4, Wis +1, Cha -1", "skills": "Perception +5",
      "vulnerabilities": "", "resistances": "", "immunities": "Acid", "condition_immunities": "",
      "senses": "Blindsight 30 ft., passive Perception 15", "languages": "None"
    },
    "traits": [
      { "name": "Rejuvenation", "description": "If Big Linda is destroyed and her corpse is left within an area of the Deep Haze for 1 hour, she is revived with all of her Hit Points." },
      { "name": "Regeneration", "description": "When Big Linda starts her turn in an area of the Deep Haze, she regains 10 Hit Points. Big Linda dies only if she starts her turn with 0 Hit Points and doesn’t regenerate." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "Big Linda makes one Bite attack and one Tail attack." },
      { "name": "Bite", "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 33 (4d12 + 7) Piercing damage, and if the target is Medium or smaller, it has the Grappled condition (escape DC 19). While Grappled, the target has the Restrained condition and Big Linda can’t Bite another target." },
      { "name": "Tail", "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 20 (3d8 + 7) Bludgeoning damage." },
      { "name": "Acid Spew (Recharge 5–6)", "description": "Dexterity Saving Throw: DC 16, each creature in a 30-foot Cone. Failure: 63 (14d8) Acid damage. Success: Half damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Acidic Bile", "dc": 20, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": "14 (4d6) Acid damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 20)",
        "Fluid: Monster Blood, Contaminated Ichor, Acidic Bile (DC 20)",
        "Organs: Eyes, Heart, Guts, Glands, Flesh (DC 20)",
        "Bones: Skull, Spine, Ribs (DC 20)",
        "Natural Weapons: Teeth (DC 20)",
        "Hide: Skin (DC 20)"
      ]
    }
  },
  {
    "name": "Bigger Linda",
    "metadata": { "size": "Gargantuan", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "20" },
    "combat_stats": { "ac": "20", "hp": "74 (4d20 + 32) + 74 (4d20 + 32) per player character", "speed": "60 ft." },
    "ability_scores": { "STR": 29, "DEX": 15, "CON": 26, "INT": 2, "WIS": 15, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +9, Dex +8, Con +14, Int -4, Wis +8, Cha +6", "skills": "Athletics +15, Perception +14",
      "vulnerabilities": "", "resistances": "Poison", "immunities": "Acid, Necrotic", "condition_immunities": "",
      "senses": "Blindsight 60 ft., passive Perception 24", "languages": "None"
    },
    "traits": [
      { "name": "Rejuvenation", "description": "If Bigger Linda is destroyed and her corpse is left within an area of the Deep Haze for 1 hour, she is revived with all of her Hit Points." },
      { "name": "Regeneration", "description": "When Bigger Linda starts her turn in an area of the Deep Haze, she regains 20 Hit Points. Bigger Linda dies only if she starts her turn with 0 Hit Points and doesn’t regenerate." },
      { "name": "Haze Aura", "description": "A creature that starts its turn within 30 feet of Bigger Linda is subjected to the following effect. Constitution Saving Throw: DC 22. Failure: The target gains a Contamination level. Failure or Success: 14 (4d6) Necrotic damage." },
      { "name": "Siege Monster", "description": "Bigger Linda deals double damage to objects and structures." },
      { "name": "Immutable Form", "description": "Bigger Linda has Immunity to any spell or effect that would alter her form." }
    ],
    "actions": [], "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Bite", "description": "Melee Attack Roll: +15, reach 10 ft. Hit: 35 (4d12 + 9) Piercing damage, and if the target is Large or smaller, it has the Grappled condition (escape DC 23). While Grappled, the target has the Restrained condition and Bigger Linda can’t Bite another target." },
      { "name": "Tail", "description": "Melee Attack Roll: +15, reach 15 ft. Hit: 22 (3d8 + 9) Bludgeoning damage, and if the target is Large or smaller, it is pushed 20 feet away from Bigger Linda and has the Prone condition." },
      { "name": "Stomp", "description": "Melee Attack Roll: +15, reach 5 ft. Hit: 25 (3d10 + 9) Bludgeoning damage. Constitution Saving Throw: DC 23. Failure: The target has the Staggered condition (save ends)." },
      { "name": "Breathe Deep", "description": "Bigger Linda’s Breath Weapon recharges. Bigger Linda can only take this Epic Action as the first Epic Action she uses this round. After using this Epic Action, Bigger Linda can’t take her Bite Epic Action until the start of the next round." },
      { "name": "Breath Weapon (Special Recharge)", "description": "Dexterity Saving Throw: DC 22, each creature in a 60-foot long, 5-foot wide Line. Failure: 31 (7d8) Necrotic damage plus 31 (7d8) Force damage, and the target gains a Contamination level. Success: Half damage only." },
      { "name": "Trampling Rampage (Recharges When Bloodied)", "description": "Bigger Linda moves up to her Speed in a straight line, moving through the space of Large or smaller creatures in her path. She makes one Stomp attack against each creature she moves through." },
      { "name": "Teleport (1/Round)", "description": "Bigger Linger teleports up to 120 feet to an unoccupied space she can see within the Deep Haze." },
      { "name": "Epic Resistance", "description": "Bigger Linda chooses one condition, spell, or other effect currently affecting them and rolls 1d20. On an 11+, the effect ends on her. Bigger Linda can use this Epic Action even if she would otherwise be unable to take actions, her actions are being controlled by another creature, or if a spell or effect alters her game statistics." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Aberration Essence", "dc": 25, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Acidic Bile", "dc": 25, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": "14 (4d6) Acid damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 25)",
        "Fluid: Monster Blood, Contaminated Ichor, Acidic Bile (DC 25)",
        "Organs: Eyes, Heart, Guts, Glands, Flesh (DC 25)",
        "Bones: Skull, Spine, Ribs (DC 25)",
        "Natural Weapons: Teeth (DC 25)",
        "Hide: Skin (DC 25)"
      ]
    }
  },
  {
    "name": "Bloated Hive",
    "metadata": { "size": "Medium", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "4" },
    "combat_stats": { "ac": "15", "hp": "82 (11d8 + 33)", "speed": "30 ft." },
    "ability_scores": { "STR": 11, "DEX": 16, "CON": 16, "INT": 11, "WIS": 12, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +0, Dex +3, Con +3, Int +0, Wis +1, Cha -3", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "Blinded, Frightened",
      "senses": "Tremorsense 60 ft., passive Perception 11", "languages": "None"
    },
    "traits": [
      { "name": "Insect Swarm", "description": "The bloated hive emits a 10-foot Emanation of buzzing insects. A creature that starts its turn in the Emanation takes 10 (3d6) Necrotic damage." },
      { "name": "Disrupt the Hive", "description": "When the bloated hive dies, it immediately spawns a Swarm of Contaminated Insects in its space." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The Bloated Hive makes two attacks." },
      { "name": "Claws", "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3) Slashing damage." },
      { "name": "Spawn Swarm (Recharge 5–6)", "description": "The bloated hive creates a Swarm of Contaminated Insects, which appears in an unoccupied space within 5 feet. The swarm takes its turn immediately after the bloated hive." }
    ],
    "bonus_actions": [
      { "name": "Distracting Swarm", "description": "The bloated hive causes its Insect Swarm to fly in the face of a creature within 5 feet of it. The target can’t take Reactions until the end of the bloated hive’s turn." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Hive Sap", "dc": 10, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Monster Blood, Contaminated Ichor, Mucus, Sap (DC 10)",
        "Organs: Guts, Glands, Flesh (DC 10)",
        "Bones: Spine, Ribs (DC 10)",
        "Natural Weapons: Claws (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Swarm of Contaminated Insects",
    "metadata": { "size": "Medium", "type": "Swarm of Tiny Beasts", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1" },
    "combat_stats": { "ac": "12", "hp": "22 (5d8)", "speed": "0 ft., fly 20 ft." },
    "ability_scores": { "STR": 3, "DEX": 15, "CON": 10, "INT": 1, "WIS": 7, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "",
      "vulnerabilities": "", "resistances": "Bludgeoning, Necrotic, Piercing, Slashing", "immunities": "", "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Blindsight 10 ft., passive Perception 8", "languages": "None"
    },
    "traits": [
      { "name": "Swarm", "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can’t regain Hit Points or gain Temporary Hit Points." }
    ],
    "actions": [
      { "name": "Contaminated Bites", "description": "Melee Attack Roll: +4, reach 0 ft. Hit: 10 (3d6) Necrotic damage, or 3 (1d6) Necrotic damage if the swarm has the Bloodied condition. Constitution Saving Throw: DC 10. Failure: The target gains one Contamination level." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": null,
      "harvest_check": null,
      "parts": [],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": []
    }
  },
  {
    "name": "Bojack",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "15", "hp": "93 (11d10 + 33)", "speed": "60 ft., climb 30 ft." },
    "ability_scores": { "STR": 15, "DEX": 18, "CON": 16, "INT": 3, "WIS": 12, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +2, Dex +4, Con +3, Int -4, Wis +1, Cha -3", "skills": "Stealth +10",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "Charmed, Frightened",
      "senses": "Blindsight 120 ft., passive Perception 11", "languages": "None"
    },
    "traits": [
      { "name": "Spider Climb", "description": "The bojack can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
      { "name": "False Appearance", "description": "While the bojack remains motionless, it is indistinguishable from a normal animal corpse." },
      { "name": "Sudden Death", "description": "Creatures that haven’t yet taken a turn in combat are Helpless against attacks made by the bojack." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The bojack makes two attacks, using Impaling Limbs or Corrosive Mucus in any combination." },
      { "name": "Impaling Limbs", "description": "Melee Attack Roll: +7 to hit, reach 10 ft. Hit: 18 (4d6 + 4) Piercing damage and the target is Bleeding (2d6). While Bleeding in this way, the target is also Slowed." },
      { "name": "Corrosive Mucus", "description": "Ranged Attack Roll: +7 to hit, range 30/60 ft. Hit: 14 (4d4 + 4) Acid damage and the target is Burning (2d4 Acid). While Burning in this way, the target’s AC becomes 10 + its Dexterity modifier." }
    ],
    "bonus_actions": [
      { "name": "Predatory Cunning", "description": "The bojack takes the Dash, Disengage, or Hide action." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Impaling Limbs", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor, Acidic Bile, Mucus (DC 15)",
        "Organs: Heart, Guts, Glands (DC 15)",
        "Bones: Spine (DC 15)",
        "Natural Weapons: Blades (DC 15)",
        "Hair: Fur, Hair (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Cacophonous Chimera",
    "metadata": { "size": "Huge", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "13" },
    "combat_stats": { "ac": "18", "hp": "54 (4d12 + 28) plus 54 (4d12 + 28) per player character", "speed": "30 ft., fly 60 ft." },
    "ability_scores": { "STR": 23, "DEX": 15, "CON": 25, "INT": 13, "WIS": 17, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +6, Con +12, Int +6, Wis +8, Cha +9", "skills": "Perception +8",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 18", "languages": "Abyssal, Common"
    },
    "traits": [
      { "name": "Cacophonous Chorus", "description": "The cacophonous chimera creates a 30-foot Emanation of noise. A creature that starts its turn in the Emanation that can hear it takes 10 (3d6) Thunder damage." },
      { "name": "Keen Sight and Smell", "description": "The cacophonous chimera has Advantage on Wisdom (Perception) checks that rely on sight or smell." }
    ],
    "actions": [], "bonus_actions": [],
    "reactions": [
      { "name": "Crescendo of Chaos (1/Day)", "description": "Trigger: The cacophonous chimera becomes Bloodied. Response: All conditions and spells on the cacophonous chimera immediately end, and it can move up to its Speed without provoking Opportunity Attacks and ignoring Difficult Terrain. It then unleashes a blast of thunderous power. Creatures within 300 feet of it who can hear it are subjected to a DC 17 Wisdom Saving Throw. Failure: 17 (5d6) Thunder damage plus 17 (5d6) Psychic damage, and the target has the Prone condition and can't stand until the end of its next turn." }
    ],
    "legendary_actions": [
      { "name": "Claws and Talons", "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 11 (1d10 + 6) Slashing damage, and if the target is Large or smaller, it has the Prone condition." },
      { "name": "Contaminated Bite (1/Round)", "description": "Melee Attack Roll: +11, reach 10 ft. Hit: 17 (2d10 + 6) Piercing damage plus 10 (3d6) Necrotic damage. Constitution Saving Throw: DC 17. Failure: The target gains a Contamination level." },
      { "name": "Lamprey Tail", "description": "Melee Attack Roll: +11, reach 30 ft. Hit: 13 (2d6 + 6) Piercing damage, and the target has the Bleeding condition (2d4)." },
      { "name": "Aerial Maneuver (1/Round)", "description": "The cacophonous chimera flies up to its Speed without provoking Opportunity Attacks." },
      { "name": "Cacophony (1/Round)", "description": "The chimera's three heads sing a discordant song. The effect varies based on the head taking the lead (Bewildering Chitter, Chilling Howl, Staggering Screech, or Wing Blast)." },
      { "name": "Epic Resistance", "description": "The cacophonous chimera chooses one condition, spell, or other effect currently affecting them and rolls 1d20. On an 11+, the effect ends on it." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Cacophonous Vocal Cords", "dc": 20, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "10 (3d6) Thunder damage." },
        { "name": "Lamprey Tail", "dc": 20, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 20)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 20)",
        "Organs: Eyes, Heart, Brain, Guts, Flesh (DC 20)",
        "Bones: Skull, Spine, Ribs (DC 20)",
        "Natural Weapons: Teeth, Claws (DC 20)",
        "Hair: Fur, Hair, Feathers (DC 20)",
        "Hide: Skin, Webbed Membrane (DC 20)"
      ]
    }
  },
  {
    "name": "Chitter",
    "metadata": { "size": "Medium", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "4" },
    "combat_stats": { "ac": "14", "hp": "67 (9d8 + 27)", "speed": "40 ft., climb 40 ft." },
    "ability_scores": { "STR": 15, "DEX": 16, "CON": 16, "INT": 9, "WIS": 12, "CHA": 11 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +2, Dex +3, Con +3, Int -1, Wis +1, Cha +0", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Blindsight 60 ft., Tremorsense 60 ft., passive Perception 11", "languages": "None"
    },
    "traits": [
      { "name": "Running Leap", "description": "As long as the chitter has moved 20+ feet this turn, it has a high jump and long jump of 30 feet." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The chitter makes two Sharpened Claws attacks and one Acrid Bite attack. It can also use Chitter, if available." },
      { "name": "Acrid Bite", "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 14 (4d6) Necrotic damage." },
      { "name": "Sharpened Claws", "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage." },
      { "name": "Chitter (Recharge 5–6)", "description": "Wisdom Saving Throw: DC 13, each creature within 120 feet of the chitter that can hear it. Failure: The target has the Dazed condition until the end of the chitter’s next turn." }
    ],
    "bonus_actions": [
      { "name": "Aggressive", "description": "The chitter moves up to its Speed toward a Hostile creature it can see. If it ends this movement adjacent to the creature, it gains Advantage on attack rolls against that creature until the end of its turn." }
    ],
    "reactions": [
      { "name": "Slow Fall", "description": "Trigger: The chitter takes falling damage and doesn’t have the Incapacitated condition. Response: The triggering damage is reduced to 0." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Clacking Teeth", "dc": 10, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 10)",
        "Organs: Eyes, Heart, Brain, Guts (DC 10)",
        "Bones: Skull, Ribs, Spine (DC 10)",
        "Natural Weapons: Teeth, Claws (DC 10)",
        "Hair: Fur (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Crater Wurm",
    "metadata": { "size": "Gargantuan", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "15" },
    "combat_stats": { "ac": "18", "hp": "247 (15d20 + 90)", "speed": "50 ft., burrow 30 ft." },
    "ability_scores": { "STR": 28, "DEX": 7, "CON": 22, "INT": 1, "WIS": 8, "CHA": 4 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +9, Dex -2, Con +11, Int -5, Wis +4, Cha -3", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Blindsight 30 ft., Tremorsense 60 ft., passive Perception 9", "languages": "None"
    },
    "traits": [
      { "name": "Tunneler", "description": "The crater wurm can burrow through solid rock at half its Burrowing Speed and leaves a 10-foot diameter tunnel in its wake." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The crater wurm makes a Bite attack, then makes Bite attacks against each creature adjacent to the first target." },
      { "name": "Bite", "description": "Melee Attack Roll: +14, reach 10 ft. Hit: 35 (4d12 + 9) Piercing damage, and if it is Large or smaller, the target is subjected to a DC 22 Dexterity Saving Throw. Failure: The target is swallowed by the wurm and takes 36 (8d8) Necrotic damage at the start of each of the wurm's turns." },
      { "name": "Breach", "description": "The wurm moves up to its Speed, entering the spaces of Large or smaller creatures. Each creature whose space it enters is subjected to a DC 22 Strength Saving Throw. Failure: 35 (10d6) Bludgeoning damage, and the target is pushed 10 feet away from the wurm and has the Prone condition." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Crystalline Wurm Teeth", "dc": 20, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null },
        { "name": "Wurm Plates", "dc": 20, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 20)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 20)",
        "Organs: Heart, Guts (DC 20)",
        "Natural Weapons: Teeth, Needles (DC 20)",
        "Hide: Plates (DC 20)"
      ]
    }
  },
  {
    "name": "Dark Growth",
    "metadata": { "size": "Medium", "type": "Plant", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "13", "hp": "120 (16d8 + 48)", "speed": "0 ft." },
    "ability_scores": { "STR": 19, "DEX": 8, "CON": 17, "INT": 3, "WIS": 11, "CHA": 3 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Dex -1, Con +3, Int -4, Wis +0, Cha -4", "skills": "",
      "vulnerabilities": "Fire", "resistances": "Cold, Necrotic", "immunities": "Poison", "condition_immunities": "Grappled, Poisoned, Prone, Restrained",
      "senses": "Tremorsense 60 ft., passive Perception 10", "languages": "None"
    },
    "traits": [
      { "name": "Mimicry", "description": "The dark growth can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." },
      { "name": "Regeneration", "description": "The dark growth regains 10 Hit Points at the start of its turn. If the Dark Growth takes Fire or Radiant damage, this trait doesn’t function at the start of the dark growth’s next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dark growth makes three attacks: two with its Entangling Vines and one with its Infection Spores." },
      { "name": "Entangling Vines", "description": "Melee Attack Roll: +7, reach 30 ft. Hit: 8 (1d8 + 4) Piercing damage, and the target has the Grappled condition (escape DC 15) and the Restrained condition until the grapple ends." },
      { "name": "Infection Spores", "description": "Ranged Attack Roll: +7, range 60 ft. Hit: 18 (4d6 + 4) Necrotic damage, and if the target is a creature, it is subjected to a DC 14 Constitution Saving Throw. Failure: The target is infected with a disease called Dark Decay." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Plant Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Infection Spores", "dc": 15, "tags": ["Natural Weapons", "Volatile", "Drakkenheim Unique"], "rupture_effect": "Target is infected with Dark Decay." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Plant Animus (DC 15)",
        "Fluid: Contaminated Ichor, Sap (DC 15)",
        "Organs: Flowers (DC 15)",
        "Bones: Stems (DC 15)",
        "Natural Weapons: Spores, Needles (DC 15)",
        "Hair: Leaves (DC 15)",
        "Dust: Plant Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Dark Growth Shambler",
    "metadata": { "size": "Medium", "type": "Plant", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "15", "hp": "90 (12d8 + 36)", "speed": "30 ft." },
    "ability_scores": { "STR": 17, "DEX": 13, "CON": 16, "INT": 5, "WIS": 13, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +3, Dex +1, Con +3, Int -3, Wis +1, Cha -1", "skills": "",
      "vulnerabilities": "Fire", "resistances": "", "immunities": "Poison", "condition_immunities": "Blinded, Poisoned",
      "senses": "Blindsight 30 ft., passive Perception 11", "languages": "Common"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The dark growth shambler makes two Claw attacks and one Infectious Bite attack." },
      { "name": "Claw", "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage." },
      { "name": "Infectious Bite", "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Necrotic damage, and if the target is a creature, it must succeed on a DC 14 Constitution Saving Throw or be infected with Dark Decay." }
    ],
    "bonus_actions": [],
    "reactions": [
      { "name": "Abrupt Decay", "description": "Trigger: The dark growth shambler drops to 0 Hit Points and it hasn’t taken Fire damage this round. Response: The dark growth shambler creates a Dark Growth in its space." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Plant Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Infectious Vines", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Plant Animus (DC 15)",
        "Fluid: Contaminated Ichor, Sap (DC 15)",
        "Organs: Flowers (DC 15)",
        "Bones: Stems (DC 15)",
        "Natural Weapons: Spores, Needles (DC 15)",
        "Hair: Leaves (DC 15)",
        "Dust: Plant Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Digipede",
    "metadata": { "size": "Huge", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "8" },
    "combat_stats": { "ac": "17", "hp": "135 (14d12 + 56)", "speed": "50 ft., climb 40 ft." },
    "ability_scores": { "STR": 23, "DEX": 15, "CON": 18, "INT": 5, "WIS": 10, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +6, Dex +5, Con +7, Int -3, Wis +0, Cha -2", "skills": "Perception +3, Stealth +5",
      "vulnerabilities": "", "resistances": "Lightning", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft., passive Perception 13", "languages": "None"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The digipede makes one Bite attack and two Talons attacks." },
      { "name": "Bite", "description": "Melee Attack Roll: +9, reach 5 ft. Hit: 22 (3d10 + 6) Piercing damage." },
      { "name": "Talons", "description": "Melee Attack Roll: +9, reach 5 ft. Hit: 16 (3d6 + 6) Slashing damage plus 9 (2d8) Lightning damage. Constitution Saving Throw: DC 15. Failure: The target has the Shocked condition until the end of the digipede’s next turn." },
      { "name": "Eye Beam (Recharge 5–6)", "description": "Dexterity Saving Throw: DC 15, each creature in a 60-foot long, 5-foot wide Line. Failure: 35 (10d6) Lightning damage, and the target has the Slowed condition. Subsequent failures escalate to Immobilized and Paralyzed." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Electric Talons", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": "9 (2d8) Lightning damage." },
        { "name": "Digipede Eye", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor, Elemental Fluid (DC 15)",
        "Organs: Eyes, Heart, Guts (DC 15)",
        "Natural Weapons: Claws (DC 15)",
        "Hide: Carapace (DC 15)"
      ]
    }
  },
  {
    "name": "Drakkenheim Sewer Gator",
    "metadata": { "size": "Huge", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "12" },
    "combat_stats": { "ac": "18", "hp": "195 (17d12 + 85)", "speed": "40 ft., swim 80 ft." },
    "ability_scores": { "STR": 25, "DEX": 18, "CON": 21, "INT": 8, "WIS": 15, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +11, Dex +4, Con +9, Int -1, Wis +6, Cha -3", "skills": "Perception +10, Stealth +12",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "Frightened",
      "senses": "Darkvision 120 ft., passive Perception 20", "languages": "None"
    },
    "traits": [
      { "name": "Contaminated Regeneration", "description": "The sewer gator regains 10 Hit Points at the start of its turn as long as it is in contaminated water." },
      { "name": "Amphibious Lunge", "description": "If the sewer gator swims 20+ feet on its turn, it can long jump or high jump up to 60 feet. If it ends this jump within 5 feet of a creature, it has Advantage on its next Crushing Bite attack against that creature, and that attack deals an additional 40 (9d8) Piercing damage." },
      { "name": "Predatory Stealth", "description": "The sewer gator has Advantage on Dexterity (Stealth) checks to Hide in water." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The sewer gator makes two attacks. It can’t make both a Crushing Bite attack and a Tail Strike attack against the same target." },
      { "name": "Crushing Bite", "description": "Melee Attack Roll: +11, reach 15 ft. Hit: 33 (4d12 + 7) Piercing damage, and if the target is Large or smaller, it has the Grappled condition (escape DC 19)." },
      { "name": "Tail Strike", "description": "Melee Attack Roll: +11, reach 15 ft. Hit: 25 (4d8 + 7) Bludgeoning damage, and the target is pushed 20 feet away from the sewer gator and has the Prone condition." },
      { "name": "Death Roll", "description": "Melee Attack Roll: +11, reach 15 ft., one creature Grappled by the sewer gator. Hit: 33 (4d12 + 7) Piercing damage. Strength Saving Throw: DC 19. Failure: The target has the Dazed and Helpless conditions until it escapes the sewer gator’s grapple." }
    ],
    "bonus_actions": [],
    "reactions": [
      { "name": "Submerge", "description": "Trigger: The sewer gator takes damage while in water. Response: The sewer gator swims half its speed and takes the Hide action." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Gator Hide", "dc": 20, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 20)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 20)",
        "Organs: Eyes, Heart, Brain, Guts, Flesh (DC 20)",
        "Bones: Skull, Ribs, Spine (DC 20)",
        "Natural Weapons: Teeth (DC 20)",
        "Hide: Skin (DC 20)"
      ]
    }
  },
  {
    "name": "Effulgent Cnidarian",
    "metadata": { "size": "Large", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "9" },
    "combat_stats": { "ac": "17", "hp": "153 (18d10 + 54)", "speed": "0 ft., fly 20 ft. (hover)" },
    "ability_scores": { "STR": 8, "DEX": 15, "CON": 16, "INT": 18, "WIS": 18, "CHA": 15 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str -1, Dex +2, Con +3, Int +4, Wis +4, Cha +2", "skills": "",
      "vulnerabilities": "", "resistances": "Bludgeoning, Radiant", "immunities": "", "condition_immunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned",
      "senses": "Blindsight 60 ft., passive Perception 14", "languages": "None"
    },
    "traits": [
      { "name": "Altered Reality", "description": "The cnidarian has the Invisible condition for creatures Charmed by it." },
      { "name": "Hallucinogenic Bioluminescence", "description": "A creature that starts its turn within 60 feet of the cnidarian and can see it must succeed on a DC 16 Wisdom Saving Throw or have the Charmed condition. While Charmed, the target regards all other creatures as enemies except the cnidarian, whom it regards as an ally. The creature must attack randomly or take 14 (4d6) Psychic damage." },
      { "name": "Neon Illumination", "description": "The cnidarian sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The cnidarian makes two Tendrils attacks." },
      { "name": "Tendrils", "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 27 (6d8) Necrotic damage, or 48 Necrotic damage if the target is Charmed by the cnidarian." }
    ],
    "bonus_actions": [],
    "reactions": [
      { "name": "Reflexive Flash", "description": "Trigger: A creature the cnidarian can see within 30 feet deals damage to it. Response: DC 16 Constitution Saving Throw for each creature in a 30-foot Emanation. Failure: 10 (3d6) Radiant damage and the Blinded condition (save ends)." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Neon Tentacles", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null },
        { "name": "Psychedelic Glands", "dc": 15, "tags": ["Organs", "Volatile", "Drakkenheim Unique"], "rupture_effect": "14 (4d6) Psychic damage and risk of hallucination." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 15)",
        "Fluid: Contaminated Ichor, Goopy Ooze (DC 15)",
        "Organs: Glands (DC 15)",
        "Natural Weapons: Tentacles (DC 15)",
        "Hide: Skin (DC 15)",
        "Dust: Aberrant Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Animated Delerium Sludge",
    "metadata": { "size": "Large", "type": "Elemental", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "14", "hp": "114 (12d10 + 48)", "speed": "30 ft., swim 90 ft." },
    "ability_scores": { "STR": 18, "DEX": 14, "CON": 18, "INT": 5, "WIS": 10, "CHA": 8 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Dex +2, Con +4, Int -3, Wis +0, Cha -1", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Necrotic, Poison", "condition_immunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "None"
    },
    "traits": [
      { "name": "Invisible in Sludge", "description": "The elemental has the Invisible condition while fully submerged in delerium sludge." },
      { "name": "Sludge Form", "description": "The elemental can enter a Hostile creature’s space and stop there. It can move through a space as narrow as 1 inch without squeezing." }
    ],
    "actions": [
      { "name": "Contaminated Touch", "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 10 (3d6) Necrotic damage. Constitution Saving Throw: DC 15. Failure: The target gains one Contamination level." },
      { "name": "Engulf", "description": "Strength Saving Throw: DC 15, each Large or smaller creature in the elemental’s space. Failure: The target has the Grappled condition (escape DC 15). While Grappled, the target is Restrained. At the start of each of the elemental’s turns, the target takes 28 (8d6) Necrotic damage and must make a DC 15 Constitution saving throw or gain a Contamination level." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Elemental Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Contaminated Sludge", "dc": 15, "tags": ["Fluid", "Volatile", "Drakkenheim Unique"], "rupture_effect": "10 (3d6) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Elemental Animus (DC 15)",
        "Fluid: Contaminated Ichor, Goopy Ooze (DC 15)",
        "Dust: Elemental Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Entropic Flame",
    "metadata": { "size": "Large", "type": "Elemental", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "16", "hp": "91 (14d10 + 14)", "speed": "30 ft." },
    "ability_scores": { "STR": 10, "DEX": 17, "CON": 13, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +0, Dex +3, Con +1, Int -3, Wis +0, Cha -3", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Fire, Poison", "condition_immunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "Deep Speech"
    },
    "traits": [
      { "name": "Fire Form", "description": "The elemental can move through a space as narrow as 1 inch without squeezing." },
      { "name": "Enduring Flame", "description": "Flames within 10 feet of the elemental can’t be extinguished, and the Burning condition can’t end for creatures within 10 feet of the elemental." },
      { "name": "Illumination", "description": "The elemental sheds Bright Light in a 30-foot radius and Dim Light in an additional 30 feet." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The elemental makes three Dancing Flame attacks." },
      { "name": "Dancing Flame", "description": "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 120 ft. Hit: 13 (3d6 + 3) Fire damage, and the target has the Burning condition (3d6 Fire)." }
    ],
    "bonus_actions": [
      { "name": "Flickerjump", "description": "The elemental teleports to an unoccupied space it can see within 60 feet." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Elemental Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Entropic Embers", "dc": 15, "tags": ["Dust", "Volatile", "Drakkenheim Unique"], "rupture_effect": "13 (3d6 + 3) Fire damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Elemental Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Dust: Elemental Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Living Deep Haze",
    "metadata": { "size": "Large", "type": "Elemental", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "15", "hp": "90 (12d10 + 24)", "speed": "0 ft., fly 90 ft. (hover)" },
    "ability_scores": { "STR": 14, "DEX": 20, "CON": 14, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +2, Dex +5, Con +2, Int -3, Wis +0, Cha -3", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Necrotic, Poison; Burning, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "Deep Speech"
    },
    "traits": [
      { "name": "Fog Form", "description": "The elemental can enter a Hostile creature’s space and stop there. It can move through a space as narrow as 1 inch without squeezing." },
      { "name": "Deep Haze", "description": "A creature that enters the same space as the elemental or starts its turn there is subjected to the following effect. Constitution Saving Throw: DC 13. Failure: 10 (3d6) Necrotic damage, and the target gains one Contamination level." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The elemental makes two Slam attacks." },
      { "name": "Slam", "description": "Melee Attack Roll: +8, reach 5 ft. Hit: 14 (2d8 + 5) Bludgeoning damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Elemental Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Elemental Dust", "dc": 15, "tags": ["Dust"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Elemental Animus (DC 15)",
        "Dust: Elemental Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Walking Delerium Geode",
    "metadata": { "size": "Large", "type": "Elemental", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "5" },
    "combat_stats": { "ac": "17", "hp": "126 (12d10 + 60)", "speed": "30 ft., burrow 30 ft." },
    "ability_scores": { "STR": 20, "DEX": 8, "CON": 20, "INT": 5, "WIS": 10, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +5, Dex -1, Con +5, Int -3, Wis +0, Cha -3", "skills": "",
      "vulnerabilities": "Radiant, Thunder", "resistances": "", "immunities": "Poison; Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft., passive Perception 10", "languages": "Deep Speech"
    },
    "traits": [
      { "name": "Death Burst", "description": "The elemental explodes when it dies and it hasn’t taking Force, Radiant, or Thunder damage since its last turn. Constitution Saving Throw: DC 16, each creature in a 30-foot Emanation originating from the elemental. Failure: 42 (12d6) Necrotic damage, and the target gains one Contamination level. Failure or Success: The explosion triggers a random Arcane Anomaly." },
      { "name": "Earth Glide", "description": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn’t disturb the material it moves through." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The elemental makes two Shard Slam attacks." },
      { "name": "Shard Slam", "description": "Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Bludgeoning damage. Constitution Saving Throw: DC 16. Failure: 10 (3d6) Necrotic damage, and the target gains one Contamination level." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Elemental Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Delerium Geode Fragments", "dc": 15, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": "Explodes for 42 (12d6) Necrotic damage and 1 Contamination level if ruptured." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Elemental Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Dust: Elemental Dust (DC 15)",
        "Delerium yield possible (1d20 check)"
      ]
    }
  },
  {
    "name": "Eldritch Cataclysm",
    "metadata": { "size": "Gargantuan", "type": "Elemental", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "13" },
    "combat_stats": { "ac": "20", "hp": "210 (12d20 + 84)", "speed": "30 ft., fly 120 ft." },
    "ability_scores": { "STR": 19, "DEX": 25, "CON": 25, "INT": 12, "WIS": 17, "CHA": 20 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Dex +7, Con +7, Int +6, Wis +8, Cha +10", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Cold, Fire, Lightning, Poison, Thunder; Burning, Exhaustion, Frozen, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Shocked, Stunned",
      "senses": "Darkvision 120 ft., passive Perception 13", "languages": "Common"
    },
    "traits": [
      { "name": "Air Form", "description": "The eldritch cataclysm can enter a Hostile creature’s space and stop there. It can move through a space as narrow as 1 inch without squeezing." },
      { "name": "Cyclonic Storm", "description": "The eldritch cataclysm emits a 120-foot Emanation of high winds that disperse gases and vapors and extinguish unprotected flames. Ranged attacks that pass through the area have Disadvantage. Objects that are not worn or carried are blown away 1d6 x 5 feet in a random direction. A creature that starts its turn in the Emanation is subjected to a DC 17 Strength Saving Throw (flying creatures have Disadvantage). Failure: The target has the Slowed condition until the start of its next turn. Failure by 5 or More: The target is flung 1d6 × 5 feet in a random direction, landing with the Prone condition." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The eldritch cataclysm uses Chain Lighting or Icy Bolt, then uses Meteor Strike or Quake." },
      { "name": "Chain Lightning", "description": "Melee or Ranged Attack Roll: +12, range 120 ft. Hit: 21 (3d8 + 7) Lightning damage, the target has the Shocked condition until the end of the cataclysm’s next turn, and the lightning leaps to another creature of the cataclysm’s choice within 15 feet of the first target. The cataclysm makes a separate Chain Lightning attack against the target." },
      { "name": "Icy Bolt", "description": "Melee or Ranged Attack Roll: +12, range 120 ft. Hit: 21 (3d8 + 7) Cold damage. Hit or Miss: The target and each creature within 5 feet of it must succeed on a DC 17 Dexterity saving throw or take 18 (4d8) Cold damage and have the Frozen condition (DC 17)." },
      { "name": "Meteor Strike", "description": "Dexterity Saving Throw: DC 17, each creature in a 15-foot radius, 40-foot tall Cylinder centered on a point the cataclysm can see within 120 feet. Failure: 18 (4d8) Fire damage plus 18 (4d8) Bludgeoning damage." },
      { "name": "Quake", "description": "Constitution Saving Throw: DC 17, each creature in a 30-foot Emanation originating from the cataclysm. Failure: 28 (8d6) Thunder damage, and the target has the Prone condition. Success: Half damage only." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Elemental Essence", "dc": 25, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Cataclysmic Core", "dc": 25, "tags": ["Organs", "Volatile", "Drakkenheim Unique"], "rupture_effect": "28 (8d6) Thunder damage and blown backwards 20 ft." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Elemental Animus (DC 25)",
        "Fluid: Contaminated Ichor, Elemental Fluid (DC 25)",
        "Dust: Elemental Dust (DC 25)"
      ]
    }
  },
  {
    "name": "Graffiti",
    "metadata": { "size": "Tiny", "type": "Construct", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "18", "hp": "81 (18d4 + 36)", "speed": "5 ft., climb 5 ft." },
    "ability_scores": { "STR": 1, "DEX": 10, "CON": 14, "INT": 12, "WIS": 14, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str -5, Dex +0, Con +5, Int +4, Wis +5, Cha +7", "skills": "History +7, Insight +5, Investigation +4, Perception +8",
      "vulnerabilities": "", "resistances": "", "immunities": "Poison; Blinded, Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Blindsight 120 ft., Truesight 120 ft., passive Perception 20", "languages": "All, Telepathy 120 ft."
    },
    "traits": [
      { "name": "Antimagic Susceptibility", "description": "The graffiti is incapacitated while in the area of antimagic. If targeted by Dispel Magic, the graffiti must succeed on a Constitution saving throw against the caster’s spell save DC or become Unconscious for 1 minute." },
      { "name": "Regeneration", "description": "The graffiti regains 10 Hit Points at the start of each of its turns. If the graffiti is splashed with water, targeted by Prestidigitation, or takes Cold damage, this trait doesn’t function at the start of its next turn. Its body is destroyed only if it starts its turn with 0 Hit Points and doesn’t regenerate." },
      { "name": "Solvent Susceptibility", "description": "The graffiti is instantly destroyed by Universal Solvent." },
      { "name": "Spider Climb", "description": "The graffiti can climb difficult surfaces, including along ceilings, without needing to make an ability check." },
      { "name": "Surface Bound", "description": "The graffiti can only move along contiguous flat surfaces, such as walls or floors." }
    ],
    "actions": [
      { "name": "Satire", "description": "The graffiti shapes itself into a satirical representation of a foe. Wisdom Saving Throw: DC 15, one creature within 60 feet that can see the graffiti. Failure: 10 (3d6) Psychic damage and the target has Disadvantage on attack rolls and ability checks until the start of the graffiti’s next turn. Success: Half damage only." },
      { "name": "Transposition", "description": "The air quivers around creatures near the graffiti. Charisma Saving Throw: DC 15, up to five creatures the graffiti can see within 120 feet. Failure: The creature teleports to an unoccupied space capable of supporting the creature within 120 feet." },
      { "name": "Summon Public Opinion (Recharge 6)", "description": "The graffiti conjures a swarm of Drakkenheim citizen spirits within 120 feet of itself. The swarm uses the Chorus stat block. The chorus acts immediately after the graffiti on the same Initiative count, and it obeys the graffiti. The chorus disappears after 1 minute or the graffiti dies." },
      { "name": "Spellcasting", "description": "The graffiti casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 15): At Will: Mage Hand, Minor Illusion. 1/Day Each: Hallucinatory Terrain, Major Image." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Construct Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Graffiti Pigment", "dc": 15, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Construct Animus (DC 15)",
        "Fluid: Chemical Solution, Elemental Fluid (DC 15)",
        "Dust: Elemental Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Chorus",
    "metadata": { "size": "Huge", "type": "Swarm of Medium Constructs", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "3" },
    "combat_stats": { "ac": "16", "hp": "33 (6d10)", "speed": "30 ft." },
    "ability_scores": { "STR": 16, "DEX": 14, "CON": 10, "INT": 10, "WIS": 10, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +3, Dex +2, Con +0, Int +0, Wis +0, Cha +0", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Poison, Psychic; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Poisoned, Prone, Restrained, Stunned",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "All"
    },
    "traits": [
      { "name": "Swarm", "description": "The swarm can occupy another creature’s space and vice versa, and the swarm can move through an opening large enough for a Small creature. The swarm can’t regain Hit Points or gain Temporary Hit Points." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The swarm makes two Slam attacks." },
      { "name": "Psychic Slam", "description": "Melee Attack Roll: +5, reach 5 ft. Hit: 13 (4d4 + 3) Psychic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": null, "harvest_check": null,
      "parts": [], "guaranteed_drops": [],
      "drakkenheim_original_parts": []
    }
  },
  {
    "name": "Gravekeeper",
    "metadata": { "size": "Large", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "15" },
    "combat_stats": { "ac": "18", "hp": "73 (7d10 + 35) + 73 per player character (7d10 + 35)", "speed": "0 ft., fly 30 ft. (hover)" },
    "ability_scores": { "STR": 18, "DEX": 7, "CON": 21, "INT": 19, "WIS": 17, "CHA": 21 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Dex -2, Con +10, Int +9, Wis +8, Cha +10", "skills": "Perception +13",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Truesight 120 ft., passive Perception 23", "languages": "All but doesn’t speak"
    },
    "traits": [
      { "name": "Dazzling Aura", "description": "The gravekeeper sheds Bright Light in a 60-foot radius. A creature that starts its turn in the Bright Light takes 10 (3d6) Radiant damage." }
    ],
    "actions": [], "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Slam", "description": "Melee Attack Roll: +9, reach 10 ft. Hit: 22 (4d8 + 4) Bludgeoning damage plus 10 (3d6) Necrotic damage." },
      { "name": "Lantern Blast", "description": "Magical octarine beams flash from one of the Gravekeeper’s many lanterns at one creature it can see within 120 feet that is not behind Total Cover, subjecting it to one of the following effects (the gravekeeper can only use each blast once per round): Dispelling, Forceful, Blinding, Contaminating, Igniting, or Freezing Blast." },
      { "name": "Dispelling Blast", "description": "Intelligence Saving Throw: DC 18. Failure: 35 (10d6) Psychic damage. Any spell or magical effect on the target ends, and it has the Bewildered condition (save ends). Success: Half damage only." },
      { "name": "Contaminating Blast", "description": "Constitution Saving Throw: DC 18. Failure: 35 (10d6) Necrotic damage, and the target gains one Contamination level. Success: Half damage only." },
      { "name": "Glide (1/Round)", "description": "The gravekeeper moves up to its Speed without provoking Opportunity Attack action." },
      { "name": "Sludge Column (Recharge 5–6)", "description": "Constitution Saving Throw: DC 18, each creature in a 10-foot radius, 60-foot tall Cylinder, centered on a point within 120 feet. Failure: 42 (12d6) Necrotic damage, and the target gains one Contamination level. Success: Half damage only." },
      { "name": "Animate Walls (Recharge 5–6)", "description": "Dexterity Saving Throw: DC 18, each creature within 10 feet of any number of walls within 120 feet of the gravekeeper. Failure: The target has the Grappled condition (escape DC 18)." },
      { "name": "Epic Resistance", "description": "The gravekeeper chooses one condition, spell, or other effect currently affecting it and rolls 1d20. On an 11+, the effect ends on it." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Gravekeeper's Lantern", "dc": 20, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 20)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 20)",
        "Organs: Eyes, Guts, Flesh (DC 20)",
        "Hide: Skin (DC 20)",
        "Dust: Aberrant Dust (DC 20)"
      ]
    }
  },
  {
    "name": "Haze Husk",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1/4" },
    "combat_stats": { "ac": "10", "hp": "7 (1d8 + 3)", "speed": "30 ft." },
    "ability_scores": { "STR": 13, "DEX": 10, "CON": 16, "INT": 3, "WIS": 6, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +1, Dex +0, Con +3, Int -4, Wis -2, Cha -3", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Poison; Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 8", "languages": "Understands the languages it knew in life but can’t speak"
    },
    "traits": [],
    "actions": [
      { "name": "Slam", "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Bludgeoning damage." }
    ],
    "bonus_actions": [],
    "reactions": [
      { "name": "Death Burst", "description": "Trigger: The haze husk is reduced to 0 Hit Points by damage that isn’t Radiant or from a Critical Hit. Response—Constitution Saving Throw: DC 10, each creature in a 5-foot Emanation. Failure: 7 (2d6) Necrotic damage. Failure by 5 or More: The target gains one Contamination level." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Haze Husk Bones", "dc": 10, "tags": ["Bones", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Bones: Skull, Spine, Ribs (DC 10)",
        "Hair: Hair (DC 10)",
        "Hide: Skin (DC 10)",
        "Dust: Undead Dust (DC 10)",
        "Delerium yield possible (1d6 check)"
      ]
    }
  },
  {
    "name": "Haze Wight",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "3" },
    "combat_stats": { "ac": "15", "hp": "65 (10d8 + 20)", "speed": "30 ft." },
    "ability_scores": { "STR": 15, "DEX": 14, "CON": 15, "INT": 10, "WIS": 13, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +2, Dex +2, Con +2, Int +0, Wis +1, Cha +3", "skills": "Perception +3, Stealth +4",
      "vulnerabilities": "", "resistances": "", "immunities": "Poison; Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 13", "languages": "The languages it knew in life"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The haze wight makes two Contaminated Blast attacks." },
      { "name": "Contaminated Blast", "description": "Melee or Ranged Attack Roll: +5, reach 5 ft. or range 60 ft. Hit: 13 (3d6 + 3) Necrotic damage. The first time the target is hit by a Contaminated Blast each turn, it is subjected to the following effect. Constitution Saving Throw: DC 13. Failure: The target gains one Contamination level." }
    ],
    "bonus_actions": [
      { "name": "Animate Haze Husk", "description": "The haze wight reanimates the corpse of a haze husk it can see within 60 feet. The haze husk is revived with 5 Hit Points and immediately stands." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Contaminated Ichor", "dc": 10, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Bones: Skull, Spine, Ribs (DC 10)",
        "Hair: Hair (DC 10)",
        "Hide: Skin (DC 10)",
        "Dust: Undead Dust (DC 10)"
      ]
    }
  },
  {
    "name": "Hazewing Moth Caterpillar",
    "metadata": { "size": "Small", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1" },
    "combat_stats": { "ac": "11", "hp": "27 (6d6 + 6)", "speed": "30 ft., climb 30 ft." },
    "ability_scores": { "STR": 13, "DEX": 8, "CON": 13, "INT": 1, "WIS": 10, "CHA": 3 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +1, Dex -1, Con +1, Int -5, Wis +0, Cha -4", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Blindsight 30 ft., passive Perception 10", "languages": "None"
    },
    "traits": [],
    "actions": [
      { "name": "Bite", "description": "Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Piercing damage plus 10 (3d6) Necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Delerium-Weeping Mandibles", "dc": 10, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 10)",
        "Fluid: Monster Blood, Contaminated Ichor, Mucus (DC 10)",
        "Natural Weapons: Mandibles (DC 10)",
        "Hide: Carapace (DC 10)",
        "Dust: Aberrant Dust (DC 10)"
      ]
    }
  },
  {
    "name": "Hazewing Moth Chrysalis",
    "metadata": { "size": "Medium", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1" },
    "combat_stats": { "ac": "20", "hp": "28 (3d8 + 15)", "speed": "0 ft., climb 5 ft." },
    "ability_scores": { "STR": 13, "DEX": 1, "CON": 20, "INT": 1, "WIS": 5, "CHA": 3 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +1, Dex -5, Con +5, Int -5, Wis -3, Cha -4", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained",
      "senses": "Blindsight 30 ft., passive Perception 13", "languages": "None"
    },
    "traits": [
      { "name": "Anchored", "description": "The chrysalis is firmly anchored in place. It can’t be forced to move or teleport unless it chooses to be." },
      { "name": "Haze Aura", "description": "The chrysalis conjures Deep Haze in a 30-foot Emanation, which renders its area Lightly Obscured. A creature that starts its turn in the area is subjected to a DC 10 Constitution Saving Throw. Failure: The target gains one Contamination level. Failure or Success: 10 (3d6) Necrotic damage." }
    ],
    "actions": [
      { "name": "Harden", "description": "The chrysalis regains 7 (2d6) Hit Points, gaining any excess healing as Temporary Hit Points." }
    ],
    "bonus_actions": [],
    "reactions": [
      { "name": "Sudden Emergence", "description": "Trigger: The chrysalis is reduced to 0 Hit Points. Response: Roll 1d6. On a 6, a Hazewing Moth Adult emerges from the chrysalis. On a 1–5, vile goo spills out of the chrysalis, and each creature within 5 feet must succeed on a DC 15 Constitution saving throw or gain a Contamination level, taking 10 (3d6) Acid damage and 10 (3d6) Necrotic damage on a failure or success." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Mutated Chrysalis Shell", "dc": 10, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 10)",
        "Fluid: Contaminated Ichor, Goopy Fluid (DC 10)",
        "Hide: Carapace (DC 10)",
        "Dust: Aberrant Dust (DC 10)"
      ]
    }
  },
  {
    "name": "Hazewing Moth Adult",
    "metadata": { "size": "Medium", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "4" },
    "combat_stats": { "ac": "14", "hp": "55 (10d8 + 10)", "speed": "10 ft., fly 40 ft." },
    "ability_scores": { "STR": 10, "DEX": 18, "CON": 12, "INT": 2, "WIS": 14, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +6, Con +3, Wis +4", "skills": "Perception +4, Stealth +6",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Blindsight 30 ft., Darkvision 60 ft., passive Perception 14", "languages": "None"
    },
    "traits": [
      { "name": "Bioluminescent Dust", "description": "The moth sheds Dim Light in a 10-foot radius. Attacks against the moth made by creatures within this light have Disadvantage unless the attacker is immune to the Blinded condition." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The moth makes two attacks: one with its Proboscis and one with its Wing Buffet." },
      { "name": "Proboscis", "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage plus 10 (3d6) Necrotic damage, and the moth regains Hit Points equal to the Necrotic damage dealt." },
      { "name": "Wing Buffet", "description": "Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Bludgeoning damage, and if the target is Medium or smaller, it must succeed on a DC 14 Strength saving throw or have the Prone condition." },
      { "name": "Toxic Spores (Recharge 5–6)", "description": "Constitution Saving Throw: DC 13, each creature in a 20-foot radius centered on the moth. Failure: 21 (6d6) Poison damage and the target has the Poisoned condition (save ends). Success: Half damage only." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Aberration Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Bioluminescent Spores", "dc": 10, "tags": ["Dust", "Volatile", "Drakkenheim Unique"], "rupture_effect": "21 (6d6) Poison damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Organs: Glands (DC 10)",
        "Natural Weapons: Proboscis (DC 10)",
        "Hide: Wings (DC 10)",
        "Dust: Aberrant Dust, Spores (DC 10)"
      ]
    }
  },
  {
    "name": "Hypersiphon",
    "metadata": { "size": "Large", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "15", "hp": "95 (10d10 + 40)", "speed": "0 ft., fly 30 ft. (hover)" },
    "ability_scores": { "STR": 16, "DEX": 14, "CON": 18, "INT": 6, "WIS": 15, "CHA": 8 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +6, Con +7, Wis +5", "skills": "Perception +5",
      "vulnerabilities": "", "resistances": "Psychic", "immunities": "", "condition_immunities": "Prone",
      "senses": "Darkvision 120 ft., passive Perception 15", "languages": "Understands Deep Speech but can't speak"
    },
    "traits": [
      { "name": "Magic Siphon", "description": "Whenever a creature casts a spell of 1st-level or higher within 60 feet of the hypersiphon, the hypersiphon regains 5 Hit Points per level of the spell cast, and it gains Advantage on its next attack roll before the end of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The hypersiphon makes two Tentacle attacks. It can replace one attack with Siphoning Gaze, if available." },
      { "name": "Tentacle", "description": "Melee Attack Roll: +6, reach 10 ft. Hit: 12 (2d8 + 3) Bludgeoning damage, and if the target is Medium or smaller, it has the Grappled condition (escape DC 14). The hypersiphon has four tentacles, each of which can grapple one target." },
      { "name": "Siphoning Gaze (Recharge 5–6)", "description": "Intelligence Saving Throw: DC 15, one creature the hypersiphon can see within 60 feet. Failure: 27 (6d8) Psychic damage, and the target loses its highest-level unexpended spell slot. If the target has no spell slots, it takes an additional 13 (3d8) Psychic damage instead. Success: Half damage only, and no spell slot is lost." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Siphoning Eye", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "27 (6d8) Psychic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Organs: Eyes, Brain (DC 15)",
        "Natural Weapons: Tentacles (DC 15)",
        "Hide: Skin (DC 15)",
        "Dust: Aberrant Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Haze Hulk",
    "metadata": { "size": "Huge", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "8" },
    "combat_stats": { "ac": "14", "hp": "137 (11d12 + 66)", "speed": "40 ft." },
    "ability_scores": { "STR": 23, "DEX": 8, "CON": 22, "INT": 5, "WIS": 8, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +9, Con +9, Wis +2", "skills": "Athletics +9",
      "vulnerabilities": "", "resistances": "Poison", "immunities": "", "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 9", "languages": "Understands Giant but can't speak"
    },
    "traits": [
      { "name": "Contaminated Fortitude", "description": "If damage reduces the haze hulk to 0 Hit Points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is Radiant or from a Critical Hit. On a success, the haze hulk drops to 1 Hit Point instead." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The haze hulk makes two Mutated Slam attacks." },
      { "name": "Mutated Slam", "description": "Melee Attack Roll: +9, reach 10 ft. Hit: 22 (3d10 + 6) Bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Constitution saving throw or gain one Contamination level." },
      { "name": "Rock Throw", "description": "Ranged Attack Roll: +9, range 60/240 ft. Hit: 28 (4d10 + 6) Bludgeoning damage, and if the target is a creature, it must succeed on a DC 17 Strength saving throw or have the Prone condition." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Hulk Heart", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Heart, Guts, Flesh (DC 15)",
        "Bones: Skull, Spine, Ribs (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Living Delerium Geode",
    "metadata": { "size": "Small", "type": "Elemental", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1" },
    "combat_stats": { "ac": "15", "hp": "33 (6d6 + 12)", "speed": "20 ft., burrow 20 ft." },
    "ability_scores": { "STR": 14, "DEX": 10, "CON": 15, "INT": 3, "WIS": 10, "CHA": 3 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Con +4", "skills": "",
      "vulnerabilities": "Thunder", "resistances": "Piercing, Slashing", "immunities": "Poison; Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
      "senses": "Darkvision 60 ft., Tremorsense 30 ft., passive Perception 10", "languages": "Understands Terran but can't speak"
    },
    "traits": [
      { "name": "Death Burst", "description": "When the living geode dies, it explodes in a burst of jagged fragments. Each creature within 10 feet must make a DC 12 Dexterity saving throw, taking 7 (2d6) Piercing damage plus 3 (1d6) Necrotic damage on a failure, or half as much damage on a success." },
      { "name": "Earth Glide", "description": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn’t disturb the material it moves through." }
    ],
    "actions": [
      { "name": "Geode Slam", "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Bludgeoning damage plus 3 (1d6) Necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Elemental Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Delerium Geode Shard", "dc": 10, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": "Explodes for 7 (2d6) Piercing plus 3 (1d6) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Elemental Animus (DC 10)",
        "Dust: Elemental Dust (DC 10)",
        "Delerium yield possible (1d6 check)"
      ]
    }
  },
  {
    "name": "Miasmatic Creeper",
    "metadata": { "size": "Large", "type": "Plant", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "4" },
    "combat_stats": { "ac": "13", "hp": "75 (10d10 + 20)", "speed": "20 ft., climb 20 ft." },
    "ability_scores": { "STR": 16, "DEX": 10, "CON": 15, "INT": 3, "WIS": 12, "CHA": 4 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +5, Con +4", "skills": "Stealth +4",
      "vulnerabilities": "Fire", "resistances": "Cold, Lightning", "immunities": "Blinded, Deafened, Exhaustion",
      "senses": "Blindsight 60 ft., passive Perception 11", "languages": "None"
    },
    "traits": [
      { "name": "False Appearance", "description": "While the creeper remains motionless, it is indistinguishable from a normal mutated tangle of vines." },
      { "name": "Miasma Aura", "description": "A creature that starts its turn within 10 feet of the creeper must succeed on a DC 12 Constitution saving throw or be Poisoned until the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The creeper makes two Vine attacks." },
      { "name": "Vine", "description": "Melee Attack Roll: +5, reach 15 ft. Hit: 10 (2d6 + 3) Bludgeoning damage, and if the target is Medium or smaller, it has the Grappled condition (escape DC 13). Until the grapple ends, the target is Restrained. The creeper has four vines." },
      { "name": "Reel", "description": "The creeper pulls each creature Grappled by it up to 10 feet straight toward it." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Plant Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Miasma Spores", "dc": 10, "tags": ["Volatile", "Drakkenheim Unique"], "rupture_effect": "Target is Poisoned for 1 minute." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Plant Animus (DC 10)",
        "Fluid: Sap (DC 10)",
        "Bones: Stems (DC 10)",
        "Natural Weapons: Spores (DC 10)",
        "Hair: Leaves (DC 10)"
      ]
    }
  },
  {
    "name": "Mutant Rat",
    "metadata": { "size": "Small", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1/8" },
    "combat_stats": { "ac": "12", "hp": "9 (2d6 + 2)", "speed": "30 ft." },
    "ability_scores": { "STR": 7, "DEX": 15, "CON": 12, "INT": 4, "WIS": 10, "CHA": 4 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Stealth +4",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "None"
    },
    "traits": [
      { "name": "Pack Tactics", "description": "The rat has Advantage on attack rolls against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't Incapacitated." },
      { "name": "Contaminated Saliva", "description": "A creature bitten by the mutant rat must succeed on a DC 10 Constitution saving throw or take an additional 2 (1d4) Necrotic damage." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage, and the target is subjected to Contaminated Saliva." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Mutant Rat Tail", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Organs: Guts (DC 10)",
        "Natural Weapons: Teeth (DC 10)",
        "Hair: Fur (DC 10)"
      ]
    }
  },
  {
    "name": "Rat-at-Arms",
    "metadata": { "size": "Medium", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Neutral Evil", "cr": "1" },
    "combat_stats": { "ac": "15 (Chain Shirt)", "hp": "22 (4d8 + 4)", "speed": "30 ft." },
    "ability_scores": { "STR": 14, "DEX": 14, "CON": 12, "INT": 8, "WIS": 10, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Athletics +4, Stealth +4",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "Common (broken)"
    },
    "traits": [
      { "name": "Pack Tactics", "description": "The rat has Advantage on attack rolls against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't Incapacitated." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The rat makes two melee attacks: one with its Shortsword and one with its Bite." },
      { "name": "Shortsword", "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage." },
      { "name": "Bite", "description": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage plus 2 (1d4) Necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Natural Weapons: Teeth (DC 10)",
        "Hair: Fur (DC 10)"
      ]
    }
  },
  {
    "name": "Rat Prince",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "5" },
    "combat_stats": { "ac": "15 (Scrap Armor)", "hp": "95 (10d10 + 40)", "speed": "40 ft." },
    "ability_scores": { "STR": 18, "DEX": 15, "CON": 18, "INT": 12, "WIS": 13, "CHA": 14 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +7, Wis +4", "skills": "Intimidation +5, Perception +4, Stealth +5",
      "vulnerabilities": "", "resistances": "Poison", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 14", "languages": "Common, Undercommon"
    },
    "traits": [
      { "name": "Pack Tactics", "description": "The rat prince has Advantage on attack rolls against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't Incapacitated." },
      { "name": "Multi-Headed", "description": "The rat prince has Advantage on saving throws against being Blinded, Charmed, Deafened, Frightened, Stunned, and knocked Unconscious." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The rat prince makes three attacks: two with its Greatsword and one with its Bites." },
      { "name": "Greatsword", "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 18 (4d6 + 4) Slashing damage." },
      { "name": "Bites", "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Piercing damage plus 10 (3d6) Necrotic damage. Constitution Saving Throw: DC 15. Failure: The target gains one Contamination level." },
      { "name": "Squeaking Command (Recharge 5–6)", "description": "The rat prince issues a shrill command. Up to three allied rats or rat-like creatures within 60 feet can use their Reaction to make one melee attack." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Prince's Multiple Skulls", "dc": 15, "tags": ["Bones", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Brain, Heart (DC 15)",
        "Bones: Skull (DC 15)",
        "Natural Weapons: Teeth (DC 15)",
        "Hair: Fur (DC 15)"
      ]
    }
  },
  {
    "name": "Rat Warlock",
    "metadata": { "size": "Medium", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "3" },
    "combat_stats": { "ac": "12 (15 with Mage Armor)", "hp": "45 (10d8)", "speed": "30 ft." },
    "ability_scores": { "STR": 10, "DEX": 15, "CON": 11, "INT": 14, "WIS": 12, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Wis +3, Cha +5", "skills": "Arcana +4, Deception +5",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 11", "languages": "Common, Undercommon"
    },
    "traits": [
      { "name": "Pack Tactics", "description": "The rat warlock has Advantage on attack rolls against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't Incapacitated." }
    ],
    "actions": [
      { "name": "Dagger", "description": "Melee or Ranged Attack Roll: +4, reach 5 ft. or range 20/60 ft. Hit: 4 (1d4 + 2) Piercing damage." },
      { "name": "Eldritch Blast", "description": "Ranged Spell Attack: +5, range 120 ft., two beams. Hit: 8 (1d10 + 3) Force damage per beam." },
      { "name": "Spellcasting", "description": "The warlock casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 13): At Will: Mage Armor, False Life. 2/Day: Hellish Rebuke, Misty Step, Ray of Enfeeblement." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Rat Warlock Brain", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Organs: Brain (DC 10)",
        "Hair: Fur (DC 10)"
      ]
    }
  },
  {
    "name": "Recreant Knight",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "5" },
    "combat_stats": { "ac": "18 (Plate Armor)", "hp": "85 (10d8 + 40)", "speed": "30 ft." },
    "ability_scores": { "STR": 18, "DEX": 11, "CON": 18, "INT": 10, "WIS": 14, "CHA": 15 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +7, Wis +5", "skills": "Athletics +7, Intimidation +5",
      "vulnerabilities": "", "resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Poison", "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 12", "languages": "The languages it knew in life"
    },
    "traits": [
      { "name": "Martial Advantage", "description": "Once per turn, the knight can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the knight that isn't Incapacitated." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The recreant knight makes two Greatsword attacks." },
      { "name": "Greatsword", "description": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Slashing damage plus 7 (2d6) Necrotic damage." },
      { "name": "Dreadful Command (Recharge 5-6)", "description": "The knight unleashes a terrifying battle cry. Each non-undead creature within 30 feet that can hear it must succeed on a DC 13 Wisdom saving throw or have the Frightened condition for 1 minute (save ends at end of turn)." }
    ],
    "bonus_actions": [], "reactions": [
      { "name": "Parry", "description": "Trigger: A melee attack hits the knight. Response: The knight adds 3 to its AC against that attack, potentially causing it to miss." }
    ],
    "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Ectoplasmic Marrow", "dc": 15, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Set of Tarnished Plate Armor"],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 15)",
        "Fluid: Contaminated Ichor, Ectoplasm (DC 15)",
        "Bones: Spine, Skull (DC 15)",
        "Dust: Undead Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Ripper",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "8" },
    "combat_stats": { "ac": "17", "hp": "142 (15d10 + 60)", "speed": "40 ft." },
    "ability_scores": { "STR": 21, "DEX": 14, "CON": 18, "INT": 3, "WIS": 12, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +8, Con +7", "skills": "Perception +4",
      "vulnerabilities": "", "resistances": "Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Poison", "condition_immunities": "Frightened, Poisoned",
      "senses": "Darkvision 120 ft., passive Perception 14", "languages": "None"
    },
    "traits": [
      { "name": "Berserk", "description": "Whenever the ripper starts its turn with 60 hit points or fewer, roll a d6. On a 6, the ripper goes berserk. On each of its turns while berserk, the ripper attacks the nearest creature it can see. If no creature is near enough to move to and attack, the ripper attacks an object. The ripper remains berserk until it is destroyed or regains all its hit points." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The ripper makes three Blade attacks." },
      { "name": "Blade", "description": "Melee Weapon Attack: +8 to hit, reach 10 ft. Hit: 18 (3d8 + 5) Slashing damage." },
      { "name": "Whirlwind Strike (Recharge 5–6)", "description": "The ripper makes a Blade attack against each creature within 10 feet of it." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Ripper Blade", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Heart, Guts (DC 15)",
        "Bones: Spine (DC 15)",
        "Natural Weapons: Blades (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Sepulchral Wight",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "7" },
    "combat_stats": { "ac": "18 (Plate Armor)", "hp": "112 (15d8 + 45)", "speed": "30 ft." },
    "ability_scores": { "STR": 18, "DEX": 12, "CON": 16, "INT": 12, "WIS": 14, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +6, Wis +5, Cha +6", "skills": "Athletics +7, Perception +5, Stealth +4",
      "vulnerabilities": "", "resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from attacks that aren’t silvered", "immunities": "Poison", "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 15", "languages": "The languages it knew in life"
    },
    "traits": [
      { "name": "Commander of the Dead", "description": "Undead allies within 30 feet of the wight have advantage on saving throws against being turned and gain a +2 bonus to attack rolls." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The wight makes two Longsword attacks or two Life Drain attacks." },
      { "name": "Longsword", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 8 (1d8 + 4) Slashing damage plus 7 (2d6) Necrotic damage." },
      { "name": "Life Drain", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 14 (3d6 + 4) Necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Sepulchral Heart", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Set of Plate Armor"],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Organs: Heart (DC 15)",
        "Bones: Skull, Spine, Ribs (DC 15)",
        "Dust: Undead Dust (DC 15)"
      ]
    }
  },
  {
    "name": "Shadow-Touched Troll",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "8" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "105 (10d10 + 50)", "speed": "30 ft." },
    "ability_scores": { "STR": 20, "DEX": 13, "CON": 20, "INT": 7, "WIS": 9, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +8, Con +8", "skills": "Perception +2",
      "vulnerabilities": "Fire, Radiant", "resistances": "Necrotic", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 120 ft., passive Perception 12", "languages": "Giant"
    },
    "traits": [
      { "name": "Shadow Stealth", "description": "While in dim light or darkness, the troll can take the Hide action as a bonus action." },
      { "name": "Regeneration", "description": "The troll regains 10 hit points at the start of its turn. If the troll takes fire or radiant damage, this trait doesn’t function at the start of the troll’s next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The troll makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 9 (1d8 + 5) Piercing damage plus 7 (2d6) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 12 (2d6 + 5) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Shadow-Touched Flesh", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Target's max HP reduced by 7 (2d6) until long rest." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Heart, Guts, Flesh (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Stalking Flora",
    "metadata": { "size": "Large", "type": "Plant", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "6" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "95 (10d10 + 40)", "speed": "30 ft., climb 30 ft." },
    "ability_scores": { "STR": 19, "DEX": 10, "CON": 18, "INT": 2, "WIS": 10, "CHA": 2 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +7", "skills": "Stealth +6",
      "vulnerabilities": "Fire", "resistances": "Cold, Necrotic", "immunities": "Poison", "condition_immunities": "Blinded, Deafened, Exhaustion, Poisoned, Prone",
      "senses": "Blindsight 60 ft., passive Perception 10", "languages": "None"
    },
    "traits": [
      { "name": "False Appearance", "description": "While the flora remains motionless, it is indistinguishable from a normal plant." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The flora makes two Slam attacks and uses Entangling Roots." },
      { "name": "Slam", "description": "Melee Weapon Attack: +7 to hit, reach 10 ft. Hit: 13 (2d8 + 4) Bludgeoning damage." },
      { "name": "Entangling Roots", "description": "Melee Weapon Attack: +7 to hit, reach 15 ft. Hit: 11 (2d6 + 4) Piercing damage, and the target is Restrained (escape DC 15)." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Plant Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Predatory Bloom", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Plant Animus (DC 15)",
        "Fluid: Sap (DC 15)",
        "Organs: Flowers (DC 15)",
        "Bones: Stems (DC 15)",
        "Natural Weapons: Needles (DC 15)",
        "Hair: Leaves (DC 15)"
      ]
    }
  },
  {
    "name": "Tower Dragon",
    "metadata": { "size": "Huge", "type": "Dragon", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "17" },
    "combat_stats": { "ac": "20 (natural armour)", "hp": "250 (20d12 + 120)", "speed": "40 ft., climb 40 ft., fly 80 ft." },
    "ability_scores": { "STR": 26, "DEX": 10, "CON": 23, "INT": 12, "WIS": 15, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +6, Con +12, Wis +8, Cha +10", "skills": "Perception +14, Stealth +6",
      "vulnerabilities": "", "resistances": "", "immunities": "Necrotic, Poison", "condition_immunities": "Poisoned",
      "senses": "Blindsight 60 ft., Darkvision 120 ft., passive Perception 24", "languages": "Common, Draconic"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the dragon fails a saving throw, it can choose to succeed instead." },
      { "name": "Contaminated Aura", "description": "A creature that starts its turn within 30 feet of the dragon must succeed on a DC 18 Constitution saving throw or gain one level of contamination." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +14 to hit, reach 10 ft. Hit: 19 (2d10 + 8) Piercing damage plus 7 (2d6) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +14 to hit, reach 5 ft. Hit: 15 (2d6 + 8) Slashing damage." },
      { "name": "Delerium Breath (Recharge 5–6)", "description": "The dragon exhales contaminated energy in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 63 (18d6) Necrotic damage on a failed save, or half as much damage on a successful one. On a failure, the creature also gains one level of contamination." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Dragon Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Stone-Scale Plates", "dc": 20, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null },
        { "name": "Tower Dragon's Heart", "dc": 25, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Explodes for 63 (18d6) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Dragon Animus (DC 20)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 20)",
        "Organs: Heart, Brain, Guts (DC 20)",
        "Bones: Skull, Spine, Ribs (DC 20)",
        "Natural Weapons: Teeth, Claws (DC 20)",
        "Hide: Scales, Skin (DC 20)"
      ]
    }
  },
  {
    "name": "Vampire Spawn (Drakkenheim)",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Neutral Evil", "cr": "5" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "82 (11d8 + 33)", "speed": "30 ft." },
    "ability_scores": { "STR": 16, "DEX": 16, "CON": 16, "INT": 11, "WIS": 10, "CHA": 12 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +6, Wis +3", "skills": "Perception +3, Stealth +6",
      "vulnerabilities": "", "resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Poison", "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 13", "languages": "Common"
    },
    "traits": [
      { "name": "Regeneration", "description": "The spawn regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the spawn takes radiant damage or damage from holy water, this trait doesn't function at the start of the spawn's next turn." },
      { "name": "Spider Climb", "description": "The spawn can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The spawn makes two attacks, only one of which can be a Bite attack." },
      { "name": "Claws", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft. Hit: 8 (2d4 + 3) Slashing damage. Instead of dealing damage, the spawn can grapple the target (escape DC 13)." },
      { "name": "Bite", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the spawn, incapacitated, or restrained. Hit: 6 (1d6 + 3) Piercing damage plus 7 (2d6) Necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the spawn regains hit points equal to that amount." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Vampiric Fangs", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Organs: Guts (DC 15)",
        "Natural Weapons: Teeth, Claws (DC 15)",
        "Hair: Hair (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Vampire Noble",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "10" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "144 (17d8 + 68)", "speed": "30 ft." },
    "ability_scores": { "STR": 18, "DEX": 18, "CON": 18, "INT": 17, "WIS": 15, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +8, Wis +6, Cha +8", "skills": "Insight +6, Perception +6, Stealth +8",
      "vulnerabilities": "", "resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Poison", "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft., passive Perception 16", "languages": "Common"
    },
    "traits": [
      { "name": "Shapechanger", "description": "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form." },
      { "name": "Regeneration", "description": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The vampire makes two attacks, only one of which can be a Bite attack." },
      { "name": "Unarmed Strike", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 8 (1d8 + 4) Bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 16)." },
      { "name": "Bite", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 7 (1d6 + 4) Piercing damage plus 10 (3d6) Necrotic damage. The target's hit point maximum is reduced by the necrotic damage, and the vampire regains that many hit points." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Noble Vampire Blood", "dc": 15, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Fine Clothing set"],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Organs: Heart, Brain (DC 15)",
        "Natural Weapons: Teeth, Claws (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Vampire Lord",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "15" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "204 (24d8 + 96)", "speed": "30 ft." },
    "ability_scores": { "STR": 20, "DEX": 20, "CON": 18, "INT": 18, "WIS": 16, "CHA": 20 },
    "proficiencies_and_resistances": {
      "saving_throws": "Dex +10, Wis +8, Cha +10", "skills": "Insight +8, Perception +8, Stealth +10",
      "vulnerabilities": "", "resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Poison", "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft., passive Perception 18", "languages": "Common"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the vampire fails a saving throw, it can choose to succeed instead." },
      { "name": "Misty Escape", "description": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist instead of falling unconscious." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The vampire makes three attacks, only one of which can be a Bite attack." },
      { "name": "Unarmed Strike", "description": "Melee Weapon Attack: +10 to hit, reach 5 ft. Hit: 9 (1d8 + 5) Bludgeoning damage plus 14 (4d6) Necrotic damage." },
      { "name": "Bite", "description": "Melee Weapon Attack: +10 to hit, reach 5 ft. Hit: 8 (1d6 + 5) Piercing damage plus 14 (4d6) Necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Move", "description": "The vampire moves up to its speed without provoking opportunity attacks." },
      { "name": "Unarmed Strike", "description": "The vampire makes one unarmed strike." },
      { "name": "Bite (Costs 2 Actions)", "description": "The vampire makes one bite attack." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Vampire Lord's Heart", "dc": 20, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Ring of Protection"],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 20)",
        "Fluid: Contaminated Ichor (DC 20)",
        "Organs: Heart, Brain (DC 20)",
        "Natural Weapons: Teeth, Claws (DC 20)",
        "Hide: Skin (DC 20)"
      ]
    }
  },
  {
    "name": "Warped Beholder",
    "metadata": { "size": "Large", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "14" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "180 (19d10 + 76)", "speed": "0 ft., fly 20 ft. (hover)" },
    "ability_scores": { "STR": 10, "DEX": 14, "CON": 18, "INT": 17, "WIS": 15, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +9, Int +8, Wis +7", "skills": "Perception +12",
      "vulnerabilities": "", "resistances": "Psychic", "immunities": "", "condition_immunities": "Prone",
      "senses": "Darkvision 120 ft., passive Perception 22", "languages": "Deep Speech, Undercommon"
    },
    "traits": [
      { "name": "Antimagic Eye", "description": "The beholder’s central eye creates a 150-foot cone of antimagic. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 14 (4d6) Piercing damage." },
      { "name": "Eye Rays", "description": "The beholder shoots three of the following random eye rays (roll a d10): 1. Charm Ray, 2. Paralyzing Ray, 3. Fear Ray, 4. Slowing Ray, 5. Enervation Ray, 6. Telekinetic Ray, 7. Sleep Ray, 8. Petrification Ray, 9. Disintegration Ray, 10. Death Ray." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Eye Ray", "description": "The beholder uses one random eye ray." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Warped Eye Stalk", "dc": 20, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Triggers random Eye Ray effect on failure." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 20)",
        "Fluid: Contaminated Ichor (DC 20)",
        "Organs: Eyes, Brain (DC 20)",
        "Natural Weapons: Teeth (DC 20)",
        "Hide: Skin (DC 20)"
      ]
    }
  },
  {
    "name": "Wasted One",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "1/2" },
    "combat_stats": { "ac": "12", "hp": "22 (5d8)", "speed": "30 ft." },
    "ability_scores": { "STR": 14, "DEX": 14, "CON": 11, "INT": 7, "WIS": 10, "CHA": 8 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +4, Con +2", "skills": "Stealth +4",
      "vulnerabilities": "Radiant", "resistances": "Necrotic", "immunities": "Poison", "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "Understands the languages it knew in life but can’t speak"
    },
    "traits": [
      { "name": "Pack Tactics", "description": "The wasted one has advantage on an attack roll against a creature if at least one of its allies is within 5 feet of the creature and the ally isn't incapacitated." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The wasted one makes two attacks: one with its Bite and one with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage plus 3 (1d6) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Wasted Bone Shard", "dc": 10, "tags": ["Bones", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Bones: Skull, Spine, Ribs (DC 10)",
        "Dust: Undead Dust (DC 10)"
      ]
    }
  },
  {
    "name": "Warped Beholder (Death Tyrant Variant)",
    "metadata": { "size": "Large", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "14" },
    "combat_stats": { "ac": "19 (natural armour)", "hp": "187 (25d10 + 50)", "speed": "0 ft., fly 20 ft. (hover)" },
    "ability_scores": { "STR": 10, "DEX": 14, "CON": 14, "INT": 19, "WIS": 15, "CHA": 19 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +7, Int +9, Wis +7, Cha +9", "skills": "Perception +12",
      "vulnerabilities": "", "resistances": "Necrotic", "immunities": "Poison; Poisoned, Prone",
      "senses": "Darkvision 120 ft., passive Perception 22", "languages": "Deep Speech, Undercommon"
    },
    "traits": [
      { "name": "Negative Energy Cone", "description": "The beholder’s central eye emits an invisible, 150-foot cone of negative energy. At the start of each of its turns, the beholder decides which way the cone faces and whether it is active. Any creature in that area can’t regain hit points. Any humanoid that dies there becomes a zombie under the beholder’s control." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 14 (4d6) Piercing damage." },
      { "name": "Eye Rays", "description": "The beholder shoots three random eye rays (refer to the Beholder Eye Ray table)." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [ { "name": "Eye Ray", "description": "The beholder uses one random eye ray." } ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Delerium-Infused Eye Socket", "dc": 20, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Triggers 10 (3d6) Necrotic damage and stops healing." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 20)",
        "Fluid: Contaminated Ichor (DC 20)",
        "Organs: Eyes, Brain (DC 20)",
        "Bones: Skull (DC 20)",
        "Dust: Undead Dust (DC 20)"
      ]
    }
  },
  {
    "name": "Abhorrent Overlord",
    "metadata": { "size": "Large", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "9" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "136 (16d10 + 48)", "speed": "30 ft." },
    "ability_scores": { "STR": 18, "DEX": 12, "CON": 16, "INT": 19, "WIS": 15, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +7, Int +8, Wis +6", "skills": "Arcana +8, Deception +7, Insight +6, Persuasion +7",
      "vulnerabilities": "", "resistances": "Psychic", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 120 ft., passive Perception 12", "languages": "Common, Deep Speech, Telepathy 120 ft."
    },
    "traits": [
      { "name": "Magic Resistance", "description": "The overlord has advantage on saving throws against spells and other magical effects." },
      { "name": "Innate Spellcasting", "description": "Spell save DC 16. At will: Detect Thoughts, Invisibility. 3/day each: Charm Person, Suggestion." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The overlord makes two Claw attacks and uses Mind Blast if available." },
      { "name": "Claw", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 13 (2d8 + 4) Slashing damage plus 7 (2d6) Psychic damage." },
      { "name": "Mind Blast (Recharge 5–6)", "description": "The overlord magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 16 Intelligence saving throw or take 22 (4d8 + 4) Psychic damage and be Stunned for 1 minute." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Overlord's Brain", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "22 (4d8+4) Psychic damage." }
      ],
      "guaranteed_drops": ["1x Mantle of Spell Resistance"],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Brain, Heart (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Drakkenheim Troll",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "5" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "84 (8d10 + 40)", "speed": "30 ft." },
    "ability_scores": { "STR": 18, "DEX": 13, "CON": 20, "INT": 7, "WIS": 9, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +8", "skills": "Perception +2",
      "vulnerabilities": "Fire", "resistances": "", "immunities": "Poison; Poisoned", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 12", "languages": "Giant"
    },
    "traits": [
      { "name": "Keen Smell", "description": "The troll has advantage on Wisdom (Perception) checks that rely on smell." },
      { "name": "Regeneration", "description": "The troll regains 10 hit points at the start of its turn. If the troll takes fire damage, this trait doesn’t function at the start of the troll’s next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The troll makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 7 (1d6 + 4) Piercing damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 11 (2d6 + 4) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Troll Liver", "dc": 10, "tags": ["Organs", "Edible"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 10)",
        "Organs: Heart, Liver (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Eldritch Troll",
    "metadata": { "size": "Large", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "10" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "172 (15d10 + 90)", "speed": "30 ft." },
    "ability_scores": { "STR": 21, "DEX": 13, "CON": 22, "INT": 9, "WIS": 11, "CHA": 9 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +9, Con +10, Wis +4", "skills": "Perception +4",
      "vulnerabilities": "Radiant", "resistances": "Necrotic", "immunities": "Poison; Poisoned", "condition_immunities": "",
      "senses": "Darkvision 120 ft., passive Perception 14", "languages": "Giant, Deep Speech"
    },
    "traits": [
      { "name": "Regeneration", "description": "The troll regains 20 hit points at the start of its turn. If the troll takes radiant damage, this trait doesn’t function at the start of the troll’s next turn." },
      { "name": "Contaminated Aura", "description": "A creature that starts its turn within 10 feet of the troll must succeed on a DC 16 Constitution saving throw or gain one level of contamination." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The troll makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +9 to hit, reach 5 ft. Hit: 14 (2d8 + 5) Piercing damage plus 9 (2d8) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +9 to hit, reach 5 ft. Hit: 15 (3d6 + 5) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Eldritch Troll Heart", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "18 (4d8) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 15)",
        "Fluid: Contaminated Ichor (DC 15)",
        "Organs: Heart, Brain (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Magma Troll",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "7" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "114 (12d10 + 48)", "speed": "30 ft." },
    "ability_scores": { "STR": 20, "DEX": 10, "CON": 18, "INT": 7, "WIS": 9, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +8, Con +7", "skills": "Perception +2",
      "vulnerabilities": "Cold", "resistances": "", "immunities": "Fire, Poison; Poisoned", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 12", "languages": "Giant"
    },
    "traits": [
      { "name": "Heat Aura", "description": "A creature that starts its turn within 5 feet of the troll takes 7 (2d6) fire damage." },
      { "name": "Regeneration", "description": "The troll regains 10 hit points at the start of its turn. If the troll takes cold damage, this trait doesn’t function at the start of the troll’s next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The troll makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 12 (2d6 + 5) Piercing damage plus 7 (2d6) Fire damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 12 (2d6 + 5) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Molten Blood", "dc": 15, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": "7 (2d6) Fire damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Molten Ichor (DC 15)",
        "Organs: Heart (DC 15)",
        "Hide: Obsidian Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Oak Troll",
    "metadata": { "size": "Large", "type": "Plant", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Neutral", "cr": "6" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "105 (10d10 + 50)", "speed": "30 ft." },
    "ability_scores": { "STR": 20, "DEX": 10, "CON": 20, "INT": 7, "WIS": 12, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +8, Con +8", "skills": "Perception +4, Stealth +3",
      "vulnerabilities": "Fire", "resistances": "Bludgeoning, Piercing", "immunities": "Poison; Poisoned", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 14", "languages": "Giant"
    },
    "traits": [
      { "name": "False Appearance", "description": "While the troll remains motionless, it is indistinguishable from a normal tree." },
      { "name": "Regeneration", "description": "The troll regains 10 hit points at the start of its turn. If the troll takes fire damage, this trait doesn’t function at the start of the troll’s next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The troll makes three attacks: one with its Bite and two with its Slam." },
      { "name": "Bite", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 12 (2d6 + 5) Piercing damage." },
      { "name": "Slam", "description": "Melee Weapon Attack: +8 to hit, reach 10 ft. Hit: 14 (2d8 + 5) Bludgeoning damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Plant Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Living Oak Bark", "dc": 15, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Plant Animus (DC 15)",
        "Fluid: Sap (DC 15)",
        "Organs: Heart (DC 15)",
        "Hide: Bark Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Winter Troll",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "7" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "114 (12d10 + 48)", "speed": "30 ft." },
    "ability_scores": { "STR": 20, "DEX": 10, "CON": 18, "INT": 7, "WIS": 11, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +8, Con +7", "skills": "Perception +3",
      "vulnerabilities": "Fire", "resistances": "", "immunities": "Cold, Poison; Poisoned", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 13", "languages": "Giant"
    },
    "traits": [
      { "name": "Chilling Presence", "description": "A creature that starts its turn within 5 feet of the troll takes 7 (2d6) cold damage." },
      { "name": "Regeneration", "description": "The troll regains 10 hit points at the start of its turn. If the troll takes fire damage, this trait doesn’t function at the start of the troll’s next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The troll makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 12 (2d6 + 5) Piercing damage plus 7 (2d6) Cold damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +8 to hit, reach 5 ft. Hit: 12 (2d6 + 5) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Frozen Troll Fat", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "7 (2d6) Cold damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood (DC 15)",
        "Organs: Heart (DC 15)",
        "Hide: Frosty Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Rat Swarm (Drakkenheim Variant)",
    "metadata": { "size": "Medium", "type": "Swarm of Tiny Beasts", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "1/4" },
    "combat_stats": { "ac": "10", "hp": "24 (7d8 - 7)", "speed": "30 ft." },
    "ability_scores": { "STR": 9, "DEX": 11, "CON": 9, "INT": 2, "WIS": 10, "CHA": 3 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "",
      "vulnerabilities": "", "resistances": "Bludgeoning, Piercing, Slashing", "immunities": "", "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Darkvision 30 ft., passive Perception 10", "languages": "None"
    },
    "traits": [
      { "name": "Swarm", "description": "The swarm can occupy another creature’s space and vice versa. It can’t regain hit points or gain temporary hit points." }
    ],
    "actions": [
      { "name": "Bites", "description": "Melee Weapon Attack: +2 to hit, reach 0 ft. Hit: 7 (2d6) Piercing damage, or 3 (1d6) Piercing damage if the swarm has half hit points or fewer." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": null, "harvest_check": null,
      "parts": [], "guaranteed_drops": [],
      "drakkenheim_original_parts": []
    }
  },
  {
    "name": "Rat King",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "4" },
    "combat_stats": { "ac": "13 (natural armour)", "hp": "67 (9d10 + 18)", "speed": "30 ft." },
    "ability_scores": { "STR": 16, "DEX": 12, "CON": 15, "INT": 12, "WIS": 14, "CHA": 12 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +5, Con +4", "skills": "Perception +4, Stealth +3",
      "vulnerabilities": "", "resistances": "Poison", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 14", "languages": "Common, Undercommon"
    },
    "traits": [
      { "name": "Pack Tactics", "description": "The rat king has advantage on an attack roll against a creature if at least one of its allies is within 5 feet of the creature." },
      { "name": "Scurrying Swarm", "description": "Rats within 30 feet of the king have advantage on saving throws against being frightened." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The rat king makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 7 (2d6) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Tangled Rat Tails", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Monster Blood (DC 10)",
        "Bones: Multiple Skulls (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Rat God",
    "metadata": { "size": "Huge", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "11" },
    "combat_stats": { "ac": "16 (natural armour)", "hp": "168 (16d12 + 64)", "speed": "40 ft." },
    "ability_scores": { "STR": 22, "DEX": 12, "CON": 18, "INT": 14, "WIS": 16, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +10, Con +8, Wis +7, Cha +8", "skills": "Intimidation +8, Perception +7",
      "vulnerabilities": "", "resistances": "Necrotic, Poison", "immunities": "", "condition_immunities": "Frightened, Poisoned",
      "senses": "Darkvision 120 ft., passive Perception 17", "languages": "Common, Undercommon, Telepathy 60 ft."
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the rat god fails a saving throw, it can choose to succeed instead." },
      { "name": "Aura of Plague", "description": "A creature that starts its turn within 10 feet of the rat god must succeed on a DC 16 Constitution saving throw or gain one level of contamination." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The rat god makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +10 to hit, reach 10 ft. Hit: 19 (2d12 + 6) Piercing damage plus 14 (4d6) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +10 to hit, reach 10 ft. Hit: 13 (2d6 + 6) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Scurry", "description": "The rat god moves up to its speed without provoking opportunity attacks." },
      { "name": "Claw", "description": "The rat god makes one claw attack." },
      { "name": "Squeak of the Damned (Costs 2 Actions)", "description": "Each creature of the rat god's choice within 60 feet must succeed on a DC 16 Wisdom saving throw or be Frightened until the end of its next turn." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "God-Rat Brain", "dc": 20, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "14 (4d6) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 20)",
        "Fluid: Contaminated Ichor (DC 20)",
        "Organs: Heart, Brain (DC 20)",
        "Bones: Huge Skull (DC 20)",
        "Hide: Skin (DC 20)"
      ]
    }
  },
  {
    "name": "Sewer Thing",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "7" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "114 (12d10 + 48)", "speed": "30 ft., swim 30 ft." },
    "ability_scores": { "STR": 19, "DEX": 10, "CON": 18, "INT": 3, "WIS": 12, "CHA": 5 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +7", "skills": "Stealth +6",
      "vulnerabilities": "", "resistances": "", "immunities": "Acid, Poison", "condition_immunities": "Blinded, Deafened, Poisoned, Prone",
      "senses": "Blindsight 60 ft. (blind beyond this radius), passive Perception 11", "languages": "None"
    },
    "traits": [
      { "name": "Amphibious", "description": "The sewer thing can breathe air and water." },
      { "name": "Stench", "description": "Any creature that starts its turn within 10 feet of the sewer thing must succeed on a DC 15 Constitution saving throw or be Poisoned until the start of its next turn." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The sewer thing makes three Tentacle attacks." },
      { "name": "Tentacle", "description": "Melee Weapon Attack: +7 to hit, reach 15 ft. Hit: 11 (2d6 + 4) Bludgeoning damage plus 7 (2d6) Acid damage. If the target is Medium or smaller, it is Grappled (escape DC 14) and Restrained until the grapple ends." },
      { "name": "Reel", "description": "The sewer thing pulls each creature Grappled by it up to 10 feet straight toward it." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Corrosive Tentacle Stalk", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": "7 (2d6) Acid damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor, Acidic Bile (DC 15)",
        "Organs: Guts, Glands (DC 15)",
        "Natural Weapons: Tentacles (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Shardmaul Manticore",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "6" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "95 (10d10 + 40)", "speed": "30 ft., fly 50 ft." },
    "ability_scores": { "STR": 19, "DEX": 16, "CON": 18, "INT": 9, "WIS": 12, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +7, Con +7", "skills": "Perception +4",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 14", "languages": "Common"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The manticore makes three attacks: one with its Bite and two with its Claws, or three with its Tail Spikes." },
      { "name": "Bite", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 8 (1d8 + 4) Piercing damage plus 7 (2d6) Necrotic damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 11 (2d6 + 4) Slashing damage." },
      { "name": "Tail Spike", "description": "Ranged Weapon Attack: +7 to hit, range 100/200 ft. Hit: 11 (2d6 + 4) Piercing damage plus 7 (2d6) Necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Delerium Tail Spike", "dc": 15, "tags": ["Natural Weapons", "Drakkenheim Unique"], "rupture_effect": "7 (2d6) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood, Contaminated Ichor (DC 15)",
        "Organs: Heart, Guts (DC 15)",
        "Natural Weapons: Teeth, Claws, Spikes (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Phase Spider (Drakkenheim Variant)",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "4" },
    "combat_stats": { "ac": "13 (natural armour)", "hp": "45 (7d10 + 7)", "speed": "30 ft., climb 30 ft." },
    "ability_scores": { "STR": 15, "DEX": 15, "CON": 12, "INT": 6, "WIS": 10, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Stealth +6",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 10", "languages": "None"
    },
    "traits": [
      { "name": "Ethereal Jaunt", "description": "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa." },
      { "name": "Spider Climb", "description": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +4 to hit, reach 5 ft. Hit: 7 (1d10 + 2) Piercing damage plus 18 (4d8) Poison damage. If the poison damage reduces the target to 0 hit points, the target is Stable but Poisoned for 1 hour, even after regaining hit points, and is Paralyzed while Poisoned in this way." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Ethereal Spinneret", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 10)",
        "Fluid: Monster Blood (DC 10)",
        "Organs: Venom Sac (DC 10)",
        "Hide: Chitin (DC 10)"
      ]
    }
  },
  {
    "name": "Ghost (Drakkenheim Variant)",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Any", "cr": "4" },
    "combat_stats": { "ac": "11", "hp": "45 (10d8)", "speed": "0 ft., fly 40 ft. (hover)" },
    "ability_scores": { "STR": 7, "DEX": 13, "CON": 10, "INT": 10, "WIS": 12, "CHA": 17 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "",
      "vulnerabilities": "", "resistances": "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Cold, Necrotic, Poison; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft., passive Perception 11", "languages": "The languages it knew in life"
    },
    "traits": [
      { "name": "Ethereal Sight", "description": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa." },
      { "name": "Incorporeal Movement", "description": "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
    ],
    "actions": [
      { "name": "Withering Touch", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 17 (4d6 + 3) Necrotic damage." },
      { "name": "Etherealness", "description": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane." },
      { "name": "Possession (Recharge 6)", "description": "One humanoid that the ghost can see within 5 feet must succeed on a DC 13 Charisma saving throw or be possessed by the ghost." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Spectral Ectoplasm", "dc": 10, "tags": ["Fluid", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 10)",
        "Fluid: Ectoplasm (DC 10)",
        "Dust: Undead Dust (DC 10)"
      ]
    }
  },
  {
    "name": "Will-o'-Wisp (Drakkenheim Variant)",
    "metadata": { "size": "Tiny", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "2" },
    "combat_stats": { "ac": "19", "hp": "22 (9d4)", "speed": "0 ft., fly 50 ft. (hover)" },
    "ability_scores": { "STR": 1, "DEX": 28, "CON": 10, "INT": 13, "WIS": 14, "CHA": 11 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "",
      "vulnerabilities": "", "resistances": "Acid, Cold, Fire, Necrotic, Thunder; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Lightning, Poison; Bludgeoning, Piercing, Slashing from nonmagical attacks; Exhaustion, Grappled, Paralyzed, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 120 ft., passive Perception 12", "languages": "The languages it knew in life"
    },
    "traits": [
      { "name": "Ephemeral", "description": "The wisp can't wear or carry anything." },
      { "name": "Incorporeal Movement", "description": "The wisp can move through other creatures and objects as if they were difficult terrain." },
      { "name": "Variable Illumination", "description": "The wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius." }
    ],
    "actions": [
      { "name": "Shock", "description": "Melee Spell Attack: +4 to hit, reach 5 ft. Hit: 9 (2d8) Lightning damage." },
      { "name": "Invisibility", "description": "The wisp magically turns invisible until it attacks or uses its Consume Life, or until its concentration ends." },
      { "name": "Consume Life", "description": "The wisp targets one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw or die." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Wisp-Light Fragment", "dc": 10, "tags": ["Dust", "Drakkenheim Unique"], "rupture_effect": "9 (2d8) Lightning damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 10)",
        "Dust: Undead Dust (DC 10)"
      ]
    }
  },
  {
    "name": "Hell Hound (Drakkenheim Variant)",
    "metadata": { "size": "Medium", "type": "Fiend", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "3" },
    "combat_stats": { "ac": "15 (natural armour)", "hp": "45 (7d8 + 14)", "speed": "50 ft." },
    "ability_scores": { "STR": 17, "DEX": 12, "CON": 14, "INT": 6, "WIS": 13, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Perception +5",
      "vulnerabilities": "", "resistances": "", "immunities": "Fire", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 15", "languages": "Understands Infernal but can't speak it"
    },
    "traits": [
      { "name": "Keen Hearing and Smell", "description": "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
      { "name": "Pack Tactics", "description": "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature." }
    ],
    "actions": [
      { "name": "Bite", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage plus 7 (2d6) Fire damage." },
      { "name": "Fire Breath (Recharge 5–6)", "description": "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Fiend Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Hell Hound Fire-Gland", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Explodes for 21 (6d6) Fire damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Fiend Animus (DC 10)",
        "Fluid: Monster Blood (DC 10)",
        "Organs: Heart, Glands (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Chimera (Drakkenheim Variant)",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "6" },
    "combat_stats": { "ac": "14 (natural armour)", "hp": "114 (12d10 + 48)", "speed": "30 ft., fly 60 ft." },
    "ability_scores": { "STR": 19, "DEX": 11, "CON": 19, "INT": 3, "WIS": 14, "CHA": 10 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Perception +8",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 18", "languages": "Understands Draconic but can't speak it"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The chimera makes three attacks: one with its Bite, one with its Horns, and one with its Claws. When its Fire Breath is available, it can use the breath in place of its bite." },
      { "name": "Bite", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage." },
      { "name": "Horns", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 10 (1d12 + 4) Bludgeoning damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 11 (2d6 + 4) Slashing damage." },
      { "name": "Fire Breath (Recharge 5–6)", "description": "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Chimera Heart", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 15)",
        "Fluid: Monster Blood (DC 15)",
        "Organs: Heart, Brain (DC 15)",
        "Bones: Multiple Skulls (DC 15)",
        "Hide: Skin (DC 15)"
      ]
    }
  },
  {
    "name": "Ogre (Drakkenheim Variant)",
    "metadata": { "size": "Large", "type": "Giant", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "2" },
    "combat_stats": { "ac": "11 (natural armour)", "hp": "59 (7d10 + 21)", "speed": "40 ft." },
    "ability_scores": { "STR": 19, "DEX": 8, "CON": 16, "INT": 5, "WIS": 7, "CHA": 7 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "Darkvision 60 ft., passive Perception 8", "languages": "Common, Giant"
    },
    "traits": [],
    "actions": [
      { "name": "Greatclub", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage." },
      { "name": "Javelin", "description": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft. Hit: 11 (2d6 + 4) Piercing damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Giant Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Ogre Toe", "dc": 10, "tags": ["Organs", "Edible"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Giant Animus (DC 10)",
        "Fluid: Monster Blood (DC 10)",
        "Bones: Skull, Ribs (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Hill Giant (Drakkenheim Variant)",
    "metadata": { "size": "Huge", "type": "Giant", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "5" },
    "combat_stats": { "ac": "13 (natural armour)", "hp": "105 (10d12 + 40)", "speed": "40 ft." },
    "ability_scores": { "STR": 21, "DEX": 8, "CON": 19, "INT": 5, "WIS": 9, "CHA": 6 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "Perception +2",
      "vulnerabilities": "", "resistances": "", "immunities": "", "condition_immunities": "",
      "senses": "passive Perception 12", "languages": "Giant"
    },
    "traits": [],
    "actions": [
      { "name": "Multiattack", "description": "The giant makes two Greatclub attacks." },
      { "name": "Greatclub", "description": "Melee Weapon Attack: +8 to hit, reach 10 ft. Hit: 18 (3d8 + 5) Bludgeoning damage." },
      { "name": "Rock", "description": "Ranged Weapon Attack: +8 to hit, range 60/240 ft. Hit: 21 (3d10 + 5) Bludgeoning damage." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Giant Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Giant's Heart", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Giant Animus (DC 10)",
        "Fluid: Monster Blood (DC 10)",
        "Bones: Skull, Spine, Ribs (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Polyp",
    "metadata": { "size": "Medium", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "2" },
    "combat_stats": { "ac": "12 (natural armour)", "hp": "45 (6d8 + 18)", "speed": "10 ft., climb 10 ft." },
    "ability_scores": { "STR": 14, "DEX": 6, "CON": 16, "INT": 1, "WIS": 6, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "", "skills": "",
      "vulnerabilities": "", "resistances": "", "immunities": "Poison; Poisoned, Prone", "condition_immunities": "",
      "senses": "Blindsight 30 ft. (blind beyond this radius), passive Perception 8", "languages": "None"
    },
    "traits": [
      { "name": "False Appearance", "description": "While the polyp remains motionless, it is indistinguishable from a normal mutated growth." }
    ],
    "actions": [
      { "name": "Tentacle", "description": "Melee Weapon Attack: +4 to hit, reach 10 ft. Hit: 9 (2d6 + 2) Bludgeoning damage plus 7 (2d6) Necrotic damage. If the target is Medium or smaller, it is Grappled (escape DC 12)." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Pulsing Polyp Node", "dc": 10, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "7 (2d6) Necrotic damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 10)",
        "Fluid: Contaminated Ichor (DC 10)",
        "Hide: Skin (DC 10)"
      ]
    }
  },
  {
    "name": "Warp Witch",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "4" },
    "combat_stats": { "ac": "12", "hp": "45 (10d8)", "speed": "0 ft., fly 40 ft. (hover)" },
    "ability_scores": { "STR": 1, "DEX": 14, "CON": 11, "INT": 12, "WIS": 12, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Wis +3, Cha +5", "skills": "Perception +3, Stealth +4",
      "vulnerabilities": "", "resistances": "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Cold, Necrotic, Poison; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft., passive Perception 13", "languages": "The languages it knew in life"
    },
    "traits": [
      { "name": "Ethereal Sight", "description": "The warp witch can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa." },
      { "name": "Incorporeal Movement", "description": "The witch can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
    ],
    "actions": [
      { "name": "Balefire Lantern", "description": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft. Hit: 13 (3d6 + 3) Cold damage. The target must succeed on a DC 13 Constitution saving throw or its speed is reduced by 10 feet and it has disadvantage on attack rolls until the end of its next turn." },
      { "name": "Possession (Recharge 6)", "description": "One humanoid that the witch can see within 5 feet must succeed on a DC 13 Charisma saving throw or be possessed. While possessed, the witch is incapacitated and loses control of its body. The witch now controls the body but doesn't deprive the target of awareness." }
    ],
    "bonus_actions": [
      { "name": "Mutate Host", "description": "While possessing a creature, the witch forces the host to gain one level of contamination and a random mutation." }
    ],
    "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 10, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Warp Witch Lantern", "dc": 15, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "13 (3d6 + 3) Cold damage and speed reduction." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 10)",
        "Fluid: Ectoplasm (DC 10)",
        "Dust: Undead Dust (DC 10)"
      ]
    }
  },
  {
    "name": "The Pale Man",
    "metadata": { "size": "Medium", "type": "Construct", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "15" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "180 (19d8 + 95)", "speed": "30 ft." },
    "ability_scores": { "STR": 16, "DEX": 18, "CON": 20, "INT": 22, "WIS": 18, "CHA": 16 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +10, Int +11, Wis +9", "skills": "Arcana +16, History +11, Medicine +14",
      "vulnerabilities": "", "resistances": "Psychic", "immunities": "Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Truesight 60 ft., passive Perception 14", "languages": "Common, Draconic, Elvish, Gnomish"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the Pale Man fails a saving throw, he can choose to succeed instead." },
      { "name": "Swarm Break", "description": "When the Pale Man dies, his body collapses into a Swarm of Contaminated Insects." },
      { "name": "Innate Spellcasting", "description": "Spell save DC 19. He can cast several wizard spells including Animate Objects, Cloudkill, and Contagion." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The Pale Man makes three Scalpel attacks or two Arcane Blasts." },
      { "name": "Scalpel", "description": "Melee Weapon Attack: +9 to hit, reach 5 ft. Hit: 7 (1d6 + 4) Piercing damage plus 14 (4d6) Necrotic damage." },
      { "name": "Arcane Blast", "description": "Ranged Spell Attack: +11 to hit, range 120 ft. Hit: 27 (6d6 + 6) Force damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "At Will Spell", "description": "The Pale Man casts an at-will spell." },
      { "name": "Scalpel", "description": "The Pale Man makes one scalpel attack." },
      { "name": "Teleport (Costs 2 Actions)", "description": "The Pale Man teleports up to 60 feet to an unoccupied space he can see." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Construct Essence", "dc": 25, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Pale Man's Clockwork Heart", "dc": 25, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Ring of Regeneration", "1x Staff of Power"],
      "drakkenheim_original_parts": [
        "Construct Animus (DC 25)",
        "Fluid: Chemical Solution (DC 25)",
        "Organs: Brain (DC 25)",
        "Bones: Plates (DC 25)"
      ]
    }
  },
  {
    "name": "The Lord of the Feast",
    "metadata": { "size": "Large", "type": "Monstrosity", "tags": ["Drakkenheim Creature"], "alignment": "Chaotic Evil", "cr": "13" },
    "combat_stats": { "ac": "18 (natural armour)", "hp": "190 (20d10 + 80)", "speed": "40 ft." },
    "ability_scores": { "STR": 23, "DEX": 15, "CON": 19, "INT": 12, "WIS": 16, "CHA": 18 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +11, Con +9, Wis +8", "skills": "Athletics +11, Perception +8, Survival +8",
      "vulnerabilities": "", "resistances": "Cold, Necrotic", "immunities": "Poison; Poisoned",
      "senses": "Darkvision 120 ft., passive Perception 18", "languages": "Common, Giant, Garmyr"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the Lord fails a saving throw, he can choose to succeed instead." },
      { "name": "Blood Frenzy", "description": "The Lord has advantage on melee attack rolls against any creature that doesn't have all its hit points." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The Lord makes three attacks: one with his Gore and two with his Greataxe." },
      { "name": "Gore", "description": "Melee Weapon Attack: +11 to hit, reach 5 ft. Hit: 19 (3d8 + 6) Piercing damage. If the Lord moved 20 ft. straight toward the target, it takes an extra 13 (3d8) damage and must succeed on a DC 19 Strength save or be Prone." },
      { "name": "Greataxe", "description": "Melee Weapon Attack: +11 to hit, reach 10 ft. Hit: 19 (2d12 + 6) Slashing damage." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Move", "description": "The Lord moves up to his speed without provoking opportunity attacks." },
      { "name": "Greataxe", "description": "The Lord makes one greataxe attack." },
      { "name": "Call the Pack (Costs 2 Actions)", "description": "The Lord summons 1d4 Garmyr to unoccupied spaces within 30 feet." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Nature)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Monstrosity Essence", "dc": 20, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Lord's Great-Antlers", "dc": 20, "tags": ["Bones", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Belt of Hill Giant Strength"],
      "drakkenheim_original_parts": [
        "Monstrosity Animus (DC 20)",
        "Fluid: Monster Blood (DC 20)",
        "Bones: Skull (DC 20)",
        "Hide: Skin (DC 20)"
      ]
    }
  },
  {
    "name": "The Duchess",
    "metadata": { "size": "Huge", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "18" },
    "combat_stats": { "ac": "19 (natural armour)", "hp": "225 (18d12 + 108)", "speed": "20 ft., swim 40 ft." },
    "ability_scores": { "STR": 24, "DEX": 10, "CON": 22, "INT": 20, "WIS": 18, "CHA": 22 },
    "proficiencies_and_resistances": {
      "saving_throws": "Con +12, Int +11, Wis +10, Cha +12", "skills": "Deception +12, Insight +10, Persuasion +12",
      "vulnerabilities": "", "resistances": "Psychic", "immunities": "Poison; Charmed, Frightened, Poisoned",
      "senses": "Truesight 120 ft., passive Perception 14", "languages": "All, Telepathy 1 mile"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the Duchess fails a saving throw, she can choose to succeed instead." },
      { "name": "Amphibious", "description": "The Duchess can breathe air and water." },
      { "name": "Psychic Aura", "description": "A creature that starts its turn within 60 feet of the Duchess takes 10 (3d6) Psychic damage." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The Duchess makes three Tentacle attacks. She can replace one attack with Enthralling Gaze." },
      { "name": "Tentacle", "description": "Melee Weapon Attack: +13 to hit, reach 15 ft. Hit: 20 (3d8 + 7) Bludgeoning damage plus 10 (3d6) Psychic damage. The target is Grappled (escape DC 21)." },
      { "name": "Enthralling Gaze", "description": "The Duchess targets one creature she can see within 60 feet. The target must succeed on a DC 20 Wisdom saving throw or be Charmed for 1 minute." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Tentacle", "description": "The Duchess makes one tentacle attack." },
      { "name": "Telepathic Command", "description": "The Duchess commands one charmed creature to move up to its speed and make one attack." },
      { "name": "Psychic Scream (Costs 2 Actions)", "description": "Each creature of the Duchess's choice within 60 feet must succeed on a DC 20 Intelligence save or take 21 (6d6) Psychic damage and be Stunned." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Aberration Essence", "dc": 25, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Duchess's Brain-Stem", "dc": 25, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Explodes for 21 (6d6) Psychic damage." }
      ],
      "guaranteed_drops": ["1x Cloak of the Manta Ray", "1x Pearl of Power"],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 25)",
        "Fluid: Contaminated Ichor (DC 25)",
        "Organs: Brain, Eyes (DC 25)",
        "Hide: Skin (DC 25)"
      ]
    }
  },
  {
    "name": "Minazorond",
    "metadata": { "size": "Gargantuan", "type": "Construct", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "18" },
    "combat_stats": { "ac": "22 (natural armour)", "hp": "275 (19d20 + 76)", "speed": "40 ft., fly 80 ft." },
    "ability_scores": { "STR": 28, "DEX": 10, "CON": 18, "INT": 3, "WIS": 11, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +15, Con +10", "skills": "Perception +6",
      "vulnerabilities": "", "resistances": "Bludgeoning, Piercing, Slashing from nonmagical attacks", "immunities": "Fire, Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Blindsight 60 ft., Darkvision 120 ft., passive Perception 16", "languages": "None"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If Minazorond fails a saving throw, it can choose to succeed instead." },
      { "name": "Immutable Form", "description": "Minazorond is immune to any effect that would alter its form." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "Minazorond makes three attacks: one with its Bite and two with its Claws." },
      { "name": "Bite", "description": "Melee Weapon Attack: +15 to hit, reach 15 ft. Hit: 20 (2d10 + 9) Piercing damage plus 10 (3d6) Fire damage." },
      { "name": "Claws", "description": "Melee Weapon Attack: +15 to hit, reach 10 ft. Hit: 16 (2d6 + 9) Slashing damage." },
      { "name": "Clockwork Flame (Recharge 5–6)", "description": "Minazorond exhales fire in a 90-foot cone. Each creature must make a DC 18 Dexterity save, taking 70 (20d6) Fire damage on failure." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Detect", "description": "Minazorond makes a Perception check." },
      { "name": "Tail Attack", "description": "Minazorond makes a tail attack (+15 to hit, reach 20 ft. Hit: 18 (2d8+9) Bludgeoning damage)." },
      { "name": "Wing Attack (Costs 2 Actions)", "description": "Each creature within 15 feet must succeed on a DC 23 Strength save or be knocked Prone. Minazorond then flies up to half its speed." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Construct Essence", "dc": 25, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Jewel-Encrusted Scales", "dc": 25, "tags": ["Hide", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Gem (worth 5,000gp)"],
      "drakkenheim_original_parts": [
        "Construct Animus (DC 25)",
        "Fluid: Oil (DC 25)",
        "Bones: Plates (DC 25)",
        "Hide: Metal Scales (DC 25)"
      ]
    }
  },
  {
    "name": "The Executioner",
    "metadata": { "size": "Huge", "type": "Construct", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "10" },
    "combat_stats": { "ac": "17 (natural armour)", "hp": "157 (15d12 + 60)", "speed": "30 ft." },
    "ability_scores": { "STR": 24, "DEX": 10, "CON": 18, "INT": 3, "WIS": 11, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +11, Con +8", "skills": "Perception +4",
      "vulnerabilities": "", "resistances": "Bludgeoning, Piercing, Slashing from nonmagical attacks", "immunities": "Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Darkvision 60 ft., passive Perception 14", "languages": "None"
    },
    "traits": [
      { "name": "Immutable Form", "description": "The executioner is immune to any effect that would alter its form." },
      { "name": "Siege Monster", "description": "The executioner deals double damage to objects and structures." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The executioner makes two Guillotine Blade attacks." },
      { "name": "Guillotine Blade", "description": "Melee Weapon Attack: +11 to hit, reach 15 ft. Hit: 26 (3d12 + 7) Slashing damage. If the target is a creature, it must succeed on a DC 19 Strength saving throw or be knocked Prone." },
      { "name": "Execution (Recharge 5–6)", "description": "The executioner targets one Prone creature within 15 feet. Melee Weapon Attack: +11 to hit. Hit: 52 (6d12 + 7) Slashing damage. If this damage reduces the target to 0 hit points, the target is decapitated and dies instantly." }
    ],
    "bonus_actions": [], "reactions": [], "legendary_actions": [], "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Construct Essence", "dc": 15, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Executioner's Blade Plate", "dc": 20, "tags": ["Bones", "Drakkenheim Unique"], "rupture_effect": null }
      ],
      "guaranteed_drops": ["1x Greataxe +2"],
      "drakkenheim_original_parts": [
        "Construct Animus (DC 15)",
        "Fluid: Oil (DC 15)",
        "Bones: Plates (DC 15)"
      ]
    }
  },
  {
    "name": "Vladimir von Drakken (Crypt-Starved)",
    "metadata": { "size": "Medium", "type": "Undead", "tags": ["Drakkenheim Creature"], "alignment": "Lawful Evil", "cr": "21" },
    "combat_stats": { "ac": "20 (Plate Armor +3)", "hp": "228 (24d8 + 120)", "speed": "30 ft." },
    "ability_scores": { "STR": 24, "DEX": 14, "CON": 20, "INT": 16, "WIS": 18, "CHA": 20 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +14, Con +12, Wis +11, Cha +12", "skills": "Athletics +14, Intimidation +12, Perception +11",
      "vulnerabilities": "", "resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from nonmagical attacks", "immunities": "Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
      "senses": "Truesight 60 ft., passive Perception 21", "languages": "Common, Draconic"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If Vladimir fails a saving throw, he can choose to succeed instead." },
      { "name": "Regeneration", "description": "Vladimir regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in sunlight. If he takes radiant damage, this trait doesn't function at the start of his next turn." },
      { "name": "Unyielding King", "description": "Vladimir cannot be turned. He has advantage on saving throws against being grappled or restrained." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "Vladimir makes three Greatsword attacks." },
      { "name": "Greatsword", "description": "Melee Weapon Attack: +14 to hit, reach 5 ft. Hit: 21 (4d6 + 7) Slashing damage plus 14 (4d6) Necrotic damage." }
    ],
    "bonus_actions": [], "reactions": [
      { "name": "Parry", "description": "Vladimir adds 6 to his AC against one melee attack that would hit him." }
    ],
    "legendary_actions": [
      { "name": "Attack", "description": "Vladimir makes one greatsword attack." },
      { "name": "Command the Dead", "description": "One undead ally within 60 feet can use its reaction to make one melee attack." },
      { "name": "Dreadful Presence (Costs 2 Actions)", "description": "Each creature within 60 feet must succeed on a DC 20 Wisdom save or be Frightened for 1 minute." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Religion)",
      "harvest_check": "Wisdom (Medicine)",
      "parts": [
        { "name": "Undead Essence", "dc": 30, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Heart of the Starved King", "dc": 30, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "14 (4d6) Necrotic damage and target cannot heal for 1 round." }
      ],
      "guaranteed_drops": ["1x Greatsword +3", "1x Plate Armor +3"],
      "drakkenheim_original_parts": [
        "Undead Animus (DC 30)",
        "Fluid: Contaminated Ichor (DC 30)",
        "Organs: Heart, Brain (DC 30)",
        "Bones: Skull (DC 30)"
      ]
    }
  },
  {
    "name": "The World Ender",
    "metadata": { "size": "Gargantuan", "type": "Aberration", "tags": ["Drakkenheim Creature"], "alignment": "Unaligned", "cr": "23" },
    "combat_stats": { "ac": "22 (natural armour)", "hp": "450 (20d20 + 240)", "speed": "50 ft., burrow 50 ft." },
    "ability_scores": { "STR": 30, "DEX": 10, "CON": 34, "INT": 3, "WIS": 18, "CHA": 1 },
    "proficiencies_and_resistances": {
      "saving_throws": "Str +17, Con +19, Wis +11", "skills": "Perception +11",
      "vulnerabilities": "", "resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, Slashing from nonmagical attacks", "immunities": "Necrotic, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned, Prone, Stunned",
      "senses": "Blindsight 120 ft., passive Perception 21", "languages": "None"
    },
    "traits": [
      { "name": "Legendary Resistance (3/Day)", "description": "If the World Ender fails a saving throw, it can choose to succeed instead." },
      { "name": "Contaminated Presence", "description": "A creature that starts its turn within 120 feet of the World Ender must succeed on a DC 22 Constitution saving throw or gain one level of contamination and take 21 (6d6) Necrotic damage." },
      { "name": "Siege Monster", "description": "It deals double damage to objects and structures." }
    ],
    "actions": [
      { "name": "Multiattack", "description": "The World Ender makes three Stomp attacks." },
      { "name": "Stomp", "description": "Melee Weapon Attack: +17 to hit, reach 20 ft. Hit: 32 (4d10 + 10) Bludgeoning damage. If the target is a creature, it must succeed on a DC 25 Strength saving throw or be knocked Prone." },
      { "name": "Delerium Beam (Recharge 5–6)", "description": "The World Ender exhales a line of prismatic energy 300 feet long and 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 84 (24d6) Force damage and 1 level of contamination on a failed save." }
    ],
    "bonus_actions": [], "reactions": [],
    "legendary_actions": [
      { "name": "Move", "description": "The World Ender moves up to half its speed." },
      { "name": "Stomp", "description": "The World Ender makes one stomp attack." },
      { "name": "Quake (Costs 2 Actions)", "description": "Each creature on the ground within 60 feet must succeed on a DC 25 Dexterity save or be knocked Prone." }
    ],
    "mythic_actions": [], "lair_actions": [],
    "harvest_and_loot": {
      "assessment_check": "Intelligence (Arcana)",
      "harvest_check": "Wisdom (Survival)",
      "parts": [
        { "name": "Aberration Essence", "dc": 30, "tags": ["Essence"], "rupture_effect": null },
        { "name": "Delerium Heart Fragment", "dc": 35, "tags": ["Organs", "Drakkenheim Unique"], "rupture_effect": "Triggers an immediate Arcane Anomaly and 84 (24d6) Force damage." }
      ],
      "guaranteed_drops": [],
      "drakkenheim_original_parts": [
        "Aberration Animus (DC 30)",
        "Fluid: Contaminated Ichor (DC 30)",
        "Hide: Mutated Skin (DC 30)",
        "Dust: Delerium Dust (DC 30)"
      ]
    }
  }
];