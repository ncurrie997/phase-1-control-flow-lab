function scuberGreetingForFeet(rideDistance) {
  // Write your code here! 
  let greeting
  if (rideDistance <= 400) {
    greeting = "This one is on me!"
    console.log(greeting);
  } else if (rideDistance <= 2000) {
    greeting = "That will be twenty bucks.";
  } else if (rideDistance <= 2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else {
    greeting = "No can do.";
  }
  //at the end, if I want my function to return something, I need to state it:
  return greeting;
}
function ternaryCheckCity(whatCity){
  // Write your code here!
  return whatCity === "NYC" ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(amountTip) {
  let tipResponse;
  // Write your code here!
    switch (amountTip){
    case 'generous':
      tipResponse = 'Thank you so much.'
      return tipResponse;
     // have also tried using a return statement.
     break;
    case 'not as generous':
      tipResponse = 'Thank you.'
      return tipResponse;
     break;
      default:
        tipResponse = 'Bye.';
        return tipResponse;
    }
   }