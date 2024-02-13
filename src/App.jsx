const Time = () => {
  console.log("Hello from TIME komponent");
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

const Hello = (props) => {
  console.log("Hello from HELLO komponent");
  console.log(
    `tiedot propsien kautta: nimi on ${props.name} ja ika on ${props.age}`
  );
  return (
    <section>
      <p>
        Hello komponent says hi {props.name}, you are {props.age} years old
      </p>
    </section>
  );
};

const Friends = () => {
  console.log("Hello from FRIENDS komponent");
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

const Footer = () => {
  console.log("Hello from FOOTER komponent");
  return (
    <section>
      <p>This is my footer. Greeting app created by Saima</p>
    </section>
  );
};

const App = () => {
  console.log("Hello from APP komponent");
  const nimi = "Pekka";
  const ika = 10;
  return (
    <>
      <Time />
      <section>
        <h1>Greetings</h1>
        <Hello name="Saima" age={21 + 10} />
        <Hello name={nimi} age={ika} />
      </section>
      <Friends />
      <Footer />
    </>
  );
};

export default App;
