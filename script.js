// Drag and Drop
const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
  animation: 350,
  chosenClass: 'sortable-chosen',
});
