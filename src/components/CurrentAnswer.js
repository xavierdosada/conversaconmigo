import styles from "./Conversation.module.css"

const CurrentAnswer = ({answer}) => {
    return <>
    <h3 className={styles.personName}>Chiara</h3>
    <div className={styles.currentAnswerBox}>{answer}</div>
    </> 
}

export default CurrentAnswer;