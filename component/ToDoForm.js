import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                placeholderTextColor="#888" // Lighter text color for the placeholder
                onChangeText={setTaskText}
                value={taskText}
            />
            <Button
                title="Add Task"
                onPress={() => {
                    addTask(taskText);
                    setTaskText('');
                }}
                color="#5E84E2" // Adjust button color here
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#F3F4F6', // Light background color for the form
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FFF', // White background color for input
        color: '#333', // Darker text color for better readability
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        borderRadius: 5, // Added border radius for a rounded input field
    },
});

export default ToDoForm;
