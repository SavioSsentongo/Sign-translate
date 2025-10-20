const levels = [
  {
    level: 1,
    title: "ASL Alphabet Quiz",
    questions: [
      {
        question: "What is the sign language for the letter A?",
        imageChoices: [
          { src: "/images/asl_b.jpg", answer: "B", isCorrect: false },
          { src: "/images/asl_a.jpg", answer: "A", isCorrect: true },
        ],
        correctAnswer: "A"
      },
      {
        question: "What is the sign language for the letter C?",
        imageChoices: [
          { src: "/images/asl_c.jpg", answer: "C", isCorrect: true },
          { src: "/images/asl_d.jpg", answer: "D", isCorrect: false },
        ],
        correctAnswer: "C"
      },
      {
        question: "What is the sign language for the letter E?",
        imageChoices: [
          { src: "/images/asl_e.jpg", answer: "E", isCorrect: true },
          { src: "/images/asl_f.jpg", answer: "F", isCorrect: false },
        ],
        correctAnswer: "E"
      },
      {
        question: "What is the sign language for the letter G?",
        imageChoices: [
          { src: "/images/asl_h.jpg", answer: "H", isCorrect: false },
          { src: "/images/asl_g.jpg", answer: "G", isCorrect: true },
        ],
        correctAnswer: "G"
      },
      {
        question: "What is the sign language for the letter I?",
        imageChoices: [
          { src: "/images/asl_j.jpg", answer: "J", isCorrect: false },
          { src: "/images/asl_i.jpg", answer: "I", isCorrect: true },
        ],
        correctAnswer: "I"
      },
    ]
  },
  {
    level: 2,
    title: "Common Word Signs - Level 2",
    questions: [
      {
        question: "What is the sign language for 'Hello'?",
        imageChoices: [
          { src: "/images/word_thanks.jpg", answer: "Thanks", isCorrect: false },
          { src: "/images/word_hello.jpg", answer: "Hello", isCorrect: true },
        ],
        correctAnswer: "Hello"
      },
      {
        question: "What is the sign language for 'Sorry'?",
        imageChoices: [
          { src: "/images/word_sorry.jpg", answer: "Sorry", isCorrect: true },
          { src: "/images/word_yes.jpg", answer: "Yes", isCorrect: false },
        ],
        correctAnswer: "Sorry"
      },
      {
        question: "What is the sign language for 'Please'?",
        imageChoices: [
          { src: "/images/word_welcome.jpg", answer: "Welcome", isCorrect: false },
          { src: "/images/word_please.jpg", answer: "Please", isCorrect: true },
        ],
        correctAnswer: "Please"
      },
      {
        question: "What is the sign language for 'Goodbye'?",
        imageChoices: [
          { src: "/images/word_morning.jpg", answer: "Morning", isCorrect: false },
          { src: "/images/word_goodbye.jpg", answer: "Goodbye", isCorrect: true },
        ],
        correctAnswer: "Goodbye"
      },
      {
        question: "What is the sign language for 'Help'?",
        imageChoices: [
          { src: "/images/word_sad.jpg", answer: "Sad", isCorrect: false },
          { src: "/images/word_help.jpg", answer: "Help", isCorrect: true },        
        ],
        correctAnswer: "Help"
      },
    ]
  },
  {
    level: 3,
    title: "ASL Numbers Quiz",
    questions: [
      {
        question: "What is the sign language for the number 1?",
        imageChoices: [
          { src: "/images/asl_num_2.jpg", answer: "2", isCorrect: false },
          { src: "/images/asl_num_1.jpg", answer: "1", isCorrect: true },
        ],
        correctAnswer: "1"
      },
      {
        question: "What is the sign language for the number 3?",
        imageChoices: [
          { src: "/images/asl_num_3.jpg", answer: "3", isCorrect: true },
          { src: "/images/asl_num_4.jpg", answer: "4", isCorrect: false },
        ],
        correctAnswer: "3"
      },
      {
        question: "What is the sign language for the number 5?",
        imageChoices: [
          { src: "/images/asl_num_5.jpg", answer: "5", isCorrect: true },
          { src: "/images/asl_num_6.jpg", answer: "6", isCorrect: false },
        ],
        correctAnswer: "5"
      },
      {
        question: "What is the sign language for the number 7?",
        imageChoices: [
          { src: "/images/asl_num_8.jpg", answer: "8", isCorrect: false },
          { src: "/images/asl_num_7.jpg", answer: "7", isCorrect: true },
        ],
        correctAnswer: "7"
      },
      {
        question: "What is the sign language for the number 10?",
        imageChoices: [
          { src: "/images/asl_num_10.jpg", answer: "10", isCorrect: true },
          { src: "/images/asl_num_9.jpg", answer: "9", isCorrect: false },
        ],
        correctAnswer: "10"
      },
    ]
  },
  {
    level: 4,
    title: "Common Word Signs - Level 3",
    questions: [
      {
        question: "What is the sign language for 'Thank You'?",
        imageChoices: [
          { src: "/images/word_help.jpg", answer: "Help", isCorrect: false },
          { src: "/images/word_thanks.jpg", answer: "Thank You", isCorrect: true },
        ],
        correctAnswer: "Thank You"
      },
      {
        question: "What is the sign language for 'Yes'?",
        imageChoices: [
          { src: "/images/word_yes.jpg", answer: "Yes", isCorrect: true },
          { src: "/images/word_please.jpg", answer: "Please", isCorrect: false },
        ],
        correctAnswer: "Yes"
      },
      {
        question: "What is the sign language for 'No'?",
        imageChoices: [
          { src: "/images/word_hello.jpg", answer: "Hello", isCorrect: false },
          { src: "/images/word_no.jpg", answer: "No", isCorrect: true },
        ],
        correctAnswer: "No"
      },
      {
        question: "What is the sign language for 'Good Morning'?",
        imageChoices: [
          { src: "/images/word_morning.jpg", answer: "Morning", isCorrect: true },
          { src: "/images/word_goodbye.jpg", answer: "Goodbye", isCorrect: false },
        ],
        correctAnswer: "Good Morning"
      },
      {
        question: "What is the sign language for 'Excuse Me'?",
        imageChoices: [
          { src: "/images/word_sorry.jpg", answer: "Sorry", isCorrect: false },
          { src: "/images/word_excuseme.jpg", answer: "Excuse Me", isCorrect: true },
        ],
        correctAnswer: "Excuse Me"
      },
    ]
  },
  {
    level: 5,
    title: "ASL Phrases Quiz",
    questions: [
      {
        question: "What is the sign language for 'How Are You?'",
        imageChoices: [
          { src: "/images/phrase_hello.jpg", answer: "Hello", isCorrect: false },
          { src: "/images/phrase_howareyou.jpg", answer: "How Are You?", isCorrect: true },
        ],
        correctAnswer: "How Are You?"
      },
      {
        question: "What is the sign language for 'What is your name?'",
        imageChoices: [
          { src: "/images/phrase_whatsyourname.jpg", answer: "What's Your Name?", isCorrect: true },
          { src: "/images/phrase_please.jpg", answer: "Please", isCorrect: false },
        ],
        correctAnswer: "What is Your Name?"
      },
      {
        question: "What is the sign language for 'I Love You'?",
        imageChoices: [
          { src: "/images/phrase_iloveyou.jpg", answer: "I Love You", isCorrect: true },
          { src: "/images/phrase_sorry.jpg", answer: "Sorry", isCorrect: false },
        ],
        correctAnswer: "I Love You"
      },
      {
        question: "What is the sign language for 'Where are you from?'",
        imageChoices: [
          { src: "/images/phrase_goodbye.jpg", answer: "Goodbye", isCorrect: false },
          { src: "/images/phrase_whereareyoufrom.jpg", answer: "Where Are You From?", isCorrect: true },
        ],
        correctAnswer: "Where Are You From?"
      },
      {
        question: "What is the sign language for 'Nice to meet you?'",
        imageChoices: [
          { src: "/images/phrase_help.jpg", answer: "Help", isCorrect: false },
          { src: "/images/phrase_nicetomeetyou.jpg", answer: "Nice to Meet You", isCorrect: true },
        ],
        correctAnswer: "Nice to Meet You"
      },
    ]
  }
];

export default levels;
