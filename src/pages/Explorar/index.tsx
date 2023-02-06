import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, FlatList, Pressable, ScrollView, ActivityIndicator, Image, TouchableOpacity, TextInput, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';


import data from '../../BDTeste/banco.json';

import { styles } from './styles';
import { ItemPersonagens, ItemPersonagensBack } from '../../components/Itens';
import { PropsPerso, propsStack } from '../../services/types';
import { RootState } from '../../store/index';
import { ModalPerso } from '../../components/ModalPerso';
import { BAntiHerois, BHerois } from '../../mente';
import { theme } from '../../themes';
import { Modal } from '../../components/Modal';

const { width, height } = Dimensions.get('window');

export function Explorar(){

    const navigationStack = useNavigation<propsStack>()
    const usuario = useSelector((state: RootState) => state.usuario)
    const [pesquisa, setPesquisa] = useState("");
    const [modal, setModal] = useState(false); 
    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const [activy, setActivy] = useState(true); 
    const dataHeroi:PropsPerso[] = BHerois();
    const dataAnti:PropsPerso[] = BAntiHerois();

    const scrollX = useRef(new Animated.Value(0)).current;
    const item_size = width-100;

    useEffect(() => {
        // setDataPage();
        setTimeout(() => {
            setActivy(false)
        }, 1000);
    },[])


    function OpenModal(data: PropsPerso) {
        setDataItem(data);
        setTimeout(() => {
            setModal(!modal)
        }, 500);
    }

    return(
        <>
                {activy ? 
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.fundo }}>
                        <ActivityIndicator color='red' size='large' />
                    </View>
                :
                    <ScrollView contentContainerStyle={{ paddingBottom: 80, backgroundColor: theme.colors.fundo }} scrollEventThrottle={16}>
                        <View style={{ paddingTop: 40, backgroundColor: theme.colors.fundo }}>
                            <View style={styles.header}>
                                <View style={{ alignItems: 'center', flex: 1, marginRight: 8 }}>
                                    <View style={styles.viewInput}>
                                        <TouchableOpacity onPress={() => {}} style={styles.buttonInput}>
                                            <Icons name='search' size={20} color='#858383' />
                                        </TouchableOpacity>
                                        <TextInput  
                                            style={{ flex: 1 }}
                                            onChangeText={(text) => setPesquisa(text)}
                                            placeholder='Pesquisa...'
                                            placeholderTextColor='#858383'
                                            onSubmitEditing={() => navigationStack.navigate('PesquisarPerso', {text: pesquisa})}
                                        />
                                    </View>
                                </View>
                                <Pressable 
                                    style={{ backgroundColor: '#fff',  elevation: 5, padding: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 50, marginRight: 32 }} 
                                    onPress={() => {}}
                                >
                                    <Image 
                                        source={{ uri: usuario.imagePerfil }} 
                                        style={{ width: 40, height: 40, borderRadius: 30 }} 
                                    />
                                </Pressable>
                            </View>

                            <View style={{ width: width, height: 190, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20 }}>
                                <View style={{ backgroundColor: theme.colors.contraste, width: "100%", height: "100%", flexDirection: 'row', borderRadius: 15 }}>
                                    <LinearGradient 
                                        colors={[ "#A32032", theme.colors.contraste]} 
                                        style={{ width: "80%", borderRadius: 15, paddingLeft: 20, paddingVertical: 10 }} 
                                        end={[ 1, 0 ]}
                                    >
                                        <View style={{ maxWidth: 150 }}>
                                            <Text style={{ color: theme.colors.contraste, fontSize: 20, fontFamily: theme.titleItalic }}>Explore o vasto mundo dos quadrinho </Text>
                                            <Text style={{ color: theme.colors.contraste, fontSize: 14, fontFamily: theme.textItalic }}>Leia, divirtas-se e se apaixone!</Text>
                                            <Text style={{ color: theme.colors.contraste, fontSize: 12, fontFamily: theme.text }}>Viaje por ai </Text>
                                        </View>
                                    </LinearGradient>
                                    <Image source={{ uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec2e54be-713e-48ff-843d-78da76a24407/da1q1y1-810c3296-581c-4fbb-8209-f587c6c13da9.png/v1/fill/w_1009,h_727,strp/deadpool_heart_transparent_by_scoobymcsnack_da1q1y1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZWMyZTU0YmUtNzEzZS00OGZmLTg0M2QtNzhkYTc2YTI0NDA3XC9kYTFxMXkxLTgxMGMzMjk2LTU4MWMtNGZiYi04MjA5LWY1ODdjNmMxM2RhOS5wbmciLCJ3aWR0aCI6Ijw9MTAwOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.npn9uIwERG2lDq9rsPyvryOpOuBKV0X3RrucxmbiIhU" }} 
                                        style={{ width: 210, height: "110%", top: -14, position: 'absolute', left: 150 }}
                                    />
                                </View>
                            </View>

                            <View style={{ }}>
                                <Text style={[styles.title, { marginLeft: 20, marginBottom: 6}]}>Favoritos da Galera</Text> 
                                <FlatList 
                                    data={dataHeroi?.slice(0,10)}
                                    keyExtractor={(item, index) => index.toString()}
                                    horizontal
                                    snapToInterval={160}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ alignItems: 'center', paddingTop: 5, paddingBottom: 20, paddingLeft: 15}}
                                    renderItem={({ item }) => (
                                        <Pressable onPress={() => OpenModal(item)} style={{ backgroundColor: item.corPri, width: 80, height: 80, borderRadius: 40, alignItems: 'center', marginHorizontal: 10 }}>
                                            <Image 
                                                source={{ uri: item.thamb }}
                                                style={{ width: 100, height: 100, top: -10 }}
                                                resizeMode='contain'
                                            />
                                        </Pressable>
                                    )}
                                />
                            </View>

                            <View style={{ marginTop: 8 }} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Herois</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Herois" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataHeroi?.slice(0,8)} 
                                    keyExtractor={(_,index) => index.toString()}
                                    horizontal
                                    snapToInterval={160}
                                    onContentSizeChange={(w: number, h: number) => {w = 180, h = 250}}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => navigationStack.navigate("PagePerso", { data: item })} 
                                        />
                                    )}
                                />
                            </View>

                            <View style={{ marginTop: 8 }} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Anti-Herois</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Herois" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataAnti} 
                                    keyExtractor={(_,index) => index.toString()}
                                    horizontal
                                    snapToInterval={160}
                                    onContentSizeChange={(w: number, h: number) => {w = 180, h = 250}}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => navigationStack.navigate("PagePerso", { data: item })} 
                                        />
                                    )}
                                />
                            </View>

                            <View style={{ marginTop: 8 }} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Vertigo</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Herois" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={data.teste} 
                                    keyExtractor={(_,index) => index.toString()}
                                    horizontal
                                    snapToInterval={160}
                                    onContentSizeChange={(w: number, h: number) => {w = 180, h = 250}}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => navigationStack.navigate("PagePerso", { data: item })} 
                                        />
                                    )}
                                />
                            </View>

                            {/* <LinearGradient end={[ 1,0 ]} colors={[ theme.colors.complementar, "#8A69DB" ]} style={{ borderRadius: 18 }} > 
                                <Animated.FlatList 
                                    data={dataHeroi?.slice(0,5)}
                                    keyExtractor={(_,i) => i.toString()}
                                    horizontal
                                    contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 44 }}
                                    showsHorizontalScrollIndicator={false}
                                    scrollEventThrottle={16}
                                    decelerationRate={1}
                                    snapToInterval={item_size}
                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                        { useNativeDriver: true }
                                    )}
                                    renderItem={({item, index}) => {

                                        const inputRange = [
                                            (index - 1) * (item_size),
                                            index * (item_size),
                                            (index + 1) * (item_size),
                                        ];
                                        const translateY = scrollX.interpolate({
                                            inputRange,
                                            outputRange: [-20, 0, -20]
                                        })
                                        const scale = scrollX.interpolate({
                                            inputRange,
                                            outputRange: [.8, 1, .8]
                                        })
                                    
                                        return(
                                            <Animated.View style={{ transform: [{ scale }], width: item_size, alignItems: 'center',  }}>
                                                <ItemPersonagens 
                                                    data={item}
                                                    navig={() => OpenModal(item)}
                                                />
                                            </Animated.View>
                                        )
                                    }}
                                />
                            </LinearGradient> */}

                        </View>
                    </ScrollView>
                }
        </>
    );
}