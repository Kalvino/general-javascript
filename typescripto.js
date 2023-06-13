// var Employee = (function(){

//   function Employee(code,name){
//     this.empName = name;
//     this.empCode = code;
//   }
  
//   Employee.prototype.getSalary = function() {
//     return 10000
//   }
//   return Employee;
// }());

function Emp(code,name){
  this.empName = name;
  this.empCode = code;

  this.getSalary = function(){
    return 10
  }
}

var cal = new Emp(123, "calvo");
console.log(cal.getSalary());
  
