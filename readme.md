# Javascript Exercises

## Number 1: Reverse words in sentence

Objective: 

For any given sentence, reverse the characters of each word in the sentence.

```
function getReverseWords(str) {
  return str.split(' ').map(e=>e.split('').reverse().join('')).join(' ');
}
```


## Number 2: Triangle Categorization

Objective:

Given the numerical lengths of the 3 sides of a triangle, return the type of triangle formed by these 3 sides.

Function will return the type of the triangle:

An Equilateral triangle has three equal sides.
An Isosceles triangle has two equal sides. 
A Scalene triangle has no equal sides.

```
function getTriangleType(a, b, c) {
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
    return "Sorry, but inputs are not valid, please refer to triangle inequality theorem"
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
```

## Number 3: Linked List Traversal

Objective:

Given a singularly linked list of integers, return the 5th integer from the end of the list using the most efficient method. 

Function getNthLastNode(index) will return necessary nth node from the end
Given the linked list consist of numbers from 1 to 10, 5th from end would be number 6

```
getNthLastNodeNew(index){
  let firstPointer = this.head
  let secondPointer = this.head
  let i = 1

  for (i = 1; i < index; i++) {
    if(firstPointer == null) {
      return null
    }
    firstPointer = firstPointer.next
  }

  while(firstPointer.next != null) {
    firstPointer = firstPointer.next
    secondPointer = secondPointer.next
  }
return secondPointer
}
```

# Testing

SETUP:

- Clone the repo: `git clone git@github.com:dimacellist/js_exercise.git`
- Install dependencies: `npm install`
- Run the tests: `npm test`

![Tests](https://res.cloudinary.com/dksg2fojb/image/upload/v1568494382/Screenshot_2019-09-14_at_23.52.24_guqzpv.png)
