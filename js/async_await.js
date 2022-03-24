// Async / Await

function descargaNuevosClientes() {
    return new Promise ( resolve => {
        console.log('Descargando clientes...');
        setTimeout(() => {
            resolve('Los clientes fueron descargados.')
        }, 5000);
    })
}

function descargaUltimosPedidos () {
    return new Promise ( resolve => {
        console.log('Descargando pedidos...');
        setTimeout(() => {
            resolve('Los pedidos fueron descargados.')
        }, 3000);
    })
}

async function app() {
    try {
        // const clientes = await descargaNuevosClientes();
        // const pedidos = await descargaUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargaNuevosClientes(), descargaUltimosPedidos() ])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
