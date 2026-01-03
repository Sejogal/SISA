import style from '@/assets/styles/style';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Importar icones
import FontAwesome from '@expo/vector-icons/FontAwesome';

const register = () => {
    return (
        <View style={style.content_area} >

            

        </View>
    );
}

export default register;



const styles = StyleSheet.create({
    texto: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'plus-jakarta-sans'
    },
    botao: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: '50%',
    },
});