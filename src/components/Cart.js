import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export default function Cart(props) {

  let state = useSelector(state => state);
  let isAlert = state.reducer2;
  console.log(isAlert)

  const dispatch = useDispatch();

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
              state.reducer.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.quan}</td>
                    <td>
                      <button 
                        onClick={
                          ()=>{
                            dispatch({type: 'ADD', id: data.id})
                          }
                        }
                        className="btn btn-outline-secondary">+</button>
                      <button 
                        onClick={
                          ()=>{
                            dispatch({type: 'DEC', id: data.id})
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
      
      {
        isAlert === true ?
          <div className="alert alert-danger" style={{textAlign: 'center'}}>
            <p style={{margin: 0}}>이벤트 기간동안 50% 할인합니다.</p>
            <button 
              onClick={ 
                () => dispatch({type: 'CLOSE'})
              }
              className="btn btn-primary mt-2">닫기</button>
          </div>
          : null
      }
    </>
  )
}

// function stateToProps(store) {
//   console.log(store)
//   return {
//     state: store.reducer,
//     isAlert: store.reducer2
//   }
// }

// export default connect(stateToProps)(Cart)
