import React from "react";
import PostItems from "./PostItems";
import postStore from "../../../stores/postStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let PostList = ({ navigation }) => {
  const PostList = postStore.fetchPosts.map((post) => (
    <PostItems navigation={navigation} post={post} key={post.id} />
  ));

  return (
    <Content>
      <List>{PostList}</List>
    </Content>
  );
};
export default observer(PostList);
