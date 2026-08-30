class PhotoGallery extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";

    const images = [...this.querySelectorAll("img")];

    const imagesHTML = images
      .map((img) => {
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt") || "Gallery";

        return `
          <img
            src="${src}"
            class="gallery-img rounded-2xl h-96 w-full object-cover hover:scale-105 transition duration-500"
            alt="${alt}"
          />
        `;
      })
      .join("");

    this.innerHTML = `
      <div class="text-center mt-20 mb-20">
        <p class="text-2xl font-bold mb-4 mt-4">${title}</p>
        <p class="mb-4">${description}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6" id="gallery-grid">
        ${imagesHTML}
      </div>
    `;
  }
}

customElements.define("photo-gallery", PhotoGallery);