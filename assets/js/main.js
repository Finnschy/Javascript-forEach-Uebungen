let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]
 
 function myDrinks() {
     let getraenkeListe = document.getElementById("getraenkeListe")
     console.log("Test");
     console.log(getraenke);
     getraenke.sort()
     getraenke.forEach(drink => getraenkeListe.innerHTML += drink + "<br>")
 }

 myDrinks()