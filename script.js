/* =====================================================
   QUIZNEST - COMPLETE JAVASCRIPT
===================================================== */

const quizData = {

    /* ================= PERSONALITY ================= */

    personality: {
        title: "Personality Quiz",
        icon: "🧠",

        questions: [
            {
                question: "When you have free time, what do you prefer?",
                answers: [
                    ["Going out with friends 🥳", "social"],
                    ["Working on a creative project 🎨", "creative"],
                    ["Relaxing alone with a book 📖", "calm"],
                    ["Planning my next goal 🎯", "ambitious"]
                ]
            },
            {
                question: "How do you usually make decisions?",
                answers: [
                    ["I ask other people for opinions", "social"],
                    ["I follow my imagination", "creative"],
                    ["I think carefully before deciding", "calm"],
                    ["I focus on what will help me succeed", "ambitious"]
                ]
            },
            {
                question: "Which sounds most like you?",
                answers: [
                    ["I love meeting new people", "social"],
                    ["I have lots of creative ideas", "creative"],
                    ["I am peaceful and patient", "calm"],
                    ["I am highly motivated", "ambitious"]
                ]
            },
            {
                question: "What do your friends usually say about you?",
                answers: [
                    ["You are fun and friendly 😄", "social"],
                    ["You are creative and unique ✨", "creative"],
                    ["You are calm and understanding 🌿", "calm"],
                    ["You are hardworking and determined 💪", "ambitious"]
                ]
            },
            {
                question: "Which superpower would you choose?",
                answers: [
                    ["Talking to anyone instantly 🗣️", "social"],
                    ["Creating anything I imagine 🎨", "creative"],
                    ["Controlling my emotions 🧘", "calm"],
                    ["Always achieving my goals 🏆", "ambitious"]
                ]
            },
            {
                question: "What motivates you the most?",
                answers: [
                    ["People and relationships ❤️", "social"],
                    ["New ideas and experiences 💡", "creative"],
                    ["Peace and balance 🌸", "calm"],
                    ["Success and achievement 🚀", "ambitious"]
                ]
            }
        ],

        results: {
            social: {
                emoji: "🥳",
                title: "The Social Leader",
                description:
                    "You are friendly, energetic and love connecting with people. You enjoy conversations, meeting new people and making others feel comfortable."
            },

            creative: {
                emoji: "🎨",
                title: "The Creative Explorer",
                description:
                    "You have a creative mind and love new ideas. You enjoy expressing yourself, exploring possibilities and doing things in your own unique way."
            },

            calm: {
                emoji: "🌿",
                title: "The Calm Thinker",
                description:
                    "You are thoughtful, patient and peaceful. You like taking your time, thinking deeply and keeping balance in your life."
            },

            ambitious: {
                emoji: "🏆",
                title: "The Ambitious Achiever",
                description:
                    "You are motivated, determined and goal-oriented. When you want something, you work hard and keep moving forward."
            }
        }
    },


    /* ================= FRIEND ================= */

    friend: {
        title: "Friendship Quiz",
        icon: "❤️",

        questions: [
            {
                question: "Your friend is having a bad day. What do you do?",
                answers: [
                    ["Call them and cheer them up 📞", "supportive"],
                    ["Give them space and listen later 🌿", "understanding"],
                    ["Make them laugh 😂", "fun"],
                    ["Help them solve the problem 💪", "reliable"]
                ]
            },
            {
                question: "What do you enjoy most with friends?",
                answers: [
                    ["Deep conversations ❤️", "understanding"],
                    ["Going on adventures 🚀", "fun"],
                    ["Helping each other 🤝", "supportive"],
                    ["Planning things together 🎯", "reliable"]
                ]
            },
            {
                question: "Your friend needs help. You...",
                answers: [
                    ["Immediately offer to help", "supportive"],
                    ["Listen carefully first", "understanding"],
                    ["Try to make the situation positive", "fun"],
                    ["Find a practical solution", "reliable"]
                ]
            },
            {
                question: "What makes a friendship strong?",
                answers: [
                    ["Always being there for each other", "supportive"],
                    ["Understanding each other's feelings", "understanding"],
                    ["Having fun together", "fun"],
                    ["Keeping promises", "reliable"]
                ]
            },
            {
                question: "Which activity sounds best with your friends?",
                answers: [
                    ["Helping someone together 🤝", "supportive"],
                    ["Talking all night 🌙", "understanding"],
                    ["A fun road trip 🚗", "fun"],
                    ["Planning a big project 🎯", "reliable"]
                ]
            },
            {
                question: "What do your friends appreciate about you?",
                answers: [
                    ["I always support them", "supportive"],
                    ["I understand their feelings", "understanding"],
                    ["I make them laugh", "fun"],
                    ["They can always depend on me", "reliable"]
                ]
            }
        ],

        results: {
            supportive: {
                emoji: "🤗",
                title: "The Supportive Friend",
                description:
                    "You are the friend people can turn to when they need encouragement. You genuinely care about the people around you and love helping them."
            },

            understanding: {
                emoji: "💗",
                title: "The Understanding Friend",
                description:
                    "You are a thoughtful listener. You understand people's feelings and give your friends the space and support they need."
            },

            fun: {
                emoji: "😂",
                title: "The Fun Friend",
                description:
                    "You bring positive energy wherever you go. Your friends love your humor, enthusiasm and ability to make ordinary moments exciting."
            },

            reliable: {
                emoji: "🤝",
                title: "The Reliable Friend",
                description:
                    "You are dependable and responsible. When you make a promise, your friends know they can count on you."
            }
        }
    },


    /* ================= CAREER ================= */

    career: {
        title: "Career Quiz",
        icon: "💼",

        questions: [
            {
                question: "Which type of activity sounds most exciting?",
                answers: [
                    ["Creating designs or content 🎨", "creative"],
                    ["Helping and talking to people ❤️", "people"],
                    ["Solving difficult problems 🧠", "analytical"],
                    ["Leading a project 🚀", "leader"]
                ]
            },
            {
                question: "What are you naturally good at?",
                answers: [
                    ["Coming up with new ideas", "creative"],
                    ["Understanding people", "people"],
                    ["Finding patterns and solutions", "analytical"],
                    ["Organizing and leading others", "leader"]
                ]
            },
            {
                question: "Which workplace sounds best?",
                answers: [
                    ["A creative studio 🎨", "creative"],
                    ["A place where I meet many people", "people"],
                    ["A research or technology environment 🔬", "analytical"],
                    ["A business or management office 💼", "leader"]
                ]
            },
            {
                question: "How do you approach challenges?",
                answers: [
                    ["I think of a new and creative approach", "creative"],
                    ["I ask people and work together", "people"],
                    ["I analyze the problem carefully", "analytical"],
                    ["I take charge and make a plan", "leader"]
                ]
            },
            {
                question: "Which subject sounds most interesting?",
                answers: [
                    ["Art, design or media", "creative"],
                    ["Psychology or communication", "people"],
                    ["Science, mathematics or technology", "analytical"],
                    ["Business or management", "leader"]
                ]
            },
            {
                question: "What would make you happiest in a career?",
                answers: [
                    ["Creating something original ✨", "creative"],
                    ["Making a positive difference to people ❤️", "people"],
                    ["Discovering solutions to complex problems 🔬", "analytical"],
                    ["Building something successful 🏆", "leader"]
                ]
            }
        ],

        results: {
            creative: {
                emoji: "🎨",
                title: "Creative Career",
                description:
                    "You may enjoy careers where you can create, design and express new ideas. Design, content creation, marketing and media could match your creative personality."
            },

            people: {
                emoji: "❤️",
                title: "People-Focused Career",
                description:
                    "You enjoy communication and helping others. Careers involving teaching, customer relations, human resources, counseling or communication may suit you."
            },

            analytical: {
                emoji: "🧠",
                title: "Analytical Career",
                description:
                    "You enjoy solving problems and understanding how things work. Science, technology, research, data and analytical careers may be a good match."
            },

            leader: {
                emoji: "🚀",
                title: "Leadership Career",
                description:
                    "You like taking responsibility and turning ideas into action. Business, management, entrepreneurship and leadership roles may suit you."
            }
        }
    },


    /* ================= LOVE ================= */

    love: {
        title: "Love Style Quiz",
        icon: "💕",

        questions: [
            {
                question: "How do you usually show someone you care?",
                answers: [
                    ["I tell them how much they mean to me ❤️", "words"],
                    ["I spend quality time with them 🕐", "time"],
                    ["I help them when they need me 🤝", "actions"],
                    ["I surprise them with thoughtful gifts 🎁", "gifts"]
                ]
            },
            {
                question: "What makes you happiest in a relationship?",
                answers: [
                    ["Sweet messages and compliments 💌", "words"],
                    ["Doing things together 🥰", "time"],
                    ["Having someone who supports me", "actions"],
                    ["Little surprises and gifts 🎁", "gifts"]
                ]
            },
            {
                question: "Your ideal date is...",
                answers: [
                    ["A romantic conversation 🌹", "words"],
                    ["Spending the whole day together ❤️", "time"],
                    ["Doing something helpful together 🤝", "actions"],
                    ["A surprise date 🎉", "gifts"]
                ]
            },
            {
                question: "When someone you love is sad, you...",
                answers: [
                    ["Give them encouraging words", "words"],
                    ["Stay with them", "time"],
                    ["Try to help solve the problem", "actions"],
                    ["Give them a small surprise", "gifts"]
                ]
            },
            {
                question: "What do you value most?",
                answers: [
                    ["Good communication 💬", "words"],
                    ["Attention and time ❤️", "time"],
                    ["Trust and support 🤝", "actions"],
                    ["Thoughtful gestures 🎁", "gifts"]
                ]
            },
            {
                question: "Which sounds most romantic?",
                answers: [
                    ["A heartfelt letter 💌", "words"],
                    ["Watching the sunset together 🌅", "time"],
                    ["Doing something special for each other", "actions"],
                    ["A surprise present 🎁", "gifts"]
                ]
            }
        ],

        results: {
            words: {
                emoji: "💌",
                title: "The Sweet Communicator",
                description:
                    "You express love through words. Compliments, meaningful conversations and heartfelt messages are important to you."
            },

            time: {
                emoji: "🥰",
                title: "The Quality-Time Lover",
                description:
                    "You value presence and attention. Spending meaningful time together makes you feel connected and appreciated."
            },

            actions: {
                emoji: "🤝",
                title: "The Caring Doer",
                description:
                    "You show love through actions. Helping, supporting and being there for someone are your strongest ways of expressing care."
            },

            gifts: {
                emoji: "🎁",
                title: "The Thoughtful Romantic",
                description:
                    "You love thoughtful gestures and surprises. You enjoy making people feel special through meaningful little gifts."
            }
        }
    },


    /* ================= INTROVERT ================= */

    introvert: {
        title: "Introvert or Extrovert?",
        icon: "🌿",

        questions: [
            {
                question: "After a busy week, you want to...",
                answers: [
                    ["Go out and meet friends 🥳", "extrovert"],
                    ["Stay home and recharge 🌿", "introvert"]
                ]
            },
            {
                question: "At a party, you usually...",
                answers: [
                    ["Talk to lots of people", "extrovert"],
                    ["Stay with a few people", "introvert"]
                ]
            },
            {
                question: "Which sounds more enjoyable?",
                answers: [
                    ["A busy social event 🎉", "extrovert"],
                    ["A quiet evening 📖", "introvert"]
                ]
            },
            {
                question: "When meeting new people...",
                answers: [
                    ["I start conversations easily", "extrovert"],
                    ["I prefer to observe first", "introvert"]
                ]
            },
            {
                question: "Where do you get most of your energy?",
                answers: [
                    ["From being around people ⚡", "extrovert"],
                    ["From quiet time alone 🌙", "introvert"]
                ]
            },
            {
                question: "Your ideal weekend is...",
                answers: [
                    ["Friends, activities and adventures 🚀", "extrovert"],
                    ["Relaxing, hobbies and personal time 🌿", "introvert"]
                ]
            }
        ],

        results: {
            extrovert: {
                emoji: "🥳",
                title: "You're More Extroverted",
                description:
                    "You seem to enjoy social interaction, activities and connecting with other people. You often gain energy from being around others."
            },

            introvert: {
                emoji: "🌿",
                title: "You're More Introverted",
                description:
                    "You seem to enjoy quiet time, smaller groups and personal space. You often recharge by having time for yourself."
            }
        }
    },


    /* ================= IQ ================= */

    iq: {
        title: "Fun IQ Challenge",
        icon: "🧩",

        questions: [
            {
                question: "What number comes next? 2, 4, 6, 8, ?",
                answers: [
                    ["9", "wrong"],
                    ["10", "correct"],
                    ["11", "wrong"],
                    ["12", "wrong"]
                ]
            },
            {
                question: "What number comes next? 5, 10, 15, 20, ?",
                answers: [
                    ["22", "wrong"],
                    ["24", "wrong"],
                    ["25", "correct"],
                    ["30", "wrong"]
                ]
            },
            {
                question: "Which one does NOT belong?",
                answers: [
                    ["Apple 🍎", "wrong"],
                    ["Banana 🍌", "wrong"],
                    ["Carrot 🥕", "correct"],
                    ["Orange 🍊", "wrong"]
                ]
            },
            {
                question: "If you have 3 apples and get 2 more, how many do you have?",
                answers: [
                    ["4", "wrong"],
                    ["5", "correct"],
                    ["6", "wrong"],
                    ["7", "wrong"]
                ]
            },
            {
                question: "Which number is the largest?",
                answers: [
                    ["17", "wrong"],
                    ["29", "correct"],
                    ["21", "wrong"],
                    ["19", "wrong"]
                ]
            },
            {
                question: "What comes next? Monday, Tuesday, Wednesday, ?",
                answers: [
                    ["Friday", "wrong"],
                    ["Saturday", "wrong"],
                    ["Thursday", "correct"],
                    ["Sunday", "wrong"]
                ]
            }
        ],

        results: {
            correct: {
                emoji: "🧠",
                title: "Great Job!",
                description:
                    "You did a great job on this fun logic challenge. Keep practicing puzzles and problem-solving games to sharpen your skills."
            },

            wrong: {
                emoji: "🧩",
                title: "Nice Try!",
                description:
                    "You completed the fun IQ challenge. Keep practicing patterns, logic and puzzles to improve your problem-solving skills."
            }
        }
    }

};


