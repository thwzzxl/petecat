aac(() => {
  'use strict';
  // TEMPLATE: change the WhatsApp number to the merchant's number before publication.
  const SETTINGS = { whatsapp: '5531983980744', currency: 'BRL' }; // Configure o número real no formato 55 + DDD + telefone.
  const items = [
    {id:'racao-caes',name:'Ração Premium Cães',category:'Alimentação',pet:'cachorros',price:129.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjQgNjFoNzJsLTggMjRIMzJ6Ii8+PHBhdGggZD0iTTI5IDU4cTMxLTM1IDYyIDAiLz48Y2lyY2xlIGN4PSI1NCIgY3k9IjQ5IiByPSIzIi8+PGNpcmNsZSBjeD0iNjgiIGN5PSI0NSIgcj0iMyIvPjwvZz48L3N2Zz4=',badge:'Nutrição Cães'},
    {id:'racao-gatos',name:'Ração Gatos Adultos',category:'Alimentação',pet:'gatos',price:89.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjQgNjFoNzJsLTggMjRIMzJ6Ii8+PHBhdGggZD0iTTI5IDU4cTMxLTM1IDYyIDAiLz48Y2lyY2xlIGN4PSI1NCIgY3k9IjQ5IiByPSIzIi8+PGNpcmNsZSBjeD0iNjgiIGN5PSI0NSIgcj0iMyIvPjwvZz48L3N2Zz4=',badge:'Nutrição Gatos'},
    {id:'brinquedo-bola',name:'Bola Interativa',category:'Brinquedos',pet:'cachorros',price:29.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIzMyIvPjxwYXRoIGQ9Ik0zNCA0MHE0NSAzIDUxIDQwTTQxIDg4cTMtNDUgNDgtNDciLz48L2c+PC9zdmc+',badge:'Bola de Borracha'},
    {id:'coleira',name:'Coleira Ajustável',category:'Acessórios',pet:'cachorros',price:39.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMzAgMzZoNjB2NDhIMzB6Ii8+PHBhdGggZD0iTTQ1IDM2di04aDMwdjhNNDUgNjJoMzAiLz48L2c+PC9zdmc+',badge:'Passeios'},
    {id:'shampoo',name:'Shampoo Suave',category:'Higiene',pet:'todos',price:34.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0MiIgeT0iNDIiIHdpZHRoPSIzNiIgaGVpZ2h0PSI1OCIgcng9IjgiLz48cGF0aCBkPSJNNTEgNDJWMjhoMTh2MTRNNjAgMjhWMjBoMjMiLz48L2c+PC9zdmc+',badge:'Higiene'},
    {id:'arranhador',name:'Arranhador Compacto',category:'Acessórios',pet:'gatos',price:119.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMzAgMzZoNjB2NDhIMzB6Ii8+PHBhdGggZD0iTTQ1IDM2di04aDMwdjhNNDUgNjJoMzAiLz48L2c+PC9zdmc+',badge:'Bem-estar Felino'},
    {id:'petisco',name:'Petiscos Naturais',category:'Alimentação',pet:'cachorros',price:24.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjQgNjFoNzJsLTggMjRIMzJ6Ii8+PHBhdGggZD0iTTI5IDU4cTMxLTM1IDYyIDAiLz48Y2lyY2xlIGN4PSI1NCIgY3k9IjQ5IiByPSIzIi8+PGNpcmNsZSBjeD0iNjgiIGN5PSI0NSIgcj0iMyIvPjwvZz48L3N2Zz4=',badge:'Recompensas'},
    {id:'caminha',name:'Caminha Aconchego',category:'Acessórios',pet:'todos',price:159.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMzAgMzZoNjB2NDhIMzB6Ii8+PHBhdGggZD0iTTQ1IDM2di04aDMwdjhNNDUgNjJoMzAiLz48L2c+PC9zdmc+',badge:'Descanso'},
    {id:'mix-aves',name:'Mix de Sementes para Aves',category:'Alimentação',pet:'passaros',price:24.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjQgNjFoNzJsLTggMjRIMzJ6Ii8+PHBhdGggZD0iTTI5IDU4cTMxLTM1IDYyIDAiLz48Y2lyY2xlIGN4PSI1NCIgY3k9IjQ5IiByPSIzIi8+PGNpcmNsZSBjeD0iNjgiIGN5PSI0NSIgcj0iMyIvPjwvZz48L3N2Zz4=',badge:'Para pássaros'},
    {id:'comedouro-aves',name:'Comedouro para Aves',category:'Acessórios',pet:'passaros',price:32.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMzAgMzZoNjB2NDhIMzB6Ii8+PHBhdGggZD0iTTQ1IDM2di04aDMwdjhNNDUgNjJoMzAiLz48L2c+PC9zdmc+',badge:'Para pássaros'},
    {id:'feno-coelhos',name:'Feno Natural para Coelhos',category:'Alimentação',pet:'pequenos',price:29.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjQgNjFoNzJsLTggMjRIMzJ6Ii8+PHBhdGggZD0iTTI5IDU4cTMxLTM1IDYyIDAiLz48Y2lyY2xlIGN4PSI1NCIgY3k9IjQ5IiByPSIzIi8+PGNpcmNsZSBjeD0iNjgiIGN5PSI0NSIgcj0iMyIvPjwvZz48L3N2Zz4=',badge:'Pequenos pets'},
    {id:'bebedouro',name:'Bebedouro para Pequenos Pets',category:'Acessórios',pet:'pequenos',price:44.90,image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxMjYxNmEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMzAgMzZoNjB2NDhIMzB6Ii8+PHBhdGggZD0iTTQ1IDM2di04aDMwdjhNNDUgNjJoMzAiLz48L2c+PC9zdmc+',badge:'Pequenos pets'},
  ];
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const money = value => new Intl.NumberFormat('pt-BR',{style:'currency',currency:SETTINGS.currency}).format(value);
  const cart = new Map();
  const grid = $('#productGrid');
  const search = $('#productSearch');
  let activeFilter = 'Todos', activePet = 'todos';
  let toastTimer;
  function toast(text){ const el=$('#toast'); el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600); }
  function renderProducts(){
    const q = (search.value||'').trim().toLocaleLowerCase('pt-BR');
    const visible=items.filter(i=>(activeFilter==='Todos'||i.category===activeFilter) && (activePet==='todos'||i.pet===activePet||i.pet==='todos') && `${i.name} ${i.category} ${i.badge}`.toLocaleLowerCase('pt-BR').includes(q));
    grid.innerHTML=visible.map(i=>`<article class="product-card"><div class="product-image"><img src="${i.image}" alt="Ilustração do produto ${i.name}" loading="lazy"><span class="product-category">${i.category}</span></div><div class="product-details"><small>${i.badge}</small><h3>${i.name}</h3><div class="product-bottom"><strong>Sob consulta</strong><button class="add-btn" type="button" data-add="${i.id}" aria-label="Adicionar ${i.name} ao carrinho">+</button></div></div></article>`).join('');
    $('#noProducts').hidden=visible.length!==0;
  }
  function cartCount(){return [...cart.values()].reduce((total,n)=>total+n,0);}
  function updateCart(){
    const count=cartCount(); $('#cartCount').textContent=count;$('#cartHeadingCount').textContent=`(${count})`;
    const rows=[...cart.entries()].map(([id,qty])=>({item:items.find(i=>i.id===id),qty})).filter(r=>r.item);
    $('#cartItems').innerHTML=rows.length?rows.map(({item,qty})=>`<div class="cart-row"><img src="${item.image}" alt=""><div><h3>${item.name}</h3><small>Valor sob consulta</small><div class="qty"><button type="button" data-qty="${item.id}" data-step="-1" aria-label="Remover uma unidade de ${item.name}">−</button><b>${qty}</b><button type="button" data-qty="${item.id}" data-step="1" aria-label="Adicionar uma unidade de ${item.name}">+</button></div></div></div>`).join(''):'<div class="empty-cart"><span>🐾</span>Seu carrinho está vazio.<br>Que tal escolher algo para o seu pet?</div>';
    $('#cartTotal').textContent='Sob consulta';
    $('#sendOrder').disabled=count===0;
    $('#sendOrder').style.opacity=count===0?'.55':'1';
  }
  function add(id){cart.set(id,(cart.get(id)||0)+1);updateCart();toast('Produto adicionado ao carrinho 🐾');}
  grid.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b)add(b.dataset.add);});
  $('#cartItems').addEventListener('click',e=>{const b=e.target.closest('[data-qty]');if(!b)return;const next=(cart.get(b.dataset.qty)||0)+Number(b.dataset.step);if(next<=0)cart.delete(b.dataset.qty);else cart.set(b.dataset.qty,next);updateCart();});
  $$('.chip').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;activePet='todos';$$('.chip').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});renderProducts();}));
  $$('[data-category-jump]').forEach(a=>a.addEventListener('click',()=>{const v=a.dataset.categoryJump;if(['cachorros','gatos','passaros','pequenos'].includes(v)){activeFilter='Todos';activePet=v;}else{activeFilter=v;activePet='todos';}$$('.chip').forEach(x=>{const yes=x.dataset.filter===activeFilter;x.classList.toggle('active',yes);x.setAttribute('aria-pressed',String(yes));});search.value='';renderProducts();}));
  search.addEventListener('input',renderProducts);
  const headerSearch=$('#headerSearch');
  if(headerSearch){headerSearch.addEventListener('input',()=>{ search.value=headerSearch.value; activeFilter='Todos';activePet='todos';$$('.chip').forEach(x=>{const active=x.dataset.filter==='Todos';x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});renderProducts();}); headerSearch.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('#produtos').scrollIntoView({behavior:'smooth'});search.focus({preventScroll:true});}}); }
  let previousFocus=null;
  function openCart(){previousFocus=document.activeElement;$('#cartBackdrop').hidden=false;$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#cartClose').focus();}
  function closeCart(){$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#cartBackdrop').hidden=true;document.body.style.overflow='';previousFocus?.focus?.();}
  $('#cartOpen').addEventListener('click',openCart);$('#cartClose').addEventListener('click',closeCart);$('#cartBackdrop').addEventListener('click',closeCart);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#cartDrawer').classList.contains('open'))closeCart();});
  $('#clearCart').addEventListener('click',()=>{cart.clear();updateCart();});
  function openWhatsApp(message){
    if(!/^\d{12,13}$/.test(SETTINGS.whatsapp)){toast('Configure o número da loja em script.js antes de usar o WhatsApp.');return;}
    window.open(`https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }
  $('#sendOrder').addEventListener('click',()=>{
    const lines=['Olá! Gostaria de consultar a disponibilidade destes produtos:', ''];
    for(const [id,qty] of cart){const item=items.find(i=>i.id===id);if(item)lines.push(`${qty}x ${item.name}`);}
    lines.push('','Podem confirmar estoque, preços e opções de entrega/retirada?');
    openWhatsApp(lines.join('\n'));
  });
  $('#contactWhatsapp').addEventListener('click',e=>{e.preventDefault();openWhatsApp('Olá! Gostaria de saber mais sobre os produtos e serviços do pet shop.');});
  const toggle=$('#menuToggle'),nav=$('#mainNav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
  $$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target)){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
  $('#year').textContent=new Date().getFullYear();
  renderProducts();updateCart();
})();
