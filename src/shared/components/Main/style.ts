import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:0 auto;
  width:80vw;
  h2 {
    text-align: center;
    margin:5rem 0 ;
  }
`;

export const Carrossel = styled.div`
  height: 20rem;
  width: 100%;
  border: 1px solid #a55c;
`;

export const Modelos = styled.div`
  display:flex;
  margin:5rem 0;
  div {
    height: 20rem;
    width: 80%;
    border:1px solid #a55c;
    margin:auto;
  }
`;

export const Ultma = styled.div`
  text-align: center;
  margin:5rem 0;
  p {
    font-size: 0.9rem;
  }
  h3 {
    margin-bottom: 1rem;;
  }
  
  
`;