document.querySelector('.cart-icon').addEventListener('click', function() {
    document.querySelector('.cart-dropdown').style.display = 'block';
});

let cartCount = 0;

function addToCart() {
    cartCount += 1;
    document.querySelector('.cart-count').textContent = cartCount;
}

let itemCount = 0;

function addToCart() {
    itemCount++;
    document.querySelector('.cart-item-count').textContent = itemCount;
}


addToCart();
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger-menu");
        const navUL = document.querySelector("nav ul");

        hamburger.addEventListener("click", function() {
            navUL.classList.toggle("show");
        });
    });
</script>
