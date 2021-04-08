import React from "react";
import styled from "styled-components";
import { ListItem } from "native-base";
import { observer } from "mobx-react";

const TextStyled = styled.Text`
  color: black;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

const PostItems = ({ post }) => {
  return (
    <>
      <ListItem>
        <TextStyled>Text: {post.text}</TextStyled>
      </ListItem>
    </>
  );
};

export default observer(PostItems);
