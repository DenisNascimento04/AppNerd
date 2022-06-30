import data from '../BDTeste/banco.json';

export const BHerois = () => {
    const dataHerois: any = [];

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Heroi" ) {
            dataHerois.push({ ...item })
        }
    })

    return dataHerois;
} 
export const BViloes = () => {
    const dataViloes: any = []

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Vilão" ) {
            dataViloes.push({ ...item })
        }
    })

    return dataViloes;
} 
export const BAntiHerois = () => {
    const dataAnti: any = []

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Anti-Heroi" ) {
            dataAnti.push({ ...item })
        }
    })

    return dataAnti;
} 