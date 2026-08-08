---
title: "Where Halo Forge Developer Relations Failed"
description: "How 343 Industries failed Halo Infinite's Forge community through exploitative practices, unaddressed bugs, and missing features. Why creators abandoned Halo for better UGC platforms."
pubDate: "Sep 1 2025"
updatedDate: "Nov 15 2025"
heroImage: "../../assets/dump/hero-halo.webp"
---

From personal experience, to hearing from those within the Forge community and news regarding some of the most talented Forgers abandoning Halo, [like The Forge Falcons](https://x.com/TheForgeFalcons/status/1935760269189288146), I decided to write out some of my own thoughts on how things have been handled by the studio behind Halo Infinite.

## Exploiting Community Labour

Manipulating naive Forgers "trying to make it" into sustaining the game's official content, matchmaking, and marketing without compensation.

Forgers initially created for themselves and the community, as is and always has been the essence of Halo's UGC aspect. Once Halo Infinite was put on maintenance mode with minimal life support, 343 started pulling nearly all of its content from community-forged creations without compensation - with barely even any recognition, communication, cooperation, or respect for talent.

Recognizing the predatory nature behind this practice, many refused to partake in it. Others, many of which were hoping to either be compensated or thought it would get their foot in the door as a game developer with 343, unsurprisingly ended up wasting hundreds if not thousands of hours in time and effort, with no payoff.

343 became complacent while exploiting community Forgers, which led to a steady exodus of critical community talent seeking alternative platforms like Fortnite, UEFN, Roblox, etc. Environments where they could create with better tooling, feedback & communication channels, developer support, appreciation and compensation.

## Unaddressed Bugs and Issues

Despite consistent and detailed reporting, most Forge tooling bugs went unacknowledged. Even those which somehow appeared in "Known Issues" posts were often left unresolved for years, if ever.

- **Precision Misalignments:** Issues in all placement modes (grid, object-to-object snapping, manual position entry), regardless of distance from the world origin.

- **Lighting Bugs:** Bleeds, wide-angle light source issues, shadow problems with transparent objects and fences, dynamic object lighting, lighting build errors, etc.

- **Vehicle Physics:** Breaking changes in custom game terrain-heavy maps (i.e., Lake Hot Pursuit), causing random vehicle clipping and launching, potentially tied to network prediction(?).

- **Script Brains:** Larger script brains randomly losing variable values and node connections.

- **AI Navigation Crashes:** Consistent crashes when toggling or building AI navigation meshes.

- Countless _(literally)_ more.

## Other Issues

For a long period after launch, players were unable to upload custom UGC thumbnails for their creations unless playing on console _(or paying for Xbox Cloud Gaming on PC)_ on the basis of PC allegedly being too difficult to content-control. This restriction was eventually lifted after incessant complaints.

To this day, uploading and organizing thumbnails and preview screenshots is still largely broken and often requires multiple hacky retries to work properly.

Lobby permissions do not persist between sessions, which can lead to accidental open-party Forge sessions _(which is also always-online)_. If an uninvited player joins without you noticing, you encounter the following outcome:

1. Their username is now permanently listed as a collaborator on your creation, and,
2. You're forced to revert to earlier versions, causing hours of lost work.

## Lacking Fundamental Features

From the lack of a terrain editor which UGC-supported games figured out _over 20 years ago_, to Forge still being online-only years after release (they've never heard of offline support with cloud syncing) are but a few of the fundamental features you would expect out of modern-day UGC tooling. And it doesn't come from technical limitations; it's a skill issue.

For instance; refusal to implement one of the most fundamental event triggers in game development history - "On Player Damage Taken" along with its expected handles, such as attacker, victim, and damage instance context. For some reason "On Object Damaged" was implemented from launch, but it cannot be initiated with player objects/actors.

Not having access to context means losing the ability to conditionally react to a specific damage instance, such as zombifying a player in place depending on a damage source condition _(zombie hit, fall damage, self-inflicted, friendly fire, or environmental hazards like nerve gas DoTs)_. Another use case could be calculating the knockback direction based on the vector angle between the aggressor and the damaged zombie, then applying force to the infected along that line.

This leads to having to fall back to an inefficient & lackluster health polling system which returns no contextual information. Polling each player's HP every 0.1s, saving the value to a variable tied to the player object, and checking if that number changed during the next cycle. Due to this, none of the fine-tuned conditional results in response to damage taken are possible with scripting. If you want to infect a player in-place after being hit by a zombie, you can't. You're constrained to doing it in all possible instances of damage, meaning you can no longer have self-damage from grenades, friendly fire, fall damage, or environmental damage, otherwise they too would zombify a human player.

## Lack of aptitude & professionalism

The Forge/DevRel team has proven to be consistently unprofessional, incompetent, and disrespectful. They would often ignore feedback, reported bugs, and requests for features. Broken promises, blaming the community for their own mistakes, excuses for their own failures, are a hallmark of virtually everything 343, which unfortunately includes even their developer relations team which are the furthest imaginable away from "corpo suits" that people usually blame.

> _**Edit as of November 15, 2025:**  
> You can get an insight into their incompetence and lack of decorum in the later part of [this article recently written by Okom](https://okom.one/blog/hero-in-117-minutes-the-largest-xp-exploit-in-halo-infinite#the-aftermath). Where failing to properly curate experiences which they add to official matchmaking gets blamed on everyone but themselves, and map creators permanently suspended from the game._

---

## Conclusion

**TL;DR:** Tooling is subpar, Forge/DevRel team is subpar, communication and cooperation is non-existent, feedback/reporting is ignored, 343 exploiting talent to produce official content which makes them profit for zero compensation.

This list is non-exhaustive; mostly some personal thoughts prior to quitting Forge a while back.
