import React from "react";
import { FlatList, View, Text, VirtualizedList } from 'react-native';

type Props = { 
    number: number
}

type PropsBarra = {
    hab: { 
        titulo: string, 
        number: number 
    }[],
    color: string
}

export function HabilidadeBar(props: PropsBarra) {

    const keys = [
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
    ]
    const Barras = ({ number }: Props) => {
        return(
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {keys.map((item, index) => (
                     <View key={index} style={{ width: number*2 === index ? 8 : 12, height: number*2 === index ? 18 : 8 , backgroundColor: number*2 >= index ? props.color : "#D5D5D5" }} />
                ))}
            </View>
        );
    }

    return(
        <FlatList 
            data={props.hab}
            keyExtractor={(item,index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item, index }) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50, alignItems: 'center', paddingTop: 40 }}>
                    <Text style={{ maxWidth: 90, textAlign: 'center' }}>{item.titulo}</Text>
                    <View style={{ marginRight: 20, flexDirection: 'row' }} >
                        <Barras number={item.number} />
                        <Text style={{ marginLeft: 10 }}>{item.number}</Text>
                    </View>
                </View>
            )}
        />
    );
}