const interviewQuestions = [
  { question: 'Tell me about yourself.', answer: 'I’m a customer-focused professional with experience in technical support. In my previous role, I helped customers solve problems, explained technical information clearly, and followed up to make sure they were satisfied. I’m patient, organized, and enjoy making technology easier for people. I’m now looking for an opportunity to keep growing in customer support and contribute to a collaborative team.', intro: 'Useful phrases for a confident introduction:', words: [['customer-focused', 'someone who puts the customer’s needs first'], ['follow up', 'contact someone again to check on something'], ['contribute', 'give your skills or effort to a team']] },
  { question: 'Can you describe your previous work experience?', answer: 'I worked in a technical support role where I assisted customers with questions and technical issues. I listened carefully, asked questions to understand the problem, and guided customers through clear steps. I also documented cases and worked with teammates when an issue needed more investigation. That experience strengthened my communication and problem-solving skills.', intro: 'Useful phrases for talking about past work:', words: [['assisted customers', 'helped customers with what they needed'], ['documented cases', 'recorded details about customer issues'], ['strengthened', 'made a skill stronger']] },
  { question: 'What did you do as a technical support representative?', answer: 'As a technical support representative, I helped customers troubleshoot issues with products and services. I asked questions to identify the cause, explained solutions in simple language, and checked that the issue was resolved. When I could not solve something immediately, I documented it and escalated it to the right team.', intro: 'Useful phrases for describing your responsibilities:', words: [['troubleshoot', 'find and fix the cause of a problem'], ['identify the cause', 'understand why something happened'], ['escalated', 'sent an issue to a more specialized person or team']] },
  { question: 'Why are you interested in customer support?', answer: 'I’m interested in customer support because I enjoy helping people and solving practical problems. I find it rewarding to turn a frustrating situation into a positive experience. I also like that the role combines communication, patience, and learning about products. I would be excited to bring those strengths to your team.', intro: 'Useful phrases for explaining your motivation:', words: [['rewarding', 'making you feel that your work is worthwhile'], ['frustrating situation', 'a situation that causes annoyance or difficulty'], ['bring those strengths', 'use those abilities in a new role']] },
  { question: 'What are your strengths?', answer: 'One of my main strengths is communication. I listen carefully and explain information in a clear, friendly way. I’m also patient, especially when someone is having difficulty, and I stay organized when I’m handling several tasks. These strengths help me provide reliable support and build trust with customers.', intro: 'Useful phrases for describing your strengths:', words: [['one of my main strengths', 'a good ability that is especially important'], ['handling several tasks', 'managing more than one responsibility'], ['build trust', 'help someone feel confident in you']] },
  { question: 'What is one weakness you are working on?', answer: 'I used to spend too long checking my work because I wanted everything to be perfect. I’m working on balancing attention to detail with efficiency. Now I set priorities, use a checklist for important steps, and ask for feedback when I need another perspective. This helps me work carefully without slowing down.', intro: 'Useful phrases for discussing growth:', words: [['used to', 'describes a past habit that has changed'], ['balancing X with Y', 'giving appropriate attention to two things'], ['another perspective', 'a different way of looking at something']] },
  { question: 'Why should we hire you?', answer: 'You should hire me because I bring hands-on technical support experience, a calm approach to problem-solving, and a genuine interest in helping customers. I communicate clearly, take responsibility for following issues through, and learn new tools quickly. I would be committed to giving your customers a helpful and professional experience.', intro: 'Useful phrases for making your case:', words: [['hands-on experience', 'practical experience from doing the work'], ['take responsibility', 'accept that something is your duty'], ['follow through', 'continue until a task or issue is complete']] },
  { question: 'How do you deal with a difficult customer?', answer: 'First, I stay calm and give the customer time to explain the situation. I listen without interrupting, acknowledge how they feel, and ask questions to understand what they need. Then I explain the options clearly and agree on the next step. If I cannot resolve the issue myself, I involve the appropriate team and keep the customer informed.', intro: 'Useful phrases for handling challenging conversations:', words: [['acknowledge', 'show that you understand someone’s feelings'], ['agree on the next step', 'decide together what to do next'], ['keep someone informed', 'share updates so they know what is happening']] },
  { question: 'Why do you want to work remotely?', answer: 'I’m interested in remote work because I’m comfortable staying organized and communicating proactively online. I value the flexibility, and I also understand that remote work requires accountability and clear communication with the team. I have a suitable workspace and would make sure I stay connected, responsive, and focused throughout the day.', intro: 'Useful phrases for talking about remote work:', words: [['proactively', 'taking action before someone has to ask'], ['accountability', 'being responsible for your work and results'], ['responsive', 'replying or reacting promptly']] }
];

interviewQuestions.push(
  { question: 'Why are you interested in this position?', category: 'General Interview', answer: 'I’m interested in this position because it combines customer communication, problem-solving, and the chance to keep learning. The role matches my experience in support and my goal of helping customers have a clear, positive experience. I’m also interested in contributing to a team where people share knowledge and take ownership of their work.', intro: 'Useful ideas:', words: [['matches my experience', 'connects well with what I have done'], ['take ownership', 'accept responsibility for a task'], ['contribute', 'add useful work or ideas to a team']] },
  { question: 'Tell me about a time you helped a customer solve a problem.', category: 'Customer Support', answer: 'A customer once contacted support because they could not access an important feature. I listened carefully, asked a few questions, and checked the steps they had already tried. Then I guided them through a solution and confirmed that it worked. The customer was able to continue their work, and I documented the issue for the team.', intro: 'Useful ideas:', words: [['listened carefully', 'paid attention to understand the situation'], ['guided them through', 'explained each step'], ['documented', 'recorded information for later reference']] },
  { question: 'How do you handle an angry customer?', category: 'Customer Support', answer: 'I stay calm and let the customer explain what happened without interrupting. I acknowledge their frustration, clarify the main issue, and explain what I can do next. I avoid making promises I cannot keep, and I follow up so the customer knows the situation is being handled.', intro: 'Useful ideas:', words: [['acknowledge their frustration', 'show that you understand they are upset'], ['clarify', 'make the details easier to understand'], ['follow up', 'check back with an update']] },
  { question: 'What does good customer service mean to you?', category: 'Customer Support', answer: 'Good customer service means listening, responding clearly, and taking responsibility for helping the customer reach a solution. It also means treating each person with patience and respect, even when a problem is complicated. A good experience should leave the customer feeling heard and informed.', intro: 'Useful ideas:', words: [['reach a solution', 'find an answer to the problem'], ['feeling heard', 'feeling that someone listened and understood'], ['informed', 'knowing what is happening']] },
  { question: 'How would you prioritize several customer requests?', category: 'Customer Support', answer: 'I would first check urgency, customer impact, and any service deadlines. I would handle issues affecting access or many customers first, while acknowledging the other requests and giving realistic time expectations. I would keep my queue organized and update customers if priorities changed.', intro: 'Useful ideas:', words: [['urgency', 'how quickly something needs attention'], ['customer impact', 'how many people or how seriously a problem affects them'], ['realistic expectations', 'honest estimates about what will happen']] },
  { question: 'How would you troubleshoot a technical problem?', category: 'Technical Support', answer: 'I would first ask clear questions to understand the symptoms and when the issue started. Then I would check the simplest likely causes, follow the support guide, and test one change at a time. I would explain each step to the customer, document the result, and escalate the issue if it needed deeper investigation.', intro: 'Useful ideas:', words: [['symptoms', 'signs that show what the problem is doing'], ['one change at a time', 'a careful method for finding the cause'], ['escalate', 'send a complex issue to a specialist']] },
  { question: "What would you do if you didn't know how to solve a customer's technical issue?", category: 'Technical Support', answer: 'I would be honest and let the customer know I’m going to investigate. I would gather the details, consult the knowledge base or a teammate, and follow the correct escalation process. I would give the customer a clear update and stay responsible for following up until there is a resolution.', intro: 'Useful ideas:', words: [['knowledge base', 'a collection of support information'], ['escalation process', 'the steps for getting specialized help'], ['resolution', 'the final solution to an issue']] },
  { question: 'How would you explain a technical problem to a non-technical customer?', category: 'Technical Support', answer: 'I would avoid jargon and explain the issue in simple, familiar terms. I would focus on what the customer needs to know, describe the solution step by step, and check that the explanation makes sense. If useful, I would use an everyday comparison to make the idea clearer.', intro: 'Useful ideas:', words: [['avoid jargon', 'use simple words instead of specialist terms'], ['step by step', 'in a clear sequence'], ['check for understanding', 'make sure the explanation is clear']] },
  { question: 'How would you handle a customer asking about a delayed shipment?', category: 'E-commerce', answer: 'I would acknowledge the inconvenience and check the latest tracking information and order details. I would explain what I know, give a realistic update, and review the available options under the company policy. If the shipment needed investigation, I would open a request and follow up with the customer.', intro: 'Useful ideas:', words: [['acknowledge the inconvenience', 'recognize that the delay is causing trouble'], ['tracking information', 'updates about where a package is'], ['available options', 'the actions the company can offer']] },
  { question: 'What would you do if a customer wanted a refund?', category: 'E-commerce', answer: 'I would listen to the reason for the request and review the order and refund policy. I would explain the available options clearly and process the refund if it met the policy. If it did not, I would explain why respectfully and offer any suitable alternative.', intro: 'Useful ideas:', words: [['refund policy', 'the rules for returning money'], ['process the refund', 'complete the steps to return payment'], ['suitable alternative', 'another option that may help']] },
  { question: 'How would you deal with a return or exchange?', category: 'E-commerce', answer: 'I would ask for the order details and understand why the customer wants to return or exchange the item. Then I would check the return window and condition requirements, explain the steps, and make sure the customer knows what to expect next.', intro: 'Useful ideas:', words: [['return window', 'the period when a return is allowed'], ['requirements', 'conditions that need to be met'], ['what to expect', 'what will happen next']] },
  { question: 'How do you stay organized when working remotely?', category: 'Remote Work', answer: 'I plan my day around priorities and deadlines, keep my tasks visible, and break larger projects into smaller steps. I also check messages regularly and share progress with my team. This helps me stay focused while making sure people know what I am working on.', intro: 'Useful ideas:', words: [['priorities', 'the most important tasks'], ['deadlines', 'the times work needs to be finished'], ['share progress', 'let others know how work is going']] },
  { question: 'How do you communicate with your team remotely?', category: 'Remote Work', answer: 'I try to communicate clearly and proactively. I use the right channel for each issue, share concise updates, and ask questions when I need clarification. I also document decisions so teammates can find the information later, even if we are working at different times.', intro: 'Useful ideas:', words: [['proactively', 'before a problem grows or someone asks'], ['concise updates', 'short, clear progress messages'], ['clarification', 'extra information that removes uncertainty']] },
  { question: 'How do you manage your time without direct supervision?', category: 'Remote Work', answer: 'I set clear daily goals, estimate how long tasks will take, and check my progress during the day. If priorities change or I see a risk to a deadline, I let my manager know early. I’m comfortable working independently while staying accountable to the team.', intro: 'Useful ideas:', words: [['daily goals', 'the outcomes you plan to complete today'], ['accountable', 'responsible for your work and commitments'], ['independently', 'without needing constant direction']] }
);

interviewQuestions.push(
  { question: 'How do you manage detailed administrative tasks accurately?', category: 'Administrative Support', answer: 'I organize tasks by deadline and importance, then use a checklist or calendar to track the details. I review important information before I send or file it, and I keep records in a consistent way. If something is unclear, I ask before making an assumption.', intro: 'Useful ideas:', words: [['checklist', 'a list that helps you remember each step'], ['consistent', 'done in the same careful way'], ['assumption', 'something accepted as true without checking']] },
  { question: 'How would you support an operations team when priorities change?', category: 'Operations / Sales Support', answer: 'I would confirm which tasks are now most urgent and check whether any deadlines or customers are affected. I would update my task list, communicate the change to the people involved, and complete the work in priority order. I would stay flexible while keeping the details organized.', intro: 'Useful ideas:', words: [['confirm priorities', 'check what should be done first'], ['people involved', 'the teammates or customers affected'], ['stay flexible', 'adjust when circumstances change']] },
  { question: 'How would you support a customer who is considering a purchase without pressuring them?', category: 'Operations / Sales Support', answer: 'I would first understand what the customer needs and share accurate information about the options. I would answer questions honestly, explain relevant details, and give the customer time to decide. My goal would be to make the process helpful and clear, not to push them into a decision.', intro: 'Useful ideas:', words: [['understand their needs', 'learn what matters to the customer'], ['accurate information', 'correct and reliable details'], ['give time to decide', 'let the customer choose without pressure']] }
);

