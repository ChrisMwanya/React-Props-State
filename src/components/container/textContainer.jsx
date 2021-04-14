import H4 from "../titres/h4";
import H6 from "../titres/h6";
import Paragraph from "../paragraph/paragraph";




const TextContainer = (props) => {
    return <div>
        
        <H4 id="cont_nom" textContent={props.nomTextContent} />
        <H6 textContent={props.familleTextContent}/>
        <Paragraph textContent={props.bioTextContent} />
        
    </div>
}

export default TextContainer;