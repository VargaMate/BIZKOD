const tablesData = {
  poslovi: {
    current_week: [
      ["Akos", 1, 0, 1, 1, 0, -1, -1],
      ["Makos", 1, 0, 1, 1, 1, -1, -1],
      ["Bence", 1, 0, 1, 1, 1, -1, -1],
      ["Vladimir", 1, 0, 1, 1, 1, -1, -1],
      ["John", 1, 0, 1, 1, 1, -1, -1],
    ],
    next_week: [
      ["Akos", 0, 0, 0, 1, 0, -1, -1],
      ["Makos", 0, 0, 0, 1, 0, -1, -1],
      ["Bence", 0, 0, 0, 1, 0, -1, -1],
      ["Vladimir", 0, 0, 0, 1, 0, -1, -1],
      ["John", 0, 0, 0, 1, 0, -1, -1],
    ],
  },
  polovni_automobili: {
    current_week: [
      ["Akos", 1, 0, 1, 1, 1, -1, -1],
      ["Makos", 1, 0, 1, 1, 1, -1, -1],
      ["Bence", 1, 0, 1, 1, 1, -1, -1],
      ["Vladimir", 1, 0, 1, 1, 1, -1, -1],
      ["John", 1, 0, 1, 1, 1, -1, -1],
    ],
    next_week: [
      ["Akos", 0, 0, 0, 1, 0, -1, -1],
      ["Makos", 0, 0, 0, 1, 0, -1, -1],
      ["Bence", 0, 0, 0, 1, 0, -1, -1],
      ["Vladimir", 0, 0, 0, 1, 0, -1, -1],
      ["John", 0, 0, 0, 1, 0, -1, -1],
    ],
  },
  fourzida: {
    current_week: [
      ["Akos", 1, 0, 1, 1, 1, -1, -1],
      ["Makos", 1, 0, 1, 1, 1, -1, -1],
      ["Bence", 1, 0, 1, 1, 1, -1, -1],
      ["Vladimir", 1, 0, 1, 1, 1, -1, -1],
      ["John", 1, 0, 1, 1, 1, -1, -1],
    ],
    next_week: [
      ["Akos", 0, 0, 0, 1, 0, -1, -1],
      ["Makos", 0, 0, 0, 1, 0, -1, -1],
      ["Bence", 0, 0, 0, 1, 0, -1, -1],
      ["Vladimir", 0, 0, 0, 1, 0, -1, -1],
      ["John", 0, 0, 0, 1, 0, -1, -1],
    ],
  },
};

function loadTablesCurrentWeek() {
  const posloviTable = document.getElementById("poslovi");
  const posloviRowsCount = tablesData.poslovi.current_week.length;

  for (let i = 0; i < posloviRowsCount; i++) {
    const row = posloviTable.insertRow(i + 2);
    for (let j = 0; j < 8; j++) {
      const cell = row.insertCell(j);

      if (j === 0) {
        cell.classList.add("worker_name");
        cell.innerHTML = tablesData.poslovi.current_week[i][j];
      } else if (tablesData.poslovi.current_week[i][j] === 0) {
        cell.classList.add("office");
        cell.innerHTML = "Office";
      } else if (tablesData.poslovi.current_week[i][j] === 1) {
        cell.classList.add("home");
        cell.innerHTML = "Home";
      } else {
        cell.style.color = "#a3a3a3";
        cell.classList.add("not-working");
        cell.innerHTML = "Not working day";
      }
    }
  }

  const polovniTable = document.getElementById("polovni_automobili");
  const polovniRowsCount = tablesData.polovni_automobili.current_week.length;

  for (let i = 0; i < polovniRowsCount; i++) {
    const row = polovniTable.insertRow(i + 2);
    for (let j = 0; j < 8; j++) {
      const cell = row.insertCell(j);

      if (j === 0) {
        cell.classList.add("worker_name");
        cell.innerHTML = tablesData.polovni_automobili.current_week[i][j];
      } else if (tablesData.polovni_automobili.current_week[i][j] === 0) {
        cell.classList.add("office");
        cell.innerHTML = "Office";
      } else if (tablesData.polovni_automobili.current_week[i][j] === 1) {
        cell.classList.add("home");
        cell.innerHTML = "Home";
      } else {
        cell.style.color = "#a3a3a3";
        cell.classList.add("not-working");
        cell.innerHTML = "Not working day";
      }
    }
  }

  const fourzidaTable = document.getElementById("4zida");
  const fourzidaRowsCount = tablesData.fourzida.current_week.length;

  for (let i = 0; i < fourzidaRowsCount; i++) {
    const row = fourzidaTable.insertRow(i + 2);
    for (let j = 0; j < 8; j++) {
      const cell = row.insertCell(j);

      if (j === 0) {
        cell.classList.add("worker_name");
        cell.innerHTML = tablesData.fourzida.current_week[i][j];
      } else if (tablesData.fourzida.current_week[i][j] === 0) {
        cell.classList.add("office");
        cell.innerHTML = "Office";
      } else if (tablesData.fourzida.current_week[i][j] === 1) {
        cell.classList.add("home");
        cell.innerHTML = "Home";
      } else {
        cell.style.color = "#a3a3a3";
        cell.classList.add("not-working");
        cell.innerHTML = "Not working day";
      }
    }
  }
}

