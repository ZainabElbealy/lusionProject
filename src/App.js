import React , {  useState }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Shop from './Component/Shop';
import NavBar from './Component/NavBar';
import Cart from './Component/Cart';
//ProductsSections
import s1 from './Photos/s1.jpg'
import s2 from './Photos/s2.jpg'
import s3 from './Photos/s3.jpg'
import s4 from './Photos/s4.jpg'
//BestSelling
import t1 from './Photos/t1.jpg'
import t2 from './Photos/t2.jpg'
import t3 from './Photos/t3.jpg'
import t4 from './Photos/t4.jpg'
import t5 from './Photos/t5.jpg'
import t6 from './Photos/t6.jpg'
//ShopProducts
import shopC1 from './Photos/shopC1.jpg'
import shopC2 from './Photos/shopC2.jpg'
import shopC3 from './Photos/shopC3.jpg'
import shopC4 from './Photos/shopC4.jpg'
import shopC5 from './Photos/shopC5.jpg'
import shopC6 from './Photos/shopC6.jpg'
import shopC7 from './Photos/shopC7.jpg'
import shopC8 from './Photos/shopC8.jpg'



export default function App (){
  
    let [ProductsSections]= useState([
      {id:0,imgName:s1 ,text:'Clothing', items:5},
      {id:1,imgName:s2,text:'BagBrand', items:20},
      {id:2,imgName:s3,text:'Accessories', items:6},
      {id:3,imgName:s4,text:'Shoes', items:8},
    ]);
    let [ShopProducts ,setShopProducts] =useState( [
      {id:0,imgName:shopC1 ,text : 'Hood',price : 210 ,count:0},
      {id:1,imgName:shopC2 ,text : 'Shirt',price : 200,count:0},
      {id:2,imgName:shopC3 ,text : 'Shirt',price : 250,count:0},
      {id:3,imgName:shopC4 ,text : 'Jeans',price : 320,count:0},
      {id:4,imgName:shopC5 ,text : 'Jeans',price : 350,count:0},
      {id:5,imgName:shopC6 ,text : 'Hood',price : 105,count:0},
      {id:6,imgName:shopC7 ,text : 'Jeans',price : 320,count:0},
      {id:7,imgName:shopC8 ,text : 'Jeans',price : 350,count:0},
      {id:8,imgName:shopC2 ,text : 'Shirt',price : 105,count:0},
  ]);
  let [BestSelling]=useState([
    {id:0,imgName:t1 ,text : 'Quilted Gilet With Hood',price : 150},
    {id:1,imgName:t2,text : 'Quilted Gilet With Hood' ,price : 110},
    {id:2,imgName:t3,text : 'Quilted Gilet With Hood' ,price : 200},
    {id:3,imgName:t4 ,text : 'Quilted Gilet With Hood' ,price : 230},
    {id:4,imgName:t5 ,text : 'Quilted Gilet With Hood' ,price : 345},
    {id:5,imgName:t6,text : 'Quilted Gilet With Hood' ,price : 350},
  ]);
 // let [ChooseProduct,setChoose]=useState([]);


  function addProduct(element){
    setShopProducts(ShopProducts.map((e)=>{
      if(element.id===e.id){
                 e.count++;
              }
              return e
    }))
  }

  function decrement (element){
    setShopProducts(ShopProducts.map((e)=>{
      if(element.id===e.id&& e.count>0){
                 e.count--;
              }
              return e
    }))
  }
  
  function myDelete(element){
    setShopProducts(ShopProducts.map((e)=>{
      if(element.id===e.id){
                 e.count=0;
              }
              return e
    }))
  }


  // function myPrice(element){
  //   let cal=0;
  //   element.map((e)=>{
      
  //    cal=cal+(e.price*e.count)

  //     return cal
  //   })
    
  // }
  
    return (
      <div className='bg-dark bg-opacity-10'>
       <NavBar choose={ShopProducts} />
       <Routes>
       
        <Route path='/' element={<Home sections={ProductsSections} selling={BestSelling}/>} />
        <Route path='/Shop' element={<Shop products={ShopProducts}  addProduct={addProduct}/>} />
        <Route path='/Cart' element={<Cart choose={ShopProducts} addProduct={addProduct} decrement={decrement} myDelete={myDelete} />} />
        
       </Routes>
      </div>
    )
}





