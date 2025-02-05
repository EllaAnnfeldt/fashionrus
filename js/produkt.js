const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");
let productOverview = document.querySelector(".product-container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productOverview.innerHTML = `
    <div class="product-image ${data.discount ? "onSale" : ""} ${data.soldout ? "soldOut" : ""}">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" 
             alt="${data.productdisplayname}" />
      </div>

        <div class="product-info">
          <!-- Product Title and Price -->
          <h3 class="productTitle">${data.productdisplayname}</h3>
          <p class="productPrice">${data.discount ? `<span class="originalPrice">${data.price} DKK</span> <span class="discountPrice">${(data.price * (1 - data.discount / 100)).toFixed(2)} DKK</span>` : `${data.price} DKK`}</p>


            <div class="form-group">
              <select id="size" name="size">
                <option value="ss">SELECT SIZE</option>
                <option value="s">SMALL</option>
                <option value="m">MEDIUM</option>
                <option value="l">LARGE</option>
              </select>
            </div>

            <h4 class="greyed-list-title">PRODUCT DETAILS:</h4>
            <ul class="greyed-list">
              <li>Brandname: ${data.brandname}</li>
              <li>Productionyear: ${data.productionyear}</li>
              <li>Gender: ${data.gender}</li>
            </ul>

            <div class="add-to-cart-knap">
              <a href="product.html" class="add-to-cart">ADD TO CART</a>
            </div>
    `;
  });
