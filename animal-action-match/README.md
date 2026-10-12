# Animal Action Match

Grade 2 animal–action vocabulary game. Start `npm start`, open `/animal-action-match/`, or choose it in the shared game library.

Uses the same Shape Friends UI, preview-before-flip flow, Practice/Beat Sparky, hints, pause/audio, three visual worlds and separately saved XP/progress. Easy/Medium/Hard use 4/6/8 cards (2/3/4 pairs), following the established game sizes rather than the larger grids in the chapter outline.

Easy samples frog–HOP, fish–SWIM, bird–FLY and cat–CLIMB. Medium samples horse–TROT, lamb–LEAP, snake–CRAWL and monkey–SWING. Hard samples all eight. Replays shuffle available pairs so the full vocabulary can appear. Cards have only animal pictures or single uppercase action words; no sentences or animal names are printed on picture cards.

Practice awards 14 XP per first world/board clear; Beat Sparky awards 8 XP. Three worlds × three boards × (14 + 8), plus 2 XP for completing the journey, totals 200. Replays do not award duplicate XP.

Six animal PNGs reuse existing repository artwork; horse and lamb are new transparent bitmap artwork created using the built-in image-generation tool. Prompts and saved asset paths are in [ASSET_PROMPTS.md](ASSET_PROMPTS.md). Action cards are scalable typographic SVGs. Rebuild words with `node animal-action-match/scripts/generate-word-art.mjs`.
