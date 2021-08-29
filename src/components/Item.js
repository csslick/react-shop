/* eslint-disable */
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { StockContext } from '../App'

export default function Item({item, idx}) {

  const history = useHistory();
  const {stock} = useContext(StockContext);

  return (
    // 상세페이지 이동
      <div 
        className="col-md-4 item" 
        onClick={()=> history.push('./detail/'+idx)}
      >
        <img src={item.image} width="100%" />
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <p>{item.price.toLocaleString()}원</p>
        <p>재고: {stock[idx]}</p>
      </div>
  )
}
