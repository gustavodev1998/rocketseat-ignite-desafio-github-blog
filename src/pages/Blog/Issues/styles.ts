import styled from "styled-components";

export const IssuesContainer = styled.div`
  position: relative;
  top: calc(218px);
`;

export const IssuesFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 160%;

  color: ${(props) => props.theme.subtitle};

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;

    color: ${(props) => props.theme.span};
  }
`;

export const IssuesFormContainer = styled.div`
  margin-top: 1rem;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem 1rem;

    width: 100%;

    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.375rem;

    color: ${(props) => props.theme.text};

    ::placeholder {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: ${(props) => props.theme.label};
    }

    :focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const IssuesCardsContainer = styled.div`
  margin: 2.75rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const IssuesCardContainer = styled.div`
  background: ${(props) => props.theme.post};
  border-radius: 0.625rem;

  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  overflow: hidden;

  transition: all ease 0.2s;
  border: 3px solid transparent;

  :hover {
    border: 3px solid ${(props) => props.theme.label};
  }
`;

export const IssuesCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  div {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;

    color: ${(props) => props.theme.title};
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;

    color: ${(props) => props.theme.span};
  }
`;

export const IssuesCardDescription = styled.div`
  margin-top: 1.25rem;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme.text};
`;
