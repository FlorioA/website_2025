import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';


//
function rollText(words, textElement) {
    var wordsCount = 0;

    textElement.innerHTML = words[wordsCount];
    wordsCount++;

    setInterval(function () {
        textElement.innerHTML = words[wordsCount];

        if (wordsCount >= (words.length - 1)) {
            wordsCount = 0;
        } else {
            wordsCount++;
        }

    }, 1800);
}

rollText(["Bienvenue", "Welcome", "Bienvenido", "Willkommen"], document.getElementById("hello_tag"));


//
var squares = document.getElementsByClassName("square");
var lines = document.getElementsByClassName("line");

var scoreDisplay = document.getElementById("score_display");
var scoreValue = document.getElementById("score_value");

for (let squareElement of squares) {
    squareElement.addEventListener("click", clickSquare);
}

function clickSquare() {
    //
    if (scoreDisplay.style.display == "") {
        scoreDisplay.style.display = "block";
    }

    //
    switchSquare(this);

    let previousSquareId = Number(this.id) - 1;
    let previousSquare = document.getElementById(previousSquareId);
    if (previousSquare) {
        switchSquare(previousSquare);
    }

    let nextSquareId = Number(this.id) + 1;
    let nextSquare = document.getElementById(nextSquareId);
    if (nextSquare) {
        switchSquare(nextSquare);
    }

    //
    var scoreCount = 0;
    for (let square of squares) {
        if (square.style.backgroundColor != "") {
            scoreCount++;
        }
    }

    scoreValue.innerHTML = scoreCount;
    if (scoreCount == 10) {
        setVictory();
    }
}

function switchSquare(square) {
    let currentColor = square.style.backgroundColor;

    if (currentColor == "") {
        square.style.backgroundColor = "#5b2333";
    } else {
        square.style.backgroundColor = "";
    }
}

function setVictory() {
    for (let squareElement of squares) {
        squareElement.removeEventListener("click", clickSquare);

        squareElement.style.backgroundColor = "#a84e9c";
        squareElement.style.borderColor = "#a84e9c";
    }

    for (let lineElement of lines) {
        lineElement.style.borderColor = "#a84e9c";
    }

    scoreDisplay.style.color = "#5b2333";
    scoreDisplay.style.fontSize = "medium";
    rollText(["Félicitations !", "Congratulations!", "¡Felicitaciones!", "Glückwunsch !"], scoreDisplay);
}

//
var copyButtonMail = document.getElementById("copy_btn_mail");
var copyButtonSvgMail = document.getElementById("copy_btn_svg_mail");
var copiedTextMail = document.getElementById("copied_text_mail");
copyButtonMail.addEventListener("click", () => {
    navigator.clipboard.writeText("adrien.florio@gmail.com");

    copyButtonSvgMail.setAttribute('style', 'color:rgb(157, 186, 204) !important');
    copyButtonMail.setAttribute('style', 'color:rgb(157, 186, 204) !important');
    copiedTextMail.classList.remove("d-none");
});

var copyButtonSms = document.getElementById("copy_btn_sms");
var copyButtonSvgSms = document.getElementById("copy_btn_svg_sms");
var copiedTextSms = document.getElementById("copied_text_sms");
copyButtonSms.addEventListener("click", () => {
    navigator.clipboard.writeText("330670383350");

    copyButtonSvgSms.setAttribute('style', 'color:rgb(157, 186, 204) !important');
    copyButtonSms.setAttribute('style', 'color:rgb(157, 186, 204) !important');
    copiedTextSms.classList.remove("d-none");
});

