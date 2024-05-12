import React from 'react'
import Primary from './pages/Primary'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Secondary from './pages/Secondary';
import UserProvider from './context/Provider';

const Tab = createBottomTabNavigator();

const App = () => {

    return (

        <UserProvider>

            <NavigationContainer>

                <Tab.Navigator>
                    <Tab.Screen name="PrimaryTab" component={Primary} />
                    <Tab.Screen name="SecondaryTab" component={Secondary} />
                </Tab.Navigator>

            </NavigationContainer>

        </UserProvider>

    )

}

export default App