import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';

const HomeStack=createStackNavigator({
    HomeScreen:HomeScreen,
    DetailsScreen:DetailsScreen
});

const BottomNav=createBottomTabNavigator();
function MyTabs() {
    return (
      <BottomNav.Navigator>
        <BottomNav.Screen name="Home" component={HomeScreen} />
        <BottomNav.Screen name="Settings" component={SettingsScreen} />
      </BottomNav.Navigator>
    );
  }

export default MyTabs;