// السؤال الأول
// 1
const name = "waleed";
// 2
let age = 17;
// 3 and 4
console.log("i'm " + name + " and i'm " + age + " years old.");
// 5 and 6
console.log(age * 5);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobbies = ["coding", "cardio", "drinking coffe"];
// 2
hobbies.push(age);
hobbies.unshift(age);
console.log(hobbies.length);
// 3
hobbies.pop();
console.log(hobbies);
// 4
const myself = {
  myRoad: "web",
  favLanguage: "swift",
};
// 5
myself.myTA = "Rahaf";
// 6
console.log(myself.myRoad);
// 7
console.log(myself.myTA);

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
myself.sayHi = function Hey() {
  return "welcome to my function";
};
// 2
console.log(myself.sayHi);
// console results => console.png
