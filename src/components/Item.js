/* eslint-disable */
import React from 'react'
import { useHistory } from 'react-router';

export default function Item({item, idx}) {

  const history = useHistory();

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
    </div>
  )
}
