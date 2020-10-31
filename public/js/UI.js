class UI {
  static load = document.getElementById("load");
  static galery = document.getElementById("galery");
  static message = document.getElementById("message");

  static clearUI() {
    this.galery.innerHTML = "";
    this.message.innerText = "";
    this.load.classList.add("hide");
  }

  static renderUI(data, camera) {
    if (data === 0) {
      const el = document.createElement("p");
      el.textContent =
        "An error occured while trying to fetch data from the server!";
      this.message.appendChild(el);
      this.load.classList.add("hide");
    } else if (data.error && flag) {
      const el = document.createElement("p");
      el.textContent = "There was an error from NASA's API.";
      this.message.appendChild(el);
      this.load.classList.add("hide");
    } else if (data.length === 0 && counter > 2) {
      const el = document.createElement("p");
      el.textContent = "There are no more photos!";
      this.message.appendChild(el);
      this.load.classList.add("hide");
    } else if (data.length === 0) {
      const el = document.createElement("p");
      if (camera === "all") {
        el.textContent =
          "There are no photos for that day! Try a different day!";
      } else {
        el.textContent =
          "This camera has no photos for that date. Try a different camera!";
      }
      this.message.appendChild(el);
      this.load.classList.add("hide");
    } else {
      const linkAttrs = {
        href: "",
        "data-lightbox": "gal",
        "data-title": "",
        draggable: "false",
      };

      const imgAttrs = {
        src: "",
        alt: "rover pic",
        draggable: "false",
      };

      data.forEach((photo) => {
        imgAttrs.src = photo.img_src;
        linkAttrs.href = photo.img_src;
        linkAttrs[
          "data-title"
        ] = `${photo.camera.full_name} (${photo.camera.name}) | Date: ${photo.earth_date}`;
        const link = document.createElement("a");
        this.setAttributes(link, linkAttrs);
        const img = document.createElement("img");
        this.setAttributes(img, imgAttrs);
        link.appendChild(img);
        this.galery.appendChild(link);
      });
      this.load.classList.remove("hide");
    }
  }

  static setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  static loading() {
    const el = document.createElement("p");
    el.textContent = "Loading...";
    this.message.appendChild(el);
  }

  static clearLoading() {
    this.message.innerText = "";
  }
}
