import { StyleSheet } from "react-native";

export default ChatStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#fafafa',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 5,
        justifyContent: 'center',
        backgroundColor: '#0084ff'
    },
    avatarUser: {
        width: 45,
        height: 45,
        borderRadius: 45,
        marginHorizontal: 15,
    },
    nameUser: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },


    listMessage: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 30,
        marginBottom:10,
    },

    //-------- item message -----------

    itemMessage: {
        // marginVertical:10,
        // padding:10,
        // borderRadius:50,
    },
    textMessage: {
        fontSize: 16,
        maxWidth:'80%',
        marginVertical: 10,
        paddingVertical: 10,
        // borderRadius: 50,
        paddingHorizontal: 20,
    },
    textMessageFromFriend: {
        color: '#000',
        textAlign: 'left',
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    textMessageFromMe: {
        color: '#fff',
        textAlign: 'right',
        backgroundColor: '#0084ff',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
    },
    styleMessageFromFriend: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    styleMessageFromMe: {
        justifyContent: 'space-evenly',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    textTimeSended: {
        color: '#a6a6a6',
    },
    textTimeSendedFromFriend: {
        textAlign: 'left',
        marginBottom:10,
    },
    textTimeSendedFromMe: {
        textAlign: 'right',
        marginBottom:10,
    },

//-------------------------
    viewSendMessage: {
        //flexDirection: 'row',
    },
    textInputMessage: {
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        //paddingHorizontal: 15,
        margin: 5,
        paddingLeft:15,
        paddingRight:55,
    },
    touchableSend: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        position:'absolute',
        right:20,
        top:12
    }
})