
'use client'

export default function Home() {
  // Ejercicio 1 – Lista de productos con categorias
  const productos = [
    { id: 1, nombre: "Camisetaa", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
    { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
    { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
    { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
    { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
  ];

  // Ejercicio 2 – Lista de usuarios con direcciones
  const usuarios = [
    { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
    { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
    { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
    { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
    { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
  ];

  // Ejercicio 3 – Lista de cursos con modulos
  const cursos = [
    { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
    { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
    { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
    { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
    { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
  ];

  // Ejercicio 4 – Lista de pedidos con productos
  const pedidos = [
    { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
    { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
    { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
    { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
    { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
  ];

  // Ejercicio 5 – Lista de blogs con estructura anidada
  const blogs = [
    {
      id: 1,
      titulo: "Aprendiendo React",
      autor: { nombre: "Ana", pais: "Colombia" },
      categorias: ["JavaScript", "Frontend"],
      comentarios: [
        {
          usuario: "Luis",
          texto: "Muy útil",
          respuestas: [
            {
              usuario: "Marta",
              texto: "Totalmente de acuerdo",
              reacciones: [
                { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
                { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      titulo: "Next.js SSR",
      autor: { nombre: "Luis", pais: "México" },
      categorias: ["JavaScript", "SSR"],
      comentarios: [
        {
          usuario: "Marta",
          texto: "Interesante",
          respuestas: [
            {
              usuario: "Ana",
              texto: "Lo probaré",
              reacciones: [
                { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      titulo: "Node.js API",
      autor: { nombre: "John", pais: "USA" },
      categorias: ["Backend", "API"],
      comentarios: [
        {
          usuario: "Pedro",
          texto: "Me sirvió mucho",
          respuestas: [
            {
              usuario: "Luis",
              texto: "Gracias por compartir",
              reacciones: [
                { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      titulo: "Django ORM",
      autor: { nombre: "Marta", pais: "España" },
      categorias: ["Backend", "Python"],
      comentarios: [
        {
          usuario: "Ana",
          texto: "Claro y conciso",
          respuestas: [
            {
              usuario: "John",
              texto: "Lo usaré en mi proyecto",
              reacciones: [
                { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      titulo: "Flutter Widgets",
      autor: { nombre: "Pedro", pais: "Portugal" },
      categorias: ["Mobile", "UI"],
      comentarios: [
        {
          usuario: "Luis",
          texto: "Genial explicación",
          respuestas: [
            {
              usuario: "Marta",
              texto: "Muy claro todo",
              reacciones: [
                { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Taller de Renderización de Listas en Next.js</h1>

      <section>
        <h2>Ejercicio 1 – Productos</h2>
        <ul>
          {productos.map((p) => (
            <li key={p.id}>{p.nombre} - ${p.precio} - Categoría: {p.categoria.nombre}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Ejercicio 2 – Usuarios</h2>
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              {u.nombre} - {u.direccion.calle}, {u.direccion.ciudad}, {u.direccion.pais}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Ejercicio 3 – Cursos</h2>
        {cursos.map((curso) => (
          <div key={curso.id}>
            <strong>{curso.nombre}</strong>
            <ul>
              {curso.modulos.map((m, i) => (
                <li key={i}>{m.nombre}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Ejercicio 4 – Pedidos</h2>
        {pedidos.map((p) => (
          <div key={p.id}>
            <strong>Cliente: {p.cliente}</strong>
            <ul>
              {p.productos.map((prod, i) => (
                <li key={i}>{prod.nombre} - Cantidad: {prod.cantidad}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Ejercicio 5 – Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.titulo}</h3>
            <p>Autor: {blog.autor.nombre} ({blog.autor.pais})</p>
            <p>Categorías: {blog.categorias.join(", ")}</p>
            <h4>Comentarios:</h4>
            <ul>
              {blog.comentarios.map((comentario, i) => (
                <li key={i}>
                  <strong>{comentario.usuario}</strong>: {comentario.texto}
                  <ul>
                    {comentario.respuestas.map((respuesta, j) => (
                      <li key={j}>
                        <strong>{respuesta.usuario}</strong>: {respuesta.texto}
                        <ul>
                          {respuesta.reacciones.map((r, k) => (
                            <li key={k}>
                              {r.tipo} por {r.usuario.nombre} ({r.usuario.rol})
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
