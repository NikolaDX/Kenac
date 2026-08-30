(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`lightbox`),t=document.getElementById(`lightbox-img`),n=document.getElementById(`lightbox-close`),r=document.getElementById(`lightbox-prev`),i=document.getElementById(`lightbox-next`),a=[],o=0;if(!e)return;function s(n){a=Array.from(document.querySelectorAll(`.gallery-img`)),a.length!==0&&(o=n,t.src=a[o].src,e.classList.remove(`hidden`),e.classList.add(`flex`),document.body.style.overflow=`hidden`)}function c(){e.classList.add(`hidden`),e.classList.remove(`flex`),document.body.style.overflow=``}function l(e){a.length!==0&&(o=(o+e+a.length)%a.length,t.src=a[o].src)}document.addEventListener(`click`,e=>{let t=e.target.closest(`.gallery-img`);if(!t)return;a=Array.from(document.querySelectorAll(`.gallery-img`));let n=a.indexOf(t);n!==-1&&s(n)}),n.addEventListener(`click`,c),r.addEventListener(`click`,()=>{l(-1)}),i.addEventListener(`click`,()=>{l(1)}),e.addEventListener(`click`,t=>{t.target===e&&c()}),document.addEventListener(`keydown`,t=>{e.classList.contains(`hidden`)||(t.key===`Escape`&&c(),t.key===`ArrowLeft`&&l(-1),t.key===`ArrowRight`&&l(1))});let u=0,d=0;e.addEventListener(`touchstart`,e=>{u=e.changedTouches[0].screenX},{passive:!0}),e.addEventListener(`touchend`,e=>{d=e.changedTouches[0].screenX,f()},{passive:!0});function f(){let e=d-u;Math.abs(e)<50||l(e<0?1:-1)}}function t(){let e=document.querySelectorAll(`.reveal, .reveal-left, .reveal-right`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.15});e.forEach(e=>{t.observe(e)})}function n(){let e=document.getElementById(`loading-screen`);e&&window.addEventListener(`load`,()=>{e.classList.add(`hidden`),setTimeout(()=>{e.remove()},800)})}var r=document.getElementById(`menuBtn`),i=document.getElementById(`mobileMenu`),a=i.querySelectorAll(`a`),o=document.getElementById(`line1`),s=document.getElementById(`line2`),c=document.getElementById(`line3`);window.addEventListener(`scroll`,()=>{let e=document.querySelector(`header`);window.scrollY>50?e.classList.add(`bg-black/80`):e.classList.remove(`bg-black/80`)}),r.addEventListener(`click`,()=>{l(),i.classList.contains(`max-h-0`)?(o.style.transform=`none`,s.style.opacity=`1`,c.style.transform=`none`):(o.style.transform=`translateY(4px) rotate(45deg)`,s.style.opacity=`0`,c.style.transform=`translateY(-4px) rotate(-45deg)`)}),a.forEach(e=>{e.addEventListener(`click`,()=>{i.classList.contains(`max-h-0`)||(l(),o.style.transform=`none`,s.style.opacity=`1`,c.style.transform=`none`)})});function l(){i.classList.toggle(`max-h-0`),i.classList.toggle(`max-h-100`),i.classList.toggle(`opacity-0`),i.classList.toggle(`opacity-100`)}t(),e(),n();var u=class extends HTMLElement{connectedCallback(){let e=this.getAttribute(`title`)||``,t=this.getAttribute(`description`)||``,n=[...this.querySelectorAll(`img`)].map(e=>`
          <img
            src="${e.getAttribute(`src`)}"
            class="gallery-img rounded-2xl h-96 w-full object-cover hover:scale-105 transition duration-500"
            alt="${e.getAttribute(`alt`)||`Gallery`}"
          />
        `).join(``);this.innerHTML=`
      <div class="text-center mt-20 mb-20">
        <p class="text-2xl font-bold mb-4 mt-4">${e}</p>
        <p class="mb-4">${t}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6" id="gallery-grid">
        ${n}
      </div>
    `}};customElements.define(`photo-gallery`,u);var d=class extends HTMLElement{connectedCallback(){let e=this.getAttribute(`phone`),t=this.getAttribute(`email`),n=this.getAttribute(`address`),r=this.getAttribute(`instagram`),i=this.getAttribute(`facebook`);this.innerHTML=`
      <div class="space-y-8">

        ${e?`
          <a href="tel:${e}" class="flex items-center gap-5 group">
            <span class="flex-shrink-0 size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors group-hover:bg-current/10">
              ${this.phoneIcon()}
            </span>

            <div class="text-left">
              <p class="text-xs uppercase tracking-wider text-white/40 mb-1">
                Telefon
              </p>
              <p class="text-white/90 group-hover:text-white transition-colors">
                ${e}
              </p>
            </div>
          </a>
        `:``}

        ${t?`
          <a href="mailto:${t}" class="flex items-center gap-5 group">
            <span class="flex-shrink-0 size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors group-hover:bg-current/10">
              ${this.emailIcon()}
            </span>

            <div class="text-left">
              <p class="text-xs uppercase tracking-wider text-white/40 mb-1">
                Email
              </p>
              <p class="text-white/90 group-hover:text-white transition-colors">
                ${t}
              </p>
            </div>
          </a>
        `:``}

        ${n?`
          <div class="flex items-center gap-5">
            <span class="flex-shrink-0 size-12 rounded-full border border-current gold-text flex items-center justify-center">
              ${this.locationIcon()}
            </span>

            <div class="text-left">
              <p class="text-xs uppercase tracking-wider text-white/40 mb-1">
                Adresa
              </p>
              <p class="text-white/90">
                ${n}
              </p>
            </div>
          </div>
        `:``}

        <div class="flex gap-4 pt-2">

          ${r?`
            <a
              href="${r}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors hover:bg-current/10"
            >
              ${this.instagramIcon()}
            </a>
          `:``}

          ${i?`
            <a
              href="${i}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors hover:bg-current/10"
            >
              ${this.facebookIcon()}
            </a>
          `:``}

        </div>

      </div>
    `}phoneIcon(){return`
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="size-5">
        <path
          fill-rule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clip-rule="evenodd"
        />
      </svg>
    `}emailIcon(){return`
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="size-5">
        <path
          d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
        />
        <path
          d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
        />
      </svg>
    `}locationIcon(){return`
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="size-5">
        <path
          fill-rule="evenodd"
          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clip-rule="evenodd"
        />
      </svg>
    `}instagramIcon(){return`
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="1.8"
           class="size-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    `}facebookIcon(){return`
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="size-5">
        <path
          d="M14 8h3V4h-3c-2.761 0-5 2.239-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z"
        />
      </svg>
    `}};customElements.define(`contact-info`,d);