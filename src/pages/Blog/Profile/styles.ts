import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  position: absolute;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;

  width: 54rem;

  position: relative;
  top: -88px;

  background: ${(props) => props.theme.background};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  @media only screen and (max-width: 1200px) {
  }
`;

export const ProfilePictureContainer = styled.div`
  @media only screen and (max-width: 1200px) {
  }

  img {
    width: 100%;
    border-radius: 0.5rem;

    width: 9.25rem;
    height: 9.25rem;
  }
`;

export const ProfileInfoContainer = styled.div`
  @media only screen and (max-width: 1200px) {
  }
`;

export const ProfileInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme.title};
  }

  div {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all ease 0.2s;
    border: 1px solid transparent;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  svg {
    color: ${(props) => props.theme.blue};
  }

  @media only screen and (max-width: 1200px) {
  }
`;

export const ProfileInfoDescription = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme.text};

  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1200px) {
  }
`;

export const ProfileInfoSocialMedias = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  @media only screen and (max-width: 1200px) {
  }
`;

export const ProfileInfoSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.subtitle};

  div {
    display: flex;
    color: ${(props) => props.theme.label};
  }

  @media only screen and (max-width: 1200px) {
  }
`;
