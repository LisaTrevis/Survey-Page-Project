var answerOne = document.getElementsByClassName("survey1")
var answerTwo = document.getElementsByClassName("survey2")
var answerThree = document.getElementsByClassName("survey3")

var answers = [];

function processSurvey() {
	var newAnswerTwo = []

	for(i = 0; i < answerOne.length; i++) {
		if (answerOne[i].checked) {
			answers.push(answerOne[i].value)
		}
	}

	for(i = 0; i < answerTwo.length; i++) {
		if (answerTwo[i].checked) {
			newAnswerTwo.push(answerTwo[i].value)
		}
	}

	answers.push(newAnswerTwo)

	for(i = 0; i < answerThree.length; i++) {
		if (answerThree[i].selected) {
			answers.push(answerThree[i].value)
		}
	}	document.getElementById("q1").reset();
		document.getElementById("q2").reset();
		document.getElementById("q3").reset();
}

document.getElementById("btn").addEventListener("click",processSurvey, false)

console.log(answers)