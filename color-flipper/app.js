const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn"); //? BURASI BUTON
const color = document.querySelector(".color");   //? BURASI SPAN


//? TIKLAMA OLAYLARINDA İSTEDİĞİMİZ OLAYLARIN GERÇEKLEŞME FONKSİYONU 
 btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor= colors[randomNumber];
    color.innerText = colors[randomNumber]
 })

 function getRandomNumber () {
    return Math.floor(Math.random()*colors.length)
 }


