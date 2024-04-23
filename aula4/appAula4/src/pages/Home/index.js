import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Text>Tela Inicial!</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89a296',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
