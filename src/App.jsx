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

const Hello = () => {
  console.log("Hello from HELLO komponentti");
  return (
    <section>
      <p>Hello world from Hello komponent</p>
    </section>
  );
};

const Hello2 = (props) => {
  console.log("Hello from HELLO2 komponentti");
  return (
    <section>
      <p>
        Hello <span>{props.name}</span> from Hello2 komponent
      </p>
    </section>
  );
};

const Hello3 = (props) => {
  console.log("Hello from HELLO3 komponentti");
  const nimi = "Pekka";
  const ika = 10;
  console.log(`nimi on ${nimi} ja props name on ${props.name}`);
  return (
    <section>
      <p>
        Hello3 komponent says hi {props.name}, you are {props.age} years old
      </p>
      <p>
        Hello3 komponent says hi <span>{nimi}</span>, you are{" "}
        <span>{ika} years old</span>
      </p>
    </section>
  );
};

const Friends = () => {
  console.log("Hello from FRIENDS komponentti");
  //TÄMÄ KÄY MYÖS RENDERÖITÄVÄKSI,JOS ARVOT OVAT OIKEIN
  //   const friends = [ 'Leevi', 'Venla']

  //   return (
  //     <div>
  //       <p>{friends}</p>
  //     </div>
  //   )
  // }
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Venla", age: 10 },
  ];
  console.log(`${friends[0].name} ${friends[1].name}`);
  return (
    <section>
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
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
        <Hello2 name="Tommi" />
        <Hello3 name="Alisa" age={26 + 10} />
      </section>
      <section>
        <Friends />
      </section>
    </>
  );
};

export default App;
