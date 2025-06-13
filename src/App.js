import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    // {
    //   id: uuidv4(),
    //   nome: 'Walysson dos Reis',
    //   cargo: 'Desenvolvedor Full Stack',
    //   imagem:'https://github.com/walyssondosreis.png',
    //   time: 'Programação',
    // },
    {
      id: uuidv4(),
      nome: 'Jesse Pinkman',
      cargo: 'Assistente de Desenvolvimento ',
      imagem:'https://i1.sndcdn.com/artworks-4XOyQEaWPchMmZj6-T9W2zg-t500x500.jpg',
      time: 'Programação',
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Walter White',
      cargo: 'Desenvelvedor Sênior',
      imagem:'https://i1.sndcdn.com/artworks-000070988217-wwy0d8-t500x500.jpg',
      time: 'Programação',
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Gus Fring',
      cargo: 'CEO',
      imagem:'https://i.redd.it/l3njp5l6wvv81.jpg',
      time: 'Programação',
      favorito: false,
    },
  ]);

  const deletarColaborador = (id) => {
    console.log(`Deletar colaborador ${id}`);
    setColaboradores(colaboradores.filter(
      colaborador=>colaborador.id !== id
    ));
  };

  const mudarCorDoTime = (corHexa, idTime) => {
    setTimes(
      times.map(time => {
        if (time.id === idTime) {
          time.cor = corHexa;
        }
        return time;
      })
    );
  };

  const alternarFavColaborador = (idColaborador)=>{
    setColaboradores(
      colaboradores.map((colab)=>{
        if(colab.id === idColaborador) colab.favorito = !colab.favorito;
        return colab;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        handleFormulario={(item) => setColaboradores([...colaboradores, item])}
        timeHandleFormulario={(item) => setTimes([...times, item])}
        times={times.map((time) => time.nome)}
      />

      {times.map((item) => (
        <Time
          key={item.id}
          id = {item.id}
          nome={item.nome}
          cor={item.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === item.nome
          )}
          deletarColaborador={deletarColaborador}
          mudarCor={mudarCorDoTime}
          alternarFavorito={alternarFavColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
