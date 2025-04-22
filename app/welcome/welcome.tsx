export function Welcome() {
  return (
    <main className="flex justify-center pt-12 pb-8 px-4 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Вакансия: Агент по работе с клиентами
        </h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Общие сведения</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Сфера: маркетинг недвижимости</li>
            <li>Опыт: не требуется</li>
            <li>Языки: 🇷🇺RU и обязательно 🇹🇷TR, 🇬🇧EN будет плюсом</li>
            <li>Потребуются водительские права</li>
          </ul>
        </section>

        <hr></hr>

        <section>
          <h2 className="text-xl font-semibold mb-2">Кто мы</h2>
          <p className="space-y-2">
            <span>
              Мы — команда, которая решает задачи клиентов, а не просто «продаёт
              метры».
            </span>
            <br />
            <span>
              Помогаем собственникам грамотно выйти на рынок, оформить
              предложение и закрыть сделку эффективно и прозрачно.
            </span>
            <br />
            <span>
              Помогаем покупателям найти жильё по рыночной цене, без мутных
              схем.
            </span>
            <br />
            <span>Ищем не опыт, а мышление. Научим всему нужному.</span>
            <br />
            <span>
              Нужен честный, думающий человек, готовый зарабатывать своим
              трудом.
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            После обучения вы будете
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Находить собственников, заинтересованных в продаже.</li>
            <li>Вести переговоры, согласовывать условия.</li>
            <li>Делать медиаподготовку: фото, видео, описание.</li>
            <li>Оформлять объекты, запускать рекламу.</li>
            <li>Анализировать спрос и управлять эффективностью.</li>
            <li>Работать с покупателями, проводить показы.</li>
            <li>Сопровождать клиентов до закрытия сделки.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Вы</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Хотите помогать людям и хорошо зарабатывать.</li>
            <li>Говорите на русском и турецком (английский — плюс).</li>
            <li>Коммуницируете грамотно и уважительно.</li>
            <li>Готовы к изменениям и быстро обучаетесь.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Эта вакансия не для вас, если вы
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-red-600 dark:text-red-400">
            <li>Не любите работать с клиентами.</li>
            <li>Опытный риэлтор и не готовы менять подход.</li>
            <li>Хотите только фиксированный оклад.</li>
            <li>Нуждаетесь в постоянном контроле.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Мы даём</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Живое обучение без шаблонов и скриптов.</li>
            <li>Эффективные инструменты: таблицы, алгоритмы, систему.</li>
            <li>Наставничество и постоянную поддержку.</li>
            <li>Прозрачную систему вознаграждения.</li>
            <li>Возможность роста — и в доходе, и в знаниях.</li>
          </ul>
        </section>

        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Пишите, если узнали себя — будем рады знакомству!
          </p>
          <a
            href="https://forms.gle/kXUMsEgK6Hy6cDf5A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            Перейти к анкете
          </a>
        </section>
      </div>
    </main>
  );
}
