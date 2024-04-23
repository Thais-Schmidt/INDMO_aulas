import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import Home from './src/pages/Home'; foi substituido pelo stackRoutes

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

//navegação tipo pilha uma aba sobre a outra
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1c3604',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#b4c4bc'
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={StackRoutes}
        options={{
          tabBarLabel: 'Home',
          headerTintColor: '#053c20',
          
          headerStyle: { //estiliza o header
            backgroundColor: '#b4c4bc'
          },
          headerShown: false, // oculta a barra de menu com o escrito tela inicial
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='home' color={color} size={size}></FontAwesome>
          }
        }
        }
      />

      <Tab.Screen
        name='Sobre'
        component={Sobre}
        options={{
          title: 'Sobre',
          headerTintColor: '#053c20',

          headerStyle: { //estiliza o header
            backgroundColor: '#fafafa'
          },
          //headerShown: false // oculta a barra de menu com o escrito tela inicial
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='id-card' color={color} size={size}></FontAwesome>
          }
        }
        }
      />

      <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          title: 'Formulário de contato',
          headerTintColor: '#053c20',

          headerStyle: { //estiliza o header
            backgroundColor: '#fafafa'
          },
          //headerShown: false // oculta a barra de menu com o escrito tela inicial
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='phone' color={color} size={size} ></FontAwesome>
          }
        }
        }
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4c4bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
