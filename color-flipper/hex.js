const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//? kullanacağımız yerlerin seçilip değişkene atanması
const btn =document.getElementById("btn");
const color = document.querySelector(".color");

//? tıklama esnasındaki eklemeleri dinleme yapmak ve ekleme işi
btn.onclick = function () {
  let hexColor = "#"  ;

  //?  HEX KODLARI 6 TANE OLDUĞU İÇİN FOR DÖNGÜSÜ İLE HEXCOLOR A 6 SAYI GÖNDERMEK İÇİN FOR DÖNGÜSÜ KULLANDIM
  for( let i =0; i<6;i++){
  hexColor += hex[getRandomNumber()]
}
color.textContent=hexColor;
document.body.style.backgroundColor =hexColor;
}

//? fonksiyon onclick fonksiyonu içinede yazabilirdik best practice si bu şekilde dir 
//? KULLANMA AMACIMIZ HEX SAYISI KADAR RASTGELE SAYI ÜRETMEK
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}