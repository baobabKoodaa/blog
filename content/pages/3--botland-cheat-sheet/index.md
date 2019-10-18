---
title: Bot Land Cheat Sheet
---

The purpose of this page is to allow quick lookups on specific things about Bot Land game mechanics. I wanted to consolidate this information in one place, since it was scattered all over the internet (some of the docs were available only in-game, some information only in Discord chat, etc.) You can edit this page <a href="https://github.com/baobabKoodaa/blog/blob/master/content/pages/3--botland-cheat-sheet/index.md" target="_blank">here</a>.

<!--<re-img
    src="honeypot.jpg"
    title="Photo by Sonja Langford on Unsplash"
    href="https://unsplash.com/photos/RQHzRELE2Ss"
    >
</re-img>-->

---

## Comparison of weapon types

| Class         | Damage        | Min-range | Max-range | Directionality   | Delay      | Blind-fireable | Reflectable |
| --------------|:-------------:|:---------:|:---------:|:----------------:|:----------:|:--------------:|:-----------:|
| Melee         | 300-550       | 1         |    1-2    | Only cardinal    | 0          |    No          |   No        |
| Lasers        | 100-400       | 1         |    3-5    | Only cardinal    | 0          |    Yes         |   Yes       | 
| Missiles      | 200-300       | 1         |    3-4    | Any direction    | 0          |    No          |   Yes       |
| Artillery     | 250-500       | 5         |    7-7    | Any direction    | 2          |    No          |   No        |
| Zappers       | 100-350       | -         |     -     | -                | 0          |    -           |   -         |
| Landmines     | 600-600       | -         |     -     | -                | 0          |    -           |   -         |

## Melee

- Melee can hit in only cardinal directions (left, right, up, down).
- Melee hits the target immediately.
- Melee can not be blind-fired (you can not hit cloaked enemies).
- Melee has the ability to charge (simultaneously move and attack from 2 tiles distance in a cardinal direction).
- Melee has no cooldown, but charge does.


| Weapon        | Damage        | Charge cooldown |
| --------------|:-------------:|:---------------:|
| Melee I       | 300           | 7               |
| Melee II      | 450           | 4               |
| Melee III     | 550           | 4               |

## Lasers

- All lasers only fire in cardinal directions (left, right, up, down).
- All lasers hit the target immediately.
- All lasers can be blind-fired (you can hit cloaked enemies).
- All lasers can be reflected.
- All lasers have no cooldown (can be used again every turn).
- Inferno Lasers ignite the target, causing 100 damage per turn for the duration of the ignition and causing a cloaked unit to become visible for the duration of the ignition (the cloak buff stays on, so the unit may become invisible after the ignition is over). Ignition persists across rounds.
- Stunning Lasers stun the target for 1 turn.
- Stunning Lasers can not stun the same target 2 turns in a row.
- Stunning Lasers' damage can be reflected but the stun can not.
- Vampiric Lasers heal for 30% of damage inflicted (is this correct?)

| Weapon                 | Damage        | Range | Special effect | Special duration  |
| -----------------------|:-------------:|:-----:|:--------------:|:-----------------:|
| Lasers I               | 200           | 3     |     -          |    -              |
| Lasers II              | 300           | 4     |     -          |    -              |
| Lasers III             | 400           | 5     |     -          |    -              |
| Inferno Lasers I       | 100           | 3     |     Ignite     |    1              |
| Inferno Lasers II      | 150           | 4     |     Ignite     |    2              |
| Inferno Lasers III     | 200           | 5     |     Ignite     |    3              |
| Stunning Lasers I      | 100           | 3     |      Stun      |    1              |
| Stunning Lasers II     | 150           | 4     |      Stun      |    1              |
| Stunning Lasers III    | 200           | 5     |      Stun      |    1              |
| Vampiric Lasers I      | 150           | 3     |      Heal 30%  |    -              |
| Vampiric Lasers II     | 225           | 4     |      Heal 30%  |    -              |
| Vampiric Lasers III    | 300           | 5     |      Heal 30%  |    -              |

## Missiles

- Any missile can be fired in any direction.
- Any missile hit the target immediately.
- No missile can be blind-fired (you can not hit cloaked enemies).
- Any missile can be reflected.
- Regular Missiles and Multi Missiles have no cooldown.
- Acceleration Missiles have a cooldown which is reduced by consecutive firing and reset by other actions.
- Multi Missiles fire at every enemy in range.

| Weapon                    | Damage        | Range | Cooldown         | Acceleration rate |
| --------------------------|:-------------:|:-----:|:----------------:|:-----------------:|
| Missiles I                | 200           | 3     |     -            |    -              |
| Missiles II               | 250           | 3     |     -            |    -              |
| Missiles III              | 300           | 4     |     -            |    -              |
| Multi Missiles I          | 66            | 3     |     -            |    -              |
| Multi Missiles II         | 83            | 3     |     -            |    -              |
| Multi Missiles III        | 100           | 4     |     -            |    -              |
| Acceleration Missiles I   | 200           | 3     |     1.7 → 0.6    |    0.3            |
| Acceleration Missiles I   | 250           | 3     |     1.7 → 0.6    |    0.3            |
| Acceleration Missiles III | 300           | 3     |     1.7 → 0.6    |    0.3            |

