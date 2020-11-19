import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Container, ContactLink } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ContactLink href="https://github.com/pontesluma" target="_blank">
        <AiFillGithub size={30} />
        Github
      </ContactLink>
      <ContactLink
        href="https://www.linkedin.com/in/pontesluma/"
        target="_blank"
      >
        <AiFillLinkedin size={30} />
        LinkedIn
      </ContactLink>
    </Container>
  );
};

export default Header;
