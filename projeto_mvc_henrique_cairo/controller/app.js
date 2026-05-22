function carregarPerfil() {
  const nomePerfil = document.querySelector("#nome-perfil");
  const descricaoPerfil = document.querySelector("#descricao-perfil");
  const textoSobre = document.querySelector("#texto-sobre");

  if (nomePerfil) {
    nomePerfil.innerHTML = `${perfil.nome} - <span>${perfil.cargo}</span>`;
  }

  if (descricaoPerfil) {
    descricaoPerfil.textContent = perfil.descricao;
  }

  if (textoSobre) {
    textoSobre.innerHTML = perfil.sobre
      .map((paragrafo) => `<p>${paragrafo}</p>`)
      .join("");
  }
}

function carregarProjetos() {
  const listaProjetos = document.querySelector("#lista-projetos");

  if (!listaProjetos) {
    return;
  }

  listaProjetos.innerHTML = projetos
    .map((projeto) => {
      return `
        <article class="project-item">
          <div class="project-item__head">
            <span class="dot dot--${projeto.cor}" aria-hidden="true"></span>
            <strong>${projeto.nome}</strong> —
            <span class="muted">${projeto.tipo}</span>
          </div>

          <p>${projeto.descricao}</p>
          <p class="tech">Tecnologias: ${projeto.tecnologias}</p>
        </article>
      `;
    })
    .join("");
}

function configurarMenuMobile() {
  const botaoMenu = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  if (!botaoMenu || !menu) {
    return;
  }

  botaoMenu.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("is-open");

    botaoMenu.setAttribute("aria-expanded", String(menuAberto));
    botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
  });
}

function configurarFormulario() {
  const formulario = document.querySelector("#contato-form");

  if (!formulario) {
    return;
  }

  formulario.addEventListener("submit", () => {
    const botao = formulario.querySelector(".contact__btn");

    if (botao) {
      botao.textContent = "Enviando...";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  carregarPerfil();
  carregarProjetos();
  configurarMenuMobile();
  configurarFormulario();
});
