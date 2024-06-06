function V(x) {
    if (x < 2) {
        return Math.cos(4 * x) - 5;
    } else if (x === 2) {
        return Math.abs(Math.tan(x)) ** 3;
    } else {
        return 2 + Math.sqrt(x) ** 3;
    }
}

function computeAndDisplayValues() {
    const xStart = parseFloat(document.getElementById('xStart').value);
    const xEnd = parseFloat(document.getElementById('xEnd').value);
    const step = parseFloat(document.getElementById('step').value);

    const resultsTableBody = document.getElementById('resultsTableBody');
    resultsTableBody.innerHTML = '';

    for (let x = xStart; x <= xEnd; x += step) {
        const value = V(x);
        const row = resultsTableBody.insertRow();
        const cellX = row.insertCell(0);
        const cellValue = row.insertCell(1);
        cellX.innerHTML = x;
        cellValue.innerHTML = value;
    }
}
