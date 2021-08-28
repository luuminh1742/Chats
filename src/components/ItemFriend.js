import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";


export default ItemFriend = (props) => {
    return (
        <TouchableOpacity
            style={styles.itemFiend}
            onPress={props.pressChat}
        >
            <Image
                source={{ uri: props.avatar }}
                style={styles.avatarUser} />
            <Text style={styles.textNameFriend}>{props.fullName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemFiend: {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    textNameFriend: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 13,
        marginLeft: 10
    },
    avatarUser: {
        width: 50,
        height: 50,
        borderRadius: 60,
        borderColor: '#ddd',
        borderWidth: 1,
    },

})