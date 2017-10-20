import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem, Button } from 'react-native-elements'

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    flexDirection: 'column-reverse',
    position: 'relative',
  },
  containerText: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.4,
  },
  textDescription: {
    color: 'white',
  },
  textAuthor: {
    color: 'white',
    fontStyle: 'italic',
  },
});


class MainCard extends Component {
  onLearnMore = person => this.props.navigation.navigate('ExpandCard', person);
  render() {
    return (
      <View key={this.props.key} style={styles.container}>
        <Card
          title={this.props.person.user.fullname}
          featuredTitle={this.props.person.name}
          image= {{uri:this.props.person.image_url}}
          >
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress={() => this.onLearnMore(this.props.person)}
            title='VIEW MORE' />
        </Card>
      </View>);
  }
}


MainCard.propTypes = {
  person: PropTypes.object,
  navigation: PropTypes.object,
  key: PropTypes.number,
};

export default withNavigation(MainCard);
