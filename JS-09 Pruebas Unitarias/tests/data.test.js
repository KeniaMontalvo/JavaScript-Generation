const users = require("../data")

test('Busca el username por id', () => {
    const userAEncontrarPorId = 1; //id que deseo buscar

    //find para encontrar el id que coincida
    const user = users.find(user => user.id === userAEncontrarPorId);

    expect(users).toBeDefined(); //verifica si el valor está definido

    //accedemos al username por medio del user
    const username = user.username;

    //se hace la prueba
    expect(username).toBe("hpLover4");
});

test('Busca correo por id', () => {
    const emailAEncontrarPorId = 2; //id que deseo buscar

    //usamos find para buscar al usuario por su id
    const usuarioPorEncontrar = users.find(user => user.id === emailAEncontrarPorId);

    //definimos si está definido el usuario
    expect(usuarioPorEncontrar).toBeDefined();

    //accedemos al correo por medio del id del usuario
    const correoElectronico = usuarioPorEncontrar.email;

    //hacemos la prueba si el id 2 contiene dicho email
    expect(correoElectronico).toBe("parkerdapete@gmail.com");
})