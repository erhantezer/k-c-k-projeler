let count = 0;

const value =document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);


//? forEach ile btns array [button.btn.decrease, button.btn.reset, button.btn.increase] içine girilecek çünkü
//? q.selectorAll ile seçildiği için nodeList döndürdü
btns.forEach(function (btn) {

//? herbir öge tıklandığında oluşacak olay için fonksiyon tanımlanmıştır
    btn.addEventListener("click", function (event){
    // console.log(e);
//? tıklanılan ögede bir olay oluşacak bu olay hangisine tıklandıysa onu ortaya çıkarma buradaki olay  class larını bulma event i
    const styles = event.target.classList;
    // console.log(styles);

//? burada hangi ögeye tıklandıysa hangi kelimeyi bulursa o eşleşecek ve count olayı oluşacak
    if (styles.contains("decrease")){
        count--;
    } else if (styles.contains("increase")){
       count++;
    } else if (styles.contains("reset")) {
            count = 0;
    }


    if (count > 0) {
        value.style.color = "green";
    }
    if (count < 0) {
        value.style.color = "red";
    }
    if (count === 0) {
        value.style.color = "#222";
    }
    value.textContent = count ;

    })
})