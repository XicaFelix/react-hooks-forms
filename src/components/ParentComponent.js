import react, {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [invalidFirstName, setInvalidName] = useState(null);
  
    function handleFirstNameChange(event){
        const nameLength = (event.target.value).length;
        if (nameLength < 0) {
            setInvalidName(`${event.target.value} is too short`)
        } else {
            setFirstName(event.target.value);
            setInvalidName(null);
            console.log(firstName);
        }
    }
  
    function handleLastNameChange(event){
      setLastName(event.target.value);
    }

    return(
        <div>
            <Form 
                firstName = {firstName}
                lastName = {lastName}
                handleFirstNameChange = {handleFirstNameChange}
                handleLastNameChange = {handleLastNameChange}
             />
             <DisplayData  firstName={firstName} lastName={lastName} invalidFirstName = {invalidFirstName}/>
        </div>
    )
}

export default ParentComponent;