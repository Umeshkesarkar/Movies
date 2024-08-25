/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import Listing from './screens/Listing';
import DetailScreen from './screens/DetailScreen';
import Profile from './screens/Profile';


const Stack = createStackNavigator();

const Navigation = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false,
                }}
            >
                 <Stack.Screen
                 name="SplashScreen"
                 component={SplashScreen} />

                  <Stack.Screen
                 name="Listing"
                 component={Listing} />

                  <Stack.Screen
                 name="DetailScreen"
                 component={DetailScreen} />

                  <Stack.Screen
                 name="Profile"
                 component={Profile} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;