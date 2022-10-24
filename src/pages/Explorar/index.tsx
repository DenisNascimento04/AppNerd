import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, FlatList, Pressable, ScrollView, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import Icons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';


import data from '../../BDTeste/banco.json';

import { styles } from './styles';
import { ItemPersonagens, ItemPersonagensBack, ItensQuadrinhos } from '../../components/Itens';
import { PropsPerso, propsStack } from '../../services/types';
import { RootState } from '../../store/index';
import { ModalPerso } from '../../components/ModalPerso';
import { BHerois, BViloes } from '../../mente';
import { theme } from '../../themes';
// import api from '../../BDTeste/api';

const { width, height } = Dimensions.get('window');

export function Explorar(){

    const navigationStack = useNavigation<propsStack>()
    const usuario = useSelector((state: RootState) => state.usuario)
    // const modal = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch();
    const [pesquisa, setPesquisa] = useState("");
    const modalTeste = useRef<Modalize>(null); 
    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const [activy, setActivy] = useState(true); 
    const dataHeroi:PropsPerso[] = BHerois();
    const dataVilao: PropsPerso[] = BViloes();
    const dataQuadrinhos = data.quadrinhos;
    const dataTeste: any = data.teste;

    useEffect(() => {
        // setDataPage();
        setTimeout(() => {
            setActivy(false)
        }, 1000);
    },[])


    function OpenModal(data: PropsPerso) {
        setDataItem(data)
        setTimeout(() => {
            modalTeste.current?.open()
        }, 300);
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
                                <View style={{ alignItems: 'center' }}>
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
                                    style={{ backgroundColor: '#fff', marginLeft: 20, elevation: 5, padding: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }} 
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

                            <View style={{ marginBottom: 5 }} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Herois</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Herois" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataHeroi?.slice(6,11)} 
                                    keyExtractor={(item,index) => index.toString()}
                                    horizontal
                                    snapToInterval={160}
                                    onContentSizeChange={(w: number, h: number) => {w = 180, h = 250}}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30, paddingRight: 20}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => OpenModal(item)} 
                                        />
                                    )}
                                />
                            </View>

                            <View style={{ marginBottom: 5 }}>
                                <Text style={[styles.title, { marginLeft: 20, marginBottom: 5}]}>Favoritos da Galera</Text> 
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

                            <View>
                                <FlatList 
                                    data={dataHeroi?.slice(0,7)}
                                    keyExtractor={(_,i) => i.toString()}
                                    horizontal
                                    contentContainerStyle={{ alignItems: 'center' }}
                                    snapToInterval={width-100}
                                    initialScrollIndex={dataHeroi?.slice(0,7).length/2.44}
                                    renderItem={({item, index}) => (
                                        <View style={{ width: width-100, alignItems: 'center', marginLeft: index === 0 ? 40 : 0, marginRight: index === dataHeroi?.slice(0,7).length-1 ? 40 : 0 }}>
                                            <ItemPersonagens 
                                                data={item}
                                                navig={() => OpenModal(item)}
                                            />
                                        </View>
                                    )}
                                />
                            </View>

                            <View style={{ marginBottom: 5 }} >
                                <FlatList 
                                    data={data.teste}
                                    keyExtractor={(_,i) => i.toString()}
                                    horizontal
                                    contentContainerStyle={{ alignItems: 'center' }}
                                    snapToInterval={width-100}
                                    renderItem={({item, index}) => (
                                        <View style={{ width: width-100, alignItems: 'center', marginLeft: index === 0 ? 40 : 0, marginRight: index === data.teste.length-1 ? 40 : 0 }}>
                                            <ItemPersonagens 
                                                data={item}
                                                navig={() => OpenModal(item)}
                                            />
                                        </View>
                                    )}
                                />
                            </View>

                        </View>
                    </ScrollView>
                }
            <Modalize
                ref={modalTeste}
                modalHeight={height}
                useNativeDriver={true}
                disableScrollIfPossible={true}
                scrollViewProps={{
                    scrollEnabled: undefined,
                    showsVerticalScrollIndicator: false,
                }}
                handlePosition='inside'
            >
                <ModalPerso
                    // @ts-ignore
                    data={dataItem}
                    close={() => modalTeste.current?.close()}
                />
            </Modalize>
        </>
    );
}