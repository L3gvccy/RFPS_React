import React from "react";
import { useState } from "react";
import FormInput from "../components/form-input";
import FormSelect from "../components/form-select";

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

                        <FormInput label="Прізвище та ім’я:" type="text" name="fullname" />
                        <FormInput label="E-mail:" type="email" name="email" />
                        <FormInput label="Вік:" type="text" name="age" />
                        <FormSelect
                            label="Освіта:"
                            name="education"
                            options={[
                                { value: "повна", label: "Повна" },
                                { value: "неповна", label: "Неповна" },
                                { value: "вища", label: "Вища" },
                                { value: "професійна", label: "Професійна" },
                            ]}
                        />
                        
                        </fieldset>

                    <FormSelect
                        label="Мета зворотнього зв’язку:"
                        name="purpose"
                        options={[
                            { value: "співпраця", label: "Співпраця" },
                            { value: "скарга", label: "Скарга на порушення права власності" },
                            { value: "пропозиція", label: "Пропозиція" },
                            { value: "помилка", label: "Наявність помилки" },
                        ]}
                    />

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