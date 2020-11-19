import styled, { css } from 'styled-components';
import { Card, IconButton } from '@material-ui/core';

interface FirstArticleCardProps {
  bgImage: string;
}

export const Container = styled.div``;
export const Content = styled.div`
  margin: 30px 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const FirstArticleCard = styled(Card)<FirstArticleCardProps>`
  // word-wrap: break-word;
  && {
    cursor: pointer;
    color: #fff;

    ${props =>
      props.bgImage
        ? css`
            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${props.bgImage});
          `
        : css`
            background: #84ff89;
          `}

    height: 450px;

    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    transform: translateY(0px);

    transition: all 0.5s;
    -webkit-transition: all 0.5s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-weight: bold;
      font-size: 46px;

      margin-bottom: 30px;
    }

    span {
      font-size: 24px;
    }
  }
`;

export const ArticleCard = styled(Card)`
  && {
    cursor: pointer;

    color: #334444;

    height: 450px;

    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    transform: translateY(0px);

    transition: all 0.5s;
    -webkit-transition: all 0.5s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    img,
    div.nullImage {
      width: 100%;
      height: 200px;
      background: #84ff89;
      object-fit: cover;
    }
  }
`;

export const ArticleInfos = styled.div``;

export const ArticleContent = styled.div`
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Tags = styled.div`
  color: #84ff89;
  font-weight: bold;

  margin-bottom: 25px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const PublishDate = styled.div`
  display: flex;
  align-items: center;

  color: #999;

  svg {
    margin-right: 5px;
    font-size: 18px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin-bottom: 30px;

  span {
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const PaginationBtn = styled(IconButton)`
  width: 50px;
  height: 50px;
`;

export const ArticleNotFound = styled.div`
  color: #999;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  span {
    margin-top: 30px;
  }
`;

export const Loading = styled.div`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  animation: rotation 3s infinite linear;

  display: flex;
  justify-content: center;
  width: fit-content;
  transform-origin: center center;

  color: #84ff89;

  svg {
    font-size: 100px;
  }
`;
