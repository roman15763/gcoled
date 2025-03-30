window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTo = urlParams.get("scrollTo");

  if (scrollTo) {
    const element = document.getElementById(scrollTo);
    if (element) {
      const offset = window.innerHeight * 0.03; // Відступ 30% висоти екрана
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};


