
let favDrinks = ["Tea", "Coffee", "Water"];

for(let drinksIndex=0; drinksIndex<favDrinks.length; drinksIndex++){
    
    console.log(favDrinks[drinksIndex]);

}

for (let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}

let multipleOfTwo = [];

for (let i = 0; i < 20; i++){
    if(i % 2 == 0){
        multipleOfTwo.push(i)
    }
}

console.log(`The numbers are divisible by 2 between 0 -20 are: ${multipleOfTwo}`)


    //Arrow Function 
const sumOfNums = (min, max) => {
    //Parameters
let sums = 0

for(let i = min; i < max + 1; i++){
    sums += i   // sums = sums + 1, 2, 3, etc.
}

return sums;
}

console.log(`The sum of numbers from 1 - 10 is: ${sumOfNums(1,10)}`)

let age = 2

while(age < 18){
    console.log(age);
    age++;
}

console.log("While loop complete")

let randomNumber = 0

while(randomNumber < 10){
    console.log(`Random number is:${randomNumber}, keep looking`);
    randomNumber = (Math.round(Math.random() * 20 ));
}

console.log(`You have found the random number: ${randomNumber}`)

let myList = ["Lotr", "Harry Potter", "Star Wars"]
console.log(myList)

myList.push("movie", "two")
console.log(myList)

for(let i = 0; i < myList.length; i++){
    console.log(myList[i])
} 
