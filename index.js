const startEl = document.getElementById("start-el")
const stopEl = document.getElementById("stop-el")
const resetEl = document.getElementById("reset-el")
const mSec = document.getElementById("miliseconds-el")
const secEl = document.getElementById("seconds-el")
const minEl = document.getElementById("minutes-el")
const hourEl = document.getElementById("hours-el")

let i = 1
let s = 1
let m = 1
let h = 1

startEl.addEventListener("click", function(){
    const msecInterval = setInterval(function(){
        if(i<100){    
            if(i<10){
                mSec.textContent = `0${i}`
                i++
            }else{
                mSec.textContent = i
                i++
            }
        }else if(i==100 && s<60){
            if(s<10){
                secEl.textContent = `0${s}:`
            }else{
                secEl.textContent = `${s}:`
            }
            i=1
            s++
        }else if(s==60 && m<60){
                s=0
                if(m<10){
                    minEl.textContent = `0${m}:`
                }else{
                    minEl.textContent = `${m}:`
                }
                m++
        }else if(m==60){
                m=0
                if(h<10){
                    hourEl.textContent = `0${h}:`
                }else{
                    hourEl.textContent = `${h}:`
                }
                h++
        }                
    },10)
    stopEl.addEventListener("click", function(){
        clearInterval(msecInterval)
    })
    resetEl.addEventListener("click", function(){
        clearInterval(msecInterval)
        i = 1
        s = 1
        m = 1
        h = 1
        mSec.textContent = `00`
        secEl.textContent = `00:`
        minEl.textContent = `00:`
        hourEl.textContent = `00:`
    })
})
