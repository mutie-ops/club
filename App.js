import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateAccout from './pages/createAccount';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
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
      tabBarInactiveTintColor:'#848585',
      tabBarActiveBackgroundColor:'#945906',
      tabBarInactiveBackgroundColor:'#945906'
      

    }}>

      <Tab.Screen name="Home" component={Home}  options={{
                headerShown: false,

                tabBarIcon:({color})=> <Ionicons name='home' size={15} color={color} />
                
              }}/>
      <Tab.Screen name="Event" component={Event}  options={{
                headerShown: false,
                tabBarIcon:({color})=> <Ionicons name='calendar' size={15} color={color}/>
              }}/>
      <Tab.Screen name="Invite" component={Invite} options={{
                 headerShown: false,
                 tabBarIcon:({color})=> <Ionicons name='mail-open' size={15} color={color}/>
              }} />
      <Tab.Screen name="Payments" component={Payments} options={{
                headerShown: false,
                tabBarIcon:({color})=> <Ionicons name='card' size={15} color={color}/>,
              
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
