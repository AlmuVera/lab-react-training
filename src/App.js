import logo from './logo.svg';
import './App.css';

import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="id-cards">
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
        <br />

        <div className="greetings">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
        <br />

        
      </div>
    </div>
  );
}

export default App;
