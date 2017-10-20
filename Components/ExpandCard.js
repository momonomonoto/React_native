import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  expandContainer: {
    flex: 1,
  },
  imageMain: {
    width: 500,
    height: 500,
    flex: 1,
  },
});

export default function ExpandCard(props) {
  this.navigationOptions = {
    title: 'Home',
  };
  return (
    <View key={props.id} style={styles.expandContainer}>
      <Image style={styles.imageMain} source={{ uri: props.navigation.state.params.image_url }} />
    </View>
  );
}

ExpandCard.PropTypes = {
  navigation: PropTypes.object,
  id: PropTypes.number,
};
