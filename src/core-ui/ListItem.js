// @flow

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Style,
  TextInput,
  FlatList,
} from 'react-native';
type List = {
  text: string,
  containerStyle: Object,
  onPress?: () => void,
};
type Props = Array<List>;

function ListItem({text, textStyle, containerStyle, onPress}: Props) {
  return (
    <View style={containerStyle}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Text style={textStyle}> {text} >>></Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
  /*
  console.log(props);
  return (
    <View style={styles.container_outer}>
      <View style={styles.container}>
        <Text style={styles.container_text}>
          the quick fox jumps over the lazy dog asd asjdaskdasdbkdkasb
          kczxbckzckj
        </Text>
      </View>
    </View>
  );*/
}

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
});
export default ListItem;
