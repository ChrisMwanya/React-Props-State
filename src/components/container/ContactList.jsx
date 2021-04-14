import ContainerBtnClose from "./containerClose";
import ContainerContact from "./containerContact";
function ContactList(props){
    function renderContact(){
        return (
            <>
                {props.contacts.map(function(contact){
                    return (
                        <>

                    <ContainerBtnClose />
                    <ContainerContact nom={contact.noms} group={contact.group} bio={contact.bio} />
                    <br />
                        </>
                    )
                })}
            </>
        )
    }

    return(
        renderContact()
    )
}

export default ContactList;