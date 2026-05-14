const navContents = document.querySelectorAll(
  ".header",
) as NodeListOf<HTMLElement>;

function syncNav() {
  navContents.forEach((nav) => {
    // Get the position of the clipping wrapper
    const clipper = nav.parentElement;
    const rect = clipper!.getBoundingClientRect();

    // Push the nav text down by the exact amount the section has scrolled up
    nav.style.transform = `translateY(${-rect.top}px)`;
  });

  requestAnimationFrame(syncNav);
}

requestAnimationFrame(syncNav);
