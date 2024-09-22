import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { auth, db } from '../firebase';
import { collection, addDoc, query, onSnapshot, orderBy } from 'firebase/firestore';

export default function ChatScreen() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(messagesList);
        });
        return () => unsubscribe();
    }, []);

    const sendMessage = async () => {
        if (message) {
            await addDoc(collection(db, 'messages'), {
                text: message,
                createdAt: new Date(),
                user: auth.currentUser.email,
            });
            setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.username}>{item.user}</Text>
                        <Text style={styles.message}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message"
                    value={message}
                    onChangeText={setMessage}
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    username: {
        fontWeight: 'bold',
    },
    message: {
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
});

