/* Prompt user info inputs*/
window.onload = function() {
  initAll();
};

/* Global Variables */
var candidateName = [];
var courseName = [];
var courseScore = [];
var courseUnit = [];

/* user info inputs */
function initAll() {
  var candName = prompt("Hello Sparky, whats your name?");
  if (candName === "") {
    reloadPage();
  } else {
    var numCoursesOffered = prompt(candName + " how many courses are you offering?");
    if (isNaN(numCoursesOffered) || numCoursesOffered === "" || numCoursesOffered === null) {
      alert("You didnt enter a number. Start all over again dummy!")
      reloadPage();
    } else {
      candidateName.push(candName);
      var noOfCourses = numCoursesOffered;
      for (i = 1; i <= noOfCourses; i++) {
        courseName.push(prompt("Course name? e.g. Javascript, Python etc."));
        courseUnit.push(prompt("Course unit? e.g. 3, 2, 5 etc."));
        courseScore.push(prompt("Score? e.g. 400, 120, 0 etc."));
      }
      printStudentScoreCard();
    }
  }
}

/* Print score sheet to screen */
function printStudentScoreCard() {
  document.getElementById("greeting").innerHTML = candidateName + "'s Score Sheet";
  document.getElementById("courseName").innerHTML = "My Course(s): " + courseName;
  document.getElementById("courseUnit").innerHTML = "Course Unit(s): " + courseUnit;
  document.getElementById("courseScore").innerHTML = "My Score(s): " + courseScore;
}

/* Reload Page */
function reloadPage() {
  alert("Your name is required! Please enter your name.");
  window.location = "index.html";
}