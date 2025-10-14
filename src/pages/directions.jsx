import React from "react";
import { Link } from "react-router-dom";

export default function Directions() {
    return (
        <>
            <div className="container py-3">
                <main>
                    <h2 className="text-center">Напрями діяльності</h2>
                    <div className="row">
                        <section className="direction col-md-12 col-lg-6 col-xl-4 p-3">
                            <div className="border border-2 rounded p-3">
                                <h4 className="text-center">1. Розробка веб-застосунків</h4>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img
                                        src="./web.png"
                                        alt="Веб-розробка"
                                        tabindex="0"
                                        width="300px"
                                    />
                                    </div>
                                    <div className="flip-card-back">
                                        <p>
                                            Основну правову базу для розробки веб-застосунків в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на створення ПЗ, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC).
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                
                                <p className="text-center">
                                    Створення сучасних веб-рішень для бізнесу та організацій.
                                    <br />
                                    <span id="gov-collab">
                                    Співпраця з <b><i>Міністерством цифрової трансформації України</i></b>.
                                    </span>
                                </p>
                            </div>
                        </section>

                        <section className="direction col-md-12 col-lg-6 col-xl-4 p-3">
                            <div className="border border-2 rounded p-3">
                                <h4 className="text-center">2. Розробка мобільних застосунків</h4>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                        src="./mobile.png"
                                        alt="Мобільна розробка"
                                        tabindex="0"
                                        width="300px"
                                        />
                                    </div>
                                    <div className="flip-card-back">
                                        <p>
                                        Основну правову базу для розробки мобільних застосунків в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на створення ПЗ, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC).
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <p className="text-center">Нативні та кросплатформені мобільні додатки для iOS та Android.</p>
                            </div>
                        </section>

                        <section className="direction col-md-12 col-lg-6 col-xl-4 p-3">
                            <div className="border border-2 rounded p-3">
                                <h4 className="text-center">3. Хмарні рішення</h4>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                        src="./cloud.png"
                                        alt="Хмарні технології"
                                        tabindex="0"
                                        width="300px"
                                        />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="text-center">
                                        Основну правову базу для впровадження хмарних рішень в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на надання послуг, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC).
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                
                                <p>Інфраструктурні рішення з використанням хмарних сервісів.</p>
                            </div>
                        </section>

                        <section className="direction col-md-12 col-lg-6 col-xl-4 p-3">
                            <div className="border border-2 rounded p-3">
                                <h4 className="text-center">4. Кібербезпека</h4>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                        src="./security.png"
                                        alt="Кібербезпека"
                                        tabindex="0"
                                        width="300px"
                                        />
                                    </div>
                                    <div className="flip-card-back">
                                        <p>
                                        Основну правову базу для діяльності в сфері кібербезпеки в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на надання ІТ-послуг, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC).
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                
                                <p className="text-center">Захист даних, аудит безпеки, розробка політик безпеки.</p>
                            </div>
                        </section>

                        <section className="direction col-md-12 col-lg-6 col-xl-4 p-3">
                            <div className="border border-2 rounded p-3">
                                <h4 className="text-center">5. Штучний інтелект</h4>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                        src="../ai.png"
                                        alt="Штучний інтелект"
                                        tabindex="0"
                                        width="300px"
                                        />
                                    </div>
                                    <div className="flip-card-back">
                                        <p>
                                        Основну правову базу для діяльності зі створення та використання систем ШІ в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на розробку програмного забезпечення, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та стандарти ДСТУ, ISO/IEC.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                
                                <p className="text-center">Впровадження рішень на основі машинного навчання та AI.</p>
                            </div>
                        </section>
                    </div>

                    <Link to="/">
                        <a href="main.html" className="btn">⬅ Повернутися на головну</a>
                    </Link>
                </main>
                </div>
        </>
    )
}