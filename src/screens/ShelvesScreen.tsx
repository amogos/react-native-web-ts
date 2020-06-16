import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MissingScreen from './MissingScreen';
import {GetLocalizedStrings} from './../localization/index';

interface Props {
  navigation: any;
}

const Tab = createMaterialTopTabNavigator();

const ShelvesTopTabs = () => {
  const localizedStrings = GetLocalizedStrings();
  return (
    <Tab.Navigator lazy={true}>
      <Tab.Screen
        name={localizedStrings.id_shelves_left_tab}
        component={MissingScreen}
      />
      <Tab.Screen
        name={localizedStrings.id_shelves_center_tab}
        component={MissingScreen}
      />
      <Tab.Screen
        name={localizedStrings.id_shelves_right_tab}
        component={MissingScreen}
      />
    </Tab.Navigator>
  );
};

export default ShelvesTopTabs;
