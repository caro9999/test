import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>
                講座のアイデア
              </Text>
              <Text style={styles.memoHeaderDate}>
                2018/12/18
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>講座のアイデアです。</Text>
        </View>

        <CircleButton name="pencil" color="white" style={styles.editButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313c',
    justifyContent: 'center',
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    paddingLeft: 20,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
    paddingLeft: 20,
  },
  memoContent: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  editButton: {
    position: 'absolute',
    top: 75,
  },
});

export default MemoDetailScreen;
