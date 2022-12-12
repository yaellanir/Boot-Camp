import "./HelloWorld.css";

function HelloWorld() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I Love React";

  return (
    <div className="data">
      <h1>{data[0]}  {data[1]}</h1>
      <div className="add">
        <h2>
          {number1}+{number2}
        </h2>
        <div className="string">"the{string}s leangth is {string.length()}"</div>
      </div>
    </div>
  );
}

export default HelloWorld;
