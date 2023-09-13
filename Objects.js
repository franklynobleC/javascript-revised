/*

const product = {
  name: 'stocks',
  price: 1009
}

product.name = 'cotton stocks'

console.log(product)

product.newProperty = true
product.newName = 'james'
product.orderTotal = 30

console.log(product)
//
// delete and  item from  object

delete product.newProperty
delete product.newName

console.log(product)

// another way to access Object

const product2 = {
  name: 'shirt',
  address: 'no. 24 street Wilbur',
  ['delivery-time']: '1 day',
  ['delivery-type']: 'express',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: (function1 = () => {
    console.log('function inside object')
  })
}
console.log('another Object')
// console.log(product2['name'])
// console.log(product2['email'])
console.log(product2.rating['stars'])
console.log(product2.rating['count'])
product2.fun()

//Math is Object
// random() is a function  in Math Class or Object
Math.random()

console.log('convert to JSON Object')
console.log(typeof JSON.stringify(product2))

// convert  json  to Javascript Object

//convert a the JSON string back to a Javascript Object
const jsonString = JSON.stringify(product2)
console.log(JSON.parse(jsonString))

//LOCAL STORAGE: NOT:  LOcal storage ONLY supports string  value

//saving or storing files  in  local storage
localStorage.setItem('message', 'Hello')
*/

const object1 = {
  message: 'hello'
}

const object2 = object1

object1.message = 'Good Deed!'
console.log(object1)
console.log(object2)

const object3 = { message: 'Good Deed!' }
// this Object would  be   thesaame as  they point  to thesameReferrence in  the computer's Memory
console.log(object2 === object2)
//this would  be false, as  it compares Referrences and Not the Object itself,  in computer's Memory,  the references are Different
console.log(object3 === object1)

//Object destructuring

const object4 = {
  message: 'Good Job!',
  price: 799
}

const { message, price } = object4

console.log(message)
console.log(price)

//short  hand  property
const object5 = {
  message,
  // message: message,
  // method: function function1 () {
  //   console.log('Method')
  // }
  method () {
    console.log('Method')
  }
}

console.log(object5)
object5.method()
