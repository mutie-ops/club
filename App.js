import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateAccout from './pages/createAccount';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnBoarding from './pages/OnBoarding';
import Home from './pages/Home';
import Event from "./pages/Event";
import Invite from "./pages/Invites";
import Payments from "./pages/Payments";
   

const Stack =  createNativeStackNavigator()
const Tab =  createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:'grey',
      tabBarActiveBackgroundColor:'#945906',
      tabBarInactiveBackgroundColor:'#945906'

    }}>

      <Tab.Screen name="Home" component={Home}  options={{
                headerShown: false
              }}/>
      <Tab.Screen name="Event" component={Event}  options={{
                headerShown: false
              }}/>
      <Tab.Screen name="Invite" component={Invite} options={{
                 headerShown: false
              }} />
      <Tab.Screen name="Payments" component={Payments} options={{
                headerShown: false
              }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
   
   
   <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='CreateAccount' component={CreateAccout}
               options={{
                header: () => null, // Hide the header for this screen
              }}/>
          <Stack.Screen name='Onboard'component={OnBoarding}
             options={{
              header: () => null, // Hide the header for this screen
            }}/>
          {/* <Stack.Screen name='Home'component={Home}/> */}
          <Stack.Screen name="Home" component={HomeTabs}/>
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
