const yearButtons = document.querySelectorAll(".year-btn");
const subjectButtons = document.querySelectorAll(".subject-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

let selectedYear = null;

yearButtons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.classList.contains("active")) {
      button.classList.remove("active");
      selectedYear = null;
    } else {
      yearButtons.forEach(btn =>
        btn.classList.remove("active")
      );

      button.classList.add("active");
      selectedYear = button.dataset.filter;
    }

    updateFilters();
  });
});

subjectButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    updateFilters();
  });
});

function updateFilters() {

  const selectedSubjects = Array.from(subjectButtons)
    .filter(btn => btn.classList.contains("active"))
    .map(btn => btn.dataset.filter);

  galleryItems.forEach(item => {

    const matchesYear =
      !selectedYear ||
      item.classList.contains(selectedYear);

    const matchesSubjects =
      selectedSubjects.every(subject =>
        item.classList.contains(subject)
      );

    item.classList.toggle(
      "hidden",
      !(matchesYear && matchesSubjects)
    );
  });
document.getElementById("clearFilters")
  .addEventListener("click", () => {

    selectedYear = null;

    yearButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    subjectButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    updateFilters();
  });
}