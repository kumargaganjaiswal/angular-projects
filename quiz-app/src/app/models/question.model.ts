export interface IQuestion {
    questionid: number
    question: string;
    options: string[];
    correctAnswer: string;
    userAnswer: string;
    answered: boolean;
    isCorrect: boolean;
}


export const questions: IQuestion[] = [
    {
        "questionid": 1,
        "question": "What is the capital of India?",
        "options": ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        "correctAnswer": "Delhi",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 2,
        "question": "Which element has the chemical symbol 'O'?",
        "options": ["Oxygen", "Gold", "Silver", "Iron"],
        "correctAnswer": "Oxygen",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 3,
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        "correctAnswer": "William Shakespeare",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 4,
        "question": "What is the boiling point of water?",
        "options": ["90°C", "100°C", "110°C", "120°C"],
        "correctAnswer": "100°C",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 5,
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "correctAnswer": "Mars",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 6,
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        "correctAnswer": "Leonardo da Vinci",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 7,
        "question": "Which organ pumps blood throughout the human body?",
        "options": ["Brain", "Liver", "Heart", "Kidney"],
        "correctAnswer": "Heart",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 8,
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Blue Whale", "Giraffe", "Rhinoceros"],
        "correctAnswer": "Blue Whale",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 9,
        "question": "In which year did the Titanic sink?",
        "options": ["1910", "1912", "1915", "1920"],
        "correctAnswer": "1912",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 10,
        "question": "What is the chemical formula for water?",
        "options": ["H2O", "CO2", "NaCl", "O2"],
        "correctAnswer": "H2O",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 11,
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "Thailand", "South Korea"],
        "correctAnswer": "Japan",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 12,
        "question": "Who discovered penicillin?",
        "options": ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        "correctAnswer": "Alexander Fleming",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 13,
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
        "correctAnswer": "Carbon Dioxide",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 14,
        "question": "Who was the first president of the United States?",
        "options": ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        "correctAnswer": "George Washington",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 15,
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Diamond", "Iron", "Platinum"],
        "correctAnswer": "Diamond",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 16,
        "question": "Which planet is closest to the sun?",
        "options": ["Venus", "Mars", "Mercury", "Earth"],
        "correctAnswer": "Mercury",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 17,
        "question": "Who invented the telephone?",
        "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        "correctAnswer": "Alexander Graham Bell",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 18,
        "question": "Which ocean is the largest in the world?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "correctAnswer": "Pacific Ocean",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 19,
        "question": "What is the smallest prime number?",
        "options": ["1", "2", "3", "5"],
        "correctAnswer": "2",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    },
    {
        "questionid": 20,
        "question": "What is the main ingredient in traditional Japanese miso soup?",
        "options": ["Soybeans", "Rice", "Seaweed", "Fish"],
        "correctAnswer": "Soybeans",
        "userAnswer": "",
        "answered": false,
        "isCorrect": false
    }
];

