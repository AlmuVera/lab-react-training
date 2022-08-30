import './App.css';

import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/box-color/BoxColor';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="id-cards mb-5">
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
        <hr />
        <div className="greetings mt-5">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
        <hr />
        <div className="random-number mt-5">
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
        <hr />
        <div className="box-color  mt-5">
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
    </div>
  );
}

export default App;
