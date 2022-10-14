let isSucess = false

function verifyFrontend() {
    fetch('https://vendas.unimedbelem.com.br', {
        method: 'GET',
        mode: 'cors',
    })
        .then(response => {

            console.log(response.data)
            response.text()
            isSucess = true
        })
        .then(text => console.log(text))
}

let interval = setInterval(
    function() {
        if (isSucess) {
            window.location = 'https://vendas.unimedbelem.com.br'
        } else {
            verifyFrontend()
        }
    },
    10000
)


