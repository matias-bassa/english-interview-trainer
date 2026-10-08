# English Interview Trainer

A personal English trainer for job interviews, especially Customer Support, Junior Technical Support, Customer Experience and e-commerce, Administrative Support, Operations / Sales Support, and remote work. The app uses plain HTML, CSS, and JavaScript without frameworks or external packages.

## Open the app on Windows

1. To use the app without microphone access, open `index.html` in a browser.
2. For SpeechRecognition and reliable local audio paths, open PowerShell in this folder, run `node serve.js`, then visit `http://localhost:8000`. Stop the local development server with Ctrl+C. The server uses only Node.js built-in modules and serves static files; the app has no backend.
3. In a supported browser, open **Speaking Practice** or **Mock Interview**, choose **Start Recording**, and allow microphone access when the browser asks. The app requests access only after that button is pressed. If recognition is unavailable or permission is denied, type the response in the text box and use the same 60-second timer.

Current desktop Chrome or Microsoft Edge are recommended for trying the Web Speech API. Speech recognition support and behavior vary by browser, operating system, and language; Firefox and some other browser configurations may not provide `SpeechRecognition`. The app checks both `SpeechRecognition` and `webkitSpeechRecognition` and keeps the manual mode available as a fallback.

## Static hosting

There is no build step: publish the repository root with GitHub Pages (or another static host). Keep `index.html`, `styles.css`, `app.js`, `course-data.js`, and `audio/` at their current relative paths. `serve.js` is only for local development and is not used by GitHub Pages. Browser `localStorage` is scoped to the site origin, so progress saved at `localhost` will be separate from progress on the published site. Microphone access may need to be allowed again on the published domain.

## Practice areas

- **Interview Practice:** role-focused interview questions, sample answers, and useful vocabulary.
- **Intensive Course:** a step-by-step, visual Module 1 on Past Simple vs Present Perfect, including a local animated Watch & Learn mini-lesson with nine scenes presented as focused stages (explanation, concept, examples, comparison, and checks), bilingual narration, captions, playback and scene controls, guided/interview practice, a five-part final exam, and local results tracking.
- **Text to Speech:** an independent browser-native reader for English and Spanish, with voice selection, speed, playback controls, and selected-text playback.
- **Grammar Practice:** ten priority grammar topics, categorized practice, immediate feedback in Spanish, and a local record of mistakes by topic.
- **Speaking Practice:** optional microphone transcription, manual text entry, useful ideas, model answer after an attempt, and supportive feedback.
- **Mock Interview:** choose Customer Support, Technical Support, General Interview, or Remote Work, and Beginner, Intermediate, or Interview Ready. It asks one question at a time, gives feedback after each answer, and summarizes the interview.
- **Progress:** grammar accuracy and weaknesses, course lessons and exam results, speaking attempts and sessions, average response length, and recommended practice.

The Intensive Course lessons are configured in `course-data.js`. New modules can add lesson content and activities there while reusing the course navigation, local progress, and assessment flow in `app.js`. Watch & Learn keeps its nine scenes and presents each as data-defined stages. Scene 02 demonstrates the complete explanation → key question → progressive examples → comparison → mini-check flow; its mini-check uses the module’s existing local exercise and weakness tracking. Scene audio is data-driven and played by the shared narration engine: a segment can provide a local `audioSrc` (MP3-first) or fall back to browser `SpeechSynthesis`. Lesson flow waits for the audio segment’s actual end event and uses `LESSON_TIMING` only for pauses between content; selected stages explicitly wait for the learner. Local audio assets may be added under `audio/module-1/`. No external service, account, key, or dependency is required. Voice availability depends on browser and installed system voices; visual and manual scene controls remain available if synthesis is unsupported.

## Speech recognition and feedback limits

The app does not save an audio file. It can store the transcript of the last 20 submitted answers in this browser’s `localStorage` to support local practice statistics. The Web Speech API implementation chosen by a browser may send speech audio to that browser’s recognition service; this app does not control that processing. Do not treat microphone use as guaranteed to be on-device or offline.

Speaking analysis uses lightweight local text rules. It estimates response length, words per minute, detectable fillers, sentence continuity, a small set of common grammar patterns, vocabulary relevance, and answer relevance. These signals can miss errors or flag acceptable phrasing. They do not evaluate pronunciation, accent, or actual pauses, and they are not a professional language assessment.

## Local storage

Grammar totals, grammar weaknesses, interview answer drafts and feedback, Intensive Course progress and exam results, session and speaking counts, average response length, and up to 20 answer transcripts are stored in `localStorage` for the browser profile on this device. No account or external database is used. **Reset progress** clears those locally stored app statistics and transcripts. Clearing browser site data also removes them. The app keeps the existing progress key so earlier grammar totals and sessions can carry forward.

## Files

- `index.html` — app structure, pages, and controls.
- `styles.css` — responsive visual design.
- `course-data.js` — configurable Intensive Course modules, lessons, examples, exercises, and exam content.
- `app.js` — interview prompts, grammar exercises, course flow, shared narration/TTS, speech recognition, text-based analysis, mock interview flow, and local progress.
- `audio/module-1/` — reserved for optional local narration audio, such as MP3 files; none are required.
- `serve.js` — optional Node.js built-in static server for local browser testing; it is not used by published static hosting.
- `.gitignore` — excludes common operating-system, editor, and local development artifacts.
