import { Platform, StatusBar as RStatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flex: 1,
    height: '100%',
    // flexDirection: 'column',
    paddingTop: Platform.OS === 'android' ? RStatusBar.currentHeight : 0,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    padding: 20,
  },

  innerContainer: {
    width: '80%',
    height: '80%',
    marginTop: '10%',
    // backgroundColor: 'white',
    alignItems: 'left',
    justifyContent: 'center',
  },

  headingContainer: {
    alignItems: 'flex-start', // Align the text to the left
    // backgroundColor: 'white',
    marginBottom: 20,
  },

  heading: {
    fontSize: 24,
    textAlign: 'left', // Set the text alignment to the left
  },

  //search area
  searchContainer: {
    backgroundColor: 'rgb(92, 92, 92)',
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    height: '80%',
  },

  //input box
  input: {
    backgroundColor: 'white',
    width: '97%',
    // flex: 1,
    height: 30,
    alignSelf: 'center', // Center horizontally
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 30,
  },
  advancedSearch: {
    color: 'white',
    textAlign: 'right',
    marginTop: 10,
    paddingRight: 10,
  },

  button: {
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 25,
    borderRadius: 3,
    textAlign: 'center',
    width: '40%',
  },
  printerStatusContainer: {
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '5%',
  },
  printerColumns: {
    flex: 'wrap',
  },
  imageContainer: {
    width: '30%',
    marginRight: '5%',
  },
  textContainer: {
    width: '65%',
  },
  statusText: {
    width: '100%',
    marginBottom: '10px',
  },
  printerButton: {
    backgroundColor: '#EFEFEF',
    padding: '10px',
    textAlign: 'center',
  },
  printerText: {
    fontWeight: 'bold',
    fontSize: '20px',
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

export default styles;
