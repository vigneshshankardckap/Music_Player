let songs = [
    {
        id: 0,
        artist: "K.S. Chithra",
        songName: " Soul Of Varisu",
        img: "./songs images/download.jpeg",
        Music: "./songs/Soul-Of-Varisu.mp3",
        move: "Varisu"
    },
      {
        id:1 ,
        artist: "G.V.Prakash",
        songName: "Aalaporan-Thamizhan",
        img: "./songs images/mersal.jpeg",
        Music: "./songs/Aalaporan-Thamizhan.mp3",
        move: "Mersal"
    },

    {
        id: 2,
        artist: "A.R Rehman",
        songName: "idho-aramban",
        img: "./songs images/vandhu.jpeg",
        Music: "./songs/Idho-Arambam-MassTamilan.dev.mp3",
        move: "vandhu thanindhathu kaadu"
    },

    {
        id: 3,
        artist: "krish",
        songName: "Hey raja",
        img: "./songs images/ayan.jpg",
        Music: "./songs/Hey-Raja-Oh-Supernova.mp3",
        move: "Ayan"
    },
    {
        id: 4,
        artist: "A.R.Rehman",
        songName: "Singappenney",
        img: "./songs images/bigil.jpg",
        Music: "./songs/Singappenney-MassTamilan.mp3",
        move: "Bigil"
    },


    {
        id: 5,
        artist: "Yuvanshankar Raja",
        songName: "The intense theme",
        img: "./songs images/Valimai.jpg",
        Music: "./songs/The-Intense-of-Fire-(Theme).mp3",
        move: "Valimai"
    },
 
  
    {
        id: 6,
        artist: "anirudh",
        songName: "bloody-sweet",
        img: "./songs images/leo.jpg",
        Music: "./songs/Bloody-Sweet-MassTamilan.dev.mp3",
        move: "LEO"
    },

]

//target the all elements

let audio = document.querySelector("audio")
let play = document.querySelector(".play")
let pre = document.querySelector("#prevbtn")
let next = document.querySelector("#nextbtn")
let blur = document.querySelector("#blur")
let mute = document.querySelector("#mutebtn")
let random = document.querySelector("#random")
let seekslider = document.querySelector("#seekslider")
let volumeslider = document.querySelector("#volumeslider")
let curttimetext = document.querySelector("#curttimetext")
let durtimetext = document.querySelector("#durtimetext")
let song_name = document.querySelector("#status")
let artist = document.querySelector("#artist")
let img = document.querySelector(".img")
let movieimg=document.querySelector(".moviename")
let vol=document.querySelector("#vol")
let shuffle=document.querySelector("#suffle")


//audio objects
let count = 0
window.addEventListener("DOMContentLoaded", () => {
    audio.src = songs[count].Music
    song_name.innerText = songs[count].songName
    artist.innerText = songs[count].artist
    img.src = songs[count].img
    blur.src = songs[count].img
    movieimg.innerText=songs[count].move

})

window.addEventListener("DOMContentLoaded", () => {
    playNext()
})

shuffle.addEventListener("click",()=>{
    let randomsongs = Math.floor(Math.random()*songs.length)
    audio.src = songs[randomsongs].Music
    song_name.innerText = songs[randomsongs].songName
    artist.innerText = songs[randomsongs].artist
    img.src = songs[randomsongs].img
    blur.src = songs[randomsongs].img
    movieimg.innerText=songs[randomsongs].move

})

function playNext(){
    setInterval(()=>{
        if(audio.currentTime == audio.duration){
            count++;
        }
    },1000)
}

seekslider.addEventListener("input", () => {
    audio.currentTime = seekslider.value
})

// play button function
play.addEventListener("click", (e) => {
    time()
    if (play.classList.contains("fa-play")) {
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
        audio.play()
    }
    else {
        play.classList.add("fa-play")
        play.classList.remove("fa-pause")
        audio.pause()
    }
})

// next button function
next.addEventListener("click", (e) => {
    count++
    time()
    if (count == 7) {
        count = 0
    }
    console.log(count)
    audio.src = songs[count].Music
    song_name.innerText = songs[count].songName
    artist.innerText = songs[count].artist
    img.src = songs[count].img
    blur.src = songs[count].img
    movieimg.innerText=songs[count].move
    audio.play()
    play.classList.add("fa-pause")
    play.classList.remove("fa-play")
})

// previous button function

pre.addEventListener("click", (e) => {
    count--
    time()
    console.log(count)
    if (count == -1) {
        count = songs.length - 1
    }
    audio.src = songs[count].Music
    song_name.innerText = songs[count].songName
    artist.innerText = songs[count].artist
    img.src = songs[count].img
    blur.src = songs[count].img
    movieimg.innerText=songs[count].move
    audio.play()
    play.classList.add("fa-pause")
    play.classList.remove("fa-play")

})





vol.addEventListener("click", () => {
    if (vol.classList.contains("fa-volume-up")) {
        vol.className = "fa-solid fa-volume-xmark"
        audio.volume = 0.0
        volumeslider.value = 0
    }
    else {
        audio.volume = 1.0
        volumeslider.value = 100
        vol.className = "fa-solid fa-volume-up"
    }
})

// random songs
random.addEventListener("click",()=>{
    if(shuffle.classList.contains("fa-solid fa-shuffle")){
        // alert("sdfhf")
        // shuffle.className="fa-regular fa-shuffle"
    }
})


// range working function 
function time() {
    setInterval(() => {
        show()
        seekslider.value = audio.currentTime
    }, 1000)
}

function show() {
    CurrenntMin = Math.floor(audio.currentTime / 60)
    curretSec = Math.floor(audio.currentTime - (CurrenntMin * 60))

    durationMin = Math.floor(audio.duration / 60)
    durationSec = Math.floor(audio.duration - (durationMin * 60))

    if (CurrenntMin < 10) {
        CurrenntMin = "0" + CurrenntMin
    }
    if (curretSec < 10) {
        curretSec = "0" + curretSec
    }
    if (durationMin < 10) {
        durationMin = "0" + durationMin
    }
    if (durationSec < 10) {
        durationSec = "0" + durationSec
    }
    curttimetext.innerText = `${CurrenntMin}:${curretSec}`
    durtimetext.innerText = `${durationMin}:${durationSec}`
}


volumeslider.addEventListener("input", () => {
    if (volumeslider.value >50 && volumeslider.value <=75) {
        audio.volume = 0.7
        vol.className = "fa-solid fa-volume-up"
    }
    if (volumeslider.value >25 && volumeslider.value <=50) {
        audio.volume = 0.5
        vol.className = "fa-solid fa-volume-up"
    }
    if (volumeslider.value >15 && volumeslider.value <= 25) {
        audio.volume = 0.3
        vol.className = "fa-solid fa-volume-up"
    }
    if (volumeslider.value >=5 && volumeslider.value <=15) {
        audio.volume = 0.1
        vol.className = "fa-solid fa-volume-up"
    }
    if (volumeslider.value >75 && volumeslider.value <=90) {
        audio.volume = 0.8
        vol.className = "fa-solid fa-volume-up"
    }
    if (volumeslider.value >90) {
        audio.volume = 1.0
        vol.className = "fa-solid fa-volume-up"
    }
    if (volumeslider.value == 0) {
        audio.volume = 0.0
        vol.className = "fa-solid fa-volume-xmark"
    }

})


