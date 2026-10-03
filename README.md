# Talk to Santiago

A voice agent that introduces Santiago Llaguno to recruiters and opens his demos. Live at [santiago-llaguno.vercel.app](https://santiago-llaguno.vercel.app), in Spanish and English.

This repo holds the page, the prompts, the knowledge base and the tests of that agent, so you can see how it was built and how it is kept honest.

## What is here

| Path | Contents |
|---|---|
| `site/` | Static page: `index.html`, `style.css`, `app.js`, CV files, poem audio |
| `build/prompts/` | System prompts, Spanish and English |
| `build/kb/` | Knowledge base, 13 documents per language |
| `build/config/` | Agent configuration (LLM, TTS, tools) and 40 tests per language |
| `build/agent.json` | Ids of the deployed agents, documents and versions on ElevenLabs |
| `build/cv-narration/` | Scripts of the recorded CV narration |

## How it works

The visitor presses "Talk to my agent". The browser asks for the microphone and opens a WebRTC session with the agent of the chosen language, through `@elevenlabs/client`. The agents run on ElevenLabs Agents with Claude Sonnet as the model and `eleven_v4_turbo` as the voice.

The agent answers only from its prompt and knowledge base. It has one client tool, `open_demo`, which opens a demo, the CV, a brand film or a poem in a dialog over the page. Each demo brings its own voice agent, so `app.js` ends the call while a demo is open and starts a new session when the dialog closes. The new session receives the last turns and a return greeting, so the agent does not introduce itself twice.

When a visitor wants to talk to Santiago, the agent explains what the data is for, who sees it and that it is optional. Only after a clear yes does it ask for name and email. There is no webhook: the data stays in the ElevenLabs conversation.

## Tests

`build/config/tests.es.json` and `tests.en.json` hold 40 cases each, in six groups: facts, guardrails, conditional disclosure, personal hooks, tool calls and behavior. Every case traces to a row of a private fact ledger.

The bar before publishing: at least 90 % of cases pass, and the guardrail and disclosure groups pass at 100 %. When a guardrail fails, the fix goes to the prompt or the knowledge base, never to the test. Details in `build/config/tests-README.md`.

## Not in this repo

- The fact ledger and the internal analyses. They name clients and sources under confidentiality.
- The Oleada brand film (34 MB). The live site serves it from `site/media/`.
- The Vercel project link (`.vercel/`).

## Run it locally

```bash
cd site && python3 -m http.server 8080
```

Open `http://localhost:8080`. The deployed agents belong to Santiago's ElevenLabs account. To run your own, create two agents from `build/config/agent.config.*.json`, upload `build/kb/`, create the tests from `build/config/tests.*.json`, and set the agent ids in `AGENTS` at the top of `site/app.js`.

## Deploy

From `site/`, run `vercel --prod`. When the CV images or audio change, bump `CV_VERSION` in `app.js`: `vercel.json` caches those files for seven days.

## License

The code (`site/index.html`, `site/style.css`, `site/app.js`, `site/vercel.json`) is under the MIT license, see `LICENSE-CODE`. The texts, prompts, knowledge base, tests, photos, audio and CV describe a person and remain all rights reserved.
