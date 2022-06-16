//console.log("What does process.argv contain?", process.argv);
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
//console.log("weight:", weightInKg);
//console.log("height:", heightInM);
const BMI = weightInKg / (heightInM * heightInM);
//console.log(BMI)
const roundedBMI = Math.round(BMI);
const idealBMI = 22.5;
const idealWeight = idealBMI * heightInM * heightInM;
const roundedIdealWeight = Math.round(idealWeight);
const BMR = (10 * weightInKg) + (6.25 * heightInM * 100)- (5 * age);
const calorieConsumptionPerDay = BMR * 1.4;
const roundedCalorieConsumption = Math.round(calorieConsumptionPerDay);

