import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [ nome, setNome ] = useState('Walysson dos Reis');
    const [ cargo, setCargo ] = useState('Desenvolvedor Full Stack');
    const [ imagem, setImagem ] = useState('https://github.com/walyssondosreis.png');
    const [ time, setTime ] = useState('Programação');

    const handleSubmit = (event)=> {
        event.preventDefault();
        props.handleFormulario({nome,cargo,imagem,time});
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        // console.log("Form submetido com =>", nome,cargo,imagem,time);
    };

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit} >
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    required={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    handleChange = {(e)=>setNome(e.target.value)} 
                    value = {nome}
                />
                <CampoTexto 
                    required={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    handleChange = {(e)=>setCargo(e.target.value)} 
                    value = {cargo} 
                />
                <CampoTexto  
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    handleChange = {(e)=>setImagem(e.target.value)} 
                    value = {imagem} 
                />
                <ListaSuspensa 
                    required={true} 
                    label='Time' 
                    itens ={props.times}
                    handleChange = {(e)=>setTime(e.target.value)}
                    value = {time}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
};

export default Formulario;