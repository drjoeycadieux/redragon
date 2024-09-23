import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../dbfirebase';

export default function ContactFormScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        if (!name || !email || !message) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        try {
            await addDoc(collection(db, 'db'), {
                name,
                email,
                message,
                createdAt: new Date(),
            });

            Alert.alert('Thank You!', 'Your message has been sent successfully.');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while sending your message. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact & Support</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.textArea}
                placeholder="Your Message"
                multiline
                numberOfLines={5}
                value={message}
                onChangeText={setMessage}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        textAlignVertical: 'top',
    },
});
