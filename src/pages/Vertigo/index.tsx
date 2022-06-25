import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import data1 from '../../BDTeste/banco.json';
import { SlidePersoDes } from '../../components/Slides';
import { styles } from './styles';
import { propsDrawer } from '../../services/types';
import { PageBase } from '../../components/PageBase';

const { width } = Dimensions.get('window')

export function Vertigo(){

    // var databaseF = data1.personagensVertigo;

    return(
        <PageBase title='Vertigo'>
            {/* <SlidePersoDes
                data={databaseF}
                index={0}
            /> */}
        </PageBase>
    );
}