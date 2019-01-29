import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListItem from './src/core-ui/ListItem';

export default class App extends React.Component {
  render() {
    let _onPressItem = () => {
      console.log('the quick jumps over the lazy dog');
    };
    let arr1 = {
      text: 'hello there',
      containerStyle: styles.itemStyle,
      onPress: _onPressItem,
    };
    let arr = [
      {
        text: 'hello there',
        containerStyle: styles.itemStyle,
        onPress: _onPressItem,
      },
      {
        text: 'general kenobi',
        containerStyle: styles.itemStyle,
        onPress: _onPressItem,
      },
    ];
    return (
      <View style={styles.container}>
        <ListItem
          text={'hello there'}
          containerStyle={styles.itemStyle}
          onPress={_onPressItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textStyle: {
    height: 32,
    width: 200,
    borderWidth: 1,
    borderColor: '#777',
    paddingHorizontal: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
