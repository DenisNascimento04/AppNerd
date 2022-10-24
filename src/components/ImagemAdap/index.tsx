import React, { useEffect, useState } from "react";
import { View, Image, Text, PixelRatio } from 'react-native';
import { useQuery } from "react-query";

import data from '../../BDTeste/banco.json';
import { theme } from "../../themes";

type Props = {
    imagem: string
}

export function ImagemAdap({ imagem }: Props) {

    const [ratio, setRatio] = useState(1);
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);

    useEffect(() => {
        Image.getSize(imagem, (width, height) => setRatio(width / height))
    },[imagem])

    return(
        <Image 
            source={{ uri: imagem }} 
            resizeMode="contain"
            style={{ 
                width: "100%", 
                borderRadius: 25, 
                aspectRatio: ratio 
            }} 
        />
    );
}