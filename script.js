var questions = [
"Hva skjer når du skriver google.com i nettleseren?",
"Hvor mange bits består en IPv4-adresse av?",
"Hva er hovedforskjellen mellom RAM og lagring (SSD)?",
"Hva brukes en for loop til i programmering?",
"Hva gjør en router?"
]

var answers_list = [
["PC-en kobler direkte til Google", "DNS finner IP-adressen til Google", "PC-en starter på nytt", "PC-en åpner Instagram"],
["16 bits", "32 bits", "64 bits", "69 bits"],
["RAM er midlertidig, SSD lagrer data permanent", "SSD er raskere enn RAM", "Det er ingen forskjell", "RAM lagrer filer permanent, mens SSD er midlertidig"],
["Å gjenta kode flere ganger", "Å slette kode", "Å koble til Wi-Fi", "Å gjenta kode automatisk uten å skrive den flere ganger"],
["Kobler sammen nettverk og sender data riktig vei", "Lagrer alle passord", "Lage nettsider", "Å sende data mellom forskjellige nettverk"]
]

var correct_answers = [1, 1, 0, 0, 0]

var current_question = 0
var points = 0

const question = document.getElementById("question")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const points_display = document.getElementById("points")
const result = document.getElementById("result")

function update_questions() {

question.textContent = questions[current_question]

option1.textContent = answers_list[current_question][0]
option2.textContent = answers_list[current_question][1]
option3.textContent = answers_list[current_question][2]
option4.textContent = answers_list[current_question][3]

points_display.textContent = "Poeng: " + points


}

function answer(a) {


if (a == correct_answers[current_question]) {
    points = points + 1
}

current_question = current_question + 1

if (current_question == questions.length) {

    question.textContent = "Quiz ferdig!"

    option1.style.display = "none"
    option2.style.display = "none"
    option3.style.display = "none"
    option4.style.display = "none"

    points_display.textContent = "Du fikk " + points + " av " + questions.length + " poeng"

    result.innerHTML = '<button onclick="restartQuiz()">Restart</button>'

} else {
    update_questions()
}


}

function restartQuiz() {


current_question = 0
points = 0

option1.style.display = "block"
option2.style.display = "block"
option3.style.display = "block"
option4.style.display = "block"

result.innerHTML = ""

update_questions()


}

update_questions()
