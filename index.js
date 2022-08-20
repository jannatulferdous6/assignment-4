//problem-1

function radianToDegree(radian) {
              if (typeof radian != "number") {
                            return "input invalid";

              }
              else {
                            let pi = Math.PI;
                            let oneRadian = 180 / pi;
                            let degree = oneRadian * radian;
                            let ans = degree.toFixed(2);
                            return ans;
              }
}
let result = radianToDegree(199);
console.log(result);

//problem-2

function isJavaScriptFile(fileName) {

              if (fileName[fileName.length - 1] === "s" && fileName[fileName.length - 2] === "j" && fileName[fileName.length - 3] === ".") {
                            return true;
              }
              else {
                            return false;
              }
}

const isJavaScriptFileResult = isJavaScriptFile("image.jpg.js");
console.log(isJavaScriptFileResult);

//problem-3

function oilPrice(diselOfNum, petrolOfNum, octaneOfNum) {

              if (typeof diselOfNum != "number") {
                            console.log("invalid input");
              }
              else if (typeof petrolOfNum != "number") {
                            console.log("invalid input");
              }
              else {
                            //console.log("invalid input");
              }
              let disel = 114;
              let petrol = 130;
              let octane = 135;
              let diselTotal = diselOfNum * disel;
              let petrolTotal = petrolOfNum * petrol;
              let octaneTotal = octaneOfNum * octane;
              const sum = diselTotal + petrolTotal + octaneTotal;
              return sum;
}
let result1 = oilPrice(0, 2, 3);
console.log(result1);

//problem-4

function publicBusFare(people) {
              if (typeof people != "number") {
                            return "invalid input";
              }
              let publicBusTicketPrice = 250;
              let eachBusPeople = 50;
              let eachMicrobusPeople = 11;
              let remainMicrobusPeople = people % eachBusPeople;
              let remainPublicBusPeople = remainMicrobusPeople % eachMicrobusPeople;
              const publicBusPeopleTicketPrice = remainPublicBusPeople * publicBusTicketPrice;

              return publicBusPeopleTicketPrice;
}

const totalPublicBusFare = publicBusFare(365);
console.log(totalPublicBusFare);

//problem-5

function isBestFriend(object01, object02) {

              let tomName = object01.name;
              let tomFriend = object02.friend;
              let rockName = object02.name;
              let rockFriend = object01.friend;

              if (tomName === tomFriend && rockName === rockFriend) {

                            return true;
              }
              else {
                            return false;
              }

}

const object01 = { name: "abul", friend: "kabul" };
const object02 = { name: "kabul", friend: "sabul" };

let result2 = isBestFriend(object01, object02);

console.log(result2);