const hapi = require('@hapi/hapi');
const routes = require('./routes')

const config = async () => {
    const server = hapi.server({
        port : 5000,
        host : 'localhost',
        routes : {
            cors : {
                origin : ['*'],
            },
        },
    });

    
    server.route(routes)

    await server.start();
    console.log(`Server sedang berjalan di ${server.info.uri}`)
}

config();

