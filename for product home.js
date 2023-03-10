const products = [
    {
        img: 'https://images2.imgbox.com/89/59/6An8aqJL_o.jpeg',
        name: 'High-Back Bench',
        price: '$9.99',
        category: 'ikea'
    },
    {
        img: 'https://images2.imgbox.com/7a/63/MSXCAbxy_o.jpeg',
        name: 'Albany Table',
        price: '$79.99',
        category: 'marcos'
    },
    {
        img: 'https://images2.imgbox.com/09/58/9oyIxnvq_o.jpeg',
        name: 'Accent Chair',
        price: '$25.99',
        category: 'caressa'
    }
]

const img = document.querySelectorAll('.img')
const productTitle = document.querySelectorAll('.product-name')
const price = document.querySelectorAll('.product-price')

for (let i = 0; i < products.length; i++) {
    img[i].style.backgroundImage = `url(${products[i].img})`
    productTitle[i].innerText = products[i].name
    price[i].innerText = products[i].price
}