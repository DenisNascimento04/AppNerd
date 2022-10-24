import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ActivityIndicator, ImageBackground, Pressable, ScrollView } from 'react-native';
import Reanimated, { BounceInRight, BounceInLeft, BounceInDown, useAnimatedStyle, interpolate, Extrapolate, useSharedValue, withSpring} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import  *  as  Progress  from  'react-native-progress' ;
import Icons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { HeaderPage } from '../Header';
import { RootState } from '../../store/index';
import { PropsPerso, propsTab } from '../../services/types';
import { ComponenteA, ComponenteB } from '../ComponentesGrid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../themes';

const { width, height } = Dimensions.get('window')

type Props = {
    data: PropsPerso,
    close: () => void 
}

export function ModalPerso(props:Props){

    const usuario = useSelector((state: RootState) => state.usuario)
    const dispatch = useDispatch();

    const data = props.data;
    
    const [historia, setHistoria] = useState(true);
    const [poderes, setPoderes] = useState(false);
    const [habilidades, setHabilidades] = useState(false);
    const [imagens, setImagens] = useState(false);
    const [loadingLogo, setloadingLogo] = useState(true);
    const [loadingThamb, setloadingThamb] = useState(true);
    const [active, setActive] = useState(true);
    const stateFavoritos = usuario.favoritos.includes(data.id) 
    const [X, setX] = useState(0);

    // const animatedValue = useRef(new Animated.Value(0)).current;
    const animatedValue = useSharedValue(0)
    const [indexUser, setIndexUser] = useState(0);
    

    const teste1 = useAnimatedStyle(() => {
        return{
            height: interpolate(
                animatedValue.value,
                [0, 0.5, 1],
                [50, 90, 130],
                Extrapolate.CLAMP,
            ),
        }
    })
    const teste2 = useAnimatedStyle(() => {
        return{
            height: interpolate(
                animatedValue.value,
                [0, 0.5, 1],
                [0, 30, 75],
                Extrapolate.CLAMP,
            ),
            translateY: interpolate(
                animatedValue.value,
                [0, 0.5, 1],
                [0, 10, 30],
                Extrapolate.CLAMP,
            ),
        }
    })

    function Test2(){
        setIndexUser(indexUser === 1 ? 0 : 1);
        animatedValue.value = indexUser === 1 ? withSpring(0) : withSpring(1);
    }


    function LoadingImagens() {
        // console.log(loadingLogo, loadingThamb)
        if (loadingLogo === false &&  loadingThamb === false) {
            setActive(false)
        }
    }

    useEffect(() => {
        LoadingImagens();
    },[loadingLogo, loadingThamb])


    return(
        <View key={data.id}>
            {/* <ScrollView 
                scrollEventThrottle={16}
                contentContainerStyle={{ }}
            > */}
                <Reanimated.View  style={[styles.header, {  width: width }]}>

                    {data.logo === "" && data.wallpaper === "" ? 
                        <View style={styles.viewHeader}>
                            <LinearGradient end={{ x: 0, y: 1.7}} colors={[ data.corSec , data.corPri]} 
                                style={[styles.viewGradi]}
                            >
                                <HeaderPage 
                                    modal={true} 
                                    close={props.close}
                                    userLoading={usuario.isLogin}
                                    stateFavorito={stateFavoritos} 
                                    id={data.id.toString()}
                                    editora={data.editora} 
                                    titulo={data.nomePerso} 
                                />
                                <View>
                                    <Reanimated.Image 
                                        entering={BounceInRight.delay(500)}
                                        onLoad={() => {setloadingThamb(false), setloadingLogo(false)}}
                                        resizeMode='contain'
                                        borderRadius={50}
                                        source={{ uri: data.thamb }} style={{ width: width, height: 200 }} 
                                    /> 
                                </View>
                                <Reanimated.View entering={BounceInDown.duration(600)} style={styles.dadosHeader}>
                                    <View style={{ alignItems: 'center', width: 100}}>
                                        <Text style={styles.titledDados}>Nome:</Text>
                                        <Text style={styles.textDados}>{data.nome}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: 100}}>
                                        <Text style={styles.titledDados}>Espécie:</Text>
                                        <Text style={styles.textDados}>{data.especie?.split(" ")[0]}{'\n'}{data.especie?.split(" ")[1]}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: 150 }}>
                                        <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                        <Text style={[styles.textDados, { paddingLeft: 10 }]}>{data.PA}</Text>
                                    </View>
                                </Reanimated.View>
                            </LinearGradient>
                        </View>
                    :                       
                        <ImageBackground source={{ uri: data.wallpaper }}
                            borderBottomLeftRadius={40} 
                            borderBottomRightRadius={40} 
                            style={[]}
                        >
                            <View style={styles.viewHeader}>
                                <LinearGradient end={{ x: 0, y: 1.7}} colors={[ "transparent" , data.corPri]} 
                                    style={[styles.viewGradi]}
                                >
                                    <HeaderPage 
                                        modal={true} 
                                        close={props.close}
                                        userLoading={usuario.isLogin}
                                        stateFavorito={stateFavoritos} 
                                        id={data.id.toString()}
                                        editora={data.editora} 
                                        titulo={data.nomePerso} 
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
                                            
                                        <Reanimated.Image 
                                            entering={BounceInRight.delay(500)}
                                            onLoad={() => setloadingThamb(false)}
                                            resizeMode='contain'
                                            source={{ uri: data.thamb }} style={styles.image} 
                                        /> 
                                        <Reanimated.Image  
                                            entering={BounceInLeft.delay(500)}

                                            source={{ uri: data.logo }} 
                                            onLoad={() => setloadingLogo(false)}
                                            style={{ position: 'absolute', width: 270, height: 270, zIndex: 0 }} 
                                        /> 
                                    </View>
                                    <Reanimated.View entering={BounceInDown.duration(600)} style={styles.dadosHeader}>
                                        <View style={{ alignItems: 'center', width: 100}}>
                                            <Text style={styles.titledDados}>Nome:</Text>
                                            <Text style={styles.textDados}>{data.nome}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', width: 100}}>
                                            <Text style={styles.titledDados}>Espécie:</Text>
                                            <Text style={styles.textDados}>{data.especie?.split(" ")[0]}{'\n'}{data.especie?.split(" ")[1]}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', width: 150 }}>
                                            <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                            <Text style={[styles.textDados, { paddingLeft: 10 }]}>{data.PA}</Text>
                                        </View>
                                    </Reanimated.View>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    }
                </Reanimated.View>

                <View style={[{backgroundColor: 'transparent'}]}>
                    <View style={{ backgroundColor: '#ffffff', paddingBottom: 80 }}>
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
                                            style={{ width: 60, height: 60, borderRadius: 30 }}
                                        />
                                        <Text style={styles.textCriadores} >
                                            {item.nome}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.barTools} >
                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: historia ? data.corPri : "#fff" , 
                                    borderBottomWidth: historia ? 1 : 0, marginRight: 10 
                                }} 
                                onPress={() => { setX(0), setHistoria(true), setPoderes(false), setHabilidades(false), setImagens(false)}}
                            >
                                <Text style={ styles.titles }>História</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: poderes ? data.corPri : "#fff", 
                                    borderBottomWidth: poderes ? 1 : 0, marginRight: 10 
                                }} 
                                onPress={() => { setX(1), setHistoria(false), setPoderes(true), setHabilidades(false), setImagens(false)}}
                            >
                                <Text style={ styles.titles }>Poderes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: habilidades ? data.corPri : "#fff", 
                                    borderBottomWidth: habilidades ? 1 : 0, marginRight: 10 
                                }} 
                                onPress={() => { setX(2), setHistoria(false), setPoderes(false), setHabilidades(true), setImagens(false)}}
                            >
                                <Text style={ styles.titles }>Habilidades</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{ 
                                    borderBottomColor: imagens ? data.corPri : "#fff", 
                                    borderBottomWidth: imagens ? 1 : 0 
                                }} 
                                onPress={() => { setX(3), setHistoria(false), setPoderes(false), setHabilidades(false), setImagens(true)}}
                            >
                                <Text style={ styles.titles }>Imagens</Text>
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
                            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                                <View style={{ width: width-40, alignItems: 'flex-end' }}>
                                    <Pressable onPress={Test2} style={{  }}>
                                        <Icons name={indexUser === 1 ? "chevron-up-outline" : 'chevron-down-outline'} size={26} color='#000' />
                                    </Pressable>
                                </View>
                                {data.poderes?.map((item,index) => (
                                    <Reanimated.View key={index} style={[ teste1 ,{ width: width-40 }]}>
                                        <View style={styles.viewPoderes}>
                                            <View style={{ width: 7, height: 7, marginRight: 10, borderRadius: 20, backgroundColor: "#000" }} />
                                            <Text style={{ fontSize: 14, lineHeight: 22 }} >{item.poder}</Text>
                                        </View>
                                        <Reanimated.View style={[teste2, styles.viewPoderesDesc]}>
                                            <Text>{item.desc}</Text>
                                        </Reanimated.View>
                                    </Reanimated.View>
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

                        {imagens ?
                            <></> 
                            // <View style={{ width: width, paddingHorizontal: 20 }}>
                            //     <ComponenteA
                            //         data={data.imagens.slice(0,3)}
                            //     />
                            //     <ComponenteB
                            //         data={data.imagens.slice(3,6)}
                            //     />
                            // </View>
                        : null}

                    </View>
                </View>
            {/* </ScrollView> */}
        </View>
    );
}