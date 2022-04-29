//Task 1
function Lab4Task1(){
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
    alert(calculator());
}
//Task 2
function Lab4Task2(){
    var result = '';
    var array = ["Banana", "Apples", "Oranges", "Blueberries"]; 
    console.log("Original Array", array);
    result += `Original Array: ${array}`
    array.shift();
    console.log("Removing \"Banana\" from the Array", array);
    result += `\nRemoving "Banana" from the Array: ${array}`
    array.sort()
    console.log("Sorting the Array in order", array);
    result += `\nSorting the Array in order: ${array}`
    array.push("Kiwi");
    console.log("Puting \"Kiwi\" at the end of the Array", array);
    result += `\nPuting "Kiwi" at the end of the Array: ${array}`
    array.shift();
    console.log("Removing \"Apples\" from the Array", array);
    result += `\nRemoving "Apples" from the Array: ${array}`
    array.reverse()
    console.log("Sorting the Array in Reverse order", array);
    result += `\nSorting the Array in Reverse order: ${array}`
    alert(result);
}

//Task 3
function Lab4Task3(){
    var selection;
    do{
        selection = prompt( "Alarm is ringing, Press 'S' to snooze and 'D' to dismiss");
        selection = selection.toLowerCase().trim();
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
    }
//Task4
function Lab4Task4(){
    var result = '';
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
    result += `Object :\n{username: '${obj_database.username}' , password: '${obj_database.password}'}`
    result += `\nDatabase :\n0: {username: '${database[0].username}' , password: '${database[0].password}'}` 
    result += `\nNewsfeed :\n0: {username: '${newsfeed[0].username}', timeline: '${newsfeed[0].timeline}'}\n1: {username: '${newsfeed[1].username}', timeline: '${newsfeed[1].timeline}'}\n2: {username: '${newsfeed[2].username}', timeline: '${newsfeed[2].timeline}'} `
    alert(result);
}
