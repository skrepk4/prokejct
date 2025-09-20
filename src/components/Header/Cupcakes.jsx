const cupcakes = [
  {
    id: "1",
    price: 520,
    title: "Пасхальні капкейки шоколадні та ванільні ",
    subeTitle: "4 варіанти начинок",
    image: "./img/cupcake1.png",
  },
  {
    id: "2",
    price: 520,
    title: "Оригінальні капкейки з кремом та печивом",
    subeTitle: "4 варіанти начинок",
    image: "./img/cupcake2.png",
  },
  {
    id: "3",
    price: 520,
    title: "Капкейки з карамеллю 3 шт",
    subeTitle: "4 варіанти начинок",
    image: "./img/cupcake3.png",
  },
  {
    id: "4",
    price: 520,
    title: "Капкейки з ніжним кремом",
    subeTitle: "4 варіанти начинок",
    image: "./img/cupcake4.png",
  },
  {
    id: "5",
    price: 520,
    title: "Чорні капкейки з шоколадом та печивом",
    subeTitle: "4 варіанти начинок",
    image: "./img/cupcake5.png",
  },
];

function Cupcakes(){
    return(
        <section className="cupcakes">
            <div className="cakes__container">
                <h2 className="cakes__container--title">Капкейки</h2>

                <div className="cakes__container--nav">
                    <button className="cakes__container--nav--button">Переглянути всі</button>
                    <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_right.png"></img>
                    <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_left.png"></img>
                </div>
            </div>
            <div className="cakes__container--cards">
                {cupcakes.map((cupcake, index) => (
                    <div className="cakes__container--cards--containers">
                        <img className="cakes__container--cards--containers--img" src={cupcake.image}></img>
                        <h4 className="cakes__container--cards--containers--price">{cupcake.price} грн</h4>
                        <div className="cakes__container--cards--containers--title">
                            <p className="cakes__container--cards--containers--title--text">{cupcake.title}</p>
                        </div>
                        <p className="cakes__container--cards--containers--vars">{cupcake.subeTitle}</p>
                    </div>
          
        ))}

      </div>
        </section>
    )
}
export default Cupcakes