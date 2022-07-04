import Private from "./private";
import "./app.css"
import Public from "./public";
import { useAuth } from "./hook/useAuth";


function App() {
  const { token } = useAuth();
  if(token){
    return <Private />
  }else{
    return <Public />
  }

}

export default App;
