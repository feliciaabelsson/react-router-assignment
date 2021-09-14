import "../styles/menu.css";

//ta emot props från menu.js
const MenuItems = (props) => {
  const id = props.data.id;
  const data = props.data;

  return (
    <article className="menu-item-container">
      <section className="add-coffe-container">
        <section className="coffee-title-price">
          <h3 className="first">{props.data.title}</h3>
          <h3 className="price">{props.data.price + " kr"}</h3>
        </section>

        <aside className="coffee-desc">
          <p>{props.data.desc}</p>
        </aside>
      </section>
    </article>
  );
};

export default MenuItems;
