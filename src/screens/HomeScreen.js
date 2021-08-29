import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import HomeStyle from './styles/HomeStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemFriend from '../components/ItemFriend';
import firebaseApp from '../components/FirebaseConfig';

const styles = HomeStyle;

const HomeScreen = ({navigation}) => {
    let componentMounted = true;
    const [user, setUser] = useState({});
    const userId = firebaseApp.auth().currentUser.uid;
    const database = firebaseApp.database().ref('Users');
    const [keyFriends, setKeyFriends] = useState([]);
    const [dataGroupsMessage, setDataGroupsMessage] = useState([]);
    const [avatar, setAvatar] = useState('https://bitly.com.vn/ts8y3u');
    const [dataContact, setDataContact] = useState([]);

    const renderItemContact = ({ item }) => {
        return (
            <Image
                source={require('../../assets/images/avatar_default.png')}
                style={[styles.avatarUser, styles.avatarFriends]} />

        );
    }
    const pressMoveToFriends = () => {
        navigation.navigate('Friends');
    }

    const pressTabChat = (key, fullName, avatar) => {
        navigation.navigate('Chat',
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

    const getKeyFriends = () => {
        //const keyUserFriend = [];
        database.child(userId).child('messages')
            .on('value', (snapshot) => {
                //let keyUserFriend = Object.keys(snapshot.val());
                setKeyFriends(Object.keys(snapshot.val()));
                //keyUserFriend.push(data.key);
            }
            );
        //console.log('keyFriends: '+keyFriends);
        //return keyUserFriend;
    }


    const getListFriend = () => {
        //let keyFriends = getKeyFriends();


        //getKeyFriends();
        database.child(userId).child('messages')
            .on('value', (snapshot) => {
                let keyUserFriend = Object.keys(snapshot.val());

                database.on('value', (data) => {
                    let dataTmp = [];
                    for (let [key, value] of Object.entries(data.val())) {

                        if (keyUserFriend.includes(key)) {
                            dataTmp.push({
                                key: key,
                                fullName: value.fullName,
                                avatar: value.avatar
                            });

                        }

                    }
                    setDataContact(dataTmp);

                });
            });

    }



    useEffect(() => {
        if (componentMounted) {
            getInfoUser();
            getListFriend();
        }
        return () => {
            componentMounted = false;
        }

    }, [])

    const pressMoveToProfile = () => {
        navigation.navigate('Profile');
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