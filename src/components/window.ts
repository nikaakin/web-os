export const window = () => {
  const element = document.createElement("div");
  element.innerHTML = /*html*/ `
    <div class="flex justify-center items-center min-h-screen">
      <img src="/assets/high-resolution-logo.png" alt="web-os logo" class="w-32 h-auto"/>
    </div>
  `;
  return element;
};
