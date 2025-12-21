// Dados de exemplo (substitua pelos seus produtos de afiliado)
const destaqueProdutos = [
  {
    id: 1,
    titulo: "Smartphone Samsung A07 128GB Preto 4GB RAM Tela 6,7pol Câm. Dupla + Selfie 8MP",
    preco: "",
    rating: 4.9,
    img: "https://a-static.mlcdn.com.br/300x160/smartphone-samsung-a07-128gb-preto-4gb-ram-tela-67-cam-dupla-selfie-8mp/magazineluiza/240466500/136cee204094a8b1f0fb8344884ef31b.jpg",
    //badge: "NOVIDADE",
    link: "https://divulgador.magalu.com/TfJfNjrv"
  },
  {
    id: 2,
    titulo: "Kit 4 Pneus 175/65R14 Goodyear Assurance Maxlife 86H Aro 14",
    preco: " ",
    rating: 4.8,
    img: "https://a-static.mlcdn.com.br/800x560/kit-4-pneus-175-65r14-goodyear-assurance-maxlife-86h-aro-14/lojaacheipneus/26397k4/3a0a39822262830ae4cdc7e3b3d56ad3.jpeg",
    //badge: "TOP SELLER",
    link: "https://divulgador.magalu.com/Dbky0gcQ"
  },
  {
    id: 3,
    titulo: "Impressora Multifuncional HP DeskJet Ink 2874 Wi-Fi Jato de Tinta Térmico Colorida USB",
    preco: "",
    rating: 4.4,
    img: "https://a-static.mlcdn.com.br/800x560/impressora-multifuncional-hp-deskjet-ink-2874-wi-fi-jato-de-tinta-termico-colorida-usb/magazineluiza/238104700/332ee66de144a6f61d246033f4247224.jpg",
    //badge: "OFERTA",
    link: "https://divulgador.magalu.com/9pBnejxJ"
  }
  
];

const topSellers = [
  { id: 4, 
    titulo: "Geladeira/Refrigerador Electrolux Frost Free AutoSense 3 Portas Inox Look 590L Multidoor Efficient",
     preco: "", 
     rating: 5.0, 
     img:"https://a-static.mlcdn.com.br/800x560/geladeira-refrigerador-electrolux-frost-free-autosense-3-portas-inox-look-590l-multidoor-efficient/magazineluiza/235419900/254aef12c804237bb62804cccff696cc.jpg", 
     /*badge: "TOP",*/
     link: "https://divulgador.magalu.com/m2XoOEt2" },

  { id: 5, 
    titulo: "Smartphone Xiaomi Redmi 15 256gb / 128gb Versão Global Original",
    preco: "",
     rating: 4.9, img: "https://down-bs-br.img.susercontent.com/sg-11134201-824he-mes1gt7n1qm859.webp", 
     //badge: "NOVIDADE",
      link: "https://s.shopee.com.br/6AdmAgqJZD" },
  
      { id: 6, 
     titulo: "Apple iPhone 17 Pro Max 256GB Prateado 6,9pol 48MP iOS 5G",
     preco: "", 
     rating: 4.5, img: "https://a-static.mlcdn.com.br/800x560/apple-iphone-17-pro-max-256gb-prateado-69-48mp-ios-5g/magazineluiza/240588500/2760ed645ef5c7f717819837dd17051e.jpg",
      //badge: "TOP", 
      link: "https://divulgador.magalu.com/-IaOMah6" }
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
  titulo: "Relógio Feminino Champion Original Digital Prata Espelhado Led Branco Coração 064Q" ,
  preco: "", 
  rating: 4.8, 
  img: "https://a-static.mlcdn.com.br/800x560/relogio-feminino-champion-original-digital-prata-espelhado-led-branco-coracao-064q/emporiogrife/15875129742/b1771db7c5cfb316c869c8a7e67828a0.jpeg", 
  link: "https://divulgador.magalu.com/A02TUOEw" }, 
 
  { id:10,
  titulo: "Notebook Ultra, Linux, 15,6 Pol. HD, Intel Celeron, 240GB SSD/ 8GB RAM, Cinza Escovado - UB262 - Multi",
   preco: "",

   rating: 4.6, 
   img: "https://a-static.mlcdn.com.br/800x560/notebook-ultra-linux-156-pol-hd-intel-celeron-240gb-ssd-8gb-ram-cinza-escovado-ub262-multi/obaboxtecnologia/15005328/87e384df2978ec3f36869149a218a0d5.jpeg",
   link: "https://divulgador.magalu.com/Pjol8224" },


 { id:11,
  titulo: "Sapatilha Feminina Mocassim Social ",
  preco: "", 
  rating: 4.8,
   img: "https://down-cvs-br.img.susercontent.com/br-11134207-7qukw-lhxp8bmmk7lj8f.webp", 
   link: "https://s.shopee.com.br/7V992ddnm8" },

  { id:12,
    titulo: "Sapatilha Bico Fino Feminina Mocassim Detalhe Metalizado",
    preco: "",
    rating: 4.8, 
    img: "https://down-bs-br.img.susercontent.com/4f6db4483e620ba12019fb4399d7f972.webp", 
    link: "https://s.shopee.com.br/9pX3pCSWLp" },

  { id:13,
    titulo: " Relogio smartwatch Filikeu Masculino à Prova D'água Esportivo",
    preco: "",
    rating: 4.9,
    img: "https://down-bs-br.img.susercontent.com/br-11134207-81z1k-mhv9m5085uyu30.webp",
    link: "https://s.shopee.com.br/8KiGlGbzL6" },

  { id:14,
    titulo: "Furadeira Parafusadeira de impacto Gsb 550 Re Bosch 220v + Bolsa",
    preco: "", 
    rating: 4.0,
    img: "https://down-zl-br.img.susercontent.com/br-11134207-81z1k-mg6fxmtfllog71.webp ",
    link: "https://s.shopee.com.br/1VrwbbcfrK" }
];

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
            <a class="btn primary" href="${prod.link}" target="_blank" rel="noopener">Acesso à loja</a>
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
          <a class="btn primary" href="${p.link}" target="_blank" rel="noopener">Acesso à loja</a>
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