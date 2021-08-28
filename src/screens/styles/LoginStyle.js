import { StyleSheet } from "react-native";

const TEXT = {
    color:'#52796f',
    fontSize:18
}

const LoginStyle = StyleSheet.create({
    container: {
        flex:5,
        // alignItems: "center",
        // justifyContent:'center',
        backgroundColor:'#eff6ff'
    },
    viewLogo:{
        alignItems: "center",
        justifyContent:'center',
        flex:2
    },
    imageHeader:{
        width:255,
        height:255,
        
    },
    main:{
        flex:3,
        alignItems: "center",
        
    },
    textWelcome:{
        color:'#52796f',
        fontSize:27,

    },
    viewForm:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemInput:{
        width:'80%',
        marginTop:15,
    },
    textInput:{
        backgroundColor:'#fff',
        borderRadius:25,
        width:'100%',
        paddingVertical:10,
        paddingLeft:50,
        paddingRight:15,
        ...TEXT,
    },
    iconInput:{
        position: 'absolute',
        zIndex:10,
        left:10,
        top:10
    },
    textLogin:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    touchLogin:{
        backgroundColor:'#52796f',
        padding:10,
        borderRadius:25,
        marginVertical:15,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchRegister:{
        marginVertical:15,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRegister:{
        fontSize:20,
        color:'#1f5199',
    }
})

export default LoginStyle;