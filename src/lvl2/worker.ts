onmessage = function () {
    const url = 'https://api.coinmarketcap.com/v2/ticker/1/';
    fetchData(url)
    .then((price) => {
        self.postMessage(price, <any>undefined);
    })
    .catch((err) => {
        console.error(err);
    });

    setInterval(() => {
        fetchData(url)
        .then((price) => {
            self.postMessage(price, <any>undefined);
        })
        .catch((err) => {
            console.error(err);
        });
        
        console.log('is working')
    }, 10 * 1000);
}

function fetchData(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => {
            resolve(response.data.quotes.USD.price)
        })
        .catch((err) => {
            reject(err);
        });
    })
}