/* =====================================================
   VARIABLES
===================================================== */

let currentQuiz = "";
let currentQuestion = 0;
let scores = {};
let answeredTypes = [];


/* =====================================================
   SHOW QUIZZES
===================================================== */

function showQuizzes() {

    document.getElementById("home").style.display = "none";

    document.getElementById("categories").style.display = "block";

    document.getElementById("quizzes").style.display = "block";

    document.getElementById("about").style.display = "block";

    document.getElementById("related").style.display = "block";

    document.getElementById("quiz-area").style.display = "none";

    document.getElementById("result").style.display = "none";

    document.getElementById("quizzes").scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz(quizName) {

    if (!quizData[quizName]) {
        return;
    }

    currentQuiz = quizName;

    currentQuestion = 0;

    scores = {};

    answeredTypes = [];

    const quiz = quizData[quizName];

    quiz.questions.forEach(question => {

        question.answers.forEach(answer => {

            const type = answer[1];

            if (scores[type] === undefined) {
                scores[type] = 0;
            }

        });

    });


    document.getElementById("home").style.display = "none";

    document.getElementById("categories").style.display = "none";

    document.getElementById("quizzes").style.display = "none";

    document.getElementById("about").style.display = "none";

    document.getElementById("related").style.display = "none";

    document.getElementById("result").style.display = "none";

    document.getElementById("quiz-area").style.display = "block";


    showQuestion();


    document.getElementById("quiz-area").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const quiz = quizData[currentQuiz];

    const question = quiz.questions[currentQuestion];

    document.getElementById("progress").textContent =
        `Question ${currentQuestion + 1} of ${quiz.questions.length}`;


    const progressPercent =
        ((currentQuestion + 1) / quiz.questions.length) * 100;


    document.getElementById("progress-fill").style.width =
        progressPercent + "%";


    document.querySelector(".question-icon").textContent =
        quiz.icon;


    document.getElementById("question").textContent =
        question.question;


    const answersContainer =
        document.getElementById("answers");


    answersContainer.innerHTML = "";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer[0];


        button.onclick = function () {

            selectAnswer(answer[1]);

        };


        answersContainer.appendChild(button);

    });

}


