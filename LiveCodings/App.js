import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  itemIdStyle: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
  itemTittleStyle: {
    height: 15,
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    borderWidth: 20,
    borderColor: 'blue',
  },
  itemBodyStyle: {
    fontSize: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  viewStyle: {
    height: 5,
    backgroundColor: 'gray',
    marginTop: 5,
    marginBottom: 20,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.state.dataSource}
          renderItem={({item}) => (
            <View>
              <Text style={styles.itemIdStyle}>{'Post Blog' + item.id}</Text>
              <Text style={styles.itemTittleStyle}>{item.title}</Text>
              <View>
                <Text style={styles.itemBodyStyle}>{item.body}</Text>
                <Button
                  title="Show More..."
                  // eslint-disable-next-line no-undef
                  onPress={() => Alert.alert('Simple Button pressed')}
                />
              </View>
              <View style={styles.viewStyle} />
            </View>
          )}
        />
      </View>
    );
  }
}
