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
            ></Button>
        </div>
    );
}



 //not sure what the "default" part is though. However my understanding is that the export part is what makes it useable throughout the whole application in multiple facets.
export default App;