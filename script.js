//console.log("Hello World!");

// ########### MetaData ###########

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// ########### SupaBase Load ###########
loadFacts();

// Config.js file function !!!!!!!!!!!!!!!!!!!!!!!!

// DOM - Document Object Model
// ########## DOM Manipulation ##########
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//console.log(btn);
//console.dir(btn);

//Create DOM Elements: Render facts in lists
factsList.innerHTML = "";
//createFactsList(initialFacts);
//createFactsList([{ text: "Chris" }, { text: "Olivia" }]);

function createFactsList(dataArray) {
  // Versatile function that allows input of data on the webpahe from any dedicated data source
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a>
     </p>
    <span class="tag" style="background-color: #3b82f6"
      >${fact.category}</span>
    </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//factsList.insertAdjacentHTML("afterbegin", "<li>Chris</li>");

//Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([6, 64, 6, -23, 11].filter((el) => el > 10));

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else return `Year needs to be less or equal to ${currentYear}.`;
// }

// const age1 = calcFactAge(2016);
// // console.log(age1);
// // console.log(calcFactAge(2020));
// // console.log(calcFactAge(1990));
// //console.log(calcFactAge(2037));

// // ####### Arrow Functions #######

// const calcFactAge2 = (year) => new Date().getFullYear() - year;

// // console.log(calcFactAge2(1990));
// // console.log(calcFactAge2(2037));

// // Advanced arrow function
// const calcFactAge3 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `Year needs to be less or equal to ${new Date().getFullYear()}.`;

// // console.log(calcFactAge3(1990));
// // console.log(calcFactAge3(2037));

// // let votesInteresting = 20;
// // let votesMindblowing = 25;

// // if (votesInteresting === votesMindblowing) {
// //   alert("This fact is equally interesting and mind blowing!");
// // } else if (votesInteresting > votesMindblowing) {
// //   console.log("Interesting fact!");
// // } else if (votesMindblowing > votesInteresting) {
// //   console.log("Minblowing fact!!!");
// // }

// // //falsy values: 0, '', null, undefined
// // let falsyvalue = 0;
// // //truthy values: everything else..
// // if (falsyvalue) {
// //   console.log("Truthy value");
// // } else {
// //   console.log("Falsy value");
// // }

// // let votesFalse = 2;
// // const totalUpvotes = votesInteresting + votesMindblowing;

// // const message =
// //   totalUpvotes > votesFalse
// //     ? "The fact is true"
// //     : "The fact may be false, check more sources..";
// // // ternary operator ^^
// // //alert(message);

// // const text = "London is the capital of England";
// // const upperText = text.toUpperCase();
// // console.log(upperText);

// // const str = `The current fact is: "${text}". The fact is is
// // ${calcFactAge(2015)} years old. Given the votes the fact is likely ${
// //   totalUpvotes > votesFalse ? "correct" : "not true"
// // }`;
// // console.log(str);

// //  Arrays
// const factArr = ["London is the capital of England", 2015, true];
// // console.log(factArr);
// // console.log(factArr[2]);
// // console.log(factArr.length);
// // console.log(factArr[factArr.length - 2]);

// //const [text, createdIn, isCorrect] = factArr;
// // console.log(text);
// // console.log(createdIn);

// const newFactArr = [...factArr, "Society"];
// // console.log(newFactArr);

// // Object
// const factObj = {
//   text: "London is the capital of England",
//   category: "Society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact ${
//       this.text
//     } is from the category: ${this.category.toUpperCase()}`;
//   },
// };
// // console.log(factObj.text);
// // console.log(factObj["text"]);
// // console.log(factObj.createSummary());

// const { category, isCorrect } = factObj;
// //console.log(category);

// [2, 4, 6, 8].forEach(function (el) {
//   //console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// //console.log(times10);

// const times20 = [2, 4, 6, 8].map((el) => el * 20);
// //console.log(times20);

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);

// const factAges = initialFacts.map((el) => calcFactAge3(el.createdIn));
// console.log(factAges);
// console.log(factAges.join(" & "));

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
