const table = document.getElementById('excel-table');

// Funkcja do tworzenia tabeli o określonej liczbie wierszy i kolumn
function createTable(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.contentEditable = true; // Umożliwienie edycji komórek
            cell.addEventListener('input', function() {
                // Wyświetlenie wartości komórki po edycji
                console.log(this.innerText);
            });
        }
    }
}

// Utworzenie tabeli z 5 wierszami i 5 kolumnami
createTable(5, 5);

