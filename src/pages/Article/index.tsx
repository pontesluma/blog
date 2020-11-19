/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoopRounded } from '@material-ui/icons';
import devToApi from '../../services/devToApi';

import {
  Container,
  Content,
  ThumbNail,
  Title,
  Body,
  Tag,
  TagContainer,
  Author,
  Loading,
  LoadingContainer,
} from './styles';

interface IArticle {
  id: number;
  title: string;
  description: string;
  tags: string[];
  body_html: string;
  cover_image: string;
  readable_publish_date: string;
  positive_reactions_count: number;
  user: {
    name: string;
  };
}

interface IParams {
  id: string;
}

const Article: React.FC = () => {
  const [article, setArticle] = useState<IArticle | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const params = useParams<IParams>();

  useEffect(() => {
    const loadArticle = async () => {
      const resp = await devToApi.get(`/articles/${params.id}`);
      setArticle(resp.data);
      setLoading(false);
    };
    setLoading(true);
    loadArticle();
  }, [params.id]);

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

  if (!article) {
    return (
      <Container>
        <h1>Artigo não encontrado</h1>
      </Container>
    );
  }
  return (
    <Container>
      {article.cover_image && <ThumbNail bgImage={article.cover_image} />}
      <Content>
        <Title>{article.title}</Title>

        <Body dangerouslySetInnerHTML={{ __html: article.body_html }} />
        <Author>
          {`${article.user.name}, ${article.readable_publish_date}.`}
        </Author>
        <TagContainer>
          {article.tags.map(tag => (
            <Tag label={tag} key={tag} />
          ))}
        </TagContainer>
      </Content>
    </Container>
  );
};

export default Article;
