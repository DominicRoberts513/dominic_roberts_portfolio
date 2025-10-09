// sonore

// // micro montage btn1
let playBtn1 = document.querySelector('.playBtn1')
let stopBtn1 = document.querySelector('.stopBtn1')
let montage = document.querySelector('.montage_audio')

playBtn1.addEventListener("click", () => {
  montage.play()
  playBtn1.style.display = "none"
  stopBtn1.style.display = "block"
})
stopBtn1.addEventListener("click", () => {
  montage.pause()
  stopBtn1.style.display = "none"
  playBtn1.style.display = "block"
})

if (montage.currentTime == montage.duration) {
  montage.currentTime = 0
  montage.pause()
  stopBtn1.style.display = "none"
  playBtn1.style.display = "block"
}

// // dada sonore btn2
let playBtn2 = document.querySelector('.playBtn2')
let stopBtn2 = document.querySelector('.stopBtn2')
let tempsReel = document.querySelector('.tempsreel_audio')

playBtn2.addEventListener("click", () => {
  tempsReel.play()
  playBtn2.style.display = "none"
  stopBtn2.style.display = "block"
})
stopBtn2.addEventListener("click", () => {
  tempsReel.pause()
  stopBtn2.style.display = "none"
  playBtn2.style.display = "block"
})

if (tempsReel.currentTime == tempsReel.duration) {
  tempsReel.currentTime = 0
  tempsReel.pause()
  stopBtn2.style.display = "none"
  playBtn2.style.display = "block"
}

// // spg 1 btn3
let playBtn3 = document.querySelector('.playBtn3')
let stopBtn3 = document.querySelector('.stopBtn3')
let prSpg1 = document.querySelector('.pr_spg_01_audio')

playBtn3.addEventListener("click", () => {
  prSpg1.play()
  playBtn3.style.display = "none"
  stopBtn3.style.display = "block"
})
stopBtn3.addEventListener("click", () => {
  prSpg1.pause()
  stopBtn3.style.display = "none"
  playBtn3.style.display = "block"
})

if (prSpg1.currentTime == prSpg1.duration) {
  prSpg1.currentTime = 0
  prSpg1.pause()
  stopBtn3.style.display = "none"
  playBtn3.style.display = "block"
}