import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Animated, {BounceInRight, FadeInLeft, FadeInUp} from 'react-native-reanimated';
import data from '../../BDTeste/banco.json';
import { CompPesquisa } from '../../components/CompPesquisa';
import { Header } from '../../components/Header';
import { ItemPersonagensBack, ItensPersonagensPadrao } from '../../components/Itens';
import { ModalPerso } from '../../components/ModalPerso';
import { PropsPerso } from '../../services/types';

const { height } = Dimensions.get('screen')

export function PageVerTudo() {

    const route = useRoute();
    // @ts-ignore
    const pesquisa = route.params?.pesquisa;
    // @ts-ignore
    const text = route.params?.text;

    const modalTeste = useRef<Modalize>(null);
    const [dataItem, setData] = useState<PropsPerso>();
    const [editora, setEditora] = useState('');

    if (text) {
        function SetFiltargem() {
            const filter: any = [];
            var cont = 0;
    
            data.personagensMarvel.map((item) => {
                // @ts-ignore
                if (item.tipoP === text) {
                    filter.push({ ...item, id_complex: cont })
                    cont++;
                }
            })
            data.personagensDC.map((item) => {
                // @ts-ignore
                if (item.tipoP === text) {
                    filter.push({ ...item, id_complex: cont })
                    cont++;
                }
            })
            return filter
        }
        const filtro = SetFiltargem();

        function OpenModal(data: PropsPerso) {
            modalTeste.current?.open()
            setData(data)
        }
    
        return(
            <View style={{ paddingTop: 30, flex: 1, backgroundColor: '#E6E5E4' }}>
                <StatusBar style='light' backgroundColor='#CA2015' />
                <Animated.View style={{ backgroundColor: '#CA2015' }} entering={FadeInUp.duration(500)}>
                    <Header back title={text} />
                    <View style={{ marginTop: 10 }}>
                        <CompPesquisa />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 20, marginTop: 10 }}>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 25, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Text style={{ color: "#fff" }}>All</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 25, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Text style={{ color: "#fff" }}>Filtro</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 25, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Text style={{ color: "#fff" }}>Editora</Text>
                        </LinearGradient>
                    </View>
                </Animated.View>
                <Animated.View entering={BounceInRight.duration(500)}>
                    <FlatList 
                        data={filtro}
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
                </Animated.View>
                <Modalize
                    ref={modalTeste}
                    modalHeight={height-79}
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
    }else{

    
        function SetFiltargem() {
            const filter: any = [];
            var cont = 0;

            if(pesquisa != ''){
                data.personagensMarvel.map((item) => {
                    if (item.nomeHeroi.includes(pesquisa) || item.nome.includes(pesquisa)) {
                        filter.push({ ...item, id_complex: cont })
                        cont++;
                    }
                })
                data.personagensDC.map((item, index) => {
                    if (item.nomeHeroi.includes(pesquisa) || item.nome.includes(pesquisa)) {
                        filter.push({ ...item, id_complex: cont })
                        cont++;
                    }
                })
                return filter
            }
            return null;
        }

        const filter = SetFiltargem();

        function OpenModal(data: PropsPerso) {
            modalTeste.current?.open()
            setData(data)
        }

        return(
            <View style={{ paddingTop: 30, flex: 1, backgroundColor: '#E6E5E4' }}>
                <StatusBar style='light' backgroundColor='#CA2015' />
                <Animated.View style={{ backgroundColor: '#CA2015' }} entering={FadeInUp.duration(500)}>
                    <Header back title={"Pesquisa: " + pesquisa} />
                    <View style={{ marginTop: 10 }}>
                        <CompPesquisa />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 20, marginTop: 10 }}>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 25, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Text style={{ color: "#fff" }}>All</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 25, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Text style={{ color: "#fff" }}>Filtro</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#B31217','#E52D27']} style={{ backgroundColor: "#585858", paddingHorizontal: 25, paddingVertical: 5, marginRight: 7, borderRadius: 20}}>    
                            <Text style={{ color: "#fff" }}>Editora</Text>
                        </LinearGradient>
                    </View>
                </Animated.View>
                <Animated.View entering={BounceInRight.duration(500)}>
                    <FlatList 
                        data={filter}
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
                </Animated.View>
                <Modalize
                    ref={modalTeste}
                    modalHeight={height-79}
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


}