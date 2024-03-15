import React from 'react'
import "./Edit.css"
const Edit = () => {
  return (
    <div>
      <div className="container grid lg:grid-cols-2 justify-center align-center">

  <div className="product-image">

    <img src="https://cdn.pixabay.com/photo/2014/06/10/15/47/pizza-366111_640.jpg"  alt="" className="product-pic" />
   
  </div>

  <div className="product-details mt-6">
    <header>
      <h1 className="title">Nike Roshe Run</h1>
      <span className="colorCat">mint green</span>
      <div className="price">
        <span className="before">$150</span>
        <span className="current">$144.99</span>
      </div>
      <div className="rate">
        <a href="/" className="active">★</a>
        <a href="/" className="active">★</a>
        <a href="/" className="active">★</a>
        <a href="/">★</a>
        <a href="/">★</a>
      </div>
    </header>
    <article>
      <h5>Description</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </article>
    <div className="controls">
      <div className="color">
        <h5>color</h5>
        <ul>
          <li><a href="/" className="colors color-bdot1 active"></a></li>
          <li><a href="/" className="colors color-bdot2"></a></li>
          <li><a href="/" className="colors color-bdot3"></a></li>
          <li><a href="/" className="colors color-bdot4"></a></li>
          <li><a href="/" className="colors color-bdot5"></a></li>
        </ul>
      </div>
      <div className="size">
        <h5>size</h5>
        <a href="/" className="option">(UK 8)</a>
      </div>
      <div className="qty">
        <h5>qty</h5>
        <a href="/" className="option">(1)</a>
      </div>
    </div>
    <div className="footer">
      <button type="button">
        <img src="http://co0kie.github.io/codepen/nike-product-page/cart.png" alt="" />
        <span>add to cart</span>
      </button>
      <a href="/"><img src="http://co0kie.github.io/codepen/nike-product-page/share.png" alt="" /></a>
    </div>
  </div>

</div>

    </div>
  )
}

export default Edit
