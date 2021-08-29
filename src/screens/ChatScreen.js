import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    Pressable,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import ChatStyle from './styles/ChatStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebaseApp from '../components/FirebaseConfig';

const styles = ChatStyle;

export default ChatScreen = ({ navigation, route }) => {

    const database = firebaseApp.database().ref('Users');
    const { myKey, keyFriend, fullName, avatar } = route.params;
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    let componentMounted = true;
    const pressBackHome = () => {
        navigation.goBack();
    }

    const getData = () => {
        database.child(myKey).child('messages').child(keyFriend)
            .on('value', (snapshot) => {
                let tmp = [];
                for (let [key, value] of Object.entries(snapshot.val())) {
                    tmp.push({
                        key: key,
                        message: value.message,
                        time: value.time,
                        isFriend: value.isFriend
                    });
                }

                setData(tmp);
            });
    }



    const pressOptionDeleteMessage = (key) => {
        //console.log(key);
        Alert.alert(
            'Option', 'Delete this message',
            [
                { text: "Cancel", cancelable: true },
                {
                    text: "OK",
                    cancelable: true,
                    onPress: () => {
                        confirmDeleteMessage(key);
                    }
                }
            ]
        );
    }

    const confirmDeleteMessage = (key) => {
        Alert.alert(
            'Confirm delete messages',
            'This message deletes only on your side. Are you sure you want to delete ?',
            [
                { text: "No", cancelable: true },
                {
                    text: "Yes",
                    cancelable: true,
                    onPress: () => {
                        database.child(myKey).child('messages')
                            .child(keyFriend).child(key).remove();

                    },

                }
            ]
        );
    }

    const renderItemMessage = ({ item }) => {

        return (
            <Pressable style={[
                styles.itemMessage,
                item.isFriend ?
                    styles.styleMessageFromFriend
                    : styles.styleMessageFromMe]}
                onLongPress={() => pressOptionDeleteMessage(item.key)}
            >
                <Text style={[
                    styles.textMessage,
                    item.isFriend ?
                        styles.textMessageFromFriend
                        : styles.textMessageFromMe

                ]}>{item.message}</Text>
                <Text style={[
                    styles.textTimeSended,
                    item.isFriend ?
                        styles.textTimeSendedFromFriend
                        : styles.textTimeSendedFromMe
                ]}>{item.time}</Text>
            </Pressable>

        );
    }
    const flatListRef = useRef();
    const onPressScrollListMessage = () => {
        flatListRef.current.scrollToEnd({ animating: true });
    };

    const pressSendMessageHandler = () => {
        let today = new Date();

        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let dateTime = date + ' at ' + time;


        database.child(myKey).child('messages').child(keyFriend).push(
            {
                message: message,
                time: dateTime,
                isFriend: false
            }
        );
        if (myKey !== keyFriend)
            database.child(keyFriend).child('messages').child(myKey).push(
                {
                    message: message,
                    time: dateTime,
                    isFriend: true
                }
            );
        setMessage('');
    }

    useEffect(() => {
        if (componentMounted) {
            getData();
        }

        return () => {
            componentMounted = false;
            setData([]);
        }
    }, [])

    const pressTextInput = () => {
        alert('click')
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#0084ff'
                barStyle='light-content'
                style={{ zIndex: 10 }}
            />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={pressBackHome}
                    />
                    <Image
                        source={{ uri: avatar }}
                        style={styles.avatarUser}
                    />
                    <Text style={styles.nameUser}>{fullName}</Text>
                </View>
            </View>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderItemMessage}
                style={styles.listMessage}
                // initialScrollIndex={() => {
                //     return data.length > 0 ? data.length -1 : 0;
                // }}
                onContentSizeChange={onPressScrollListMessage}
                onLayout={onPressScrollListMessage}
                keyExtractor={item => item.key}
            />

            <View style={styles.viewSendMessage}>
                <TextInput
                    style={styles.textInputMessage}
                    placeholder='Message ...'
                    onChangeText={value => setMessage(value)}
                    value={message}
                    onFocus={onPressScrollListMessage}
                />
                <TouchableOpacity
                    style={styles.touchableSend}
                    onPress={pressSendMessageHandler}
                >
                    <Icon
                        name='paper-plane'
                        size={25}
                        color='#0084ff'
                    />
                </TouchableOpacity>

            </View>


        </View>
    );
}