## Artillery

- Artillery is the only weapon in the game which does not hit immediately (it takes 2 turns to land a shot).
- Artillery is the only weapon in the game with a _minimum_ range (5 tiles).
- Although artillery has maximum range 7, sensors must be activated to fire further than 5 tiles. Activating sensors costs an action and the duration of sensors enables only 2 consecutive artillery shots.
- Artillery can be fired in any direction.
- Due to the inability to blind-fire and the delay in landing shots, artillery shots can be easily dodged.
- Artillery shots cause splash damage to adjacent squares (including diagonally adjacent?)
- Artillery can not be reflected.

| Weapon                    | Damage        | Splash damage |
| --------------------------|:-------------:|:-------------:|
| Artillery I               | 250           | 10            |
| Artillery II              | 400           | 20            |
| Artillery III             | 500           | 30            |

## Zappers

- When activated, zapper creates an electric field around your bot, dealing damage to adjacent enemies.
- Diagonally adjacent enemies receive only 50% damage.
- Inferno Zapper ignites the target, causing 100 damage per turn for the duration of the ignition and causing a cloaked unit to become visible for the duration of the ignition (the cloak buff stays on, so the unit may become invisible after the ignition is over). Ignition persists across rounds.

| Weapon                 | Damage        | Duration | Cooldown | Special effect | Special duration  |
| -----------------------|:-------------:|:--------:|:--------:|:--------------:|:-----------------:|
| Zapper I               | 250           | 4        |     9    |    -           | -                 |
| Zapper II              | 300           | 5        |     9    |    -           | -                 |
| Zapper III             | 350           | 6        |     9    |    -           | -                 |
| Inferno Zapper I       | 100           | 3        |     8    |    Ignite      | 2                 |
| Inferno Zapper II      | 150           | 4        |     8    |    Ignite      | 2                 |
| Inferno Zapper III     | 150           | 5        |     8    |    Ignite      | 3                 |

## Landmines

- A bot can lay landmines under itself.
- A mine will explode when enemy steps on it or if its duration expires.
- There is some limit to the amount of mines a bot can lay before their earlier mines begin to disappear.
- There is some limit to the total amount of mines which can be on the battlefield at any time.
- Mines can not be directly detected by the enemy.
- You can not stack mines on the same tile.
- Landmines persist across rounds.

| Weapon                    | Damage        | Duration      |
| --------------------------|:-------------:|:-------------:|
| Landmines I               | 600           | 11            |
| Landmines II              | 600           | 14            |
| Landmines III             | 600           | 17            |

<!-- Hack to fix a whitespace issue. -->
##

---

## Cloaking

- Makes your bot invisible.
- Moving and attacking are possible while cloaked. Other actions will decloak you.
- While you are cloaked, your damage is reduced by 80%.
- Your enemy might decloak you by attempting to move or teleport into your tile.
- If a friendly unit attempts to teleport onto your tile, it will simply teleport into an adjacent free tile.
- Ignition makes you visible for the duration, but does not decloak you. This means you may become invisible again if the ignition wears off but the cloak remains. Inferno Zapper and Inferno Lasers can ignite bots.

## Regen

- TODO

## Teleport

- TODO Talk about teleporting on enemy vs friendly cloaked units.

## Thrusters

- TODO

## Reflect

- TODO
- A missile or laser can not be reflected more than once (can not bounce between targets).

## Shield

- TODO talk about stacking infinite shields

## Armor

- TODO 

## EMP

- TODO on LASERS, MISSILES, MELEE, ARTILLERY, ZAPPER, REPAIR, CLOAKING, SHIELD, REFLECT, TELEPORT, LANDMINES, or EMP.

## Repair

- TODO

## Area Repair

- TODO


---

## General information

- Friendly fire is not possible.
- Matchmaking is restricted to players who have logged in during the past 3 days.
- Matchmaking prioritizes defenders who have not had a match in 5 hours (after a new version of the game is deployed, all players are prioritized).

| Entity        | Life          |
| --------------|:-------------:|
| Bot           | 2000          |
| Chip          | 4000          |
| CPU           | 12000         |

## Open questions

- Is ignition damage affected by cloak damage reduction?

## Game limits

- Maximum script length is 16500 characters for Botlandscript and 49500 characters for Blockly.
- Action limit per round: 3000 opportunities-to-act in total from all bots on the map (currently there is no way to accurately gauge how close to the limit you are).
- Computational limit: ?? (bots can time-out)
- When you use arrays, you have to name them `array1` and `array2`. You can not use more than 2 arrays per bot.
- Arrays can have at most 100 elements.
- You can share information between bots by utilizing shared variables `sharedA` to `sharedE`.

## Related links

- [ESLint Bot Land plugin](https://www.npmjs.com/package/eslint-plugin-botland)
- [Youtube channel of the developer](https://www.youtube.com/channel/UCJFxRNHar-c_lKYxFMIPg_g)