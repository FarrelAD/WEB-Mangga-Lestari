const cartButtons = document.querySelectorAll('.cart-button')
const floatBoxTotalOrder = document.getElementsByClassName('total-order-box')
const productCatalog = document.getElementById('products-catalog')


cartButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        console.log('aku diklik!')
        if (floatBoxTotalOrder[index].style.display == 'none') {
            console.log('aku ada!')
            floatBoxTotalOrder[index].style.display = 'block'
        } else {
            console.log('aku hilang!')
            floatBoxTotalOrder[index].style.display = 'none'
        }
    })
})