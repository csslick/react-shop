import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'; // 오류시 4 또는 5 버전 사용
// CSS 모듈 타입 선언(해당 컴퍼넌트 전용 CSS)
import styles from './css/Detail.module.scss';

// 스타일드 변수는 함수 밖에 선언하세요
const StyledSection = styled.section`
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function Detail({data}) {

  const history = useHistory();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(true);

  // param과 제품 id가 일치하는 제품 정보를 가져온다.
  const newData = data.find(item => {
      return item.id == id;  
  })

  useEffect(() => {

    console.log('Detail mounted');
    setTimeout(function(){
      setShowAlert(false);
    }, 2000);

    // unmount 할 때 호출되는 코드
    return () => {
      console.log('Detail unmounted');
    }

  }, [])
  
  return (
    <StyledSection className={styles.container}>
      <h2 className="text-center">제품상세정보</h2>
      {
        showAlert && 
        <p className={styles.alert}>신제품이 입고되었습니다.</p>
      }
      <div className="row">
        <div className="col-md-6">
          <img src={newData.image} alt={id} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{newData.title}</h4>
          <p className={styles.content}>{newData.content}</p>
          <p className={styles.price}>{newData.price.toLocaleString()}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button 
            className="btn btn-success ml-3" 
            onClick={ () => history.goBack() }
          >돌아가기</button>
        </div>
      </div>
    </StyledSection>
  )
}