function loadPosloviTable(week) {
  const posloviTable = document.getElementById("poslovi");
  const posloviRowsCount = tablesData.poslovi[week].length;

  for (let i = 0; i < posloviRowsCount; i++) {
    posloviTable.deleteRow(i + 2);
    const row = posloviTable.insertRow(i + 2);
    for (let j = 0; j < 8; j++) {
      const cell = row.insertCell(j);

      if (j === 0) {
        cell.classList.add("worker_name");
        cell.innerHTML = tablesData.poslovi[week][i][j];
      } else if (tablesData.poslovi[week][i][j] === 0) {
        cell.classList.add("office");
        cell.innerHTML = "Office";
      } else if (tablesData.poslovi[week][i][j] === 1) {
        cell.classList.add("home");
        cell.innerHTML = "Home";
      } else {
        cell.style.color = "#a3a3a3";
        cell.classList.add("not-working");
        cell.innerHTML = "Not working day";
      }
    }
  }
}

function loadPolovniTable(week) {
  const polovniTable = document.getElementById("polovni_automobili");
  const polovniRowsCount = tablesData.polovni_automobili[week].length;

  for (let i = 0; i < polovniRowsCount; i++) {
    polovniTable.deleteRow(i + 2);
    const row = polovniTable.insertRow(i + 2);
    for (let j = 0; j < 8; j++) {
      const cell = row.insertCell(j);

      if (j === 0) {
        cell.classList.add("worker_name");
        cell.innerHTML = tablesData.polovni_automobili[week][i][j];
      } else if (tablesData.polovni_automobili[week][i][j] === 0) {
        cell.classList.add("office");
        cell.innerHTML = "Office";
      } else if (tablesData.polovni_automobili[week][i][j] === 1) {
        cell.classList.add("home");
        cell.innerHTML = "Home";
      } else {
        cell.style.color = "#a3a3a3";
        cell.classList.add("not-working");
        cell.innerHTML = "Not working day";
      }
    }
  }
}

function loadFourzidaTable(week) {
  const fourzidaTable = document.getElementById("4zida");
  const fourzidaRowsCount = tablesData.fourzida[week].length;

  for (let i = 0; i < fourzidaRowsCount; i++) {
    fourzidaTable.deleteRow(i + 2);
    const row = fourzidaTable.insertRow(i + 2);
    for (let j = 0; j < 8; j++) {
      const cell = row.insertCell(j);

      if (j === 0) {
        cell.classList.add("worker_name");
        cell.innerHTML = tablesData.fourzida[week][i][j];
      } else if (tablesData.fourzida[week][i][j] === 0) {
        cell.classList.add("office");
        cell.innerHTML = "Office";
      } else if (tablesData.fourzida[week][i][j] === 1) {
        cell.classList.add("home");
        cell.innerHTML = "Home";
      } else {
        cell.style.color = "#a3a3a3";
        cell.classList.add("not-working");
        cell.innerHTML = "Not working day";
      }
    }
  }
}

const windowLoad = () => {
  loadTablesCurrentWeek();
};

window.addEventListener("load", windowLoad);
