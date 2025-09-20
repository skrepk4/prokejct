const category = ["На день народження", "З фруктами", "Патріотичні", "Для чоловіків", "Для весілля", "Без глютену", "Веганські", "Без цукру", "Для дівчат", "З квітами" , "Класичні рецепти"]
const slider = [
{
  src: "img/cherrycake.png",
  title: "Торти"
},
{
  src: "img/nuts.png",
  title: "Цукерки"
},
{
  src: "img/sweetcakes.png",
  title: "Капкейки"
},
{
  src: "img/macaroons.png",
  title: "Макаруни"
},
{
  src: "img/cookies.png",
  title: "Печиво"
}
];

function Sweet() {
    return(
        <div className="SomeSweet">
            <div className="SomeSweet__wrapper" >
            <div className="SomeSweet__container">
                <div className="SomeSweet__container--box">
                    <h2 className="SomeSweet__container--box--title">Пошукаємо щось смачненького?</h2>
                    <p className="SomeSweet__container--box--p">Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна було замовити ще легше</p>
                </div>

                <label className="SomeSweet__container--box--label">
                    <input className="SomeSweet__container--box--label--input" type="text"></input>   
                    <button className="SomeSweet__container--box--label--btn">Шукати</button>
                </label>
                <div className="SomeSweet__container--categories">
                    {category.map((cat, index) => (
                        <button key={index} className="SomeSweet__container--categories--btn">
                            {cat}
                        </button>
                    ))}
                    <select className="SomeSweet__container--categories--select">
                        <option value="">Інші варіанти</option>
                    </select>
                    <div className="SomeSweet__containers--slider">
                    </div>
                </div>
                <div className="SomeSweet__container--slider--arrows"><img className="SomeSweet__container--slider--arrows--img" src="img/keyboard_arrow_right.png" alt="" /> <img className="SomeSweet__container--slider--arrows--img" src="img/keyboard_arrow_left.png" alt="" /></div>
                <div className="SomeSweet__container--slider">
                    {slider.map((item) => (
                        <div key={item.src} className="SomeSweet__container--slider--container" >
                            <img  src={item.src} className="SomeSweet__container--slider--img"></img>
                            <p className="SomeSweet__container--slider--title">{item.title}</p>
                        </div>
                    ))}
            </div>
            </div>
            <div className="SomeSweet__pngs">
                <div className="SomeSweet__pngs--first">
                    <img className="SomeSweet__pngs--first--image1" src="img/cake.png" alt="" />
                    <img className="SomeSweet__pngs--second--image2" src="img/cupcake.png" alt="" />
                </div>
                <div className="SomeSweet__pngs--second">
                    <img className="SomeSweet__pngs--third--image3" src="img/flowercake.png" alt="" />
                </div>
            </div>
            </div>
        </div>

       
    )
}
export default Sweet