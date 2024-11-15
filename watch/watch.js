let h=document.getElementById("hour");
let m=document.getElementById("minute");
let s=document.getElementById("second");
function displayTime(){
    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    let hourRotation=30*hour+minute/2
    let minuteRotation=6*minute
    let  secondRotation=6*second
    h.style.transform=`rotate(${hourRotation}deg)`
    m.style.transform=`rotate(${minuteRotation}deg)`
    s.style.transform=`rotate(${secondRotation}deg)`

}
setInterval(displayTime,1000)