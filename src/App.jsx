
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/SideBar/Sidebar';

import './global.styles.css';
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}



export default App;
