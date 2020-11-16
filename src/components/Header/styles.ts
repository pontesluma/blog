import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  background: #92ff96;
  padding: 20px 60px;

  display: flex;
  flex-direction: row;

  /* align-items: flex-end; */
  align-items: center;
  justify-content: space-between;
`;

export const BtnsContainer = styled.div``;

export const Btn = styled(Button)`
  && {
    font-size: 18px;
    margin-left: 5px;
    color: #334444;
  }
`;

export const Title = styled.div`
  font-size: 40px;

  display: flex;

  align-items: flex-start;

  svg {
    margin-right: 10px;
    margin-top: 5px;
    /* color: #26ff49; */
  }

  h1 {
    font-family: 'Nunito', sans-serif;
    /* font-weight: bold; */
    font-size: 40px;
  }
`;
