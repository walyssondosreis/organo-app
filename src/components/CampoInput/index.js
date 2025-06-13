
import './CampoInput.css';

const CampoInput = ({type='text',label,handleChange,value,required,placeholder}) =>{
    return (
        <div className={`campo-input campo-input-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                onChange={handleChange} 
                value={value} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
};

export default CampoInput;
