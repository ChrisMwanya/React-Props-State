
import ContainerBtnClose from "./container/containerClose";
import ContainerContact from "./container/containerContact";
import H1 from "./titres/h1";

const App = () =>{   
        
        
    return(
        <> 
        
        <H1 textContent="Liste de Contacts" />
        
        <ContainerBtnClose />

        <ContainerContact nom="Mwanya Christian" group="famille" bio="Je suis un gars cool! Oui oui, C'est testé et approuvé" />
        <br />

        <ContainerBtnClose />

        <ContainerContact nom="Mwanya Aureole" group="amie" bio="Testé et approuvé" />
    </>
    );
            
        
       
        
        
    
    
    
    
    
}

export default App;