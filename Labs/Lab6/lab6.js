//Task # 1
function Lab6Task1(){
    function calculatePower()
    {
        var power = '';
        var base = parseInt(prompt('Enter the Number whose power you want to calculate: '));
        let result = Math.pow(base, 100);
        power += `${base} ^ 100 = ${(result)}`;
        alert(power)
    }
    calculatePower()
}
//Task # 2
function Lab6Task2(){
    function arraySum(){
        let arr = [1,2,3,4,5,6,9] ;
        let target = 8;
        result = `Original array: [${arr}]\nSum target: ${target}\nArray elements whose Sum matches target: `
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++){
            sum = arr[i] + arr[j]; 
            if(sum == target){
                result += `[${arr[i]},${arr[j]}] `
            }
            }
        }
        alert(result);
    }
    arraySum()
}

//Task # 3 use ternary operator
function Lab6Task3(){
    var age = parseInt(prompt('Please enter your Age: '));
    isDriver = (a) => a >= 18 ? `At age ${a}: You can drive now...` : `At age ${a}: You can't drive yet...`;
    alert(isDriver(age))
}
//Task # 4  generate alert for for browser
function Lab6Task4(){
    const browse = prompt("Select which browser you are using:\n\n1.Google Chrome\n2.Mozilla Firefox\n3.Safari\n4.Microsoft Edge\n");
    let used = " ";
    switch(browse){
        case '1':
            used = "Google Chrome";
            break;
        case '2':
            used = "Mozilla Firefox";
            break;
        case '3':
            used = "Safari";
            break;
        case '4':
            used = "Microsoft Edge";
            break;
        default:
            alert(`Incorrect Input!`);
            break;
        }
    if(used != " ")
        alert(`I am using ${used} browser...`);
    }
//Task # 5 fumction with parameters 
function Lab6Task5(){
    const calculateSupply  = (age, amtPerDay) => {
        const maxAge = 100;
        if (age < maxAge && amtPerDay > 0) {
            const amtPerYear = amtPerDay * 365;
            const amtConsumedForRestOfLifetime = (maxAge - age) * amtPerYear;
            alert(`With current Age = ${age} and  Amount spent per Day = $${amtPerDay}\nYou will need $${amtConsumedForRestOfLifetime} to last you until the ripe old age of ${maxAge}`);
        } else {
          alert("Incorrect Input");
        }
      };
      let currentAge = parseInt(prompt('Please enter your Age: '));
      let amountPerDay = parseInt(prompt('Please enter the Amount you spend per Day: '));
      calculateSupply(currentAge , amountPerDay);
}
//Task # 6 Make object and console.log the output
function Lab6Task6(){
    const favoriteRecipe = {
        title: "Tea",
        servings: 2,
        ingredients: ["Sugar", "Tea", "Water", "Milk"],
        recipe: function (){
            let result =  `${this.title}\nServes: ${this.servings}\nIngredients:\n${this.ingredients.map((ingredient) => ingredient).join("\n")}` 
            return result;
        }
    };
    console.log(favoriteRecipe.recipe());
    alert(favoriteRecipe.recipe());
}
//Task # 7
function Lab6Task7(){
    let obj = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
      }
    alert(`My ${obj.my} is ${obj.is} the ${obj.the}.`);
}

