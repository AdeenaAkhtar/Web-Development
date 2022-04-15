//Task 1
function calculator(){
        var result = 0;
        var num1 , num2;
        var op = prompt("Enter which Operation you want to perform(+,-,/,*,++,--,%)");
        switch(op){
            case '+':
                num1 = prompt("Enter the First Number:");
                num2 = prompt("Enter the Second Number:");
                result= parseInt(num1)+parseInt(num2);
                break;
            case '-':
                num1 = prompt("Enter the First Number:");
                num2 = prompt("Enter the Second Number:");
                result= parseInt(num1)-parseInt(num2);
                break;
            case '/':
                num1 = prompt("Enter the First Number:");
                num2 = prompt("Enter the Second Number:");
                result= parseInt(num1)/parseInt(num2);
                break;
            case '*':
                num1 = prompt("Enter the First Number:");
                num2 = prompt("Enter the Second Number:");
                result= parseInt(num1)*parseInt(num2);
                break;
            case "++":
                num1 = prompt("Enter the Number:");
                result= parseInt(num1);
                result++;
                break;
                case "--":
                    num1 = prompt("Enter the Number:");
                    result= parseInt(num1);
                    result--;
                    break;
                case '%':
                    num1 = prompt("Enter the First Number:");
                    num2 = prompt("Enter the Second Number:");
                    result= parseInt(num1)%parseInt(num2);
                    break;
            default:
                break;
        }
        if(result != 0){
            return "Result: " + result;
        }
        else{
            return "Incorrect Operator! "
        }
    }

//Task 2
var array = ["Banana", "Apples", "Oranges", "Blueberries"]; 
console.log("Original Array", array);
array.shift();
console.log("Removing \"Banana\" from the Array", array);
array.sort()
console.log("Sorting the Array in order", array);
array.push("Kiwi");
console.log("Puting \"Kiwi\" at the end of the Array", array);
array.shift();
console.log("Removing \"Apples\" from the Array", array);
array.reverse()
console.log("Sorting the Array in Reverse order", array);

//Task 3
var selection;
do{
    selection = prompt( "Alarm is ringing, Press 'S' to snooze and 'D' to dismiss");
    selection.toLowerCase().trim();
    if(selection == 's'){
        continue;
    }
    else if(selection == 'd'){
        alert("Good Morning");
        break;
    }
    else{
        alert("Wrong Input");
        break;
    }
}while(selection == 's');

//Task4
var obj_database = {
    username: "Adeena Akhtar",
    password: "111111"
  };
var database = [obj_database];
var obj_newsfeed1 = {
    username: "Adeena Akhtar",
    timeline: "Small"
  };
var obj_newsfeed2 = {
    username: "Rahemeen",
    timeline: "Medium"
};
var obj_newsfeed3 = {
    username: "Talha Bin Saeed",
    timeline: "Large"
};  
var newsfeed = [obj_newsfeed1 , obj_newsfeed2 , obj_newsfeed3];
console.log("Object : ", obj_database);
console.log("Database : ", database);
console.log("Newsfeed : ", newsfeed);