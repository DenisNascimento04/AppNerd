import { useState } from 'react';
import api from '../BDTeste/api';
import data from '../BDTeste/banco.json';
import { PropsPerso } from '../services/types';

export const BHerois = () => {

    const dataViloes: any = []

    data.personagens.map((item) => {
        if (item.tipoP === "Heroi" ) {
            dataViloes.push({ ...item })
        }
    })

    return dataViloes;

} 
export const BViloes = () => {
    const dataViloes: any = []

    data.personagens.map((item) => {
        if (item.tipoP === "Vilão" ) {
            dataViloes.push({ ...item })
        }
    })

    return dataViloes;
} 
export const BAntiHerois = () => {
    const dataAnti: any = []

    data.personagens.map((item) => {
        if (item.tipoP === "Anti-Heroi" ) {
            dataAnti.push({ ...item })
        }
    })

    return dataAnti;
} 