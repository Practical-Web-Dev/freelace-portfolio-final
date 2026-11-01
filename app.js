// DOM Elements
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navMenu = document.querySelector(".nav-menu");

if (!mobileMenuButton || !navMenu) {
  // Elements not found, don't run this part of the script.
} else {

  // Keep the navigation usable when JavaScript is disabled.
  mobileMenuButton.classList.add("is-ready");
  navMenu.classList.add("mobile-ready");

  function openMenu() {
    navMenu.classList.add("is-open");
    mobileMenuButton.setAttribute("aria-expanded", "true");
    mobileMenuButton.setAttribute("aria-label", "Close navigation menu");
  }

  function closeMenu() {
    navMenu.classList.remove("is-open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
  }

  function toggleMenu() {
    if (navMenu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle the menu when the button is clicked.
  mobileMenuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close after selecting a navigation link.
  navMenu.addEventListener("click", function (e) {
    const link = e.target.closest(".nav-menu-link");

    if (link) {
      closeMenu();
    }
  });

  // Close when clicking outside the menu.
  document.addEventListener("click", function (e) {
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedMenuButton = mobileMenuButton.contains(e.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }
  });

  // Close with Escape and return focus to the button.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      mobileMenuButton.focus();
    }
  });

  // Reset the menu when returning to the desktop layout.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
      closeMenu();
    }
  });

}


// Screenshot Preview Elements
const previewButtons = document.querySelectorAll(".project-preview-button");
const projectPreview = document.querySelector(".project-preview");
const previewImage = document.querySelector(".preview-image");
const previewHeading = document.querySelector(".preview-heading");
const previewClose = document.querySelector(".preview-close");

if (!projectPreview || !previewImage || !previewHeading || !previewClose) {
  // Preview elements not found, don't run this part of the script.
} else {

  let activePreviewButton = null;

  function openPreview(button) {
    activePreviewButton = button;
    previewImage.src = button.dataset.image;
    previewImage.alt = button.dataset.alt;
    previewHeading.textContent = button.dataset.title;
    projectPreview.showModal();
    document.body.classList.add("preview-open");
    previewClose.focus();
  }

  function closePreview() {
    projectPreview.close();
  }

  // Every project uses the same preview. Its data attributes supply the image and text.
  previewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openPreview(button);
    });
  });

  previewClose.addEventListener("click", closePreview);

  // Clicking the backdrop closes the preview.
  projectPreview.addEventListener("click", function (e) {
    if (e.target === projectPreview) {
      const bounds = projectPreview.getBoundingClientRect();
      const clickedOutside = e.clientX < bounds.left || e.clientX > bounds.right ||
        e.clientY < bounds.top || e.clientY > bounds.bottom;

      if (clickedOutside) {
        closePreview();
      }
    }
  });

  // The native dialog also closes with Escape and keeps keyboard focus inside it.
  projectPreview.addEventListener("close", function () {
    document.body.classList.remove("preview-open");
    previewImage.removeAttribute("src");

    if (activePreviewButton) {
      activePreviewButton.focus({ preventScroll: true });
    }
  });

}


// YouTube Introduction Elements
const videoPlayer = document.querySelector(".video-player");
const youtubeFrame = document.querySelector(".youtube-frame");
const videoPlaceholder = document.querySelector(".video-placeholder");
const videoPlaceholderHeading = document.querySelector(".video-placeholder-heading");
const videoPlaceholderText = document.querySelector(".video-placeholder-p");
const videoExternalLink = document.querySelector(".video-external-link");

if (!videoPlayer || !youtubeFrame || !videoPlaceholder || !videoExternalLink) {
  // Video elements not found, don't run this part of the script.
} else {

  // Edit data-youtube-url in index.html to choose the video.
  const youtubeVideoUrl = (videoPlayer.dataset.youtubeUrl || "").trim();

  function getYouTubeVideoId(value) {
    // A video ID by itself is also accepted.
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
      return value;
    }

    try {
      const url = new URL(value);

      if (url.protocol !== "https:" && url.protocol !== "http:") {
        return "";
      }

      if (url.hostname === "youtu.be" || url.hostname === "www.youtu.be") {
        return url.pathname.split("/")[1] || "";
      }

      const youtubeHosts = [
        "youtube.com", "www.youtube.com", "m.youtube.com",
        "youtube-nocookie.com", "www.youtube-nocookie.com"
      ];

      if (!youtubeHosts.includes(url.hostname)) {
        return "";
      }

      if (url.pathname === "/watch") {
        return url.searchParams.get("v") || "";
      }

      const pathParts = url.pathname.split("/");

      if (pathParts[1] === "embed" || pathParts[1] === "shorts" || pathParts[1] === "live") {
        return pathParts[2] || "";
      }

    } catch (e) {
      // An invalid link leaves the placeholder visible.
      return "";
    }

    return "";
  }

  function loadIntroductionVideo(videoId) {
    // No autoplay: visitors choose when to start the video.
    youtubeFrame.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?rel=0&playsinline=1";
    youtubeFrame.hidden = false;
    videoPlaceholder.hidden = true;

    videoExternalLink.href = "https://www.youtube.com/watch?v=" + videoId;
    videoExternalLink.hidden = false;
  }

  if (youtubeVideoUrl) {
    const videoId = getYouTubeVideoId(youtubeVideoUrl);

    if (/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      loadIntroductionVideo(videoId);
    } else if (videoPlaceholderHeading && videoPlaceholderText) {
      videoPlaceholderHeading.textContent = "Check your YouTube link";
      videoPlaceholderText.textContent = "Add a valid YouTube video URL to data-youtube-url in index.html.";
    }
  }

}
