import React from "react";
import { useState } from "react";

export default function Feedback() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            alert("Форма відправлена!");
        }
        setValidated(true);
    };

    return (
        <div className="row">
            <div className="col-md-8 p-3">
                <h3 className="text-center">Форма зворотнього зв’язку</h3>
                <form className={validated ? "was-validated" : ""} noValidate onSubmit={handleSubmit}>
                    <fieldset className="border rounded p-3 mb-4">
                        <legend className="float-none w-auto px-2">
                            Персональна інформація
                        </legend>

                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">
                            Прізвище та ім’я:
                            </label>
                            <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                            E-mail:
                            </label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                            Вік:
                            </label>
                            <input
                            type="number"
                            name="age"
                            id="age"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="education" className="form-label">
                            Освіта:
                            </label>
                            <select
                            name="education"
                            id="education"
                            className="form-select"
                            required
                            >
                            <option value="">Оберіть</option>
                            <option value="повна">Повна</option>
                            <option value="неповна">Неповна</option>
                            <option value="вища">Вища</option>
                            <option value="професійна">Професійна</option>
                            </select>
                        </div>
                        </fieldset>


                    <div className="mb-3">
                        <label htmlFor="purpose" className="form-label">
                        Мета зворотнього зв’язку:
                        </label>
                        <select name="purpose" id="purpose" className="form-select" required>
                        <option value="">Оберіть</option>
                        <option value="співпраця">Співпраця</option>
                        <option value="скарга">Скарга на порушення права власності</option>
                        <option value="пропозиція">Пропозиція</option>
                        <option value="помилка">Наявність помилки</option>
                        </select>
                    </div>

                    <div className="mb-3 position-relative">
                        <label htmlFor="details" className="form-label">
                        Детально:
                        </label>
                        <textarea
                        name="details"
                        id="details"
                        className="form-control"
                        placeholder="Опишіть вашу ситуацію..."
                        maxLength="500"
                        required
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Дякуючи Вам, ми стаємо кращі! Конкретизуйте мету звернення, будь ласка."
                        ></textarea>
                    </div>

                    <div className="form-check mb-3">
                        <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        className="form-check-input"
                        required
                        />
                        <label htmlFor="consent" className="form-check-label">
                        Даю згоду на обробку персональних даних
                        </label>
                    </div>

                    <div className="d-flex flex-row flex-wrap gap-2">
                        <button type="submit" className="btn btn-primary">
                        Відправити
                        </button>
                        <button type="reset" className="btn btn-secondary">
                        Очистити форму
                        </button>
                    </div>
                    </form>

            </div>
            <div className="col-md-4 p-3">
                <aside>
                    <h4 className="text-center">Отримання відповіді</h4>
                    <p>Наші менеджери працюють за наступним графіком:</p>
                    <div>
                    <p><b>Пн - Пт:</b> 9:00 - 18:00</p>
                    <p><b>Сб:</b> 9:00 - 15:00</p>
                    <p><b>Нд:</b> Вихідний</p>
                    </div>

                    <p>
                    Якщо ви відправляєте запит на зворотній зв'язок в робочий час, ви
                    отримаєте відповідь на вказану електронну пошту протягом 2-х годин.
                    </p>
                </aside>
            </div>
        </div>
    );
}