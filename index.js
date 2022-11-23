let dist = 0;

function distanceFromHqInBlocks(block) {
  dist = Math.abs(42 - block);
  return dist;
}


function distanceFromHqInFeet(distance) {
    let dB = distanceFromHqInBlocks(distance);

    let f = 0;
    f = dB * 264;
    return f;
}
function distanceFromHqInBlock(blockNumber){
    if(blockNumber > 42){
     return blockNumber - 42
    } else {
        return 42 - blockNumber
    }
}
function distanceFromHqInFeet (blockNumber){
    return distanceFromHqInBlocks(blockNumber)*264

}
function distanceTravelledInFeet (start, destination){
    if (start < destination){
        return  (destination - start)*264
    } else{
        return (start - destination)*264
    }
}
function calculatesFarePrice(start, destination) {
    let disBlock = Math.abs(start - destination) * 264;
    let fare = 0;
    let disPast400 = disBlock - 400;
  
    if (disBlock <= 400) {
      fare = 0;
    } else if (disBlock > 400 && disBlock < 2000) {
      fare = 0.02 * disPast400;
    } else if (disBlock > 2000 && disBlock < 2500) {
      fare = 25;
    } else {
      fare = "cannot travel that far";
    }
    return fare;
  }