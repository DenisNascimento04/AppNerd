import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import Reanimated, {BounceInRight, FadeInUp} from 'react-native-reanimated';
import data from '../../BDTeste/banco.json';
import { Header } from '../../components/Header';
import { ItensPersonagensPadrao } from '../../components/Itens';
import { ModalPerso } from '../../components/ModalPerso';
import { PropsPerso } from '../../services/types';
import { theme } from '../../themes';
import { styles } from './styles';

const { width, height } = Dimensions.get('screen')

export function PesquisarPerso() {

    const route = useRoute();
    // @ts-ignore
    const [text, setText] = useState<string>(route.params?.text);
    const [pesquisa, setPesquisa] = useState(() => {
        const filter: any = [];
        var cont = 0;

        if(text != ''){
            data.personagens.map((item) => {
                if (item.nomePerso.includes(text) || item.nome.includes(text)) {
                    filter.push({ ...item, id_complex: cont })
                    cont++;
                }
            })
            return filter
        }
        return data.personagens.sort((a,b) => {
            if (a.nomePerso > b.nomePerso) {
                return 1;
            }
            if (a.nomePerso < b.nomePerso) {
                return -1;
            }
            return 0;
        });
    });

    useEffect(() => {
        const filter: any = [];
        var cont = 0;

        if(text != ''){
            data.personagens.map((item) => {
                if (item.nomePerso.includes(text) || item.nome.includes(text)) {
                    filter.push({ ...item, id_complex: cont })
                    cont++;
                }
            })
            setPesquisa(filter);
            Filtro(filter, listaFiltro);
        }else{
            setPesquisa(data.personagens.sort());
            // Filtro(data.personagens.sort(), teste);
        }
    },[text])
    
    const modalTeste = useRef<Modalize>(null);
    const [dataItem, setData] = useState<PropsPerso>();
    const [listaFiltro, setListaFiltro] = useState<string[]>([]);

    const [buttonHeroi, setButtonHeroi] = useState(false);
    const [buttonVilao, setButtonVilao] = useState(false);
    const [buttonAnti, setButtonAnti] = useState(false);
    
    
    const animatedValue = useRef(new Animated.Value(0)).current;
    const animation = (toValue: number) => Animated.timing(animatedValue, {
        toValue, 
        duration: 500,
        useNativeDriver: false
    })
    const [indexUser, setIndexUser] = useState(0);

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setData(data)
    }

    const onPressUser = () => {
        setIndexUser(indexUser === 1 ? 0 : 1)
        animation(indexUser === 1 ? 0 : 1).start()
        // setSistemFilter([]);
    } 

    function Filtro(dataF: PropsPerso[], list: string[]) {
        if (!list.length) {
            const a = text;
            setText("");
            setText(a);
            setIndexUser(0)
            animation(0).start()
            // setPesquisa(fil);
        }else{
            const filter: any = [];
            const a = text;
            setText("");
            setText(a);

            dataF.map((item) => {
                if (list.includes(item.tipoP)) {
                    return filter.push({...item});
                }
            })
            // console.log(filter.length)
            setIndexUser(0)
            animation(0).start()
            setPesquisa(filter);
        }
    }

    function Clear() {
        setListaFiltro([]);
        // setIndexUser(0)
        animation(0).start()
        setButtonHeroi(false);
        setButtonVilao(false);
        setButtonAnti(false);
        const filter: any = []
        data.personagens.map((item) => {
            if (item.nomePerso.includes(text) || item.nome.includes(text)) {
                filter.push({ ...item})
            }
        })
        setPesquisa(filter);
    }

    function AddList(text: string) {
        if (!listaFiltro.includes(text)) {
            setListaFiltro(array => [...array, text])
        }else{
            setListaFiltro(listaFiltro.filter((item) => item != text))
        }
    }

    return(
        <View style={{ flex: 1, backgroundColor: '#E6E5E4' }}>
            <Animated.View style={[{ width: width, backgroundColor: '#000', position: 'absolute', top: 210, zIndex: 1 },{
                transform: [
                    {
                        perspective: 400
                    },
                    {
                        translateY: animatedValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [-400, -250, 0],
                        })
                    },
                ]
            }]}>
                <View style={{ paddingHorizontal: 8, paddingVertical: 5 }}>
                    <View>
                        <Text style={styles.tituloMF}>Personagens</Text>
                        <View style={{ paddingHorizontal: 8 }}>
                            <Text style={styles.subtituloMF}>Tipos</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Pressable 
                                    style={[ styles.buttonsMF,{backgroundColor: buttonHeroi ? theme.colors.light :"red"} ]} 
                                    onPress={() => {AddList("Heroi"), setButtonHeroi(!buttonHeroi)}}
                                >
                                    <Text style={styles.textMF}>Heroi</Text>
                                </Pressable>
                                <Pressable
                                    style={[ styles.buttonsMF,{backgroundColor: buttonVilao ? theme.colors.light :"red"} ]} 
                                    onPress={() => {AddList("Vilão"), setButtonVilao(!buttonVilao)}}
                                >
                                    <Text style={styles.textMF}>Vilão</Text>
                                </Pressable>
                                <Pressable
                                    style={[ styles.buttonsMF,{backgroundColor: buttonAnti ? theme.colors.light :"red"} ]} 
                                    onPress={() => {AddList("Anti-Heroi"), setButtonAnti(!buttonAnti)}}
                                >
                                    <Text style={styles.textMF}>Anti-Heroi</Text>
                                </Pressable>
                            </View>
                            <Text>Editora</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Pressable>
                                    <Text>Marvel</Text>
                                </Pressable>
                                <Pressable>
                                    <Text>DC Comics</Text>
                                </Pressable>
                                <Pressable>
                                    <Text>Vertigo</Text>
                                </Pressable>
                                <Pressable>
                                    <Text>Image Comics</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    {/* <View>
                        <Text>Comics</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Pressable>
                                <Text>Luxo</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Deluxe</Text>
                            </Pressable>
                        </View>
                    </View> */}
                    <View style={{ width: width, alignItems: 'center' }}>
                        <Pressable onPress={() => Filtro(pesquisa, listaFiltro)} style={{ backgroundColor: theme.colors.bold, padding: 10 }}>
                            <Text style={{ color: '#fff' }}>Filtrar</Text>
                        </Pressable>
                        <Pressable onPress={() => Clear()} style={{ backgroundColor: theme.colors.bold, padding: 10 }}>
                            <Text style={{ color: '#fff' }}>Limpar</Text>
                        </Pressable>
                    </View>
                </View>
            </Animated.View>

            <Reanimated.View style={{ backgroundColor: theme.colors.bold, zIndex: 2 }} entering={FadeInUp.duration(500)}>
                <Header  back title={text === "" ? "Pesquise" : "Pesquisa: " + text} />
                <View style={{ marginTop: 10 }}>
                    <View style={styles.containerInput}>
                        <View style={styles.viewInput}>
                            <TouchableOpacity onPress={() => {}} style={styles.buttonInput}>
                                <Icons name='search' size={20} color='#858383' />
                            </TouchableOpacity>
                            <TextInput  
                                style={{ flex: 1 }}
                                onChangeText={(text) => setText(text)}
                                placeholder='Pesquisa...'
                                placeholderTextColor='#858383'
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 20, marginTop: 10 }}>
                    <Pressable onPress={() => onPressUser()}>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 15, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Icons name='filter' color='#fff' size={18} />
                        </LinearGradient>
                    </Pressable>
                </View>
            </Reanimated.View>

            <Reanimated.View entering={BounceInRight.duration(500)}>
                <FlatList 
                    data={pesquisa}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 250, paddingTop: 20}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ItensPersonagensPadrao 
                            data={item}
                            navig={() => OpenModal(item)}
                        />
                    )}
                />
            </Reanimated.View>

            <Modalize
                ref={modalTeste}
                modalHeight={height-100}
                disableScrollIfPossible={false}
                scrollViewProps={{
                    scrollEnabled: undefined,
                    showsVerticalScrollIndicator: false,
                }}
                handlePosition='inside'
            >
                <ModalPerso
                    // @ts-ignore
                    data={dataItem}
                    close={() => {}}
                />
            </Modalize>
        </View>
    );
}
