import React, { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import PrevisaoItem from "./components/PrevisaoItem";

export default function App() {
  const [cidade, setCidade] = useState("");
  const [previsoes, setPrevisoes] = useState([]);

  const urlEndPoint =
    "https://api.openweathermap.org/data/2.5/weather?lang=pt_br&q=";
  const apiKey = "be2db2daa5932108524e4f1ba918947b";

  const capturarPrevisoes = (cidade) => {
    setCidade(cidade);
  };

  const procurarPrevisoes = (e) => {
    e.preventDefault();

    setPrevisoes([]);
    const target = urlEndPoint + cidade + "&appid=" + apiKey;
    fetch(target)
      .then((dados) => {
        return dados.json();
      })
      .then((dados) => {
        console.log("dados", dados);
        setPrevisoes([dados]);
        Keyboard.dismiss();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarPrevisoes}
        />
        <Button title="Pesquisar" onPress={procurarPrevisoes} />
      </View>
      <FlatList
        data={previsoes}
        renderItem={(previsao) => <PrevisaoItem previsao={previsao.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF",
  },
  entrada: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    shadowRadius: 6,
    shadowColor: "black",
  },
  nomeCidade: {
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    textAlign: "center",
    flexGrow: "0.9",
  },
});
