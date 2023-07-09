const hamber = document.querySelector("#hamberger");
const button = document.querySelectorAll(".button");
// ===---===---
const icons = document.querySelectorAll('.iconbtn');
const section = document.querySelectorAll("section");
// ===---===---
const images = document.querySelector(".gallery");
const img = document.querySelector(".img");
const miniimg = document.querySelectorAll(".miniimg");
const miniimgchild = document.querySelectorAll('.miniimg img');
// ===---===---
const video = document.querySelector('.video');
// ===---===---
const login = document.querySelector(".login")
// ===---===---
const map = document.querySelector(".map")
// ===---===---

window.addEventListener('load', () => {
    // loading
    let loader = document.querySelector('.load');
    loader.classList += ' hidden';


    // clock
    setInterval(() => {
        const d = new Date();
        document.getElementById('hour').textContent = d.getHours() + 1 + ' :';
        document.getElementById('min').textContent = d.getMinutes() + ' :';
        document.getElementById('sec').textContent = d.getSeconds();
    }, 1000);


    // extra
    setInterval(() => {
        a = Math.floor(Math.random() * 40)

        setTimeout(() => {
            document.querySelector('.extras').style.opacity = 0
        }, 100);

        document.querySelector('.extras').style.opacity = 1
        document.querySelector('.extras').style.top = a + 'rem'

    }, 500);
})
// ===---===---===---===---
function check() {
    let name = document.getElementById("Name").value;
    let age = document.getElementById("age").value;
    let code = document.getElementById("code").value;
    let email = document.querySelector('input[type="email"]').value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (age === "") {
        alert("Please enter your age.");
        return false;
    }
    if (code === "") {
        alert("Please enter your code meli.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
}
// ===---===---===---===---
button.forEach((e) => {
    e.addEventListener("click", () => {
        //---------------btns---------------------------------
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.visibility = "hidden";
        };
        e.querySelector(".iconbtn").style.visibility = "visible";
        //----------------dis---------------------------------

        for (let k = 0; k < section.length; k++) {
            section[k].style.display = "none";
        }
        let scrollb = document.querySelector('.scroll-bar')
        let s = e.querySelector("button").textContent
        if (s == "Login") {
            login.style.display = "flex";
            what_is_ac = login
        }
        if (s == "Map") {
            map.style.display = "block";
            what_is_ac = map
        }
        if (s == "Picture") {
            images.style.display = "grid";
            what_is_ac = img
        }
        if (s == "Video") {
            video.style.display = "grid";
            what_is_ac = video
        }
        document.getElementById("headname").textContent = s

        // ===---===---===---===---===---===---
        scrollb.style.width = `0%`

        what_is_ac.addEventListener('scroll', () => {
            const winScroll = what_is_ac.scrollTop;
            const height = what_is_ac.scrollHeight - what_is_ac.offsetHeight;
            const scroll = (winScroll / height) * 100;

            scrollb.style.width = `${scroll}%`
        });
    })
})
// ===---===---===---===---
video.addEventListener('click', (e) => {

    if (e.target.classList == 'btn close') {
        e.target.parentElement.classList.remove('fullscreen');
    }
    if (e.target.classList == 'btn full') {
        e.target.parentElement.classList.add('fullscreen');
    }
})
// ===---===---===---===---

miniimgchild.forEach((e) => {
    e.addEventListener('click', function () {
        var index = Array.prototype.indexOf.call(miniimgchild, this);
        img.children[index].scrollIntoView();
    });
});
// ===---===---===---===---
var x = window.matchMedia("(max-width: 600px)")
hamber.addEventListener("click", (e) => {

    let s = document.querySelector("#buttons")
    if (x.matches) {

        if (s.classList != 'none') {
            s.classList.add('none');
        } else {
            s.classList.remove('none');
        }
    }

})