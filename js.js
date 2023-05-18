let hoursnow = new Date().getHours()
let hours = hoursnow
if (hours >= 12 && hours < 18) {
    console.log("Boa Tarde!")
} else {
    if (hours > 18 && hours < 23) {
        console.log("Boa Noite!")
    } else {
        if (hours >= 0 && hours <= 5) {
            console.log("Boa Madrugada!")
        } else {
            console.log("Bom Dia!")
        }
    }
}

let minutenow = new Date().getMinutes()
let minute = minutenow

console.log(`${hours}:${minute} (BRT) - Horário de Brasilia`)

let dayweek = new Date().getDay()
switch(dayweek) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quanta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        break
}