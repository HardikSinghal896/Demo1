const questions = [
    {
        serial: 1,
        que: "The black cotton soil of India has been formed due to the weathering of?",
        ans: 2,
        option: [
            "Brown forest soil",
            "Fissure volcanic rock",
            "Granite and schist",
            "Shale and limestone"]
    },
    {
        serial: 2,
        que: "With references to India, Didwana, Kuchaman, Sargol and khatu are the names of?",
        ans: 4,
        option: [
            "Glaciers",
            "Mangrove areas",
            "Ramsar sites",
            "Saline lakes"]
    },
    {
        serial: 3,
        que: "Among the following, which one is the least water-efficient crop?",
        ans: 1,
        option: [
            "Sugarcane",
            "Sunflower",
            "Pearl Millet",
            "Red Gram"]
    },
    {
        serial: 4,
        que: "Which one of the following pairs of islands is separated from each other by the ‘Ten Degree Channel’?",
        ans: 1,
        option: [
            "Andaman and Nicobar",
            "Nicobar and Sumatra",
            "Maldives and Lakshadweep",
            "Sumatra and Java"]
    },
    {
        serial: 5,
        que: "On the planet earth, most of the freshwater exists as ice caps and glaciers. Out of the remaining freshwater, the largest proportion?",
        ans: 3,
        option: [
            "is found in atmosphere as moisture and clouds",
            "is found in freshwater lakes and rivers",
            "exists as groundwater",
            "exists as soil moisture"]
    },
    {
        serial: 6,
        que: "Among the following States, which one has the most suitable climatic conditions for the cultivation of a large variety of orchids with minimum cost of production, and can develop an export oriented industry in this field?",
        ans: 2,
        option: [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Madhya Pradesh",
            "Uttar Pradesh"]
    },
    {
        serial: 7,
        que: "If a tropical rain forest is removed, it does not regenerate quickly as compared to a tropical deciduous forest. This is because?",
        ans: 1,
        option: [
            "the soil of rain forest is deficient in nutrients",
            "propagules of the trees in a rain forest have poor viability",
            "the rain forest species are slow-growing",
            "exotic species invade the fertile soil of rain forest"]
    },
    {
        serial: 8,
        que: "The lower Gangetic plain is characterized by humid climate with high temperature throughout the year. Which one among the following pairs of crops is most suitable for this region?",
        ans: 3,
        option: [
            "Paddy and cotton",
            "Wheat and Jute",
            "Paddy and Jute",
            "Wheat and cotton"]
    },
    {
        serial: 9,
        que: "Contour bunding is a method of soil conservation used in:?",
        ans: 2,
        option: [
            "desert margins, liable to strong wind action",
            "low flat plains, close to stream courses, liable to flooding",
            "scrublands, liable to spread of weed growth",
            "None of the above"]
    },
    {
        serial: 10,
        que: "In which one among the following categories of protected areas in India are local people not allowed to collect and use the biomass?",
        ans: 2,
        option: [
            "Biosphere Reserves",
            "National Parks",
            "Wetlands declared under Ramsar Convention",
            "Wildlife Sanctuaries"]
    }
]

document.querySelector(".main-container").style.display = "none";
let nextButton = document.querySelector('.btn5');
let option1 = document.querySelector('.btn1');
let option2 = document.querySelector('.btn2');
let option3 = document.querySelector('.btn3');
let option4 = document.querySelector('.btn4');
let timer = document.getElementById('timer');
let score = document.querySelector('#score');
let calculateScore = 0;
let calculateAttempted = 0;
let correctAnswers = document.querySelector('#correctAnswers');
let wrongAttemps = document.querySelector('#wrongAttemps');
let timeTaken = document.querySelector('#timeTaken');
let totalAttempted = document.querySelector('#totalAttempted');

let i = 0;
let timeleft;
let timeinterval;
function startTimer(duration) {

    timeleft = duration;
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(updatetime, 1000);
}

function updatetime() {

    if (timeleft > 0) {
        timer.textContent = `${timeleft}`;
        timeleft--;
    }
    else {
        clearInterval(timeinterval);
        timer.innerHTML = `times up`;
    }
}

let questionContainer = document.querySelector('.question-container');
let originalBackgroundColor = option1.style.backgroundColor;
let originalColor = option1.style.color;
function loadQuiz(i) {
    score.innerHTML = `SCORE : ${calculateScore}`;
    if (i >= 10) {
        resultshow();
    }
    clearInterval(timeinterval);
    startTimer(10);
    option1.style.backgroundColor = originalBackgroundColor;
    option1.style.color = originalColor;
    option2.style.backgroundColor = originalBackgroundColor;
    option2.style.color = originalColor;
    option3.style.backgroundColor = originalBackgroundColor;
    option3.style.color = originalColor;
    option4.style.backgroundColor = originalBackgroundColor;
    option4.style.color = originalColor;
    console.log(questions[i].que);


    questionContainer.innerHTML = questions[i].que;
    option1.innerHTML = questions[i].option[0];
    option2.innerHTML = questions[i].option[1];
    option3.innerHTML = questions[i].option[2];
    option4.innerHTML = questions[i].option[3];


    
    
}
    option1.addEventListener('click', () => { checkAnswer(i, 1) });
    option2.addEventListener('click', () => { checkAnswer(i, 2) });
    option3.addEventListener('click', () => { checkAnswer(i, 3) });
    option4.addEventListener('click', () => { checkAnswer(i, 4) });
    nextButton.addEventListener('click', () => { loadQuiz(++i) });

function resultshow() {
    correctAnswers.innerHTML+=`     ${calculateScore}`;
    wrongAttemps.innerHTML+=`       ${calculateAttempted-calculateScore}`;
    totalAttempted.innerHTML+=`     ${calculateAttempted}`;

    document.querySelector(".main-container1").style.display = "none";
    document.querySelector(".main-container").style.display = "";

}

function checkAnswer(questionIndex, optionChoosen) {
    calculateAttempted++;
    if (questions[i].ans == optionChoosen) {
        calculateScore += 1;
        console.log(calculateScore);
        console.log("correct ans");
        console.log(optionChoosen);
        if (optionChoosen == 1) {
            option1.style.backgroundColor = 'green';
            option1.style.color = 'white'
        }
        if (optionChoosen == 2) {
            option2.style.backgroundColor = 'green';
            option2.style.color = 'white'
        }
        if (optionChoosen == 3) {
            option3.style.backgroundColor = 'green';
            option3.style.color = 'white'
        }
        if (optionChoosen == 4) {
            option4.style.backgroundColor = 'green';
            option4.style.color = 'white'
        }
    }
    else {
        console.log("Wrong");
        if (optionChoosen == 1) {
            option1.style.backgroundColor = 'red';
            option1.style.color = 'white'
        }
        if (optionChoosen == 2) {
            option2.style.backgroundColor = 'red';
            option2.style.color = 'white'
        }
        if (optionChoosen == 3) {
            option3.style.backgroundColor = 'red';
            option3.style.color = 'white'
        }
        if (optionChoosen == 4) {
            option4.style.backgroundColor = 'red';
            option4.style.color = 'white'
        }
    }
}
loadQuiz(0);
