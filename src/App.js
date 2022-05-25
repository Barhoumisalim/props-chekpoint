import pic from './pic.jpg'
import './App.css';
import Profile from './profile/Profile';

function App() {
  const hundlename =( name)=>{alert("Hello "+name)}
  const fullname="Jared Smith"
  const bio=`Jared Smith is a senior at the University of Illinois at 
  Urbana-Champaign where he is majoring in International Studies
   with a concentration in Latin America. His interest in international 
   development began during the fall semester of 2012 when 
   he had the opportunity to study abroad in Peru. 
   He learned about the inequalities affecting indigenous communities,
    experienced the Peruvian culture, and became proficient in Spanish.
     Inspired by this international experience, Jared interned
      with the Chicago Council on Global Affairs, 
      conducting research on food security in Latin America. 
      Jared aspires to pursue a career in international development 
      and write policy for a government agency. When he is not busy 
      reading about current affairs in Latin America, he enjoys 
      playing intramural basketball and training for the Chicago marathon` 
  const profession="Student"
  return (
    <div className="App">
      
      <Profile fullname={fullname} bio={bio} profession={profession} z={hundlename(fullname)}>
        <img src={pic} alt='developer'/>
      </Profile>
    </div>
  );
}

export default App;
