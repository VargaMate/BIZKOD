//tables data from server
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

//user data from server
const user = {
  user_f_name: "Akos",
  user_l_name: "Nagy",
  email: "valami@gmail.com",
  id: 1,
};
document.getElementById("username").innerHTML =
  user.user_f_name + " " + user.user_l_name;

const loadUser = async () => {
  const username = document.getElementById("username");

  await fetch("https://example.com/profile", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      username.innerHTML = data.user.user_f_name + " " + data.user.user_l_name;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const sendData = async () => {
  const errorAlert = document.getElementById("error");
  const successAlert = document.getElementById("success");

  const current_week = [];
  const next_week = [];
  for (let i = 0; i < 7; i++) {
    if (document.getElementById("current_week" + (i + 1)).checked) {
      current_week.push(1);
    } else {
      current_week.push(0);
    }

    if (document.getElementById("next_week" + (i + 1)).checked) {
      next_week.push(1);
    } else {
      next_week.push(0);
    }
  }

  const data = {
    current_week,
    next_week,
    user_id: user.id,
  };

  await fetch("https://example.com/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      errorAlert.style.display = "none";
      successAlert.style.display = "block";

      console.log("Success:", data);
    })
    .catch((error) => {
      successAlert.style.display = "none";
      errorAlert.style.display = "block";

      console.error("Error:", error);
    });

  const hideAlerts = () => {
    errorAlert.style.display = "none";
    successAlert.style.display = "none";
  };

  for (let i = 0; i < 7; i++) {
    document
      .getElementById("current_week" + (i + 1))
      .addEventListener("change", hideAlerts);
    document
      .getElementById("next_week" + (i + 1))
      .addEventListener("change", hideAlerts);
  }
};

const loadTablesCurrentWeek = () => {
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
};

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

const departmentsFilter = () => {
  const filter = document.getElementById("departments").value;

  const poslovi = document.getElementById("poslovi-info");
  const polovni = document.getElementById("polovni-info");
  const fourzida = document.getElementById("4zida-info");

  switch (filter) {
    case "all":
      poslovi.style.display = "block";
      polovni.style.display = "block";
      fourzida.style.display = "block";
      break;

    case "1":
      poslovi.style.display = "block";
      polovni.style.display = "none";
      fourzida.style.display = "none";
      break;

    case "2":
      poslovi.style.display = "none";
      polovni.style.display = "block";
      fourzida.style.display = "none";
      break;

    case "3":
      poslovi.style.display = "none";
      polovni.style.display = "none";
      fourzida.style.display = "block";
      break;

    default:
      break;
  }
};

const windowLoad = () => {
  loadTablesCurrentWeek();
  loadUser();
};

window.addEventListener("load", windowLoad);
