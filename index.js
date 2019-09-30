let removeSVG = `<svg
    height="22px"
    viewBox="-40 0 427 427.00131"
    width="22px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
    <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
    <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
    <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
  </svg>`;

let completeSVG = `<svg
    height="22px"
    class="fill complete-fill"
    viewBox="0 0 512 512"
    width="22px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
  </svg>`;
const addItems = document.getElementById("add-item");
const itemlist = [];

function add() {
  let value = document.getElementById("item").value;
  if (value) {
    addtodoList(value);
    document.getElementById("item").value = "";
  }
}

function removeItem() {
  let removeList = this.parentNode.parentNode;
  let parent = removeList.parentNode;
  parent.removeChild(removeList);
  console.log("removeList", removeList);
}

function completedItem() {
  console.log("Hello!");
  let items = this.parentNode.parentNode;
  let parent = items.parentNode;
  let id = parent.id;
  console.log("id =", id);

  let target =
    id === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");

  console.log("target", target);

  parent.removeChild(items);
  parent.insertBefore(items, target.childNodes[0]);
}

function addtodoList(text) {
  console.log("text 43=", text);
  let list = document.getElementById("todo");

  let items = document.createElement("li");
  items.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeSVG;
  remove.addEventListener("click", removeItem);

  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeSVG;
  complete.addEventListener("click", completedItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  items.appendChild(buttons);

  list.appendChild(items);
  list.insertBefore(items, list.childNodes[0]);
}

addItems.addEventListener("Click", add);
