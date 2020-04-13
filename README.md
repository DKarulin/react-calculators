## Calculator

Вкладка Calculator.
Простой калькулятор реальзованный с помошью локального state.


## CurrencyConverter

Вкладка CurrencyConverter.
Реализация BLL(Redux).
Конвертатор валют переводит в RUB, USD, EUR.
Курсы валют берутся с внешнего API https://www.cbr-xml-daily.ru/.
Запрос осуществлятся на endpoin https://www.cbr-xml-daily.ru/daily_json.js 
Данные загружаются в Redux, данные актуальные.




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
