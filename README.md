# Form Studio — iOS Bodyweight Form Coach

**Form Studio** is a native **iOS** app that teaches bodyweight exercise form with a live **3D Mixamo character** rendered in **Three.js**. Users pick a move, read coaching copy, walk through a **video-style guided form tour** (one cue at a time on the same animated model), then watch a looping **live demo** with Pause / Stop / Options.

The 3D scene runs inside a **SwiftUI `WKWebView`** shell that loads local HTML/CSS/JS from the app bundle via a custom URL scheme (`appcontent://`).

---

## What this project does

1. **Exercise library** — six bodyweight moves with level, muscles, balance cues, steps, and common mistakes  
2. **Instructions sheet** — glassmorphism UI with orange brand accent (`#F38002`)  
3. **Countdown** — 3 → 2 → 1 → GO  
4. **Guided form tour** — same Mixamo clip scrubbed between cue times so limbs *animate* into each coaching pose (not static image jumps); tiny bone pins + captions in a bottom dock  
5. **Live workout loop** — full looping animation, rotating coaching cues, speed control, skeleton overlay toggle  
6. **Camera** — OrbitControls for free 360° viewing; after the user drags, the camera **stays on their angle** (no auto-snap)  
7. **Layout** — split stage: 3D body in the top ~68%, UI dock flush to the bottom so the character is not covered  

---

## Exercises included

| Exercise       | Focus                         |
|----------------|-------------------------------|
| Push-Ups       | Chest, shoulders, triceps, core |
| Air Squats     | Legs, hips, posture           |
| Jumping Jacks  | Cardio, coordination           |
| Plank Hold     | Core stability                |
| Sit-Ups        | Abs, controlled flexion       |
| Burpees        | Full-body conditioning        |

Animations are **Mixamo FBX** motion clips, played on the **X_Bot** Mixamo character (`scale = 0.01`) via Three.js `AnimationMixer`.

---

## Tech stack (complete)

### Native iOS (Swift)

| Piece | Role |
|--------|------|
| **Swift 5** | App language |
| **SwiftUI** | App shell, `ContentView`, hosting the web view |
| **UIKit / WebKit** | `WKWebView` bridge (`UIViewRepresentable`) |
| **Custom `WKURLSchemeHandler`** | Serves `WebContent/` from the bundle as `appcontent://local/...` (ES modules + FBX work offline) |
| **Xcode / xcodeproj** | Build target; `project.yml` documents XcodeGen-style layout |
| **iOS 16+** | Deployment target |

Key Swift files:

- `ThreeJSAdditive/ThreeJSAdditiveApp.swift` — app entry  
- `ThreeJSAdditive/ContentView.swift` — root UI  
- `ThreeJSAdditive/ThreeJSWebView.swift` — WKWebView + local scheme handler  

### Web / 3D (inside WKWebView)

| Piece | Role |
|--------|------|
| **HTML5** | `WebContent/index.html` — screens (library, instruct, countdown, guide, session) |
| **CSS3** | `ui.css`, `main.css` — glassmorphism, split-screen stage, safe areas |
| **JavaScript (ES modules)** | App logic: flow, mixer, framing, guide scrub, UI wiring |
| **Three.js (r152-era module build)** | Scene, camera, lights, `AnimationMixer`, skeletal mesh |
| **OrbitControls** | Touch orbit / zoom of the character |
| **FBXLoader** | Loads Mixamo character + exercise clips |
| **CSS2DRenderer** | Tiny numbered pins on bones (labels stay in the dock) |
| **SkeletonHelper** | Optional bone overlay (“Skeleton” toggle) |

Key JS modules:

- `WebContent/app.js` — boot, screens, camera framing, guide seek/scrub, workout loop  
- `WebContent/exercises.js` — catalog, cues, guide timestamps (`t`), coaching copy  
- `WebContent/guide-data.js` — per-step views, bone markers, enrich guides  

### Assets & tooling

| Piece | Role |
|--------|------|
| **Mixamo FBX** | Character (`X_Bot.fbx`) + exercise clips under `WebContent/models/` |
| **GLB (optional)** | `models/gltf/Xbot.glb` kept for reference |
| **Glassmorphism reference** | Design reference image under `design/` |
| **XcodeGen-style `project.yml`** | Documents bundle id, iOS target, WebContent as resources |

