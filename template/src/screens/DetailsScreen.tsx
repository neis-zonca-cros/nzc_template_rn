import React from 'react';

import { StyleSheet, View } from 'react-native';

const DetailsScreen = () => <View testID="details-screen" style={styles.container}></View>;

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    transform: [{ scale: 2.5 }],
  },
});
