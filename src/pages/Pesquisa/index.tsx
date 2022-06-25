import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Icons from 'react-native-vector-icons/Ionicons';

import data from '../../BDTeste/banco.json';
import { CompPesquisaCont } from '../../components/CompPesquisa';
import { ItemPersonagensBack, ItensPersonagensPesquisa } from '../../components/Itens';
import { ModalPerso } from '../../components/ModalPerso';
import { PropsPerso, propsStack } from '../../services/types';
import { styles } from './styles';

export function Pesquisa(){
    const route = useRoute(); 
    const navigation =  useNavigation<propsStack>();
    const modalTeste = useRef<Modalize>(null);
    // @ts-ignore
    const [text, setText] = useState(route.params?.text);
    const [openSeach, setOpenSeach] = useState(false)
    const [dataItem, setData] = useState<PropsPerso>();
    const [editora, setEditora] = useState('');

    const filter = SetFiltargem();
    
    function SetFiltargem() {
        const filter: any = [];
        var cont = 0;

        if(text != ''){
            data.personagensMarvel.map((item) => {
                if (item.nomeHeroi.includes(text) || item.nome.includes(text)) {
                    filter.push({ ...item, id_complex: cont })
                    cont++;
                }
            })
            data.personagensDC.map((item, index) => {
                if (item.nomeHeroi.includes(text) || item.nome.includes(text)) {
                    filter.push({ ...item, id_complex: cont })
                    cont++;
                }
            })
            return filter
        }
        return null;
    }

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setData(data)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons name='arrow-back' size={22} color='#000' />
                </TouchableOpacity>
                <Text>Mundo Nerd</Text>
                <Pressable style={{ }} onPress={() => setOpenSeach(true)}>
                    <Icons name='search' size={22} color='#000' />
                </Pressable>
            </View>
            {openSeach ? 
                <CompPesquisaCont 
                    setText={(text) => setText(text)}
                />
            : null}
            <Text style={{ color: '#9E9D9A', marginLeft: 10, marginBottom: 10 }}>Resultado de "{text}"</Text>
            {filter != null ? 
                <FlatList 
                    data={filter}
                    contentContainerStyle={{ alignItems: 'center', paddingLeft: 10, paddingTop: 10 }}
                    keyExtractor={(item) => item.id_complex.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => modalTeste.current?.open()} style={{ marginRight: 10, marginBottom: 10 }}>
                            <ItensPersonagensPesquisa
                                data={item}
                            />
                        </Pressable>
                    )}
                />
            :
                <Text>Nenhum Resultado</Text>
            }
            <Modalize
                ref={modalTeste}
                modalHeight={770}
                disableScrollIfPossible={false}
                scrollViewProps={{
                    scrollEnabled: undefined,
                    showsVerticalScrollIndicator: false,
                }}
                handlePosition='inside'
            >
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <ModalPerso 
                        // @ts-ignore
                        data={dataItem}
                        editora={editora}
                    />
                </View>
            </Modalize>
        </View>
    );
}