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
        { wrong: 'Maya has moved to the night shift in April 2022.', correct: 'Maya moved to the night shift in April 2022.', note: '“In April 2022” identifica un momento pasado terminado, por eso normalmente usamos Past Simple.', noteEnglish: '“In April 2022” identifies a finished past time, so Past Simple is normally used.' },
        { wrong: 'Have you ever work with customers?', correct: 'Have you ever worked with customers?', note: 'Después de have, se usa el participio pasado: worked.' },
        { wrong: 'I have worked there for five months before I left.', correct: 'I worked there for five months before I left.', note: '“Before I left” confirma que ese período laboral terminó; “for” por sí sola no determina el tiempo.' }
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
      { prompt: 'This quarter is still in progress; the onboarding group ___ the revised ticket form three times.', options: ['tested', 'has tested'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: 'El trimestre todavía continúa; Present Perfect presenta los resultados acumulados hasta ahora.' },
      { prompt: 'Before joining the night shift, Lena ___ password reset requests for six months.', options: ['handled', 'has handled'], answer: 0, category: 'Past Simple', explanation: 'La experiencia de Lena ocurrió antes de que se uniera al turno nocturno; ese período ya terminó.' },
      { prompt: 'Lena has joined the customer-care team in March 2023.', kind: 'correction', answer: /\b(?:lena|she)\s+(?:joined|started with)\s+(?:the )?(?:customer-care|customer care|support) team\s+in march 2023\b/i, correction: 'Lena joined the customer-care team in March 2023.', category: 'Past Simple', explanation: '“In March 2023” nombra un momento pasado terminado, por eso normalmente usamos Past Simple.', correctionInstruction: 'Correct the sentence in English.' }
    ],
    practiceExercises: [
      { prompt: 'Before moving into operations, Maya ___ in the returns department for 18 months.', options: ['worked', 'has worked'], answer: 0, category: 'Past Simple', explanation: 'La frase “before moving into operations” deja claro que ese período laboral ya terminó.' },
      { prompt: 'The team ___ nine tickets so far this shift, and several are still open.', options: ['closed', 'has closed'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: 'El turno todavía continúa; Present Perfect resume el resultado acumulado hasta ahora.' },
      { prompt: 'By the end of onboarding, the new agent ___ the refund workflow.', options: ['learned', 'has learned'], answer: 0, category: 'Past Simple', explanation: '“By the end of onboarding” ubica el aprendizaje en un período de formación ya terminado.' },
      { prompt: 'Since the help center opened, the agents ___ response time by 15%.', options: ['improved', 'have improved'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“Since the help center opened” conecta el inicio del cambio con el período que llega hasta ahora.' }
    ],
    interviewExercises: [
      { prompt: 'Tell me about a role you held for a fixed period.', options: ['I have coordinated email support during my six-month contract.', 'I coordinated email support during my six-month contract.'], answer: 1, category: 'Past Simple', explanation: 'El contrato de seis meses es un período terminado; Past Simple describe ese trabajo anterior.' },
      { prompt: 'Have you ever supported users through live chat? Choose a complete answer.', options: ['Yes, I supported users through live chat.', 'Yes, I have supported users through live chat.'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: 'La pregunta consulta experiencia hasta ahora sin pedir cuándo ocurrió.' },
      { prompt: 'When did you join the remote support team?', options: ['I have joined in March 2022.', 'I joined in March 2022.'], answer: 1, category: 'Past Simple', explanation: 'La pregunta pide cuándo ocurrió; “in March 2022” es un momento terminado.' },
      { prompt: 'What have you learned about troubleshooting?', options: ['I have learned to document each diagnostic step clearly.', 'I learned to document each diagnostic step clearly last year.'], answer: 0, category: 'Present Perfect vs Past Simple', explanation: 'La pregunta pide resumir una experiencia relevante hasta ahora, sin ubicarla en un período pasado terminado.' },
      { prompt: 'How has your communication changed since you started in support?', options: ['I became more confident since I started in support.', 'I have become more confident since I started in support.'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: 'La mejora conecta el inicio pasado con el presente; Present Perfect expresa ese cambio hasta ahora.' }
    ],
    exam: {
      partA: [
        { prompt: 'The installation crew ___ each workstation during last week’s office move.', options: ['configured', 'has configured'], answer: 0, category: 'Past Simple', explanation: '“During last week’s office move” ubica la tarea en un período terminado.' },
        { prompt: 'We ___ the ticket volume by 18% since the new portal launched.', options: ['reduced', 'have reduced'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“Since the new portal launched” conecta el cambio pasado con el resultado actual.' },
        { prompt: 'The new supervisor ___ to Manila after the training program ended.', options: ['transferred', 'has transferred'], answer: 0, category: 'Past Simple', explanation: 'La transferencia ocurrió después de que terminó el programa; ambos hechos se sitúan en el pasado.' }
      ],
      partB: { prompt: 'The call center has updated its escalation guide last quarter.', accepted: /\b(?:the )?(?:call center|support center|team)\s+(?:updated|revised)\s+(?:(?:its|the) )?escalation guide\s+last quarter\b/i, correction: 'The call center updated its escalation guide last quarter.', category: 'Past Simple', explanation: '“Last quarter” nombra un período terminado, por eso normalmente usamos Past Simple: “The call center updated its escalation guide last quarter.”' },
      partC: { prompt: 'Why is “Our new process has shortened reply times since January” in Present Perfect?', options: ['It links a change that began in the past with a result that matters now.', 'It names an action at one exact, finished moment.', 'It describes a repeated daily routine.'], answer: 0, category: 'Present Perfect vs Past Simple', explanation: 'La frase relaciona el inicio del cambio con su efecto actual; “since January” extiende el período hasta ahora.' },
      partD: { prompt: 'Which interview answer combines a finished past event with experience that remains relevant now?', options: ['I handled escalations during my contract in 2024, and I have supported customers in English.', 'I have handled escalations during my contract in 2024, and I supported customers in English.', 'I handle escalations during my contract in 2024, and I have supported customers in English.'], answer: 0, category: 'Past Simple and Present Perfect', explanation: '“During my contract in 2024” presenta un período terminado (Past Simple). La experiencia apoyando a clientes sigue siendo relevante y no está ubicada en una fecha terminada (Present Perfect).' },
      partE: [
        { prompt: 'Have you ever ___ a customer report to the engineering team?', options: ['sent', 'send'], answer: 0, category: 'Present Perfect vs Past Simple', explanation: 'Después de have, usamos el participio pasado: “sent”.' },
        { prompt: 'When ___ the updated customer portal go live?', options: ['did', 'has'], answer: 0, category: 'Past Simple', explanation: '“When” pregunta por el momento en que ocurrió el lanzamiento; usamos “did” + verbo base.' }
      ]
    }
  }
];
