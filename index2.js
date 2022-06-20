function calculateBMI(weight, height){
    return weight / (height * height);
     
}
function calculateBMR(weight, height, ageOfUser, genderOfUser){
    const heighInCm = height * 100;
    const BMR = genderOfUser === "m" ? (10 * weight) + (6.25 * heighInCm)- (5 * ageOfUser) + 50 : (10 * weight) + (6.25 * heighInCm)- (5 * ageOfUser) -150;
    return BMR
}

function bmiCalculator(){
   
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = process.argv[5];
const gender = process.argv[6];

const BMI = calculateBMI(weightInKg, heightInM);
console.log('BMI in main:', BMI);

const BMR = calculateBMR(weightInKg, heightInM, age, gender);


 console.log("WEIGHT: ", weightInKg);
 console.log("HEIGHT: ", heightInM);
// console.log("AGE: ", age);
// console.log("DAILY EXERCISE: ", dailyExercise);
// console.log("GENDER: ", gender);
}
bmiCalculator();