### Languages & formats used

- **Swift** — native app shell  
- **JavaScript (ES2020 modules)** — Three.js app  
- **HTML** — document structure  
- **CSS** — layout, glass UI, animations  
- **JSON** — asset catalog metadata  
- **YAML** — `project.yml`  
- **FBX / GLB** — 3D character & animations  
- **Markdown** — this README  

---

## Architecture

```
┌─────────────────────────────────────────┐
│  SwiftUI App (ThreeJSAdditive)          │
│  └─ ThreeJSWebView (WKWebView)          │
│       └─ appcontent:// → WebContent/    │
│            ├─ index.html + ui.css       │
│            ├─ app.js (flow + mixer)     │
│            ├─ exercises.js / guide-data │
│            ├─ three.module.js + jsm/    │
│            └─ models/**/*.fbx           │
└─────────────────────────────────────────┘
```

**Why WKWebView + Three.js?**  
Three.js already has strong Mixamo/FBX and skeletal animation support. The iOS shell keeps a native installable app, offline bundle, and full-screen touch UX while the 3D engine stays in JS.

**Guide scrub (important):**  
Guide steps do **not** teleport between poses. The app seeks along the **same** exercise clip (forward/backward at a controlled speed) so the model’s limbs move into each cue—then holds—then advances. Live mode loops the clip with `LoopRepeat`.

---

## UI / UX notes

- Brand accent: **orange `#F38002`** (glass cards, CTAs, live cue text)  
- **Glassmorphism** panels (frosted white, soft borders, light pastel atmosphere)  
- Guide + Live: **top stage for the full body**, bottom dock for captions/controls  
- User can orbit freely; camera **does not snap back** after drag  
- Pause / Stop / Options (demo speed presets) on the live dock  

---

## Project layout

```
ThreeJSAdditive/
├── README.md
├── project.yml                 # Xcode project description
├── ThreeJSAdditive.xcodeproj/  # Open this in Xcode
├── ThreeJSAdditive/            # Swift sources + assets
│   ├── ThreeJSAdditiveApp.swift
│   ├── ContentView.swift
│   ├── ThreeJSWebView.swift
│   └── Assets.xcassets/
├── WebContent/                 # Bundled web + 3D runtime
│   ├── index.html
│   ├── app.js
│   ├── exercises.js
│   ├── guide-data.js
│   ├── ui.css / main.css
│   ├── build/three.module.js
│   ├── jsm/                    # OrbitControls, FBXLoader, CSS2D, etc.
│   └── models/
│       ├── character/          # X_Bot.fbx (primary)
│       ├── exercises/          # Push_Up, Air_Squat, …
│       └── gltf/               # optional Xbot.glb
└── design/                     # UI reference
```

---

## Requirements

- macOS with **Xcode 16+** (or recent Xcode that supports iOS 16)  
- iOS **16.0+** Simulator or device  
- Apple Developer team for device runs (Simulator works with signing tweaks / `CODE_SIGNING_ALLOWED=NO` for CI-style builds)

---

## Run locally

1. Open `ThreeJSAdditive.xcodeproj` in Xcode  
2. Select an iPhone simulator (e.g. iPhone 16 Pro) or a signed device  
3. Set your **Signing Team** if needed  
4. **Product → Run**  

The app loads `WebContent/index.html` through the custom scheme; no local web server is required.

---

## Build from CLI (optional)

```bash
xcodebuild \
  -project ThreeJSAdditive.xcodeproj \
  -scheme ThreeJSAdditive \
  -destination 'platform=iOS Simulator,name=iPhone 16 Pro' \
  -configuration Debug \
  build \
  CODE_SIGNING_ALLOWED=NO
```

---

## Privacy

This repository is **private**. Source, Mixamo assets, and coaching copy are for the owner’s use unless they choose to open it later.

---

## Credits / attribution

- **Three.js** — 3D engine (MIT)  
- **Mixamo** — character (`X_Bot`) and exercise animations (Adobe Mixamo terms apply for redistribution)  
- UI inspired by glassmorphism fitness / coaching references in `design/`  

---

## Status

Working end-to-end demo on iOS Simulator:

- Library → Instruct → Countdown → Guided tour → Live loop  
- Full-body framing in the top stage  
- Smooth guide scrubbing between coaching cues  
- User-controlled camera angles preserved after orbit  
