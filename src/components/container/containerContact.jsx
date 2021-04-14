
import "../style/style.css";
import "../style/semantic.min.css";
import TextContainer from "../container/textContainer";
import Icon from "../image/icon";
const ContainerContact = (props) =>{
    return (
        <>
        <div className="flex">    
            <Icon className="user massive circle icon" />        
            <TextContainer nomTextContent={props.nom} familleTextContent={props.group} bioTextContent={props.bio} className="texte_cont"/> 
        </div>
            
        </>
    )
}

export default ContainerContact;