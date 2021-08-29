import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

export default MainScreen = ({ route }) => {
    const { userId } = route.params;

    const friendsScreen = ({ navigation }) => {
        return (
            <FriendsScreen
                USER_UD={userId}
                navigation={navigation}
            />
        );
    }
    
    
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Friends"
                component={friendsScreen}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    // header: () => null
                }}
            />

        </Stack.Navigator>
    );
}
