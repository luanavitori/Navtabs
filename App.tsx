import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import TelaInicio from "./src/components/TelaInicio";
import TelaCatalogo from "./src/components/TelaCatalogo";
import TelaContato from "./src/components/TelaContato";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#ddd",
          tabBarStyle: { backgroundColor: "#4B0101" },
        }}
      >
        <Tab.Screen
          name="Início"
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wine-bottle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="phone" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






























// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

// import { ImageBackground } from "react-native";
// import logo from "./src/assets/imagens/logo.jpg";
// import TelaInicio from "./src/components/TelaInicio";
// import TelaCatalogo from "./src/components/TelaCatalogo";
// import TelaContato from "./src/components/TelaContato";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Image 
//       source={logo} 
//       style = {{ width: 120, height: 120, alignSelf: "center", marginTop: 20}} 
//       resizeMode="contain"/>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#4A0000", 
//           },
//           headerTintColor: "#fff", 
//           headerTitleAlign: "center", 
//           headerTitleStyle: {
//             fontWeight: "bold",
//             fontSize: 18,
//           },
//           tabBarStyle: {
//             backgroundColor: "#4A0000",
//             borderTopColor: "#4A0000",
//           },
//           tabBarActiveTintColor: "#fff",
//           tabBarInactiveTintColor: "#C9AFAF",
//         }}
//       >
//         <Tab.Screen
//           name="Início"
//           component={TelaInicio}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Feather name="home" color={color} size={size} />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Catálogo"
//           component={TelaCatalogo}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome5 name="wine-bottle" color={color} size={size} />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Contato"
//           component={TelaContato}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome6 name="address-book" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }





