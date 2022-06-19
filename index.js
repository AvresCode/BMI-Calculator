
//console.log("What does process.argv contain?", process.argv);
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = process.argv[5];
const gender = process.argv[6];
//console.log("weight:", weightInKg);
//console.log("height:", heightInM);
//BMI is body mass index.
const BMI = weightInKg / (heightInM * heightInM);
//console.log(BMI)
const roundedBMI = Math.round(BMI);
const idealBMI = 22.5;
const idealWeight = idealBMI * heightInM * heightInM;


//The BMI is Basal Metabolic Rate. 
const heighInCm = heightInM * 100;
const BMR = gender === "m" ? (10 * weightInKg) + (6.25 * heighInCm)- (5 * age) + 50 : (10 * weightInKg) + (6.25 * heighInCm)- (5 * age) -150;
console.log('BMR:',BMR);
//Amount of calorie needed is differenet for person who exercises daily.
const calorieNeededPerDay = dailyExercise === "yes" ? BMR * 1.6 : BMR * 1.4;
console.log('Calorie need:',calorieNeededPerDay);


//The amount of weight to lose to reach your idealweight is: weight (kg) - ideal weight (kg)
const extraWeightKg = Math.round(weightInKg - idealWeight);
console.log('Extra weight:', extraWeightKg);

//Eating 500 calories less than the body need, one can loose 0.5 kg per week.
//The time (weeks) it will take to reach your ideal weight is: amount of weight to lose / 0.5
const weeksToDiet = extraWeightKg / 0.5;

//Calorie to take in order to loose 0.5 kg per week :  daily usage - 500
const calorieWhileDieting = calorieNeededPerDay - 500;

console.log(`
****************
BMI CALCULATOR
****************
weight: ${weightInKg} kg
height: ${heightInM} m
age: ${age} years
gender: ${gender}
do you exercise daily? : ${dailyExercise}


****************
FACING THE FACTS
****************

Your BMI is ${roundedBMI}.

A BMI under 18.5 is considered underweight.
A BMI above 25 is considered overweight.

Your ideal weight is ${Math.round(idealWeight)} kg.
With a normal lifestyle you burn ${Math.round(calorieNeededPerDay)} calories per day.

****************
DIET PLAN
****************

If you want to reach your ideal weight of ${Math.round(idealWeight)} kg:

Eat ${Math.round(calorieWhileDieting)} calories a day
For ${Math.round(weeksToDiet)} weeks
`);

