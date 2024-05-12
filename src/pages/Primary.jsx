import React, { useState } from 'react'
import { Alert, Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux';


const Primary = () => {

    const [text, setText] = useState("");
    const [userName, setUsername] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({
            type: "ADD_NAME",
            payload: {
                name: text
            }
        });

        setText("");
    }

    const handleCleanList = () => {
        dispatch({
            type: "CLEAN_LIST"
        });

        dispatch({
            type: "CLEAN_USERNAME"
        });

        alert('Veriler temizlendi.');
    }

    const handleAddUsername = () => {
        dispatch({
            type: "SET_USERNAME",
            payload: {
                username: userName
            }
        });

        setUsername("");
    }

    return (
        <SafeAreaView style={{ margin: 5 }}>

            <Text style={{ fontSize: 29 }}>
                Primary
            </Text>

            <View style={{ margin: 10, borderWidth: 1, borderRadius: 4, padding: 7, borderColor: '#e0e0e0' }}>
                <TextInput
                    placeholder='İsim giriniz'
                    value={text}
                    onChangeText={setText}
                />
            </View>

            <View style={{ margin: 10, borderWidth: 1, borderRadius: 4, padding: 7, borderColor: '#e0e0e0' }}>
                <TextInput
                    placeholder='Kullanıcı ismi giriniz'
                    value={userName}
                    onChangeText={setUsername}
                />
            </View>

            <Button
                title='Ekle'
                onPress={handleAdd}
            />

            <Button
                title='Kullanıcı ismini kaydet'
                onPress={handleAddUsername}
            />

            <Button
                title='Temizle'
                onPress={handleCleanList}
            />

        </SafeAreaView>
    );

}

export default Primary;