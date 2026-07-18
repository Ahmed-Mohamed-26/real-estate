async function loadIncludes() {
  const includeElements = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includeElements).map(async (element) => {
      const file = element.getAttribute("data-include");

      try {
        const response = await fetch(file);

        if (!response.ok) {
          throw new Error(`Cannot load ${file}`);
        }

        const html = await response.text();
        element.outerHTML = html;
      } catch (error) {
        console.error(error);
      }
    })
  );

  setActiveNavbarLink();

  document.dispatchEvent(new Event("includes:loaded"));
}

function setActiveNavbarLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadIncludes);