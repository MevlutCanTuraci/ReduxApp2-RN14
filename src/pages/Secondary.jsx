import React from 'react'
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useSelector } from 'react-redux';

const Secondary = () => {

    const list = useSelector(s => s.nameList)
    const username = useSelector(s => s.username);


    return (
        <SafeAreaView style={{margin: 5,}}>

            <Text style={{fontSize: 29}}>
                Secondary
            </Text>

            <View style={{padding: 10, margin: 5,}}>
                <Text style={{fontSize: 22}}>
                    Kullanıcı adı: {username}
                </Text>
            </View>

            <View style={{paddingTop: 10, margin: 5,}}>

                <FlatList 
                    data={list}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(_, index) => index.toString()}
                />

            </View>

        </SafeAreaView>
    );

}

export default Secondary;