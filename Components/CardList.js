import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, PanResponder } from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default class CardList extends Component {

  state = { arrData: [] }
  componentDidMount() {
    this.updateDataList();
  }
  fetchAll(page) {
    fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${page}`)
      .then((res => {
        const arr = JSON.parse(res._bodyInit).photos;
        this.setState({ arrData: this.state.arrData.concat(arr) });
      }))
      .catch(err => console.log(err));
  }


  page = 1;
  updateDataList = () => {
    this.fetchAll(this.page);
    this.page = this.page + 1;
  }

  render() {
    return (
      <ScrollView onMomentumScrollEnd={this.updateDataList}>
        <View style={styles.mainContainer}>
          {this.state.arrData.map(person => <Card key={person.id} person={person} />)}
        </View>
      </ScrollView>
    );
  }
}

