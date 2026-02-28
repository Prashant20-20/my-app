import React from "react";

const Products = [
    { image:"../images/about-img.jpg", name: "Product1", price:"1000", brand:"Top Brand"},
    { image:"../images/about-img.jpg", name: "Product2", price:"3000", brand:"Top Brand"},
    { image:"../images/about-img.jpg",name: "Product3", price:"2000", brand:"Top Brand"}
]

function Product({image, name, price, brand}){

    return (
       
        <div className="product-page">
            <div><img src={image} alt={name}/></div>
            <h2>{name}</h2>
            <p>{brand}</p>
            <p>₹{price}</p>
        </div>
         
    );
} 

function ProductPage() {
    return(
        <>
        <div className="main-page">
        <h1>Product List</h1>
         <div className="flex-box">
        {Products.map((item) => (
            <Product image={item.image} name={item.name} price={item.price} brand={item.brand}/> 
        ))}
         </div>
        </div>
        </>
    );
}

export default ProductPage;