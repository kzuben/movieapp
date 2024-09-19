
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import Home from "./routes/Home";
import Movie from "./components/Movie"
import Detail from "./routes/Detail";


/* function Hello() {

  useEffect(() => {
    console.log("hi :)");
    return function(){
      console.log("bye :(")
    }
  }, [])
  return <h1>Hello</h1>
} */

function App() {

  // 
  /* ---------------------------------------------------------------
  App 01 
  useState에서 첫번째 아이템이 value, 두번째 아이템이 modify되는 function
  const [counter,setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time.");

  useEffect(() => { //코드가 1번만 실행되도록 보호함
    console.log("I run only once.")
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  },[keyword]); //keyword가 변화할 때만 코드를 실행한다
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  },[counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change")
  },[keyword,counter])
  ---------------------------------------------------------------------- */

/*----------------------------------------------------------
 App 02 
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
---------------------------------------------------------------------- */

/* ----------------------------------------------------------------------
App 03 

const [toDo, setToDo] = useState("");
const [toDos, setToDos] = useState([]);
const onChange = (event) => setToDo(event.target.value);

const onSubmit = (event) => {event.preventDefault();
  console.log(toDo);
  if(toDo === "") {
    return;
  }
  setToDos((currentArray) =>[toDo, ...currentArray] )
  setToDo("")
}

console.log(toDos);
---------------------------------------------------------------  
*/

/* --------------------------------------------------------------- 
App 04 

const[loading,setLoading] = useState(true);
const[coins,setCoins] = useState([])
useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
    setCoins(json);
    setLoading(false)
  
  })
},[])
--------------------------------------------------------------- 
*/

/* APP05 --- Home.js */

/* APP 06 Router : 동적 URL을 생성할 수 있다. ex)/movie/123 */
  return <Router>
    <Routes>
      <Route path="/hello" element={<h1>hello</h1>}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </Router>
/*---------------------------------------------------------------   
    App 01       
    <div>
      <input value={keyword} type="text" placeholder="Search here..." onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div> 
 ---------------------------------------------------------------------- */

 /* ---------------------------------------------------------------------
 App 02 
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> 
        { showing ? "Hide" : "Show" } 
      </button>
    </div>
  ---------------------------------------------------------------------  */
   /*--------------------------------------------------------------
 App03 
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
    <button>Add To Do</button>
    </form>
    <hr />
    <ul>
    {toDos.map((item,index) => <li key={index}>{item}</li>)}
    </ul>
 
    {// map 의 역할....["1","2","3"].map(() => ":)")의 결과 ... (3) [":)",":)",":)"]
      }
  </div>
  -------------------------------------------------------------- */

  /*   --------------------------------------------------------------
  App04 
  <div>
    <h1>The Coins!{loading? "" : `(${coins.length})`}</h1>
    {loading ? <strong>Loading...</strong> : (<select>
      {coins.map((coin) => <option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
    </select>) }
    
  </div>
--------------------------------------------------------------*/

/* App05*/

  
}

export default App;
