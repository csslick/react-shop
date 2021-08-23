import React from 'react'
import Item from './Item'
import axios from 'axios';


export default function Main({data}) {

  // fetch()는 JSON을 Objec로 반환해주지 않아서 axios 사용함

  return (
    <section id="product" className="container product">
      <div className="row">
        {
          data.map((item, idx) => {
            return <Item item={item} idx={idx} key={idx} />
          })
        }
      </div>
      <button 
        className="btn btn-primary mt-4"
        onClick={()=>{
          axios.get('https://raw.githubusercontent.com/csslick/react-shop/main/data2.json')
          .then(res=>{
            console.log(res.data)
          })  
          .catch(err=>{
            console.log(err);
          })
        }}>더보기</button>
  </section>
  )
}
