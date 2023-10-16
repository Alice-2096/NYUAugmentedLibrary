import { Platform, StatusBar as RStatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        paddingTop: Platform.OS === 'android' ? RStatusBar.currentHeight : 0,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
    },

    // PRINTER STATUS SCREEN
    buttonContainer:{
        backgroundColor: 'rgb(255,255,255,0)',
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        marginLeft: '5%',
        marginRight: '5%',
    },
    button:{
        backgroundColor: 'white',
        marginLeft: '5%',
        marginRight: '5%',
        padding: 25,
        borderRadius: 3,
        textAlign: "center",
        width: "40%",
    },
    printerStatusContainer:{
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        padding: '5%',
    },
    printerColumns:{
        flex: "wrap",
    },
    imageContainer:{
        width: '30%',
        marginRight: "5%",
    },
    textContainer:{
        width: "65%",
    },
    statusText:{
        width: "100%",
        marginBottom: "10px",
    },
    printerButton:{
        backgroundColor: "#EFEFEF",
        padding: "10px",
        textAlign: "center",
    },
    printerText:{
        fontWeight: "bold",
        fontSize: "20px",
    },


    // WELCOME SCREEN
    // button: {
    //     marginLeft: '10%',
    //     marginRight: '10%',
    //     paddingLeft:25,
    //     // paddingRight: 25,
    //     borderRadius: 30,
    //     display:'flex',
    //     flexDirection:'row',
    //     alignItems:'center',
    //     textAlign:'left',
    //     justifyContent:'space-between',
    //     overflow: 'hidden',
    // },
    // shadow:{
    //     shadowColor: '#000000',
    //     shadowOffset: {width: -1, height: 2},
    //     shadowOpacity: 0.5,
    //     shadowRadius: 30,
    //     height:"20%",
    //     backgroundColor:'#FFFFFF',
    //     elevation:1,
    // },
    // buttonText:{
    //     marginRight: 25,
    //     minWidth: 75,
    //     textAlign: 'center',
    // },
});

export default styles


