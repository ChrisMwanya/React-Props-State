import React from 'react';

import ContactList from "./container/ContactList";
import H1 from "./titres/h1";


// const App = () =>{  
    
    
        
        
//     return(
//         <> 
        
//         <H1 textContent="Liste de Contacts" />

//         <ContainerBtnClose />

//         <ContainerContact nom="Mwanya Christian" group="famille" bio="Je suis un gars cool! Oui oui, C'est testé et approuvé" />
//         <br />

//         <ContainerBtnClose />

//         <ContainerContact nom="Mwanya Aureole" group="amie" bio="Testé et approuvé" />
//     </>
//     );    }

// export default App;

class App extends React.Component{
    state = {
        contacts:[
            {noms:"Christan Mwanya",group : "amis",bio:"garçon très sympha"},
            {noms:"Aureole Mwanya",group : "famille",bio:"un petit ange"},
            {noms:"Evelyne Ilunga",group : "bureau", bio:"petite fille gentille"}
             ]
    }

    render() {
        return(
                <>                     
                    <H1 textContent="Liste de Contacts" />
                    <ContactList contacts={this.state.contacts} />
                </>
                    // {/* <ContainerBtnClose />
            
                    // <ContainerContact nom="Mwanya Aureole" group="amie" bio="Testé et approuvé" /> */}
                
                ); 
    }
}

export default App;