// conditional statements

let commission = 18;

if (commission < 7) {
    console.log('Ova e mnogu niska provizija')
} else if (commission >= 7 && commission <= 15) {
    console.log('Ova e sredna provizija')
} else {
    console.log('Visoka provizija')
}

switch(commission) {
    case commission < 7:
      console.log('ova e niska provizija');
      
      break;
    case commission >= 7 && commission <= 15:
        console.log('ova e sredna provizija');

        break;
    default:
        console.log('Visoka provizija')
}