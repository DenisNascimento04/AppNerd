import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { ItemPersonagensBack, ItemPersonagens } from '../Itens';
import { propsStack } from '../../services/types';

const { width } = Dimensions.get('window')

type PropsSlides = {
    data: [],
    index: number
}

export function SlideBackground(props: PropsSlides){

    const navigation = useNavigation<propsStack>();

    return(
        <Carousel
            layout={'default'}
            data={props.data}
            firstItem={props.index}
            sliderWidth={width}
            itemWidth={300}
            renderItem={({ item }) => {
                return(
                    <ItemPersonagensBack 
                        id={item.id}
                        imagens={item.imagens}
                        corPri={item.corPri}
                        logo={item.logo}
                        nomeHeroi={item.nomeHeroi} 
                        nome={item.nome}
                        editora={item.editora}
                        horizontal
                        navig={() => navigation.navigate('PagePerso',{id: item.id, edit: item.editora})} 
                    />
                );
            }}
        />
    );
}

export function SlidePersoDes(props: PropsSlides){

    const navigation = useNavigation<propsStack>();

    return(
        <Carousel
            layout={'default'}
            data={props.data}
            firstItem={props.index}
            sliderWidth={width}
            itemWidth={300}
            renderItem={({item}) => {
                return(
                    <ItemPersonagens 
                    id={item.id}
                    thamb={item.thamb}
                    corPri={item.corPri}
                    corSec={item.corSec}
                    logo={item.logo}
                    nomeHeroi={item.nomeHeroi} 
                    nome={item.nome}
                    desc={item.desc}
                    estilo={item.estilo}
                    navig={() => navigation.navigate('PagePerso',{id: item.id, edit: item.editora})} 
                />
                );
            }}
        />
    );
}