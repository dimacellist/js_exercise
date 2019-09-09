function typeOfTriangle(a ,b, c) {
  let a
  let b
  let c

  if (a === 0 || b === 0 || c === 0) {
    return "Please enter valid numbers"
  } else if (a == b && b == c) {
    return "You have created a Equilateral triangle"
  } else if (a === b || b === c || a === c) {
    return "You have created a Isosceles trianlge"
  } else {
    return "You have created a Scalene triangle"
  }
}

TypeOfTriangle(10, 10, 10)
