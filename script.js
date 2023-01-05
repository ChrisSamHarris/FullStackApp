//console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Impossible Year";
}

const age1 = calcFactAge(2016);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

let votesInteresting = 20;
let votesMindblowing = 25;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mind blowing!");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesMindblowing > votesInteresting) {
  console.log("Minblowing fact!!!");
}

//falsy values: 0, '', null, undefined
let falsyvalue = 0;
//truthy values: everything else..
if (falsyvalue) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "The fact may be false, check more sources..";

alert(message);

// ###### Practice: #######
// let votesInteresting = 23;
// let votesMindblowing = 5;
// const text = "London is the capital of England";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindblowing;
// console.log("Upvotes:", totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);
