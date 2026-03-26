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



function checkWidthTablet(){
  if(innerWidth <= 1315){
    aside.classList.add("active")
    ul.classList.add("active")
    ul2.classList.add("active")
        menue.innerHTML = `<span class="material-symbols-outlined">close</span>`;
  }
  else{
    menue.innerHTML = `<span class="material-symbols-outlined">menue</span>`;
    aside.classList.remove("active")
    ul.classList.remove("active")
    ul2.classList.remove("active")
  }
}

checkWidthTablet()

window.addEventListener("resize", checkWidthTablet);



menue.addEventListener("click", () => {
  aside.classList.toggle("blur");
})





