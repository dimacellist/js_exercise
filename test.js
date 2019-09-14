const assert = require('assert')
const expect = require('chai').expect
const reverseWords = require('./reverseWords')
const triangleCategorization = require('./triangleCategorization')
const linkedList = require('./linkedListTraversal')

//Testing reverseWords function
describe('ReverseWords', function(){

  it('Hello world reverses to dlrow olleH', function(){
    assert.equal(reverseWords('Hello world'), 'olleH dlrow')
  })

  it('The wheels on a bus go round and round reverses to ehT sleehw no a sub og dnuor dna dnuor', function(){
    assert.equal(reverseWords('The wheels on a bus go round and round'), 'ehT sleehw no a sub og dnuor dna dnuor')
  })

  it('Hello world! Baby reverses to olleH !dlrow ybaB', function(){
    assert.equal(reverseWords('Hello world! Baby'), 'olleH !dlrow ybaB')
  })
})

//Testing triangleCategorization function
describe('TriangleCategorization', function(){

  it('Should return error if no parameters given', function(){
    assert.equal(triangleCategorization(), 
    'Please enter numbers only')
  })

  it('Should return error when user enters letters', function(){
    assert.equal(triangleCategorization('h', 't', 'e'), 
    'Please enter numbers only')
  })

  it('Should return error if user enters all 0', function(){
    assert.equal(triangleCategorization(0, 0, 0), 
    'Please enter numbers that are greater than 0')
  })

  it('Should check if triangle is valid', function(){
    assert.equal(triangleCategorization(10, 1, 2), 
    'Sorry, but inputs are not valid, please refer to triangle inequality theorem')
  })

  it('Should return as Equilateral', function(){
    assert.equal(triangleCategorization(10, 10, 10), 
    'You have created a Equilateral triangle')
  })

  it('Should return as Isosceles', function(){
    assert.equal(triangleCategorization(10, 13, 10), 
    'You have created a Isosceles trianlge')
  })

  it('Should return as Scalene', function(){
    assert.equal(triangleCategorization(4, 7, 10), 
    'You have created a Scalene triangle')
  })
})

//Testing LinkedList functionality
describe('LinkedList', function(){
  var list = 0

  beforeEach(function() {
    list = new linkedList()
  })

  it('Should initiate empty linked list', function(){
    expect(list.head).to.not.equal(1)
    expect(list.size).to.not.equal(1)
  })

  it('Should add single node to the list', function() {
    list.insertFirst(1);
    expect(list.head).to.not.to.be.a('null');
    expect(list.size).to.equal(1);
    expect(list.head.data).to.equal(1);
  });

  it('A null should be next item at the start after adding a single node', function() {
    list.insertFirst(1);
    expect(list.head.data).to.equal(1);
    expect(list.size).to.equal(1);
    expect(list.head.next).to.be.a('null');
  });

  it('A null should be next item at the end after adding a single item', function() {
    list.insertFirst(1);
    expect(list.head.data).to.equal(1);
    expect(list.head.next).to.be.a('null');
  });

  it('Should be able to add nodes', function() {
    list.insertFirst(1);
    list.insertNext(2);
    list.insertNext(3);
    list.insertNext(4);

    expect(list.head.data).to.equal(1);
    expect(list.head.next).to.be.a('object');
    expect(list.size).to.equal(4);
  });

  it('Should return nth index from the end of the list', function() {
    list.insertFirst(1);
    for(let i = 2; i <= 10; i++) {
      list.insertNext(i);
    }

    expect(list.head.data).to.equal(1);
    expect(list.head.next).to.be.a('object');
    expect(list.size).to.equal(10);

    //You can play around and try different options
    assert.equal(list.getNthLastNodeNew(1).data, 10)
    assert.equal(list.getNthLastNodeNew(2).data, 9)
    assert.equal(list.getNthLastNodeNew(3).data, 8)
    assert.equal(list.getNthLastNodeNew(4).data, 7)
    assert.equal(list.getNthLastNodeNew(5).data, 6)
  })
})
