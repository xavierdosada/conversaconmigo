import styles from "./Conversation.module.css";
import JesusAnswers from "./JesusAnswers";
import PosibleAnswers from "./PosibleAnswers";
import { DataAnswers } from "../DataAnswers";
import { useState } from "react";
import CurrentAnswer from "./CurrentAnswer";
import FinalConversation from "./FinalConversation";

const Conversation = () => {
    const [fullConversation, setFullConversation] = useState([])
    const [currentIndexOfText, setNewIndexOfText] = useState(1)
    const showFinalConversation = currentIndexOfText === 6;

    const handleAnswerClick = (id) => {
        const idNumber = id.match(/PA(\d+\.\d+)/)[1]
        const JAid = `JA${idNumber}`
        const PAanswer = DataAnswers[0].PeopleAnswers.find(item => item.id === id )
        const JAanswer = DataAnswers[1].JesusAnswers.find(item => item.id === JAid )
        setFullConversation([...fullConversation, PAanswer, JAanswer]) //Guardo el historial de respuesta que da el usuario para luego hacer un map del arreglo y retornar las respuestas en nuevos div
        //sumo 1 a la variable para que cambia los tipos de preguntas y asi sucesivamente.
        setNewIndexOfText(currentIndexOfText+1)
    }
    
    console.log(currentIndexOfText)
    return (
        <section className={styles.container}>
        <div className={styles.containerChat}>
            <JesusAnswers answer={"Hey, arrepentite porque el reino de los cielos esta cerca!"}/>
            {fullConversation.map((answer) => {
                return answer.speaker === "person" ? (
                    <CurrentAnswer key={answer.id} answer={answer.message}/>
                ):(
                    <JesusAnswers key={answer.id} answer={answer.message}/>
                ) 
            })}
        </div>
        <div className={styles.containerAnswers}>
            {DataAnswers[0].PeopleAnswers.map(({id, indexOfText, message}) => (
            indexOfText === currentIndexOfText ? //Cada mensaje tiene un indice el cual me sirve para solo renderizar las preguntas con sus respuestas.
            <PosibleAnswers 
            key={id}
            id={id}
            answer={message}
            indexOfText={indexOfText}
            onClick={handleAnswerClick}/>
            : null                                    
            ))}
            {showFinalConversation && <FinalConversation/>}{/*Finalizado el circuito de PyR, dejo un input para que me envian un mensaje a mi email*/}
            
        </div>
        </section>
    );
};

export default Conversation;