/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(type) {

    if (scores[type] === undefined) {
        scores[type] = 0;
    }

    scores[type]++;

    answeredTypes.push(type);

    currentQuestion++;

    const quiz = quizData[currentQuiz];


    if (currentQuestion < quiz.questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}


/* =====================================================
   GET RESULT
===================================================== */

function getResultType() {

    let highestType = Object.keys(scores)[0];

    for (let type in scores) {

        if (scores[type] > scores[highestType]) {

            highestType = type;

        }

    }

    return highestType;

}


/* =====================================================
   GET SCORE
===================================================== */

function getPercentage() {

    const totalQuestions =
        quizData[currentQuiz].questions.length;


    if (currentQuiz === "iq") {

        const correctAnswers =
            scores.correct || 0;

        return Math.round(
            (correctAnswers / totalQuestions) * 100
        );

    }


    const highestScore =
        Math.max(...Object.values(scores));


    return Math.round(
        (highestScore / totalQuestions) * 100
    );

}


/* =====================================================
   SHOW RESULT
===================================================== */

function showResult() {

    document.getElementById("quiz-area").style.display =
        "none";


    document.getElementById("result").style.display =
        "flex";


    const resultType = getResultType();


    const result =
        quizData[currentQuiz].results[resultType];


    document.getElementById("result-emoji").textContent =
        result.emoji;


    document.getElementById("result-title").textContent =
        result.title;


    document.getElementById("result-description").textContent =
        result.description;


    document.getElementById("result-score").textContent =
        getPercentage() + "%";


    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   RESTART QUIZ
===================================================== */

function restartQuiz() {

    startQuiz(currentQuiz);

}


/* =====================================================
   BACK TO QUIZZES
===================================================== */

function backToQuizzes() {

    document.getElementById("quiz-area").style.display =
        "none";

    document.getElementById("result").style.display =
        "none";

    document.getElementById("home").style.display =
        "flex";

    document.getElementById("categories").style.display =
        "block";

    document.getElementById("quizzes").style.display =
        "block";

    document.getElementById("about").style.display =
        "block";

    document.getElementById("related").style.display =
        "block";


    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   RANDOM QUIZ
===================================================== */

function randomQuiz() {

    const quizNames = Object.keys(quizData);

    const randomIndex =
        Math.floor(Math.random() * quizNames.length);

    startQuiz(quizNames[randomIndex]);

}


/* =====================================================
   FILTER QUIZZES
===================================================== */

function filterQuizzes(category) {

    const cards =
        document.querySelectorAll(".quiz-card");


    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("quizzes").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const button =
        document.querySelector(".theme-btn");


    if (document.body.classList.contains("dark")) {

        button.textContent = "☀️";

        localStorage.setItem("quiznestDarkMode", "true");

    } else {

        button.textContent = "🌙";

        localStorage.setItem("quiznestDarkMode", "false");

    }

}


/* =====================================================
   LOAD DARK MODE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const darkMode =
        localStorage.getItem("quiznestDarkMode");


    if (darkMode === "true") {

        document.body.classList.add("dark");

        const button =
            document.querySelector(".theme-btn");

        if (button) {
            button.textContent = "☀️";
        }

    }

});


/* =====================================================
   WHATSAPP SHARE
===================================================== */

function shareWhatsApp() {

    const title =
        document.getElementById("result-title").textContent;


    const score =
        document.getElementById("result-score").textContent;


    const text =
        `I got "${title}" on QuizNest! 🎉 My score: ${score}. Take the quiz and discover your result too!`;


    const url =
        "https://wa.me/?text=" +
        encodeURIComponent(text);


    window.open(url, "_blank");

}


/* =====================================================
   FACEBOOK SHARE
===================================================== */

function shareFacebook() {

    const pageUrl =
        window.location.href;


    const facebookUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(pageUrl);


    window.open(
        facebookUrl,
        "_blank",
        "width=600,height=500"
    );

}


/* =====================================================
   DOWNLOAD RESULT AS IMAGE
===================================================== */

function downloadResult() {

    const resultCard =
        document.getElementById("result-card");


    if (typeof html2canvas === "undefined") {

        alert(
            "Please connect to the internet and try again."
        );

        return;
    }


    html2canvas(resultCard, {

        backgroundColor: "#ffffff",

        scale: 2

    }).then(function (canvas) {

        const link =
            document.createElement("a");


        link.download =
            "QuizNest-Result.png";


        link.href =
            canvas.toDataURL("image/png");


        link.click();

    });

}


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (
            document.getElementById("quiz-area").style.display === "block"
        ) {

            backToQuizzes();

        }

    }

});