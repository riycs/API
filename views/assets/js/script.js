window.addEventListener('load', async() => {
document.getElementById('preloader').style.display = "none";
})
var typed = new Typed('#typing', {
strings: ['SatzzAPI'],
typeSpeed: 70,
backSpeed:70,
loop: true
});




setInterval(() => {
const now=new Date(),s=now.getSeconds(),m=now.getMinutes(),h=now.getHours();
document.getElementById("second").style=`--value:${s};`
document.getElementById("minute").style=`--value:${m};`
document.getElementById("hour").style=`--value:${h%12||12};`
document.getElementById("ampm").textContent=h>=12?"PM":"AM";
}, 100);


let audio = new Audio("/Mr. Loverman.mp3")
audio.load()
let isPlaying = false
async function playBackSounds() {
if (!isPlaying) {
audio.play()
isPlaying = true
} else {
}
}
