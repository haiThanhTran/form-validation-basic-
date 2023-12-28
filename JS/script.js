var fullName = document.querySelector('#name');
var gmail = document.querySelector('#gmail');
var password = document.querySelector('#password');
var passwordConfirmed = document.querySelector('#passwordConfirmed');
var submitBtn = document.querySelector('#submit')
var form = document.querySelector('form')
isEmpty = false;
eyeIcon=false;
eyeSlashIcon = false;
var eyeBtn=document.querySelector('.eye_icon');
var eyeSlashBtn=document.querySelector('.eye-slash_icon');
var inputPassword = document.querySelector('#password');

var eyeBtnCf=document.querySelector('.eye_iconCf');
var eyeSlashBtnCf=document.querySelector('.eye-slashCf_icon');
var inputPasswordCf = document.querySelector('#passwordConfirmed');

//Xử lý ấn nút ẩn hiện PassWord


eyeBtn.onclick = function(){
 
eyeBtn.classList.add('none');
 eyeSlashBtn.classList.remove('none');
 inputPassword.type = 'text'
 
}

eyeSlashBtn.onclick = function(){
 
eyeSlashBtn.classList.add('none');
 eyeBtn.classList.remove('none');
 inputPassword.type = 'password'
 
}


//Xử lý ấn nút ẩn hiện CfPassWord


eyeBtnCf.onclick = function(){
 
    eyeBtnCf.classList.add('none');
     eyeSlashBtnCf.classList.remove('none');
     inputPasswordCf.type = 'text'
     
    }
    
    eyeSlashBtnCf.onclick = function(){
     
    eyeSlashBtnCf.classList.add('none');
    eyeBtnCf.classList.remove('none');
     inputPasswordCf.type = 'password'
     
    }

showError = function (input, message) {

    var parentErr = input.parentElement;
    parentErr.classList.add('error');
    parentErr.querySelector('small').innerHTML = message;
}

showSuccess = function (input) {

    var parentErr = input.parentElement;
    parentErr.classList.remove('error');
    parentErr.querySelector('small').innerHTML = '';

}

isEmpty = function (listInput) {

    listInput.forEach(function (input) {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'Không được để trống ô này !')
            return true;
        } else {
            showSuccess(input)
        }
    })
    
    return false;
}

isEmail = function (input) {
    input.value = input.value.trim();
    var valueGmail = input.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(valueGmail)) {
        showSuccess(input)
        return true;
    } else {
        showError(input, 'Vui lòng nhập đúng định dạng Email')
        return false;
    }
}

isPassword = function (input) {
    input.value = input.value.trim();
    var valuePassword = input.value
    if (valuePassword.length >= 6) {
        // showSuccess(input)
        return true;
    } else {
        showError(input, 'Vui lòng nhập ít nhất 6 ký tự')
        return false;
    }

}

isLength = function (input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
      showError(input, `Trường này phải có ít nhất ${min} ký tự !`)
      return true;
    } else if (input.value.length > max) {
      showError(input, `Trường này nhận tối đa ${max} ký tự !`)
      return true;
    } else {
      showSuccess(input);
      return false;
    }
  }
  

ismatchPassword = function (currentPassword, cfPassword) {

    if (currentPassword.value !== cfPassword.value) {
        showError(cfPassword, 'Mật khẩu nhập lại không đúng')
        

    } else {
        // showSuccess(cfPassword)
        
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Kiểm tra các lỗi khác
    let isEmailErr = false;
    // Kiểm tra isEmptyErr
    let isEmptyErr = isEmpty([fullName, gmail, password, passwordConfirmed]);
    if (isEmptyErr) {
      return; // Ngăn chặn việc thực thi tiếp nếu có trường bị trống
    }
    isEmailErr = isEmail(gmail);
    
    let isLengthErr = isLength(fullName, 2, 10);
    let isPasswordErr = isPassword(password);
    let isCfPasswordErr = ismatchPassword(password, passwordConfirmed);
    
    
  
    // Nếu không có lỗi nào xảy ra, bạn có thể thực hiện các hành động tiếp theo, ví dụ như gửi dữ liệu đi
  });
  


