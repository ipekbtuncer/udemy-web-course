var send = document.getElementById("send-button")

function msgSend (){
    console.log("The message has been sent.")
    document.getElementById("sent-message").innerHTML = "Your message has been sent."
}

send.addEventListener("click", msgSend)





var srch = document.getElementById("search-button")

function searchButtonClicked() {
    console.log("Searched")
    var customText = document.getElementsByClassName("search-input")
    var results = document.getElementById("text-2")
    console.log(customText)
    results.innerHTML = customText [0].value

}

srch.addEventListener("click", searchButtonClicked)





var welcome_message = "Discount!"

var price = "Coffees from 5$"

alert (welcome_message+price)

console.log (welcome_message,price)





var isPremiumUser = false;

if (isPremiumUser) {
    console.log ("Thanks for being a loyal customer!")
}else{
    console.log ("Please upgrade for more.")
}

for (var i = 0; i <= 10; i++) {
    console.log ("Current i value is " + i);
}

function printName (name,age) {
    console.log ("Hello, ", name, ". You are ", age)
}

printName ("İpek", 26)





var ingredients = ["espresso", "milk foam", "chocolate", "caramel", "water"]

console.log (ingredients.pop())
console.log (ingredients.shift())
console.log (ingredients.push("sugar"))
console.log (ingredients.unshift("hot water"))
ingredients.forEach (function (i, ie) {
    console.log ("I like ", i, ie)})



    

for (var i = 0; i < 10; i++) {
    console.log ("i değeri: " + i)
}

var i = 0;

while (i < 50) {
    console.log("i değeri: " + i);
    i += 2;
}

var sayilar = [12,54,22,89,55,90,101];
for (var i = 0; i <= 4; i++) {
    console.log ("Eleman: " + sayilar[i])
}

sayilar.forEach (function (sayi) {
    console.log("Eleman: " + sayi)
})




var l = 0
function getPhrase(params) {
    if (typeof params.phrase !== "undefined") {
        l = params.phrase.length
    }
         
    if (typeof params.another !== "undefined") {
        l += params.another.length
    }
    
    return l
}

var p1 = "This is first phrase."
var p2 = "This is another phrase."

var computed = getPhrase({phrase: p1})

console.log (computed) 





function missingNum (numbers) {
    var missing = -1
    var sorted = numbers.sort (function(a,b){return a-b})
    for ( var a = sorted[0]; a <= numbers.length; a++) {
        if (numbers.indexOf(a) === -1) {
            missing = a
        }     
    }
    return missing
}

var numbers = [10, 16, 17, 6, 14, 8, 11, 3, 12, 5, 13, 15, 18, 7, 19, 20, 9]

console.log (missingNum(numbers))





class animal {
    constructor(name, height, weight) {
        console.log ("Created animal named " + name + ".")
        this.name = name
        this.height = height
        this.weight = weight
    }
    nameLength() {
        return this.name.length
    }
}

animal.planet = "Earth"

class Dog extends animal {
    constructor (name, height, weight, barkVol, leashColor, runSpeed) {
    super (name, height, weight) 
    this.barkVol = barkVol
    this.leashColor = leashColor
    this.runSpeed = runSpeed
    }

    bark () {
        if (this.barkVol < 35) {
            console.log (this.name + " barks timidly. (Volume:" + this.barkVol + ")" )
        } else if (this.barkVol < 65 ) {
            console.log (this.name + " barks usual. (Volume:" + this.barkVol + ")")
        } else {
            console.log (this.name + " barks loudly! (Volume:" + this.barkVol + ")")
        }
    }
}

class Parrot extends animal {
    constructor (name, height, weight, flySpeed, color) {
        super (name, height, weight)
        this.flySpeed = flySpeed
        this.color = color
    }

    speed(chaserSpeed) {
        if (this.flySpeed > 50) {
            console.log (this.name + " flies quickly! (Speed:" + this.flySpeed + ")")
        } else {
            console.log (this.name + " flies slowly.(Speed:" + this.flySpeed + ")")
        }

        if (this.flySpeed > chaserSpeed ) {
            console.log (this.name + " got away!")
        } else {
            console.log (this.name + " was caught!")
        }
    }
}


var hayta = new Dog ("Hayta", 60, 35, 85, "red", 75)
var ciko = new Parrot ("Ciko", 5, .4, 45, "green" )

hayta.bark ()
ciko.speed(hayta.runSpeed)