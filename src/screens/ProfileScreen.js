import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ProfileStyle from './styles/ProfileStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalEditProfile from '../components/ModalEditProfile';
import firebaseApp from '../components/FirebaseConfig';

const styles = ProfileStyle;



export default ProfileScreen = ({ navigation }) => {

    const [user, setUser] = useState({});
    const database = firebaseApp.database().ref();
    const userId = firebaseApp.auth().currentUser.uid;
    const [modalVisible, setModalVisible] = useState(false);
    const pressHideModal = () => {
        setModalVisible(false);
    }
    const pressSignOut = () => {

        firebaseApp.auth().signOut().then(() => {
            navigation.navigate('Login');
        }).catch((error) => {
            // An error happened.
        });

    }


    const getInfoUser = () => {
        database.child('Users').child(userId).get().then((data) => {
            setUser({
                key: userId,
                fullName: data.val().fullName,
                avatar: data.val().avatar,
                email: data.val().email,
                password: data.val().password
            })
        });
    }




    useEffect(() => {
        getInfoUser();
        //setUser(getInfoUser());
        //setUser(getInfoUser());
        //setUser();
        console.log(user);
        //console.log(getInfoUser());\
    }, [])


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: user.avatar }}
                style={styles.avatarUser}

            />
            <Text style={styles.textHeaderNameUser}>{user.fullName}</Text>
            <Text style={styles.textHeaderEmail}>minh@gmail.com</Text>
            <TouchableOpacity
                style={styles.touchableUpdateInfo}
                onPress={() => setModalVisible(true)}
            >
                <Text>Update Info</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={pressSignOut}
            >
                <Icon
                    name='sign-out'
                    size={25}
                />
            </TouchableOpacity>

            <ModalEditProfile
                modalVisible={modalVisible}
                hideModal={pressHideModal}
                avatar={user.avatar}
                fullName={user.fullName}
                email={user.email}

            />
        </View>
    );
}