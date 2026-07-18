const WA_NUMBER = '201102574102';
const PHONE_DISPLAY = '01102574102';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function formatMoney(num) {
  return Number(num).toLocaleString('ar-EG');
}

function openWhatsApp(message = 'مرحبًا، أريد الاستفسار عن عقار من موقع EstateX') {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function propertyCard(item) {
  const rentClass = item.purpose === 'إيجار' ? 'rent' : '';
  return `
    <article class="property-card clickable-card reveal" role="link" tabindex="0" aria-label="عرض تفاصيل ${item.title}" data-details-url="property-details.html?id=${item.id}" data-city="${item.city}" data-type="${item.type}" data-purpose="${item.purpose}" data-price="${item.price}" data-title="${item.title}">
      <div class="property-media">
        <span class="badge ${rentClass}">${item.badge}</span>
        <button class="favorite" type="button" aria-label="إضافة للمفضلة">♡</button>
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="property-body">
        <h3 class="property-title">${item.title}</h3>
        <div class="property-loc">📍 ${item.location}</div>
        <div class="property-info">
          <span>${item.area} م²</span>
          <span>${item.beds || '-'} غرف</span>
          <span>${item.baths || '-'} حمام</span>
          <span>${item.garages || '-'} جراج</span>
        </div>
        <div class="property-footer">
          <div class="price">${item.priceLabel}</div>
        </div>
      </div>
    </article>
  `;
}

function renderProperties(targetSelector, data = PROPERTIES, limit) {
  const target = $(targetSelector);
  if (!target) return;
  const items = typeof limit === 'number' ? data.slice(0, limit) : data;
  if (!items.length) {
    target.innerHTML = `<div class="empty-state">لا توجد عقارات مطابقة للبحث الحالي. جرّب تغيير الفلاتر.</div>`;
  } else {
    target.innerHTML = items.map(propertyCard).join('');
  }
  initReveal();
  initFavorites();
  initPropertyCardNavigation();
}

function initPropertyCardNavigation() {
  $$('.clickable-card:not([data-navigation-ready])').forEach(card => {
    const openDetails = () => {
      window.location.href = card.dataset.detailsUrl;
    };

    card.addEventListener('click', event => {
      if (event.target.closest('.favorite')) return;
      openDetails();
    });

    card.addEventListener('keydown', event => {
      if (event.target.closest('.favorite')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDetails();
      }
    });

    card.dataset.navigationReady = 'true';
  });
}

function fillSelectOptions() {
  const cities = [...new Set(PROPERTIES.map(p => p.city))];
  const types = [...new Set(PROPERTIES.map(p => p.type))];
  $$('.city-select').forEach(select => {
    select.innerHTML = `<option value="">كل المدن</option>` + cities.map(c => `<option value="${c}">${c}</option>`).join('');
  });
  $$('.type-select').forEach(select => {
    select.innerHTML = `<option value="">كل الأنواع</option>` + types.map(t => `<option value="${t}">${t}</option>`).join('');
  });
}

function getFilterData(form) {
  const formData = new FormData(form);
  return {
    q: (formData.get('q') || '').toString().trim().toLowerCase(),
    city: formData.get('city') || '',
    type: formData.get('type') || '',
    purpose: formData.get('purpose') || '',
    maxPrice: Number(formData.get('maxPrice') || 0)
  };
}

function applyFilters(filters) {
  return PROPERTIES.filter(p => {
    const haystack = `${p.title} ${p.location} ${p.city} ${p.type}`.toLowerCase();
    const matchQ = !filters.q || haystack.includes(filters.q);
    const matchCity = !filters.city || p.city === filters.city;
    const matchType = !filters.type || p.type === filters.type;
    const matchPurpose = !filters.purpose || p.purpose === filters.purpose;
    const matchPrice = !filters.maxPrice || p.price <= filters.maxPrice;
    return matchQ && matchCity && matchType && matchPurpose && matchPrice;
  });
}

function initFilters() {
  fillSelectOptions();
  $$('.property-filter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const filters = getFilterData(form);
      const filtered = applyFilters(filters);
      const target = form.dataset.target || '#propertiesGrid';
      renderProperties(target, filtered);
      if (location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/')) {
        location.href = `properties.html?q=${encodeURIComponent(filters.q)}&city=${encodeURIComponent(filters.city)}&type=${encodeURIComponent(filters.type)}&purpose=${encodeURIComponent(filters.purpose)}&maxPrice=${filters.maxPrice || ''}`;
      }
    });
  });
}

function initPropertiesPage() {
  const grid = $('#propertiesGrid');
  if (!grid) return;
  const params = new URLSearchParams(location.search);
  const initial = {
    q: (params.get('q') || '').toLowerCase(),
    city: params.get('city') || '',
    type: params.get('type') || '',
    purpose: params.get('purpose') || '',
    maxPrice: Number(params.get('maxPrice') || 0)
  };
  const form = $('.property-filter-form');
  if (form) {
    if (initial.q) form.elements.q.value = initial.q;
    if (initial.city) form.elements.city.value = initial.city;
    if (initial.type) form.elements.type.value = initial.type;
    if (initial.purpose) form.elements.purpose.value = initial.purpose;
    if (initial.maxPrice) form.elements.maxPrice.value = initial.maxPrice;
  }
  renderProperties('#propertiesGrid', applyFilters(initial));
  renderQuickList();
  const sort = $('#sortProperties');
  if (sort) {
    sort.addEventListener('change', () => {
      const current = applyFilters(getFilterData(form));
      if (sort.value === 'low') current.sort((a,b) => a.price - b.price);
      if (sort.value === 'high') current.sort((a,b) => b.price - a.price);
      if (sort.value === 'area') current.sort((a,b) => b.area - a.area);
      renderProperties('#propertiesGrid', current);
    });
  }
}

