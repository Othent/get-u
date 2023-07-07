import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 4rem 6rem 5rem;

  @media (min-width: 550px) {
    background-position: -10%;
  }

  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: auto auto;
    padding: 2rem 2rem;
    gap: 1rem;
    justify-content: unset;
  }

  ul {
    padding: 0;
    margin: 0;

    p {
      font-size: 1rem;
      line-height: 150%;

      margin: 0 0 1rem;
    }

    li {
      cursor: pointer;
      list-style: none;
      text-decoration: none;

      font-size: 1rem;
      line-height: 150%;

      color: #7d8795;
      margin-bottom: 1rem;

      cursor: auto;
    }
  }

  .site-a-warp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .social-a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  

`;

export const CLabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-top: .4rem;

  .othent-logo {
    height: 50px;
  }

  .inc {
    font-size: 1rem;
    color: #7d8795;

    @media (min-width: 550px) {
      margin-bottom: 0;
    }
  }

  div {
    gap: 1rem;
    display: flex;
    align-items: center;

    .clabs-logo {
      width: 50px;
      height: 50px;
    }

    p {
      font-size: 0.875rem;
      line-height: 150%;
      color: #7d8795;
      margin: 0;

      span {
        color: #6f3efc;
        display: block;
      }
    }
  }

  &:first-child {
    display: flex;
  }

  &:last-child {
    display: none;
  }

  @media screen and (max-width: 720px) {
    &:first-child {
      display: none;
    }

    &:last-child {
      display: flex;
    }
  }
`;

export const SocialChannels = styled.ul`
  li {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }

  @media (min-width: 550px) {
    li {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
