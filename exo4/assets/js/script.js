const week=["Mond","Tue","wed","Thu","Fri","Sat","Sun"]
const month_list=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]


setInterval(() => {
    
let now= new Date()
let day=now.getDay();
let date=now.getDate();
let month=now.getMonth();
let year=now.getFullYear();
let hour=now.getHours();
let minute=now.getMinutes();
let second=now.getSeconds();


//jour
date__day=document.getElementsByClassName("date__day")[0];
date__day.textContent=week[Number(day)-1];

//mois+jour
date__month=document.getElementsByClassName("date__DayMonth--Day")[0];
date__month.textContent=date
date__month=document.getElementsByClassName("date__DayMonth--Month")[0];
date__month.textContent=month_list[month]

//année
date__year=document.getElementsByClassName("date__year")[0];
date__year.textContent=year

//heure
hours=document.getElementsByClassName("hours")[0];
console.log(hours)
if(second<10){
    second="0"+second
}
if(minute<10){
    minute="0"+minute
}
if(hour<10){
    hour="0"+hour
}
if(hours.classList.contains("12")){
    if(hour<12){
        hour=hour%12
        hours.textContent= hour+" : " +  minute + " : " +second +" AM " ;
    }
    else{
        hour=hour%12
        hours.textContent=hour+" : " +  minute + " : " +second +" PM " ;
    }
}
else{
    hours.textContent=hour+" : " +  minute + " : " +second;
}
hours.addEventListener("click",()=>{
    hours.classList.toggle("12");
    
})

}, 1000);