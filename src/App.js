import Private from "./private";
import Public from "./public";
import { useAuth } from "./hook/useAuth";
import "./app.css"


function App() {
  const { token } = useAuth();
  if(token){
    return <Private />
  }else{
    return <Public />
  }

}

export default App;
