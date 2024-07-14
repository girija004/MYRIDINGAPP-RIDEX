import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Components/screens/start';
import Login from './Components/screens/login';
import SignUp from './Components/screens/signup';
import ButtonScreen from './Components/screens/button'

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Start></Start>*/}
       <ButtonScreen></ButtonScreen>
  {/*<Login></Login>*/}
   {/* <SignUp></SignUp>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //alignItems: 'center',
    justifyContent: 'center',
  },
});
