var empId: number = 1;
var empName: string = "Steve";        

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
console.log(typeof employee === typeof []);

const ary = [1,"bloblo"]
console.log(ary);

employee.push(2)
employee.push("true")


// var employees: [number, string][] = [[1,'Obilo']]
console.log(employee);



enum PrintMedia {
  Newspaper = 1,
  Magazine,
  Newsletter,
  Book
}

console.log(PrintMedia.Book);

enum PrintMediaa {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK"
}
// Access String Enum 
PrintMediaa.Newspaper; //returns NEWSPAPER
console.log(PrintMediaa['Magazine']);
