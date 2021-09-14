import up from "../assets/arrow-up.svg";
import down from "../assets/arrow-down.svg";

const CartItem = (props) => {
  return (
    <section>
      <ul>
        <li className="collection-item avatar" key={props.id}>
          <div className="item-desc">
            <p>{props.name}</p>
            <p>{props.price} kr</p>

            <div className="add-remove">
              <img
                src={up}
                onClick={() => {
                  this.handleAddQuantity(props.id);
                }}
              />
              <p> Quantity: {props.quantity}</p>
              <img
                src={down}
                onClick={() => {
                  this.handleSubtractQuantity(props.item.id);
                }}
              />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CartItem;
