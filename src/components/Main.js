import MainVisual from '../components/MainVisual';
import Item from './Item'

// fetch()는 JSON을 Objec로 반환해주지 않아서 axios 사용함
import axios from 'axios';

// data는 전체 데이터를 담은 객체
// addItem()는 새로운 아이템을 추가하는 함수
export default function Main({data, addItem}) {

  return (
    <>
      <MainVisual />
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
          // 로딩중 표시...

          axios.get('https://raw.githubusercontent.com/csslick/react-shop/main/data2.json')
          .then(res=>{
            // 로딩표시 제거
          
            addItem(res.data);  // 데이터 추가(상위 컴퍼넌트 함수 호출)
          })  
          .catch(err=>{
            console.log(err);
          })
        }}>더보기</button>
  </section>
    </>
  )
}
