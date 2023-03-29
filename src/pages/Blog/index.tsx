import { BlogContainer } from "./styles";

import { Issues } from "./Issues";
import { Profile } from "./Profile";

export function Blog() {
  return (
    <BlogContainer>
      <Profile></Profile>
      <Issues></Issues>
    </BlogContainer>
  );
}
