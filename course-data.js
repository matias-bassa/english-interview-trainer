/* Course content is data-driven so later modules can add their own steps and activities. */
window.COURSE_VIDEO_ASSETS = {
  module1: {
    watchLearn: {
      status: 'pending',
      videoSrc: '',
      poster: '',
      captions: '',
      transcript: '',
      duration: '',
      description: 'A complete video lesson comparing finished past time with experience connected to now.',
      expectedVideoPath: 'assets/videos/module-1/past-simple-vs-present-perfect.mp4',
      expectedPosterPath: 'assets/videos/module-1/past-simple-vs-present-perfect.jpg',
      expectedCaptionsPath: 'assets/videos/module-1/past-simple-vs-present-perfect.vtt'
    }
  }
};
window.INTENSIVE_COURSE_MODULES = [
  {
    id: 'past-simple-present-perfect',
    title: 'Module 1 — Past Simple vs Present Perfect',
    lessons: [
      { id: 'introduction', title: 'Introduction', type: 'introduction' },
      { id: 'interactive-lesson', title: 'Watch & Learn', type: 'video', assetKey: 'module1.watchLearn' },
      { id: 'theory', title: 'Study Guide', type: 'study-guide' },
      { id: 'examples', title: 'Examples', type: 'examples' },
      { id: 'guided-practice', title: 'Guided practice', type: 'guided', category: 'Past Simple' },
      { id: 'practice', title: 'Practice', type: 'practice', category: 'Present Perfect vs Past Simple' },
      { id: 'interview-application', title: 'Interview application', type: 'interview', category: 'Present Perfect vs Past Simple' },
      { id: 'final-exam', title: 'Final exam', type: 'exam' },
      { id: 'results', title: 'Results', type: 'results' }
    ],
    theory: {
      past: {
        heading: 'Past Simple: pasado terminado',
        body: 'Usamos Past Simple cuando presentamos una acción dentro de un período pasado que ya terminó. El momento puede estar dicho o quedar claro por el contexto.'
      },
      perfect: {
        heading: 'Present Perfect: pasado conectado con ahora',
        body: 'Usamos Present Perfect para experiencias hasta ahora, situaciones que continúan o acciones pasadas relevantes en el presente. Normalmente no nombramos un momento pasado terminado.'
      }
    },
    studyGuide: {
      theoryIntro: 'Primero decidí qué querés comunicar: una acción dentro de un período pasado terminado, o una experiencia/situación conectada con el presente.',
      comparison: {
        past: { title: 'Past Simple', sentence: 'I worked there in 2020.', translation: 'Trabajé allí en 2020.', meaning: 'Período pasado terminado.' },
        perfect: { title: 'Present Perfect', sentence: 'I have worked in technical support.', translation: 'He trabajado en soporte técnico. / Tengo experiencia en soporte técnico.', meaning: 'Experiencia hasta ahora o conexión con el presente.' },
        question: 'Did I mention a finished past time?', questionTranslation: '¿Mencioné un momento pasado terminado?', yes: 'YES → normally Past Simple.', no: 'NO → consider Present Perfect for experience up to now, continuity, or present relevance. Context matters; this is a guide, not an absolute formula.'
      },
      forms: [
        { title: 'Past Simple', examples: ['I worked.', "I didn't work.", 'Did you work?'] },
        { title: 'Present Perfect', examples: ['I have worked.', "I haven't worked.", 'Have you worked?'] }
      ],
      presentPerfectFormula: 'Present Perfect = have/has + past participle.',
      formExample: 'Have you ever worked with customers?',
      additionalExamples: [
        { sentence: 'We resolved the issue last Monday.', translation: 'Resolvimos el problema el lunes pasado.', note: '“Last Monday” indica un momento pasado terminado.' },
        { sentence: 'She has supported customers since 2021.', translation: 'Ella brinda soporte a clientes desde 2021.', note: 'La situación comenzó en 2021 y continúa hasta ahora.' },
        { sentence: 'I have just finished the report.', translation: 'Acabo de terminar el informe.', note: 'La acción pasada tiene un resultado relevante ahora.' }
      ],
      commonMistakes: [
        { wrong: 'I have worked there in 2020.', correct: 'I worked there in 2020.', note: '“In 2020” identifica un período terminado, por eso normalmente usamos Past Simple.', noteEnglish: '“In 2020” identifies a finished period, so Past Simple is normally used.' },
        { wrong: 'Have you ever work with customers?', correct: 'Have you ever worked with customers?', note: 'Después de have, se usa el participio pasado: worked.' },
        { wrong: 'I have worked there for five months.', correct: 'I worked there for five months.', note: 'Si los cinco meses ya terminaron, Past Simple es natural. “For” por sí sola no determina el tiempo.' }
      ],
      interviewEnglish: [
        { sentence: 'I worked as a technical support representative at AyP Computación.', translation: 'Trabajé como representante de soporte técnico en AyP Computación.', purpose: 'Describe un puesto anterior como experiencia terminada.' },
        { sentence: 'I have experience working with customers.', translation: 'Tengo experiencia trabajando con clientes.', purpose: 'Presenta una capacidad relevante actualmente.' },
        { sentence: 'I have worked in technical support.', translation: 'He trabajado en soporte técnico.', purpose: 'Resume experiencia laboral relevante hasta ahora.' }
      ]
    },
    examples: [
      { sentence: 'I worked at a support company in 2020.', translation: 'Trabajé en una empresa de soporte en 2020.', label: 'PAST SIMPLE', explanation: '“In 2020” es un momento específico de un año terminado.' },
      { sentence: 'I have worked with customers.', translation: 'He trabajado con clientes. / Tengo experiencia trabajando con clientes.', label: 'PRESENT PERFECT', explanation: 'Contás una experiencia relevante hasta ahora sin especificar cuándo.' },
      { sentence: 'I started working in customer service two years ago.', translation: 'Empecé a trabajar en atención al cliente hace dos años.', label: 'PAST SIMPLE', explanation: '“Two years ago” señala cuándo empezó; el punto de inicio quedó en el pasado.' },
      { sentence: 'I have worked in support for five years.', translation: 'He trabajado en soporte durante cinco años.', label: 'PRESENT PERFECT', explanation: '“For five years” puede describir un período que llega hasta ahora. Si esos cinco años ya terminaron, el contexto puede requerir Past Simple.' },
      { sentence: 'Have you ever handled a difficult customer?', translation: '¿Alguna vez atendiste a un cliente difícil?', label: 'PRESENT PERFECT', explanation: 'Preguntás por una experiencia en cualquier momento hasta ahora, sin pedir una fecha.' },
      { sentence: 'When did you start working remotely?', translation: '¿Cuándo empezaste a trabajar de forma remota?', label: 'PAST SIMPLE', explanation: '“When” pide el momento específico en que ocurrió el comienzo.' }
    ],
    guidedExercises: [
      { prompt: 'I ___ there in 2020.', options: ['worked', 'have worked'], answer: 0, category: 'Past Simple', explanation: '“In 2020” indica un momento específico ya terminado, por eso va Past Simple.' },
      { prompt: 'So far in my career, I ___ with customers.', options: ['worked', 'have worked'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“So far” presenta una experiencia acumulada hasta el presente, sin ubicarla en un período terminado.' },
      { prompt: 'I have worked there in 2020.', kind: 'correction', answer: /\bi\s+(?:worked|was working)\b.*\bin 2020\b/i, correction: 'I worked there in 2020.', category: 'Past Simple', explanation: '“In 2020” indica un período específico y terminado, por eso normalmente usamos Past Simple. “I was working there in 2020” también puede ser natural según el contexto.', correctionInstruction: 'Correct the sentence in English.' }
    ],
    practiceExercises: [
      { prompt: 'I ___ at a support company from March to August 2020.', options: ['worked', 'have worked'], answer: 0, category: 'Past Simple', explanation: 'El período “from March to August 2020” está terminado.' },
      { prompt: 'So far this week, she ___ several technical issues.', options: ['resolved', 'has resolved'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“So far this week” enfoca los resultados acumulados durante un período que todavía continúa.' },
      { prompt: 'We ___ three new support tools last year.', options: ['have learned', 'learned'], answer: 1, category: 'Past Simple', explanation: '“Last year” es un período terminado.' },
      { prompt: 'Have you ___ worked with international customers?', options: ['ever', 'yesterday'], answer: 0, category: 'Present Perfect vs Past Simple', explanation: '“Ever” suele preguntar por experiencias hasta ahora. Es una pista contextual, no una regla absoluta.' }
    ],
    interviewExercises: [
      { prompt: 'Tell me about your previous work experience.', options: ['I worked in technical support for five months in 2020.', 'I have worked in technical support for five months in 2020.'], answer: 0, category: 'Past Simple', explanation: 'Al agregar “in 2020”, ubicás esos cinco meses en un período terminado.' },
      { prompt: 'Have you ever worked with customers? Answer without specifying when.', options: ['Yes, I have work with customers.', 'Yes, I have worked with customers.'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: 'La respuesta conserva la idea de experiencia hasta ahora y usa el participio “worked” después de “have”.' },
      { prompt: 'When did you start working in customer service?', options: ['I started in 2021.', 'I have started in 2021.'], answer: 0, category: 'Past Simple', explanation: '“When” pide una fecha o momento pasado específico.' },
      { prompt: 'What experience do you have with troubleshooting?', options: ['I am have experience troubleshooting common software issues.', 'I have experience troubleshooting common software issues.'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“I have experience” describe una experiencia o capacidad que tenés actualmente.' },
      { prompt: 'Which answer talks about an experience without specifying when?', options: ['I worked with customers last year.', 'I have worked with customers.'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: 'La segunda presenta la experiencia hasta ahora y no indica un momento terminado.' }
    ],
    exam: {
      partA: [
        { prompt: 'I ___ at a support company in 2020.', options: ['worked', 'have worked'], answer: 0, category: 'Past Simple', explanation: '“In 2020” es un momento pasado terminado.' },
        { prompt: 'So far in my career, I ___ with customers.', options: ['worked', 'have worked'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“So far” muestra que el período llega hasta el presente.' },
        { prompt: 'They ___ to another city two years ago.', options: ['moved', 'have moved'], answer: 0, category: 'Past Simple', explanation: '“Two years ago” identifica un momento pasado terminado.' }
      ],
      partB: { prompt: 'Correct this sentence: “I have worked there in 2020.”', accepted: /\bi\s+(?:worked|was working)\b.*\bin 2020\b/i, category: 'Past Simple', explanation: 'El tiempo específico “in 2020” requiere presentar la acción como pasada y terminada. Por ejemplo: “I worked there in 2020.”' },
      partC: { prompt: 'Why is “Have you ever worked with customers?” in Present Perfect?', options: ['It asks about experience up to now without asking for a finished time.', 'It names a specific finished date.', 'It describes a routine happening right now.'], answer: 0, category: 'Present Perfect vs Past Simple', explanation: 'La pregunta considera cualquier experiencia hasta el presente y no pide una fecha específica.' },
      partD: { prompt: 'Write a short interview answer. Include one action with a specific finished time and one experience that is still relevant to you now.', category: 'Present Perfect vs Past Simple', explanation: 'Una buena respuesta podría combinar “I worked in support in 2020” con “I have helped customers with technical issues.” Hay muchas respuestas correctas.' },
      partE: [
        { prompt: 'Have you ever ___ with customers?', options: ['worked', 'work'], answer: 0, category: 'Present Perfect vs Past Simple', explanation: 'Después de have, se usa el participio: “worked”.' },
        { prompt: 'When ___ you start working in customer service?', options: ['did', 'have'], answer: 0, category: 'Past Simple', explanation: '“When” pide el momento en que empezó la acción, por eso se pregunta con Past Simple: “When did you start…?”' }
      ]
    }
  }
];
