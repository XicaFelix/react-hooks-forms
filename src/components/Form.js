import React from "react";

function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange, invalidFirstName}) {
 
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      {invalidFirstName ? <span>{invalidFirstName}</span> : null}
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
