import React from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const ModalEditProfile = (props) => {

    const saveInfo = () => {
        alert('Save info');
    }
    const savePassword = () => {
        alert('Save password');
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
                            <Image
                                source={{ uri: props.avatar }}
                                style={styles.avatarUser}
                            />
                            <View style={styles.formItem}>
                                <Text style={styles.formTextLabel}>Full Name</Text>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Full Name'
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
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 15,
        width: '60%'
    },
    avatarUser: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    formItem: {
        flexDirection: 'row',
        marginVertical: 10
    },
    formTextLabel: {
        paddingTop: 20,
        width: '30%',
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

    }
});

export default ModalEditProfile;