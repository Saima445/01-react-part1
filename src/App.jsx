const Hello = (props) => {
  console.log(`props name on ${props.age}`);
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  console.log(bornYear());
  return (
    <section>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </section>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={15 + 15} />
      <Hello name={nimi} age={ika} />
    </>
  );
};

export default App;
