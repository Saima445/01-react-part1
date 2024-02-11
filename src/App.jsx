const Hello = ({ name, age }) => {
  console.log(`props name and age is ${name} ${age}`);
  const bornYear = () => new Date().getFullYear() - age;
  console.log(bornYear());
  return (
    <section>
      <p>
        Hello {name}, you are {age} years old
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
