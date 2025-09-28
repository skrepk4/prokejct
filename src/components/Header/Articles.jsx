const stats = [
    {
        id: 1,
        image: "./img/фото(3).png",
        title: "Кращі кондитерські Києва",
        about: "Ми знаємо, де у Києві готують і подають смачні десерти та фірмові булочки, шоколадні цукерки ручної роботи, а також де можна купити натуральний шоколад. І вам розкажемо..."
    },
    {
        id: 2,
        image: "./img/фото(4).png",
        title: "Як приготувати справжній французький круасан",
        about: "Всі, хто любить круасани, мріють одного разу опинитися в маленькій французькій пекарні з гарячим круасаном в руках. Чи це не чудово? Ті, хто там побу..."
    },
    {
        id: 3,
        image: "./img/фото(5).png",
        title: "Рецепти найсмачніших макарунів з незвичними смаками",
        about: "Вишукане і неймовірно смачне французьке печиво «Макаронів» за класичним рецептом готується на основі мигдальної муки. Н..."
    },
    {
        id: 4,
        image: "./img/фото(6).png",
        title: "Малинове безе в домашніх умовах",
        about: "Безе, або меренга - це класичний французький десерт з запеченого білкового крему. Неймовірно ніжний, м'який всередині і трохи хрусткий зов..."
    },
    {
        id: 5,
        image: "./img/фото(7).png",
        title: "Рецепти шоколаду без цукру",
        about: "Розглянемо популярні способи приготування домашнього шоколаду. Його головна особливість — можливість комбінування різних продуктів..."
    },
]
function Article(){
    return(
        <section className="articles">
            <div className="cakes__container">
            <h2 className="cakes__container--title">Статті</h2>
            <div className="cakes__container--nav">
                <button className="cakes__container--nav--button">Переглянути всі</button>
                <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_right.png"></img>
                <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_left.png"></img>
            </div>
        </div>
        <div className="articles__container">
        {stats.map((stats, index) => (
            <div className="articles__container--cards">
                <img className="articles__container--cards--img" src={stats.image} alt="" />
                <div className="articles__container--cards--infosection">
                    <h4 className="articles__container--cards--title">{stats.title}</h4>
                    <p className="articles__container--cards--about">{stats.about}</p>
                </div>
            </div>
        ))}
        </div>     
        </section>
        
    )
}
export default Article