import { Dimensions, FlatList, Image, Pressable, View } from "react-native";
import { PropsNoticias } from "../../services/types";


type PropsCompA = {
    data: string[]
}
type PropsCompB = {
    data: string[]
}

const { width } = Dimensions.get('window');

export function ComponenteA(props: PropsCompA) {
    return(
        <View style={{ flexDirection: 'row' }}>
            <Pressable style={{ flex: 1, height: 100, flexGrow: 1, margin: 2 }}>
                <Image source={{ uri: props.data[0] }}  style={{ width: '100%', height: '100%' }} />
            </Pressable>
            <Pressable style={{ flex: 1, height: 100, flexGrow: 1, margin: 2 }}>
                <Image source={{ uri: props.data[1] }}  style={{ width: '100%', height: '100%' }} />
            </Pressable>
            <Pressable style={{ flex: 1, height: 100, flexGrow: 1, margin: 2 }}>
                <Image source={{ uri: props.data[2] }}  style={{ width: '100%', height: '100%' }} />
            </Pressable>
        </View>
    );
}

export function ComponenteB(props: PropsCompB) {
    return(
        <View style={{ flexDirection: 'row' }}>
            <Pressable style={{ height: 202, width: width/2, margin: 2 }}>
                <Image source={{ uri: props.data[0] }}  style={{ width: '100%', height: '100%' }} />
            </Pressable>
            <View style={{  }}>
                <Pressable style={{ height: 100, width: width/2.6, margin: 2 }}>
                    <Image source={{ uri: props.data[1] }}  style={{ width: '100%', height: '100%' }} />
                </Pressable>
                <Pressable style={{ height: 100, width: width/2.6, margin: 2 }}>
                    <Image source={{ uri: props.data[2] }}  style={{ width: '100%', height: '100%' }} />
                </Pressable>
            </View>
        </View>
    );
}