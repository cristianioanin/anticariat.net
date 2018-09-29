document.addEventListener('DOMContentLoaded', checkCartState);

function checkCartState() {
  const articlesElement = document.querySelector('.shopping-cart__preview--content--articles');
  const articlesNumber = Number(document.querySelector('#cart_articles').innerText);

  const html = `<span id="cart_articles">1</span> produs`;

  if (articlesNumber === 1) {
    articlesElement.innerHTML = html;
  }
}