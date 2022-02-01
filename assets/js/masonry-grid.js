import $ from 'jquery'
$(document).on('ready', () => {
  const grid = document.querySelector('.grid')
  // eslint-disable-next-line no-undef
  return new Masonry(grid, {
    // options...
    itemSelector: '.grid-item',
    columnWidth: 200,
  })
})
