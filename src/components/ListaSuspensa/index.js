import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={props.handleChange} value={props.value} required={props.required}>
                <option value=""></option>
                {props.itens.map(item => {
                    return (<option key={item} >{item}</option> )
                })};
            </select>
        </div>
    )
};

export default ListaSuspensa;
