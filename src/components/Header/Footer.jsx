function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container--content">
                    <div className="footer__container--content--main">
                        <h2 className="footer__container--content--main--title">MyCake</h2>
                        <button className="footer__container--content--main--btn"><img className="footer__container--content--main--btn--img" src="./img/location_pin.png" alt="" />Вся Україна</button>
                    </div>
                    <nav className="footer__container--content--nav">
                        <a className="footer__container--content--nav--first" href="">Десерти</a>
                        <a className="footer__container--content--nav--second" href="">Кращі кондитери</a>
                        <a className="footer__container--content--nav--third" href="">Корисні статті</a>
                    </nav>
                    <div className="footer__container--content--rules">
                        <button className="footer__container--content--rules--button1">Правила користування</button>
                        <button className="footer__container--content--rules--button2">Форма зворотнього зв’язку</button>
                    </div>
                    <div className="footer__container--content--media">
                        <p className="footer__container--content--media--copyright">© Mycake 2022</p>
                        <p className="footer__container--content--media--copyright--second">All rights reserved</p>
                        <div className="footer__container--content--media--buttons">
                            <button className="footer__container--content--media--button1"><img src="./img/Instagram.png" alt="" /></button>
                            <button className="footer__container--content--media--button2"><img src="./img/Youtube.png" alt="" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer