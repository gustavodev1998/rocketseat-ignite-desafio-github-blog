import * as Styles from "./styles";

import { useEffect, useState } from "react";
import {
  fetchGithubRepoIssueDetails,
  fetchGithubRepoIssues,
  IssueInfo,
} from "../../../lib/axios";

export interface IssuesProps {
  url: string;
}

export function Issues() {
  const [issues, setIssues] = useState<IssueInfo[]>([
    {
      title: "Teste",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto consectetur quis. Eos unde eligendi dolorum, adipisci quas pariatur animi in blanditiis? Magnam similique exercitationem molestiae hic cupiditate laborum vel?,",
      created_at: "Teste",
    },
  ]);

  useEffect(() => {
    fetchGithubRepoIssues(
      "Boas práticas",
      "gustavodev1998",
      "rocketseat-ignite-desafio-github-blog"
    )
      .then((issues) => {
        issues.map(async (issue: IssuesProps) => {
          const issueInfo = await fetchGithubRepoIssueDetails(issue.url);
          setIssues((prev) => [...prev, issueInfo]);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <Styles.IssuesContainer>
      <Styles.IssuesFormHeader>
        Publicações
        <span>{issues.length} publicações</span>
      </Styles.IssuesFormHeader>

      <Styles.IssuesFormContainer>
        <form action="">
          <input type="search" placeholder="Buscar conteúdo" />
        </form>
      </Styles.IssuesFormContainer>

      <Styles.IssuesCardsContainer>
        {issues.map((issue, index) => {
          return (
            <Styles.IssuesCardContainer key={index}>
              <Styles.IssuesCardHeader>
                <div>{issue?.title}</div>
                <span>{issue?.created_at}</span>
              </Styles.IssuesCardHeader>

              <Styles.IssuesCardDescription>
                {issue?.body}
              </Styles.IssuesCardDescription>
            </Styles.IssuesCardContainer>
          );
        })}
      </Styles.IssuesCardsContainer>
    </Styles.IssuesContainer>
  );
}
