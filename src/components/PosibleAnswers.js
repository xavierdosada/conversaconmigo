import styles from "./Conversation.module.css"

const PosibleAnswers = ({id, answer, onClick}) => {
    const handleClick = () => {
        onClick(id);   
    }

    return <button onClick={handleClick} className={styles.answerBox}>{answer}</button>
}

export default PosibleAnswers;