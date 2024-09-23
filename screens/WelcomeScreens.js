import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const handleStart = () => {
        navigation.navigate('Signup');
    };
    const handleContact = () => {
        navigation.navigate('Contact');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Redragon App</Text>
            <Text style={styles.subtitle}>Your journey  starts here.</Text>
            <Button color="#1616" title="Get Started" onPress={handleStart} />


            <Button color="#1616" title="Contact Us" onPress={handleContact} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#161616',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    links: {
        backgroundColor: 'red',
    }
});

export default WelcomeScreen;
