// import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react"
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lim from './Lim';

function HomeScreen() {
  const Naviration = useNavigation();
  const [date, setDate] = useState("-");
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dataD = new Date().getDate()
    const dataM = new Date().getMonth()
    setDate(`${dataD}.${dataM}`)
  },[])
  return (
    <View style = {styles.container} onStartShouldSetResponder={() => {
      setVal(val+1);
    }}>
      <Text style = {styles.data}>{date}</Text>
      <View style = {styles.schet}>
        <Text style={styles.schetText}>{val}</Text>
      </View>
      <Text style={styles.but}  onPress={() => Naviration.navigate("Lim")}>Лимит</Text>
    </View>
  );
}
const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      }
    },
    Lim: {
      screen: Lim,
      options: {
        headerShown: false,
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23242E',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'start',
    
  },
  data: {
    fontSize: 45,
    marginTop: 70,
    color: 'rgb(190, 190, 190)',
  },
  schet: {
    flexShrink: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    width: 300,
    height: 300,
    borderRadius: 150,
    boxShadow: '3 3 12 0 rgb(233, 51, 20),-3 -6 12 0 rgba(0, 0, 0, 0.8)'
  },
  schetText: {
    fontSize:90,
    color: "rgb(196, 47, 31)"
  },
  but: {
    marginTop: 200,
    borderRadius: 15,
    color: "#000",
    fontSize: 50
  }

});

export default function App() {
  return <Navigation/>
};