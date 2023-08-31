let pipesCistern = document.getElementById('pipes');
let mainContainer = document.querySelector('.main-container')

let parentContainer = document.createElement('div');
parentContainer.style.position = 'relative';
parentContainer.appendChild(mainContainer);
document.body.appendChild(parentContainer);

// Create the timer element and position it within the parent container
let timerElement = document.createElement('div');
timerElement.style.position = 'absolute';
timerElement.style.top = '10px';
timerElement.style.left = '10px';
parentContainer.appendChild(timerElement);

pipesCistern.addEventListener("click", () => {
  myFunction(0);
  startTimer(120);
});

var storedName = localStorage.getItem("storedName");

function loadName(){
    var userName = document.getElementById("userName")
}

let timeleft;
let timeinterval;
startTimer();
function startTimer(duration){
    console.log("Hello timer")
    timeleft = duration;
    timeinterval = setInterval(updateTimer,1000);
}
function updateTimer()
{
    console.log("Update timer")
    if(timeleft>0)
    {
        timerElement.textContent=`Time left ${timeleft}`;
        timeleft--;
    }
    else{
        clearInterval(timeinterval);
        timerElement.textContent = `times up`;
    }
}




let arr = [
    {
        "Question": "What is your name",
        "Option1": "Hardik",
        "Option2": "Hardik",
        "Option3": "Hardik",
        "Option4": "Hardik",
        "Correctedans": 1
    },
    {
        "Question": "Hi my name is hardik",
        "Option1": "Hardik",
        "Option2": "Hardik",
        "Option3": "Hardik",
        "Option4": "Hardik",
        "Correctedans": 2
    },
    {
        "Question": "Nice how you doin",
        "Option1": "Hardik",
        "Option2": "Hardik",
        "Option3": "Hardik",
        "Option4": "Hardik",
        "Correctedans": 1
    },
    {
        "Question": "Great",
        "Option1": "Hardik",
        "Option2": "Hardik",
        "Option3": "Hardik",
        "Option4": "Hardik",
        "Correctedans": 3
    }

]
console.log(arr[i].Question);
function myFunction(i) {
    console.log(i);
    mainContainer.innerHTML = ""
    // mainContainer.style.display = 'none';
    let questionElement = document.createElement('h2');
    questionElement.textContent = arr[i].Question;
    mainContainer.appendChild(questionElement);
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    mainContainer.appendChild(buttonContainer);

    var buttonRow1 = document.createElement('div');
    buttonRow1.classList.add('button-row');
    buttonContainer.appendChild(buttonRow1);

    var buttonRow2 = document.createElement('div');
    buttonRow2.classList.add('button-row');
    buttonContainer.appendChild(buttonRow2);

    var optionButton1 = document.createElement('button');
    optionButton1.textContent = arr[i].Option1;
    buttonRow1.appendChild(optionButton1);

    var optionButton2 = document.createElement('button');
    optionButton2.textContent = arr[i].Option2;
    buttonRow1.appendChild(optionButton2);

    var optionButton3 = document.createElement('button');
    optionButton3.textContent = arr[i].Option3;
    buttonRow2.appendChild(optionButton3);

    var optionButton4 = document.createElement('button');
    optionButton4.textContent = arr[i].Option4;
    buttonRow2.appendChild(optionButton4);

    var buttonRow3 = document.createElement('div');
    buttonRow3.classList.add('button-row');
    buttonContainer.appendChild(buttonRow3);

    var optionButton5 = document.createElement('button');
    optionButton5.textContent = 'Next Question';
    buttonRow3.appendChild(optionButton5);
    optionButton1.addEventListener("click", () => checkAnswer(i, 1));
    optionButton2.addEventListener("click", () => checkAnswer(i, 2));
    optionButton3.addEventListener("click", () => checkAnswer(i, 3));
    optionButton4.addEventListener("click", () => checkAnswer(i, 4));
    optionButton5.addEventListener("click", () => myFunction(++i));
}
function checkAnswer(questionIndex, optionChoosen) {
    if (arr[questionIndex].Correctedans == optionChoosen) {
        console.log("correct Ans");
    }
    else {
        console.log("Wrong Ans");
    }
}