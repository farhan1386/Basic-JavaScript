// Speed Limit 70
// Every 5km/hour above speed limit => 1 point
// If 12 point => Licence suspended

checkSpeed(70);

function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;

    if(speed < speedLimit + kmPerPoint)
        console.log('OK');
    else{
     const points= Math.floor((speed - speedLimit) / kmPerPoint);
     if(points >= 12)
         console.log('Licence Suspended');
     else
         console.log('Points:',points);
    }
}