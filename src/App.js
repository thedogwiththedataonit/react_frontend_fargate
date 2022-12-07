
import Header from "./modules/Header" 
import PostComponent from "./modules/PostComponent";
import GetComponent from "./modules/GetComponent"

function App() {
  return (
    <>
      <Header></Header>
      <div className="divider">
        <PostComponent></PostComponent>
        <GetComponent></GetComponent>
      </div>

    </>
    )
}

export default App;
