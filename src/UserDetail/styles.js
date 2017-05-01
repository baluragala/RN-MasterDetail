import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: .6,
    backgroundColor: '#dde6e9',
    alignItems:'center'
  },
  toolbar: {
    backgroundColor: '#2989dd',
    color: '#fff',
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginTop:66
  },
  name: {
    fontSize:18,
    fontWeight:'bold',
    paddingTop:20
  },
  addressContainer:{
    padding:10,
    alignItems:'center'
  },
  address:{
    fontSize:14
  }
});

export default styles;
