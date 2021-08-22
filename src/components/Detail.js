import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
// import { useEffect } from 'react';

export default function Detail({data}) {

  const history = useHistory();
  const { id } = useParams();

  // param과 제품 id가 일치하는 제품 정보를 가져온다.
  const newData = data.find(item => {
      return item.id == id;  
  })
 
  return (
    <section id="detail" className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={newData.image} alt={id} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{newData.title}</h4>
          <p>{newData.content}</p>
          <p>{newData.price.toLocaleString()}</p>
          <button className="btn btn-danger">주문하기</button>
          <button 
            className="btn btn-success ml-3" 
            onClick={ () => history.goBack() }
          >뒤로하기</button>
        </div>
      </div>
    </section>
  )
}
