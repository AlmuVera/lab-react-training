import './App.css';

import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';

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
        <hr />
        <br />

        <div className="greetings">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
        <br />
        <hr />
        <br />
        <div className="random-number">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
