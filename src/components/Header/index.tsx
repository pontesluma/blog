import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineLightBulb } from 'react-icons/hi';

import { Container, BtnsContainer, Btn, Title } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const pushTo = useCallback(
    (event, link) => {
      event.preventDefault();
      history.push(link);
    },
    [history],
  );
  return (
    <Container>
      <Title>
        <HiOutlineLightBulb />
        <h1>LUMA</h1>
      </Title>
      <BtnsContainer>
        <Btn onClick={event => pushTo(event, '/')}>Home</Btn>
        <Btn onClick={event => pushTo(event, '/about')}>About</Btn>
      </BtnsContainer>
    </Container>
  );
};

export default Header;
