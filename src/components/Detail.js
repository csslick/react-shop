import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function Detail({data}) {

  const history = useHistory();
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={data[id].image} alt={id} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{data[id].title}</h4>
          <p>{data[id].content}</p>
          <p>{data[id].price.toLocaleString()}</p>
          <button className="btn btn-danger">주문하기</button>
          <button 
            className="btn btn-success ml-3" 
            onClick={ () => history.goBack() }
          >뒤로하기</button>
        </div>
      </div>
    </div>
  )
}
