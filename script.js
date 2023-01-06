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
  else return `Year needs to be less or equal to ${currentYear}.`;
}

const age1 = calcFactAge(2016);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
//console.log(calcFactAge(2037));

// ####### Arrow Functions #######

const calcFactAge2 = (year) => new Date().getFullYear() - year;

console.log(calcFactAge2(1990));
console.log(calcFactAge2(2037));

// Advanced arrow function
const calcFactAge3 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Year needs to be less or equal to ${new Date().getFullYear()}.`;

console.log(calcFactAge3(1990));
console.log(calcFactAge3(2037));

// let votesInteresting = 20;
// let votesMindblowing = 25;

// if (votesInteresting === votesMindblowing) {
//   alert("This fact is equally interesting and mind blowing!");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting fact!");
// } else if (votesMindblowing > votesInteresting) {
//   console.log("Minblowing fact!!!");
// }

// //falsy values: 0, '', null, undefined
// let falsyvalue = 0;
// //truthy values: everything else..
// if (falsyvalue) {
//   console.log("Truthy value");
// } else {
//   console.log("Falsy value");
// }

// let votesFalse = 2;
// const totalUpvotes = votesInteresting + votesMindblowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "The fact may be false, check more sources..";
// // ternary operator ^^
// //alert(message);

// const text = "London is the capital of England";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is: "${text}". The fact is is
// ${calcFactAge(2015)} years old. Given the votes the fact is likely ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }`;
// console.log(str);

//  Arrays
const factArr = ["London is the capital of England", 2015, true];
console.log(factArr);
console.log(factArr[2]);
console.log(factArr.length);
console.log(factArr[factArr.length - 2]);

//const [text, createdIn, isCorrect] = factArr;
// console.log(text);
// console.log(createdIn);

const newFactArr = [...factArr, "Society"];
console.log(newFactArr);

// Object
const factObj = {
  text: "London is the capital of England",
  category: "Society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category: ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);
console.log(factObj["text"]);
console.log(factObj.createSummary());

const { category, isCorrect } = factObj;
//console.log(category);

// // ###### Practice: #######
// // let votesInteresting = 23;
// // let votesMindblowing = 5;
// // const text = "London is the capital of England";

// // votesInteresting = votesInteresting + 1;
// // votesInteresting++;
// // console.log(votesInteresting);

// // let totalUpvotes = votesInteresting + votesMindblowing;
// // console.log("Upvotes:", totalUpvotes);

// // let votesFalse = 4;
// // const isCorrect = votesFalse < totalUpvotes;
// // console.log(isCorrect);
