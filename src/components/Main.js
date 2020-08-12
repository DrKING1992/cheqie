import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import CheqieLogo from "../images/cheqielogo.png";
import CtaBackground from "../images/img_snow_wide.jpg";
import eva from "../images/eva.png";
import kevin from "../images/kevin.png";
import tao from "../images/tao.png";
import send from "../images/send.png";
import map from "../images/map.png";
import checklist from "../images/checklist.png";
import customercare from "../images/customercare.png";
import search from "../images/search.png";
import book from "../images/book.png";


const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();

    const join = (e) => {
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            history.push(`/thanks/${joined}`, date );
        }
    }



    return (
        <React.Fragment>
            <header>




           </header>



            <main>

            <div className="hero-banner">
 
            </div>
               

            <section className="banner">
            <div className="row-banner">
                <div className="column-banner">
                    <img src={CheqieLogo} alt="logo"/>
                    <h1>Vind de huishoudhulp die bij jou past</h1>
                    <p><i className="fa fa-check"></i> Altijd opzegbaar</p>
                    <p><i className="fa fa-check"></i> Een vaste hulp</p>
                    <p><i className="fa fa-check"></i> Behulpzame klantenservice</p>
                    <input className="postcode-input" type="text" placeholder="Vul je postcode in"></input>
                    <button className="button-submit-green"><Link to="/contact">verder</Link></button>   
                </div>
            </div>
            </section>




            <section className="howitworks">
                <h2>Hoe werkt het?</h2>
            <div className="row-how">
                <div className="column-how">
                    <img src={search} alt="search" />
                    <li>Altijd opzegbaar</li>
                    <li>Een vaste hulp</li>
                    <li>Behulpzame klantenservice</li>
                </div>
                <div className="column-how">
                    <img src={book} alt="book"/>
                    <li>Altijd opzegbaar</li>
                    <li>Een vaste hulp</li>
                    <li>Behulpzame klantenservice</li>
                </div>
                <div className="column-how">
                    <img src={send} alt="send"/>
                    <li>Altijd opzegbaar</li>
                    <li>Een vaste hulp</li>
                    <li>Behulpzame klantenservice</li>
                </div>
            </div>
            </section>

    
                <section className="faq">
                    <h2>Veelgestelde vragen</h2>
                <p className="accordion">Dit een voorbeeldvraag 1</p>
                <div className="panel">A. The course is charged in Australian dollars.</div>

                <p className="accordion">Dit een voorbeeldvraag 1</p>
                <div className="panel">A. If it doesn't help you I'll refund the purchase price in full.</div>

                <p className="accordion">Dit een voorbeeldvraag 1</p>
                <div className="panel">A. Depending on the mix of countries and time zones for people attending the webinars, I will pick a time that works best for most participants. All webinars will be recorded so you can listen to them again. The private Facebook group will obviously be available 24/7 and I’ll be monitoring and contributing to the discussion regularly.</div>

                <p className="accordion">Dit een voorbeeldvraag 1</p>
                <div className="panel">A. The self-directed mentoring program is designed to help you set-up and run an effective mentee-mentor relationship as part of the course.</div>                   
                </section>


                <section className="advantages">
                    <h2>Voordelen</h2>
                <div className="row-advantages">
                    <div className="column-advantages">
                        <img src={map} alt="map" />
                        <li>Altijd opzegbaar</li>
                        <li>Een vaste hulp</li>
                        <li>Behulpzame klantenservice</li>
                    </div>
                    <div className="column-advantages">
                        <img src={checklist} alt="checklist"/>
                        <li>Altijd opzegbaar</li>
                        <li>Een vaste hulp</li>
                        <li>Behulpzame klantenservice</li>
                    </div>
                    <div className="column-advantages">
                        <img src={customercare} alt="customercare" />
                        <li>Altijd opzegbaar</li>
                        <li>Een vaste hulp</li>
                        <li>Behulpzame klantenservice</li>
                    </div>
                </div>
                </section>



                <section className="cta-bottom">
                    <img src={CtaBackground} alt="ctabackground"/>
                    <div className="centered">
                        <h2>Start nu je aanvraag!</h2>
                        <input className="postcode-input" type="text" placeholder="Vul je postcode in"></input>
                        <button className="button-submit-green"><Link to="/contact">verder</Link></button>    
                    </div>
                </section>



                <section className="reviews">
                    <h2>Enkele tevreden klanten</h2>
                <div className="row-review">
                    <div className="column-review">
                        <img src={eva} alt="eva"/>
                        <li><b>Eva J*****</b></li>
                        <li>Zaakvoerder</li>
                        <li>Ik ben zeer tevreden blablabla</li>
                    </div>
                    <div className="column-review">
                        <img src={kevin} alt="kevin"/>
                        <li><b>Kevin I*****</b></li>
                        <li>Vuilnisman</li>
                        <li>Ik ben zeer tevreden blablabla</li>
                    </div>
                    <div className="column-review">
                        <img src={tao} alt="logo"/>
                        <li><b>Tao C*****</b></li>
                        <li>Callcenter Mederwerker</li>
                        <li>Ik ben zeer tevreden blablabla</li>
                    </div>
                </div>
                </section>


                <section className="request">
                     <h2>FOOTER</h2>
                        <div className="request-container">
                            <form className="request-form" onSubmit={join}>
                                <input type ="email" placeholder="Email hier invullen" onChange={(e) => setJoined(e.target.value)} />    
                                <input type ="submit" value="Verzenden" />    
                            </form>            
                                
                        </div>
                </section>




            </main>

        </React.Fragment>
    )
}

export default Main;