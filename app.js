function param(nama) {
  return new URLSearchParams(window.location.search).get(nama);
}
function ambilBaca() {
  try { return JSON.parse(localStorage.getItem('sudahBaca') || '[]'); }
  catch (e) { return []; }
}
function tandaiBaca(slug) {
  try {
    var arr = ambilBaca();
    if (arr.indexOf(slug) === -1) {
      arr.push(slug);
      localStorage.setItem('sudahBaca', JSON.stringify(arr));
    }
  } catch (e) { /* abaikan */ }
}
function cariBab(slug) {
  for (var i = 0; i < SEJARAH.babs.length; i++) {
    if (SEJARAH.babs[i].slug === slug) return { bab: SEJARAH.babs[i], idx: i };
  }
  return { bab: null, idx: -1 };
}