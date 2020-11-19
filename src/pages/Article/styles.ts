import styled, { css } from 'styled-components';
import { Chip } from '@material-ui/core';

interface ThumbNailProps {
  bgImage: string;
}

export const Container = styled.div``;
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

export const Content = styled.div`
  margin: 20px 150px;
`;

export const ThumbNail = styled.div<ThumbNailProps>`
  // word-wrap: break-word;
  && {
    ${props => css`
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${props.bgImage}) no-repeat center;
      background-size: cover;
    `}
    height:400px;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  font-size: 40px;
  margin-bottom: 50px;
  text-align: center;
`;

export const Body = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 50px;

  p,
  strong,
  h1,
  h2,
  h3,
  ul {
    margin-bottom: 30px;
    text-align: justify;
    text-justify: inter-word;
  }

  li {
    margin-bottom: 10px;
  }

  p {
    width: 100%;
    a.article-body-image-wrapper {
      display: flex;
      flex: 1;
      justify-content: center;
      cursor: default;
    }
  }

  img {
    max-height: 400px;
    cursor: pointer;
    margin: 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const Tag = styled(Chip)`
  && {
    background-color: #84ff89;
    margin-right: 10px;
  }
`;

export const TagContainer = styled.div`
  && {
    margin-bottom: 50px;
  }
`;

export const Author = styled.div`
  font-size: 32px;
  color: #aaa;
  margin-bottom: 30px;
  margin-left: 10px;
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
