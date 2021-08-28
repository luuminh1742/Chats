import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import LoginStyle from './styles/LoginStyle';
import Icon from 'react-native-vector-icons/Entypo';
import firebaseApp from '../components/FirebaseConfig';



const styles = LoginStyle;
export default LoginScreen = ({ navigation }) => {

    const showAlert = (title, message) =>
        Alert.alert(
            title,
            message,
            [
                { text: "Cancel", cancelable: true },
                { text: "OK", cancelable: true }
            ]
        );
    const [checkLogin, setCheckLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const pressRegister = () => {
        navigation.navigate('Register');
    }
    const pressLogin = () => {
        setCheckLogin(true);
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate('Main',{userId:user.uid});
            })
            .catch((error) => {
                showAlert('Error',error.message);
            })
            .finally(() => setCheckLogin(false));
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image
                    source={require('../../assets/images/logo_chat.png')}
                    style={styles.imageHeader}
                />
            </View>

            <View style={styles.main}>
                <Text style={styles.textWelcome}>Welcome Back</Text>
                <View style={styles.viewForm}>


                    <View style={styles.itemInput}>
                        <Icon
                            style={styles.iconInput}
                            name='mail'
                            size={25}
                        />
                        <TextInput
                            placeholder='Email'
                            style={styles.textInput}
                            onChangeText={value => setEmail(value)}
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
                            onChangeText={value => setPassword(value)}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.touchLogin}
                        onPress={pressLogin}
                    >
                        <Text style={styles.textLogin}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <Text>---------- OR ----------</Text>
                    <TouchableOpacity
                        style={styles.touchRegister}
                        onPress={pressRegister}
                    >
                        <Text style={styles.textRegister}>
                            Create a new account
                        </Text>
                    </TouchableOpacity>

                </View>
                {
                    checkLogin ?
                        <ActivityIndicator
                            size="large"
                            style={{
                                position: "absolute",
                                zIndex: 100,
                                top: 85,
                            }} />
                        : undefined
                }
            </View>

        </View>
    );
}