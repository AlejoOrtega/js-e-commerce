import { useState } from 'react';
import logo from './img/logo.svg';
import cart from './img/icon-cart.svg';
import profilePicture from './img/image-avatar.png';

import product1 from './img/image-product-1.jpg';
import product2 from './img/image-product-2.jpg';
import product3 from './img/image-product-3.jpg';
import product4 from './img/image-product-4.jpg';

import product1Thumbnail from './img/image-product-1-thumbnail.jpg';
import product2Thumbnail from './img/image-product-2-thumbnail.jpg';
import product3Thumbnail from './img/image-product-3-thumbnail.jpg';
import product4Thumbnail from './img/image-product-4-thumbnail.jpg';

import plus from './img/icon-plus.svg';
import minus from './img/icon-minus.svg';


function App() {
  const images = [product1, product2, product3, product4]
  const imagesThumbnail = [product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail]
  const [indexImage, setIndex] = useState(0)
  const [quantity, setQuantity] = useState(0)


  const onChangeImage = (index) => {
    setIndex(index);
  }

  const onChangeQuantity = (operation) => {
    const newQuantity = quantity + operation;
    if(newQuantity < 0){ newQuantity = 0}
    setQuantity(newQuantity);
  }

  return (
    <div className="app">
      <div className='container'>
        <header>
          <div>
            <img src={logo} alt='logo'/>
            <nav>
              <ul className="menu">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul> 
            </nav>
          </div>
          <div>
            <img src={cart} alt='cart'/>
            <img className='profile-picture' src={profilePicture} alt='profile-picture'/>
          </div>
        </header>
        <main>
          <div className='img-display'>
            <img src={images[indexImage]} alt='main-image'/>
            <div className='img-options'>
              {imagesThumbnail.map((img, index) =>{
                if(indexImage == index){
                  return <img key={index} className='img-options-selected' src={img}/>
                }
                return <img key={index} src={img} onClick={()=>onChangeImage(index)}/>
              })
              }
            </div>
          </div>
          <div className='product-information'>
            <h3>Sneaker Company</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='promo-section'><span className='promo-price'>$125.00</span><span className='promo-discount'>50%</span></div>
            <div className='price'>$250.00</div>
            <div className='buy-section'>
              <div className='buy-adder'>
                <img src={minus} alt='minus' onClick={()=>onChangeQuantity(-1)}/>
                <span>{quantity}</span>
                <img src={plus} alt='add' onClick={()=>onChangeQuantity(1)}/>
              </div>
              <div className='add-cart'>
                <img src={cart} alt='cart'/>
                <span>Add to cart</span>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
