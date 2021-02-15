import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

import { StyleSheet } from "react-native";

import {
  categoryPlayList as catPlays,
  recentlyAddedPlayList as recAddPlays,
  playList,
} from "../demoData";

// components ===============
import SearchIcon from "../components/Search/SearchIcon";
import ContentListContainer from "../components/Home/ContentListContainer";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Content style={styles.container}>
        <ContentListContainer
          title={"Select Your workout type"}
          dataList={catPlays}
          type={"cat"}
        />
        <ContentListContainer
          title={"Recently Added"}
          dataList={recAddPlays}
          type={"movie"}
        />
        <ContentListContainer
          title={"Most Viewed / Hit List"}
          dataList={recAddPlays}
          sizeBig={false}
          type={"movie"}
        />
        <ContentListContainer
          title={"Workout Playlists"}
          dataList={playList}
          type={"playlist"}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});

export default HomeScreen;
