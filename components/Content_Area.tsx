import style from '@/assets/styles/style';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Importar icones
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Content_Area = () => {
    return (
        <View style={style.content_area} >

            <View style={{ flex:0.1, flexDirection:'row', margin: '1%', padding: 20, backgroundColor: '#FFFFFF', borderRadius: 16, justifyContent:'space-between', alignItems:'center' }} >
                <Text style={styles.texto} >Estado do Elevador</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <FontAwesome name="circle" size={24} color="green" />
                    <Text>  Em andamento</Text>
                </View>

            </View>

        </View>
    );
}

export default Content_Area;



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