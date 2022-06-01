import './App.css';
import greet from './greet.png';
let curDate = new Date();
let hour = curDate.getHours();
let greetings = '';
let time = '';
let days = curDate.getDay();
let day = '';
switch(days){
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    case 7:
      day = 'Sunday';
      break;
    default:
      day = 'None';
      break;
    }
let date = `${day}, ${String(curDate.getDate()).padStart(2,'0')}/${String(curDate.getMonth()+1).padStart(2,'0')}/${curDate.getFullYear()}`;

if (hour >= 1 && hour < 12){
  greetings = "Good Morning";
 }
else if (hour >= 12 && hour < 19){
  greetings = "Good Afteroon";
}
else{
  greetings = "Good Night";
}

function timeUpdate(){
  let curTime = new Date();
  time = `${String(hour > 12 ? curTime.getHours() - 12 : curTime.getHours() ).padStart(2,'0')}:${String(curTime.getMinutes()).padStart(2,'0')}:${String(curTime.getSeconds()).padStart(2,'0')} `;
  if ( hour >= 1 && hour < 12){
    time = time + 'am'
  }
  else{
    time = time + 'pm'
  }
  document.getElementById('timeShow').innerHTML = time;
}
setInterval(timeUpdate, 1000);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <img src={greet} className="App-logo" alt="logo" />
          <h1>
            Hello Everyone! {greetings}
          </h1>
          <h3>It's currently <span id='timeShow'></span> on {date}</h3>
        </p>
      </header>
    </div>
  );
}

export default App;
