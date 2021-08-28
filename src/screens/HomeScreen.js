import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import HomeStyle from './styles/HomeStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemFriend from '../components/ItemFriend';
import firebaseApp from '../components/FirebaseConfig';

const styles = HomeStyle;

const HomeScreen = (props) => {

    const [user, setUser] = useState({});
    const userId = firebaseApp.auth().currentUser.uid;
    const database = firebaseApp.database().ref('Users');

    const [dataGroupsMessage, setDataGroupsMessage] = useState([]);
    const [avatar, setAvatar] = useState('https://bitly.com.vn/ts8y3u');
    const renderItemContact = ({ item }) => {
        return (
            <Image
                source={require('../../assets/images/avatar_default.png')}
                style={[styles.avatarUser, styles.avatarFriends]} />

        );
    }
    const pressMoveToFriends = () => {
        props.navigation.navigate('Friends');
    }

    const pressTabChat = (key, fullName, avatar) => {
        props.navigation.navigate('Chat',
            {
                myKey: userId,
                keyFriend: key,
                fullName: fullName,
                avatar: avatar
            }
        );
    }
    const renderItemHistoryChats = ({ item }) => {
        return (
            <ItemFriend
                fullName={item.fullName}
                avatar={item.avatar}
                pressChat={() => pressTabChat(item.key, item.fullName, item.avatar)}
            />
        );
    }

    const pressMoveToFindNewFriends = () => {
        //props.navigation.navigate('Find New Friends');
    }

    const getKeyFriends = () => {
        const keyUserFriend = [];
        database.child(userId).child('messages')
            .on('child_added', (data) => {
                keyUserFriend.push(data.key);
            }
            );
        return keyUserFriend;
    }



    const getInfoUser = () => {
        database.child(userId).get().then((data) => {
            setUser({
                key: userId,
                fullName: data.val().fullName,
                avatar: data.val().avatar,
                email: data.val().email,
                password: data.val().password
            })
        });
    }



    const getListFriend = () => {
        let keyFriends = getKeyFriends();
        if (keyFriends.length === 0) return [];
        let result = [];
        let tmp = [];
        database.on('child_added', (data) =>
            tmp.push(
                {
                    key: data.key,
                    fullName: data.val().fullName,
                    avatar: data.val().avatar
                }
            )
        );
        tmp.forEach((item) => {
            if (keyFriends.includes(item.key)) {
                result.push(item);
            }
        })
        //setDataContact(result);
        return result;
    }

    //const [keyFriends, setKeyFriends] = useState(getKeyFriends());
    const [dataContact, setDataContact] = useState(getListFriend());
    useEffect(() => {
        setDataContact(getListFriend());
        getInfoUser();
    }, [])

    const pressMoveToProfile = () => {
        props.navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#465efc"
                barStyle='light-content'
            />
            <View style={styles.viewHeader}>
                <View>
                    <View style={styles.viewAvatar}>
                        <TouchableOpacity
                            onPress={pressMoveToProfile}
                        >
                            <Image
                                source={{ uri: user.avatar }}
                                style={styles.avatarUser}

                            />
                        </TouchableOpacity>

                        <Text style={styles.textTitleHeader}>{user.fullName}</Text>
                    </View>
                    <Text style={{
                        marginTop: 10,
                        marginLeft: 5,
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#fff'
                    }}>Messages</Text>
                </View>

                <View style={styles.headerRight}>
                    <TouchableOpacity
                        style={styles.touchableSearch}
                        onPress={pressMoveToFriends}
                    >
                        <Icon
                            name='search'
                            size={20}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableSearch}
                        onPress={pressMoveToFriends}
                    >
                        <Icon
                            name='address-book'
                            size={20}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.viewChats}>
                <Text style={styles.textGroups}>Groups</Text>
                <View style={styles.viewGroups}>
                    <View style={styles.viewFriends}>
                        <TouchableOpacity
                            style={styles.touchableAddNewFriend}
                            onPress={pressMoveToFindNewFriends}
                        >
                            <Icon
                                name='plus'
                                size={20}
                            />
                        </TouchableOpacity>
                        <FlatList
                            horizontal={true}
                            data={dataGroupsMessage}
                            renderItem={renderItemContact}
                        />
                    </View>
                </View>
                <View style={styles.viewHistoryChats}>
                    <Text style={styles.textHistoryMessage}>
                        Message history
                    </Text>
                    <FlatList
                        data={dataContact}
                        renderItem={renderItemHistoryChats}
                        keyExtractor={item => item.key}
                    />
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;