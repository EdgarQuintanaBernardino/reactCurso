import { useState } from "react";

export const AddCategory=({placeholder,valueInicial,onNewCategory})=>{
    const [InputValue, setInputValue] = useState(valueInicial)
    const pushEvent=(e)=>{
        e.preventDefault();
        if(InputValue.length<1)return;
        onNewCategory(InputValue)
        setInputValue('');
        
    }
    return (<>
    <form action="" onSubmit={pushEvent}>
    <input type="text" 
     placeholder={placeholder}
     value={InputValue}
     onChange={({target})=>{setInputValue(target.value)}}

     />
    <button onClick={pushEvent}>add</button> 
    </form>
     
     
    </>);
}