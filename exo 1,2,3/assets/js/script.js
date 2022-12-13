
//Exercice 1
const date = new Date();
console.log("Heure d'Anchorage : " +
    date.toLocaleString('fr-BE', {
      timeZone:  'America/Anchorage',
    }))

console.log("Heure de Reykjavik : "+ date.toLocaleString('fr-BE', {
    timeZone:  'Atlantic/Reykjavik',
  }))

console.log("Heure de Saint-Petersburg : "+ date.toLocaleString('fr-BE', {
    timeZone:  'Europe/Moscow',
  }))

console.log("Heure de Bruxelles : "+ date.toLocaleString('fr-BE',{timezone : 'Europe/Bruxelles'}))


//Exercice2
Anniversaire=new Date("1998-01-09")
Now= new Date()
Time=Now.getTime()-Anniversaire.getTime()
formatTime=(Time/86400000).toFixed(0) //donne le nombre de jour depuis ta naissance
console.log("Il s'est passé  " + formatTime + " jours depuis ton anniversaire ")

//time doit être une date 
function day(date){
    let Now= new Date()
    let Time=Now.getTime()-date.getTime()
    let formatTime=(Time/86400000).toFixed(0) //donne le nombre de jour depuis la date Time
    return formatTime
}


//Exercice3
Now = new Date()
let hours= 1000 * 60 * 60 * 80000
let futurNow=new Date(Now.getTime()+hours)
console.log(futurNow.toString())

//
function newdate(hours){
    let   Now = new Date()
    let newhours= 1000 * 60 * 60 * hours
    let futurNow=new Date(Now.getTime()+newhours)
    return futurNow
}

form=document.getElementsByClassName("hours__form")[0]
    p=document.createElement("p")
    hours=document.getElementsByClassName("hours")[0]
    hours.append(p)


form.addEventListener("keyup",() => {
    form_value=form.value
    content=newdate(form_value)
    content_string=String(content)
    p.textContent=content_string.substring(0,25)
})





