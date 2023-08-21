import logo from "./logo.svg";
import Header from "./components/Header";
import Elements from "./components/Elements";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "₹6",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "₹10",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "₹12",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "₹12",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "₹15",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "₹18",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const len = pizzaData.length;

function App() {
  return (
    <div className="container">
      <Header className="header"></Header>
      <main className="menu">
        <h1>Main menu</h1>
        {/* for(let element of {pizzaData})
         { */}
        {/* console.log({element}) */}

        {len > 0 ? (
          <>
            <h1>A Slice of Heaven In Every Oven.</h1>
            <ul className="pizzas">
              {pizzaData.map((pizzaobj) => (
                <Elements pizzaobj={pizzaobj} key={pizzaobj.name} />
              ))}
            </ul>
          </>
        ) : (
          <h1>Sorry We are Working on our Menu :)</h1>
        )}
      </main>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
