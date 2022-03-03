
import './App.css';
function App() {
  const oprSys=['Android','blackberry','iphone','Windows Phone'];
  const MobileCompany=['Samsung','HTC','Micromax','Apple'];
 return (
     <div>
      <h1>Mobile Operating System</h1>
       {oprSys.map((e) => (
         operating(e)
         //UserComponent(e)
       ))}
       <h1>Mobile Manufactures</h1>
       {MobileCompany.map((e) => (
           company(e)
         ))}
      </div>
 );
}

function operating(e){
  return(
   <ul>
     <li>{e}</li>
   </ul>
 )
}
function company(e){
  return(
    <ul>
      <li>{e}</li>
    </ul>
  )
 }
export default App;
