import React, { useCallback, useEffect, useState } from 'react';
import {
  AccessTime,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  LoopRounded,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import devToApi from '../../services/devToApi';

import {
  Container,
  Content,
  FirstArticleCard,
  ArticleCard,
  ArticleContent,
  ArticleInfos,
  Tags,
  Title,
  Description,
  PublishDate,
  Pagination,
  PaginationBtn,
  ArticleNotFound,
  LoadingContainer,
  Loading,
} from './styles';

interface IArticle {
  id: number;
  title: string;
  description: string;
  tags: string;
  cover_image: string;
  readable_publish_date: string;
  positive_reactions_count: number;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState(0);
  const [firstArticle, setFirstArticle] = useState<IArticle>();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const loadArticles = async () => {
      const resp = await devToApi.get(
        `/articles?username=pontesluma&per_page=8&page=${page}`,
      );

      setFirstArticle(resp.data.shift() || undefined);
      setArticles(resp.data || []);
      setLoading(false);
    };
    setLoading(true);
    loadArticles();
  }, [page]);

  const handleChangePage = useCallback(
    dir => {
      if (dir > 0) {
        setPage(page + 1);
      } else {
        setPage(page - 1);
      }
    },
    [page],
  );

  const handleArticle = useCallback(
    id => {
      history.push(`/article/${id}`);
    },
    [history],
  );

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

  if (articles.length === 0 && !firstArticle) {
    return (
      <Container>
        <ArticleNotFound>
          <h1>404</h1>
          <span>Nenhum artigo encontrado :(</span>
        </ArticleNotFound>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        {firstArticle && (
          <FirstArticleCard
            bgimage={firstArticle.cover_image}
            style={{
              gridColumn: '1 / 3',
            }}
            onClick={() => handleArticle(firstArticle.id)}
          >
            <ArticleContent style={{ height: '450px' }}>
              <ArticleInfos>
                <Tags>{firstArticle.tags}</Tags>
                <h1>{firstArticle.title}</h1>
                <span>{firstArticle.description}</span>
              </ArticleInfos>
              <PublishDate style={{ color: '#fff' }}>
                <AccessTime />
                {firstArticle.readable_publish_date}
              </PublishDate>
            </ArticleContent>
          </FirstArticleCard>
        )}
        {articles[0] &&
          articles.map(article => (
            <ArticleCard
              key={article.id}
              onClick={() => handleArticle(article.id)}
            >
              {article.cover_image ? (
                <img src={article.cover_image} alt="cover" />
              ) : (
                <div className="nullImage" />
              )}
              <ArticleContent>
                <ArticleInfos>
                  <Tags>{article.tags}</Tags>
                  <Title>{article.title}</Title>
                  <Description>{article.description}</Description>
                </ArticleInfos>
                <PublishDate>
                  <AccessTime />
                  {article.readable_publish_date}
                </PublishDate>
              </ArticleContent>
            </ArticleCard>
          ))}
      </Content>
      <Pagination>
        <PaginationBtn
          onClick={() => handleChangePage(-1)}
          disabled={page === 0}
        >
          <ArrowBackIosRounded />
        </PaginationBtn>
        <span>{page + 1}</span>
        <PaginationBtn
          onClick={() => handleChangePage(1)}
          disabled={articles.length < 7}
        >
          <ArrowForwardIosRounded />
        </PaginationBtn>
      </Pagination>
    </Container>
  );
};

export default Home;
