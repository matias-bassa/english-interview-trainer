/* Course content is data-driven so later modules can add their own steps and activities. */
window.INTENSIVE_COURSE_MODULES = [
  {
    id: 'past-simple-present-perfect',
    title: 'Module 1 — Past Simple vs Present Perfect',
    lessons: [
      { id: 'introduction', title: 'Introduction', type: 'introduction' },
      { id: 'interactive-lesson', title: 'Watch & Learn', type: 'interactive' },
      { id: 'theory', title: 'Theory', type: 'theory' },
      { id: 'visual-explanation', title: 'Visual explanation', type: 'visual' },
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
        body: 'Usá Past Simple cuando presentás una acción como terminada y ubicada dentro de un período pasado que ya cerró. El año, el día o el período pueden estar nombrados o quedar claros por el contexto. No importa que la experiencia siga siendo importante para vos: importa que el hecho que contás ocurrió en un tiempo terminado.',
        examples: ['I worked at a support company in 2020.', 'I moved to another city in 2017.', 'I worked there for five months.'],
        signals: ['yesterday', 'last week', 'last year', 'in 2020', 'two days ago', 'two years ago', 'when I was…']
      },
      perfect: {
        heading: 'Present Perfect: pasado conectado con ahora',
        body: 'Usá Present Perfect para contar una experiencia hasta ahora, una situación que continúa, o una acción pasada cuyo resultado importa en el presente. Normalmente no indicás un momento pasado terminado. La forma have/has + participio es una ayuda para construirlo; la decisión principal es qué relación querés expresar con el presente.',
        examples: ['I have worked in technical support.', 'I have worked with customers.', 'I have never worked remotely before.', 'I have lived in another city since 2017.'],
        signals: ['ever', 'never', 'already', 'yet', 'just', 'since', 'for']
      }
    },
    comparisons: [
      { past: 'I worked there in 2020.', present: 'I have worked in customer support.', note: 'La primera frase ubica el trabajo en 2020, un período terminado. La segunda presenta la experiencia sin decir cuándo ocurrió; esa experiencia es relevante ahora.' },
      { past: 'I lived in another city from 2017 to 2020.', present: 'I have lived in another city since 2017.', note: 'La primera situación terminó en 2020. En la segunda, “since 2017” conecta el comienzo con una situación que continúa ahora.' }
    ],
    examples: [
      { sentence: 'I worked at a support company in 2020.', label: 'PAST SIMPLE', explanation: '“In 2020” es un momento específico de un año terminado.' },
      { sentence: 'I have worked with customers.', label: 'PRESENT PERFECT', explanation: 'Contás una experiencia relevante hasta ahora sin especificar cuándo.' },
      { sentence: 'I started working in customer service two years ago.', label: 'PAST SIMPLE', explanation: '“Two years ago” señala cuándo empezó; el punto de inicio quedó en el pasado.' },
      { sentence: 'I have worked in support for five years.', label: 'PRESENT PERFECT', explanation: '“For five years” puede describir un período que llega hasta ahora. Si esos cinco años ya terminaron, el contexto puede requerir Past Simple.' },
      { sentence: 'Have you ever handled a difficult customer?', label: 'PRESENT PERFECT', explanation: 'Preguntás por una experiencia en cualquier momento hasta ahora, sin pedir una fecha.' },
      { sentence: 'When did you start working remotely?', label: 'PAST SIMPLE', explanation: '“When” pide el momento específico en que ocurrió el comienzo.' }
    ],
    guidedExercises: [
      { prompt: 'I ___ there in 2020.', options: ['worked', 'have worked'], answer: 0, category: 'Past Simple', explanation: '“In 2020” indica un momento específico ya terminado, por eso va Past Simple.' },
      { prompt: 'So far in my career, I ___ with customers.', options: ['worked', 'have worked'], answer: 1, category: 'Present Perfect vs Past Simple', explanation: '“So far” presenta una experiencia acumulada hasta el presente, sin ubicarla en un período terminado.' },
      { prompt: 'What is wrong with this sentence? “I have worked there in 2020.”', kind: 'correction', answer: /\bi\s+(?:worked|was working)\b.*\bin 2020\b/i, correction: 'I worked there in 2020.', category: 'Past Simple', explanation: '“In 2020” es un momento terminado y específico. Una corrección natural es “I worked there in 2020.” También hay otras correcciones válidas, como “I was working there in 2020,” según el contexto.' }
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
