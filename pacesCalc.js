function calculatePace(event) {
    event.preventDefault();
    //something with mileage
        
    let mileage = parseFloat(document.getElementById('mileage').value);
    //convert hours into mins
    let goalHours = parseInt(document.getElementById('hours').value) * 60;
    let goalMinutes = parseInt(document.getElementById('minutes').value);
    //convert seconds into mins
    let goalSeconds = parseInt(document.getElementById('seconds').value) / 60.0;
    //add all times together then divide by distance
    let goal = (goalHours + goalMinutes + goalSeconds) / mileage;
    //to avoid redundant remainders 
    let goalFinalMin = Math.trunc(goal);
    //to make seconds base 60 rather than base 10:
    let seconds = Math.trunc((goal % 1) * 60);
   

    let goalpaceELT = document.getElementById('goalpaceValue');
    //use moment function to properly format data
    goalpaceELT.innerHTML = moment(goalFinalMin + ':' + seconds.toFixed(1), "mm:ss").format("mm:ss");
}


let goalPace = document.getElementById('paceForm');
goalPace.addEventListener('submit', calculatePace);


function calculateRace(event){
    event.preventDefault();

//set up variables
let raceMileage = parseFloat(document.getElementById('raceMileage').value);

let mileMinutes = parseFloat(document.getElementById('mileMinutes').value);
//convert seconds to minutes
let mileSeconds = parseFloat(document.getElementById('mileSeconds').value);


let totalTimeInSeconds = (mileMinutes * 60) + mileSeconds

// multiply distance by total time
let raceTimeInSeconds = raceMileage * (totalTimeInSeconds);
    //configure time into hours, mins, seconds;

let raceTimeMinutes = Math.trunc(raceTimeInSeconds / 60);
let raceTimeSeconds = raceTimeInSeconds % 60;
raceTimeSeconds = raceTimeSeconds === 0 ? "00" : raceTimeSeconds;
raceTimeMinutes = raceTimeMinutes === 0 ? "00" : raceTimeMinutes;
    //format in hh:mm:ss
const minutesinAnHour=60;
const secondsInAMinute=60;
let raceTimeElt = document.getElementById('raceTime');

    raceTimeElt.innerHTML = `00:${raceTimeMinutes}:${raceTimeSeconds}`
if (raceTimeMinutes >= minutesinAnHour) {

    let raceTimeHours = (raceTimeMinutes / minutesinAnHour);
    raceTimeMinutes = raceTimeHours - Math.trunc(raceTimeHours);
    raceTimeMinutes = Math.trunc(raceTimeMinutes * secondsInAMinute);
    raceTimeHours = Math.trunc(raceTimeHours);


    raceTimeMinutes = raceTimeMinutes === 0 ? "00" : raceTimeMinutes;
    raceTimeElt.innerHTML = `${raceTimeHours}:${raceTimeMinutes}:${raceTimeSeconds}`;
}


}

let raceTime = document.getElementById('raceForm');
raceTime.addEventListener('submit', calculateRace);

//toggle name change? or possibly combine with above toggleSwitch functionality

//actual button functionality

function toggleSwitch() {
    //console.log('toggled!');
    let answerUnits = document.getElementById("goalpaceUnits");
    let distanceLabel = document.getElementById("distanceLabel");
    let directionKm = document.getElementById("directionKm");
    let formTwoDistance = document.getElementById("formTwoDistance");
    let formTwoLabel = document.getElementById("innerFormP");
    if (answerUnits.innerHTML === "mins/mile pace:") {
        answerUnits.innerHTML = "mins/kilometer pace:";
        distanceLabel.innerHTML = "Distance in Kilometers:";
        directionKm.innerHTML = "Directions: Enter in your desired distance in kilometers and time";
       formTwoDistance.innerHTML = "Distance in Kilometers:"
        formTwoLabel.innerHTML = "mins/kilometer pace:";
   
    }
    else {
        answerUnits.innerHTML = "mins/mile pace:";
        distanceLabel.innerHTML = "Distance in Miles:";
        directionKm.innerHTML = "Directions: Enter in your desired distance in miles and time";
        formTwoDistance.innerHTML = "Distance in Miles:"
        formTwoLabel.innerHTML = "mins/mile pace:";
    } 
}


// legacy code:
   // let convertedTime = Math.trunc(raceTime / 60);
    // let convertedTimeSeconds = Math.trunc((raceTime % 1) * 60);
    //let convertedTimeMin = Math.trunc(((raceTime/60) % 1) *60);
   // let convertedTimeSec = Math.trunc((((((raceTime / 60) % 1) *60) / 60) % 1) * 60);
   // console.log(convertedTimeSec)