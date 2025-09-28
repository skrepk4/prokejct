const cards = [
  {
    id: "1",
    price: 520,
    title: "Торт “Літнє бажання” з шоколадом та макарунами",
    subeTitle: "4 варіанти начинок",
    image: "./img/cake1.png",
  },
  {
    id: "2",
    price: 520,
    title: "Весільний триярусний торт з фруктами та квітами",
    subeTitle: "4 варіанти начинок",
    image: "./img/cake2.png",
  },
  {
    id: "3",
    price: 520,
    title: "Бісквітний торт з ягодами",
    subeTitle: "4 варіанти начинок",
    image: "./img/cake3.png",
  },
  {
    id: "4",
    price: 520,
    title: "Ванільно-карамельний торт з печивом Орео",
    subeTitle: "4 варіанти начинок",
    image: "./img/cake4.png",
  },
  {
    id: "5",
    price: 520,
    title: "Торт рожевий з макарунами",
    subeTitle: "4 варіанти начинок",
    image: "./img/cake5.png",
  },
];
function Torts() {
  return (
    <section className="cakes">
      <div className="cakes__container">
        <h2 className="cakes__container--title">Торти</h2>
        <div className="cakes__container--nav">
          <button className="cakes__container--nav--button">Переглянути всі</button>
          <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_right.png"></img>
          <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_left.png"></img>
        </div>
      </div>
      <div className="cakes__container--cards">
        {cards.map((cake, index) => (
            <div className="cakes__container--cards--containers">
              <img className="cakes__container--cards--containers--img" src={cake.image}></img>
              <h4 className="cakes__container--cards--containers--price">{cake.price} грн</h4>
              <div className="cakes__container--cards--containers--title">
                <p className="cakes__container--cards--containers--title--text">{cake.title}</p>
              </div>
              <p className="cakes__container--cards--containers--vars">{cake.subeTitle}</p>
            </div>
          
        ))}

      </div>
    </section>
  );
}
export default Torts;