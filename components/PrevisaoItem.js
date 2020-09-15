import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Cartao from "./Cartao";

const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={estilos.cartao}>
      <View style={estilos.tela}>
        <Image
          style={estilos.imagem}
          source={{
            uri:
              "https://openweathermap.org/img/wn/" +
              props.previsao.weather[0].icon +
              ".png",
          }}
        />
        <View>
          <View style={estilos.primeiraLinha}>
            <Text>
              Sensação térmica:{" "}
              {Math.round(props.previsao.main.feels_like - 273) + "\u00B0"}
            </Text>
          </View>
          <View style={estilos.segundaLinha}>
            <Text style={estilos.valor}>
              Nascer do Sol:{" "}
              {new Date(props.previsao.sys.sunrise * 1000).toLocaleTimeString()}
            </Text>
            <Text style={estilos.valor}>
              Pôr do Sol:{" "}
              {new Date(props.previsao.sys.sunset * 1000).toLocaleTimeString()}
            </Text>
            <Text style={estilos.valor}>Cidade: {props.previsao.name}</Text>
          </View>
        </View>
      </View>
    </Cartao>
  );
};

const estilos = StyleSheet.create({
  valor: {
    marginHorizontal: 2,
  },
  primeiraLinha: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  segundaLinha: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  cartao: {
    marginBottom: 20,
    marginTop: 10,
  },
  tela: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 70,
    height: 70,
  },
});

export default PrevisaoItem;
