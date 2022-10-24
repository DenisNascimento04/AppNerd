import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from 'react-native-vector-icons/Ionicons';
import { ButtonBack } from "../../components/ButtonBack";


import { PropsNoticias } from "../../services/types";
import { theme } from "../../themes";

import { styles } from "./styles";


const { width } = Dimensions.get('screen');


export function PageNoticia() {

    const route = useRoute()
    // @ts-ignore
    const data: PropsNoticias = route.params.data;
    const DH = new Date(data.data);

    const definirTempoData = () => {
        const atual = new Date();
        if ((atual.getDate() - DH.getDate() === 0)) {
            const t = atual.getHours().valueOf() - DH.getHours().valueOf();
            return "Publicado a " + t.toString() + " horas";
        }else{
            if (DH.getMonth().valueOf()+1 === atual.getMonth().valueOf()+1) {
                const t = atual.getDate() - DH.getDate();
                return "Publicado a " + t.toString() + " dias";
            }
        }
        switch (DH.getMonth().valueOf()+1) {
            case 1:
                return "Publicado em " + DH.getDate() + " janeiro, " + DH.getFullYear()
            case 2:
                return "Publicado em " + DH.getDate() + " fevereiro, " + DH.getFullYear()
            case 3:
                return "Publicado em " + DH.getDate() + " março, " + DH.getFullYear()
            case 4:
                return "Publicado em " + DH.getDate() + " Aabril, " + DH.getFullYear()
            case 5:
                return "Publicado em " + DH.getDate() + " maio, " + DH.getFullYear()
            case 6:
                return "Publicado em " + DH.getDate() + " junho, " + DH.getFullYear()
            case 7:
                return "Publicado em " + DH.getDate() + " julho, " + DH.getFullYear()
            case 8:
                return "Publicado em " + DH.getDate() + " agosto, " + DH.getFullYear()
            case 9:
                return "Publicado em " + DH.getDate() + " setembro, " + DH.getFullYear()
            case 10:
                return "Publicado em " + DH.getDate() + " outubro, " + DH.getFullYear()
            case 11:
                return "Publicado em " + DH.getDate() + " novembro, " + DH.getFullYear()
            case 12:
                return "Publicado em " + DH.getDate() + " dezembro, " + DH.getFullYear()
        
            default:
                break;
        }
        
    }

    const date = definirTempoData();

    return(
        <SafeAreaView style={{ backgroundColor: theme.colors.bold, flex: 1}}>
            <StatusBar style="light" backgroundColor={theme.colors.bold} />
            <ScrollView>
                <View style={{ width: width, height: 30, marginTop: 5 }}>
                    <ButtonBack />
                </View>
                <View style={{ marginHorizontal: 20, marginBottom: 20, marginTop: 30 }}>
                    <Text style={styles.textData}>{date}</Text>
                    <Text style={styles.titulo}>{data.titulo}</Text>
                    <Text style={styles.desc}>{data.desc}</Text>
                    <View style={{ marginTop: 20, borderBottomWidth: .3, borderTopWidth: .3, paddingVertical: 20, borderColor: "#02374D" }}>
                        <Text style={styles.textAutor}>Por {data.escritor}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomWidth: .3, paddingVertical: 20, borderColor: "#02374D" }}>
                        <Icons name="logo-whatsapp" size={22} color={theme.colors.regularLight} style={{ marginRight: 8 }} />
                        <Icons name="logo-facebook" size={22} color={theme.colors.regularLight} style={{ marginRight: 8 }} />
                        <Icons name="logo-twitter" size={22} color={theme.colors.regularLight} style={{ marginRight: 8 }} />
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: width-35, height: 200, overflow: 'hidden', borderRadius: 5 }}>
                        <Image source={{ uri: data.thamb }} style={{ width: "100%", height: "100%", position: 'absolute', top: 0 }} />
                        <LinearGradient colors={["transparent", "transparent"]} start={{ x: 0, y: .7 }} style={styles.viewLinear}>

                        </LinearGradient>
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        {data.conteudo.map((item, index) => (
                            <View  key={index}>
                                {item.includes("https") ? 
                                    <Image source={{ uri: item }} style={{ width: "100%", height: 200, marginTop: 10, marginBottom: 20 }} borderRadius={5} />
                                :
                                    <Text style={[styles.text, { marginBottom: 10 }]}>
                                        {item}
                                    </Text>
                                }
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}