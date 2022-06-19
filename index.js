
//check if the amount of inputs are correct

if(process.argv.length !== 7 ){
    console.log(
        `you gave ${process.argv.length - 2} arguments to the program. 
        Please provide 5 arguments for:
        weight (kg),
        height (m),
        age,
        whether you exercise or not (yes or no),
        and your gender (m or f)

        Example:

    $ node index.js 54 1.6 32 yes f

    `);
    process.exit();
}


const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = process.argv[5];
const gender = process.argv[6];

if(isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(
        `
        Please make sure weight, height and age are numbers.

        example: 
        weight (kg) example : 54 | your input : ${process.argv[2]}
        height (m) example : 1.6 | your input : ${process.argv[3]}
        age example: 32 | your input : ${process.argv[4]}
        $ node index.js 54 1.6 32 yes f
        `);

    process.exit();
}


if(age < 20){
    console.log(
        `
       This BMI calculator has been designed for people over 20!
       BMI is calculated differently for young people.

       For more information please visit: 
       https://en.wikipedia.org/wiki/Body_mass_index#Children_(aged_2_to_20)
    
       `);

    process.exit();
}

if(weightInKg < 30 || weightInKg > 300 ){
    console.log(`
    Please provide a number for weight in kilograms between 30 and 300.
    Your weight of ${weightInKg} kgs does not fall in the range between 30 kg and 300 kg

    If you weight is below 30 kg or over 300 kg seek professional medical help
    `);
    process.exit();
}



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
const weightDifference = weightInKg - idealWeight;
console.log('weightDifference:', weightDifference);

//Calorie to take in order to loose 0.5 kg per week :  daily usage - 500
//Calorie to take in order to gain 0.5 kg per week :  daily usage + 500
//Eating 500 calories less (or more) than the body need, one can loose (or gain) 0.5 kg per week.
//The time (weeks) it will take to reach ideal weight is: amount of weight to lose(or gain) / 0.5

let calorieWhileDieting;
if(weightDifference > 0){
     calorieWhileDieting = calorieNeededPerDay - 500;
}else if(weightDifference < 0){
    calorieWhileDieting = calorieNeededPerDay + 500;
}


const weeksToDiet = Math.abs(weightDifference / 0.5);




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

