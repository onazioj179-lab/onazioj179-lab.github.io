/* Single source of truth for project content — used by index.html (modal) and case.html (full page). */
window.PROJECT_ORDER = ['dex','magnify','pathmap','aurum','sable','hamma'];

window.PROJECTS = {
  dex: {
    idx:'01', title:'DEX', role:'Cross-platform desktop control hub',
    tag:'Desktop / Native', status:'Shipped',
    summary:'A personal control hub built as a semi-OS — 20+ inner apps, a gaming platform, file transfer and automation, on a Rust native core.',
    body:[
      'DEX is a personal control hub built as a semi-OS: 20+ inner apps, a gaming platform, file transfer, and automation, sitting on a Rust native core that replaces JavaScript for performance-critical systems.',
      'It ships with the Vinx video editor and a cloud-backed update distribution model. Phantom Mode and Xenon Reallocation give fine-grained control over how the system uses resources.'
    ],
    features:['Rust Core','Electron','20+ Inner Apps','Vinx Editor','Phantom Mode','Xenon Reallocation'],
    access:{ label:'Access', value:'Private project — a live walkthrough is available on request.' },
    link:null
  },
  magnify: {
    idx:'02', title:'Magnify', role:'Live System Monitor · Privacy Scanner · Workspace',
    tag:'Desktop / Security', status:'Available',
    summary:'A live system monitor, privacy scanner, and visual workspace for understanding your digital environment — all from real, on-device data.',
    body:[
      'Magnify watches your system live: real CPU, memory, network and running programs on one screen, in plain language. It scores every process and flags spyware, stalkerware, and connections to known bad servers.',
      'It checks your privacy — trackers, fingerprinting, and risky permissions (camera, microphone, location) — scanned right in the app, with clear do-this-next guidance.',
      'The Workspace maps how things connect: open any folder and Magnify turns it into a living map of how your files, documents, media and configs relate. See what changed, what matters, and what a change would affect — search everything, compare folders, and pin findings into saved investigations.',
      'No fake data: everything you see is real and from your own device. If a signal isn’t available, Magnify says so instead of guessing.'
    ],
    features:['System Monitor','Privacy Scanner','Process Scoring','Spyware / Stalkerware Detection','Workspace Mapping','100% On-Device'],
    access:{ label:'Download', value:'Magnify 1.9.6 for Windows (x64) — available now. Created by Onazi Treasure OJ · © 2026 · Proprietary.' },
    gallery:[
      { src:'assets/magnify/overview.png',    label:'Overview — live system dashboard, scan & report' },
      { src:'assets/magnify/observatory.png', label:'Observatory — environment & knowledge health' },
      { src:'assets/magnify/privacy.png',     label:'Privacy — risk score, permissions & trackers' },
      { src:'assets/magnify/priorities.png',  label:'Priorities — findings graph & impact ranking' }
    ],
    link:{ href:'https://github.com/onazioj179-lab/TOOLS-REPO/releases/download/magnify-v1.9.6/Magnify_1.9.6_x64-setup.exe', label:'Download Magnify 1.9.6 · Windows x64' }
  },
  pathmap: {
    idx:'03', title:'PathMap', role:'Encrypted real-time location for private teams',
    tag:'Web / Security', status:'Commercial',
    summary:'A proprietary commercial location-tracking platform where the server only ever sees ciphertext — end-to-end encrypted by design.',
    body:[
      'PathMap is a proprietary commercial location-tracking platform for operations teams, private fleets, and regulated deployments.',
      'Device locations are end-to-end encrypted so the server only ever sees ciphertext — AES-256-GCM with X25519 key exchange and rotating session keys. Offline routing runs on A* / Dijkstra, with geofencing and a Ghost Mode for privacy.'
    ],
    features:['TypeScript','Python','End-to-End Encryption','Offline Routing (A* / Dijkstra)','Geofencing','Ghost Mode'],
    access:{ label:'Repository', value:'github.com/onazioj179-lab/pathmap' },
    link:{ href:'https://github.com/onazioj179-lab/pathmap', label:'github / pathmap' }
  },
  aurum: {
    idx:'04', title:'Aurum', role:'Multiband saturation & mastering plugin',
    tag:'Audio / Plugin', status:'Available',
    summary:'A mastering-grade multiband saturator: drive four bands independently through tape, tube and transformer models, with one-dial character glue, full metering, and real source separation.',
    body:[
      'Aurum is a multiband saturation and mastering plugin. Drive any of four bands — LOW, LOW-MID, HI-MID, HIGH — independently through TAPE, TUBE or TRANSFORMER models. It stays transparent until you turn a knob.',
      'Character is one dial for compression and makeup glue. Every band has voicing, solo and mute; plus high-pass / low-pass, stereo imaging (Mid / Side / Stereo / M+S), linear bypass, and output trim.',
      'Metering covers short and integrated LUFS, peak and RMS, a loudness-target guide (Club / Stream / Apple / EBU), and a frequency-coloured spectrum. Key and BPM are estimated automatically when you load a track. Presets — factory and your own — save to disk and import/export as .json, with undo/redo and a recallable master history.',
      'Export masters to WAV (16 / 24 / 32-bit, optional normalise), band stems (SUB / LOW / MID / HIGH), or separate into KICK / DRUMS / BASS / MELODY. Separation uses real HPSS — harmonic/percussive source separation by spectrogram median-filtering — pulling drums apart from melodic, tonal content, then splitting each by frequency.'
    ],
    features:['4-Band Saturation','Tape / Tube / Transformer','Character Glue','LUFS Metering','HPSS Stem Separation','Key + BPM Detect','Mid / Side Imaging','WAV / Stem Export'],
    access:{ label:'Download', value:'Aurum 1.5.8 for Windows (x64) — available now. Created by Onazi Treasure OJ · © 2026 · Proprietary.' },
    gallery:[
      { src:'assets/aurum/aurum.png',  label:'Aurum — four-band saturation, character & mastering metering' },
      { src:'assets/aurum/aurum2.png', label:'Aurum — Stems view: live waveform, analog drive & loudness targeting' }
    ],
    link:{ href:'https://github.com/onazioj179-lab/TOOLS-REPO/releases/download/aurum-v1.5.8/AURUM-Setup-1.5.8-x64.exe', label:'Download Aurum 1.5.8 · Windows x64' }
  },
  hamma: {
    idx:'06', title:'HAMMA', role:'Local file compression & archive workspace',
    tag:'Web / File Tools', status:'Open Source',
    summary:'A free local workspace for file compression, archive extraction, and media conversion, with SPK restoration and searchable history.',
    body:[
      'HAMMA brings compression, extraction, conversion, and downloads into one local file workspace. Add files or folders, choose an archive format, and track each operation through a single searchable history.',
      'Standard formats — ZIP, TAR, GZIP, BZIP2 and XZ — run as background jobs on a local processor with verified downloads, resumable uploads, and retry / cancel controls. SPK, its own archive format, compresses and restores right in the browser, and both engines share the same Add Files / Add Folder flow.',
      'An Overview page shows measured compression savings across processor jobs and browser SPK records, while History keeps a 500-record log with colored operation tags and unique IDs. Optional FFmpeg support adds media conversion, and SHANTE CORE, the native engine, adds verified Zstandard.',
      'Files stay on your device. Free local accounts keep passwords hashed with scrypt and sessions in HttpOnly cookies, and no file contents are sent to an AI service or third party. On Windows, double-click Start HAMMA.cmd to build, launch and open it; phones on the same Wi-Fi can connect through the local network.',
      'Built on TypeScript, Rust and Python. This is a self-hosted workspace rather than a hosted cloud service. Created by Onazi Treasure OJ and released under the MIT license.'
    ],
    features:['Local Processing','ZIP / TAR / GZIP / BZIP2 / XZ','SPK Restoration','Media Conversion','Resumable Uploads','Searchable History','Local Accounts','MIT Licensed'],
    access:{ label:'Source Code', value:'Free and open source under the MIT license. Requires Node.js 22.12+ and Python 3.11+. Clone it, run npm ci and npm run start:local, then open http://127.0.0.1:5010 — full steps are in the README.' },
    link:{ href:'https://github.com/onazioj179-lab/Hamma-', label:'View HAMMA on GitHub' }
  },
  sable: {
    idx:'05', title:'Sable', role:'Analog-style software synthesizer',
    tag:'Audio / Synth', status:'Available',
    summary:'A powerful analog-style synthesizer that runs on your computer — the deep, warm sound of a classic hardware synth, without the hardware.',
    body:[
      'Sable is a powerful analog-style synthesizer that runs right on your computer. Internal complexity, surface-level simplicity — it brings the deep, warm sound of a classic hardware synth without the hardware. Big fat basses, soaring leads, lush pads and evolving textures, wrapped in a clean black-and-white interface that stays out of your way.',
      'Play instantly with your computer keyboard, the on-screen piano, or any MIDI keyboard. Shape your sound with two main oscillators, a sub oscillator, three filter characters (warm, bright and open), four envelopes, three LFOs, and a 32-slot modulation system to connect anything to anything.',
      'Add movement with a built-in arpeggiator and step sequencer that turn a single held chord into a full pattern. Polish on the master output with drive, chorus, delay, reverb and a bitcrusher — grit, space and shine. Save your work across 64 ready-made sounds plus unlimited slots of your own, and share sounds as files.',
      'Controls are grouped into simple tabs — Sound, Filter, Env, LFO · Mod, FX, Arp · Seq, and Presets — so you only ever see what you need.'
    ],
    features:['2 Oscillators + Sub','3 Filter Characters','4 Envelopes · 3 LFOs','32-Slot Mod Matrix','Arp + Step Sequencer','Drive / Chorus / Delay / Reverb / Bitcrush','64 Presets + Unlimited','MIDI & On-Screen Keys'],
    access:{ label:'Download', value:'Sable 1.0.5 for Windows (x64) — available now. Created by Onazi Treasure OJ · © 2026 · Proprietary.' },
    gallery:[
      { src:'assets/sable/sable.png', label:'Sable — OSC panel: dual oscillators, sub osc & analog controls' }
    ],
    link:{ href:'https://github.com/onazioj179-lab/TOOLS-REPO/releases/download/sable-v1.0.5/SABLE_1.0.5_x64-setup.exe', label:'Download Sable 1.0.5 · Windows x64' }
  }
};
