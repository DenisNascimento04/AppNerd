import React, { Ref, useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import Animated, { BounceInRight, FadeInLeft, BounceInLeft, BounceInUp, BounceInDown} from 'react-native-reanimated';
import { HeaderPage } from '../Header';

import { styles } from './styles';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { setFavoritos } from '../../store';
import { HabilidadeBar } from '../HabilidadeBar';
import { PropsPerso } from '../../services/types';
import  *  as  Progress  from  'react-native-progress' ;
import { StatusBar } from 'expo-status-bar';

const {width, height} = Dimensions.get('window')

type Props = {
    data: PropsPerso,
    close: () => void 
}

export function ModalPerso(props:Props){

    const usuario = useSelector((state: RootState) => state.usuario)
    const dispatch = useDispatch();

    const [data, setData] = useState(props.data);
    
    const [historia, setHistoria] = useState(true);
    const [poderes, setPoderes] = useState(false);
    const [habilidades, setHabilidades] = useState(false);
    const [criadores, setCriadores] = useState(false);
    const [loadingLogo, setloadingLogo] = useState(true);
    const [loadingThamb, setloadingThamb] = useState(true);
    const [active, setActive] = useState(true);
    const [stateFavoritos, setStateFavoritos] = useState(true);
    const [X, setX] = useState(0);

    const ferramentas = [
        (
            <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                {data.historia?.map((item, index) => (
                    <View key={index}>
                        <Text style={[ styles.subtitle,{ marginBottom: 10}]}>{item.title}</Text>
                        {item.text?.map((item, index) => (
                            <Text key={index} style={[styles.text, { marginBottom: 10 }]}>{item}</Text>
                        ))}
                    </View>
                ))}
            </View>
        ),
        (
            <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                {data.poderes?.map((item,index) => (
                    <Text key={index} style={{ fontSize: 14, lineHeight: 22 }} >- {item}</Text>
                ))}
            </View>
        ),
        (
            <View>
                <HabilidadeBar 
                    hab={data.habilidades}
                    color={data.corPri}
                />
            </View>
        ),
        (
            <View style={styles.viewCriadores}>
                {data.criadores.map((item, index: number) => (
                    <View key={index} style={{ marginBottom: 20, marginRight: index%2 === 0 ? 20 : 0 }}>
                        <Image 
                            source={{ uri: item.image }}
                            style={{ width: 150, height: 200, borderRadius: 10 }}
                        />
                        <Text style={styles.textCriadores} >
                            {item.nome}
                        </Text>
                    </View>
                ))}
            </View>
        )
    ]


    function LoadingImagens() {
        // console.log(loadingLogo, loadingThamb)
        if (loadingLogo === false &&  loadingThamb === false) {
            setActive(false)
        }
    }

    useEffect(() => {
        LoadingImagens();
    },[loadingLogo, loadingThamb])

    useEffect(() => {
       usuario.favoritos.forEach((item) => {
            if (item.id === data.id.toString() && item.editora === data.editora) {
                setStateFavoritos(true);
            }
        })
    },[usuario.favoritos])

    return(
        <View key={data.id}>
            <Animated.ScrollView 
                entering={BounceInDown.duration(1000)}
                scrollEventThrottle={16}
                contentContainerStyle={{ }}
            >
                <View style={[{backgroundColor: 'transparent', paddingTop: 410}]}>
                    <View style={{ backgroundColor: '#ffffff', paddingTop: 20, paddingBottom :50 }}>
                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={ styles.titles }>Sinopse</Text>
                            {data.sinopse?.map((item: any, index: number) => (
                                <Text key={index} style={[styles.text, { marginBottom: 10 }]}>{item}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={[ styles.titles, {marginLeft: 30}]}>Criadores</Text>
                            <View style={styles.viewCriadores}>
                                {data.criadores.map((item, index: number) => (
                                    <View key={index} style={{ marginBottom: 20, alignItems :'center', marginRight: index != data.criadores.length-1 ? 20 : 0 }}>
                                        <Image 
                                            source={{ uri: item.image }}
                                            style={{ width: 80, height: 80, borderRadius: 40 }}
                                        />
                                        <Text style={styles.textCriadores} >
                                            {item.nome}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.titles ,{marginLeft: 30} ]}>Imagens</Text>
                            <Carousel 
                                data={data.imagens}
                                layout={'default'}
                                sliderWidth={width}
                                firstItem={2}
                                itemWidth={300}
                                renderItem={({ item }) => (
                                    <View>
                                        <Image source={{ uri: item }} style={{ width: 300, height: 200 }} />
                                    </View>
                                )}
                            />
                        </View>
                        
                        <View style={styles.barTools} >
                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: historia ? data.corPri : "#fff" , 
                                    borderBottomWidth: historia ? 1 : 0, marginRight: 10 
                                }} 
                                onPress={() => { setX(0), setHistoria(true), setPoderes(false), setHabilidades(false), setCriadores(false)}}
                            >
                                <Text style={ styles.titles }>História</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: poderes ? data.corPri : "#fff", 
                                    borderBottomWidth: poderes ? 1 : 0, marginRight: 10 
                                }} 
                                onPress={() => { setX(1), setHistoria(false), setPoderes(true), setHabilidades(false), setCriadores(false)}}
                            >
                                <Text style={ styles.titles }>Poderes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: habilidades ? data.corPri : "#fff", 
                                    borderBottomWidth: habilidades ? 1 : 0, marginRight: 10 
                                }} 
                                onPress={() => { setX(2), setHistoria(false), setPoderes(false), setHabilidades(true), setCriadores(false)}}
                            >
                                <Text style={ styles.titles }>Habilidades</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: criadores ? data.corPri : "#fff", 
                                    borderBottomWidth: criadores ? 1 : 0 
                                }} 
                                onPress={() => { setX(3), setHistoria(false), setPoderes(false), setHabilidades(false), setCriadores(true)}}
                            >
                                <Text style={ styles.titles }>Criadores</Text>
                            </TouchableOpacity>
                        </View>

                        {historia ? 
                            <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                                {data.historia?.map((item, index) => (
                                    <View key={index}>
                                        <Text style={[ styles.subtitle,{ marginBottom: 10}]}>{item.title}</Text>
                                        {item.text?.map((item, index) => (
                                            <Text key={index} style={[styles.text, { marginBottom: 10 }]}>{item}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        : null}

                        {poderes ? 
                            <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                                {data.poderes?.map((item,index) => (
                                    <Text key={index} style={{ fontSize: 14, lineHeight: 22 }} >- {item}</Text>
                                ))}
                            </View>
                        : null}

                        {habilidades ? 
                             <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                     {data.habilidades.map((item, index) => (
                                        <View key={index} style={{ width: 150, height: 150, marginRight: index%2 === 0 ? 20 : 0, marginBottom: 15, alignItems: 'center', justifyContent: 'center' }}>        
                                            <Progress.Circle 
                                                size={120}
                                                progress={item.number * 10**-1}
                                                showsText={true}
                                                textStyle={{ color: "#000" }}
                                                formatText={() => <Text>{item.number}</Text>}
                                                strokeCap={"butt"}
                                                thickness={15}
                                                color={
                                                    index === 0 ? "#DC7633" : 
                                                    index === 1 ? "#8E44AD" : 
                                                    index === 2 ? "#3498DB" : 
                                                    index === 3 ? "#2ECC71" :
                                                    index === 4 ? "#F4D03F" :
                                                    index === 5 ? "#E74C3C" : "#000"
                                                }
                                                borderWidth={0}
                                                unfilledColor='#EAECEE'
                                            />
                                            <Text>{item.titulo}</Text>
                                        </View>
                                     ))}
                                {/* <HabilidadeBar 
                                    hab={data.habilidades}
                                    color={data.corPri}
                                /> */}
                            </View>
                        : null}

                        {criadores ? 
                            <></>
                        : null}

                    </View>
                </View>
            </Animated.ScrollView>
            {/* {item.serie === 'Fables' &&
                <Animated.View entering={BounceInRight.duration(700)} style={[headerStyle, styles.header, { width: width }]}>
                    <StatusBar style='light' backgroundColor={item.corPri} />
                    <LinearGradient colors={[item.corPri, item.corSec]} style={[styles.header]}>
                        <HeaderPage titulo={item.nome} />
                        <View style={{ width: '100%', alignItems: 'center'}}>
                            <Animated.Image source={{ uri: item.thamb }} style={[thambStyle, { height: 200, width: 350, marginTop: 30, borderRadius: 20}]} /> 
                        </View>
                        <View style={styles.dadosHeader}>
                            <View style={{ alignItems: 'center', width: 100}}>
                                <Text style={styles.titledDados}>Outro Nome:</Text>
                                <Text style={styles.textDados}>{item.nomeFic}</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 100}}>
                                <Text style={styles.titledDados}>Altura:</Text>
                                <Text style={[styles.textDados, { textAlign: 'center' }]}>{item.altura}</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 150 }}>
                                <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                <Text style={[styles.textDados, { paddingLeft: 10 }]}>{item.PA}</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </Animated.View>
            }  */}
            <Animated.View  style={[styles.header, {  width: width }]}>
                <StatusBar style='light' backgroundColor="transparent"  />
                <ImageBackground source={{ uri: data.wallpaper }}
                    // resizeMode="cover" 
                    borderBottomLeftRadius={40} 
                    borderBottomRightRadius={40} 
                    style={[]}
                >
                    <View style={{ width: "100%", backgroundColor: "rgba(58,58,58,0.7)", paddingTop: 25, borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>
                        <LinearGradient end={{ x: 0, y: 1.7}} colors={[ "transparent" , data.corPri]} style={[{ width: width, alignItems: 'center', paddingBottom: 10, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, }]}>
                            <HeaderPage 
                                modal={true} 
                                close={props.close}
                                userLoading={usuario.isLogin}
                                stateFavorito={stateFavoritos} 
                                id={data.id.toString()}
                                editora={data.editora} 
                                titulo={data.nomeHeroi} 
                            />
                            <View style={{ width: '100%', alignItems: 'center'}}>
                                {active ?
                                    <View style={{ position: 'absolute', zIndex: 999 }} >
                                        <ActivityIndicator 
                                            size={60}
                                            color='#9E9D9A'
                                            style={{ height: 220 }}
                                        />
                                    </View> 
                                : null }
                                <Animated.Image 
                                    entering={BounceInRight.duration(1000)}
                                    onLoad={() => setloadingThamb(false)}
                                    resizeMode='contain'
                                    source={{ uri: data.thamb }} style={styles.image} 
                                /> 
                                <Animated.Image  
                                    entering={BounceInLeft.duration(1000)}
                                    source={{ uri: data.logo }} 
                                    onLoad={() => setloadingLogo(false)}
                                    style={{ position: 'absolute', width: 270, height: 270, zIndex: 0 }} 
                                /> 
                            </View>
                            <Animated.View entering={BounceInDown.duration(600)} style={styles.dadosHeader}>
                                <View style={{ alignItems: 'center', width: 100}}>
                                    <Text style={styles.titledDados}>Nome:</Text>
                                    <Text style={styles.textDados}>{data.nome}</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: 100}}>
                                    <Text style={styles.titledDados}>Altura:</Text>
                                    <Text style={styles.textDados}>{data.altura}</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: 150 }}>
                                    <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                    <Text style={[styles.textDados, { paddingLeft: 10 }]}>{data.PA}</Text>
                                </View>
                            </Animated.View>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </Animated.View>
        </View>
    );
}