import React from 'react';
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
    return (
        <ScrollView style={styles.container}>
            {tasks.map((task, index) => (
                <Pressable
                    key={index}
                    android_ripple={{ color: '#ddd' }} // Adds a ripple effect on Android for feedback
                    style={({ pressed }) => [
                        styles.task,
                        { backgroundColor: pressed ? '#f0f0f0' : '#ffffff' }, // Changes background color when pressed
                    ]}
                >
                    <View>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        margin: 10,
        padding: 20, // Increased padding for more space
        borderWidth: 2, // Thicker border for better visibility
        borderColor: '#5E84E2', // Softer border color
        borderRadius: 10,
        backgroundColor: '#ffffff', // Light background color
        shadowColor: '#000', // Shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4, // Elevation for Android to create shadow
    },
    taskText: {
        fontSize: 18, // Adjusted font size for better readability
        color: '#333', // Darker color for the text
        fontWeight: 'bold', // Bold text for better readability
    },
});

export default ToDoList;
