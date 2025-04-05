import React, {useState} from "react";

function Question(props){
    let [reveal, changeReveal] = useState(false);
    return (
        <div style={{width: "70vw", backgroundColor: "#7393B3", borderRadius: "10px", margin: "10px"}}>
            <h2>{props.number}. {props.question.question}</h2>
            <ol style={{listStyleType: "lower-alpha"}}>
                <li>{props.question.a}</li>
                <li>{props.question.b}</li>
                <li>{props.question.c}</li>
                <li>{props.question.d}</li>

            </ol>
            <h2>View answer: 
                <div onClick={() => {
                    changeReveal(!reveal);
                }} style={ !reveal ? {backgroundColor: "black", display: "inline-block", width: "30px", cursor: "pointer", marginLeft: "10px"} : {display: "inline-block", width: "30px", cursor: "pointer", marginLeft: "10px"}}>
                    {props.question.correct}
                </div>
            </h2>
        </div>
    );
}
export default Question;