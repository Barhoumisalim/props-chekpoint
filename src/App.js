import pic from './pic.jpg'
import './App.css';
import Profile from './profile/Profile';

function App() {
  const hundlename =( name)=>{alert("Hello "+name)}
  const fullname="Mazen"
  const bio="ff"
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
