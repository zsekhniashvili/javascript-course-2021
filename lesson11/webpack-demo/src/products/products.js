import "./products.scss"
import ProductItem from "./ProductItem";
const div = document.createElement('div')
div.className = 'product-item';
div.innerHTML = 'Product Item';
document.body.appendChild(div);


const p = new ProductItem("Iphone");
console.log(p.getPrice());