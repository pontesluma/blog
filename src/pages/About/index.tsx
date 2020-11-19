import { LoopRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import devToApi from '../../services/devToApi';

import {
  Container,
  LoadingContainer,
  Loading,
  ProfileContent,
  ProfileImg,
  ProfileInfo,
} from './styles';

interface IUser {
  profile_image: string;
  name: string;
}

const About: React.FC = () => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      const resp = await devToApi.get(`/users/515239`);
      setUser(resp.data);
      setLoading(false);
    };
    setLoading(true);
    loadArticle();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <Loading>
          <LoopRounded />
        </Loading>
        <span>Carregando...</span>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ProfileContent>
        <ProfileImg src={user?.profile_image} alt={user?.name} />
        <ProfileInfo>
          <strong>{user?.name}</strong>
          <span>
            Desenvolvedora full stack, 23 anos, brasileira.
            <br />
            #WomaninTech
          </span>
        </ProfileInfo>
      </ProfileContent>
    </Container>
  );
};

export default About;
