var checkValidation = function () {
  // Kiem tra ho
  kiemTraRong("name", "checkErrorName");
  kiemTraRong("email", "checkErrorEmail");
  kiemTraRong("phone", "checkErrorPhoneNumber");
  var valid = true;
  if (kiemTraRong("firstName", "error_firstName")) {
    valid = true;
  } else {
    valid = false;
  }

  if (!valid) {
    return false;
  }
  return true;
};

var kiemTraRong = function (selectorValue, selectorError) {
  var inputText = document.getElementById(selectorValue);

  if (inputText.value.trim() === "") {
    document.getElementById(selectorError).innerHTML =
      inputText.name + " không được bỏ trống";
    document.getElementById(selectorError).style.color = "red";
    document.getElementById(selectorError).style.marginLeft = "10%";
    document.getElementById(selectorError).style.fontSize = "14px";
    return false;
  } else {
    document.getElementById(selectorError).innerHTML = "";
    return true;
  }
};

document.getElementById("name").onblur = checkValidation;
document.getElementById("email").onblur = checkValidation;
document.getElementById("phone").onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation;
