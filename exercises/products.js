let products = {
  names: 'basketball',
  price: 2095
}
products = products
const { names, price } = products

console.log(products['names'])

products['delivery time'] = '3 days'
products['price'] += 500
console.log(products['delivery time'])
console.log(products)

let products1 = {
  names: 'basketball',
  price: 2095
}
let products2 = {
  names: 'basketball',
  price: 2095
}
//create  two  object
const compareProducts = (products1, products2) => {
  if (!products1 || !products2) {
    return 'no  product, entered'
  }

  if (products1.price > products2.price) {
    return { products2 }
  }
}

const result = compareProducts(products, products1)

console.log(result)
