// Code

let menue = document.querySelector(".menue");
let aside = document.querySelector("aside");
let ul = document.querySelector(".ul");
let ul2 = document.querySelector(".ul-2");
let asideAll = document.querySelectorAll(".container-area aside ul li a i");

menue.addEventListener("click", () => {
   aside.classList.toggle("active");
   ul.classList.toggle("active");
   ul2.classList.toggle("active");

   if(ul.classList.contains("active")){

       menue.innerHTML = `<span class="material-symbols-outlined">close</span>`;
   }
   else{
        menue.innerHTML = `<span class="material-symbols-outlined">menu</span>`;
   }

   asideAll.forEach((i) => {
     i.classList.toggle("active")
   })


})