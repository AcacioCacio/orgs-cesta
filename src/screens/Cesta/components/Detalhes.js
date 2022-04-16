import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, description, price, botao}){
    return <>
        <Texto style={styles.nome}>{nome}</Texto>
            <View style={styles.fazenda}>
                <Image source={logoFazenda}  style={styles.imgFazenda}/>
                <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
        <Texto style={styles.description}>{ description }</Texto>
        <Texto style={styles.price}>{price}</Texto>
        <Botao style={styles.botao}>{botao}</Botao>

            
    </>
}

const styles = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imgFazenda: {
        width: 45,
        height: 45,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        textAlign: "justify"
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
    },
})