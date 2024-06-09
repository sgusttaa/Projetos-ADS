let clientes = [];

    function carregar(status) {
      let divCarregando = document.querySelector('#carregando')
      let divTabelaDados = document.querySelector('#tabelaDados')
      if (status) {
        divCarregando.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `
        divTabelaDados.style.visibility = "hidden"
      } else {
        divCarregando.innerHTML = ""
        divTabelaDados.style.visibility = "visible"
      }
    }
    function carregarDados() {
      carregar(true)
      const url = "https://66266bc2052332d55322d1f0.mockapi.io/cliente";
      fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
          console.log(dados);
          clientes = dados;
          montaTela(clientes);
          carregar(false)
        });
    }
    function montaTela(clientes) {
      let tbody = document.querySelector("#tbody");
      tbody.textContent = "";
      clientes.forEach((element) => {
        let tr = document.createElement("tr");
        let thId = document.createElement("th");
        let tdNome = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdBotaoEditar = document.createElement("td");
        let tdBotaoExcluir = document.createElement("td");
        thId.textContent = element.id;
        tdNome.textContent = element.nome;
        tdEmail.textContent = element.email;
        tdBotaoEditar.innerHTML = `<button type="button" class="btn btn-success" onclick="editarCliente(${element.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>`;
        tdBotaoExcluir.innerHTML = `<button type="button" class="btn btn-danger" onclick="excluirCliente(${element.id})">Excluir</button>`;
        tr.appendChild(thId);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBotaoEditar);
        tr.appendChild(tdBotaoExcluir);
        tbody.appendChild(tr);
      });
    }

    function editarCliente(id) {
      let cli = clientes.find((x) => x.id == id);
      document.querySelector("#idCliente").value = cli.id;
      document.querySelector("#cadNome").value = cli.nome;
      document.querySelector("#cadEmail").value = cli.email;
    }
    function novoCliente(event) {
      event.preventDefault();
      document.querySelector("#idCliente").value = "";
      document.querySelector("#cadNome").value = "";
      document.querySelector("#cadEmail").value = "";
    }
    function excluirCliente(id) {
      const url = "https://66266bc2052332d55322d1f0.mockapi.io/cliente";
      fetch(url + "/" + id, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resposta) => {
        carregarDados();
        appendAlert("Excluído com sucesso!", "danger");
      });
    }

    function pesquisaCliente(event) {
      event.preventDefault();
      let texto = document.querySelector("#pesquisar").value;
      let clientesSelecionados = clientes.filter(
        (x) => x.nome.includes(texto) || x.email.includes(texto)
      );
      montaTela(clientesSelecionados);
    }
    function salvarCliente(event) {
      event.preventDefault();
      let nome = document.querySelector("#cadNome").value;
      let email = document.querySelector("#cadEmail").value;
      let id = document.querySelector("#idCliente").value;
      const url = "https://66266bc2052332d55322d1f0.mockapi.io/cliente";
      if (id == "") {
        //inserir um novo cliente
        let cli = { nome, email };

        fetch(url, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cli),
        }).then((resposta) => {
          carregarDados();
          // window.alert('Salvo com sucesso!')
        });
      } else {
        //editar o cliente
        let cli = { id, nome, email };
        fetch(url + "/" + id, {
          method: "Put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cli),
        }).then((resposta) => {
          carregarDados();
        });
      }
    }
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const appendAlert = (message, type) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById("liveAlertBtn");
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert("Salvo com sucesso!", "success");
      });
    }