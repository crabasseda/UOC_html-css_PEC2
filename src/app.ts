document.getElementById("moreInfoBtn")?.addEventListener("click", function () {
  const moreInfo = document.getElementById("moreInfo");
  if (moreInfo) {
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
    } else {
      moreInfo.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".article-list li");
  const overlay = document.getElementById("image-overlay") as HTMLElement;
  const overlayImage = document.getElementById(
    "overlay-image"
  ) as HTMLImageElement;

  articles.forEach((article) => {
    article.addEventListener("click", () => {
      const imageId = article.id.replace("show-", "");

      const image = document.getElementById(imageId) as HTMLImageElement;

      if (image) {
        overlayImage.src = image.src;
        overlay.classList.add("active");
        overlayImage.classList.add("active");
      }
    });
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      overlayImage.classList.remove("active");
    }
  });
});