function renderQuickList() {
  const target = $('#quickList');
  if (!target) return;
  target.innerHTML = PROPERTIES.slice(0, 4).map(p => `
    <a class="quick-item" href="property-details.html?id=${p.id}">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <span><strong>${p.title}</strong><span>${p.priceLabel}</span></span>
    </a>
  `).join('');
}

function initDetailsPage() {
  const wrap = $('#detailsContent');
  if (!wrap) return;
  const id = Number(new URLSearchParams(location.search).get('id') || 1);
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];
  document.title = `${property.title} | EstateX`;
  $('#detailsTitle').textContent = property.title;
  $('#detailsLocation').textContent = property.location;
  $('#detailsPrice').textContent = property.priceLabel;
  $('#detailsDesc').textContent = property.desc;
  $('#detailsSpecs').innerHTML = `
    <div class="spec"><b>${property.area}</b><span>متر مربع</span></div>
    <div class="spec"><b>${property.beds || '-'}</b><span>غرف نوم</span></div>
    <div class="spec"><b>${property.baths || '-'}</b><span>حمام</span></div>
    <div class="spec"><b>${property.garages || '-'}</b><span>جراج</span></div>
  `;
  $('#detailsGallery').innerHTML = `
    <img class="gallery-main" src="${property.gallery[0]}" alt="${property.title}">
    <div class="gallery-side">
      ${property.gallery.slice(1,4).map(img => `<img src="${img}" alt="${property.title}">`).join('')}
    </div>
  `;
  $('#detailsBadge').textContent = property.badge;
  $('#detailsBadge').className = `badge ${property.purpose === 'إيجار' ? 'rent' : ''}`;
  $('.whatsapp-property')?.addEventListener('click', () => openWhatsApp(`مرحبًا، أريد الاستفسار عن ${property.title} بسعر ${property.priceLabel}`));
  renderProperties('#similarProperties', PROPERTIES.filter(p => p.id !== property.id && (p.city === property.city || p.type === property.type)).slice(0, 3));
}

function initHero() {
  const slider = $('#heroSlider');
  if (!slider) return;
  slider.innerHTML = HERO_SLIDES.map((slide, index) => `
    <div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image:url('${slide.image}')"></div>
  `).join('');
  const title = $('#heroTitle');
  const desc = $('#heroDesc');
  let current = 0;
  const setSlide = (next) => {
    current = (next + HERO_SLIDES.length) % HERO_SLIDES.length;
    $$('.hero-slide', slider).forEach((el, i) => el.classList.toggle('active', i === current));
    const words = HERO_SLIDES[current].title.split(' ');
    title.innerHTML = `${words.slice(0, -1).join(' ')} <strong>${words.at(-1)}</strong>`;
    desc.textContent = HERO_SLIDES[current].text;
  };
  $('#nextSlide')?.addEventListener('click', () => setSlide(current + 1));
  $('#prevSlide')?.addEventListener('click', () => setSlide(current - 1));
  setInterval(() => setSlide(current + 1), 5500);
}

function initReveal() {
  const items = $$('.reveal:not(.ready)');
  items.forEach(item => item.classList.add('ready'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach(item => observer.observe(item));
}

function initCounters() {
  const counters = $$('.counter');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count || 0);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = `${current}+`;
      }, 18);
      observer.unobserve(el);
    });
  }, {threshold:.4});
  counters.forEach(c => observer.observe(c));
}

function initFavorites() {
  $$('.favorite').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
      showToast(btn.classList.contains('active') ? 'تمت الإضافة للمفضلة' : 'تم الحذف من المفضلة');
    });
  });
}

function showToast(text) {
  let toast = $('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function initNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
  $('.menu-btn')?.addEventListener('click', () => $('.nav-links')?.classList.toggle('open'));
  window.addEventListener('scroll', () => $('.header')?.classList.toggle('scrolled', scrollY > 20));
}

function initContactForms() {
  $$('.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'عميل جديد';
      const phone = data.get('phone') || '';
      const type = data.get('type') || '';
      const message = data.get('message') || 'أريد الاستفسار عن العقارات المتاحة';
      openWhatsApp(`مرحبًا، أنا ${name}\nرقمي: ${phone}\nنوع الطلب: ${type}\nالرسالة: ${message}`);
      showToast('سيتم فتح واتساب لإرسال الرسالة');
    });
  });
  $$('.wa-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); openWhatsApp(); }));
}

function initVideoDemo() {
  $('.play')?.addEventListener('click', () => showToast('يمكن ربط الزر بفيديو تعريفي أو جولة افتراضية'));
}

function initHome() {
  if ($('#featuredGrid')) renderProperties('#featuredGrid', PROPERTIES.filter(p => p.featured), 6);
}

window.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHero();
  initFilters();
  initHome();
  initPropertiesPage();
  initDetailsPage();
  initCounters();
  initReveal();
  initContactForms();
  initVideoDemo();
});
