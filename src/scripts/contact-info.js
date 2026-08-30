class ContactInfo extends HTMLElement {
  connectedCallback() {
    const phone = this.getAttribute("phone");
    const email = this.getAttribute("email");
    const address = this.getAttribute("address");
    const instagram = this.getAttribute("instagram");
    const facebook = this.getAttribute("facebook");

    this.innerHTML = `
      <div class="space-y-8">

        ${
          phone
            ? `
          <a href="tel:${phone}" class="flex items-center gap-5 group">
            <span class="flex-shrink-0 size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors group-hover:bg-current/10">
              ${this.phoneIcon()}
            </span>

            <div class="text-left">
              <p class="text-xs uppercase tracking-wider text-white/40 mb-1">
                Telefon
              </p>
              <p class="text-white/90 group-hover:text-white transition-colors">
                ${phone}
              </p>
            </div>
          </a>
        `
            : ""
        }

        ${
          email
            ? `
          <a href="mailto:${email}" class="flex items-center gap-5 group">
            <span class="flex-shrink-0 size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors group-hover:bg-current/10">
              ${this.emailIcon()}
            </span>

            <div class="text-left">
              <p class="text-xs uppercase tracking-wider text-white/40 mb-1">
                Email
              </p>
              <p class="text-white/90 group-hover:text-white transition-colors">
                ${email}
              </p>
            </div>
          </a>
        `
            : ""
        }

        ${
          address
            ? `
          <div class="flex items-center gap-5">
            <span class="flex-shrink-0 size-12 rounded-full border border-current gold-text flex items-center justify-center">
              ${this.locationIcon()}
            </span>

            <div class="text-left">
              <p class="text-xs uppercase tracking-wider text-white/40 mb-1">
                Adresa
              </p>
              <p class="text-white/90">
                ${address}
              </p>
            </div>
          </div>
        `
            : ""
        }

        <div class="flex gap-4 pt-2">

          ${
            instagram
              ? `
            <a
              href="${instagram}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors hover:bg-current/10"
            >
              ${this.instagramIcon()}
            </a>
          `
              : ""
          }

          ${
            facebook
              ? `
            <a
              href="${facebook}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="size-12 rounded-full border border-current gold-text flex items-center justify-center transition-colors hover:bg-current/10"
            >
              ${this.facebookIcon()}
            </a>
          `
              : ""
          }

        </div>

      </div>
    `;
  }

  phoneIcon() {
    return `
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
    `;
  }

  emailIcon() {
    return `
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
    `;
  }

  locationIcon() {
    return `
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
    `;
  }

  instagramIcon() {
    return `
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
    `;
  }

  facebookIcon() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="size-5">
        <path
          d="M14 8h3V4h-3c-2.761 0-5 2.239-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z"
        />
      </svg>
    `;
  }
}

customElements.define("contact-info", ContactInfo);
