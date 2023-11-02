import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setarray] = useState(initialState);
  const [result, setresult] = useState("어떤값");
  const [query, setquery] = useState("");

  const handleforeach = function () {
    let temp = " ";
    array.forEach(function (item, index) {
      temp += `${index} : ${item} / `;
    });
    setresult(temp);
  };
  const handlefilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setresult(filtered.join(", "));
  };

  const handlemap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    setresult(mapped.join(", "));
  };

  const handlereduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setresult(reduced);
  };

  const handlepush = function () {
    if (query.length <= 0) {
      alert("값을 넣으세요");
      return false;
    }

    const newarray = [...array, query];
    setarray(newarray);
    setresult(newarray.join(", "));
  };

  const handlepop = function () {
    const poppedarr = [...array];
    poppedarr.pop();
    setresult(poppedarr.join(", "));
  };

  const handleslice = function () {
    const slicedarr = array.slice(1, 4);
    setresult(slicedarr.join(", "));
  };

  const handlesplice = function () {
    const spliced = [...array];
    spliced.splice(2, 2, "kiwi", "lime");
    setresult(spliced.join(", "));
  };

  const handleindexof = function () {
    const indexofArr = array.indexOf(query);
    setresult(indexofArr);
  };

  const handleincludes = function () {
    const includesarr = array.includes(query);
    alert(includesarr);
    setresult(`${includesarr}`);
  };

  const handlefind = function () {
    const found = array.find(function (item) {
      return item.includes(query);
    });
    setresult(found);
  };

  const handlesome = function () {
    const somesome = array.some(function (e) {
      return e.includes(query);
    });

    setresult(`${somesome}`);
  };

  const handleevery = function () {
    const Every = array.every(function (e) {
      return e.length >= 2;
    });

    setresult(String(Every));
  };

  const handlesort = function () {
    const sorted = [...array].sort().reverse();

    setresult(sorted.join(", "));
  };

  const handlejoin = function () {
    let joined = array.join(", ");
    setresult(joined);
  };

  return (
    <div>
      <h1>스탠다드반 배열 API테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setquery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleforeach}>forEach</button>
        <button onClick={handlefilter}>filter</button>
        <button onClick={handlemap}>map</button>
        <button onClick={handlereduce}>reduce</button>
        <button onClick={handlepush}>push</button>
        <button onClick={handlepop}>pop</button>
        <button onClick={handleslice}>slice</button>
        <button onClick={handlesplice}>splice</button>
        <button onClick={handleindexof}>indexof</button>
        <button onClick={handleincludes}>includes</button>
        <button onClick={handlefind}>find</button>
        <button onClick={handlesome}>some</button>
        <button onClick={handleevery}>every</button>
        <button onClick={handlesort}>sort</button>
        <button onClick={handlejoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")} </p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
