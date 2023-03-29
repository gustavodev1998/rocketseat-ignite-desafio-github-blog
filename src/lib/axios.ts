import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export const githubAPI = axios.create({
  baseURL: "https://api.github.com",
});

export interface profileInfo {
  login: string;
  url: string;
  imageUrl: string;
  name: string;
  bio: string;
  location: string;
  followers: number;
}

export interface IssueInfo {
  title: string;
  body: string;
  created_at: string;
}

export async function fetchGithubProfileInfo(username: string) {
  const response = await githubAPI.get(`/users/${username}`);

  const data: profileInfo = {
    login: response.data.login,
    url: response.data.html_url,
    imageUrl: response.data.avatar_url,
    name: response.data.name,
    bio: response.data.bio,
    location: response.data.location,
    followers: response.data.followers,
  };

  return data;
}

export async function fetchGithubRepoIssues(
  query: string,
  username: string,
  repo: string
) {
  const response = await githubAPI.get(
    `/search/issues?q=${query}%20repo:${username}/${repo}`
  );

  return response.data.items;
}

export async function fetchGithubRepoIssueDetails(url: string) {
  let newResponse: any = await githubAPI.get(url);

  const issueInfoDetail: IssueInfo = {
    title: newResponse.data.title,
    body: newResponse.data.body,
    created_at: newResponse.data.created_at,
  };

  return issueInfoDetail;
}
