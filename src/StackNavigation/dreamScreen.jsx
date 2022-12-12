import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default function DreamScreen() {

    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);

    useEffect(() => {
        getList();
    },[])

    const getList = async () => {
        await axios.get(`https://6393f3abab513e12c519188e.mockapi.io/Dream`)
            .then(res => {
                setData(res.data);
                console.log(res.data.price);
            })
            .catch(err => {
                console.log('error: ' + err);
            })
            .finally(() => {
                setIsloading(false);
            })
    }

    const Items = (item) => {
        return (
            <TouchableOpacity>
                <View style={{ width: 175, height: 180, borderWidth: 0.2, alignItems: 'center', borderRadius: 10, backgroundColor: '#e9e9e9', marginBottom: 15 }}>
                    <Image source={{ uri: 'https://i.pinimg.com/564x/ef/c8/67/efc867dee1cddc8b15f98584668dbac9.jpg' }}
                        style={{ width: 100, resizeMode: 'contain', height: 120, }} />
                    <View style={{ width: '85%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.productName}</Text>
                            <Text style={{ fontSize: 15 }}>1000</Text>
                        </View>
                        <TouchableOpacity>
                            <Icons name='heart-outline' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ width: '90%', height: 70, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Icons name='grid' size={18} />
                <View style={{ width: 200, height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Welcom back{'\n'}Humari</Text>
                    <Image source={{ uri: 'https://i.pinimg.com/564x/26/bb/81/26bb818defacbef9f42f5f37891d39e2.jpg' }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                </View>
            </View>

            {/* search bar */}
            <View style={{ width: '90%', height: 40, borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', borderRadius: 20, marginTop: 20 }}>
                <Icons name='search' size={21} style={{ marginHorizontal: 5 }} />
                <TextInput style={{ width: '80%', fontSize: 18 }} placeholder='Search' />
                <Icons name='camera-outline' size={25} style={{ marginHorizontal: 5 }} />
            </View>

            {/* option bar */}
            <View style={{ width: '90%', height: 40, borderWidth: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', borderRadius: 20, marginTop: 20 }}>
                <TouchableOpacity style={{ width: 55, height: '85%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 20 }} >
                    <Text style={{ color: 'white' }}>Option</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 55, height: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 1 }} >
                    <Text>Option</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 55, height: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 1 }} >
                    <Text>Option</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 55, height: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 1 }} >
                    <Text>Option</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 55, height: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 1 }} >
                    <Text>Option</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: '90%', height: '70%', borderWidth: 1, marginTop: 10, flex: 1, justifyContent: 'space-between' }}>
                {
                    isloading ? <ActivityIndicator size={40} style={{marginTop:200}} /> :
                        <FlatList
                            style={{ width: '100%' }}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: "space-between" }}
                            data={data}
                            renderItem={Items}
                            keyExtractor={item => item.id}
                        />
                }

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})