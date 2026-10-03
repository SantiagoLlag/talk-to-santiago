(() => {
  // Agentes "Talk to Santiago" (uno por idioma). Vacío = aún no desplegado.
  const AGENTS = { es: "agent_5601m3d30p66fmb8jnbr4qk62c09", en: "agent_8401m3d363dwecftht771f7qya8r" };

  // Los demos se abren en una ventana sobre la página y traen su propio agente de voz.
  const DEMOS = {
    oleada_sales_room: { es: "https://vista-privada.vercel.app/", en: "https://vista-privada.vercel.app/" },
    dive_commerce_agent: { es: "https://nautilus-clone.vercel.app/", en: "https://nautilus-clone.vercel.app/" },
    sales_trainer: {
      es: "https://voice-sales-trainer-demo.vercel.app/?lang=es",
      en: "https://voice-sales-trainer-demo.vercel.app/?lang=en",
    },
  };
  const DEMO_TITLE = { oleada_sales_room: "demoOleada", dive_commerce_agent: "demoDive", sales_trainer: "demoTrainer" };
  // Los jpg y mp3 se cachean 7 días (vercel.json): subir esta versión al regenerar el CV.
  const CV_VERSION = "2026-10-02";

  const T = {
    es: {
      bio1: "Soy FDE (Forward Deployed Engineer) y trabajo con IA de voz, soluciones agénticas e implementaciones de IA de principio a fin. Estudié matemáticas aplicadas en ciencias de la computación. Soy un pensador estratégico gracias a mis años como jugador internacional de ajedrez. El mar es mi pasión: los fines de semana guío buceos como instructor.",
      bio2: "He vivido en 4 países y viajo por todo el mundo con mi cámara, conociendo a mucha gente y muchas culturas distintas. En mi tiempo libre me gusta leer y escribir poesía.",
      talk: "Habla con mi agente",
      resume: "Retomar la llamada",
      end: "Colgar",
      talkHint: "Te cuenta lo que he construido y te abre mis demos.",
      notReady: "Mi agente está por llegar.",
      connecting: "Conectando…",
      listening: "Te escucho.",
      speaking: "Hablando.",
      ended: "Llamada terminada.",
      cut: "Se cortó la llamada. Puedes retomarla donde se quedó.",
      pausedDemo: "Llamada en pausa mientras pruebas el demo; se retoma al cerrarlo.",
      pausedAudio: "Llamada en pausa mientras escuchas; se retoma al terminar.",
      pausedIdle: "Llamada en pausa. Retómala cuando quieras.",
      noteDemo: "Mi agente está en pausa para que hables con el del demo; al cerrar esta ventana retoma la llamada.",
      noteAudio: "Mi agente está en pausa mientras suena; al terminar retoma la llamada.",
      micDenied: "Para hablar, permite el uso del micrófono en tu navegador.",
      failed: "No se pudo conectar. Inténtalo de nuevo en un momento.",
      openNewTab: "Abrir en pestaña nueva",
      poemSub: "Un poema mío, musicalizado con ElevenLabs",
      extras: "Ejemplos",
      cvTitle: "Mi CV",
      cvSub: "Ábrelo aquí, escúchalo o descárgalo en PDF",
      cvPdf: "Abrir PDF",
      cvListen: "Escuchar el CV",
      cvAlt: "CV de Santiago Llaguno en español",
      zoom: "Tamaño del CV",
      zoomIn: "Ampliar",
      zoomOut: "Reducir",
      demoOleada: "Sala de ventas con concierge de voz · Oleada Los Cabos",
      filmTitle: "Brand film de Oleada, narrado con ElevenLabs v4",
      filmSub: "Video de 88 segundos, en inglés",
      demoDive: "Agente de compra por voz para viajes de buceo",
      demoTrainer: "Entrenador de ventas por voz",
      demoHere: "Demo con su propio agente de voz; se abre aquí mismo",
      poemBy: "Santiago Llaguno, musicalizado con ElevenLabs",
      listen: "Escuchar",
      pause: "Pausar",
      close: "Cerrar",
      privacy: "La conversación usa tu micrófono, la procesa ElevenLabs y se guarda 30 días. Solo si tú lo pides, mi agente me pasa tu nombre y tu correo.",
      photoAlt: "Santiago Llaguno sonriendo frente al Arco de Cabo San Lucas",
      title: "Santiago Llaguno",
      // Al retomar, el agente abre con esta frase en vez de volver a presentarse.
      back: {
        oleada_sales_room: "Ya regresé. ¿Qué te pareció la sala de Oleada?",
        film: "Aquí sigo. ¿Qué te pareció el video?",
        dive_commerce_agent: "Ya regresé. ¿Qué te pareció el agente de buceo?",
        sales_trainer: "Ya regresé. ¿Cómo te fue con el entrenador de ventas?",
        poem: "Aquí sigo. ¿Qué te pareció la oda?",
        cv: "Aquí sigo. ¿Quieres que te cuente más de alguna parte de su trayectoria?",
        cut: "Aquí sigo; retomamos donde nos quedamos. ¿Qué más quieres saber de Santiago?",
        again: "Hola de nuevo. ¿Qué más quieres saber de Santiago?",
      },
      why: {
        oleada_sales_room: "La llamada se pausó mientras la persona probaba la sala de ventas de Oleada, que tiene su propia concierge de voz; ya la cerró.",
        film: "La llamada se pausó mientras la persona veía el brand film de Oleada.",
        dive_commerce_agent: "La llamada se pausó mientras la persona probaba el demo del agente de compra de viajes de buceo, que tiene su propio agente de voz; ya lo cerró.",
        sales_trainer: "La llamada se pausó mientras la persona probaba el demo del entrenador de ventas, que tiene su propio agente de voz; ya lo cerró.",
        poem: "La llamada se pausó mientras la persona escuchaba la oda al martillo.",
        cv: "La llamada se pausó mientras la persona escuchaba la narración del CV de Santiago.",
        cut: "La llamada anterior se cortó sola.",
        again: "La persona colgó y volvió a llamar.",
      },
      context: "Contexto, no lo leas en voz alta: esta llamada continúa otra con la misma persona. {why} Ya te presentaste: no te vuelvas a presentar, no repitas lo que ya contaste y no le pidas otra vez datos que ya dio. Lo último que hablaron:",
      who: { user: "Visitante", ai: "Agente" },
      mail: "[correo que ya dio]",
    },
    en: {
      bio1: "I'm a Forward Deployed Engineer (FDE) working on voice AI, agentic solutions and end-to-end AI implementations. I studied applied mathematics in computer science. Years as an international chess player made me a strategic thinker. The sea is my passion: on weekends I guide dives as an instructor.",
      bio2: "I've lived in 4 countries and I travel the world with my camera, meeting all kinds of people and cultures. In my free time I read and write poetry.",
      talk: "Talk to my agent",
      resume: "Resume the call",
      end: "End the call",
      talkHint: "It tells you what I've built and opens my demos.",
      notReady: "My agent is on its way.",
      connecting: "Connecting…",
      listening: "Listening.",
      speaking: "Speaking.",
      ended: "Call ended.",
      cut: "The call dropped. You can pick it up where it left off.",
      pausedDemo: "Call paused while you try the demo; it resumes when you close it.",
      pausedAudio: "Call paused while you listen; it resumes when it ends.",
      pausedIdle: "Call paused. Resume it whenever you like.",
      noteDemo: "My agent is paused so you can talk to the demo's agent; closing this window resumes the call.",
      noteAudio: "My agent is paused while this plays; the call resumes when it ends.",
      micDenied: "To talk, allow microphone access in your browser.",
      failed: "Couldn't connect. Try again in a moment.",
      openNewTab: "Open in a new tab",
      poemSub: "A poem of mine, set to music with ElevenLabs (in Spanish)",
      extras: "Examples",
      cvTitle: "My CV",
      cvSub: "View it here, listen to it or get the PDF",
      cvPdf: "Open PDF",
      cvListen: "Listen to the CV",
      cvAlt: "Santiago Llaguno's CV in English",
      zoom: "CV size",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      demoOleada: "Sales room with a voice concierge · Oleada Los Cabos",
      filmTitle: "Oleada brand film, narrated with ElevenLabs v4",
      filmSub: "An 88-second video",
      demoDive: "Voice shopping agent for dive trips",
      demoTrainer: "Voice sales trainer",
      demoHere: "Demo with its own voice agent; opens right here",
      poemBy: "Santiago Llaguno, set to music with ElevenLabs. In Spanish.",
      listen: "Listen",
      pause: "Pause",
      close: "Close",
      privacy: "The conversation uses your microphone, is processed by ElevenLabs and kept for 30 days. Only if you ask, my agent passes me your name and email.",
      photoAlt: "Santiago Llaguno smiling in front of the Arch of Cabo San Lucas",
      title: "Santiago Llaguno",
      back: {
        oleada_sales_room: "I'm back. What did you think of the Oleada sales room?",
        film: "Still here. What did you think of the video?",
        dive_commerce_agent: "I'm back. What did you think of the dive-trip agent?",
        sales_trainer: "I'm back. How did it go with the sales trainer?",
        poem: "Still here. What did you think of the ode?",
        cv: "Still here. Want me to go deeper into any part of his background?",
        cut: "I'm back, picking up where we left off. What else would you like to know about Santiago?",
        again: "Hi again. What else would you like to know about Santiago?",
      },
      why: {
        oleada_sales_room: "The call was paused while the visitor tried the Oleada sales room, which has its own voice concierge; they've closed it now.",
        film: "The call was paused while the visitor watched the Oleada brand film.",
        dive_commerce_agent: "The call was paused while the visitor tried the dive-trip shopping agent demo, which has its own voice agent; they've closed it now.",
        sales_trainer: "The call was paused while the visitor tried the sales trainer demo, which has its own voice agent; they've closed it now.",
        poem: "The call was paused while the visitor listened to the ode to the hammer.",
        cv: "The call was paused while the visitor listened to the narration of Santiago's CV.",
        cut: "The previous call dropped on its own.",
        again: "The visitor hung up and called back.",
      },
      context: "Context, don't read this aloud: this call continues an earlier one with the same visitor. {why} You've already introduced yourself: don't introduce yourself again, don't repeat what you already covered, and don't ask again for details they already gave. The last part of the conversation:",
      who: { user: "Visitor", ai: "Agent" },
      mail: "[email they already gave]",
    },
  };

  const $ = (s) => document.querySelector(s);
  const stage = $(".stage");
  const callBtn = $("#call");
  const callLabel = $("#call-label");
  const statusEl = $("#status");
  const playBtn = $("#play");
  const playLabel = $("#play-label");
  const cvPlay = $("#cv-play");
  const cvPlayLabel = $("#cv-play-label");
  const poemDialog = $("#poem-dialog");
  const cvDialog = $("#cv-dialog");
  const demoDialog = $("#demo-dialog");
  const demoFrame = $("#demo-frame");
  const filmDialog = $("#film-dialog");
  const filmVideo = $("#film-video");
  const poemAudio = $("#poem-audio");
  const cvAudio = $("#cv-audio");
  const canvas = $(".horizon");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = pickLang();
  let conversation = null;
  let callState = "idle"; // idle | connecting | live | paused
  let mode = "listening";
  let seq = 0; // sesión vigente; lo que llegue de una sesión anterior se ignora
  let transcript = []; // lo hablado en esta página, para retomar con contexto
  let lastEnd = null; // ended | cut
  let paused = null; // { reason } mientras la llamada espera a que termine un demo o un audio
  let pendingPause = null;
  let pauseTimer = 0;
  let demoKey = null;
  let keepPaused = false;
  let cvZoom = 1;

  function pickLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "es" || q === "en") return q;
    return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  }

  function t(key) { return T[lang][key]; }

  function render() {
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll("[data-demo]").forEach((a) => { a.href = DEMOS[a.dataset.demo][lang]; });
    const L = lang.toUpperCase();
    $("#cv-thumb").src = `cv/thumb-${lang}.jpg?v=${CV_VERSION}`;
    $("#cv-page").src = `cv/cv-${lang}.jpg?v=${CV_VERSION}`;
    $("#cv-download").href = `cv/Santiago_Llaguno_CV_${L}.pdf?v=${CV_VERSION}`;
    const narration = `cv/cv-audio-${lang}.mp3?v=${CV_VERSION}`;
    if (cvAudio.getAttribute("src") !== narration) { cvAudio.pause(); cvAudio.setAttribute("src", narration); }
    syncPlay(poemAudio);
    syncPlay(cvAudio);
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderCall();
  }

  function renderCall() {
    const ready = Boolean(AGENTS[lang]);
    callBtn.disabled = !ready || callState === "connecting";
    callLabel.textContent = callState === "live" ? t("end") : paused || transcript.length ? t("resume") : t("talk");
    stage.dataset.call = callState;
    document.querySelectorAll(".call-note").forEach((n) => {
      const on = paused && (paused.reason === n.dataset.note || (n.dataset.note === "demo" && DEMOS[paused.reason]));
      n.hidden = !on;
      if (on) n.textContent = t(n.dataset.note === "demo" ? "noteDemo" : "noteAudio");
    });
    if (!ready) statusEl.textContent = t("notReady");
    else if (callState === "idle" && !statusEl.dataset.sticky) statusEl.textContent = t("talkHint");
  }

  function setStatus(key, sticky = false) {
    statusEl.textContent = t(key);
    if (sticky) statusEl.dataset.sticky = "1"; else delete statusEl.dataset.sticky;
  }

  // ---------- Idioma ----------
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", async () => {
      if (b.dataset.lang === lang) return;
      await hangUp();
      transcript = [];
      lastEnd = null;
      lang = b.dataset.lang;
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
      delete statusEl.dataset.sticky;
      render();
    })
  );

  // ---------- Llamada ----------
  callBtn.addEventListener("click", () => {
    if (callState === "live") return hangUp(true);
    if (callState === "paused") {
      const { reason } = paused;
      paused = null;
      return startCall(reason);
    }
    startCall();
  });

  async function startCall(reason) {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setStatus("micDenied", true);
      return;
    }
    const sid = ++seq;
    const resuming = transcript.length > 0;
    const why = reason || (lastEnd === "cut" ? "cut" : "again");
    callState = "connecting";
    mode = "listening";
    setStatus("connecting");
    renderCall();
    const options = {
      agentId: AGENTS[lang],
      connectionType: "webrtc",
      clientTools: { open_demo: openDemo },
      onConnect: () => { if (sid !== seq) return; callState = "live"; setStatus("listening"); renderCall(); },
      onDisconnect: (details) => { if (sid === seq) sessionEnded(details); },
      onError: () => { if (sid === seq) setStatus("failed", true); },
      onModeChange: (m) => {
        if (sid !== seq) return;
        mode = m.mode;
        if (callState === "live") setStatus(mode === "speaking" ? "speaking" : "listening");
      },
      onMessage: (m) => { if (sid === seq) remember(m); },
    };
    // Al retomar, el agente no se vuelve a presentar: abre con una frase de regreso y recibe lo ya hablado.
    if (resuming) options.overrides = { agent: { firstMessage: T[lang].back[why] || T[lang].back.again } };
    try {
      const c = await window.ElevenLabsClient.Conversation.startSession(options);
      if (sid !== seq) { c.endSession().catch(() => {}); return; }
      conversation = c;
      if (resuming) { try { c.sendContextualUpdate(contextFor(why)); } catch {} }
    } catch {
      if (sid !== seq) return;
      conversation = null;
      callState = "idle";
      setStatus("failed", true);
      renderCall();
    }
  }

  function sessionEnded(details) {
    conversation = null;
    clearPendingPause();
    const byAgent = details?.reason === "agent" && details?.context?.type === "end_call";
    lastEnd = details?.reason === "user" || byAgent ? "ended" : "cut";
    callState = "idle";
    setStatus(lastEnd, true);
    renderCall();
  }

  async function hangUp(byUser = false) {
    const c = conversation;
    seq++;
    conversation = null;
    clearPendingPause();
    paused = null;
    callState = "idle";
    if (byUser) { lastEnd = "ended"; setStatus("ended", true); }
    renderCall();
    if (c) { try { await c.endSession(); } catch {} }
  }

  // ---------- Pausa y regreso ----------
  // Mientras suena otra voz (el agente de un demo, la oda o la narración del CV) la llamada se corta
  // y al terminar se abre otra que retoma con contexto; así los dos agentes no se oyen entre sí.
  async function pauseCall(reason, statusKey) {
    clearPendingPause();
    if (callState !== "live" && callState !== "connecting") return;
    const c = conversation;
    seq++;
    conversation = null;
    paused = { reason };
    callState = "paused";
    setStatus(statusKey || (DEMOS[reason] ? "pausedDemo" : "pausedAudio"), true);
    renderCall();
    if (c) { try { await c.endSession(); } catch {} }
  }

  // Cuando el agente abre un demo, deja que termine su frase y luego pausa. La herramienta no
  // responde antes de pausar: así el agente no genera otra respuesta encima del demo.
  let pauseDone = null;
  function requestPause(reason, done) {
    if (callState !== "live" || !conversation) { done?.("The demo is open in a window over this page."); return; }
    clearPendingPause();
    pendingPause = reason;
    pauseDone = done || null;
    try { conversation.setMicMuted(true); } catch {}
    const started = Date.now();
    let quietSince = 0;
    pauseTimer = setInterval(() => {
      if (mode === "speaking") quietSince = 0;
      else if (!quietSince) quietSince = Date.now();
      const settled = quietSince && Date.now() - quietSince > 700;
      if (settled || Date.now() - started > 8000) {
        pauseDone = null; // la sesión termina; la herramienta ya no necesita respuesta
        pauseCall(pendingPause);
      }
    }, 150);
  }

  function clearPendingPause() {
    clearInterval(pauseTimer);
    pendingPause = null;
  }

  // Si la pausa no llega a ocurrir, la herramienta responde y la llamada sigue.
  function cancelPendingPause() {
    const done = pauseDone;
    pauseDone = null;
    clearPendingPause();
    try { conversation?.setMicMuted(false); } catch {}
    done?.("The visitor closed the demo window right away, so the call continues. Carry on with the conversation.");
  }

  function resumeAfter(reason) {
    if (!paused || paused.reason !== reason) return;
    paused = null;
    startCall(reason);
  }

  function remember({ source, message } = {}) {
    const text = redact(String(message || "").trim());
    if (!text) return;
    transcript.push({ who: source === "user" ? "user" : "ai", text });
    if (transcript.length > 40) transcript = transcript.slice(-40);
  }

  // El correo del visitante no viaja otra vez en el contexto; basta con saber que ya lo dio.
  function redact(s) {
    const tag = t("mail");
    return s
      .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g, tag)
      .replace(/\S+\s+arroba\s+\S+(\s+punto\s+\S+)+/gi, tag)
      .replace(/\S+\s+at\s+\S+(\s+dot\s+\S+)+/gi, tag);
  }

  function contextFor(why) {
    const lines = [];
    let size = 0;
    for (let i = transcript.length - 1; i >= 0 && size < 2400; i--) {
      const line = `${T[lang].who[transcript[i].who]}: ${transcript[i].text}`;
      lines.unshift(line);
      size += line.length;
    }
    return `${t("context").replace("{why}", T[lang].why[why] || T[lang].why.again)}\n${lines.join("\n")}`;
  }

  // ---------- Herramienta del agente ----------
  function openDemo({ demo } = {}) {
    if (demo === "hammer_poem") {
      openPoem();
      return "The poem window is open over the page with the text. The music plays only when the visitor presses Listen; while it plays this call pauses and then resumes by itself. Tell them that in one short sentence and stop talking.";
    }
    if (demo === "oleada_film") {
      openFilm();
      return "The Oleada brand film is open in a window over the page. It plays when the visitor presses play; while it plays this call pauses and then resumes by itself. Tell them that in one short sentence and stop talking.";
    }
    if (demo === "cv") {
      openCv();
      return "Santiago's CV is open in a window over the page, with zoom, an Open PDF button and a Listen button that reads the whole CV aloud (this call pauses while it plays). Tell them in one short sentence and let them read.";
    }
    if (!DEMOS[demo]) return "Unknown demo.";
    showDemo(demo);
    return new Promise((resolve) => requestPause(demo, resolve));
  }

  // ---------- Ventanas ----------
  function closeDialogs(except) {
    [poemDialog, cvDialog, demoDialog, filmDialog].forEach((d) => { if (d !== except && d.open) d.close(); });
  }

  function showDemo(key) {
    closeDialogs(demoDialog);
    demoKey = key;
    const url = DEMOS[key][lang];
    $("#demo-title").textContent = t(DEMO_TITLE[key]);
    $("#demo-newtab").href = url;
    demoFrame.title = t(DEMO_TITLE[key]);
    demoFrame.src = url;
    if (!demoDialog.open) demoDialog.showModal();
    renderCall();
  }

  document.querySelectorAll("[data-demo]").forEach((a) =>
    a.addEventListener("click", (e) => {
      const key = a.dataset.demo;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        // Pestaña nueva a propósito: la llamada queda en pausa hasta que la retome.
        if (callState === "live") pauseCall(key, "pausedIdle");
        return;
      }
      e.preventDefault();
      if (callState === "live") pauseCall(key);
      showDemo(key);
    })
  );

  $("#close-demo").addEventListener("click", () => demoDialog.close());
  $("#demo-newtab").addEventListener("click", () => { keepPaused = true; demoDialog.close(); });
  demoDialog.addEventListener("close", () => {
    demoFrame.src = "about:blank"; // corta el agente del demo antes de retomar la llamada
    const key = demoKey;
    demoKey = null;
    if (keepPaused) {
      // Se fue a probarlo en otra pestaña: la llamada queda en pausa hasta que la retome.
      keepPaused = false;
      if (pendingPause) pauseCall(key, "pausedIdle");
      else if (paused) { setStatus("pausedIdle", true); renderCall(); }
      return;
    }
    if (pendingPause === key) {
      // Lo cerró antes de que la pausa ocurriera: la llamada sigue como estaba.
      cancelPendingPause();
      return;
    }
    resumeAfter(key);
  });

  // Poema
  function openPoem() {
    closeDialogs(poemDialog);
    if (!poemDialog.open) poemDialog.showModal();
  }
  $("#open-poem").addEventListener("click", openPoem);
  $("#close-poem").addEventListener("click", () => poemDialog.close());
  poemDialog.addEventListener("click", (e) => { if (e.target === poemDialog) poemDialog.close(); });
  poemDialog.addEventListener("close", () => { poemAudio.pause(); resumeAfter("poem"); });
  playBtn.addEventListener("click", () => (poemAudio.paused ? playMedia(poemAudio, "poem") : poemAudio.pause()));
  poemAudio.addEventListener("ended", () => resumeAfter("poem"));

  // Brand film de Oleada: mientras suena, la llamada se pausa como con la oda.
  function openFilm() {
    closeDialogs(filmDialog);
    if (!filmDialog.open) filmDialog.showModal();
  }
  $("#open-film").addEventListener("click", openFilm);
  $("#close-film").addEventListener("click", () => filmDialog.close());
  filmDialog.addEventListener("click", (e) => { if (e.target === filmDialog) filmDialog.close(); });
  filmDialog.addEventListener("close", () => { filmVideo.pause(); resumeAfter("film"); });
  filmVideo.addEventListener("play", () => {
    if (callState === "live" || callState === "connecting") pauseCall("film");
    [poemAudio, cvAudio].forEach((a) => a.pause());
  });
  filmVideo.addEventListener("ended", () => resumeAfter("film"));

  // CV
  function openCv() {
    closeDialogs(cvDialog);
    if (!cvDialog.open) cvDialog.showModal();
  }
  $("#open-cv").addEventListener("click", openCv);
  $("#close-cv").addEventListener("click", () => cvDialog.close());
  cvDialog.addEventListener("click", (e) => { if (e.target === cvDialog) cvDialog.close(); });
  cvDialog.addEventListener("close", () => { cvAudio.pause(); resumeAfter("cv"); });
  cvPlay.addEventListener("click", () => (cvAudio.paused ? playMedia(cvAudio, "cv") : cvAudio.pause()));
  cvAudio.addEventListener("ended", () => resumeAfter("cv"));

  const ZOOMS = [1, 1.5, 2, 2.5];
  function setZoom(i) {
    cvZoom = Math.max(0, Math.min(ZOOMS.length - 1, i));
    cvDialog.style.setProperty("--cv-zoom", ZOOMS[cvZoom]);
    $("#cv-zoom-out").disabled = cvZoom === 0;
    $("#cv-zoom-in").disabled = cvZoom === ZOOMS.length - 1;
  }
  setZoom(0);
  $("#cv-zoom-in").addEventListener("click", () => setZoom(cvZoom + 1));
  $("#cv-zoom-out").addEventListener("click", () => setZoom(cvZoom - 1));

  // Audio de la oda y de la narración del CV
  function syncPlay(el) {
    const poem = el === poemAudio;
    (poem ? playBtn : cvPlay).setAttribute("aria-pressed", String(!el.paused));
    (poem ? playLabel : cvPlayLabel).textContent = el.paused ? t(poem ? "listen" : "cvListen") : t("pause");
  }
  [poemAudio, cvAudio].forEach((el) => ["play", "pause", "ended"].forEach((e) => el.addEventListener(e, () => syncPlay(el))));

  let audioCtx = null;
  let analyser = null;
  let freq = null;
  const hooked = new WeakSet();

  function playMedia(el, reason) {
    if (callState === "live" || callState === "connecting") pauseCall(reason);
    [poemAudio, cvAudio, filmVideo].forEach((a) => { if (a !== el) a.pause(); });
    hookAnalyser(el);
    el.play().catch(() => {});
  }

  function hookAnalyser(el) {
    try {
      if (!audioCtx) {
        audioCtx = new AudioContext();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        freq = new Uint8Array(analyser.frequencyBinCount);
        analyser.connect(audioCtx.destination);
      }
      if (!hooked.has(el)) {
        audioCtx.createMediaElementSource(el).connect(analyser);
        hooked.add(el);
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
    } catch { analyser = null; }
  }

  // ---------- Horizonte ----------
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, dpr = 1, split = 0;
  let level = 0;

  // Altura del agua en la foto (base de las rocas del Arco), como fracción de la imagen original.
  const WATERLINE = 0.54;
  const IMG = 2000; // la foto es cuadrada
  const POS_Y = 0.30; // igual que object-position en style.css

  function layout() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const desktop = matchMedia("(min-width: 861px)").matches;
    if (desktop) {
      const r = $(".portrait").getBoundingClientRect();
      const scale = Math.max(r.width / IMG, r.height / IMG);
      const drawnH = IMG * scale;
      const offsetY = (r.height - drawnH) * POS_Y;
      const h = Math.round(offsetY + WATERLINE * drawnH);
      stage.style.setProperty("--h", h + "px");
      split = r.width;
    } else {
      stage.style.removeProperty("--h");
      split = 0;
    }
    const c = canvas.getBoundingClientRect();
    W = c.width; H = c.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function targetLevel() {
    const playing = [poemAudio, cvAudio].find((a) => !a.paused);
    if (playing && analyser) {
      analyser.getByteFrequencyData(freq);
      let s = 0;
      for (let i = 2; i < 48; i++) s += freq[i];
      return { v: Math.min(1, s / (46 * 190)), tone: playing === poemAudio ? "stone" : "sea" };
    }
    if (conversation && callState === "live") {
      try {
        const v = mode === "speaking" ? conversation.getOutputVolume() : conversation.getInputVolume();
        return { v: Math.min(1, v * 1.6), tone: mode === "speaking" ? "sea" : "ink" };
      } catch {}
    }
    return { v: 0, tone: "sea" };
  }

  const COLORS = { sea: "45,94,136", ink: "22,39,58", stone: "179,122,72" };
  let tone = "sea";

  function draw(time) {
    const { v, tone: nextTone } = targetLevel();
    level += (v - level) * 0.18;
    if (v > 0.02) tone = nextTone;
    const ts = reduceMotion ? 0 : time / 1000;
    const mid = H / 2;
    const idle = reduceMotion ? 0 : 1.6;
    const amp = idle + level * (H * 0.38);

    ctx.clearRect(0, 0, W, H);
    const y = (x) => {
      const u = (x - split) / (W - split);
      const env = Math.pow(Math.sin(Math.PI * u), 0.7); // quieta en las orillas: nace del horizonte de la foto
      return mid
        + Math.sin(u * 9.0 + ts * 0.9) * amp * 0.55 * env
        + Math.sin(u * 23.0 - ts * 1.7) * amp * 0.30 * env
        + Math.sin(u * 51.0 + ts * 2.9) * amp * 0.15 * env * level;
    };

    const stroke = (x0, x1, color) => {
      ctx.beginPath();
      for (let x = x0; x <= x1; x += 2) {
        const yy = y(x);
        x === x0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.25 + level * 1.5;
      ctx.stroke();
    };

    stroke(split, W, `rgba(${COLORS[tone]},0.9)`);
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);

  render();
  layout();
  requestAnimationFrame(draw);
})();
