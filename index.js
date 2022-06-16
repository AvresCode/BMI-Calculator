
//console.log("What does process.argv contain?", process.argv);
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
//console.log("weight:", weightInKg);
//console.log("height:", heightInM);
//BMI is body mass index.
const BMI = weightInKg / (heightInM * heightInM);
//console.log(BMI)
const roundedBMI = Math.round(BMI);
const idealBMI = 22.5;
const idealWeight = idealBMI * heightInM * heightInM;


//The BMI is Basal Metabolic Rate. 
const BMR = (10 * weightInKg) + (6.25 * heightInM * 100)- (5 * age);
const calorieNeededPerDay = BMR * 1.4;



//The amount of weight to lose to reach your idealweight is: weight (kg) - ideal weight (kg)
const extraWeightKg = weightInKg - idealWeight;

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

