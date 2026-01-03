import style from '@/assets/styles/style';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Sidebar = () => {
    return (
        <View style={style.sidebar} >
            <View>
                <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
            </View>

            <View>
                <TouchableOpacity style={styles.botao} >
                    <Text style={styles.texto} >Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} >Energia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} >Gestão da Bateria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} >Alertas e Segurança</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} >Manutenção</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} >Edifício</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Sidebar;



const styles = StyleSheet.create({
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'plus-jakarta-sans'
    },
    botao: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 5
    },
    logo: {
        width: 150,
        resizeMode: 'contain',
        margin: 10
    }
});