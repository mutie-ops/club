import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateAccout from './pages/createAccount';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
   
   
     <NavigationContainer>
          <CreateAccout />  
   </NavigationContainer>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
