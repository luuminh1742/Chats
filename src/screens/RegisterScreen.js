import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Button,
    Image,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import RegisterStyle from './styles/RegisterStyle';
import Icon from 'react-native-vector-icons/Entypo';
import User from '../model/User';
import firebaseApp from '../components/FirebaseConfig';

const styles = RegisterStyle;
const user = User;

export default RegisterScreen = ({ navigation }) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkRegister, setCheckRegister] = useState(false);
    const pressLogin = () => {
        navigation.navigate('Login');
    }
    const showAlert = (title, message) =>
        Alert.alert(
            title,
            message,
            [
                { text: "OK", cancelable: true }
            ]
        );
    const writeUserData = (userId, user) => {
        firebaseApp.database().ref('Users/'+userId).set(user);
    }
    const pressRegister = () => {
        let error = '';
        if (user.fullName === '') {
            error += '- Full name cannot be left blank.'
        }
        if (user.email === '') {
            error += '\n- Email cannot be left blank.';
        }
        if (user.password === '') {
            error += '\n- Password cannot be left blank.';
        }
        if (user.password !== confirmPassword) {
            error += '\n- Re-enter password does not match.';
        }
        if (error !== '') {
            showAlert('Error', error);

        } else {
            setCheckRegister(true);
            firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {

                    let newUser = userCredential.user;
                    writeUserData(newUser.uid, user);

                    Alert.alert(
                        'Success',
                        'Register successfully !',
                        [
                            { text: "Login", onPress: () => { pressLogin() } }
                        ]
                    );
                })
                .catch((error) => {
                    showAlert('Error', 'Register failed with message: ' + error.message);

                })
                .finally(() => setCheckRegister(false));
        }

    }

    return (
        <View style={styles.container}>

            <Text style={styles.textWelcome}>Create a new account</Text>
            <View style={styles.viewForm}>
                <View style={styles.itemInput}>
                    <Icon
                        style={styles.iconInput}
                        name='user'
                        size={25}
                    />
                    <TextInput
                        placeholder='Full Name'
                        style={styles.textInput}
                        onChangeText={(value) => { user.fullName = value }}
                    />
                </View>
                <View style={styles.itemInput}>
                    <Icon
                        style={styles.iconInput}
                        name='mail'
                        size={25}
                    />
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                        onChangeText={(value) => { user.email = value }}
                    />
                </View>
                <View style={styles.itemInput}>
                    <Icon
                        style={styles.iconInput}
                        name='lock'
                        size={25}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={(value) => { user.password = value }}
                    />
                </View>

                <View style={styles.itemInput}>
                    <Icon
                        style={styles.iconInput}
                        name='lock'
                        size={25}
                    />
                    <TextInput
                        placeholder='Confirm Password'
                        style={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={(value) => { setConfirmPassword(value) }}
                    />
                </View>


                <TouchableOpacity
                    style={styles.touchRegister}
                    onPress={pressRegister}
                >
                    <Text style={styles.textRegister}>
                        REGISTER
                    </Text>
                </TouchableOpacity>
                <Text>---------- OR ----------</Text>
                <TouchableOpacity
                    style={styles.touchLogin}
                    onPress={pressLogin}
                >
                    <Text style={styles.textLogin}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                {
                    checkRegister ?
                        <ActivityIndicator size="large" style={{ marginTop: 10, }} />
                        : undefined
                }
            </View>
        </View>
    );
}