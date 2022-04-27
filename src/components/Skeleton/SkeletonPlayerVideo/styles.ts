import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LeftSide = styled.aside`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
`;
export const CardContentVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PlayerVideo = styled.div`
  width: 80rem;
  height: 40rem;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const TitleVideo = styled.div`
  width: 80rem;
  height: 4.5rem;
  margin-top: 0.5rem;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const CommentField = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80rem;
`;
export const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
`;
export const NextVideoCard = styled.div`
  width: 45rem;
  height: 15rem;
  margin-left: 2.5rem;
  margin-bottom: 1rem;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const User = styled.div`
  width: 5rem;
  height: 5rem;
  margin-top: 2rem;
  border-radius: 50%;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const InputComment = styled.div`
  width: 70rem;
  height: 5rem;
  margin-top: 2rem;
  border-radius: 2.5rem;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const CommentContent = styled.div`
  display: flex;
  align-items: center;
  width: 40rem;
  margin-top: 2rem;
  justify-content: space-between;
  padding-left: 1.5rem;
`;
export const CommentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
export const Comment = styled.div`
  width: 31rem;
  height: 2rem;
  margin-top: 1rem;
  border-radius: 2.5rem;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
