import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content:start;
  text-align: center;
  margin:2rem 7rem;
  div {
    margin:0 1rem;
    h5 {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    &:nth-last-child(-n+2) {
      p {
        font-size: 0.8rem;
        margin:0.3rem;
      }
    }
    &:last-child {
    margin-left: 20rem;
    svg {
      transition: 0.5s;
      margin:0 0.4rem;
      color:#ccc;
      &:hover {
        color:#fff;
      }
    }
    span {
      font-size: 1.2rem;
      font-weight: 100;
      color:#995869;
    }
  }
  }
`;