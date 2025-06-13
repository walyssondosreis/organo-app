import "./Colaborador.css";
import { AiFillCloseCircle,AiFillHeart,AiOutlineHeart } from "react-icons/ai";


const Colaborador = (props) => {
	const paramFav = {
			size: 25,
			onClick: ()=>props.toggleFavorito(props.id)
		};
	return (
		<div className="colaborador">
			<AiFillCloseCircle  className="deletar" size={25} onClick={()=>props.aoDeletar(props.id)} />
			<div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
				<img src={props.imagem} alt={props.nome} />
			</div>
			<div className="rodape">
				<h4>{props.nome}</h4>
				<h5>{props.cargo}</h5>
				<div className="favoritar">
					{props.favorito 
						? <AiFillHeart {...paramFav}/> 
						: <AiOutlineHeart {...paramFav}/> 
					}
					
				</div>
			</div>
		</div>
	);
};
export default Colaborador;
