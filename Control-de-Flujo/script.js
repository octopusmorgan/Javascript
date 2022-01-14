//Exercise-1
//Part-1
var day = parseInt(prompt("Dia de la Semana"));
var hour = parseInt(prompt("Hora del dia"));

function businessHours(dayNumber,hourNumber){
    if(dayNumber>=1 && dayNumber<6){
        if(hourNumber>=9 && hourNumber<=18)
            return true;
        else
            return false;
        }
    else
    return false;
}

console.log(businessHours(day,hour));

//Part-2
var yearDay = parseInt(prompt("Day Number"));

function getDayNumber(yearDayNumber) {
    if(yearDayNumber>=0 && yearDayNumber<=365)
    {  
        var weekDay =yearDayNumber%7; 
        console.log(weekDay);
        return weekDay;
    }
    
}

var week = getDayNumber(yearDay);
printDay(week);
function printDay(d){
    switch(d){
        case 0:
            console.log("Domigo");
        break;
        case 1:
            console.log("Lunes");
        break;
        case 2:
            console.log("Martes");
        break;
        case 3:
            console.log("Miercoles");
        break;
        case 4:
            console.log("Jueves");
        break;
        case 5:
            console.log("Viernes");
        break;
        case 6:
            console.log("Sabado");
        break;
    }
}


//Part-3
function businessTime(weekDay,hourNum) {
    if(weekDay>=1 && weekDay<6){
        if(hourNum>=9 && hourNum<=18)
            return true;
        else
            return false;
        }
    else
    return false;
}

businessTime(week,hour);

//Challenge

const d = new Date("July 13,1994 12:00:00");
var week = d.getDay();
console.log("Challenge");
var hour = d.getHours();

console.log(businessHours(week,hour));

function businessHours(dayNumber,hourNumber){
    if(dayNumber>=1 && dayNumber<6){
        if(hourNumber>=9 && hourNumber<=18)
            return true;
        else
            return false;
        }
    else
    return false;
}