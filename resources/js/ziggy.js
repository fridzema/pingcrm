    var Ziggy = {
        namedRoutes: {"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"],"domain":null},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"],"domain":null},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"],"domain":null},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"login.attempt":{"uri":"login","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"dashboard":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"users":{"uri":"users","methods":["GET","HEAD"],"domain":null},"users.create":{"uri":"users\/create","methods":["GET","HEAD"],"domain":null},"users.store":{"uri":"users","methods":["POST"],"domain":null},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"domain":null},"users.update":{"uri":"users\/{user}","methods":["PUT"],"domain":null},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"domain":null},"users.restore":{"uri":"users\/{user}\/restore","methods":["PUT"],"domain":null},"organizations":{"uri":"organizations","methods":["GET","HEAD"],"domain":null},"organizations.create":{"uri":"organizations\/create","methods":["GET","HEAD"],"domain":null},"organizations.store":{"uri":"organizations","methods":["POST"],"domain":null},"organizations.edit":{"uri":"organizations\/{organization}\/edit","methods":["GET","HEAD"],"domain":null},"organizations.update":{"uri":"organizations\/{organization}","methods":["PUT"],"domain":null},"organizations.destroy":{"uri":"organizations\/{organization}","methods":["DELETE"],"domain":null},"organizations.restore":{"uri":"organizations\/{organization}\/restore","methods":["PUT"],"domain":null},"contacts":{"uri":"contacts","methods":["GET","HEAD"],"domain":null},"contacts.create":{"uri":"contacts\/create","methods":["GET","HEAD"],"domain":null},"contacts.store":{"uri":"contacts","methods":["POST"],"domain":null},"contacts.edit":{"uri":"contacts\/{contact}\/edit","methods":["GET","HEAD"],"domain":null},"contacts.update":{"uri":"contacts\/{contact}","methods":["PUT"],"domain":null},"contacts.destroy":{"uri":"contacts\/{contact}","methods":["DELETE"],"domain":null},"contacts.restore":{"uri":"contacts\/{contact}\/restore","methods":["PUT"],"domain":null},"reports":{"uri":"reports","methods":["GET","HEAD"],"domain":null}},
        baseUrl: 'http://localhost/',
        baseProtocol: 'http',
        baseDomain: 'localhost',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
