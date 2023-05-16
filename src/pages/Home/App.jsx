import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import { ItemList } from "../../components/List";
import { useState } from 'react';
import background from '../../assets/background.svg';
import './styles.css';


export const App = () => {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio} = newUser;
      setCurrentUser(newUser);
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if(newRepos.length){
      setRepos(newRepos);
    }
  }

  return(
    <div className="App">
      <Header />
      <div className="container">
        <img src={background} alt="github icon" className="background" />
        <div className="info">
          <div className="search">
            <Input value={user} onChange={(event) => setUser(event.target.value)} />
            <Button onClick={handleGetData} />
          </div>
          {currentUser?.name ? (
            <Profile 
              bio={currentUser.bio} 
              src={currentUser.avatar_url} 
              name={currentUser.name} 
              login={currentUser.login} 
            />
          ) : null}
          {repos?.length ? (
            <div className="repositories">
              <h3>Repositórios</h3>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
};