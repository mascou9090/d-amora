import styled from 'styled-components';
export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 2rem 3rem;
  padding: 0 7rem;
  border-bottom: 1px solid #fff0ff;
  ul {
    display:flex;
    li {
      list-style: none;
      cursor:pointer;
    }
    a {
      text-decoration: none;
      margin: 1rem;
      color: #fff;
      transition: 0.5s;
      &:hover {
        color: #bbb;
      }
    }
  }
  @media (max-width: 500px) {
    padding:auto;
    margin:1rem 0.2rem;
    flex-direction: column;
    h1 {
      margin:0 auto;
    }
    ul {
      margin:0 auto;
    }
  }
  
`;