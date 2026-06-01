document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FUNCIONALIDADE DE FILTRO (ABAS DE COLAGEM)
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card-section");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove a classe ativa de todos os botões e adiciona ao atual
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            // Mostra ou esconde as seções baseado na categoria
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (filterValue === "all" || filterValue === cardCategory) {
                    card.classList.remove("hidden-card");
                } else {
                    card.classList.add("hidden-card");
                }
            });
        });
    });

    // 2. FUNCIONALIDADE DO "LER MAIS" (REVELAR TEXTO OCULTO)
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Encontra o parágrafo escondido imediatamente anterior ou próximo dentro do mesmo card
            const card = button.closest(".card-section");
            const moreText = card.querySelector(".more-text");

            if (moreText.classList.contains("hidden")) {
                moreText.classList.remove("hidden");
                button.textContent = "➔ Recolher informações";
            } else {
                moreText.classList.add("hidden");
                button.textContent = "Descobrir mais detalhes ➔";
            }
        });
    });
});