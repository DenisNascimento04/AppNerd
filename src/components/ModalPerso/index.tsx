import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Pressable,  } from 'react-native';
import Reanimated, { BounceInRight, BounceInLeft, BounceInDown, useAnimatedStyle, interpolate, Extrapolate, useSharedValue, withSpring, RotateInDownRight, RotateInDownLeft, FadeInDown} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import {  useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import  *  as  Progress  from  'react-native-progress' ;
import Icons from 'react-native-vector-icons/Ionicons';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { styles } from './styles';
import { RootState } from '../../store/index';
import { PropsPerso } from '../../services/types';
import { theme } from '../../themes';

const { width, height } = Dimensions.get('window')

type Props = {
    data: PropsPerso,
    close: () => void 
}

// export function ModalPerso(props:Props){

//     const usuario = useSelector((state: RootState) => state.usuario);
//     const dispatch = useDispatch();

//     const data = props.data;
    
//     const [historia, setHistoria] = useState(true);
//     const [poderes, setPoderes] = useState(false);
//     const [habilidades, setHabilidades] = useState(false);
//     const [imagens, setImagens] = useState(false);
//     const [loadingLogo, setloadingLogo] = useState(true);
//     const [loadingThamb, setloadingThamb] = useState(true);
//     const [active, setActive] = useState(true);
//     const stateFavoritos = usuario.favoritos.includes(data.id) 
//     const [X, setX] = useState(0);

//     // const animatedValue = useRef(new Animated.Value(0)).current;
//     const animatedValue = useSharedValue(0)
//     const [indexUser, setIndexUser] = useState(0);

//     console.log(stateFavoritos);
    

//     const teste1 = useAnimatedStyle(() => {
//         return{
//             height: interpolate(
//                 animatedValue.value,
//                 [0, 0.5, 1],
//                 [50, 90, 130],
//                 Extrapolate.CLAMP,
//             ),
//         }
//     })
//     const teste2 = useAnimatedStyle(() => {
//         return{
//             height: interpolate(
//                 animatedValue.value,
//                 [0, 0.5, 1],
//                 [0, 30, 75],
//                 Extrapolate.CLAMP,
//             ),
//             translateY: interpolate(
//                 animatedValue.value,
//                 [0, 0.5, 1],
//                 [0, 10, 30],
//                 Extrapolate.CLAMP,
//             ),
//         }
//     })

//     function Test2(){
//         setIndexUser(indexUser === 1 ? 0 : 1);
//         animatedValue.value = indexUser === 1 ? withSpring(0) : withSpring(1);
//     }


//     function LoadingImagens() {
//         // console.log(loadingLogo, loadingThamb)
//         if (loadingLogo === false &&  loadingThamb === false) {
//             setActive(false)
//         }
//     }

//     useEffect(() => {
//         LoadingImagens();
//     },[loadingLogo, loadingThamb])


//     return(
//         <View key={data.id}>
//             <View style={[styles.header, {  width: width, elevation: 25, shadowColor: data.corPri }]}>
//                 {data.logo === "" && data.wallpaper === "" ? 
//                     <View style={styles.viewHeader}>
//                         <LinearGradient end={{ x: 0, y: 1.7}} colors={[ data.corSec , data.corPri]} 
//                             style={[styles.viewGradi]}
//                         >
//                             <HeaderPage 
//                                 modal={true} 
//                                 close={props.close}
//                                 userLoading={usuario.isLogin}
//                                 stateFavorito={stateFavoritos} 
//                                 id={data.id}
//                                 editora={data.editora} 
//                                 titulo={data.nomePerso} 
//                             />
//                             <View>
//                                 <Reanimated.Image 
//                                     entering={BounceInRight.delay(500)}
//                                     onLoad={() => {setloadingThamb(false), setloadingLogo(false)}}
//                                     resizeMode='contain'
//                                     borderRadius={50}
//                                     source={{ uri: data.thamb }} style={{ width: width, height: 200 }} 
//                                 /> 
//                             </View>
//                             <Reanimated.View entering={BounceInDown.duration(600)} style={styles.dadosHeader}>
//                                 <View style={{ alignItems: 'center', width: 100}}>
//                                     <Text style={styles.titledDados}>Nome:</Text>
//                                     <Text style={styles.textDados}>{data.nome}</Text>
//                                 </View>
//                                 <View style={{ alignItems: 'center', width: 100}}>
//                                     <Text style={styles.titledDados}>Espécie:</Text>
//                                     <Text style={styles.textDados}>{data.especie?.split(" ")[0]}{'\n'}{data.especie?.split(" ")[1]}</Text>
//                                 </View>
//                                 <View style={{ alignItems: 'center', width: 150 }}>
//                                     <Text style={styles.titledDados}>Primeira Aparição:</Text>
//                                     <Text style={[styles.textDados, { paddingLeft: 10 }]}>{data.PA}</Text>
//                                 </View>
//                             </Reanimated.View>
//                         </LinearGradient>
//                     </View>
//                 :                       
//                     <ImageBackground source={{ uri: data.wallpaper }}
//                         borderBottomLeftRadius={40} 
//                         borderBottomRightRadius={40} 
//                         style={[]}
//                     >
//                         <View style={styles.viewHeader}>
//                             <LinearGradient end={{ x: 0, y: 1.7}} colors={[ "transparent" , data.corPri]} 
//                                 style={[styles.viewGradi]}
//                             >
//                                 <HeaderPage 
//                                     modal={true} 
//                                     close={props.close}
//                                     userLoading={usuario.isLogin}
//                                     stateFavorito={stateFavoritos} 
//                                     id={data.id}
//                                     editora={data.editora} 
//                                     titulo={data.nomePerso} 
//                                 />
//                                 <View style={{ width: '100%', alignItems: 'center'}}>
//                                     {active ?
//                                         <View style={{ position: 'absolute', zIndex: 999 }} >
//                                             <ActivityIndicator 
//                                                 size={60}
//                                                 color='#9E9D9A'
//                                                 style={{ height: 220 }}
//                                             />
//                                         </View> 
//                                     : null }
                                        
//                                     <Reanimated.Image 
//                                         entering={BounceInRight.delay(500)}
//                                         onLoad={() => setloadingThamb(false)}
//                                         resizeMode='contain'
//                                         source={{ uri: data.thamb }} style={styles.image} 
//                                     /> 
//                                     <Reanimated.Image  
//                                         entering={BounceInLeft.delay(500)}

//                                         source={{ uri: data.logo }} 
//                                         onLoad={() => setloadingLogo(false)}
//                                         style={{ position: 'absolute', width: 270, height: 270, zIndex: 0 }} 
//                                     /> 
//                                 </View>
//                                 <Reanimated.View entering={BounceInDown.duration(600)} style={styles.dadosHeader}>
//                                     <View style={{ alignItems: 'center', width: 100}}>
//                                         <Text style={styles.titledDados}>Nome:</Text>
//                                         <Text style={styles.textDados}>{data.nome}</Text>
//                                     </View>
//                                     <View style={{ alignItems: 'center', width: 100}}>
//                                         <Text style={styles.titledDados}>Espécie:</Text>
//                                         <Text style={styles.textDados}>{data.especie?.split(" ")[0]}{'\n'}{data.especie?.split(" ")[1]}</Text>
//                                     </View>
//                                     <View style={{ alignItems: 'center', width: 150 }}>
//                                         <Text style={styles.titledDados}>Primeira Aparição:</Text>
//                                         <Text style={[styles.textDados, { paddingLeft: 10 }]}>{data.PA}</Text>
//                                     </View>
//                                 </Reanimated.View>
//                             </LinearGradient>
//                         </View>
//                     </ImageBackground>
//                 }
//             </View>

//             <View style={[{backgroundColor: theme.colors.fundo}]}>
//                 <View style={{ backgroundColor: theme.colors.fundo, paddingBottom: 80 }}>
//                     <View style={{ paddingHorizontal: 30 }}>
//                         <Text style={ styles.titles }>Sinopse</Text>
//                         {data.sinopse?.map((item: any, index: number) => (
//                             <Text key={index} style={[styles.text, { marginBottom: 10 }]}>{item}</Text>
//                         ))}
//                     </View>

//                     <View>
//                         <Text style={[ styles.titles, {marginLeft: 30}]}>Criadores</Text>
//                         <View style={styles.viewCriadores}>
//                             {data.criadores.map((item, index: number) => (
//                                 <View key={index} style={{ marginBottom: 20, alignItems :'center', marginRight: index != data.criadores.length-1 ? 20 : 0 }}>
//                                     <Image 
//                                         source={{ uri: item.image }}
//                                         style={{ width: 60, height: 60, borderRadius: 30 }}
//                                     />
//                                     <Text style={styles.textCriadores} >
//                                         {item.nome}
//                                     </Text>
//                                 </View>
//                             ))}
//                         </View>
//                     </View>

//                     <View style={styles.barTools} >
//                         <TouchableOpacity 
//                             style={{ 
//                                 borderBottomColor: historia ? data.corPri : "#fff" , 
//                                 borderBottomWidth: historia ? 1 : 0, marginRight: 10 
//                             }} 
//                             onPress={() => { setX(0), setHistoria(true), setPoderes(false), setHabilidades(false), setImagens(false)}}
//                         >
//                             <Text style={ styles.titles }>História</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity 
//                             style={{ 
//                                 borderBottomColor: poderes ? data.corPri : "#fff", 
//                                 borderBottomWidth: poderes ? 1 : 0, marginRight: 10 
//                             }} 
//                             onPress={() => { setX(1), setHistoria(false), setPoderes(true), setHabilidades(false), setImagens(false)}}
//                         >
//                             <Text style={ styles.titles }>Poderes</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity 
//                             style={{ 
//                                 borderBottomColor: habilidades ? data.corPri : "#fff", 
//                                 borderBottomWidth: habilidades ? 1 : 0, marginRight: 10 
//                             }} 
//                             onPress={() => { setX(2), setHistoria(false), setPoderes(false), setHabilidades(true), setImagens(false)}}
//                         >
//                             <Text style={ styles.titles }>Habilidades</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity 
//                             style={{ 
//                                 borderBottomColor: imagens ? data.corPri : "#fff", 
//                                 borderBottomWidth: imagens ? 1 : 0 
//                             }} 
//                             onPress={() => { setX(3), setHistoria(false), setPoderes(false), setHabilidades(false), setImagens(true)}}
//                         >
//                             <Text style={ styles.titles }>Imagens</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {historia ? 
//                         <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
//                             {data.historia?.map((item, index) => (
//                                 <View key={index}>
//                                     <Text style={[ styles.subtitle,{ marginBottom: 10}]}>{item.title}</Text>
//                                     {item.text?.map((item, index) => (
//                                         <Text key={index} style={[styles.text, { marginBottom: 10 }]}>{item}</Text>
//                                     ))}
//                                 </View>
//                             ))}
//                         </View>
//                     : null}

//                     {poderes ? 
//                         <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
//                             <View style={{ width: width-40, alignItems: 'flex-end' }}>
//                                 <Pressable onPress={Test2} style={{  }}>
//                                     <Icons name={indexUser === 1 ? "chevron-up-outline" : 'chevron-down-outline'} size={26} color='#000' />
//                                 </Pressable>
//                             </View>
//                             {data.poderes?.map((item,index) => (
//                                 <Reanimated.View key={index} style={[ teste1 ,{ width: width-40 }]}>
//                                     <View style={styles.viewPoderes}>
//                                         <View style={{ width: 7, height: 7, marginRight: 10, borderRadius: 20, backgroundColor: "#000" }} />
//                                         <Text style={{ fontSize: 14, lineHeight: 22 }} >{item.poder}</Text>
//                                     </View>
//                                     <Reanimated.View style={[teste2, styles.viewPoderesDesc]}>
//                                         <Text>{item.desc}</Text>
//                                     </Reanimated.View>
//                                 </Reanimated.View>
//                             ))}
//                         </View>
//                     : null}

//                     {habilidades ? 
//                         <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
//                                 {data.habilidades.map((item, index) => (
//                                 <View key={index} style={{ width: 150, height: 150, marginRight: index%2 === 0 ? 20 : 0, marginBottom: 15, alignItems: 'center', justifyContent: 'center' }}>        
//                                     <Progress.Circle 
//                                         size={120}
//                                         progress={item.number * 10**-1}
//                                         showsText={true}
//                                         textStyle={{ color: "#000" }}
//                                         formatText={() => <Text>{item.number}</Text>}
//                                         strokeCap={"butt"}
//                                         thickness={15}
//                                         color={
//                                             index === 0 ? "#DC7633" : 
//                                             index === 1 ? "#8E44AD" : 
//                                             index === 2 ? "#3498DB" : 
//                                             index === 3 ? "#2ECC71" :
//                                             index === 4 ? "#F4D03F" :
//                                             index === 5 ? "#E74C3C" : "#000"
//                                         }
//                                         borderWidth={0}
//                                         unfilledColor='#EAECEE'
//                                     />
//                                     <Text>{item.titulo}</Text>
//                                 </View>
//                                 ))}
//                         </View>
//                     : null}

//                     {imagens ?
//                         <></> 
//                         // <View style={{ width: width, paddingHorizontal: 20 }}>
//                         //     <ComponenteA
//                         //         data={data.imagens.slice(0,3)}
//                         //     />
//                         //     <ComponenteB
//                         //         data={data.imagens.slice(3,6)}
//                         //     />
//                         // </View>
//                     : null}

//                 </View>
//             </View>
//         </View>
//     );
// }



export function ModalPerso(props:Props){

    const usuario = useSelector((state: RootState) => state.usuario);
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
        <LinearGradient colors={[ "#1C1F26", "#2A353D" ]} key={data.id} style={{ flex: 1, paddingBottom: 24, width: width }}>
            <View style={{ flex: 1,  paddingTop: 24 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
                    <Pressable onPress={props.close} style={{ justifyContent: 'center' }}>
                        <Ionicons name='chevron-down' size={32} color={theme.colors.contraste} />
                    </Pressable>
                    <Pressable style={{  }}>
                        <AntDesign name='hearto' size={32} color={theme.colors.contraste} />
                    </Pressable>
                </View>

                <Reanimated.View entering={RotateInDownLeft.delay(800)} style={{alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                    <LinearGradient colors={[data.corPri, data.corSec]} 
                        style={{ width: 200, height: 200, borderRadius: 100, position: 'absolute', top: 95, left: 230, elevation: 50, shadowColor: data.corPri }} 
                    />
                    {/* <View style={{ backgroundColor: theme.colors.fundo, width: 200, height: 200, borderRadius: 100, position: 'absolute', top: 95, left: 230 }} /> */}

                    <Image 
                        source={{ uri: data.thamb }} 
                        style={{ width: 250, height: 300, position: 'absolute', zIndex: 0, top: 40, left: 220 }} 
                        resizeMode='contain'
                        borderRadius={16}
                    />
                </Reanimated.View>

                <Reanimated.View entering={FadeInDown.delay(900)}>
                    <View style={{ marginTop: 50, paddingLeft: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={[styles.title, { fontSize: 22, marginBottom: 2 }]}>{data.nomePerso}</Text>
                            {data.logo != "" ? 
                                <Image 
                                    source={{ uri: data.logo }} 
                                    style={{ width: 24, height: 24, marginLeft: 5 }} 
                                    resizeMode='contain'
                                />
                            :null}
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', maxWidth: 190 }}>
                            <Text style={styles.text}>{data.nome}</Text>
                            <Text style={[styles.text, { textAlign: 'center' }]}>{data.especie?.split(" ")[0]}{'\n'}{data.especie?.split(" ")[1]}</Text>
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 10 }}>
                            <Text style={[styles.title, { fontSize: 14, marginBottom: 2 }]}>Primeira Aparição:</Text>
                            <Text style={[styles.text]}>{data.PA.split("(")[0]}{'\n('}{data.PA.split("(")[1]}</Text>
                        </View>
                    </View>

                    {/* <View style={{ width: width, height: 200, elevation: 10, top: 210, borderRadius: 20,  position: 'absolute', shadowColor: data.corPri }} /> */}

                    <FlatList 
                        data={data.imagens.slice(1,4)}
                        keyExtractor={(_,index) => index.toString()}
                        horizontal
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={width-50}
                        decelerationRate={0}
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, paddingHorizontal: 10 }}
                        renderItem={({ item }) => (
                            <View style={{ width: width-50, marginRight: 10, alignItems: 'center'}}>
                                <Image 
                                    source={{ uri: item }} 
                                    style={{ width: width-50, height: 200 }} 
                                    borderRadius={16}
                                    resizeMode='cover'
                                />
                            </View> 
                        )}
                    />

                    <View style={{ paddingHorizontal: 16, borderRadius: 20, paddingTop: 16 }}>

                        <View style={{  }}>
                            <Text style={styles.title}>Sinopse</Text>
                            {data.sinopse.map((item, index) => (
                                <Text key={index} style={styles.text} >{item}</Text>
                            ))}
                        </View>

                        <View style={{ flex: 1, paddingBottom: 100 }}>
                            <View style={{  marginTop: 8 }}>
                                <Text style={styles.title}>Criadores</Text>
                                <View style={{ flexDirection: 'row', marginLeft: 5  }}>
                                    {data.criadores.map((item, index: number) => (
                                        <View key={index} style={{ marginBottom: 20, alignItems :'center', marginRight: index != data.criadores.length-1 ? 20 : 0 }}>
                                            <Image 
                                                source={{ uri: item.image }}
                                                style={{ width: 60, height: 60, borderRadius: 30 }}
                                            />
                                            <Text style={styles.text} >
                                                {item.nome}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            <View style={styles.barTools} >
                                <TouchableOpacity 
                                    style={{ 
                                        borderBottomColor: !historia ? "#f2f2f2" : data.corPri , 
                                        borderBottomWidth: historia ? 1 : 0, marginRight: 10 
                                    }} 
                                    onPress={() => { setX(0), setHistoria(true), setPoderes(false), setHabilidades(false), setImagens(false)}}
                                >
                                    <Text style={ styles.title }>História</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={{ 
                                        borderBottomColor: !poderes ? "#f2f2f2" : data.corPri, 
                                        borderBottomWidth: poderes ? 1 : 0, marginRight: 10 
                                    }} 
                                    onPress={() => { setX(1), setHistoria(false), setPoderes(true), setHabilidades(false), setImagens(false)}}
                                >
                                    <Text style={ styles.title }>Poderes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={{ 
                                        borderBottomColor: !habilidades ? "#f2f2f2" : data.corPri, 
                                        borderBottomWidth: habilidades ? 1 : 0, marginRight: 10 
                                    }} 
                                    onPress={() => { setX(2), setHistoria(false), setPoderes(false), setHabilidades(true), setImagens(false)}}
                                >
                                    <Text style={ styles.title }>Habilidades</Text>
                                </TouchableOpacity>
                            </View>

                            {historia ? 
                                <View style={{ paddingTop: 16 }}>
                                    {data.historia?.map((item, index) => (
                                        <View key={index}>
                                            <Text style={[styles.title, { fontSize: 16 }]}>{item.title}</Text>
                                            {item.text?.map((item, index) => (
                                                <Text key={index} style={[styles.text]}>{item}</Text>
                                            ))}
                                        </View>
                                    ))}
                                </View>
                            : null}

                            {poderes ? 
                                <View style={{ paddingTop: 20 }}>
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
                                                textStyle={{ color: "#f2f2f2" }}
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
                                            <Text style={{ color: theme.colors.contraste }}>{item.titulo}</Text>
                                        </View>
                                        ))}
                                </View>
                            : null}
                        </View>
                    </View>
                </Reanimated.View>
            </View>
        </LinearGradient>
    );
}