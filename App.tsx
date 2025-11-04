import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import TelaInicio from "./src/components/TelaInicio";
import TelaCatalogo from "./src/components/TelaCatalogo";
import TelaContato from "./src/components/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bottle-wine" size={24} color="black" />
              
            ),
          }}
        />


        <Tabs.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="contact-book" size={24} color="black" />
              
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

























// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather} from "@expo/vector-icons";

// import TelaBiblioteca from "./src/components/TelaBiblioteca";
// import TelaDescricao from "./src/components/TelaDescricao";
// import TelaHome from "./src/components/TelaHome";
// import TelaRotas from "./src/components/TelaHome";



// const Tabs = createBottomTabNavigator();

// export default function App () {
//     return (
//        <NavigationContainer>
//             <Tabs.Navigator>
//                 <Tabs.Screen name="Início" component = { TelaInicial} />
//                 <Tabs.Screen name="Perfil" component = { TelaPerfil} />
//             </Tabs.Navigator>
//             <Tabs.Navigator screenOptions={{headerShown: false}}>
//                  <Tabs.Screen name="Home" component = {TelaHome}
//                 options={{
//                     tabBarIcon:() =><Feather name="home" color={'blue'} size={30}/>,
//                 }}
//                 />
//                  <Tabs.Screen name="Telas" component = {TelaDescricao}
//                     options={{
//                     tabBarIcon:() =><Feather name="monitor" color={'blue'} size={30}/>,
//                 }}
//                 />
//                  <Tabs.Screen name="Rotas" component = {TelaRotas}
//                     options={{
//                     tabBarIcon:() =><Feather name="compass" color={'blue'} size={30}/>,
//                 }}
//                 />
//                  <Tabs.Screen name="Biblioteca" component = {TelaBiblioteca}
//                     options={{
//                     tabBarIcon:() =><Feather name="book-open" color={'blue'} size={30}/>,
//                 }}
//                 />
//             </Tabs.Navigator>
//         </NavigationContainer>
//     )
// };




