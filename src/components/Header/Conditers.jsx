const workers = [
    {
        id: 1,
        image: "./img/фото.png",
        name: "Інна Пономаренко",
        reviews: "23 відгуки",
        bio: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
        button1: "Торти",
        button2: "Цукерки",
        more: "+3"
    },
    {
        id: 2,
        image: "./img/фото(1).png",
        name: "Home Bakery",
        reviews: "59 відгуки",
        bio: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
        button1: "Торти",
        button2: "Капкейки",
        more: "+3"
    },
    {
        id: 3,
        image: "./img/фото(2).png",
        name: "Іванна Марченко",
        reviews: "15 відгуків",
        bio: "Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...",
        button1: "Макаруни",
        button2: "Капкейки",
        more: "+3"
    }
];
function Conditers(){
    return(

        <section className="workers">
            <div className="cakes__container">
                <h2 className="cakes__container--title">Кращі кондитери</h2>
                <div className="cakes__container--nav">
                    <button className="cakes__container--nav--button">Переглянути всі</button>
                    <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_right.png"></img>
                    <img className="cakes__container--nav--arrow" src="./img/keyboard_arrow_left.png"></img>
                </div>
            </div>
            <div className="workers__container">
                {workers.map((worker, index) => (
                <div className="workers__container--cards--containers">
                    <div className="workers__container--cards--containers--card">
                        <img className="workers__container--cards--containers--img" src={worker.image} />
                        <div className="workers__container--cards--container--info">
                            <h4 className="workers__container--cards--containers--name">{worker.name}</h4>
                            <a className="workers__container--cards--containers--review">{worker.reviews}</a>
                            <p className="workers__container--cards--containers--bio">{worker.bio}</p>
                            <button className="workers__container--cards--containers--buttons">{worker.button1}</button>
                            <button className="workers__container--cards--containers--buttons">{worker.button2}</button>
                            <button className="workers__container--cards--containers--buttons">{worker.more}</button>
                        </div>
                        
                    </div>
                    
                </div>
                ))}
  

            </div>
        </section>
    )
}
export default Conditers