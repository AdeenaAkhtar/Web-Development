//Task # 1: Write a javascript function that takes length, width, and height values of rectangle from user. 
//The function should find the volume of rectangle using the function-currying. 
function Lab7Task1(){
    var length = prompt("Enter the length of the rectangle: ");
    var width = prompt("Enter the width of the rectangle: ");
    var height = prompt("Enter the height of the rectangle: ");
    function volume(x) {
        return (y) => {
            return (z) => {
                return x * y * z;
            }
        }
    }
    var volume = volume (length)(width)(height);
    alert("The volume of the rectangle is: " + volume);
}
//Task # 2: Create two functions “Profile” (outer function) and “greetingMsg” (inner function) that aims to implements
// the concept of Function-closure by generating an alert of greeting message with the help of user details provided in 
//outer function.
function Lab7Task2(){
    function Profile(){
        var fname = prompt("Enter your first name: ");
        var lname = prompt("Enter your last name: ");
        function greetingMsg(){
            alert(`Greetings ${fname} ${lname}! Welcome to JavaScript..`);
        }
        return greetingMsg;
    }
    var profile = Profile();
    profile()
}
//Task # 3: It's a general concept in mathematics where you combine two or more functions into a brand-new function. Write
// a javascript program to implement the given concept with the help of function-compose for the given function. f(g(x))
function Lab7Task3(){
    var num = parseInt(prompt("Enter a Number to Add to and Multiply: "));
    const add5Multiply10 = (f,g) => a => f(g(a));
    const add5 = (x) => x + 5;
    const multiply10 = (x) => x * 10;
    var result = add5Multiply10(multiply10,add5) (num);
    alert(`Added 5 to and multiplied by to the given number(${num}): ${result}`)
}
//Task # 4: Write a javascript program  that uses  filter() to create a filtered array that has all elements
// with values less than 10 removed.
function Lab7Task4(){
    const array = [1,2,3,6,7,8,11,12,13,16,17,18];
    const filteredArray = array.filter(num => num > 10);
    alert(`Original array: ${array}\nFiltered array: ${filteredArray}`);
}

//Task # 5: Creates an array consisting of only those elements that satisfy the condition checked by isPositive()
// function with the help of appropriate javascript advance loops concept
function Lab7Task5(){
    const isPositive = (number) => {
        if (number >= 0) {
            return true;
        }
        else {
            return false;
    }
    }
    const numberArray = [1,-1,2,-2,3,-3,-4,-5];
    const positiveArray = [];
    let newArray = numberArray.forEach((num) => {
        if(isPositive(num)){
            positiveArray.push(num);
        }
    });
    alert(`Original array: ${numberArray}\nPositive array: ${positiveArray}`);
}

//Task # 6: Write a javascript program that implements the array.map() that aim to produces an array containing square 
//roots of the numbers in the original array.
function Lab7Task6(){
    const array = [1,2,4,6,8,12,7,5,64];
    const arrayRoot = array.map(num => Math.round(Math.sqrt(num)*100)/100);
    alert(`Original array: ${array}\nSquare root array: ${arrayRoot}`);
}
//Task # 7: Create a class named 'Member' having the members: Name, Age, Salary. It also has a method named 'printSalary'
// which prints the salary of the members. Create child class 'Employee' that inherits the 'Member' class. The 'Employee'
// classes have data member  'department'. Now, assign name, age and salary to an employee by making an object of child 
//class and print the same.
function Lab7Task7(){
    print='Result:\n'
    class Member {
        constructor(name, age, salary) {
          this.name = name;
          this.age = age;
          this.salary = salary;
        }
        printSalary = () => {
          print += `\nThe Salary of Employee ${this.name} is ${this.salary}`;
        };
      }
      class Employee extends Member {
        constructor(name, age, salary, department) {
          super(name, age, salary);
          this.department = department;
        }
      }
      const employee1 = new Employee("Adeena", 22, 100000, "Sales");
      const employee2 = new Employee("Alina", 24, 250000, "Marketing");
      const employee3 = new Employee("Ayesha", 28, 305000, "Management");
      employee1.printSalary();
      employee2.printSalary();
      employee3.printSalary();
      alert(print);
}
/*Task # 8: Write a javascript program to implement the concept of nullish coalesing operator by using the 
below object properties. */
function Lab7Task8(){
    let coalesce = '';
    let original = '';
    const response = {
        data: 
        {
            Name: 'Ronaldo',
            Occupation: null,
            Lies: 0
        }
    }
    original += `Original Object:\nData: {Name: '${response.data.Name}' , Occupation: '${response.data.Occupation}' , Lies: '${response.data.Lies}'}`
    let name = response?.data?.Name ?? "Anonymous";
    let occupation = response?.data?.Occupation ?? "Jobless";
    let lies = response?.data?.Lies ?? "None";
    coalesce += `\n\nObject After Nullish Coalesing:\nData: {Name: '${name}' , Occupation: '${occupation}' , Lies: '${lies}'}`
    alert(original + coalesce);
}
