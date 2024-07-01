const cartButtons = document.querySelectorAll('.cart-button')
const floatBoxTotalOrder = document.getElementsByClassName('total-order-box')
const productCatalog = document.getElementById('products-catalog')

let cartElementClicked = ''
document.addEventListener('click', (event)=> {
    let isClickCartButton = false
    cartButtons.forEach(function(element, index) {
        if (element.contains(event.target) || floatBoxTotalOrder[index].contains(event.target)) {
            isClickCartButton = true

            if (cartElementClicked != '') {
                cartElementClicked.style.display = 'none'
            }

            cartElementClicked = floatBoxTotalOrder[index]
            cartElementClicked.style.display = 'block'
        }
    });

    if (!isClickCartButton) {
        if (cartElementClicked != '') {
            cartElementClicked.style.display = 'none'
            cartElementClicked = ''
        }
    }
})