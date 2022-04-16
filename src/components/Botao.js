import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../components/Texto";

export default function Botao({ children, style, botao }) {
    return <>
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Texto style={styles.textoBotao}>{children}</Texto>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})