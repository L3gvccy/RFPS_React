import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlipCard from "../components/flip-card";

export default function Directions() {
    const [shown, setShown] = useState(false);
    const [canClose, setCanClose] = useState(false);

    useEffect(() => {
        const directions = document.querySelectorAll(".direction");

        const handleHover = () => {
        if (shown) return;

        const modalEl = document.getElementById("infoModal");
        const modal = new window.bootstrap.Modal(modalEl, {
            backdrop: "static",
            keyboard: false,
        });
        modal.show();

        setShown(true);
        directions.forEach((el) =>
            el.removeEventListener("mouseenter", handleHover)
        );
        };

        directions.forEach((el) => el.addEventListener("mouseenter", handleHover));

        return () => {
        directions.forEach((el) =>
            el.removeEventListener("mouseenter", handleHover)
        );
        };
    }, [shown]);

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setCanClose(checked);
    };

    const handleClose = () => {
        if (canClose) {
        const modalEl = document.getElementById("infoModal");
        const modal = window.bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        }
    };

    return (
        <>
            <div
                className="modal fade"
                id="infoModal"
                tabIndex="-1"
                aria-labelledby="infoModalLabel"
                aria-hidden="true"
                >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="infoModalLabel">
                        Попередження
                        </h5>
                    </div>
                    <div className="modal-body">
                        <p>У зв'язку з воєнним станом на території України, деякі напрямки діяльності можуть варіюватись у вартості та терміні виконання. Для уточнення деталей зверніться до наших менеджерів.</p>
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="dontShowAgain"
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="dontShowAgain">
                            Я розумію, не показувати знову
                        </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-danger"
                        disabled={!canClose}
                        onClick={handleClose}
                        >
                        Закрити
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            

            <div className="container py-3">
                <main>
                    <h2 className="text-center">Напрями діяльності</h2>
                    <div className="row">
                        <FlipCard
                            name="1. Розробка веб-застосунків"
                            imgSrc="./web.png"
                            imgAlt="Веб-розробка"
                            backContent="Основну правову базу для розробки веб-застосунків в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на створення ПЗ, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC)."
                        >
                            <p className="text-center">
                                Створення сучасних веб-рішень для бізнесу та організацій.
                                <br />
                                <span id="gov-collab">
                                Співпраця з <b><i>Міністерством цифрової трансформації України</i></b>.
                                </span>
                            </p>
                        </FlipCard>
                        <FlipCard
                            name="2. Розробка мобільних застосунків"
                            imgSrc="./mobile.png"
                            imgAlt="Мобільна розробка"
                            backContent="Основну правову базу для розробки мобільних застосунків в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на створення ПЗ, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC)."
                        >
                            <p className="text-center">Нативні та кросплатформені мобільні додатки для iOS та Android.</p>
                        </FlipCard>
                        <FlipCard
                            name="3. Хмарні рішення"
                            imgSrc="./cloud.png"
                            imgAlt="Хмарні технології"
                            backContent="Основну правову базу для впровадження хмарних рішень в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на надання послуг, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC)."
                        >
                            <p className="text-center">Інфраструктурні рішення з використанням хмарних сервісів.</p>
                        </FlipCard>
                        <FlipCard
                            name="4. Кібербезпека"
                            imgSrc="./security.png"
                            imgAlt="Кібербезпека"
                            backContent="Основну правову базу для діяльності в сфері кібербезпеки в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на надання ІТ-послуг, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та державні стандарти інформаційної безпеки (ДСТУ, ISO/IEC)."
                        >
                            <p className="text-center">Захист даних, аудит безпеки, розробка політик безпеки.</p>
                        </FlipCard>
                        <FlipCard
                            name="5. Штучний інтелект"
                            imgSrc="./ai.png"
                            imgAlt="Штучний інтелект"
                            backContent="Основну правову базу для діяльності зі створення та використання систем ШІ в Україні складають Цивільний кодекс (ст. 627–638) щодо договорів на розробку програмного забезпечення, Закон «Про авторське право і суміжні права» (ст. 11–12, 50), Закон «Про захист персональних даних» (ст. 6, 8), Закон «Про електронну комерцію» (ст. 4–5) та стандарти ДСТУ, ISO/IEC."
                        >
                            <p className="text-center">Впровадження рішень на основі машинного навчання та AI.</p>
                        </FlipCard>
                    </div>

                    <Link to="/">
                        <p className="btn">⬅ Повернутися на головну</p>
                    </Link>
                </main>
                </div>
        </>
    )
}