const grammarTopics = [
  { name: 'Present Simple vs Continuous', exercises: [
    { sentence: 'She ___ customer emails every morning.', options: ['answers', 'is answering', 'answer'], correct: 0, explanation: 'Usamos Present Simple para rutinas y acciones habituales. “Every morning” indica una rutina.' },
    { sentence: 'Please wait. I ___ with a customer right now.', options: ['talk', 'am talking', 'talked'], correct: 1, explanation: 'Usamos Present Continuous para una acción que está ocurriendo ahora. “Right now” es una pista.' },
    { sentence: 'He usually ___ from home, but this week he ___ at the office.', options: ['works / is working', 'is working / works', 'work / working'], correct: 0, explanation: '“Usually” expresa una rutina (Present Simple); “this week” indica una situación temporal (Present Continuous).' }
  ]},
  { name: 'Past Simple', exercises: [
    { sentence: 'I ___ a customer with a billing problem yesterday.', options: ['help', 'helped', 'have helped'], correct: 1, explanation: 'Usamos Past Simple para acciones terminadas en un momento pasado definido. “Yesterday” marca ese momento.' },
    { sentence: 'They ___ the issue and sent a follow-up email.', options: ['resolved', 'resolve', 'have resolve'], correct: 0, explanation: 'La acción ocurrió y terminó en el pasado. El verbo regular “resolve” suma -d: “resolved”.' },
    { sentence: 'Where ___ you work before this job?', options: ['do', 'did', 'were'], correct: 1, explanation: 'En preguntas de Past Simple usamos “did” + sujeto + verbo en forma base.' }
  ]},
  { name: 'Present Perfect vs Past Simple', exercises: [
    { sentence: 'I ___ in customer support for three years, and I still enjoy it.', options: ['worked', 'have worked', 'am work'], correct: 1, explanation: 'Present Perfect conecta una experiencia pasada con el presente. El trabajo continúa, como indica el contexto.' },
    { sentence: 'She ___ the training course last month.', options: ['has completed', 'completes', 'completed'], correct: 2, explanation: 'Con un momento pasado terminado como “last month”, usamos Past Simple.' },
    { sentence: '___ you ever ___ with an international team?', options: ['Did / work', 'Have / worked', 'Do / worked'], correct: 1, explanation: 'Para preguntar por experiencias de vida sin decir cuándo, usamos “Have + sujeto + participio”.' }
  ]},
  { name: 'Will vs Going to', exercises: [
    { sentence: 'I think the new software ___ make our work easier.', options: ['is going', 'will', 'going to'], correct: 1, explanation: 'Usamos “will” para expresar una predicción u opinión sobre el futuro.' },
    { sentence: 'We have a plan. We ___ launch the new help center next week.', options: ['will to', 'are going to', 'going'], correct: 1, explanation: '“Be going to” expresa un plan o una intención decidida antes de hablar.' },
    { sentence: 'The phone is ringing. I ___ answer it!', options: ['will', 'am going', 'will to'], correct: 0, explanation: 'Usamos “will” para una decisión espontánea tomada en el momento.' }
  ]},
  { name: 'Do / Does / Did', exercises: [
    { sentence: '___ your manager give you regular feedback?', options: ['Do', 'Does', 'Did'], correct: 1, explanation: 'En Present Simple, con “he/she/it” usamos “does” para formar preguntas.' },
    { sentence: '___ you send the report yesterday?', options: ['Does', 'Did', 'Do'], correct: 1, explanation: 'En preguntas de Past Simple usamos “did” para todos los sujetos.' },
    { sentence: 'What time ___ your shift usually start?', options: ['do', 'does', 'did'], correct: 1, explanation: '“Your shift” equivale a “it” (tercera persona singular): usamos “does”.' }
  ]},
  { name: 'Have / Has / Had', exercises: [
    { sentence: 'She ___ excellent communication skills.', options: ['have', 'has', 'hads'], correct: 1, explanation: 'En Present Simple, con “she/he/it” usamos “has”.' },
    { sentence: 'We ___ a team meeting every Monday.', options: ['has', 'have', 'had'], correct: 1, explanation: 'Con “we” en Present Simple usamos “have”.' },
    { sentence: 'They ___ already finished the interview when I arrived.', options: ['have', 'has', 'had'], correct: 2, explanation: 'Past Perfect (“had + participio”) describe una acción anterior a otra acción pasada.' }
  ]},
  { name: 'Questions and answers', exercises: [
    { sentence: 'Choose the correct question:', options: ['Where you did work?', 'Where did you work?', 'Where worked you?'], correct: 1, explanation: 'El orden de una pregunta en Past Simple es: palabra interrogativa + did + sujeto + verbo base.' },
    { sentence: '“Do you enjoy helping customers?” — “___”', options: ['Yes, I do.', 'Yes, I enjoy.', 'Yes, I am.'], correct: 0, explanation: 'Las respuestas cortas repiten el auxiliar de la pregunta: “Do you…?” → “Yes, I do.”' },
    { sentence: 'Choose the correct question:', options: ['How long have you worked here?', 'How long you have worked here?', 'How long did you have worked here?'], correct: 0, explanation: 'En una pregunta con Present Perfect: palabra interrogativa + have/has + sujeto + participio.' }
  ]},
  { name: 'Prepositions', exercises: [
    { sentence: 'I’m responsible ___ answering customer questions.', options: ['of', 'for', 'to'], correct: 1, explanation: 'La combinación fija es “responsible for” + sustantivo o verbo terminado en -ing.' },
    { sentence: 'She is good ___ explaining technical problems.', options: ['at', 'in', 'on'], correct: 0, explanation: 'Usamos “good at” para hablar de una habilidad. Antes de un verbo, usamos la forma -ing.' },
    { sentence: 'I joined the company ___ 2023.', options: ['at', 'on', 'in'], correct: 2, explanation: 'Usamos “in” con años y meses: in 2023, in June.' }
  ]},
  { name: 'Articles', exercises: [
    { sentence: 'She is ___ experienced support representative.', options: ['a', 'an', 'the'], correct: 1, explanation: 'Usamos “an” antes de un sonido vocálico. “Experienced” empieza con sonido de vocal.' },
    { sentence: 'I work for ___ technology company.', options: ['a', 'an', 'the'], correct: 0, explanation: '“Technology” empieza con sonido consonántico; para algo singular e indefinido usamos “a”.' },
    { sentence: 'Could you send me ___ information about the role?', options: ['an', 'a', 'some'], correct: 2, explanation: '“Information” es incontable en inglés. No usamos “a/an”; podemos decir “some information”.' }
  ]},
  { name: 'Word order', exercises: [
    { sentence: 'Choose the correct sentence:', options: ['I always am polite with customers.', 'I am always polite with customers.', 'Always I am polite with customers.'], correct: 1, explanation: 'Con el verbo “be”, el adverbio de frecuencia suele ir después del verbo: “am always”.' },
    { sentence: 'Choose the correct sentence:', options: ['I can clearly explain the steps.', 'I can explain clearly the steps.', 'Clearly I the steps can explain.'], correct: 0, explanation: 'El orden más natural es sujeto + modal + adverbio + verbo + objeto.' },
    { sentence: 'Choose the correct sentence:', options: ['She works remotely from Argentina.', 'She remotely from Argentina works.', 'Works she from Argentina remotely.'], correct: 0, explanation: 'El orden habitual es sujeto + verbo + complemento: “She works remotely from Argentina.”' }
  ]}
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const STORAGE_KEY = 'english-interview-trainer-progress-v1';
const freshStats = () => ({ answered: 0, correct: 0, incorrect: 0, sessions: 0, grammarWeaknesses: {}, interviewAnswers: [], courseProgress: {}, speakingSessions: 0, speakingAttempts: 0, totalWords: 0, transcripts: [] });
let stats = loadStats();
let interviewIndex = 0;
let speakingIndex = 0;
let topicIndex = 0;
let exerciseIndex = 0;
let selectedOption = null;
let exerciseChecked = false;
let timerInterval = null;
let timerSeconds = 60;
let activeView = 'home';
let grammarCategory = 'priority';
let speakingRecognition = null;
let speakingFinalText = '';
let speakingInterimText = '';
let speakingSegments = [];
let speakingRawTranscript = '';
let speakingConfidenceValues = [];
let speakingFinalResultEvents = 0;
let speakingEdited = false;
let speakingAttemptSaved = false;
let speakingIsRecording = false;
let speakingCompleted = false;
let speakingElapsed = 0;
let speakingStopRequested = false;
let speakingErrorCode = '';
let speakingResultEvents = 0;
let speakingRestartCount = 0;
let mockQuestions = [];
let mockIndex = 0;
let mockScores = [];
let mockRecognition = null;
let mockFinalText = '';
let mockIsRecording = false;
let mockCompleted = false;
let mockTimerInterval = null;
let mockSeconds = 60;
let activeCourseModuleId = window.INTENSIVE_COURSE_MODULES?.[0]?.id || '';
const LESSON_TIMING = Object.freeze({ segmentPause: 700, examplePauseBefore: 1200, importantPause: 1800, scenePause: 1500 });
let courseLessonScene = 0;
let courseLessonStage = 0;
let courseNarrationToken = 0;
let courseLessonSubtitle = '';
let courseLessonSubtitleLang = 'es';
let courseNarrationStatus = 'Ready';
let courseSpeechVoices = [];
let courseVoiceRate = 1;
let courseVoiceEventsBound = false;
let ttsInitialized = false;
let ttsLanguage = 'en';
let ttsSpeed = 1;
let ttsLastSegment = null;
let ttsVoiceSelection = '';
let narrationEngine = { token: 0, audio: null, utterance: null, segment: null, options: null, paused: false, onStatus: null };

function loadStats() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!value || typeof value !== 'object') return freshStats();
    const defaults = freshStats();
    return { ...defaults, ...value, grammarWeaknesses: value.grammarWeaknesses && typeof value.grammarWeaknesses === 'object' ? value.grammarWeaknesses : {}, interviewAnswers: Array.isArray(value.interviewAnswers) ? value.interviewAnswers : [], courseProgress: value.courseProgress && typeof value.courseProgress === 'object' ? value.courseProgress : {}, transcripts: Array.isArray(value.transcripts) ? value.transcripts.slice(-20) : [] };
  } catch { return freshStats(); }
}
function saveStats() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); } catch { /* App remains usable if storage is unavailable. */ } }
function renderStats() {
  $('#grammar-answered').textContent = stats.answered;
  $('#grammar-correct').textContent = stats.correct;
  $('#grammar-incorrect').textContent = stats.incorrect;
  $('#stat-accuracy').textContent = stats.answered ? Math.round(stats.correct / stats.answered * 100) : 0;
  $('#stat-sessions').textContent = stats.sessions;
  $('#stat-speaking-sessions').textContent = stats.speakingSessions;
  $('#stat-grammar-exercises').textContent = stats.answered;
  $('#stat-speaking-attempts').textContent = stats.speakingAttempts;
  $('#stat-questions-practiced').textContent = stats.speakingAttempts;
  $('#stat-average-words').textContent = `${stats.speakingAttempts ? Math.round(stats.totalWords / stats.speakingAttempts) : 0} words`;
  renderWeaknesses();
  renderCourseProgress();
}
function navigate(view) {
  if (!document.querySelector(`#view-${view}`)) return;
  if (activeView === 'course' && view !== 'course') stopCourseNarration(true);
  if (activeView === 'tts' && view !== 'tts') stopNarrationEngine();
  if (activeView === view) { $('#mobile-menu').setAttribute('aria-expanded', 'false'); $('.sidebar').classList.remove('open'); return; }
  if (activeView === 'speaking' && view !== 'speaking' && speakingIsRecording) stopSpeaking();
  if (activeView === 'mock' && view !== 'mock' && mockIsRecording) stopMockRecording();
  activeView = view;
  $$('.view').forEach(section => section.classList.toggle('active', section.id === `view-${view}`));
  $$('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  const names = { home: 'Home', interview: 'Interview practice', course: 'Intensive Course', tts: 'Text to Speech', grammar: 'Grammar practice', speaking: 'Speaking practice', mock: 'Mock interview', progress: 'Progress' };
  $('#breadcrumb').innerHTML = `Your workspace <span>/</span> ${names[view]}`;
  $('#mobile-menu').setAttribute('aria-expanded', 'false');
  $('.sidebar').classList.remove('open');
  if (view === 'interview' || view === 'grammar' || view === 'speaking') { stats.sessions += 1; saveStats(); }
  if (view === 'speaking') { stats.speakingSessions += 1; saveStats(); }
  if (view === 'progress') renderStats();
  if (view === 'course') renderCourse();
  if (view === 'tts') initializeTextToSpeechTool();
  if (view === 'speaking') renderSpeaking();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderInterview() {
  const item = interviewQuestions[interviewIndex];
  const savedAnswer = getInterviewAnswer(item.question);
  $('#interview-question').textContent = item.question;
  $('#interview-count').textContent = `QUESTION ${interviewIndex + 1} OF ${interviewQuestions.length}`;
  $('#interview-progress').style.width = `${((interviewIndex + 1) / interviewQuestions.length) * 100}%`;
  $('#interview-answer').textContent = item.answer;
  $('#interview-model-answer').classList.add('hidden');
  $('#show-answer').textContent = '◉  Show Model Answer';
  $('#vocab-intro').textContent = item.intro;
  $('#vocab-list').innerHTML = item.words.map(([word, definition]) => `<div class="vocab-item"><b>${escapeHTML(word)}</b>${escapeHTML(definition)}</div>`).join('');
  $('#interview-user-answer').value = savedAnswer?.answer || '';
  $('#interview-save-status').textContent = savedAnswer?.answer ? 'Your draft is saved on this device.' : 'Your draft will be saved on this device as you type.';
  const feedback = $('#interview-feedback');
  if (savedAnswer?.checkedAnswer && savedAnswer.checkedAnswer === savedAnswer.answer) {
    feedback.innerHTML = renderInterviewFeedback(analyzeWrittenInterviewAnswer(savedAnswer.checkedAnswer, item));
    feedback.classList.remove('hidden');
    $('.model-answer-section').classList.remove('hidden');
  } else {
    feedback.innerHTML = '';
    feedback.classList.add('hidden');
    $('.model-answer-section').classList.add('hidden');
  }
}
function getInterviewAnswer(question) { return stats.interviewAnswers.find(answer => answer.question === question); }
function saveInterviewDraft() {
  const question = interviewQuestions[interviewIndex].question;
  const answer = $('#interview-user-answer').value;
  let saved = getInterviewAnswer(question);
  if (!saved) { saved = { question, answer: '', checkedAnswer: '', issues: [], categories: [], suggestions: [] }; stats.interviewAnswers.push(saved); }
  saved.answer = answer;
  saveStats();
  $('#interview-save-status').textContent = 'Draft saved on this device.';
  if (saved.checkedAnswer !== answer) {
    $('#interview-feedback').classList.add('hidden');
    $('.model-answer-section').classList.add('hidden');
    $('#interview-model-answer').classList.add('hidden');
    $('#show-answer').textContent = '◉  Show Model Answer';
  }
}
function categoryForInterviewIssue(issue) {
  const title = issue.title.toLowerCase();
  if (/article|countable|artículo/.test(title)) return 'Articles';
  if (/preposition|verb.*preposition|preposición/.test(title)) return 'Prepositions';
  if (/present perfect/.test(title)) return 'Present Perfect vs Past Simple';
  if (/will|future|futuro/.test(title)) return 'Will vs Going to';
  if (/\bdid\b|past simple/.test(title)) return 'Past Simple';
  if (/have\/has|concordancia/.test(title)) return 'Have / Has / Had';
  if (/question|pregunta/.test(title)) return /present simple/.test(title) ? 'Present Simple vs Continuous' : 'Questions and answers';
  if (/adverb|adverbio|order|orden|verbo be/.test(title)) return 'Word order';
  return 'Present Simple vs Continuous';
}
function analyzeWrittenInterviewAnswer(text, question) {
  const analysis = analyzeResponse(text, question, 0);
  const issues = analysis.grammar.map(issue => ({ ...issue, category: categoryForInterviewIssue(issue) }));
  const addIssue = (pattern, category, title, fix) => {
    const match = text.match(pattern);
    if (match && !issues.some(issue => issue.example.toLowerCase() === match[0].toLowerCase())) issues.push({ example: match[0], category, title, fix });
  };
  addIssue(/\b(?:i|you|we|they)\s+(?:works|helps|handles|solves|supports|manages|communicates)\b/i, 'Present Simple vs Continuous', 'With I/you/we/they, use the base verb in the Present Simple.', 'For example: “I help customers” (not “I helps customers”).');
  addIssue(/\b(?:i|he|she|it|we|they|you)\s+am\s+(?:agree|understand|know|believe|want|need|like|prefer)\b/i, 'Present Simple vs Continuous', 'This verb does not use “am” in this structure.', 'For example: “I agree” or “I understand.”');
  const grammarCategories = [...new Set(issues.map(issue => issue.category))];
  const suggestions = [];
  if (analysis.words < 10) suggestions.push({ category: 'Clarity', text: 'For a more complete interview answer, consider adding one specific action you took and its result.' });
  else if (Math.max(...text.split(/[.!?]+/).map(sentence => wordCount(sentence)), 0) > 38) suggestions.push({ category: 'Clarity', text: 'One sentence is quite long. You could split it into shorter sentences to make the sequence of ideas easier to follow.' });
  else suggestions.push({ category: 'Clarity', text: 'No specific clarity issue was detected by the local checks. A clear answer usually gives a relevant example and its result.' });
  const informal = text.match(/\b(gonna|wanna|kinda|sorta|yeah|stuff)\b/i);
  suggestions.push(informal
    ? { category: 'Professional interview language', text: `“${informal[0]}” can sound conversational. In a formal interview, consider “going to”, “want to”, “somewhat”, or a more specific noun, depending on your meaning.` }
    : { category: 'Professional interview language', text: 'No obviously informal wording was flagged. You can make the answer more specific with a brief example, action, and result.' });
  suggestions.push({ category: 'Naturalness', text: 'There are many correct ways to express the same idea. The checker reports only patterns it can identify; read your answer aloud and keep wording that sounds natural to you.' });
  return { issues, suggestions, grammarCategories };
}
function renderInterviewFeedback(analysis) {
  const issueContent = analysis.issues.length
    ? `<ul class="written-issue-list">${analysis.issues.map(issue => `<li><span class="written-category">${escapeHTML(issue.category)}</span><b>“${escapeHTML(issue.example)}”</b><p>${escapeHTML(issue.title)} ${escapeHTML(issue.fix)}</p></li>`).join('')}</ul>`
    : '<p class="no-written-issues">No clear grammar issue was detected by the current local rules. This does not guarantee that every sentence is correct.</p>';
  const suggestions = analysis.suggestions.map(suggestion => `<div class="written-suggestion"><b>${escapeHTML(suggestion.category)}</b><p>${escapeHTML(suggestion.text)}</p></div>`).join('');
  return `<h2>Your Answer Feedback</h2><p class="written-feedback-note">These are careful suggestions, not a score. Different wording can be correct; only specific patterns are flagged as grammar issues.</p><h3>Grammar, word order, verb tense, articles &amp; prepositions</h3>${issueContent}<div class="written-suggestions">${suggestions}</div>`;
}
function checkInterviewAnswer() {
  const text = $('#interview-user-answer').value.trim();
  const feedback = $('#interview-feedback');
  if (!text) {
    feedback.innerHTML = '<p class="no-written-issues">Write an answer above before checking it.</p>';
    feedback.classList.remove('hidden');
    return;
  }
  const question = interviewQuestions[interviewIndex].question;
  const analysis = analyzeWrittenInterviewAnswer(text, interviewQuestions[interviewIndex]);
  let saved = getInterviewAnswer(question);
  if (!saved) { saved = { question, answer: text, checkedAnswer: '', issues: [], categories: [], suggestions: [] }; stats.interviewAnswers.push(saved); }
  if (saved.checkedAnswer !== text) {
    for (const category of analysis.grammarCategories) stats.grammarWeaknesses[category] = (stats.grammarWeaknesses[category] || 0) + 1;
  }
  Object.assign(saved, { answer: text, checkedAnswer: text, issues: analysis.issues, categories: analysis.grammarCategories, suggestions: analysis.suggestions, checkedAt: new Date().toISOString() });
  saveStats();
  feedback.innerHTML = renderInterviewFeedback(analysis);
  feedback.classList.remove('hidden');
  $('.model-answer-section').classList.remove('hidden');
  $('#interview-save-status').textContent = 'Answer and feedback saved on this device.';
  renderStats();
}
function getCourseModule() { return window.INTENSIVE_COURSE_MODULES.find(module => module.id === activeCourseModuleId) || window.INTENSIVE_COURSE_MODULES[0]; }
function getCourseProgress(module = getCourseModule()) {
  if (!stats.courseProgress[module.id] || typeof stats.courseProgress[module.id] !== 'object') {
    stats.courseProgress[module.id] = { started: false, currentStep: 0, completedLessons: [], exercises: 0, correct: 0, incorrect: 0, weaknesses: {}, activityAnswers: {}, examDraft: {}, examCompleted: false, examAttempts: 0, examScore: null, examCorrect: 0, examIncorrect: 0, examCategories: [], examAnswers: [] };
  }
  const progress = stats.courseProgress[module.id];
  progress.completedLessons = Array.isArray(progress.completedLessons) ? progress.completedLessons : [];
  progress.activityAnswers = progress.activityAnswers && typeof progress.activityAnswers === 'object' ? progress.activityAnswers : {};
  progress.examDraft = progress.examDraft && typeof progress.examDraft === 'object' ? progress.examDraft : {};
  progress.weaknesses = progress.weaknesses && typeof progress.weaknesses === 'object' ? progress.weaknesses : {};
  progress.currentStep = Math.max(0, Math.min(Number(progress.currentStep) || 0, module.lessons.length - 1));
  return progress;
}
function renderCourseProgress() {
  const target = $('#course-progress-detail');
  if (!target || !window.INTENSIVE_COURSE_MODULES?.length) return;
  const module = getCourseModule();
  const progress = getCourseProgress(module);
  const lessonsTotal = module.lessons.length - 1;
  const percent = Math.round(progress.completedLessons.length / lessonsTotal * 100);
  const weaknesses = Object.entries(progress.weaknesses).filter(([, count]) => count > 0).sort((a, b) => b[1] - a[1]);
  const weaknessLine = weaknesses.length ? weaknesses.map(([name]) => escapeHTML(name)).join(' · ') : 'None detected yet';
  if (!progress.started) {
    target.innerHTML = '<p>Not started yet. Your lesson and exam progress will appear here.</p>';
    return;
  }
  target.innerHTML = `<div class="course-progress-top"><div><b>${percent}%</b><span>Progress</span></div><div class="course-progress-track"><span style="width:${percent}%"></span></div></div><div class="course-progress-grid"><span>${progress.completedLessons.length}/${lessonsTotal} lessons completed</span><span>${progress.exercises} practice/exam responses · ${progress.correct} correct · ${progress.incorrect} incorrect</span><span>Final exam: ${progress.examCompleted ? `${progress.examScore}% · ${progress.examAttempts} attempt(s)` : 'not completed'}</span><span>Weaknesses detected: ${weaknessLine}</span></div>`;
}
function renderCourse() {
  const module = getCourseModule();
  if (!module) return;
  const progress = getCourseProgress(module);
  if (!progress.started) { progress.started = true; stats.sessions += 1; saveStats(); renderStats(); }
  const step = module.lessons[progress.currentStep];
  if (step.type !== 'interactive') stopCourseNarration(true);
  const totalLessons = module.lessons.length - 1;
  const percent = Math.round(progress.completedLessons.length / totalLessons * 100);
  const root = $('#course-module-root');
  const guidedStep = ['interactive', 'theory', 'visual'].includes(step.type);
  root.innerHTML = `<div class="course-shell"><div class="course-module-overview"><div><span class="pill pill-course">INTENSIVE COURSE · MODULE 1</span><h2>${escapeHTML(module.title)}</h2><p>Progress saves on this device. Move through the lesson in order, and return to any completed step.</p></div><div class="course-percent"><strong>${percent}%</strong><span>complete</span></div></div><div class="course-progress-track"><span style="width:${percent}%"></span></div><div class="course-step-meta"><span>LESSON ${progress.currentStep + 1} OF ${module.lessons.length}</span><b>${escapeHTML(step.title)}</b></div><article class="course-lesson-card"><div class="course-lesson-content">${renderCourseStep(module, progress, step)}</div>${guidedStep ? '' : `<div class="course-step-footer"><span id="course-step-status" aria-live="polite">${progress.completedLessons.includes(step.id) ? 'You have completed this lesson. You can review it or continue.' : 'Take your time. You can go back whenever you need.'}</span><div class="course-navigation"><button class="button button-secondary" id="course-back"${progress.currentStep === 0 ? ' disabled' : ''}>← Previous</button>${step.type === 'exam' ? '' : `<button class="button button-primary" id="course-next">${progress.currentStep === 0 ? 'Start module' : progress.currentStep === module.lessons.length - 3 ? 'Start final exam' : 'Next step'} →</button>`}</div></div>`}</article></div>`;
  $('#course-back')?.addEventListener('click', () => { progress.currentStep = Math.max(0, progress.currentStep - 1); courseLessonStage = 0; saveStats(); renderCourse(); });
  const next = $('#course-next');
  if (next) next.addEventListener('click', () => advanceCourse(module, progress, step));
  $$('.course-visual-control').forEach(button => button.addEventListener('click', () => { progress.visualMode = button.dataset.mode; renderCourse(); }));
  $$('.course-example-reveal').forEach(button => button.addEventListener('click', () => {
    const explanation = $(`#${button.dataset.target}`);
    const hidden = explanation.classList.toggle('hidden');
    button.textContent = hidden ? 'Why this tense?' : 'Hide explanation';
  }));
  $$('.course-activity-check').forEach(button => button.addEventListener('click', () => checkCourseActivity(module, progress, button.dataset.kind, Number(button.dataset.index))));
  const examSubmit = $('#course-exam-submit');
  if (examSubmit) examSubmit.addEventListener('click', () => submitCourseExam(module, progress));
  const reviewExam = $('#course-review-exam');
  if (reviewExam) reviewExam.addEventListener('click', () => { progress.currentStep = module.lessons.findIndex(lesson => lesson.type === 'exam'); saveStats(); renderCourse(); });
  if (step.type === 'interactive') bindCourseInteractiveLesson();
  else if (step.type === 'theory' || step.type === 'visual') bindCourseGuidedLesson();
}
function renderCourseStep(module, progress, step) {
  switch (step.type) {
    case 'introduction': return `<p class="course-kicker">A CLEAR WAY TO TALK ABOUT YOUR EXPERIENCE</p><h2>Choose the tense that matches the meaning.</h2><p class="course-copy">En esta clase vas a aprender a distinguir entre una experiencia terminada en un período pasado y una experiencia que sigue teniendo relación con el presente. No se trata de memorizar una palabra señal: se trata de entender qué querés comunicar.</p><div class="course-outcomes"><div><b>01</b><span>Understand when a past period is finished.</span></div><div><b>02</b><span>Connect experience with the present.</span></div><div><b>03</b><span>Use both forms naturally in interview answers.</span></div></div><div class="course-callout"><b>La pregunta clave:</b> ¿Estoy ubicando la acción en un momento pasado terminado, o estoy hablando de una experiencia conectada con ahora?</div>`;
    case 'interactive': return renderCourseInteractiveLesson();
    case 'theory': case 'visual': return renderCourseGuidedStage(module, step);
    case 'examples': return `<p class="course-kicker">EXAMPLES IN CONTEXT</p><h2>Notice what each sentence tells you.</h2><div class="course-example-grid">${module.examples.map((example, index) => `<article class="course-example-card ${example.label === 'PAST SIMPLE' ? 'past-card' : 'perfect-card'}"><span class="tense-label">${example.label}</span><h3>${highlightCourseCues(example.sentence)}</h3><button class="text-button course-example-reveal" data-target="course-example-${index}">Why this tense?</button><p class="course-example-explanation hidden" id="course-example-${index}">${escapeHTML(example.explanation)}</p></article>`).join('')}</div>`;
    case 'guided': return renderCourseActivities(module, progress, step, module.guidedExercises, 'guided');
    case 'practice': return renderCourseActivities(module, progress, step, module.practiceExercises, 'practice');
    case 'interview': return renderCourseActivities(module, progress, step, module.interviewExercises, 'interview');
    case 'exam': return renderCourseExam(module, progress);
    case 'results': return renderCourseResults(module, progress);
    default: return '<p>Lesson content is not available yet.</p>';
  }
}
function highlightCourseCues(text) {
  return escapeHTML(text).replace(/\b(yesterday|last\s+(?:week|year|month)|in\s+20\d{2}|\w+\s+(?:days?|weeks?|months?|years?)\s+ago|ever|never|already|yet|just|since|for)\b/gi, '<mark class="course-cue">$1</mark>');
}
const appCourseNarrationScenes = [
  { title: 'Introduction', kicker: 'WELCOME', kind: 'opening', body: '<p>Past Simple vs Present Perfect</p>' },
  { title: 'Past Simple · meaning', kicker: 'A FINISHED PAST PERIOD', kind: 'past', body: '<p>Past Simple presents an action inside a finished past time.</p>' },
  { title: 'Past Simple · examples', kicker: 'A FINISHED TIME OR PERIOD', kind: 'past', body: '<p>I moved to another city in 2017. · I worked there for five months.</p>' },
  { title: 'Present Perfect · meaning', kicker: 'EXPERIENCE UNTIL NOW', kind: 'perfect', body: '<p>Present Perfect connects experience or a continuing situation with now.</p>' },
  { title: 'Present Perfect · examples', kicker: 'EXPERIENCE AND CONTINUITY', kind: 'perfect', body: '<p>I have worked with customers. · I have lived here since 2017.</p>' },
  { title: 'Direct comparison', kicker: 'THE MEANING CHANGES', kind: 'compare', body: '<p>I worked there in 2020. · I have worked in customer support.</p>' },
  { title: 'How do I choose?', kicker: 'A QUESTION, NOT A SHORTCUT', kind: 'decision', body: '<p>Finished time? Past Simple. Experience until now? Present Perfect. Signal words are clues, not absolute rules.</p>' },
  { title: 'Interview application', kicker: 'PUT IT INTO AN ANSWER', kind: 'perfect', body: '<p>I worked in technical support in 2020, and I have helped customers solve technical problems.</p>' },
  { title: 'Mini practice', kicker: 'CHOOSE THE MEANING', kind: 'decision', body: '<p>I ___ with international customers last year.</p>' }
];
const watchLearnSceneSteps = {
  0: [
    { type: 'explanation', title: 'What this class will help you do', segment: { language: 'es', text: 'En esta clase vas a elegir entre Past Simple y Present Perfect según el significado: un período pasado terminado o una experiencia conectada con ahora.' }, visual: '<div class="lesson-title-card"><span>INTENSIVE COURSE · MODULE 1</span><h3>PAST SIMPLE <i>vs</i><br>PRESENT PERFECT</h3><p>Meaning first. Grammar follows.</p></div>' }
  ],
  1: [
    { type: 'explanation', title: 'PAST SIMPLE · WHEN?', segment: { language: 'en', text: 'Ask yourself: am I talking about when an action happened? Past Simple presents the action inside a finished past time.' }, visual: '<div class="watch-concept-note lesson-past"><b>PAST SIMPLE · WHEN?</b><p>Am I talking about when it happened?</p><small>An action presented in a finished past period.</small></div>' },
    { type: 'example', title: 'A FINISHED TIME', segment: { language: 'en', text: 'I worked at a support company in 2020.' }, visual: '<article class="watch-example-card lesson-past"><span>PAST SIMPLE</span><h3>I worked at a support company in 2020.</h3><p>“In 2020” names a finished time.</p></article>' },
    { type: 'concept', title: 'THE TIME IS OVER', segment: { language: 'en', text: 'The year 2020 is before now and has ended. That finished timeline is why this sentence uses Past Simple.' }, visual: `<div class="watch-concept-note lesson-past"><b>FINISHED TIME</b>${renderLessonTimeline('past', '2020')}<p>2020 ended. The action is located before now.</p></div>` }
  ],
  2: [
    { type: 'example', title: 'A FINISHED POINT', segment: { language: 'en', text: 'I moved to another city in 2017.' }, visual: '<article class="watch-example-card lesson-past"><span>PAST SIMPLE · FINISHED POINT</span><h3>I moved to another city in 2017.</h3></article>' },
    { type: 'example', title: 'A FINISHED PERIOD', segment: { language: 'en', text: 'I worked there for five months.' }, visual: '<article class="watch-example-card lesson-past"><span>PAST SIMPLE · FINISHED PERIOD</span><h3>I worked there for five months.</h3><p>Here, the five-month job has ended.</p></article>' }
  ],
  3: [
    { type: 'explanation', title: 'PRESENT PERFECT · EXPERIENCE UNTIL NOW', segment: { language: 'es', text: 'Present Perfect presenta una experiencia acumulada hasta ahora o una situación conectada con el presente, sin ubicarla en una fecha pasada terminada.' }, visual: '<div class="watch-concept-note lesson-perfect"><b>PRESENT PERFECT · EXPERIENCE → NOW</b><p>Past experience that matters in the present.</p></div>' },
    { type: 'example', title: 'RELEVANT EXPERIENCE', segment: { language: 'en', text: 'I have worked in technical support.' }, visual: '<article class="watch-example-card lesson-perfect"><span>PRESENT PERFECT</span><h3>I have worked in technical support.</h3><p>No specific finished date is given.</p></article>' },
    { type: 'concept', title: 'CONNECTED TO NOW', segment: { language: 'es', text: 'La línea representa una experiencia que llega hasta el presente. No decimos cuándo ocurrió cada etapa.' }, visual: `<div class="watch-concept-note lesson-perfect"><b>EXPERIENCE UNTIL NOW</b>${renderLessonTimeline('experience', 'UNTIL NOW')}<p>The experience is relevant now; no finished date is named.</p></div>` }
  ],
  4: [
    { type: 'example', title: 'CUSTOMER EXPERIENCE', segment: { language: 'en', text: 'I have worked with customers.' }, visual: '<article class="watch-example-card lesson-perfect"><span>PRESENT PERFECT · EXPERIENCE</span><h3>I have worked with customers.</h3></article>' },
    { type: 'example', title: 'A SITUATION THAT CONTINUES', segment: { language: 'en', text: 'I have lived in this city since 2017.' }, visual: '<article class="watch-example-card lesson-perfect"><span>PRESENT PERFECT · STILL TRUE NOW</span><h3>I have lived in this city since 2017.</h3><p>I still live here now.</p></article>' }
  ],
  5: [
    { type: 'comparison', title: 'SAME TOPIC · DIFFERENT FOCUS', segment: { language: 'es', text: 'La primera oración ubica el trabajo en 2020, un momento terminado. La segunda habla de experiencia en customer support hasta ahora y no especifica cuándo.' }, visual: '<div class="watch-comparison"><article class="lesson-past"><span>PAST SIMPLE · WHEN?</span><h3>I worked there in 2020.</h3><b>A specific finished time</b></article><i>versus</i><article class="lesson-perfect"><span>PRESENT PERFECT · EXPERIENCE</span><h3>I have worked in customer support.</h3><b>Experience up to now</b></article></div>' }
  ],
  6: [
    { type: 'concept', title: 'ASK WHAT YOU MEAN', segment: { language: 'en', text: 'If you mention a finished past time, choose Past Simple. If you talk about experience up to now, Present Perfect may fit.' }, visual: '<div class="watch-comparison"><article class="lesson-past"><span>WHEN DID IT HAPPEN?</span><h3>Finished time → Past Simple</h3></article><i>or</i><article class="lesson-perfect"><span>WHAT IS MY EXPERIENCE?</span><h3>Until now → Present Perfect</h3></article></div>' },
    { type: 'explanation', title: 'SIGNAL WORDS ARE CLUES', segment: { language: 'es', text: 'Ever, never, since y for suelen aparecer con Present Perfect, pero no son reglas automáticas. For también puede describir un período ya terminado. El contexto y el significado deciden.' }, visual: '<div class="watch-concept-note"><b>CLUES, NOT ABSOLUTE RULES</b><div class="signal-note"><span>ever</span><span>never</span><span>since</span><span>for</span></div><p>Check whether the period is finished or still connected to now.</p></div>' }
  ],
  7: [
    { type: 'example', title: 'A NATURAL INTERVIEW ANSWER', segment: { language: 'en', text: 'I worked in technical support in 2020, and I have helped customers solve technical problems.' }, visual: '<article class="watch-example-card lesson-perfect"><span>INTERVIEW APPLICATION</span><h3>I worked in technical support in 2020, and I have helped customers solve technical problems.</h3><p>Finished job period · relevant experience with customers</p></article>' }
  ],
  8: [
    { type: 'check', title: 'Choose the tense', segment: { language: 'es', text: 'El año pasado es un período terminado. Elegí la forma verbal que presenta la acción como pasada y terminada.' }, requiresInteraction: true, visual: '<div class="watch-check"><p>I ___ with international customers last year.</p><div class="watch-check-options"><button class="button button-secondary" data-watch-answer="worked">worked</button><button class="button button-secondary" data-watch-answer="have worked">have worked</button></div><p id="watch-check-feedback" class="watch-check-feedback" aria-live="polite">“Last year” is a finished time. Choose the matching form.</p></div>' }
  ]
};function getWatchLearnSteps(sceneIndex = courseLessonScene, scene = appCourseNarrationScenes[sceneIndex]) {
  if (watchLearnSceneSteps[sceneIndex]) return watchLearnSceneSteps[sceneIndex];
  const segments = currentCourseNarrationSegments(scene);
  return segments.map((segment, index) => ({ type: segment.type || (segment.language === 'en' ? 'example' : 'explanation'), title: segment.type === 'example' || segment.language === 'en' ? 'EXAMPLE' : 'EXPLANATION', segment, target: segment.target, requiresContinue: Boolean(scene?.continueAfterNarration && index === segments.length - 1) }));
}
function getCourseGuidedSlides(module, step) {
  if (step.type === 'theory') return [
    { title: 'PAST SIMPLE · WHEN?', language: 'en', text: 'Use Past Simple to present an action as finished in a past period that has ended.', visual: '<article class="watch-concept-note lesson-past"><b>PAST SIMPLE · WHEN?</b><p>An action presented in a finished past period.</p></article>' },
    { title: 'A SPECIFIC FINISHED TIME', language: 'en', text: 'I moved to another city in 2017. The year tells us when, and that year has ended.', visual: `<article class="watch-example-card lesson-past"><span>PAST SIMPLE</span><h3>${escapeHTML(module.theory.past.examples[1])}</h3><p>2017 is a specific, finished time.</p></article>` },
    { title: 'PAST TIME CLUES', language: 'es', text: 'Yesterday, last year e in 2020 pueden indicar un tiempo terminado. Son pistas: el contexto sigue definiendo el significado.', visual: `<div class="watch-concept-note lesson-past"><b>PAST SIMPLE · COMMON CLUES</b><div class="signal-note">${module.theory.past.signals.slice(0, 5).map(word => `<span>${escapeHTML(word)}</span>`).join('')}</div><p>Clues help; context decides.</p></div>` },
    { title: 'PRESENT PERFECT · EXPERIENCE UNTIL NOW', language: 'es', text: 'Usamos Present Perfect para hablar de experiencia acumulada hasta ahora, sin especificar un momento pasado terminado.', visual: '<div class="watch-concept-note lesson-perfect"><b>EXPERIENCE → NOW</b><p>A past experience that is relevant in the present.</p></div>' },
    { title: 'BUILD THE FORM', language: 'en', text: 'Present Perfect uses have or has plus a past participle. In this example, have worked is the verb form.', visual: `<div class="watch-concept-note lesson-perfect"><b>HAVE / HAS + PAST PARTICIPLE</b><h3>${escapeHTML(module.theory.perfect.examples[0])}</h3><p>have + worked</p></div>` },
    { title: 'SIGNAL WORDS ARE NOT RULES', language: 'es', text: 'Ever, never, since y for suelen aparecer con Present Perfect. Son pistas, no reglas absolutas; for también puede acompañar un período terminado.', visual: `<div class="watch-concept-note lesson-perfect"><b>COMMON PRESENT PERFECT CLUES</b><div class="signal-note">${module.theory.perfect.signals.map(word => `<span>${escapeHTML(word)}</span>`).join('')}</div><p>Choose by meaning, not by one word alone.</p></div>` }
  ];
  return [
    { title: 'PAST SIMPLE · FINISHED TIME', language: 'en', text: 'The timeline ends before now. I worked there in 2020 names a specific finished period.', visual: `<div class="watch-concept-note lesson-past"><b>PAST SIMPLE · FINISHED TIME</b>${renderLessonTimeline('past', '2020')}<h3>I worked there in 2020.</h3></div>` },
    { title: 'PRESENT PERFECT · EXPERIENCE UNTIL NOW', language: 'en', text: 'This timeline connects a past experience with now. I have worked in customer support does not name a finished date.', visual: `<div class="watch-concept-note lesson-perfect"><b>PRESENT PERFECT · EXPERIENCE UNTIL NOW</b>${renderLessonTimeline('experience', 'UNTIL NOW')}<h3>I have worked in customer support.</h3></div>` },
    { title: 'ONE KEY DIFFERENCE', language: 'es', text: 'La primera oración responde cuándo y ubica el hecho en un tiempo terminado. La segunda habla de experiencia hasta ahora sin decir cuándo. El significado cambia, y por eso cambia el tiempo verbal.', visual: '<div class="watch-comparison"><article class="lesson-past"><span>WHEN? · PAST SIMPLE</span><h3>I worked there in 2020.</h3><b>Finished time</b></article><i>versus</i><article class="lesson-perfect"><span>EXPERIENCE? · PRESENT PERFECT</span><h3>I have worked in customer support.</h3><b>Connected to now</b></article></div>' }
  ];
}
function renderCourseGuidedStage(module, step) {
  const slides = getCourseGuidedSlides(module, step);
  courseLessonStage = Math.max(0, Math.min(courseLessonStage, slides.length - 1));
  const slide = slides[courseLessonStage];
  const visual = `<p class="course-kicker">${escapeHTML(step.title.toUpperCase())} · ${courseLessonStage + 1} / ${slides.length}</p><h2>${escapeHTML(slide.title)}</h2><div class="watch-stage-content">${slide.visual}</div>`;
  return `<section class="interactive-lesson course-guided-lesson" aria-label="${escapeHTML(step.title)}"><article class="interactive-scene scene-${slide.language === 'en' && slide.title.includes('PAST') ? 'past' : slide.title.includes('PRESENT') || slide.title.includes('SIGNAL') ? 'perfect' : 'compare'}">${visual}</article>${renderCourseNarrationPanel(slide)}${renderCourseAudioControls()}<div class="interactive-controls watch-navigation-controls"><button class="button button-secondary" id="lesson-previous">← Previous</button><button class="button button-primary" id="lesson-next">Next →</button></div></section>`;
}
function renderCourseNarrationPanel(slide) {
  const subtitle = courseLessonSubtitle || 'Captions will appear here during narration.';
  const language = courseLessonSubtitle ? courseLessonSubtitleLang : 'en';
  return `<section class="lesson-subtitle-panel" aria-label="Narration and captions"><div><span class="lesson-audio-indicator" aria-hidden="true">🔊</span><b id="lesson-narration-status" aria-live="polite">${escapeHTML(courseNarrationStatus)}</b><label for="lesson-voice-speed">Speed</label><select id="lesson-voice-speed" aria-label="Narration speed"><option value="0.75"${courseVoiceRate === .75 ? ' selected' : ''}>0.75×</option><option value="1"${courseVoiceRate === 1 ? ' selected' : ''}>1×</option><option value="1.25"${courseVoiceRate === 1.25 ? ' selected' : ''}>1.25×</option><option value="1.5"${courseVoiceRate === 1.5 ? ' selected' : ''}>1.5×</option></select></div><p id="lesson-subtitle" class="lesson-subtitle" lang="${language}">${escapeHTML(subtitle)}</p></section>`;
}
function renderCourseAudioControls() {
  return `<div class="interactive-controls watch-audio-controls"><div class="interactive-playback"><button class="button button-primary" id="lesson-play">▶ Play</button><button class="button button-secondary" id="lesson-pause">⏸ Pause</button><button class="button button-secondary" id="lesson-resume">▶ Resume</button><button class="button button-secondary" id="lesson-replay">↻ Replay</button><button class="button button-secondary" id="lesson-stop">■ Stop</button></div></div>`;
}
function renderCourseInteractiveLesson() {
  const scenes = appCourseNarrationScenes;
  courseLessonScene = Math.max(0, Math.min(courseLessonScene, scenes.length - 1));
  const scene = scenes[courseLessonScene];
  const steps = getWatchLearnSteps(courseLessonScene, scene);
  courseLessonStage = Math.max(0, Math.min(courseLessonStage, steps.length - 1));
  const stage = steps[courseLessonStage];
  const visual = stage.type === 'check' ? renderWatchMiniCheck() : stage.visual || renderWatchLearnTarget(scene, stage.target) || `<p class="watch-stage-text">${escapeHTML(stage.segment?.text || '')}</p>`;
  const stageLabel = `${String(stage.type || 'explanation').replace('-', ' ').toUpperCase()} · ${courseLessonStage + 1} / ${steps.length}`;
  const savedWatchCheck = getCourseProgress().activityAnswers['watch-learn-scene-09-mini-check'];
  const canAdvanceStage = !stage.requiresInteraction || Boolean(savedWatchCheck);
  const partProgress = courseLessonStage + 1;
  return `<section class="interactive-lesson" aria-label="Guided class"><div class="interactive-player-heading"><div><p class="course-kicker">WATCH &amp; LEARN · MODULE 1</p><h2>Past Simple vs Present Perfect</h2></div><span class="interactive-scene-count">PART ${courseLessonScene + 1} OF ${scenes.length}</span></div><div class="interactive-progress"><span style="width:${(courseLessonScene + 1) / scenes.length * 100}%"></span></div><div class="watch-stage-progress" aria-label="Lesson progress"><span>${partProgress} / ${steps.length}</span><div><i style="width:${partProgress / steps.length * 100}%"></i></div></div><article class="interactive-scene scene-${scene.kind}" aria-live="polite"><p class="course-kicker">${stageLabel}</p><h2>${stage.title || scene.title}</h2><div class="interactive-scene-body watch-stage-content">${visual}</div><details class="watch-full-scene"><summary>More explanation</summary>${scene.body}</details></article>${renderCourseNarrationPanel(stage.segment || { language: 'en' })}${renderCourseAudioControls()}<div class="interactive-controls watch-navigation-controls"><button class="button button-secondary" id="lesson-previous"${courseLessonScene === 0 && courseLessonStage === 0 ? '' : ''}>← Previous</button><button class="button button-primary" id="lesson-next"${canAdvanceStage ? '' : ' disabled'}>Next →</button></div><p class="interactive-hint">The narration starts with each new part. It never moves the lesson forward by itself.</p></section>`;
}
function renderWatchLearnTarget(scene, targets) {
  if (!targets) return '';
  const holder = document.createElement('div');
  holder.innerHTML = scene.body;
  return targets.split(/\s+/).map(target => holder.querySelector(`[data-lesson-target~="${CSS.escape(target)}"]`)?.outerHTML || '').join('');
}
function renderWatchMiniCheck() {
  const saved = getCourseProgress().activityAnswers['watch-learn-scene-09-mini-check'];
  const feedback = saved ? (saved.isCorrect ? 'Correct. “Last year” is a finished time, so use Past Simple.' : 'Not quite. “Last year” is finished; the correct form is “worked”.') : 'Choose the form that matches the finished time.';
  return `<div class="watch-check"><p>I ___ with international customers last year.</p><div class="watch-check-options"><button class="button button-secondary" data-watch-answer="worked"${saved ? ' disabled' : ''}>worked</button><button class="button button-secondary" data-watch-answer="have worked"${saved ? ' disabled' : ''}>have worked</button></div><p id="watch-check-feedback" class="watch-check-feedback${saved?.isCorrect ? ' is-correct' : saved ? ' is-incorrect' : ''}" aria-live="polite">${feedback}</p></div>`;
}
function renderLessonTimeline(type, label, target = '') {
  return `<div class="lesson-timeline ${type === 'experience' ? 'lesson-timeline-experience' : 'lesson-timeline-past'}"${target ? ` data-lesson-target="${target}"` : ''}><div><span>PAST</span><span>NOW</span></div><div class="lesson-timeline-line"><i></i></div><b>${escapeHTML(label)}</b></div>`;
}
function bindCourseInteractiveLesson() {
  bindCourseAudioControls();
  $('#lesson-next').addEventListener('click', () => moveGuidedCourse(1));
  $('#lesson-previous').addEventListener('click', () => moveGuidedCourse(-1));
  $('#lesson-voice-speed').addEventListener('change', event => { courseVoiceRate = Number(event.target.value) || 1; });
  playCourseStage();
  $$('[data-watch-answer]').forEach(button => button.addEventListener('click', () => {
    const progress = getCourseProgress();
    const key = 'watch-learn-scene-09-mini-check';
    if (progress.activityAnswers[key]) return;
    const isCorrect = button.dataset.watchAnswer === 'worked';
    progress.activityAnswers[key] = { response: button.dataset.watchAnswer, isCorrect, explanation: '“Last year” marks a specific finished time, so use Past Simple: worked.' };
    recordCourseExercise('Present Perfect vs Past Simple', isCorrect, progress);
    renderCourse();
  }));
}
function bindCourseAudioControls() {
  $('#lesson-play').addEventListener('click', () => playCourseStage());
  $('#lesson-pause').addEventListener('click', pauseCourseVoice);
  $('#lesson-resume').addEventListener('click', resumeCourseVoice);
  $('#lesson-replay').addEventListener('click', () => playCourseStage());
  $('#lesson-stop').addEventListener('click', () => stopCourseNarration(false));
}
function bindCourseGuidedLesson() {
  bindCourseAudioControls();
  $('#lesson-next').addEventListener('click', () => moveGuidedCourse(1));
  $('#lesson-previous').addEventListener('click', () => moveGuidedCourse(-1));
  $('#lesson-voice-speed').addEventListener('change', event => { courseVoiceRate = Number(event.target.value) || 1; });
  playCourseStage();
}
function moveGuidedCourse(direction) {
  const module = getCourseModule();
  const progress = getCourseProgress(module);
  const current = module.lessons[progress.currentStep];
  const total = current.type === 'interactive' ? getWatchLearnSteps(courseLessonScene).length : getCourseGuidedSlides(module, current).length;
  const currentStage = current.type === 'interactive' ? getWatchLearnSteps(courseLessonScene)[courseLessonStage] : null;
  if (direction > 0 && currentStage?.requiresInteraction && !progress.activityAnswers['watch-learn-scene-09-mini-check']) return;
  stopCourseNarration(true);
  if (direction > 0) {
    if (courseLessonStage < total - 1) courseLessonStage += 1;
    else if (current.type === 'interactive' && courseLessonScene < appCourseNarrationScenes.length - 1) { courseLessonScene += 1; courseLessonStage = 0; }
    else { advanceCourse(module, progress, current); return; }
  } else if (courseLessonStage > 0) courseLessonStage -= 1;
  else if (current.type === 'interactive' && courseLessonScene > 0) {
    courseLessonScene -= 1;
    courseLessonStage = getWatchLearnSteps().length - 1;
  } else {
    progress.currentStep = Math.max(0, progress.currentStep - 1);
    if (module.lessons[progress.currentStep]?.type === 'interactive') {
      courseLessonScene = appCourseNarrationScenes.length - 1;
      courseLessonStage = getWatchLearnSteps(courseLessonScene).length - 1;
    } else courseLessonStage = 0;
    saveStats();
  }
  courseLessonSubtitle = '';
  renderCourse();
}
function isCourseSpeechAvailable() { return !!(window.speechSynthesis?.speak && window.SpeechSynthesisUtterance); }
function loadCourseSpeechVoices() {
  if (!isCourseSpeechAvailable()) return [];
  try { courseSpeechVoices = window.speechSynthesis.getVoices() || []; } catch { courseSpeechVoices = []; }
  if (!courseVoiceEventsBound) {
    courseVoiceEventsBound = true;
    const refresh = () => { try { courseSpeechVoices = window.speechSynthesis.getVoices() || []; } catch { courseSpeechVoices = []; } populateTtsVoices(); };
    window.speechSynthesis.addEventListener?.('voiceschanged', refresh);
    if (!window.speechSynthesis.addEventListener) window.speechSynthesis.onvoiceschanged = refresh;
  }
  return courseSpeechVoices;
}
function getBestVoice(language = 'en') {
  const voices = loadCourseSpeechVoices();
  const norm = voice => String(voice.lang || '').toLowerCase().replace('_', '-');
  if (language === 'es') return voices.find(v => norm(v) === 'es-ar') || voices.find(v => ['es-latam','es-419','es-mx','es-cl','es-co','es-pe','es-uy'].includes(norm(v))) || voices.find(v => norm(v) === 'es-es') || voices.find(v => norm(v).startsWith('es')) || null;
  return voices.find(v => norm(v) === 'en-us') || voices.find(v => norm(v) === 'en-gb') || voices.find(v => norm(v).startsWith('en')) || null;
}
function currentCourseNarrationSegments(scene = appCourseNarrationScenes[courseLessonScene]) {
  return (scene?.segments || []).map(item => {
    const language = item.language || item.lang || 'en';
    const type = item.type || (language === 'en' ? 'example' : 'explanation');
    return { ...item, language, lang: language, audioSrc: item.audioSrc ?? null, type, pauseBefore: item.pauseBefore ?? (type === 'example' ? LESSON_TIMING.examplePauseBefore : 0), pauseAfter: item.pauseAfter ?? (type === 'example' ? LESSON_TIMING.importantPause : LESSON_TIMING.segmentPause) };
  });
}
function notifyNarration(status, options = {}) { narrationEngine.onStatus?.(status, options); }
function stopNarrationEngine() {
  narrationEngine.token++;
  if (narrationEngine.audio) { narrationEngine.audio.onended = narrationEngine.audio.onerror = null; try { narrationEngine.audio.pause(); narrationEngine.audio.currentTime = 0; } catch {} }
  narrationEngine.audio = null;
  narrationEngine.utterance = null;
  narrationEngine.paused = false;
  if (isCourseSpeechAvailable()) { try { window.speechSynthesis.cancel(); } catch {} }
}
function playNarrationSegment(segment, options = {}) {
  stopNarrationEngine();
  const token = narrationEngine.token;
  narrationEngine.segment = segment;
  narrationEngine.options = options;
  narrationEngine.onStatus = options.onStatus || null;
  const finish = () => { if (token === narrationEngine.token) { notifyNarration('Ready'); options.onEnd?.(); } };
  const speak = () => {
    if (!isCourseSpeechAvailable()) { notifyNarration('Voice unavailable · visual controls remain available'); options.onError?.('unavailable'); return; }
    try {
      const utterance = new window.SpeechSynthesisUtterance(segment.text);
      const voice = options.voice || getBestVoice(segment.language || 'en');
      utterance.lang = voice?.lang || (segment.language === 'es' ? 'es-AR' : 'en-US');
      utterance.rate = options.rate || 1;
      if (voice) utterance.voice = voice;
      utterance.onstart = () => token === narrationEngine.token && notifyNarration('Speaking', { voice: voice?.name || '' });
      utterance.onend = finish;
      utterance.onerror = event => { if (token === narrationEngine.token && !['canceled','interrupted'].includes(event.error)) { notifyNarration(`Could not speak (${event.error || 'unknown error'})`); options.onError?.(event.error); } };
      narrationEngine.utterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (error) { notifyNarration('Speech could not start'); options.onError?.(error); }
  };
  if (segment.audioSrc && typeof window.Audio === 'function') {
    const audio = new window.Audio(segment.audioSrc);
    narrationEngine.audio = audio;
    let fellBack = false;
    const fallbackToSpeech = () => { if (token !== narrationEngine.token || fellBack) return; fellBack = true; audio.onended = audio.onerror = null; narrationEngine.audio = null; speak(); };
    audio.onended = finish;
    audio.onerror = fallbackToSpeech;
    Promise.resolve(audio.play()).catch(fallbackToSpeech);
  } else speak();
  return token;
}
function pauseNarrationEngine() { if (narrationEngine.audio) narrationEngine.audio.pause(); else if (isCourseSpeechAvailable()) window.speechSynthesis.pause(); narrationEngine.paused = true; notifyNarration('Paused'); }
function resumeNarrationEngine() { if (!narrationEngine.paused) return; narrationEngine.paused = false; if (narrationEngine.audio) narrationEngine.audio.play().catch(() => {}); else if (isCourseSpeechAvailable()) window.speechSynthesis.resume(); notifyNarration('Speaking'); }
function replayNarration() { if (narrationEngine.segment) playNarrationSegment(narrationEngine.segment, narrationEngine.options || {}); }
function setCourseNarrationStatus(text) { courseNarrationStatus = text; const status = $('#lesson-narration-status'); if (status) status.textContent = text; }
function clearCourseNarrationHighlights() { $$('.interactive-scene .narration-highlight').forEach(element => element.classList.remove('narration-highlight')); }
function setCourseNarrationCaption(segment) {
  courseLessonSubtitle = segment.text;
  courseLessonSubtitleLang = segment.language === 'en' ? 'en-US' : 'es';
  const caption = $('#lesson-subtitle'); if (caption) { caption.textContent = segment.text; caption.lang = courseLessonSubtitleLang; }
  clearCourseNarrationHighlights();
  if (segment.target) segment.target.split(/\s+/).forEach(key => $$('.interactive-scene [data-lesson-target]').filter(el => el.dataset.lessonTarget?.split(/\s+/).includes(key)).forEach(el => el.classList.add('narration-highlight')));
}
function playCourseStage() {
  const module = getCourseModule();
  const lesson = module?.lessons[getCourseProgress(module).currentStep];
  const step = lesson?.type === 'interactive' ? getWatchLearnSteps()[courseLessonStage] : getCourseGuidedSlides(module, lesson)[courseLessonStage];
  stopNarrationEngine();
  const token = ++courseNarrationToken;
  const segment = step?.segment || (step?.text ? { language: step.language || 'en', text: step.text } : null);
  if (!segment) {
    setCourseNarrationStatus('This is a visual practice step. Choose an answer, then continue.');
    return;
  }
  setCourseNarrationCaption(segment);
  setCourseNarrationStatus(`${segment.language === 'en' ? 'English' : 'Spanish'} narration · current content only`);
  playNarrationSegment(segment, {
    rate: courseVoiceRate,
    onStatus: status => setCourseNarrationStatus(status),
    onEnd: () => {
      if (token === courseNarrationToken) setCourseNarrationStatus('Audio finished. Replay this step or continue when ready.');
    },
    onError: () => {
      if (token === courseNarrationToken) setCourseNarrationStatus('Narration unavailable. Continue with the visual lesson.');
    }
  });
}
function pauseCourseVoice() {
  pauseNarrationEngine();
  $('.interactive-lesson')?.classList.add('narration-paused');
  setCourseNarrationStatus('Paused · press Resume to continue this step.');
}
function resumeCourseVoice() {
  $('.interactive-lesson')?.classList.remove('narration-paused');
  resumeNarrationEngine();
}
function stopCourseNarration(clearCaption = false) {
  courseNarrationToken++;
  stopNarrationEngine(); clearCourseNarrationHighlights();
  $('.interactive-lesson')?.classList.remove('narration-paused');
  if (clearCaption) { courseLessonSubtitle = ''; courseLessonSubtitleLang = 'es'; const caption = $('#lesson-subtitle'); if (caption) caption.textContent = 'Captions will appear here during narration.'; }
  const play = $('#lesson-play'); if (play) play.textContent = '▶ Play';
  setCourseNarrationStatus('Narration stopped.');
}
function initializeTextToSpeechTool() {
  if (ttsInitialized) { populateTtsVoices(); return; }
  ttsInitialized = true;
  try { ttsLanguage = localStorage.getItem('english-interview-tts-language') || 'en'; ttsSpeed = Number(localStorage.getItem('english-interview-tts-speed')) || 1; } catch {}
  $('#tts-language').value = ttsLanguage;
  $('#tts-speed').value = String(ttsSpeed);
  $('#tts-language').addEventListener('change', e => { ttsLanguage = e.target.value; try { localStorage.setItem('english-interview-tts-language', ttsLanguage); } catch {} populateTtsVoices(true); });
  $('#tts-speed').addEventListener('change', e => { ttsSpeed = Number(e.target.value) || 1; try { localStorage.setItem('english-interview-tts-speed', String(ttsSpeed)); } catch {} });
  $('#tts-play').addEventListener('click', playTtsText);
  $('#tts-replay').addEventListener('click', () => { if (ttsLastSegment) playNarrationSegment(ttsLastSegment, { rate: ttsSpeed, voice: selectedTtsVoice(), onStatus: status => setTtsStatus(status), onEnd: () => setTtsStatus('Ready') }); });
  $('#tts-pause').addEventListener('click', () => { pauseNarrationEngine(); setTtsStatus('Paused'); });
  $('#tts-resume').addEventListener('click', () => { resumeNarrationEngine(); setTtsStatus('Speaking'); });
  $('#tts-stop').addEventListener('click', () => { stopNarrationEngine(); setTtsStatus('Ready'); });
  populateTtsVoices(true);
}
function populateTtsVoices(selectBest = false) {
  const select = $('#tts-voice'); if (!select) return;
  const voices = loadCourseSpeechVoices().filter(v => v.lang.toLowerCase().startsWith(ttsLanguage === 'es' ? 'es' : 'en'));
  const prior = selectBest ? '' : select.value;
  select.innerHTML = `<option value="">Best available voice</option>` + voices.map((v,i) => `<option value="${i}">${escapeHTML(v.name)} (${escapeHTML(v.lang)})</option>`).join('');
  if (prior && [...select.options].some(o => o.value === prior)) select.value = prior;
  else if (selectBest) select.value = '';
  $('#tts-voice-note').textContent = voices.length ? `${voices.length} ${ttsLanguage === 'es' ? 'Spanish' : 'English'} system voice(s) available.` : 'No matching system voices listed yet; the browser default may still be used.';
}
function selectedTtsVoice() { const i = Number($('#tts-voice')?.value); return $('#tts-voice')?.value ? loadCourseSpeechVoices().filter(v => v.lang.toLowerCase().startsWith(ttsLanguage === 'es' ? 'es' : 'en'))[i] || null : getBestVoice(ttsLanguage); }
function setTtsStatus(text) { const status = $('#tts-status'); if (status) status.textContent = text; }
function playTtsText(replay = false) {
  const field = $('#tts-text');
  let text = field.value.trim();
  if (!replay && field.selectionStart !== field.selectionEnd) text = field.value.slice(field.selectionStart, field.selectionEnd).trim();
  if (!text) { setTtsStatus('Enter text to play'); return; }
  const segment = { text, language: ttsLanguage, audioSrc: null, type: 'free-text', pauseAfter: 0 };
  ttsLastSegment = segment;
  playNarrationSegment(segment, { rate: ttsSpeed, voice: selectedTtsVoice(), onStatus: status => setTtsStatus(status), onEnd: () => setTtsStatus('Ready') });
}
function renderCourseDecisionGuide() {
  return `<section class="decision-guide"><p class="course-kicker">HOW DO I CHOOSE?</p><h3>Start with the time and meaning—not just a signal word.</h3><div class="decision-grid"><article><span>QUESTION 1</span><b>Am I talking about a specific finished time?</b><p><strong>YES → PAST SIMPLE</strong><br>${highlightCourseCues('I worked at a support company in 2020.')}</p><p><strong>NO → Continue to Question 2</strong></p></article><article><span>QUESTION 2</span><b>Am I talking about experience, an unfinished period, or a connection with now?</b><p><strong>YES → PRESENT PERFECT</strong><br>${highlightCourseCues('I have worked with customers.')}</p><p><strong>NO → Check the context.</strong> Another tense or more context may be needed; don’t choose Present Perfect automatically.</p></article></div></section>`;
}
function renderCourseActivities(module, progress, step, exercises, kind) {
  const heading = kind === 'guided' ? 'Try the decision together' : kind === 'practice' ? 'Choose the form that matches the context' : 'Use the tense that answers the interviewer’s question';
  return `<p class="course-kicker">${escapeHTML(step.title.toUpperCase())}</p><h2>${heading}</h2><p class="course-copy">Select your answer, check it, and read why. If you make a mistake, the category is saved to Progress so you can practice it again.</p><div class="course-exercise-list">${exercises.map((exercise, index) => {
    const key = `${step.id}-${index}`;
    const saved = progress.activityAnswers[key];
    const control = exercise.kind === 'correction'
      ? `<label class="course-answer-label" for="course-answer-${key}">Your correction</label><input class="course-text-input" id="course-answer-${key}" value="${escapeHTML(saved?.response || '')}" placeholder="Write the corrected sentence…">`
      : `<label class="course-answer-label" for="course-answer-${key}">Choose the best answer</label><select class="course-select" id="course-answer-${key}"><option value="">Choose an answer…</option>${exercise.options.map((option, optionIndex) => `<option value="${optionIndex}"${String(saved?.response) === String(optionIndex) ? ' selected' : ''}>${escapeHTML(option)}</option>`).join('')}</select>`;
    const result = saved ? `<div class="course-answer-feedback ${saved.isCorrect ? 'course-correct' : 'course-incorrect'}"><b>${saved.isCorrect ? 'Correct' : 'Review this choice'}</b><p>${escapeHTML(saved.explanation)}</p>${!saved.isCorrect && exercise.correction ? `<p><b>One natural correction:</b> ${escapeHTML(exercise.correction)}</p>` : ''}</div>` : '';
    return `<article class="course-exercise-card"><span class="course-question-number">${String(index + 1).padStart(2, '0')}</span><h3>${escapeHTML(exercise.prompt)}</h3>${control}<button class="button button-secondary course-activity-check" data-kind="${kind}" data-index="${index}">Check answer</button>${result}</article>`;
  }).join('')}</div>`;
}
function checkCourseActivity(module, progress, kind, index) {
  const items = kind === 'guided' ? module.guidedExercises : kind === 'practice' ? module.practiceExercises : module.interviewExercises;
  const exercise = items[index];
  const key = `${module.lessons[progress.currentStep].id}-${index}`;
  const field = $(`#course-answer-${key}`);
  const response = field.value.trim();
  if (!response) { $('#course-step-status').textContent = 'Choose or write an answer before checking it.'; return; }
  const isCorrect = exercise.kind === 'correction' ? exercise.answer.test(response) : Number(response) === exercise.answer;
  progress.activityAnswers[key] = { response, isCorrect, explanation: exercise.explanation };
  recordCourseExercise(exercise.category, isCorrect, progress);
  renderCourse();
}
function recordCourseExercise(category, isCorrect, progress) {
  progress.exercises += 1;
  progress[isCorrect ? 'correct' : 'incorrect'] += 1;
  stats.answered += 1;
  stats[isCorrect ? 'correct' : 'incorrect'] += 1;
  if (!isCorrect) {
    progress.weaknesses[category] = (progress.weaknesses[category] || 0) + 1;
    stats.grammarWeaknesses[category] = (stats.grammarWeaknesses[category] || 0) + 1;
  }
  saveStats();
  renderStats();
}
function advanceCourse(module, progress, step) {
  if (['guided', 'practice', 'interview'].includes(step.type)) {
    const exercises = step.type === 'guided' ? module.guidedExercises : step.type === 'practice' ? module.practiceExercises : module.interviewExercises;
    const unfinished = exercises.some((_, index) => !progress.activityAnswers[`${step.id}-${index}`]);
    if (unfinished) { $('#course-step-status').textContent = 'Complete and check each activity on this step before continuing.'; return; }
  }
  if (step.type !== 'results' && !progress.completedLessons.includes(step.id)) progress.completedLessons.push(step.id);
  progress.currentStep = Math.min(progress.currentStep + 1, module.lessons.length - 1);
  courseLessonStage = 0;
  saveStats();
  renderCourse();
  renderStats();
}
function renderCourseExam(module, progress) {
  const exam = module.exam;
  const draft = progress.examDraft;
  const selectQuestion = (field, question) => `<label class="course-exam-question"><span>${escapeHTML(question.prompt)}</span><select class="course-select" data-course-exam="${field}"><option value="">Choose an answer…</option>${question.options.map((option, index) => `<option value="${index}"${String(draft[field]) === String(index) ? ' selected' : ''}>${escapeHTML(option)}</option>`).join('')}</select></label>`;
  return `<p class="course-kicker">FINAL EXAM · MODULE 1</p><h2>Show what you understand</h2><p class="course-copy">Complete all five parts. Part D checks whether your written answer demonstrates both meanings; its text check is approximate and the explanation shows exactly what it looked for.</p><div class="exam-part"><h3>Part A — Choose</h3>${exam.partA.map((question, index) => selectQuestion(`a-${index}`, question)).join('')}</div><div class="exam-part"><h3>Part B — Correct the sentence</h3><label class="course-exam-question"><span>${escapeHTML(exam.partB.prompt)}</span><input class="course-text-input" data-course-exam="b" value="${escapeHTML(draft.b || '')}" placeholder="Write a corrected sentence…"></label></div><div class="exam-part"><h3>Part C — Why?</h3>${selectQuestion('c', exam.partC)}</div><div class="exam-part"><h3>Part D — Production</h3><label class="course-exam-question"><span>${escapeHTML(exam.partD.prompt)}</span><textarea class="course-text-input course-production" data-course-exam="d" rows="5" placeholder="Write your interview answer…">${escapeHTML(draft.d || '')}</textarea></label></div><div class="exam-part"><h3>Part E — Interview Grammar</h3>${exam.partE.map((question, index) => selectQuestion(`e-${index}`, question)).join('')}</div><p id="course-exam-status" class="course-exam-status" aria-live="polite"></p><button class="button button-primary" id="course-exam-submit">Submit final exam</button>`;
}
function handleCourseDraftInput(event) {
  const field = event.target.dataset.courseExam;
  if (!field) return;
  const progress = getCourseProgress();
  progress.examDraft[field] = event.target.value;
  saveStats();
}
function submitCourseExam(module, progress) {
  const exam = module.exam;
  const draft = progress.examDraft;
  const fields = [...exam.partA.map((_, index) => `a-${index}`), 'b', 'c', 'd', ...exam.partE.map((_, index) => `e-${index}`)];
  if (fields.some(field => !String(draft[field] || '').trim())) { $('#course-exam-status').textContent = 'Complete every part of the exam before submitting.'; return; }
  const details = [];
  const record = (label, category, isCorrect, userAnswer, answer, explanation) => {
    details.push({ label, category, isCorrect, userAnswer, answer, explanation });
    recordCourseExercise(category, isCorrect, progress);
  };
  exam.partA.forEach((question, index) => record(`Part A · ${question.prompt}`, question.category, Number(draft[`a-${index}`]) === question.answer, question.options[Number(draft[`a-${index}`])], question.options[question.answer], question.explanation));
  const bCorrect = exam.partB.accepted.test(draft.b.trim());
  record('Part B · Correct the sentence', exam.partB.category, bCorrect, draft.b.trim(), 'I worked there in 2020. Other corrections that keep the finished time and past meaning may also be correct.', exam.partB.explanation);
  const c = exam.partC;
  record(`Part C · ${c.prompt}`, c.category, Number(draft.c) === c.answer, c.options[Number(draft.c)], c.options[c.answer], c.explanation);
  const production = assessProductionAnswer(draft.d);
  record('Part D · Production: finished past event', 'Past Simple', production.past, draft.d.trim(), 'Use a past action with a specific finished time.', production.past ? 'Detected a past action with a finished time.' : 'The local check did not find both a past action and a finished time such as “in 2020”, “last year”, or “two years ago”. Other correct forms may not be recognized automatically.');
  record('Part D · Production: relevant experience', 'Present Perfect vs Past Simple', production.present, draft.d.trim(), 'Use a Present Perfect experience or current experience expression.', production.present ? 'Detected a Present Perfect form or “have experience” expression.' : 'The local check did not find a Present Perfect form or “have experience” expression. Other valid wording may not be recognized automatically.');
  exam.partE.forEach((question, index) => record(`Part E · ${question.prompt}`, question.category, Number(draft[`e-${index}`]) === question.answer, question.options[Number(draft[`e-${index}`])], question.options[question.answer], question.explanation));
  const correct = details.filter(item => item.isCorrect).length;
  progress.examCompleted = true;
  progress.examAttempts = (progress.examAttempts || 0) + 1;
  progress.examCorrect = correct;
  progress.examIncorrect = details.length - correct;
  progress.examScore = Math.round(correct / details.length * 100);
  progress.examCategories = [...new Set(details.filter(item => !item.isCorrect).map(item => item.category))];
  progress.examAnswers = details;
  const examStep = module.lessons.find(lesson => lesson.type === 'exam');
  if (examStep && !progress.completedLessons.includes(examStep.id)) progress.completedLessons.push(examStep.id);
  progress.currentStep = module.lessons.findIndex(lesson => lesson.type === 'results');
  saveStats();
  renderStats();
  renderCourse();
}
function assessProductionAnswer(text) {
  const finishedTime = /\b(?:yesterday|last\s+(?:week|year|month)|in\s+20\d{2}|\d+\s+(?:day|week|month|year)s?\s+ago|when\s+i\s+was)\b/i.test(text);
  const pastVerbs = /\b(?:worked|started|moved|helped|handled|assisted|supported|solved|managed|lived|joined|provided|responded|answered|did|was|were|went|began|spoke|learned|learnt)\b/gi;
  const past = finishedTime && [...text.matchAll(pastVerbs)].some(match => !/\b(?:have|has|['’]ve)\s*$/i.test(text.slice(Math.max(0, match.index - 12), match.index)));
  const presentPerfect = /\b(?:i|we|they|you|he|she|it)\s+(?:have|has|['’]ve|['’]s)\s+(?:(?:ever|never|already|just|also|recently)\s+)?(?:\w+(?:ed|en|n)|been|gone|done|had|made|built|left|felt|kept|found|sent|known|seen|written|spoken|led|read|won|lost|bought|brought|taught|thought|got|gotten)\b|\b(?:i|we|they|you|he|she|it)\s+(?:have|has)\s+(?:some\s+)?experience\b/i.test(text);
  return { past, present: presentPerfect };
}
function renderCourseResults(module, progress) {
  if (!progress.examCompleted) return '<p>Submit the final exam to see your module results here.</p>';
  const passed = progress.examScore >= 70;
  const details = progress.examAnswers.map(item => `<article class="exam-result-item ${item.isCorrect ? 'course-correct' : 'course-incorrect'}"><div><b>${item.isCorrect ? '✓ Correct' : 'Review'} · ${escapeHTML(item.label)}</b><span>${escapeHTML(item.category)}</span></div><p><b>Your answer:</b> ${escapeHTML(item.userAnswer)}</p><p><b>Expected:</b> ${escapeHTML(item.answer)}</p><p>${escapeHTML(item.explanation)}</p></article>`).join('');
  const categories = progress.examCategories.length ? progress.examCategories.map(escapeHTML).join(' · ') : 'No recurring grammar category detected in this attempt.';
  const recommendation = progress.examCategories.length ? `Practice these topics in Grammar Practice: ${categories}.` : 'Keep using both tenses in short interview answers, and revisit the decision guide whenever a time expression appears.';
  return `<div class="course-results-summary"><div class="course-result-score"><strong>${progress.examScore}%</strong><span>${progress.examCorrect} correct · ${progress.examIncorrect} incorrect</span></div><div><span class="pill ${passed ? 'pill-success' : 'pill-warning'}">${passed ? 'MODULE EXAM PASSED' : 'KEEP PRACTICING'}</span><p>${passed ? 'You demonstrated a solid understanding of the main distinction.' : 'Review the explanations below, then retake the exam when you feel ready.'}</p><p><b>Grammar categories:</b> ${categories}</p><p><b>Recommendation:</b> ${recommendation}</p><button class="button button-secondary" id="course-review-exam">Review final exam</button></div></div><h3 class="course-result-heading">Answers and explanations</h3><div class="exam-results-list">${details}</div>`;
}
function renderTopics() {
  const visibleTopics = grammarTopicIndices();
  if (!visibleTopics.includes(topicIndex)) topicIndex = visibleTopics[0] ?? 0;
  $('#topic-list').innerHTML = visibleTopics.map((index, order) => `<button class="topic-button${index === topicIndex ? ' active' : ''}" data-topic="${index}"><span class="topic-number">${String(order + 1).padStart(2, '0')}</span>${escapeHTML(grammarTopics[index].name)}</button>`).join('');
  $$('.topic-button').forEach(button => button.addEventListener('click', () => {
    topicIndex = Number(button.dataset.topic); exerciseIndex = 0; selectedOption = null; exerciseChecked = false; renderTopics(); renderExercise();
  }));
}
function renderExercise() {
  const topic = grammarTopics[topicIndex];
  const item = topic.exercises[exerciseIndex];
  $('#grammar-topic-pill').textContent = topic.name.toUpperCase();
  $('#grammar-count').textContent = `EXERCISE ${exerciseIndex + 1} OF ${topic.exercises.length}`;
  $('#grammar-progress').style.width = `${((exerciseIndex + 1) / topic.exercises.length) * 100}%`;
  $('#grammar-sentence').textContent = item.sentence;
  $('#grammar-options').innerHTML = item.options.map((option, index) => `<button class="option-button${selectedOption === index ? ' selected' : ''}" data-option="${index}"${exerciseChecked ? ' disabled' : ''}>${String.fromCharCode(65 + index)}. &nbsp;${escapeHTML(option)}</button>`).join('');
  $$('.option-button').forEach(button => button.addEventListener('click', () => { if (exerciseChecked) return; selectedOption = Number(button.dataset.option); $$('.option-button').forEach(option => option.classList.toggle('selected', Number(option.dataset.option) === selectedOption)); }));
  $('#grammar-feedback').className = 'feedback hidden';
  $('#check-answer').classList.toggle('hidden', exerciseChecked);
  $('#next-grammar').classList.toggle('hidden', !exerciseChecked);
}
function checkAnswer() {
  if (selectedOption === null) { $('#grammar-feedback').className = 'feedback'; $('#grammar-feedback').innerHTML = '<strong>Choose an answer first.</strong>Select one option to check your answer.'; return; }
  const item = grammarTopics[topicIndex].exercises[exerciseIndex];
  const isCorrect = selectedOption === item.correct;
  exerciseChecked = true;
  stats.answered += 1;
  stats[isCorrect ? 'correct' : 'incorrect'] += 1;
  if (!isCorrect) stats.grammarWeaknesses[grammarTopics[topicIndex].name] = (stats.grammarWeaknesses[grammarTopics[topicIndex].name] || 0) + 1;
  saveStats();
  $$('.option-button').forEach(button => {
    const index = Number(button.dataset.option);
    button.classList.toggle('correct', index === item.correct);
    button.classList.toggle('incorrect', index === selectedOption && !isCorrect);
  });
  const feedback = $('#grammar-feedback');
  feedback.className = `feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`;
  feedback.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : 'Not quite — keep learning!'}</strong><div><b>Correct answer:</b> ${escapeHTML(item.options[item.correct])}</div><div class="explanation-es">${escapeHTML(item.explanation)}</div>`;
  $('#check-answer').classList.add('hidden'); $('#next-grammar').classList.remove('hidden');
}
function nextExercise() {
  const exercises = grammarTopics[topicIndex].exercises;
  exerciseIndex = (exerciseIndex + 1) % exercises.length;
  selectedOption = null; exerciseChecked = false; renderExercise();
}
function resetTimer() {
  clearInterval(timerInterval); timerInterval = null; timerSeconds = 60;
  $('#timer').textContent = '01:00'; $('#timer-progress').style.width = '100%';
  $('#timer-status').textContent = 'Your one-minute timer is ready when you are.';
}
function startTimer() {
  if (timerInterval) return;
  timerSeconds = 60;
  $('#timer-status').textContent = 'You’re doing great. Keep going!';
  timerInterval = setInterval(() => {
    timerSeconds -= 1;
    $('#timer').textContent = `${String(Math.floor(timerSeconds / 60)).padStart(2, '0')}:${String(timerSeconds % 60).padStart(2, '0')}`;
    $('#timer-progress').style.width = `${(timerSeconds / 60) * 100}%`;
    if (timerSeconds <= 0) { clearInterval(timerInterval); timerInterval = null; $('#timer-status').textContent = 'Time is up. Take a breath—you did it!'; if (speakingIsRecording) stopSpeaking(); }
  }, 1000);
}
function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  $('#timer-status').textContent = 'Timer stopped. Review your answer or try again.';
}
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }

function grammarTopicIndices() {
  const interview = [1, 2, 4, 5, 6, 8, 9];
  if (grammarCategory === 'interview') return interview;
  if (grammarCategory === 'mistakes') {
    const recorded = grammarTopics.map((topic, index) => stats.grammarWeaknesses[topic.name] ? index : -1).filter(index => index >= 0);
    return recorded.length ? recorded : [4, 6, 7, 8, 9];
  }
  return grammarTopics.map((_, index) => index);
}
function renderWeaknesses() {
  const ranked = Object.entries(stats.grammarWeaknesses).filter(([, count]) => count > 0).sort((a, b) => b[1] - a[1]);
  const weaknessRoot = $('#grammar-weaknesses');
  const recommended = $('#recommended-practice');
  if (!weaknessRoot || !recommended) return;
  if (!ranked.length) {
    weaknessRoot.textContent = 'No grammar mistakes recorded yet. Try a few exercises to build your personal practice plan.';
    recommended.innerHTML = '<p>Complete some grammar exercises to discover your priority topics.</p>';
    return;
  }
  weaknessRoot.innerHTML = ranked.map(([name, count]) => `<div class="weakness-row"><span>${escapeHTML(name)}</span><b>${count} ${count === 1 ? 'mistake' : 'mistakes'}</b></div>`).join('');
  const recommendations = ranked.slice(0, 2).map(([name]) => name);
  recommendations.push('Speaking answers');
  recommended.innerHTML = `<ol>${recommendations.map(name => `<li>${escapeHTML(name)}</li>`).join('')}</ol>`;
}
function topicFor(question) {
  if (question.category) return question.category;
  const text = question.question.toLowerCase();
  if (/customer|customer service|customer support|refund|shipment|return|exchange/.test(text)) return 'Customer Support';
  if (/technical|troubleshoot|issue/.test(text)) return 'Technical Support';
  if (/remote|team remotely|supervision/.test(text)) return 'Remote Work';
  return 'General Interview';
}
function renderSpeaking() {
  const item = interviewQuestions[speakingIndex];
  $('#speaking-question').textContent = item.question;
  $('#speaking-count').textContent = `QUESTION ${speakingIndex + 1} OF ${interviewQuestions.length}`;
  $('#speaking-progress').style.width = `${((speakingIndex + 1) / interviewQuestions.length) * 100}%`;
  $('#transcript').textContent = 'Your words will appear here as you speak. If recognition is unavailable, you can type your answer below.';
  $('#transcript-state').textContent = 'No response yet';
  $('#manual-answer').value = '';
  $('#performance').classList.add('hidden');
  $('#model-answer').classList.add('hidden');
  $('#transcript-review').classList.add('hidden');
  $('#corrected-transcript').classList.add('hidden');
  $('#correction-note').classList.add('hidden');
  $('#edit-transcript').disabled = false;
  $('#analyze-corrected').disabled = false;
  $('#recognition-issues').textContent = 'No low-confidence words reported yet.';
  $('#toggle-ideas').textContent = 'Show ideas';
  const ideas = item.words?.map(([word]) => word).join(' · ') || 'experience · customer support · strengths · goals';
  $('#speaking-ideas').innerHTML = `<p>${escapeHTML(ideas)}</p><p><b>Suggested structure:</b> ${escapeHTML(item.question.toLowerCase().includes('tell me about yourself') ? 'Who you are → relevant experience → skills → current goal' : 'Situation or point → what you did → result or lesson')}</p>`;
  $('#recognition-support').textContent = getRecognitionConstructor() ? 'Speech recognition is available. Your browser will ask for microphone permission when you start.' : 'Speech recognition is not available in this browser. Type your answer and use the timer for manual practice.';
  $('#recognition-status').textContent = getRecognitionConstructor() ? 'Microphone is off. Start when you are ready.' : 'Manual practice mode is ready.';
  showSpeechDiagnostic(getRecognitionConstructor() ? 'SpeechRecognition API detected · waiting for Start Recording.' : 'SpeechRecognition and webkitSpeechRecognition are unavailable · manual mode is ready.');
  $('#start-recording').disabled = false;
  $('#stop-recording').disabled = true;
  $('#try-again').disabled = true;
  speakingFinalText = ''; speakingInterimText = ''; speakingSegments = []; speakingRawTranscript = ''; speakingConfidenceValues = []; speakingFinalResultEvents = 0; speakingEdited = false; speakingIsRecording = false; speakingCompleted = false; speakingElapsed = 0; speakingStopRequested = false; speakingErrorCode = ''; speakingResultEvents = 0; speakingRestartCount = 0;
  speakingAttemptSaved = false;
  resetTimer();
}
function getRecognitionConstructor() { return window.SpeechRecognition || window.webkitSpeechRecognition || null; }
function showSpeechDiagnostic(message) { $('#speech-diagnostic').textContent = message; }
function renderRecognitionIssues(segments) {
  const reviewable = segments.filter(segment => segment.confidence !== null && segment.confidence < 0.65 || segment.alternatives.some(alternative => alternative.text.toLowerCase() !== segment.text.toLowerCase()));
  if (!reviewable.length) {
    $('#recognition-issues').textContent = segments.some(segment => segment.confidence === null) ? 'No low-confidence segment was reported. Confidence is unavailable for some results, so this is not a guarantee that every word is correct.' : 'No low-confidence words reported by the browser.';
    return;
  }
  $('#recognition-issues').innerHTML = reviewable.map(segment => {
    const confidence = segment.confidence === null ? 'confidence unavailable' : `confidence ${Math.round(segment.confidence * 100)}%`;
    const alternatives = segment.alternatives.slice(1).map(alternative => alternative.text).filter(Boolean);
    return `<p><b>“${escapeHTML(segment.text)}”</b> (${confidence})${alternatives.length ? ` · browser alternatives: ${alternatives.map(escapeHTML).join(' / ')}` : ''} — possible recognition issue; please review before treating it as an English mistake.</p>`;
  }).join('');
}
function startSpeaking() {
  if (speakingCompleted) resetSpeaking();
  if (speakingIsRecording) return;
  speakingFinalText = ''; speakingInterimText = ''; speakingSegments = []; speakingConfidenceValues = []; speakingFinalResultEvents = 0; speakingRawTranscript = ''; speakingEdited = false; speakingAttemptSaved = false; speakingIsRecording = true; speakingCompleted = false; speakingElapsed = 0;
  speakingStopRequested = false; speakingErrorCode = ''; speakingResultEvents = 0; speakingRestartCount = 0;
  $('#manual-answer').value = '';
  $('#performance').classList.add('hidden');
  $('#transcript-review').classList.add('hidden');
  $('#transcript').textContent = '';
  $('#transcript-state').textContent = 'Listening…';
  $('#mic-indicator').classList.add('listening');
  $('#recognition-status').textContent = getRecognitionConstructor() ? 'Listening… speak naturally.' : 'Recognition unavailable. Type your answer while the timer runs.';
  $('#start-recording').disabled = true; $('#stop-recording').disabled = false; $('#try-again').disabled = false;
  if (getRecognitionConstructor()) {
    try {
      const Recognition = getRecognitionConstructor();
      const apiName = window.SpeechRecognition ? 'SpeechRecognition' : 'webkitSpeechRecognition';
      speakingRecognition = new Recognition();
      speakingRecognition.lang = 'en-US'; speakingRecognition.continuous = true; speakingRecognition.interimResults = true; speakingRecognition.maxAlternatives = 3;
      showSpeechDiagnostic(`${apiName} available · lang=en-US · continuous=true · interimResults=true · maxAlternatives=3 · waiting for onstart.`);
      speakingRecognition.onstart = () => {
        $('#recognition-status').textContent = 'Microphone is active. Speak naturally.';
        showSpeechDiagnostic(`Recognition available=true · onstart fired · final result events=0 · transcript characters=0 · error=none · average confidence=unavailable.`);
      };
      speakingRecognition.onresult = event => {
        const finalParts = [];
        const interimParts = [];
        const segments = [];
        const confidenceValues = [];
        speakingResultEvents += 1;
        for (let i = 0; i < event.results.length; i += 1) {
          const result = event.results[i];
          const alternatives = Array.from({ length: result.length }, (_, alternativeIndex) => result[alternativeIndex]).map(alternative => ({
            text: (alternative.transcript || '').trim(),
            confidence: Number.isFinite(alternative.confidence) ? alternative.confidence : null
          })).filter(alternative => alternative.text);
          const best = alternatives[0];
          const chunk = best?.text;
          if (!chunk) continue;
          const confidence = best.confidence;
          if (result.isFinal && confidence !== null) confidenceValues.push(confidence);
          segments.push({ text: chunk, confidence, alternatives, isFinal: Boolean(result.isFinal) });
          if (result.isFinal) finalParts.push(chunk); else interimParts.push(chunk);
        }
        // Chrome may revise an interim result before marking it final. Rebuild
        // from the complete result list to avoid dropping or duplicating text.
        speakingFinalText = finalParts.join(' ');
        speakingInterimText = interimParts.join(' ');
        speakingSegments = segments;
        speakingConfidenceValues = confidenceValues;
        speakingFinalResultEvents = segments.filter(segment => segment.isFinal).length;
        const full = [speakingFinalText, speakingInterimText].filter(Boolean).join(' ').trim();
        $('#transcript').textContent = full || 'Listening…';
        $('#transcript-state').textContent = speakingFinalText ? 'Final words received' : 'Interim words received';
        renderRecognitionIssues(segments);
        const confidenceAverage = confidenceValues.length ? `${Math.round(confidenceValues.reduce((sum, value) => sum + value, 0) / confidenceValues.length * 100)}%` : 'unavailable';
        showSpeechDiagnostic(`${apiName}: onresult #${speakingResultEvents} · final result(s)=${speakingFinalResultEvents} · transcript characters=${full.length} · error=${speakingErrorCode || 'none'} · average confidence=${confidenceAverage}.`);
      };
      speakingRecognition.onerror = event => {
        speakingErrorCode = event.error || 'unknown';
        $('#recognition-status').textContent = event.error === 'not-allowed' ? 'Microphone permission was not granted. You can type your answer below.' : `Speech recognition stopped (${event.error}). You can continue in manual mode.`;
        const confidenceAverage = speakingConfidenceValues.length ? `${Math.round(speakingConfidenceValues.reduce((sum, value) => sum + value, 0) / speakingConfidenceValues.length * 100)}%` : 'unavailable';
        showSpeechDiagnostic(`Recognition available=true · ${apiName} onerror=${speakingErrorCode}${event.message ? ` — ${event.message}` : ''} · final result events=${speakingFinalResultEvents} · transcript characters=${[speakingFinalText, speakingInterimText].filter(Boolean).join(' ').length} · average confidence=${confidenceAverage}.`);
      };
      speakingRecognition.onend = () => {
        const captured = [speakingFinalText, speakingInterimText].filter(Boolean).join(' ').trim();
        if (speakingStopRequested) {
          showSpeechDiagnostic(`${apiName}: onend after Stop · ${speakingResultEvents} result event(s) · ${captured.length} transcript characters · error=${speakingErrorCode || 'none'}.`);
          return;
        }
        if (!speakingIsRecording) return;
        if (!captured && !speakingErrorCode && speakingRestartCount < 1) {
          speakingRestartCount += 1;
          showSpeechDiagnostic(`${apiName}: onend before any result and with no error · retrying start() once (${speakingRestartCount}/1).`);
          window.setTimeout(() => {
            if (!speakingIsRecording || speakingStopRequested) return;
            try { speakingRecognition.start(); }
            catch (error) {
              speakingErrorCode = error.name || 'start-failed';
              showSpeechDiagnostic(`${apiName}: restart failed · ${speakingErrorCode}${error.message ? ` — ${error.message}` : ''}.`);
              stopSpeaking();
            }
          }, 250);
          return;
        }
        showSpeechDiagnostic(`${apiName}: onend while recording · ${speakingResultEvents} result event(s) · ${captured.length} transcript characters · error=${speakingErrorCode || 'none'}.`);
        stopSpeaking();
      };
      speakingRecognition.start();
    } catch (error) {
      $('#recognition-status').textContent = 'Could not start the microphone. Manual timer mode is active.';
      $('#start-recording').disabled = true; $('#stop-recording').disabled = false;
      speakingErrorCode = error.name || 'start-failed';
      showSpeechDiagnostic(`SpeechRecognition available, but start() threw ${speakingErrorCode}${error.message ? ` — ${error.message}` : ''}. Manual timer mode is active.`);
    }
  } else showSpeechDiagnostic('SpeechRecognition and webkitSpeechRecognition are unavailable · using manual timer mode.');
  if (speakingIsRecording) startTimer();
}
function stopSpeaking() {
  if (!speakingIsRecording) { finishSpeaking(); return; }
  speakingIsRecording = false;
  speakingStopRequested = true;
  try { speakingRecognition?.stop(); } catch { /* recognition may already have stopped */ }
  $('#mic-indicator').classList.remove('listening');
  $('#start-recording').disabled = false; $('#stop-recording').disabled = true;
  stopTimer();
  window.setTimeout(finishSpeaking, speakingRecognition ? 350 : 150);
}
function finishSpeaking() {
  if (speakingCompleted) return;
  const typed = $('#manual-answer').value.trim();
  const text = [speakingFinalText.trim(), speakingInterimText.trim(), typed].filter(Boolean).join(' ').trim();
  if (!text) {
    $('#recognition-status').textContent = 'No transcript yet. Try speaking again or type an answer below.';
    $('#transcript-state').textContent = 'No response captured';
    $('#transcript').textContent = 'No response captured yet. Try Again or type your answer below.';
    showSpeechDiagnostic(`Recognition ended with no transcript · ${speakingResultEvents} result event(s) · error=${speakingErrorCode || 'none'} · restart attempts=${speakingRestartCount}.`);
    return;
  }
  speakingCompleted = true; speakingElapsed = Math.max(1, 60 - timerSeconds);
  speakingRawTranscript = text;
  $('#transcript').textContent = speakingRawTranscript; $('#transcript-state').textContent = 'Response complete';
  $('#recognition-status').textContent = 'Response complete. Review or correct the transcript before feedback.';
  $('#transcript-review').classList.remove('hidden');
  $('#corrected-transcript').value = speakingRawTranscript;
  $('#edit-transcript').textContent = 'Edit transcript';
  $('#edit-transcript').disabled = false;
  $('#analyze-corrected').disabled = false;
  $('#corrected-transcript').classList.add('hidden');
  $('#correction-note').classList.add('hidden');
  $('#performance').classList.add('hidden');
  const confidenceAverage = speakingConfidenceValues.length ? `${Math.round(speakingConfidenceValues.reduce((sum, value) => sum + value, 0) / speakingConfidenceValues.length * 100)}%` : 'unavailable';
  showSpeechDiagnostic(`Recognition available=${Boolean(getRecognitionConstructor())} · final result events=${speakingFinalResultEvents} · transcript characters=${speakingRawTranscript.length} · error=${speakingErrorCode || 'none'} · average confidence=${confidenceAverage}.`);
}
function analyzeSpeakingTranscript() {
  const text = $('#corrected-transcript').value.trim();
  if (!text) { $('#recognition-status').textContent = 'Add or record an answer before requesting feedback.'; return; }
  speakingEdited = text !== speakingRawTranscript;
  $('#correction-note').classList.toggle('hidden', !speakingEdited);
  if (!speakingAttemptSaved) {
    saveSpeakingAttempt(text, interviewQuestions[speakingIndex].question);
    speakingAttemptSaved = true;
  }
  const unreliable = speakingSegments.filter(segment => segment.confidence !== null && segment.confidence < 0.65 || segment.alternatives.some(alternative => alternative.text.toLowerCase() !== segment.text.toLowerCase())).map(segment => segment.text).filter(segment => transcriptContainsSegment(text, segment));
  $('#performance-summary').innerHTML = renderPerformance(analyzeResponse(text, interviewQuestions[speakingIndex], speakingElapsed, { unreliable, edited: speakingEdited }));
  const item = interviewQuestions[speakingIndex];
  const model = item.answer || 'A clear answer connects your experience, relevant skills, and the kind of contribution you hope to make.';
  const simple = item.simple || model.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
  $('#model-answer').innerHTML = `<p><b>Simple version</b><br>${escapeHTML(simple)}</p><p><b>Full model answer</b><br>${escapeHTML(model)}</p><p><b>Useful vocabulary</b><br>${escapeHTML((item.words || []).map(([word]) => word).join(' · '))}</p>`;
  $('#performance').classList.remove('hidden');
  $('#analyze-corrected').disabled = true;
  $('#edit-transcript').disabled = true;
  $('#recognition-status').textContent = speakingEdited ? 'Feedback uses your corrected transcript. Your edits may reflect recognition errors.' : 'Feedback is based on the browser transcript and excludes low-confidence segments from grammar flags.';
  renderStats();
}
function transcriptContainsSegment(text, segment) {
  const escaped = segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}(?=$|[^\\p{L}\\p{N}])`, 'iu').test(text);
}
function maskTranscriptSegment(text, segment) {
  const escaped = segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(^|[^\\p{L}\\p{N}])(${escaped})(?=$|[^\\p{L}\\p{N}])`, 'iu'), (_, boundary, matched) => `${boundary}${' '.repeat(matched.length)}`);
}
function saveSpeakingAttempt(text, question) {
  const count = wordCount(text);
  stats.speakingAttempts += 1; stats.totalWords += count;
  stats.transcripts.push({ question, text, at: new Date().toISOString() });
  stats.transcripts = stats.transcripts.slice(-20);
  saveStats();
}
function wordCount(text) { return (String(text).match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) || []).length; }
function analyzeResponse(text, question, duration, options = {}) {
  const words = wordCount(text);
  const fillers = (text.match(/\b(um|uh|erm|you know|like|actually)\b/gi) || []).length;
  const wpm = duration > 0 ? Math.round(words * 60 / duration) : 0;
  const grammar = [];
  let grammarText = text;
  if (options.unreliable?.length) {
    for (const segment of options.unreliable) grammarText = maskTranscriptSegment(grammarText, segment);
  }
  const addIssue = (pattern, title, fix) => { const match = grammarText.match(pattern); if (match) grammar.push({ example: match[0], title, fix }); };
  addIssue(/\b(?:he|she|it)\s+(?:work|have|do|go|need|want|help|solve|handle|communicate|use|make|know|try)\b/i, 'En Present Simple, he/she/it lleva -s; con “have” se usa “has”.', 'Por ejemplo: “She helps customers” o “He has experience.”');
  addIssue(/\b(?:i|you|we|they)\s+(?:am|is|are)\s+(?:work|help|handle|solve|support|communicate|organize|manage)\b/i, 'Para una acción en curso, usa be + verbo en -ing; para una rutina, usa Present Simple.', 'Por ejemplo: “I am helping now” o “I help customers every day”.');
  addIssue(/\b(?:did|didn't|did not)\s+\w+(?:ed|ied)\b/i, 'Después de “did/didn’t”, el verbo vuelve a su forma base.', 'Por ejemplo: “I did not work” (no “did not worked”).');
  addIssue(/\b(?:did|didn't|did not)\s+(?:went|saw|had|made|took|gave|came|wrote|spoke)\b/i, 'Después de “did/didn’t”, usa la forma base, incluso con verbos irregulares.', 'Por ejemplo: “Did you go?” (no “Did you went?”).');
  addIssue(/\b(?:i|we|they|you)\s+has\b|\b(?:he|she|it)\s+have\b/i, 'Revisa la concordancia entre el sujeto y have/has.', 'Usa “I/we/they/you have” y “he/she/it has”.');
  addIssue(/\b(?:i|we|they|you|he|she|it)\s+have\s+\w+(?:ed|en|n)\b[^.!?]{0,24}\b(?:yesterday|last\s+(?:week|year|month)|in\s+20\d{2})\b/i, 'Present Perfect normalmente no se combina con un momento pasado terminado.', 'Con “yesterday/last week” suele usarse Past Simple: “I worked last year.”');
  addIssue(/\b(?:will going|will to|am will|is will|are will)\b/i, 'Revisa la forma de futuro: will + verbo base o be going to + verbo base.', 'Por ejemplo: “I will help” o “I am going to help”.');
  addIssue(/\b(?:responsible of|good in|depend of|interested on|explain me)\b/i, 'Hay una combinación de preposición o verbo que conviene revisar.', 'Prueba “responsible for”, “good at”, “depend on”, “interested in” o “explain it to me”.');
  addIssue(/\b(?:a experience|an customer|a issue|an problem|a useful information)\b/i, 'Revisa el artículo o si el sustantivo es contable.', 'Por ejemplo: “an experience”, “a customer”, “an issue”; “information” normalmente no lleva a/an.');
  addIssue(/\b(?:what you do|where you work|how you solve)\s*\?/i, 'En preguntas en Present Simple suele hacer falta do/does antes del sujeto.', 'Por ejemplo: “What do you do?” o “How do you solve it?”');
  addIssue(/\b(?:i|we|they|you)\s+(?:always|usually|often|sometimes)\s+(?:am|is|are)\b/i, 'Con el verbo be, el adverbio de frecuencia suele ir después del verbo.', 'Por ejemplo: “I am usually organized.”');
  const keywords = ['customer', 'support', 'issue', 'problem', 'solution', 'troubleshoot', 'resolve', 'assist', 'communication', 'experience', 'team', 'remote', 'ticket', 'request', 'complaint', 'technical', 'follow-up', 'help', 'client', 'fix', 'solve', 'service'];
  const matched = [...new Set(keywords.filter(term => text.toLowerCase().includes(term)))];
  const qText = question.question.toLowerCase();
  const personalIntro = /tell me about yourself/i.test(question.question);
  const relevant = matched.length >= 2 || (words >= 12 && (qText.includes('strength') || qText.includes('weakness') || personalIntro));
  const sentences = Math.max(1, (text.match(/[.!?]+/g) || []).length);
  const continuity = words >= 20 && fillers <= 4 ? 84 : words >= 8 ? 66 : 42;
  const fluency = words < 8 ? 35 : Math.min(96, 48 + Math.min(words, 75) * 0.4 - fillers * 6 + Math.min(sentences, 4) * 3 + (continuity > 75 ? 6 : 0));
  const grammarScore = Math.max(35, 88 - grammar.length * 12);
  const vocabularyScore = Math.min(96, 45 + matched.length * 8);
  const relevanceScore = relevant ? Math.min(95, 62 + Math.min(matched.length, 4) * 6) : 48;
  const communicationScore = Math.min(96, 48 + Math.min(sentences, 5) * 6 + (words >= 18 ? 15 : words >= 8 ? 7 : 0));
  const overall = Math.round((fluency + grammarScore + vocabularyScore + relevanceScore) / 4);
  const content = personalIntro ? {
    identity: /\b(i am|i'm|my name|i work|i have)\b/i.test(text),
    experience: /\b(experience|worked|work|role|job|support)\b/i.test(text),
    skills: /\b(skill|communication|patient|organized|problem.solving|technical)\b/i.test(text),
    goal: /\b(looking|goal|hope|want|interested|next|grow)\b/i.test(text)
  } : null;
  return { words, fillers, wpm, duration: Math.max(1, duration), sentences, continuity, grammar, matched, relevant, content, fluency: Math.round(fluency), grammarScore, vocabularyScore, relevanceScore, communicationScore, overall, edited: Boolean(options.edited), uncertainSegments: (options.unreliable || []).length };
}
function renderPerformance(result) {
  const good = result.words >= 12 ? 'Tu respuesta tiene material suficiente para practicar y se entiende el punto principal.' : 'Te animaste a responder; intenta sumar una experiencia, una habilidad y un resultado concreto.';
  const grammarText = result.grammar.length ? result.grammar.map(issue => `<li><b>“${escapeHTML(issue.example)}”</b> — ${escapeHTML(issue.title)} ${escapeHTML(issue.fix)}</li>`).join('') : '<li>No detecté uno de los patrones frecuentes configurados. Esto no confirma que toda la gramática sea correcta.</li>';
  const vocabularyText = result.matched.length ? `Usaste vocabulario pertinente: ${result.matched.map(escapeHTML).join(', ')}.` : 'Prueba incluir una palabra concreta del contexto, como customer, issue, solution o follow-up; los sinónimos también cuentan.';
  const relevanceText = result.relevant ? 'Incluiste información relacionada con la pregunta.' : 'Conecta la respuesta más directamente con la pregunta y agrega un ejemplo de tu experiencia.';
  const fluencyText = `${result.words} palabras, ${result.wpm} palabras/min aprox., ${result.fillers} filler(s) y ${result.sentences} unidades de frase detectables. Las pausas no se miden de forma fiable en la transcripción.`;
  const structure = result.content ? `<p><b>Structure:</b> ${Object.entries({ 'who you are': result.content.identity, experience: result.content.experience, skills: result.content.skills, goal: result.content.goal }).map(([label, found]) => `${found ? '✓' : '○'} ${label}`).join(' · ')}</p>` : '';
  const nextPractice = result.grammar.length ? result.grammar[0].title : result.relevant ? 'Keep practicing concise examples with a clear result.' : 'Practice connecting one specific example to the question.';
  const transcriptBasis = `${result.edited ? 'Feedback uses your manually corrected transcript; edits may correct SpeechRecognition errors.' : 'Feedback is based on the browser transcript; recognition errors are possible.'}${result.uncertainSegments ? ` ${result.uncertainSegments} recognition-uncertain segment(s) still present were excluded from automatic grammar flags.` : ''}`;
  return `<p class="feedback-opening"><b>Good job</b><br>${good}</p><h3 class="improve-heading">Things to improve</h3><div class="performance-grid"><div><small>FLUENCY · ORIENTATIVE</small><b>${result.fluency}/100</b><p>${escapeHTML(fluencyText)}</p><p>Continuity estimate: ${result.continuity}/100.</p></div><div><small>GRAMMAR · LOCAL RULES</small><b>${result.grammarScore}/100</b><ul>${grammarText}</ul></div><div><small>VOCABULARY</small><b>${result.vocabularyScore}/100</b><p>${vocabularyText}</p></div><div><small>INTERVIEW CONTENT</small><b>${result.relevanceScore}/100</b><p>${relevanceText}</p>${structure}</div></div><p class="next-practice"><b>Practice next:</b> ${escapeHTML(nextPractice)}</p><p class="assessment-note">${escapeHTML(transcriptBasis)} These are approximate text-based practice signals. They do not assess pronunciation or replace a teacher’s review.</p>`;
}
function resetSpeaking() {
  if (speakingIsRecording) { speakingIsRecording = false; try { speakingRecognition?.stop(); } catch { /* already stopped */ } }
  stopTimer(); speakingFinalText = ''; speakingCompleted = false;
  renderSpeaking();
}
function mockQuestionsFor(type, difficulty) {
  const matched = interviewQuestions.filter(item => topicFor(item) === type);
  const general = interviewQuestions.filter(item => topicFor(item) === 'General Interview');
  const amount = difficulty === 'Beginner' ? 3 : difficulty === 'Interview Ready' ? 5 : 4;
  return [...matched, ...general.filter(item => !matched.includes(item))].slice(0, amount);
}
function beginMock() {
  const type = $('#mock-type').value;
  mockQuestions = mockQuestionsFor(type, $('#mock-difficulty').value); mockIndex = 0; mockScores = [];
  $('#mock-type-label').textContent = type.toUpperCase();
  $('#mock-setup').classList.add('hidden'); $('#mock-results').classList.add('hidden'); $('#mock-session').classList.remove('hidden');
  stats.sessions += 1; stats.speakingSessions += 1; saveStats();
  renderMockQuestion();
}
function renderMockQuestion() {
  const question = mockQuestions[mockIndex];
  $('#mock-count').textContent = `QUESTION ${mockIndex + 1} OF ${mockQuestions.length}`;
  $('#mock-progress').style.width = `${(mockIndex + 1) / mockQuestions.length * 100}%`;
  $('#mock-difficulty-label').textContent = `${$('#mock-difficulty').value.toUpperCase()} · ANSWER IN YOUR OWN WORDS`;
  $('#mock-question').textContent = question.question;
  $('#mock-transcript').textContent = 'Your transcript will appear here.'; $('#mock-manual-answer').value = '';
  $('#mock-recognition-status').textContent = getRecognitionConstructor() ? 'Ready to record your answer.' : 'Speech recognition unavailable. Type your response and use the timer.';
  $('.support-status').textContent = getRecognitionConstructor() ? 'The browser will request microphone access on start.' : 'Manual response mode is available.';
  $('#mock-mic').classList.remove('listening'); $('#mock-feedback').classList.add('hidden'); $('#mock-continue').disabled = true;
  $('#mock-start-recording').disabled = false; $('#mock-stop-recording').disabled = true;
  mockFinalText = ''; mockIsRecording = false; mockCompleted = false; resetMockTimer();
}
function startMockRecording() {
  if (mockIsRecording) return;
  mockIsRecording = true; mockCompleted = false; mockFinalText = '';
  $('#mock-transcript').textContent = ''; $('#mock-mic').classList.add('listening');
  $('#mock-recognition-status').textContent = getRecognitionConstructor() ? 'Listening… speak naturally.' : 'Manual mode: type while your one-minute timer runs.';
  $('#mock-start-recording').disabled = true; $('#mock-stop-recording').disabled = false;
  if (getRecognitionConstructor()) {
    try {
      mockRecognition = new (getRecognitionConstructor())(); mockRecognition.lang = 'en-US'; mockRecognition.continuous = true; mockRecognition.interimResults = true;
      mockRecognition.onresult = event => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i += 1) { const chunk = event.results[i][0].transcript; if (event.results[i].isFinal) mockFinalText += `${chunk.trim()} `; else interim += chunk; }
        $('#mock-transcript').textContent = `${mockFinalText}${interim}`.trim();
      };
      mockRecognition.onerror = event => { $('#mock-recognition-status').textContent = event.error === 'not-allowed' ? 'Microphone permission was not granted. Type your answer instead.' : `Recognition issue (${event.error}). You can use manual mode.`; };
      mockRecognition.onend = () => { if (mockIsRecording) stopMockRecording(); };
      mockRecognition.start();
    } catch { $('#mock-recognition-status').textContent = 'Could not start microphone. Manual timer mode is active.'; $('#mock-start-recording').disabled = true; $('#mock-stop-recording').disabled = false; }
  }
  if (mockIsRecording) startMockTimer();
}
function stopMockRecording() {
  if (!mockIsRecording) { finishMockAnswer(); return; }
  mockIsRecording = false; try { mockRecognition?.stop(); } catch { /* already stopped */ }
  $('#mock-mic').classList.remove('listening'); $('#mock-start-recording').disabled = false; $('#mock-stop-recording').disabled = true;
  clearInterval(mockTimerInterval); mockTimerInterval = null;
  window.setTimeout(finishMockAnswer, 150);
}
function finishMockAnswer() {
  if (mockCompleted) return;
  const typed = $('#mock-manual-answer').value.trim(); const text = [mockFinalText.trim(), typed].filter(Boolean).join(' ').trim();
  if (!text) { $('#mock-recognition-status').textContent = 'No response captured. Try again or type an answer.'; $('#mock-transcript').textContent = 'No response captured yet.'; return; }
  mockCompleted = true;
  $('#mock-transcript').textContent = text; $('#mock-recognition-status').textContent = 'Answer complete. Review the feedback before continuing.';
  const result = analyzeResponse(text, mockQuestions[mockIndex], Math.max(1, 60 - mockSeconds));
  mockScores.push(result); saveSpeakingAttempt(text, mockQuestions[mockIndex].question); renderStats();
  const model = mockQuestions[mockIndex].answer || 'Connect your experience, a relevant strength, and the contribution you can make.';
  const simple = model.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
  $('#mock-feedback').innerHTML = `<div class="performance-heading"><span class="pill pill-green">YOUR PERFORMANCE</span><b>${result.overall}/100 · approximate</b></div>${renderPerformance(result)}<button class="model-button" id="mock-show-model">Show model answer</button><div class="model-answer hidden" id="mock-model-answer"><p><b>Simple version</b><br>${escapeHTML(simple)}</p><p><b>Full model answer</b><br>${escapeHTML(model)}</p><p><b>Useful ideas</b><br>${escapeHTML((mockQuestions[mockIndex].words || []).map(([word]) => word).join(' · '))}</p></div>`;
  $('#mock-feedback').classList.remove('hidden'); $('#mock-continue').disabled = false;
  $('#mock-show-model').addEventListener('click', () => { const hidden = $('#mock-model-answer').classList.toggle('hidden'); $('#mock-show-model').textContent = hidden ? 'Show model answer' : 'Hide model answer'; });
}
function continueMock() {
  if (!mockCompleted) return;
  if (mockIndex + 1 < mockQuestions.length) { mockIndex += 1; renderMockQuestion(); return; }
  finishMock();
}
function finishMock() {
  $('#mock-session').classList.add('hidden'); const averages = key => Math.round(mockScores.reduce((sum, score) => sum + score[key], 0) / Math.max(1, mockScores.length));
  const rows = [['Communication', 'communicationScore'], ['Grammar', 'grammarScore'], ['Vocabulary', 'vocabularyScore'], ['Relevance', 'relevanceScore'], ['Fluency', 'fluency']];
  const scores = rows.map(([label, key]) => [label, averages(key)]);
  const overall = Math.round(mockScores.reduce((sum, score) => sum + score.overall, 0) / Math.max(1, mockScores.length));
  $('#mock-results').innerHTML = `<p class="eyebrow">INTERVIEW COMPLETE</p><h2>Interview Performance</h2><p class="lead">${escapeHTML($('#mock-type').value)} · ${escapeHTML($('#mock-difficulty').value)}</p><div class="result-score">${overall}<small>/100</small></div><div class="result-score-grid">${scores.map(([label, score]) => `<div><small>${label}</small><b>${score}/100</b></div>`).join('')}</div><p class="assessment-note">This is an approximate evaluation based on your transcripts. It does not assess pronunciation and is not a professional assessment.</p><button class="button button-primary" id="mock-again">Start another interview <span>→</span></button>`;
  $('#mock-results').classList.remove('hidden'); $('#mock-again').addEventListener('click', () => { $('#mock-results').classList.add('hidden'); $('#mock-setup').classList.remove('hidden'); });
}
function resetMockTimer() { clearInterval(mockTimerInterval); mockTimerInterval = null; mockSeconds = 60; $('.mock-timer').textContent = '01:00'; $('.mock-timer-progress').style.width = '100%'; $('.mock-timer-status').textContent = 'Ready when you are.'; }
function startMockTimer() {
  clearInterval(mockTimerInterval); mockSeconds = 60; $('.mock-timer-status').textContent = 'Keep going—you’re doing well.';
  mockTimerInterval = setInterval(() => { mockSeconds -= 1; $('.mock-timer').textContent = `00:${String(mockSeconds).padStart(2, '0')}`; $('.mock-timer-progress').style.width = `${mockSeconds / 60 * 100}%`; if (mockSeconds <= 0) { clearInterval(mockTimerInterval); mockTimerInterval = null; $('.mock-timer-status').textContent = 'Time is up. Your response is ready to review.'; stopMockRecording(); } }, 1000);
}

$$('[data-view]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.view)));
$('#mobile-menu').addEventListener('click', () => {
  const open = $('.sidebar').classList.toggle('open'); $('#mobile-menu').setAttribute('aria-expanded', String(open));
});
$('#show-answer').addEventListener('click', () => {
  const visible = !$('#interview-model-answer').classList.contains('hidden');
  $('#interview-model-answer').classList.toggle('hidden', visible);
  $('#show-answer').innerHTML = visible ? '◉ &nbsp;Show Model Answer' : '◉ &nbsp;Hide Model Answer';
});
$('#next-interview').addEventListener('click', () => { interviewIndex = (interviewIndex + 1) % interviewQuestions.length; renderInterview(); });
$('#interview-user-answer').addEventListener('input', saveInterviewDraft);
$('#check-interview-answer').addEventListener('click', checkInterviewAnswer);
$('#course-module-root').addEventListener('input', handleCourseDraftInput);
$('#course-module-root').addEventListener('change', handleCourseDraftInput);
$('#check-answer').addEventListener('click', checkAnswer);
$('#next-grammar').addEventListener('click', nextExercise);
$$('.category-tab').forEach(button => button.addEventListener('click', () => {
  grammarCategory = button.dataset.category;
  $$('.category-tab').forEach(tab => tab.classList.toggle('active', tab === button));
  topicIndex = grammarTopicIndices()[0] ?? 0; exerciseIndex = 0; selectedOption = null; exerciseChecked = false; renderTopics(); renderExercise();
}));
$('#start-recording').addEventListener('click', startSpeaking);
$('#stop-recording').addEventListener('click', stopSpeaking);
$('#try-again').addEventListener('click', resetSpeaking);
$('#edit-transcript').addEventListener('click', () => {
  $('#corrected-transcript').classList.remove('hidden');
  $('#corrected-transcript').focus();
  $('#edit-transcript').textContent = 'Transcript is editable';
});
$('#analyze-corrected').addEventListener('click', analyzeSpeakingTranscript);
$('#next-speaking').addEventListener('click', () => {
  const advance = () => { speakingIndex = (speakingIndex + 1) % interviewQuestions.length; renderSpeaking(); };
  if (speakingIsRecording) { stopSpeaking(); window.setTimeout(advance, 450); } else advance();
});
$('#toggle-ideas').addEventListener('click', () => {
  const hidden = $('#speaking-ideas').classList.toggle('hidden'); $('#toggle-ideas').textContent = hidden ? 'Show ideas' : 'Hide ideas';
});
$('#show-speaking-model').addEventListener('click', () => {
  const hidden = $('#model-answer').classList.toggle('hidden'); $('#show-speaking-model').textContent = hidden ? 'Show model answer' : 'Hide model answer';
});
$('#manual-answer').addEventListener('input', event => {
  if (!speakingIsRecording && !speakingCompleted && event.target.value.trim()) { $('#transcript').textContent = event.target.value.trim(); $('#transcript-state').textContent = 'Manual draft'; $('#stop-recording').disabled = false; }
});
$('#mock-manual-answer').addEventListener('input', event => { if (!mockIsRecording && event.target.value.trim()) { $('#mock-transcript').textContent = event.target.value.trim(); $('#mock-stop-recording').disabled = false; } });
$('#begin-mock').addEventListener('click', beginMock);
$('#mock-start-recording').addEventListener('click', startMockRecording);
$('#mock-stop-recording').addEventListener('click', stopMockRecording);
$('#mock-continue').addEventListener('click', continueMock);
$('#reset-progress').addEventListener('click', () => {
  if (!window.confirm('Reset all practice progress saved on this device?')) return;
  stats = freshStats(); saveStats(); renderStats();
});
$('#today-label').textContent = new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date());
renderInterview(); renderTopics(); renderExercise(); renderSpeaking(); renderStats();
