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
