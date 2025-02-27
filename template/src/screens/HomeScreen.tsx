import React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { t } from 'i18next';
import Config from 'react-native-config';

import { NavigationEnum } from '@enums/NavigationEnum';
import { navigate } from '@services/navigationServices';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>{'Environnement: ' + Config.ENV}</Text>
    <Button
      testID="details-button"
      title={t('home.detailsButton')}
      onPress={() => navigate(NavigationEnum.DETAILS)}
    />
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
  },
});
