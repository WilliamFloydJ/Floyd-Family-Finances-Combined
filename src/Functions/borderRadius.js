function borderRadius() {
  const form = document.getElementsByClassName("expense");
  const forms = [...form];
  forms.forEach((el) => {
    const formEl = [...el.children];
    let lastWidth;
    formEl.forEach((el1, ind) => {
      if (
        ind !== 0 &&
        ind !== formEl.length - 1 &&
        el1.offsetWidth > lastWidth
      ) {
        el1.classList.add("tooLong");
        el1.classList.remove("tooShort");
        el1.classList.remove("slightlyTooShort");
        lastWidth = el1.offsetWidth;
      } else if (
        ind !== 0 &&
        ind !== formEl.length - 1 &&
        el1.offsetWidth < lastWidth
      ) {
        if (formEl[ind + 1].offsetWidth < el1.offsetWidth) {
          el1.classList.remove("tooLong");
          el1.classList.remove("tooShort");
          el1.classList.add("slightlyTooShort");
          lastWidth = el1.offsetWidth;
        } else {
          el1.classList.remove("tooLong");
          el1.classList.add("tooShort");
          el1.classList.remove("slightlyTooShort");
          lastWidth = el1.offsetWidth;
        }
      } else {
        lastWidth = el1.offsetWidth;
      }
    });
  });
}
export default borderRadius;
