let timerDisplay=document.querySelector('.timerDisplay');
let stopBtn=document.getElementById('stopBtn')
let startBtn=document.getElementById('startBtn')
let restBtn=document.getElementById('restBtn')
let msec=00;
let sec=00;
let min=00;

let timerId=null;
startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId); 
    }
    timerId = setInterval(startTimer, 10)
});
stopBtn.addEventListener('click', function(){
        clearInterval(timerId);
});
restBtn.addEventListener('click', function(){
        clearInterval(timerId);
        timerDisplay.innerHTML='00 : 00 : 00';
});

function startTimer(){
     msec++;
     if(msec==100){
        msec=00;
        sec++;
        if(sec==60){
            sec=00;
            min++;
        }
     }
     let msecString = msec < 10 ? `0${msec}` : msec;
     let secString = sec < 10 ? `0${sec}` : sec;
     let minString = min < 10 ? `0${min}` : min;

//      let msecString;
//      if(msec < 10){
//         msecString='0${msec}';
//      }
//      else(
//         msecString=msec
//      )
timerDisplay.innerHTML=`${minString} : ${secString} : ${msecString}`
}