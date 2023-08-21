export default function Ele(props) {
  return (
    <div className={`pizza ${props.pizzaobj.soldOut ? "sold-out" : " "}`}>
      {/* <h1>pizzas here</h1> */}
      <img src={props.pizzaobj.photoName} alt="image" />
      <div>
        <li>
          <h3>{props.pizzaobj.name}</h3>
          <p>{props.pizzaobj.ingredients}</p>
          <span>
            {props.pizzaobj.soldOut ? "SOLD OUT" : props.pizzaobj.price}
          </span>
        </li>
      </div>
    </div>
  );
}
