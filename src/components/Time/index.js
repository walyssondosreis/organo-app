import './Time.css';
import Colaborador from "../Colaborador";

const Time = ({nome, corPrimaria, corSecundaria, colaboradores})=>{

	return  (colaboradores.length >0 &&
			<section 
				className="time" 
				style={{ backgroundColor: corSecundaria }} >
				<h3 style={{ borderColor: corPrimaria }} >{nome}</h3>
				<div className="colaboradores">	
				{colaboradores.map(colaborador=>
					<Colaborador 
						key={colaborador.nome} 
						nome={colaborador.nome}
						cargo={colaborador.cargo}
						imagem={colaborador.imagem}
						corPrimaria={corPrimaria}
						/>)}
				</div>
				
			</section>
		);
};

export default Time;