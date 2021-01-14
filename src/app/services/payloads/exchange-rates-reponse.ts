export interface ExchangeRatesResponse {
    rates: {
        [key: string]: number
    };
    base: string;
    date: string;
}

// https://exchangeratesapi.io/
// GET https://api.exchangeratesapi.io/latest HTTP/1.1

// {
//   "base": "EUR",
//   "date": "2018-04-08",
//   "rates": {
//     "CAD": 1.565,
//     "CHF": 1.1798,
//     "GBP": 0.87295,
//     "SEK": 10.2983,
//     "EUR": 1.092,
//     "USD": 1.2234,
//     ...
//   }
// }
// インデックスシグニチャ（オブジェクト型・連想配列）
//     {
//         [key: string]: number
//     }


// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


// fetch('https://api.exchangeratesapi.io/latest?base=USD')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// GitHub API
// https://docs.github.com/ja/free-pro-team@latest/rest/overview/resources-in-the-rest-api

// curl -i https://api.github.com/users/octocat/orgs

// JSON-P コールバック
// curl https://api.github.com?callback=foo


