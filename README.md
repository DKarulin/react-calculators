## Calculator

Вкладка Calculator.<br />
Простой калькулятор реальзованный с помошью локального state.<br />
Сложение, умножение, вычитание, деление.


## CurrencyConverter

Вкладка CurrencyConverter.<br />
Реализация BLL(Redux).<br />
Конвертатор валют переводит в RUB, USD, EUR.<br />
Курсы валют берутся с внешнего API https://www.cbr-xml-daily.ru/.<br />
Запрос осуществлятся на endpoin https://www.cbr-xml-daily.ru/daily_json.js <br />
Данные загружаются в Redux, данные актуальные.<br />


## CurrencyList

Вкладка CurrencyList.<br />
Актуальные данные по курсу всех валют.<br />
Функциональная компонента, загрузка данных из нее осуществляется с помощью Хука useEffect().<br />
Реализация BLL(Redux).<br />
Курсы валют берутся с внешнего API https://www.cbr-xml-daily.ru/.<br />
Запрос осуществлятся на endpoin https://www.cbr-xml-daily.ru/daily_json.js <br />


