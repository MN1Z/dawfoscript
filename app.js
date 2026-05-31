const form = document.getElementById("owner-form");
const ownerInput = document.getElementById("ownerTag");
const ownerStatus = document.getElementById("owner-status");
const storageKey = "dawfo-owner-tag";

const existing = localStorage.getItem(storageKey);
if (existing) {
  ownerStatus.textContent = `Owner lock is set for: ${existing}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = ownerInput.value.trim();

  if (!value) {
    ownerStatus.textContent = "Please enter a valid owner tag.";
    return;
  }

  localStorage.setItem(storageKey, value);
  ownerStatus.textContent = `Owner lock saved for: ${value}`;
  form.reset();
});
