import React from 'react';
import { Button } from 'react-native';
import { Text } from 'react-native';
import MainLayout from '../Layouts/MainLayout.jsx';
function About({navigation}) {
    return (
        <MainLayout>
            <Text>About Screen</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        </MainLayout>
    )
}
export default About;