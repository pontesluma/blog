import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 700px;
`;

export const ProfileInfo = styled.div`
  margin-left: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  strong {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 75px;

  object-fit: cover;
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
