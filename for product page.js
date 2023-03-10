const body = document.querySelector('body')
const productsContainer = document.querySelector('.products-container')
const eachProductContainers = document.querySelectorAll('.each-product-container');
const productImages = document.querySelectorAll('.img')
const aside = document.querySelector('.filters')
const productNames = document.querySelectorAll('.product-name')
const productPrices = document.querySelectorAll('.product-price')
const expandItem = document.querySelectorAll('.product-view-btn')
function filter() {
    const notThis = products.filter(x => x.parentDiv !== this.parentDiv)
    return notThis
}
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
        category: 'caressa',

    },
    {
        img: 'https://images2.imgbox.com/b0/e8/9RR6A859_o.jpeg',
        name: 'Wooden Table',
        price: '$45.99',
        category: 'caressa'
    },
    {
        img: 'https://images2.imgbox.com/26/1f/SRvvNeyh_o.jpeg',
        name: 'Dining Table',
        price: '$6.99',
        category: 'caressa'
    },
    {
        img: "https://images2.imgbox.com/3f/a7/LUkaeKXQ_o.jpeg",
        name: 'Sofa Set',
        price: '$69.99',
        category: 'liddy'
    },
    {
        img: 'https://images2.imgbox.com/f6/9b/oU89hRrp_o.jpeg',
        name: 'Modern Bookshelf',
        price: '$8.99',
        category: 'marcos'
    },
    {
        img: 'https://images2.imgbox.com/ea/5d/L23N0ZhH_o.jpeg',
        name: 'Emperor Bed',
        price: '$21.99',
        category: 'liddy'

    },
    {
        img: 'https://images2.imgbox.com/9e/74/Lg3Ukpvo_o.jpeg',
        name: 'Utopia Sofa',
        price: "$39.95",
        category: 'marcos'
    },
    {
        img: 'https://images2.imgbox.com/60/63/tkwXJAHY_o.jpeg',
        name: 'Entertainment Center',
        price: '$29.98',
        category: 'liddy'
    },
    {
        img: 'https://images2.imgbox.com/05/35/dYOcfc1x_o.jpeg',
        name: 'Albany Sectional',
        price: '$10.99',
        category: 'ikea'
    },
    {
        img: 'https://images2.imgbox.com/81/85/PWzn2azi_o.jpeg',
        name: 'Leather Sofa',
        price: '$9.99',
        category: 'liddy'
    }
]
for (let i = 0; i < products.length; i++) {
    productImages[i].style.backgroundImage = `url(${products[i].img})`
    productNames[i].innerText = products[i].name
    productPrices[i].innerText = products[i].price
    products[i]['parentDiv'] = eachProductContainers[i]
    products[i]['expandBtn'] = expandItem[i]
    products[i]['filter'] = filter
}
const searchInp = document.querySelector('.search-inp')
const all = document.querySelector('.all-btn')
const ikea = document.querySelector('.ikea-btn')
const marcos = document.querySelector('.marcos-btn')
const caressa = document.querySelector('.caressa-btn')
const liddy = document.querySelector('.liddy-btn')
function generalFilter(type) {
    return function () {
        for (let each of products) {
            each.parentDiv.classList.replace('expanded-each-container', 'each-product-container')
        }
        for (let i = 0; i < rightContainer.length; i++) {

            rightContainer[i].classList.replace('name-price-container-expanded', 'name-price-container')
            productName[i].classList.replace('product-name-expanded', 'product-name')
            productPrice[i].classList.replace('product-price-expanded', 'product-price')
            expandItem[i].style.display = 'inline'
        }

        aside.classList.replace('aside-after-expanded', 'filters')
        productsContainer.classList.replace('expanded-view-products-container', 'products-container')
        productsContainer.classList.replace('products-container', 'products-container-after')
        for (let each of eachProductContainers) {
            each.style.display = 'flex'
        }
        const notSpecific = products.filter(each => each.category !== type)
        for (let each of notSpecific) {
            each.parentDiv.style.display = 'none'
        }
    }
}
all.addEventListener('click', function () {
    for (let each of eachProductContainers) {
        each.style.display = 'flex'
    }
    for (let each of products) {
        each.parentDiv.classList.replace('expanded-each-container', 'each-product-container')
    }
    for (let i = 0; i < rightContainer.length; i++) {
        rightContainer[i].classList.replace('name-price-container-expanded', 'name-price-container')
        productName[i].classList.replace('product-name-expanded', 'product-name')
        productPrice[i].classList.replace('product-price-expanded', 'product-price')

        expandItem[i].style.display = 'inline'
    }

    aside.classList.replace('aside-after-expanded', 'filters')
    productsContainer.classList.replace('products-container-after', 'products-container')
    productsContainer.classList.replace('expanded-view-products-container', 'products-container')
})
ikea.addEventListener('click', generalFilter('ikea'))

