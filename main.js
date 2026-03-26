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




   asideAll.forEach((i) => {
     i.classList.toggle("active")
   })


})



function checkWidthTablet(){
  if(innerWidth <= 1315){
    aside.classList.add("active")
    ul.classList.add("active")
    ul2.classList.add("active")
  }
  else{
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





window.addEventListener("load" , () => {
  alert("تم")
})