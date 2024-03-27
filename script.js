const button  = document.querySelector(".btn")
const body = document.querySelector('body')
const audio = document.querySelector('#audio')


button.addEventListener('click', () => {
    body.classList.toggle("on")
    audio.currentTime = 0;
    audio.play()
})