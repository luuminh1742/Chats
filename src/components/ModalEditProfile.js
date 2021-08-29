import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    Touchable,
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const ModalEditProfile = (props) => {

    const [resourcePath, setResourcePath] = useState(props.avatar);
    const [uriAvatar,setUriAvatar] = useState(props.avatar);
    const saveInfo = () => {
        alert('Save info');
    }
    const savePassword = () => {
        alert('Save password');
    }

    const selectFile = () => {
        launchImageLibrary({
            mediaType: 'photo',
        },
            res => {
                setResourcePath(res.assets[0].uri);
            });
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView>
                        <Text style={styles.modalTextTitle}>Update info</Text>

                        <View style={styles.formUpdateInfo}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: resourcePath }}
                                    style={styles.avatarUser}
                                />
                                <TouchableOpacity
                                    style={styles.touchOpenImage}
                                    onPress={selectFile}
                                >
                                    <Text>Choose image</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.formItem}>
                                <Text style={styles.formTextLabel}>Full Name</Text>
                                <TextInput
                                    style={styles.inputText}
                                    value={props.fullName}
                                />
                            </View>
                            <View style={styles.formItem}>
                                <Text style={styles.formTextLabel}>Email</Text>
                                <TextInput
                                    style={styles.inputText}
                                    value={props.email}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>


                        </View>

                        <TouchableOpacity
                            style={styles.touchSave}
                            onPress={saveInfo}
                        >
                            <Text style={styles.textTouchSave}>
                                Save Info
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.line}></View>

                        <Text style={styles.modalTextTitle}>Update Password</Text>
                        <View style={styles.formUpdatePassword}>
                            <TextInput
                                style={styles.textInputPassword}
                                placeholder='Old password'
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={styles.textInputPassword}
                                placeholder='New password'
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={styles.textInputPassword}
                                placeholder='Confirm password'
                                secureTextEntry={true}
                            />

                            <TouchableOpacity
                                style={styles.touchSave}
                                onPress={savePassword}
                            >
                                <Text style={styles.textTouchSave}>
                                    Save Password
                                </Text>
                            </TouchableOpacity>
                        </View>



                    </ScrollView>
                    <TouchableOpacity
                        style={styles.buttonClose}
                        onPress={props.hideModal}
                    >
                        <Icon
                            name='closecircle'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
        height: '80%',
    },
    buttonClose: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalTextTitle: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    formUpdateInfo: {

    },
    inputText: {
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor:'#ddd',
        borderRadius:10,
    },
    avatarUser: {
        width: 80,
        height: 80,
        borderRadius: 80,
        borderWidth:2,
        borderColor: '#ddd'
    },
    formItem: {
        //flexDirection: 'row',
        marginVertical: 5
    },
    formTextLabel: {
        paddingVertical:10,
        //width: '30%',
        fontSize: 18
    },
    line: {
        borderTopWidth: 1,
        borderColor: '#000',
        marginVertical: 15
    },
    touchSave: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textTouchSave: {
        color: '#fff'
    },
    textInputPassword: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: '#000',
        paddingHorizontal: 15,

    },
    touchOpenImage:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor: '#ddd',
        height:45,
        borderRadius:5,
        paddingHorizontal:15,
        marginTop:16,
        marginLeft:15,
    }
});

export default ModalEditProfile;