marcos.addEventListener('click', generalFilter('marcos'))

caressa.addEventListener('click', generalFilter('caressa'))

liddy.addEventListener('click', generalFilter('liddy'))
let errorCounter = 0
const error = document.createElement('p')
error.innerText = 'Sorry, No Products Matched Your Search'
error.style.color = '#1d3557'
error.style.fontSize = '25px'
error.style.alignSelf = 'center'
searchInp.addEventListener('input', function () {
    errorCounter = 0
    productsContainer.classList.replace('products-container', 'products-container-after')
    for (let product of products) {
        if (!product.name.toLowerCase().startsWith(this.value) && this.value !== '') {
            product.parentDiv.style.display = 'none'

        } else if (this.value === '') {
            product.parentDiv.style = 'flex'

        }
        if (products.every(x => x.parentDiv.style.display === 'none') && errorCounter < 1) {
            errorCounter++
            productsContainer.append(error)
            setTimeout(() => {
                error.remove()
            }, 1000)
        }

    }
})
const priceRange = document.querySelector('#price-range')
const maximumPrice = document.querySelector('.maximum-price')
priceRange.addEventListener('input', function () {

    maximumPrice.innerText = `Till $${this.value}`
    for (let product of products) {
        if (!(parseInt(product.price.slice(1)) < parseInt(this.value))) {
            product.parentDiv.style.display = 'none'
            productsContainer.classList.replace('products-container', 'products-container-after')
        } else {
            product.parentDiv.style.display = 'flex'
        }
    }
})

function testing() {
    return products.parentDiv.style.display = 'none'
}

let description = document.createElement('p')
description.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi recusandae rerum expedita harum rem architecto quis aliquid ab maxime. Placeat ut deleniti necessitatibus adipisci sit saepe nobis aperiam architecto!
            Quos voluptatibus ab reprehenderit, impedit exercitationem.`
description.classList.add('descr')

const rightContainer = document.querySelectorAll('.name-price-container')
const productName = document.querySelectorAll('.product-name')
const productPrice = document.querySelectorAll('.product-price')
for (let i = 0; i < products.length; i++) {
    products[i].expandBtn.addEventListener('click', function () {
        for (let each of products) {
            each.parentDiv.style.display = 'none'
        }
        products[i].parentDiv.style.display = 'flex'
        productsContainer.classList.replace('products-container', 'expanded-view-products-container')
        products[i].parentDiv.classList.replace('each-product-container', 'expanded-each-container')
        aside.classList.replace('filters', 'aside-after-expanded')
        for (let i = 0; i < rightContainer.length; i++) {
            rightContainer[i].classList.replace('name-price-container', 'name-price-container-expanded')
            productName[i].classList.replace('product-name', 'product-name-expanded')
            productPrice[i].classList.replace('product-price', 'product-price-expanded')
            expandItem[i].style.display = 'none'
            description = document.createElement('p')
            description.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi recusandae rerum expedita harum rem architecto quis aliquid ab maxime. Placeat ut deleniti necessitatibus adipisci sit saepe nobis aperiam architecto!
            Quos voluptatibus ab reprehenderit, impedit exercitationem.`
            description.classList.add('descr')
            rightContainer[i].append(description)
        }


    })

}