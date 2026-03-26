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




// window.addEventListener('load' ...) 
// معناها: "يا متصفح، استنى لما الصور والملفات والأيقونات كلها تخلص تحميل"
window.addEventListener('load', function() {
    
    // 1. نمسك الديف اللي اسمه loading-screen من الـ HTML
    const loadingScreen = document.getElementById('loading-screen');
    
    // 2. نضيف له كلاس الـ fade-out (اللي إحنا لسه كاتبينه في الـ CSS فوق)
    // ده هيخلي الشاشة تبدأ تنعم وتختفي في خلال نص ثانية
    loadingScreen.classList.add('fade-out');
    
    // 3. نستخدم setTimeout عشان نمسح العنصر "تماما" من الصفحة بعد ما يختفي
    // استنينا 500 مللي ثانية (نص ثانية) عشان ندي فرصة للأنميشن يخلص
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        // تريكة: رجع السكرول للصفحة بعد ما اللودر يختفي
        document.body.style.overflow = 'auto';
    }, 500);
});