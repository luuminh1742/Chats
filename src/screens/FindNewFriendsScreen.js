import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FindNewFriendsStyle from './styles/FindNewFriendsStyle';
import firebaseApp from '../components/FirebaseConfig';

const styles = FindNewFriendsStyle;
export default FindNewFriendsScreen = () => {
    
    const pathLink = `Users`;
    const [data, setData] = useState([]);
    const database = firebaseApp.database().ref(pathLink);
    const renderItemFriend = ({ item }) => (
        <View style={styles.itemFriend}>
            <Image
                source={{ uri: item.avatar }}
                style={styles.itemAvatar}
            />
            <View style={styles.itemRight}>
                <Text style={styles.textFullName}>{item.fullName}</Text>
                <TouchableOpacity style={styles.touchAddFriend}>
                    <Text style={styles.textTouchAddFriend}>Add Friend</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const readData = () => {
        database.once('value').then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
                let listCourses = [];
                for (const [key, value] of Object.entries(snapshot.val().courses)) {
                    listCourses.push(value);
                }
                setCourses(listCourses);
            } else {
                alert("No data available");
            }
        }).catch((error) => {
            alert(error.message)
        }).finally(() => setCheckStatusGetData(true));
    }
    
    const pressSearchHandler = (text) => {
        alert(text);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputSearch}
                placeholder='Search name or email address'
                onChangeText={(value => pressSearchHandler(value))}
            />

            <FlatList
                data={data}
                renderItem={renderItemFriend}
            />
        </View>
    );
}