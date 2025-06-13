import './Formulario.css';
import CampoInput from '../CampoInput';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [ nome, setNome ] = useState();
    const [ cargo, setCargo ] = useState();
    const [ imagem, setImagem ] = useState();
    const [ time, setTime ] = useState();
    const [ nomeTime, setNomeTime ] = useState();
    const [ corTime, setCorTime ] = useState();

    const handleSubmit = (event)=> {
        event.preventDefault();
        props.handleFormulario({
            'id': uuidv4(),
            'nome': nome,
            'cargo': cargo,
            'imagem' : imagem,
            'time': time,
            'favorito':false,
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        // console.log("Form submetido com =>", nome,cargo,imagem,time);
    };

    const timeHandleSubmit = (event)=> {
        event.preventDefault();
        props.timeHandleFormulario({
            'id': uuidv4(),
            'nome': nomeTime,
            'cor' : corTime,
        });
        setNomeTime('');
        setCorTime('');
        // console.log("Form submetido com =>", nome,cargo,imagem,time);
    };

    return (
        <section className='formulario-container'>
            <form onSubmit={handleSubmit} >
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoInput 
                    required
                    label='Nome' 
                    placeholder='Digite seu nome'
                    handleChange = {(e)=>setNome(e.target.value)} 
                    value = {nome}
                />
                <CampoInput 
                    required
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    handleChange = {(e)=>setCargo(e.target.value)} 
                    value = {cargo} 
                />
                <CampoInput  
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    handleChange = {(e)=>setImagem(e.target.value)} 
                    value = {imagem} 
                />
                <ListaSuspensa 
                    required
                    label='Time' 
                    itens ={props.times}
                    handleChange = {(e)=>setTime(e.target.value)}
                    value = {time}
                />
                <Botao>Criar card</Botao>
            </form>
            <form onSubmit={timeHandleSubmit}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <CampoInput 
                    required 
                    label='Nome' 
                    placeholder='Digite nome do time'
                    handleChange = {(e)=>setNomeTime(e.target.value)} 
                    value = {nomeTime}
                />
                <CampoInput 
                    required 
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor do time'
                    handleChange = {(e)=>setCorTime(e.target.value)} 
                    value = {corTime}
                />
                <Botao>Criar time</Botao>
            </form>
        </section>
    )
};

export default Formulario;