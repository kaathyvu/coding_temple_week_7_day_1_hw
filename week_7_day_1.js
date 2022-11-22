//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(arr, str){
    for (let i = 0; i < arr.length; i++) {
        if (str.toLowerCase().includes(arr[i].toLowerCase())) {
            console.log(`Matched ${arr[i]}`);
        } else {
            console.log("No match");
        }
    }
}
findWords(dog_names, dog_string)
// I wasn't sure if the question was asking to find dog names that matched EXACTLY or not,
// so I made my answer based on if the name was in the string regardless of capitalization.



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
    } return arr;
}
console.log(replaceEvens(arr))



// ========= CodeWars Problem #1 - Square Every Digit ============= //
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let squared = ''
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        let currentNum = parseInt(strNum[i]);
        squared += (currentNum ** 2);
    } return parseInt(squared);
  }
  console.log(squareDigits(9119))



// =========== Codewars Problem #2 - Stop Spinning My Words ============ //
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata). Strings
// passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
    let strArr = string.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 5) {
            let reversed = '';
            for (let j = 0; j < strArr[i].length; j++) {
                reversed = strArr[i][j] + reversed       
            } strArr[i] = reversed
        } 
    } return strArr.join(" ")
  } 