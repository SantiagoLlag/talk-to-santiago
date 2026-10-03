# Talk to Santiago · [ES] Proyecto: la sala de ventas con voz de Oleada y su brand film
Idioma del documento: español
Versión: 1 (2026-10-02)
Corte de fuentes: 2026-10-02
Alcance: la sala de ventas virtual con concierge de voz que Santiago Llaguno construyó para Pacific Villas at Oleada Los Cabos y el brand film de Oleada que narró con ElevenLabs v4, contados a nivel técnico. Es el único proyecto de un desarrollo inmobiliario que se nombra.

## ¿Qué es la sala de ventas de Oleada? Una sala virtual con concierge de voz
En su trabajo en Los Cabos Sotheby's International Realty, Santiago Llaguno construyó una sala de ventas virtual con concierge de voz para Pacific Villas at Oleada Los Cabos. Oleada es una comunidad frente al Pacífico en Cabo San Lucas, con el primer campo de golf de Ernie Els en Latinoamérica y residencias diseñadas por LEGORRETA. La sala de ventas de Oleada se puede abrir y probar desde esta misma página.
Fuente: ledger P12

## ¿Cómo funciona la concierge de voz de Oleada? La voz mueve la pantalla
La concierge de voz de la sala de Oleada habla español e inglés: son dos agentes de ElevenLabs, uno por idioma, con el modelo de voz eleven_v4_turbo. Mientras conversa, la concierge mueve la pantalla con herramientas: abre los lotes, el campo de golf, los renders, las plantas de las casas y un comparador de plantas. La regla de diseño es que el usuario gana: si la persona tocó la pantalla en los últimos 8 segundos, la concierge no le cambia la vista y le ofrece un botón para ver lo que le menciona.
Fuente: ledger P12

## ¿Qué cuidados tiene la sala de Oleada? Cifras de un solo archivo y una guardia
En la sala de ventas de Oleada, todas las cifras salen de un solo archivo de datos; nada está escrito a mano en la página. Los renders llevan la marca de render ilustrativo y los precios por lote que no están validados se marcan como por validar. La concierge de Oleada responde con Claude a través de un proxy propio que Santiago construyó como guardia: limita cada turno a 60 palabras y a una sola pregunta, y pega el aviso de vigencia al primer precio que menciona.
Fuente: ledger P12

## ¿Qué recibe el equipo de ventas de la sala de Oleada? Un brief interno
Al terminar una visita a la sala de ventas de Oleada, la sala arma un brief interno para el equipo de ventas con lo que la persona vio y preguntó. Si la persona no quiere usar el micrófono, la sala ofrece conversar por texto o hacer el recorrido tocando la pantalla.
Fuente: ledger P12

## ¿Cómo probó Santiago la sala de Oleada? Pruebas automáticas y jueces
Santiago Llaguno probó la sala de ventas de Oleada con tres juegos de pruebas automáticas del proxy de la concierge y con una suite de conversaciones que califican jueces automáticos, por ejemplo uno que revisa las reglas duras y otro que revisa que la concierge consulte en vez de recitar un guion.
Fuente: ledger P12

## ¿Qué es el brand film de Oleada? Un video narrado con ElevenLabs v4
Santiago Llaguno produjo la narración del brand film de Pacific Villas at Oleada Los Cabos con ElevenLabs v4. El brand film de Oleada dura 88 segundos y está en inglés. Santiago escribió el guion de 136 palabras sobre los cortes reales del video, que detectó con ffmpeg, y le marcó a cada bloque de la narración una emoción: del asombro del inicio a la invitación del cierre. El video de Oleada se puede ver desde esta misma página.
Fuente: ledger P12b
