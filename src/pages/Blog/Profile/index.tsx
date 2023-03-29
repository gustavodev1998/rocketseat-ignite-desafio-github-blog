import * as Styles from "./styles";

import { Buildings, GithubLogo, LinkSimple, Users } from "phosphor-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchGithubProfileInfo,
  fetchGithubRepoIssues,
  profileInfo,
} from "../../../lib/axios";

export function Profile() {
  const [profileData, setProfileData] = useState<profileInfo>({
    bio: "",
    followers: 0,
    imageUrl: "",
    location: "",
    login: "",
    name: "",
    url: "",
  });

  useEffect(() => {
    fetchGithubProfileInfo("gustavodev1998")
      .then((data) => {
        console.log(data);
        setProfileData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <Styles.ProfileContainer>
      <Styles.ProfileCardContainer>
        <Styles.ProfilePictureContainer>
          <img src={profileData.imageUrl} alt="profile picture" />
        </Styles.ProfilePictureContainer>

        <Styles.ProfileInfoContainer>
          <Styles.ProfileInfoHeader>
            <h2>{profileData.name}</h2>
            <div>
              Github
              <span>
                <Link to={profileData.url} target="_blank">
                  <LinkSimple size={18} weight="fill" />
                </Link>
              </span>
            </div>
          </Styles.ProfileInfoHeader>

          <Styles.ProfileInfoDescription>
            {profileData?.bio}
          </Styles.ProfileInfoDescription>

          <Styles.ProfileInfoSocialMedias>
            <Styles.ProfileInfoSocialMedia>
              <div>
                <GithubLogo size={18} weight="fill" />
              </div>
              {profileData.login}
            </Styles.ProfileInfoSocialMedia>

            <Styles.ProfileInfoSocialMedia>
              <div>
                <Buildings size={18} weight="fill" />
              </div>
              {profileData.location}
            </Styles.ProfileInfoSocialMedia>

            <Styles.ProfileInfoSocialMedia>
              <div>
                <Users size={18} weight="fill" />
              </div>
              {`${profileData.followers} seguidores`}
            </Styles.ProfileInfoSocialMedia>
          </Styles.ProfileInfoSocialMedias>
        </Styles.ProfileInfoContainer>
      </Styles.ProfileCardContainer>
    </Styles.ProfileContainer>
  );
}
