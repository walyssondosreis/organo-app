
import './CampoText.css';

const CampoTexto = (props) =>{
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={props.handleChange} value={props.value} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
};

export default CampoTexto;
