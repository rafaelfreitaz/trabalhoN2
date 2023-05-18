// Função para trocar os valores de duas posições de um vetor
const swap = (array, pos1, pos2) => {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, swaps) => {
  for (let i = 0; i < swaps; i++) {
    const pos1 = Math.floor(Math.random() * array.length);
    const pos2 = Math.floor(Math.random() * array.length);
    swap(array, pos1, pos2);
  }
};

// Função para ordenar um vetor com o algoritmo Bubble Sort
const bubble_sort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

// Função para ordenar um vetor com o algoritmo Selection Sort
const selection_sort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }
    swap(array, i, min_idx);
  }
};

// Função para ordenar um vetor com o algoritmo Quick Sort
const quick_sort = (array, start, end) => {
  if (start < end) {
    const pivot = partition(array, start, end);
    quick_sort(array, start, pivot - 1);
    quick_sort(array, pivot + 1, end);
  }
};

// Função de apoio ao quick_sort para particionar o vetor
const partition = (array, start, end) => {
  const pivot = array[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, end);
  return i + 1;
};

function add() {
  const valor = document.getElementById("valor").value;
  const listaValores = document.getElementById("valores");
  const node = document.createElement("li");
  const textoNode = document.createTextNode(valor);
  node.appendChild(textoNode);
  listaValores.appendChild(node);
}

function ordenar() {
const listaValores = document.getElementById("valores");
const algoritmoSelecionado = document.getElementById("algoritmo").value;
const vetor = Array.from(listaValores.children).map((item) => parseInt(item.innerHTML));
switch (algoritmoSelecionado) {
  case "bubble":
      bubble_sort(vetor);
      break;
  case "selection":
      selection_sort(vetor);
      break;
  case "quick":
      quick_sort(vetor, 0, vetor.length - 1);
      break;
}
listaValores.innerHTML = vetor.map((valor) => `<li>${valor}</li>`).reduce((anterior, atual) => anterior + atual, "");
}

function misturar() {
const listaValores = document.getElementById("valores");
const vetor = Array.from(listaValores.children).map((item) => parseInt(item.innerHTML));
shuffle(vetor, vetor.length);
listaValores.innerHTML = vetor.map((valor) => `<li>${valor}</li>`).reduce((anterior, atual) => anterior + atual, "");
}