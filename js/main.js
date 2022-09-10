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





var myName="Cafer"

console.log("My name is " + myName)

var myHeight = 110

console.log ("My height is " + myHeight)

var myWeight = 25

console.log ("My weight is " + myWeight)

console.log ("I don't know the color of my eyes")

var likeListen = "Ciguli"

console.log ("I like to listen " + likeListen)

var myFavAuthor = "Manapınarından Hasibe'nin Ahmet"

console.log ("My favorite author is " + myFavAuthor)

var myFavFootballer = "Yenimahalle'den Abidin'in Mehmet"

console.log ("My favorite footballer is " + myFavFootballer)

var cigarette = "Samsun 216"

var cigarette2 = "Parliament"

console.log ("I like " + cigarette + " and " + cigarette2)

var myFatherSaying = "Sağlığınız için yeni rakı için"

console.log ("My father has a saying " + myFatherSaying)

var girls = "short"

var girls2 = "blue eyes"

console.log ("I like " + girls + " girls who has " + girls2)

var vacation = "Namazgah Dağları"

console.log ("I spend my vacation at the " + vacation)

var car = "Murat 131"

console.log ("My Favorite car is " + car)

var music = "tekno" 

var music2 = "kemençe"

console.log ("I love " + music + " and " + music2)

var myPlace = "Yenimahalle"

console.log ("My place is " + myPlace)

var myNickname = "35'lik Rakı"

console.log ("My nickname is " + myNickname)

var myFavTeacher = "Kenan Hoca'm from primary school"

console.log ("My favorite teacher is " + myFavTeacher)

var myFavComedian = "Michael from Yenimahalle"

console.log ("My favorite comedian is " + myFavComedian)

var ilike = "get a whipping"

console.log ("I like " + ilike)

var stingy = "being asked for the last blower"

console.log ("The thing I'm most stingy about is " + stingy)

console.log ("My name is " + myName + ". Damn you all! Be afraid of me!!!")

