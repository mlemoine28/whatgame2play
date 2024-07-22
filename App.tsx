import React from "react";
import Person from "./person";
import Button from "./button";

function App() {
    const buttonClick = () => {
        alert('Button clicked! Nice!');
    };
    
    return (
        <div>
            <Person 
                name="Michael" 
                age={34} 
                colour="blue"
            />
            <Button
                onClick={buttonClick}
                label={"Click me! Now!"}
            />
        </div>
    );
}



export default App; //not sure what the "default" part is though