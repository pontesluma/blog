import styled from 'styled-components';

export const Container = styled.div`
  background: #92ff96;
  height: 200px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContactLink = styled.a`
  color: #334444;
  font-size: 24px;
  text-decoration: none;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  transition: color 0.3s;

  :hover {
    color: #223333;
  }
`;
