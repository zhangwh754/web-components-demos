/**
 * @description: 使用template
 */
class MyButton extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });

    const template = document.getElementById("my-button");
    const content = template.content.cloneNode(true);

    content.querySelector("button").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("myButtonClick", { bubbles: true }));
    });

    shadow.appendChild(content);
  }
}

/**
 * @description: 不使用template，直接在构造函数内构造组件
 */
// class MyButton extends HTMLElement {
//   constructor() {
//     super();

//     var shadow = this.attachShadow({ mode: "open" });

//     const style = document.createElement("style");

//     style.textContent = `
//       button {
//         background-color: #fff;
//         border: 1px solid #ccc;
//         border-radius: 4px;
//         color: #333;
//         cursor: pointer;
//         display: inline-block;
//         font-size: 1em;
//         font-weight: bold;
//         line-height: 1;
//         padding: 0.5em 1em;
//         text-align: center;
//        `;

//     const wrapper = document.createElement("button");

//     wrapper.innerHTML = `<slot><span>btnClick</span></slot>`;

//     wrapper.addEventListener("click", () => {
//       const event = new CustomEvent("myButtonClick", {
//         bubbles: true,
//         composed: true,
//       });

//       this.dispatchEvent(event);
//     });

//     shadow.appendChild(style);
//     shadow.appendChild(wrapper);
//   }
// }

customElements.define("my-button", MyButton);
