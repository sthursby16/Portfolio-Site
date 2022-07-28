let i=2;
let j=2;
let k=2;

function expandCollapse1() {
  i += 1;
  if (i%2 !== 0) {
    document.getElementById("styleguide").style.display = "block";
  } else {
    document.getElementById("styleguide").style.display = "none";
  }

}

function expandCollapse2() {
  j += 1;
  if (j%2 !== 0) {
    document.getElementById("chessclub").style.display = "block";
  } else {
    document.getElementById("chessclub").style.display = "none";
  }
}

function expandCollapse3() {
  k += 1;
  if (k%2 !== 0) {
    document.getElementById("cafesukato").style.display = "block";
  } else {
    document.getElementById("cafesukato").style.display = "none";
  }
}