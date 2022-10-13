let isSucess = false

function verifyFrontend() {
    fetch('https://vendas.unimdebelem.com.br')
        .then(response => {
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


