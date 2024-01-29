import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateAccout from './pages/createAccount';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './pages/OnBoarding';
import Home from './pages/Home';
   

const Stack =  createNativeStackNavigator()

export default function App() {
  return (
   
   
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Onboard'>
          <Stack.Screen name='CreateAccount' component={CreateAccout}
               options={{
                header: () => null, // Hide the header for this screen
              }}/>
          <Stack.Screen name='Onboard'component={OnBoarding}
             options={{
              header: () => null, // Hide the header for this screen
            }}/>
          <Stack.Screen name='Home'component={Home}/>
       </Stack.Navigator>
          
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
