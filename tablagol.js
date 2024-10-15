const datos = [
    { nombre: "Miroslave Klose", mundiales: 4, goles: 16 },
    { nombre: "Ronaldo", mundiales: 4, goles: 15 },
    { nombre: "Gerd Müller", mundiales: 2, goles: 14 },
    { nombre: "Just Fontaine", mundiales: 1, goles: 13 },
    { nombre: "Pele", mundiales: 4, goles: 12 }
];

function crearTabla(datos) {
 
    const table = document.createElement('table');
    table.style.width = '30%';
    table.setAttribute('border', '1'); 
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Nombre', 'mundiales', 'Goles'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);


    const tbody = document.createElement('tbody');
    datos.forEach(item => {
        const row = document.createElement('tr');
        const tdNombre = document.createElement('td');
        tdNombre.textContent = item.nombre;
        const tdmundiales = document.createElement('td');
        tdmundiales.textContent = item.mundiales;
        const tdGoles = document.createElement('td');
        tdGoles.textContent = item.goles;
        row.appendChild(tdNombre);
        row.appendChild(tdmundiales);
        row.appendChild(tdGoles);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}

const tableContainer = document.getElementById('table-container');
const table = crearTabla(datos);
tableContainer.appendChild(table);
