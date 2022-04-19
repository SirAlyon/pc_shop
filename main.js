
/* Strutture dati avanzate */
/* const products = [
    {
        name: '',
        color: '',
        price: '',
        image: '',
        description: '',
    },
    {
        name: '',
        color: '',
        price: '',
        image: '',
        description: '',
    },
    {
        name: '',
        color: '',
        price: '',
        image: '',
        description: '',
    }
]
 */
/* Class Declaration (ES6) - not hoisted
- class keyword
- { // code here}
 */
/* class NomeClasse{

}
 */
/* Class Expression - not hoisted 
*/

/* const NomeClasse = {

} */

class Product{
    constructor(name, description, price, category, image, likes){
        this.name = name
        this.description = description
        this.price = price
        this.category = category
        this.image = image
        this.likes = likes
    }

    increaseLikes (){
        return this.likes += 1
    }
}

const mouse = new Product('Anker Vertical Mouse', 'compy vertical mouse', 40.99, '', 'black', 'pc accessories', 0)

const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg', 25),
    new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg', 2),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg', 14),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg', 1),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp', 0),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp', 78),
]

console.log(products);


function generateProduct(product) {
    /* product.increaseLikes()
    console.log(product); */
    return `
    <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product_details mt-2">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>

                </div>
                <div class="price">
                    ${product.price}
                </div>
                <div class="like" data-product-likes="${product.likes}">
                    <i class="fa-solid fa-heart"></i>
                    <span class="like-counter d_none">${product.likes +1}</span>
                </div>
                <button class="btn btn-primary buy-now" data-product-name="${product.name}" data-product-price="${product.price}">Buy Now </button>
            </div>`
    
}

function generateProductsCard(productsArray, dom_element) {
    productsArray.forEach(product => {
        const markup = generateProduct(product)
        dom_element.insertAdjacentHTML('beforeend', markup)
    });
}

const productsElement = document.querySelector('.products')
generateProductsCard(products, productsElement)

const cart = []
document.querySelectorAll('.buy-now').forEach(element => {
    element.addEventListener('click', function(){
        console.log(this);
        const name = this.getAttribute ('data-product-name')
        const price = Number(this.getAttribute ('data-product-price'))
        console.log(name, price);

        const purchased_product = {name, price}
        console.log(purchased_product);
        cart.push(purchased_product)
        console.log(cart);

        //show cart items inside the cart dom element
        document.querySelector('.cart').insertAdjacentHTML
        ('beforeend', `<li> ${purchased_product.name} $${purchased_product.price}</li>`)

        //show cart total (loop over the cart items)
        let sum = 0
        cart.forEach(element => {
            sum += element.price
        })
        console.log(sum);
        //sum alla prices

        document.querySelector('.total').innerHTML = `Total: $${sum.toFixed(2)}`

    })
})


document.querySelectorAll('.like').forEach(element =>{
    element.addEventListener('click', function(){
        console.log(this)
        const likeElement = element.querySelector('.like-counter')
        console.log(likeElement);
        likeElement.classList.remove('d_none')

        
    })


})