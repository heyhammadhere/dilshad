const form = document.querySelector("form");
const section = document.querySelector("section");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    section.innerHTML = "";
    const file = document.querySelector("input").files[0];
    if (file) {

        Papa.parse(file, {
            complete: function ({ data }) {
                const table = document.createElement("table");
                const rows = data.filter((row) => {
                    return row.length === data[4].length;
                });
                rows.forEach((row) => {
                    const tr = document.createElement("tr");
                    row.forEach((item, index) => {
                        const th = document.createElement("th");
                        const td = document.createElement("td");
                        if (index === 0) {
                            th.textContent = item;
                            tr.appendChild(th);
                        }
                        else {
                            td.textContent = item ? item : "---";
                            tr.appendChild(td);
                        }
                    });
                    table.appendChild(tr);
                });
                section.appendChild(table);
            }
        });
    }
    else {
        alert("Please Select A File");
    }
});