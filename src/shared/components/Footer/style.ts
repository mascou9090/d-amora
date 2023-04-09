import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content:start;
  text-align: center;
  //margin:2rem 7rem;
  padding:2rem 7rem;
  background-color:#9c89c8;
  border-top: solid 1px #ccc;
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

export const Duvidas = styled.div`
  &:hover {
    p{
      color:#ccc;
    }
    svg {
      color:#ccc;
    }
  }
  a {
        text-decoration: none;
  }
  p {
    transition: 0.5s;
    color:#fff;
  }
  svg {
    color:#fff;
    transition: 0.5s;
    cursor: pointer;
  }

`;