module.exports = function getTriangleType(a, b, c) {
  //Check for not a numbers 
  if(isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Please enter numbers only"
  } 

  //Check if only 0 are entered
  if (a == 0 || b == 0 || c == 0) {
    return "Please enter numbers that are greater than 0";
  } 

  //Check if it is a valid triangle
  if(!(a + b > c && b + c > a && a + c > b)){
    return "Sorry, but inputs is not valid, please refer to triangle inequality theorem"
  }
  
  //Check for correct triangle type
  if (a == b && b == c) {
    return "You have created a Equilateral triangle";
  } else if (a == b || b == c || a == c) {
    return "You have created a Isosceles trianlge";
  } else {
    return "You have created a Scalene triangle";
  }
}
