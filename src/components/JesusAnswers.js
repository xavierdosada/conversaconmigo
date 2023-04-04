import styles from "./Conversation.module.css"

const JesusAnswers = ({answer}) => {
    return <>
        <h3 className={styles.jesusName}>Jesús</h3>
        <div className={styles.jesusAnswer}>
            {answer}
        </div>
    </>
}

export default JesusAnswers;