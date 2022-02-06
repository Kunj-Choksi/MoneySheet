import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {SummeryStackNavigator} from '../navigation/StackNavigator';
import TabNavigator from '../navigation/TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={SummeryStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
