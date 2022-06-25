import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import data1 from '../../BDTeste/banco.json';
import { propsDrawer, propsStack, PropsPerso } from '../../services/types';
import { PageBase } from '../../components/PageBase';
import Carousel from 'react-native-snap-carousel';
import { ItemPersonagens } from '../../components/Itens';
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { ModalPerso } from '../../components/ModalPerso';

const { width, height } = Dimensions.get('window')

export function DC(){

    const navigation = useNavigation<propsStack>();
    const usuario = useSelector((state: RootState) => state.usuario)
    const modalTeste = useRef<Modalize>(null); 
    const [dataItem, setDataItem] = useState<PropsPerso>();

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setDataItem(data)
    }

    const dataHerois: any = [];

    data1.personagensDC.map((item) => {
        if (item.tipoP === "Heroi" ) {
            dataHerois.push({ ...item })
        }
        if (item.tipoP === "Vilao" ) {
            dataHerois.push({ ...item })
        }
        // if (item.tipoP === "Anti-Heroi" ) {
        //     dataHerois.push({ ...item })
        // }
    })

    return(
        <PageBase backgroudColor="#0DBFF9" dataModal={dataItem} modalProps={modalTeste} frase={usuario.frase} image={usuario.imagePerfil} title='DC'>
            <Carousel
                layout={'default'}
                data={dataHerois}
                firstItem={0}
                sliderWidth={width}
                itemWidth={300}
                renderItem={({item}) => {
                    return(
                        <ItemPersonagens 
                            // @ts-ignore 
                            data={item}
                            // @ts-ignore 
                            estilo={item.estilo}
                            // @ts-ignore 
                            navig={() => OpenModal(item)}
                        />
                    );
                }}
            />
        </PageBase>
    );
}