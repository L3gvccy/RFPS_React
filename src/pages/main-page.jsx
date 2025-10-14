import React from "react";
import { useState, useEffect } from "react";

export default function MainPage() {
  const workUpdateText = "Наш офіс переміщається до вул. В. Васильківська, 1";
  const [workingText, setWorkingText] = useState("");

  useEffect(() => {
    let timeouts = [];

    workUpdateText.split("").forEach((letter, i) => {
      const timeout = setTimeout(() => {
        setWorkingText((prev) => prev + (letter === " " ? "\u00A0" : letter));
      }, 75 * i);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      setWorkingText("");
    };
  }, [workUpdateText]);

  return (
    <main>
      <section>
        <div className="d-flex flex-column justify-content-around">
          <h2 className="text-center" id="hover-change">
            <b>NextApps Corporation</b>
          </h2>
          <p className="text-center fw-bold text-danger" id="working-update">
            {workingText}
          </p>
          <img className="mx-auto" src="./logo.png" alt="logo" width="320px" />
        </div>
      </section>

      <div className="row">
        <div className="col-md-4 p-3">
          <article id="goals">
            <h3>Мета:</h3>
            <p>
              Наша компанія займається розробкою <span><i><b><u>сучасних веб та мобільних застосунків</u></b></i></span>, які допомагають бізнесу автоматизувати процеси та бутиефективнішими.
            </p>
            <div>
              <p>
                👨‍💼 <strong>Директор:</strong> Іван Петренко
              </p>
              <p>
                💡 Очолює розвиток корпорації та відповідає за стратегічне
                планування.
              </p>
            </div>

            <h3>Завдання:</h3>
            <ol type="I">
              <li>Створення корпоративних веб-застосунків.</li>
              <li>Розробка мобільних додатків для iOS та Android.</li>
              <li>Інтеграція з міжнародними сервісами.</li>
            </ol>
          </article>
        </div>
        <div className="col-md-8 p-3">
          <article id="founders">
            <h2 className="text-center mb-3">Засновники компанії</h2>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Прізвище та ініціали</th>
                  <th colSpan="2">Досвід</th>
                  <th>Освіта</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">1</td>
                  <td rowSpan="2">Петренко А.В.</td>
                  <td colSpan="2">12 років</td>
                  <td>КНУ, комп’ютерні науки</td>
                </tr>
                <tr>
                  <td colSpan="3">Спеціалізація: Back-end розробка</td>
                </tr>
                <tr>
                  <td rowSpan="2">2</td>
                  <td rowSpan="2">Іваненко О.М.</td>
                  <td colSpan="2">10 років</td>
                  <td>КНУ, Інженерія програмного забезпечення</td>
                </tr>
                <tr>
                  <td colSpan="3">Спеціалізація: UX/UI дизайн</td>
                </tr>
                <tr>
                  <td rowSpan="2">3</td>
                  <td rowSpan="2">Савчук Д.С.</td>
                  <td colSpan="2">8 років</td>
                  <td>КНУ, Інженерія програмного забезпечення</td>
                </tr>
                <tr>
                  <td colSpan="3">Спеціалізація: Front-end розробка</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-center">
                    Усі засновники мають міжнародний досвід роботи
                  </td>
                </tr>
              </tfoot>
            </table>
          </article>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 p-3">
          <article id="contacts" className="text-center">
            <h3>Контакти</h3>
            <p>
              <em>Адреса:</em> м. Київ, вул. Богдана Гаврилишина, 24
            </p>
            <p>
              <em>Телефон:</em> +38 (044) 123-45-67
            </p>
            <p>
              <em>Email:</em> info@nextapps.com
            </p>
          </article>
        </div>
        <div className="col-md-8 p-3">
          <div className="scrolling-text text-center">
            <p>NextApps Corporation розширює напрямки діяльності!</p>
            <p>Нові хмарні рішення вже доступні для бізнесу.</p>
            <p>Ми впроваджуємо сучасні практики кібербезпеки.</p>
            <p>AI — наш пріоритет у 2025 році.</p>
            <p>Ми підтримуємо інтеграцію з міжнародними сервісами.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
