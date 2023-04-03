import styles from "./App.module.css"
import Conversation from "./components/Conversation";

function App() {
  return (
    <div className={styles.App}>
      <Conversation/>
    </div>
  );
}

export default App;
