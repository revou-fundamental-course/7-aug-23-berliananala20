const hitungButton = document.getElementById("HitungLuas");
const alasInput = document.getElementById("alasInputLuas");
const tinggiInput = document.getElementById("tinggiInputLuas");
const hasilLuasSpan = document.getElementById("HasilLuas");
const resetButtonLuas = document.getElementById("ResetLuas");

const hitungBtnKeliling = document.getElementById("HitungKeliling");
const sisiA = document.getElementById("SisiAInput");
const sisiB = document.getElementById("SisiBInput");
const sisiC = document.getElementById("SisiCInput");
const hasilKelilingSpan = document.getElementById("HasilKeliling");
const resetButtonKeliling = document.getElementById("ResetKeliling");

hitungButton.addEventListener("click", hitungDanTampilkanLuas);

// alasInput.addEventListener("input", hitungDanTampilkanLuas);
// tinggiInput.addEventListener("input", hitungDanTampilkanLuas);

function hitungDanTampilkanLuas() {
  var alasInputLuas = parseFloat(alasInput.value);
  var tinggiInputLuas = parseFloat(tinggiInput.value);

  var luas = 0.5 * alasInputLuas * tinggiInputLuas;

  if (!isNaN(luas)) {
    hasilLuasSpan.textContent = luas;
  } else {
    hasilLuasSpan.textContent = "Invalid !";
  }
}
resetButtonLuas.addEventListener("click", () => {
  alasInput.value = "";
  tinggiInput.value = "";
  hasilLuasSpan.textContent = "";
});

hitungBtnKeliling.addEventListener("click", TampilkanHasilKelling);

function TampilkanHasilKelling() {
  var SisiAInput = parseFloat(sisiA.value);
  var SisiBInput = parseFloat(sisiB.value);
  var SisiCInput = parseFloat(sisiC.value);

  var keliling = SisiAInput + SisiBInput + SisiCInput;

  if (!isNaN(keliling)) {
    hasilKelilingSpan.textContent = keliling;
  } else {
    hasilKelilingSpan.textContent = "Invalid !";
  }
}
resetButtonKeliling.addEventListener("click", () => {
  sisiA.value = "";
  sisiB.value = "";
  sisiC.value = "";
  hasilKelilingSpan.textContent = "";
});