import styles from "./Conversation.module.css";
import JesusAnswers from "./JesusAnswers";
import PosibleAnswers from "./PosibleAnswers";
import { DataAnswers } from "../DataAnswers";
import { useState } from "react";

const Conversation = () => {
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [fullConversation, setFullConversation] = useState([])

    const handleAnswerClick = (id) => {
        const findObjetcAnswer = DataAnswers[0].PeopleAnswers.find(item => item.id === id )
        const answer = findObjetcAnswer.message
        setCurrentAnswer(answer)
    }

    return (
        <section className={styles.container}>
        <div className={styles.containerChat}>
            <JesusAnswers />
            <div>{currentAnswer}</div>
        </div>
        <div className={styles.containerAnswers}>
            {DataAnswers[0].PeopleAnswers.map(({id, message}) => (
            <PosibleAnswers 
            key={id}
            id={id}
            answer={message}
            onClick={handleAnswerClick}
            />
            ))}
        </div>
        </section>
    );
};

export default Conversation;