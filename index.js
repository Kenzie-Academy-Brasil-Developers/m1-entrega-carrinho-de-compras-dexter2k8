const productsCart = [
    {
        name: "Uva Crimson",
        price: 44.99
    },
    {
        name: "Vinho Canção",
        price: 17.98
    },
    {
        name: "Água de coco",
        price: 8.99
    },
    {
        name: "Mamão",
        price: 9.98
    },
    {
        name: "Água tônica",
        price: 17.98
    }
]

function products() {
    let main = document.createElement('main')
    let logo = document.createElement('h1')
    let productsList = document.createElement('ul')
    let title = document.createElement('li')
    let titleSpan1 = document.createElement('span')
    let titleSpan2 = document.createElement('span')
    let totalSpan1 = document.createElement('span')
    let totalSpan2 = document.createElement('span')
    let total = document.createElement('li')
    let ButtonEnd = document.createElement('button')
    let soma = 0

    logo.innerText = 'Virtual Market'
    ButtonEnd.innerText = 'Finalizar compra'
    titleSpan1.innerText = 'Item'
    titleSpan2.innerText = 'Valor'

    title.classList.add('itemTitle')

    main.appendChild(logo)
    productsList.appendChild(title)
    title.appendChild(titleSpan1)
    title.appendChild(titleSpan2)

    main.appendChild(productsList)

    for (let i in productsCart) {
        let productsDetails = document.createElement('li')
        let productsSpan1 = document.createElement('span')
        let productsSpan2 = document.createElement('span')
        
        productsSpan1.innerText = productsCart[i].name
        productsSpan2.innerText = `${productsCart[i].price}`.replace('.',',')
        soma += productsCart[i].price

        productsDetails.appendChild(productsSpan1)
        productsDetails.appendChild(productsSpan2)
        productsList.appendChild(productsDetails);
    }

    totalSpan1.innerText = 'total'
    totalSpan2.innerText = `${soma}`.replace('.',',')
    total.classList.add('totalTitle')
    
    total.appendChild(totalSpan1)
    total.appendChild(totalSpan2)
    productsList.appendChild(total)
    main.appendChild(ButtonEnd)

    document.querySelector('body').appendChild(main)
}

products()