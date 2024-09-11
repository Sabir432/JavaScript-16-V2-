

const secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourBox = document.querySelector('.hours'),
    minuteBox = document.querySelector('.minutes');


function watch() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()

    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`

    hourBox.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => watch(), 1000)
}
watch()



// рекурсия это когда функция вызывает саму себя внутри
// setTimeout - позволяет выполнить код с указанной задержкой

// let i = 0;

// function primer() {
//     if(i < 10) {
//         console.log(i);
//         i++
//        setTimeout(() =>  primer(), 1000)
//     }
// }
// primer()



const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})



function removeActive() {
    links.forEach((item, i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

const btn = document.querySelector('.stopwatch__btn')
const secondsB = document.querySelector('.stopwatch__seconds');
const minutesB = document.querySelector('.stopwatch__minutes');
const hoursB = document.querySelector('.stopwatch__hours');
const span = document.querySelector('.tabsLink__span');

btn.addEventListener('click', () => {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        let i = 0
        setTimeout(() => clockstart(btn, i), 1000);
    }
    else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }
    else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        minutesB.innerHTML = 0  
        secondsB.innerHTML = 0
        hoursB.innerHTML = 0 
    }
})

function clockstart(btn, i) {
    if(btn.innerHTML == 'stop'){
        if(i == 59){
            i = 0
            secondsB.innerHTML = i
            if(minutesB.innerHTML == 59){
                minutesB.innerHTML = 0
                hoursB.innerHTML++
            }else{
                minutesB.innerHTML++
            }
        }else{
            i++
            secondsB.innerHTML = i
        }
        setTimeout(() => clockstart(btn, i), 1000);
    }
}
// 5 нужно ставить :)