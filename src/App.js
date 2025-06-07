import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Formulario
        handleFormulario={(item) => setColaboradores([...colaboradores, item])}
        times = {times.map(time=>time.nome)}
      />

      {times.map(item=>
        <Time
          key={item.nome}
          nome={item.nome}
          corPrimaria={item.corPrimaria}
          corSecundaria={item.corSecundaria}
          colaboradores={colaboradores.filter(
            colaborador=> colaborador.time === item.nome
            )}
          />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
