// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided

// describe(comboArr, () => {
//     const secretCodeWord1 = "Lackadaisical"
//     const secretCodeWord2 = "Gobbledygook"
//     const secretCodeWord3 = "Eccentric"

//     it("Create a function that takes in a string and returns a coded message", () => {

//         // calls the function being tested
//         expect(comboArr(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(comboArr(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(comboArr(secretCodeWord3)).toEqual("3cc3ntr1c")

//     })
// })

Create a function that passes the test
Create an array that will take in a string 
Replace selected characters with selected numbers
Convert array back into string


// b) Create the function that makes the test pass.
// const comboArr = (string) => {
//     return string.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/E/g, "3")
// }


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe(fruits, () => {

//     const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
//     const letterA = "a"
//     const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
//     const letterE = "e"

//     it("Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
//         expect(fruits(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
//         expect(fruits(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

Create a function that makes the test passes
Uses filter to filter through the words that contains a particular letter
Use Lowercase to ensure the letter is return into the word in lowercase.

    // b) Create the function that makes the test pass.

    // const stupidFunction = (wordsarray, letter) => {
    //     return wordsarray.filter(word => word.toLowerCase().includes(letter))
    // }


    // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

    // a) Create a test with expect statements using the variable provided.

    describe(fullHouse, () => {

        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]

        it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house.", () => {
            expect(fullHouse(hand1)).toEqual(true)
            expect(fullHouse(hand2)).toEqual(false)
            expect(fullHouse(hand3)).toEqual(false)
        })
    })

//b) Create the function that makes the test pass.

// Pseduo code: 
// - it is a full house when exactly one pair and one three of a kind
// - find a unique number that does not repeat, is not a full house
// - use .set and .length
// - return if Boolean vaule

const fullHouse = (array) => {
    let unique = 0
    if ([...new Set(arrary)].length === 2 && array.length === 5) {

    }
}
// not sure if I am on the right track with this function. I was trying to use the new Set() to create a new array, not sure what else I needed to do with this function.
