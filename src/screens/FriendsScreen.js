import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    Alert
} from 'react-native';
import ItemFriend from '../components/ItemFriend';
import FriendsStyle from './styles/FriendsStyle';
import firebaseApp from '../components/FirebaseConfig';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = FriendsStyle;
export default FriendsScreen = (props) => {

    const database = firebaseApp.database().ref('Users');

    const [userId, setUserId] = useState(props.USER_UD);
    const [email, setEmail] = useState('');

    const [dataContact, setDataContact] = useState([]);
    const pressTabChat = (key, fullName, avatar) => {
        props.navigation.navigate('Chat',
            {
                myKey:userId,
                keyFriend: key,
                fullName: fullName,
                avatar: avatar
            }
        );
    }

    const renderItemFriend = ({ item }) => {
        return (
            <ItemFriend
                fullName={item.fullName}
                avatar={item.avatar}
                pressChat={() => pressTabChat(item.key, item.fullName, item.avatar)}
            />

        );
    }

    const getDataFromFirebase = () => {
        // const myData = [];
        // database.on('child_added', (data) =>
        //     myData.push()
        // );
    }


    const pressReloadHandler = () => {

        setDataContact([]);
    }
    const pressSearchHandler = () => {
        const myData = [];
        database.orderByChild('email').equalTo(email.trim())
            .on('child_added', (data) =>
                myData.push({
                    key: data.key,
                    fullName: data.val().fullName,
                    avatar: data.val().avatar
                })
            );
        setDataContact(myData);
        if (myData.length === 0) {
            Alert.alert('Notification', 'Can\'t find user',
                [
                    { text: 'OK', cancelable: true }
                ]
            )
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Icon
                    style={styles.iconReload}
                    name='search'
                    size={25}
                    onPress={pressSearchHandler}
                />
                <TextInput
                    style={styles.textInputSearch}
                    placeholder="Search friends by email"
                    onChangeText={value => setEmail(value)}
                />
            </View>

            <FlatList
                data={dataContact}
                renderItem={renderItemFriend}
                keyExtractor={item => item.key}
            />
        </View>
    );
}