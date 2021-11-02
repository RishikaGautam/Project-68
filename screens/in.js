import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Instagram
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30
    }
})