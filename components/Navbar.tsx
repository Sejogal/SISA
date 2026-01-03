import style from '@/assets/styles/style';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Importar icones
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = () => {
    return (
        <View style={style.navbar} >
            <View style={{ marginLeft: 240, padding: 10, flex: 1, justifyContent: 'center' }} >
                <Text style={styles.texto} >Dashboard</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.botao} >
                    <EvilIcons name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={{fontSize:16}} >Anabelmo Feijó</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Navbar;



const styles = StyleSheet.create({
    texto: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'plus-jakarta-sans'
    },
    botao: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: '50%',
    },
});