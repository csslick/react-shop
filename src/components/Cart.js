import React from 'react'
import { connect } from 'react-redux'

function Cart({state, dispatch}) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
            {
              state.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.quan}</td>
                    <td>
                      <button 
                        onClick={
                          ()=>{
                            dispatch({type: 'ADD', id: i})
                          }
                        }
                        className="btn btn-outline-secondary">+</button>
                      <button 
                        onClick={
                          ()=>{
                            dispatch({type: 'DEC', id: i})
                          }
                        }
                        className="btn btn-outline-secondary">-</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      
      <div className="alert alert-danger" style={{textAlign: 'center'}}>
        <p style={{margin: 0}}>이벤트 기간동안 50% 할인합니다.</p>
        <button className="btn btn-primary mt-2">닫기</button>
      </div>
    </>
  )
}

function stateToProps(store) {
  console.log(store)
  return {
    state: store
  }
}

export default connect(stateToProps)(Cart)