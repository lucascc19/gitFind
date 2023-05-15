import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import background from '../../assets/background.svg';
import './styles.css';

export const App = () => {
  return(
    <div className="App">
      <Header />
      <div className="container">
        <img src={background} alt="github icon" className="background" />
        <div className="info">
          <div className="search">
            <Input />
            <Button />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  )
};