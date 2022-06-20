function calculateBMI(weight, height){
    return weight / (height * height);
     
}

function calculateBMR(weight, height, ageOfUser, genderOfUser){
    const heighInCm = height * 100;
   return genderOfUser === "m" ? (10 * weight) + (6.25 * heighInCm)- (5 * ageOfUser) + 50 : (10 * weight) + (6.25 * heighInCm)- (5 * ageOfUser) -150;
   
}

function calculateIdealWeight(height){
    const idealBMI = 22.5;
return idealWeight = idealBMI * height * height;


}

 function calculateDailyCalories(exercise, BMRamount){
    return exercise === "yes" ? BMRamount * 1.6 : BMRamount * 1.4;

}
function calculateWeightDifference(weight, personIdealWeight){
    return weight- personIdealWeight;
    
}

function calculateDietWeeks(weightVariance){
   return Math.abs(weightVariance / 0.5);

}

function calculateDietCalories(weightVariance, dailyCalorie){
    
if(weightVariance > 0){
    return dailyCalorie- 500;
}else if(weightVariance< 0){
    return dailyCalorie + 500;
}


}

function bmiCalculator(){
   
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = process.argv[5];
const gender = process.argv[6];

const BMI = calculateBMI(weightInKg, heightInM);
const BMR = calculateBMR(weightInKg, heightInM, age, gender);
const idealWeight = calculateIdealWeight(heightInM);
const calorieNeededPerDay = calculateDailyCalories(dailyExercise, BMR);

const weightDifference = calculateWeightDifference(weightInKg, idealWeight);
const weeksToDiet = calculateDietWeeks(weightDifference);
const calorieWhileDieting = calculateDietCalories(weightDifference, calorieNeededPerDay);

 console.log("WEIGHT: ", weightInKg);
 console.log("HEIGHT: ", heightInM);
// console.log("AGE: ", age);
// console.log("DAILY EXERCISE: ", dailyExercise);
// console.log("GENDER: ", gender);
}
bmiCalculator();
