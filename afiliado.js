// Dados de exemplo (substitua pelos seus produtos de afiliado)
const destaqueProdutos = [
  {
    id: 1,
    titulo: "Smart Tv Philco 50 P50eaa 4k Led Android Tv Dolby Audio 110v/220vmartwatch avançado",
    preco: "",
    rating: 4.9,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_985720-MLA99931783357_112025-F.webp",
    //badge: "NOVIDADE",
    link: "https://mercadolivre.com/sec/2eQZ6Uw"
  },
  {
    id: 2,
    titulo: "Jogo 4 Pneus Itaro Aro 14 IT203 175/75R14 86T",
   preco: "",
    rating: 4.9,
    img: "https://down-bs-br.img.susercontent.com/sg-11134201-7rdx5-lxla4ft03iau53.webp",
    //badge: "TOP SELLER",
    link: "https://s.shopee.com.br/8AOgj6naku"
  },
  {
    id: 3,
    titulo: "Notebook HP 256R G9 Intel Core i3-1315U 15.6 HD Intel UHD Graphics 256GB SSD 8GB RAM Windows 11 Home 64 SL - BQ9K8AT#AK4",
    preco: "",
    rating: 4.4,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_774849-MLA99987332081_112025-F.webp",
    //badge: "OFERTA",
    link: "https://mercadolivre.com/sec/21sBCff"
  }
  
];

const topSellers = [
  { id: 4, 
    titulo: "Console PlayStation 5 Slim Digital 825GB",
     preco: "", 
     rating: 5.0, 
     img:"https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfmltid08v7o56.webp", 
     /*badge: "TOP",*/
     link: "https://s.shopee.com.br/6fZuXtUNaY" },

  { id: 5, 
    titulo: "Furadeira E Parafusadeira De Impacto Sem Fio A Bateria 21v 3/8 Com Maleta E Acessorios Tb-21pzw The Black Tools",
    preco: "",
     rating: 4.8, img: "https://http2.mlstatic.com/D_NQ_NP_2X_665097-MLA98169045976_112025-F.webp", 
     //badge: "NOVIDADE",
      link: "https://mercadolivre.com/sec/1XiRgHC" },
  
      { id: 6, 
     titulo: "Apple iPhone 16 (128 GB) - Branco - Distribuidor Autorizado",
     preco: "", 
     rating: 4.0, img: "https://http2.mlstatic.com/D_NQ_NP_2X_810764-MLA79138886319_092024-F.webp",
      //badge: "TOP", 
      link: "https://mercadolivre.com/sec/2KXLNig" }
];

const gridProdutos = [
  { id: 7,
     titulo: "Kit 4 Blusas Feminina Fitness Dry Fit Camiseta Academia",
     preco: "",
     rating: 4.7, 
     img: "https://http2.mlstatic.com/D_NQ_NP_2X_920257-MLB91454160279_092025-F-kit-4-blusas-feminina-fitness-dry-fit-camiseta-academia.webp", 
     link: "https://mercadolivre.com/sec/2PbHZKP" },

  { id: 8,
    titulo: "Motor de Portão Completo Dz Casa Speed 7 segundos 400kg 2 Controles 3m Cremalheira",
    preco: "",
    rating: 4.9, img: "https://down-bs-br.img.susercontent.com/br-11134207-81z1k-mfzfwgji7rb9e2.webp", 
    link: "https://s.shopee.com.br/5fhLqiZa2K" },

  { id: 9, 
  titulo: "Aminomix Pet 100G" ,
  preco: "", 
  rating: 5.0, 
  img: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m0lmc65ao3a816.webp", 
  link: "https://s.shopee.com.br/8fKyy6cXbo" }, 
 
  { id:10,
  titulo: "40 Dias Cheios do Espírito Santo | Kennedy Carvalho",
   preco: "", 
   rating: 5.0, 
   img: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m8c60eran9wxa1.webp",
   link: "https://s.shopee.com.br/5L4X0MFCrB" },]


 /*{ id:11, titulo: "Batedeira vermelha", preco: "R$ 1200,00", rating: 4.5, img: "assets/produtos/batedeira.jpg", link: "#" },
  { id:12, titulo: "Livros ilustrados", preco: "R$ 59,90", rating: 4.0, img: "assets/produtos/livros.jpg", link: "#" },
  { id:13, titulo: "Shampoo avançado", preco: "R$ 45,90", rating: 4.5, img: "assets/produtos/shampoo.jpg", link: "#" },
  { id:14, titulo: "Tênis corrida", preco: "R$ 359,90", rating: 4.0, img: "assets/produtos/tenis.jpg", link: "#" }
];*/

// Utilidades
function estrelas(rating) {
  const cheias = Math.floor(rating);
  const meio = rating - cheias >= 0.5 ? 1 : 0;
  return "★".repeat(cheias) + (meio ? "½" : "") + "☆".repeat(5 - cheias - meio);
}

// Monta slides8
function criarSlide(prod) {
  return `
    <article class="slide">
      ${prod.badge ? `<span class="badge">${prod.badge}</span>` : ""}
      <div class="content">
        <img src="${prod.img}" alt="${prod.titulo}">
        <div>
          <h3>${prod.titulo}</h3>
         <div class="price">${prod.preco}</div> 
          <div class="rating">${estrelas(prod.rating)}</div>
          <div class="actions">
            <a class="btn" href="${prod.link}" target="_blank" rel="noopener">Ver detalhes</a>
            <a class="btn primary" href="${prod.link}" target="_blank" rel="noopener">Ver Preço</a>
          </div>
        </div>
      </div>
   </article> `
}

  


// Inicializa carrossel
 function initCarousel(root, produtos) {
  const track = root.querySelector(".carousel-track");
  const dots = root.querySelector(".dots");
  const prev = root.querySelector(".prev");
  const next = root.querySelector(".next");
  const interval = Number(root.dataset.interval || 3000);
  let index = 0, timer = null;

  // Render
  track.innerHTML = produtos.map(criarSlide).join("");
  dots.innerHTML = produtos.map((_, i) => `<button class="dot${i===0?' active':''}" aria-label="Ir para slide ${i+1}"></button>`).join("");

  const dotEls = [...dots.querySelectorAll(".dot")];
  function goTo(i) {
    index = (i + produtos.length) % produtos.length;
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
    dotEls.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  function play() {
    stop();
    timer = setInterval(() => goTo(index + 1), interval);
  }
  function stop() { if (timer) clearInterval(timer); }

  prev.addEventListener("click", () => { goTo(index - 1); play(); });
  next.addEventListener("click", () => { goTo(index + 1); play(); });
  dotEls.forEach((d, di) => d.addEventListener("click", () => { goTo(di); play(); }));

  if (root.dataset.autoplay === "true") play();
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", play);

  // Ajusta ao resize
  window.addEventListener("resize", () => goTo(index));
}

// Monta grid
function initGrid(container, produtos) {
  container.innerHTML = produtos.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.titulo}">
      <div class="info">
        <h3>${p.titulo}</h3>
        <div class="meta">
          <span>${p.preco}</span>
          <span>${estrelas(p.rating)}</span>
        </div>
        <div class="buy">
          <a class="btn primary" href="${p.link}" target="_blank" rel="noopener">Ver Preço</a>
        </div>
      </div>
    </article>
  `).join("");
}

// Boot
document.addEventListener("DOMContentLoaded", () => {
  initCarousel(document.querySelectorAll(".carousel")[0], destaqueProdutos);
  initCarousel(document.querySelectorAll(".carousel")[1], topSellers);
  initGrid(document.getElementById("product-grid"), gridProdutos);
});