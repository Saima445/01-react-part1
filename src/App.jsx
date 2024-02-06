const Hello3 = (props) => {
  console.log("Hello from HELLO3 komponentti");
  const nimi = "Pekka";
  const ika = 10;
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>
        Hello <span>{nimi}</span>, you are <span>{ika} years old</span>
      </p>
    </>
  );
};

const Hello2 = (props) => {
  console.log("Hello from HELLO2 komponentti");
  return (
    <>
      <p>Hello {props.name}</p>
    </>
  );
};

const Hello = () => {
  console.log("Hello from HELLO komponentti");
  return (
    <>
      <p>Hello world from Hello komponent</p>
    </>
  );
};

const Time = () => {
  console.log("Hello from TIME komponentti");
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <section>
      <p>
        Hello world, it is
        <span> {now.toLocaleDateString()} today, </span>
        <span>and the time is now {now.toLocaleTimeString()}</span>
      </p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </section>
  );
};
const App = () => {
  console.log("Hello from APP komponentti");

  return (
    <>
      <section>
        <p>Hello world!</p>
      </section>
      <section>
        <Time />
      </section>
      <section>
        <h1>Greetings</h1>
        <Hello />
        <Hello2 name="Saima" />
        <Hello2 name="Jukka" />
        <Hello3 name="Alisa" age={26 + 10} />
      </section>
    </>
  );
};

export default App;
