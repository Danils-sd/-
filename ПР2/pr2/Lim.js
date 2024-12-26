import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Lim() {
    const Naviration = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.data}>Лимит</Text>
            <Text style={styles.but}  onPress={() => Naviration.goBack()}>Назад</Text>
        </View>
    )
}


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
    but: {
      marginTop: 580,
      borderRadius: 15,
      color: "#000",
      fontSize: 50
    }
  
  });
export default Lim;