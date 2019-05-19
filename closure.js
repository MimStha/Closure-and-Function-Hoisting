/*
    Function Declaration 
    Function declaration are hoiseted, the reason why we can call function before it is declared. 
*/

// Every instance created is unique with new values like in OOP
//  (javascript class does the same but allows access to variables inside a funciton - var progress and levelUpPoint)
var game1 = coolGame() //?
game1.whatsMyLevel() //?
game1.levelUp() //?s
game1.whatsMyLevel() //?

function coolGame() {
    var progress = 0
    var levelUpPoint = 10
    // levelUp is hoiseted and can be called before the actual declaration
    var testHoisting = levelUp() //?
    function levelUp() {
        progress += levelUpPoint
        return `Leveling up by ${levelUpPoint}`
    }
    function whatsMyLevel() {
        return `My current level is ${progress}`
    }
    return { levelUp, whatsMyLevel }
}

var game2 = coolGame() //?
game2.whatsMyLevel() //?
game2.levelUp() //?
game2.whatsMyLevel() //? 


/* 
    Function Expression
    Function expression are not hoisted, the reason why we cannot call function before it is declared.
*/
// var anotherGame1 = anotherCoolGame() //?

var anotherCoolGame = function () {
    var progress = 0
    var levelUpPoint = 10
    // levelUp is not hoiseted and can't be called before the actual declaration
    // var testHoisting = levelUp() //?
    var levelUp = function () {
        progress += levelUpPoint
        return `Leveling up by ${levelUpPoint}`
    }
    var whatsMyLevel = function () {
        return `My current level is ${progress}`
    }
    return { levelUp, whatsMyLevel }
}

var anotherGame2 = anotherCoolGame() //?
anotherGame2.whatsMyLevel() //?
anotherGame2.levelUp() //?
anotherGame2.whatsMyLevel() //?

/* 
    ES6 Class Declaration
*/
class CoolGame {
    constructor(progress, levelUpPoint) {
        this.progress = progress
        this.levelUpPoint = levelUpPoint
    }
    levelUp() {
        this.progress += this.levelUpPoint
        return `Leveling up by ${this.levelUpPoint}`
    }
    whatsMyLevel() {
        return `My current level is ${this.progress}`
    }
}

let newGame = new CoolGame(0, 10)
newGame.whatsMyLevel() //?
newGame.levelUp() //?
newGame.whatsMyLevel() //?