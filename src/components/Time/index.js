import './Time.css';
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Time = ({id,nome,cor, colaboradores, deletarColaborador, mudarCor,alternarFavorito})=>{

	return  (colaboradores.length >0 &&
			<section 
				className="time" 
				style={{ backgroundColor: hexToRgba(cor,'0.5') }} >
				<input 
					type='color' 
					onChange={(evento)=>(mudarCor(evento.target.value,id))} 
					value={cor} 
					className='input-cor'
				/>
				<h3 style={{ borderColor: cor }} >{nome}</h3>
				<div className="colaboradores">	
				{colaboradores.map(colaborador=>
					<Colaborador 
						key={colaborador.id} 
						id={colaborador.id} 
						nome={colaborador.nome}
						cargo={colaborador.cargo}
						imagem={colaborador.imagem}
						favorito={colaborador.favorito}
						corDeFundo={cor}
						aoDeletar={deletarColaborador}
						toggleFavorito={alternarFavorito}
						/>)}
				</div>
				
			</section>
		);
};

export default Time;