const adicionarBtn = document.querySelector(".btn");

if (adicionarBtn) {
  adicionarBtn.addEventListener("click", () => {
    fetch("/photos")
      .then((res) => res.json())
      .then((data) => {
        const container = document.querySelector(".container");
        data.forEach((photo) => {
          const newDiv = document.createElement("div");
          newDiv.classList.add(
            "tableContainer",
            "d-flex",
            "w-50",
            "mb-5",
            "mx-auto"
          );
          newDiv.innerHTML = `
         
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">${photo.id}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >${photo.title}</td>
                  </tr>
                  <tr>
                    <td >${photo.url}</td>
                  </tr>
                </tbody>
              </table>
            
        `;
          container.appendChild(newDiv);
        });
      })
      .catch((err) => console.error("Erro ao carregar fotos:", err));
  });
}
