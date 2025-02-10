let usuarios = [];
const cargarUsuarios = () => {
 axios.get('https://jsonplaceholder.typicode.com/users')
.then(respuesta => {
usuarios = respuesta.data;
mostrarUsuarios(usuarios);
})
.catch(error => {
 console.error('Error al obtener los usuarios:', error);
});
};
const mostrarUsuarios = (usuarios) => {
 const contenedorTarjetas = document.getElementById('contenedorTarjetas');
contenedorTarjetas.innerHTML = '';
 usuarios.forEach(usuario => {
const tarjeta = document.createElement('div');
tarjeta.classList.add('tarjetaUsuario');
 tarjeta.innerHTML = `
 <h3>${usuario.name}</h3>
 <p>Nombre: ${usuario.username}</p>
 <p>Email: ${usuario.email}</p>
 <p>Ciudad: ${usuario.address.city}</p>
<p>Teléfono: ${usuario.phone}</p>
 <p>Empresa:${usuario.company.name}</p>
`;
        contenedorTarjetas.appendChild(tarjeta);
    });
};
const filtrarUsuarios = () => {
const terminoBusqueda = document.getElementById('buscador').value.toLowerCase();
const usuariosFiltrados = usuarios.filter(usuario => {
return (
usuario.name.toLowerCase().includes(terminoBusqueda) ||
 usuario.email.toLowerCase().includes(terminoBusqueda) ||
usuario.address.city.toLowerCase().includes(terminoBusqueda)
);
 });
    mostrarUsuarios(usuariosFiltrados);
};
const agregarUsuario = () => {
const nombre = document.getElementById('nombreUsuario').value;
const email = document.getElementById('emailUsuario').value;
const ciudad = document.getElementById('ciudadUsuario').value;
const telefono = document.getElementById('telefonoUsuario').value;
const empresa = document.getElementById('empresaUsuario').value;
const nuevoUsuario = {
name: nombre,
username: nombre.split(' ')[0],
email: email,
address: { city: ciudad },
phone: telefono,
company: { name: empresa }
};

usuarios.push(nuevoUsuario);
mostrarUsuarios(usuarios);

};
window.onload = cargarUsuarios;