const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth",});
  });

const burger=document.querySelector("#burger-menu");
const ul= document.querySelector("nav ul");
const nav=document.querySelector("nav");

burger.addEventListener("click",()=>{
    ul.classList.toggle("show");
});

const navL= document.querySelectorAll(".nav-link");

navL.forEach((link)=>
    link.addEventListener("click",()=>{
        ul.classList.remove("show");
    })
);

