export async function obtenerProductos() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });

    const data = await response.json();
    console.log("dentro de obtener", data);
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerProducto(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
    });

    const data = await response.json();
    console.log("dentro de obtener", data);
  } catch (error) {
    console.log(error);
  }
}

export async function agregarProducto(producto) {
  console.log("esto llega producto a agregar", producto);
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    })
      .then((response) => response.json())
      .then((data) => console.log("estos son los datos que agrego :", data));
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarProducto(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(data => console.log("poducto eliminado => ", data))

  } catch (error) {
    console.log(error);
  }
}

async function actualizarProducto(producto) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${producto.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json ",
        },
        body: JSON.stringify(producto),
      }
    );
    const data = await response.json();
    console.log("desde actualizar producto", data);
  } catch (error) {
    console.log(error);
  }
}
