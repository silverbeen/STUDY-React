import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "강은빈",
    birthday: "020209",
    job: "학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "silverbeen",
    birthday: "020209",
    job: "학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "goldbeen",
    birthday: "020209",
    job: "학생",
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        {customers.map((c) => {
          return (
            <Customer
            key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              job={c.job}
            />
          );
        })}
      </>
    );
  }
}

export default App;
