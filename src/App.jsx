import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
import Staking from "./components/Staking/Staking";

function App() {
  return (
    <div className="main__container">
      <Sidebar />
      <Staking />
    </div>
  );
}

export default App;
