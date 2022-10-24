import { Dimensions, FlatList, Image, LogBox, Text, View } from 'react-native';
import data from '../../BDTeste/banco.json';
import { useSelector } from 'react-redux';
import { ButtonBack } from '../../components/ButtonBack';
import { RootState } from '../../store/index';
import { styles } from './styles';
import { useEffect, useState } from 'react';

const { width } = Dimensions.get('window');
const iconsHerois = require('../../assets/Icon-Herois.png')
const iconsViloes = require('../../assets/Icon-Viloes.png')
const iconsAnti = require('../../assets/Icon-Anti.png')

export default function PageLista() {

    const usuario = useSelector((state: RootState) => state.usuario);
    const [numHerois, setNumHerois] = useState(0);
    const [numAnti, setNumAnti] = useState(0);
    const [numViloes, setNumViloes] = useState(0);

    const setFavoritos = data.personagens.filter((item) => {
        if (usuario.favoritos.includes(item.id)) {
            return {...item}
        }
    })

    const teste = () => {
        setFavoritos.forEach((item) => {
            if (item.tipoP === "Heroi") {
                setNumHerois(numHerois + 1);
            }
            if (item.tipoP === "Anti-Heroi") {
                setNumAnti(numAnti + 1);
            }
            if (item.tipoP === "Vilao") {
                setNumViloes(numViloes + 1);
            }
        })
    }

    useEffect(() => {
        teste();
    },[])

  return(
    <View style={{ flex: 1 }}>
        <View style={{ width: width }}>
            <Image 
                source={{ uri: usuario.imageFundo }} 
                style={{ width: "100%", height: "100%", position: 'absolute', top: 0 }}
                resizeMode='cover' 
            />
            <View style={{ backgroundColor: 'rgba(58,58,58,.5)' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, marginBottom: 30, marginTop: 40 }}>
                    <ButtonBack />
                    <Text style={styles.title}>Minha Lista</Text>
                </View>
                
                <View style={styles.info}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={iconsHerois} style={{ width: 32, height: 24 }} /> 
                        <Text style={[styles.textHeader, { marginTop: 2, marginBottom: 7 }]}>{numHerois}</Text>
                        <Text style={styles.textHeaderOpacity}>Herois</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={iconsViloes} style={{ width: 24, height: 26 }} />
                        <Text style={[styles.textHeader, { marginTop: 2, marginBottom: 7 }]}>0</Text>
                        <Text style={styles.textHeaderOpacity}>Vilões</Text> 
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={iconsAnti} style={{ width: 26, height: 26 }} />
                        <Text style={[styles.textHeader, { marginTop: 2, marginBottom: 7 }]}>0</Text>
                        <Text style={[styles.textHeaderOpacity, {maxWidth: 50, textAlign: 'center'}]}>Anti- Herois</Text> 
                    </View>
                </View>
            </View>
        </View>
        <View style={{ flex: 1, paddingTop: 20 }}>
            {/* {setFavoritos === [] ? 
                <Text>Sem Favoritos</Text>
            :  */}
                <FlatList 
                    data={setFavoritos}
                    keyExtractor={(_,i) => i.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{ width: 100, height: 110, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ position: 'absolute', backgroundColor: item.corPri, width: 70, height: 70, borderRadius: 70 }} />
                            <Image source={{ uri: item.thamb }} style={{ width: 100, height: 100, top: -10 }} />
                        </View>
                    )}
                />
            {/* } */}
        </View>
    </View>
  );
}