/* ===========================================
   INDRA LINK PREMIUM v1.0
=========================================== */

// ================================
// Loading Animation
// ================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ================================
// Cursor Glow
// ================================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(glow){

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    }

});

// ================================
// Ripple Effect
// ================================

document.querySelectorAll(".buttons a, .buttons button")
.forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";
ripple.style.top=(e.clientY-rect.top)+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ================================
// Share Button
// ================================

const shareBtn=document.getElementById("shareBtn");

if(shareBtn){

shareBtn.onclick=async()=>{

const shareData={

title:"INDRA TRI ARDIANSYAH",

text:"Content Creator & Web Developer",

url:window.location.href

};

if(navigator.share){

try{

await navigator.share(shareData);

}catch(e){}

}else{

    if (navigation.clipboard) {
navigator.clipboard.writeText(window.location.href);

    }
}

};

}

// ================================
// Animate Buttons
// ================================

const items=document.querySelectorAll(".buttons a,.buttons button");

items.forEach((item,index)=>{

item.style.opacity="0";

item.style.transform="translateY(20px)";

setTimeout(()=>{

item.style.transition=".6s";

item.style.opacity="1";

item.style.transform="translateY(0)";

},index*120+300);

});

// ================================
// Profile Hover
// ================================

const profile=document.querySelector(".profile");

if(profile){

profile.addEventListener("mouseenter",()=>{

profile.style.transform="scale(1.08) rotate(3deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1) rotate(0deg)";

});

}

// ================================
// Particle Background
// ================================

if (typeof particles !== "undefined") {

particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#3b82f6"
},

shape:{
type:"circle"
},

opacity:{
value:0.4
},

size:{
value:3
},

move:{
enable:true,
speed:1.5
},

line_linked:{
enable:true,
distance:150,
color:"#3b82f6",
opacity:.2,
width:1
}

},

interactivity:{

events:{

onhover:{

enable:true,

mode:"grab"

},

onclick:{

enable:true,

mode:"push"

}

},

modes:{

grab:{

distance:180

},

push:{

particles_nb:4

}

}

},

retina_detect:true

});

}

// ================================
// Floating Card
// ================================

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

card.style.transform=

`rotateY(${x}deg)
 rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0) rotateX(0)";

});

// ================================
// Console Signature
// ================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("sw.js")
            .then(() => console.log("Service Worker berhasil didaftarkan."))
            .catch(err => console.log(err));

    });

}
const themeBtn=document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.onclick = () => {
        document.body.classList.toggle("light");

        themeBtn.innerHTML =
            document.body.classList.contains("light")
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
    };
}

const cvBtn=document.getElementById("cvBtn");

if (cvBtn) {
    cvBtn.onclick = () => {
        document.body.classList.toggle("light");

        cvBtn.innerHTML =
            document.body.classList.contains("light")
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
    };
}

const modal=document.getElementById("cvModal");

if (modal) {
    modal.onclick = () => {
        document.body.classList.toggle("light");

        modal.innerHTML =
            document.body.classList.contains("light")
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
    };
}

const close=document.getElementById("closeCV");

if (close) {
    close.onclick = () => {
        document.body.classList.toggle("light");

        close.innerHTML =
            document.body.classList.contains("light")
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
    };
}

cvBtn.onclick=()=>{

modal.style.display="block";

}

close.onclick=()=>{

modal.style.display="none";

}

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>300

?"block"

:"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// scroll

window.onclick = (e)=>{

    if(e.target==modal){

        modal.style.display="none";

    }

}

//drack

const savedTheme = localStorage.getItem("theme");

if(savedTheme){

    document.body.classList.add(savedTheme);

}

localStorage.setItem(
    "theme",
    document.body.classList.contains("light")
        ? "light"
        : ""
);