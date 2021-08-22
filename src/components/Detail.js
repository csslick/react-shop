import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
// import { useEffect } from 'react';
import styled from 'styled-components'; // 오류시 4 또는 5 버전 사용
// CSS 모듈 타입 선언(해당 컴퍼넌트 전용 CSS)
import styles from './css/Detail.module.scss';

// 스타일드 변수는 함수 밖에 선언하세요
const StyledSection = styled.section`
  border: 1px solid rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
`;

export default function Detail({data}) {

  const history = useHistory();
  const { id } = useParams();

  // param과 제품 id가 일치하는 제품 정보를 가져온다.
  const newData = data.find(item => {
      return item.id == id;  
  })
 
  return (
    <StyledSection className={styles.container}>
      <h2 className="text-center">제품상세정보</h2>
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
