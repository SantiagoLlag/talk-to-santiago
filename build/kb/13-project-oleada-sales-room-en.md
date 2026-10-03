# Talk to Santiago · [EN] Project: the Oleada voice sales room and its brand film
Document language: English
Version: 1 (2026-10-02)
Source cutoff: 2026-10-02
Scope: The virtual sales room with a voice concierge that Santiago Llaguno built for Pacific Villas at Oleada Los Cabos, and the Oleada brand film he narrated with ElevenLabs v4, described at a technical level. It is the only real estate development project that is named.

## What is the Oleada sales room? A virtual sales room with a voice concierge
As part of his work at Los Cabos Sotheby's International Realty, Santiago Llaguno built a virtual sales room with a voice concierge for Pacific Villas at Oleada Los Cabos. Oleada is an oceanfront community on the Pacific in Cabo San Lucas, with Ernie Els's first golf course in Latin America and homes designed by LEGORRETA. The Oleada sales room can be opened and tried from this page.
Source: ledger P12

## How does the Oleada voice concierge work? The voice moves the screen
The voice concierge in the Oleada sales room speaks English and Spanish: it is two ElevenLabs agents, one per language, using the eleven_v4_turbo voice model. While it talks, the concierge moves the screen with tools: it opens the lots, the golf course, the renderings, the home floor plans and a floor plan comparison. The design rule is that the user wins: if the visitor touched the screen in the last 8 seconds, the concierge doesn't change their view and offers a button to see what it's talking about instead.
Source: ledger P12

## What safeguards does the Oleada sales room have? One data file and a guard
In the Oleada sales room, every figure comes from a single data file; nothing is hand-written into the page. Renderings are labeled as illustrative, and lot prices that haven't been validated are marked as pending validation. The Oleada concierge answers with Claude through a proxy Santiago built as a guard: it caps each turn at 60 words and one question, and attaches the price-validity notice to the first price it mentions.
Source: ledger P12

## What does the sales team get from the Oleada sales room? An internal brief
When a visit to the Oleada sales room ends, the room puts together an internal brief for the sales team with what the visitor looked at and asked. If the visitor doesn't want to use the microphone, the room offers a text conversation or a touch-only tour.
Source: ledger P12

## How did Santiago test the Oleada sales room? Automated tests and judges
Santiago Llaguno tested the Oleada sales room with three sets of automated tests for the concierge's proxy and a suite of conversations scored by automated judges, for example one that checks the hard rules and another that checks that the concierge consults instead of reciting a script.
Source: ledger P12

## What is the Oleada brand film? A video narrated with ElevenLabs v4
Santiago Llaguno produced the narration for the Pacific Villas at Oleada Los Cabos brand film with ElevenLabs v4. The Oleada brand film is 88 seconds long and in English. Santiago wrote the 136-word script to the video's actual cuts, which he detected with ffmpeg, and marked an emotion on each block of the narration: from wonder at the start to an invitation at the close. The Oleada video can be watched from this page.
Source: ledger P12b
