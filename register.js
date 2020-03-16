$(function(){
  var $name = $('#name'),
      $phone = $('#phone'),
      $pwd = $('#pwd'),
      $code = $('#code'),
      $btn = $('#btn'),
      $register = $('#register');
  $register.click(function(){
    if(!validata('#name') || !validata('#phone') || !validata('#pwd') || !validata('#code')
      ) return;
  })
  $name.focusout(function(){
    if(!validata('#name')){

    }
  })
  $phone.focusout(function(){
    if(!validata('#phone')){

    }
  })
  $pwd.focusout(function(){
    if(!validata('#pwd')){

    }
  })
  $btn.click(function(){
    if(validata('#phone')){
      $('#code-validation').html('请求超时，请稍后再试');
    }
  })
  function validata(field){
    var $data = $(field),
        $msg = $(field + '-validation');
    if(field === '#name'){
      if(!(/^[A-Za-z0-9_\u4e00-\u9fa5]+$/.test($data.val()))){
        $msg.html("用户名仅支持中英文、数字和下划线且不能为纯数字");
        return false;
      }
    }
    if(field === '#phone'){
      if(!(/^0?(13|14|15|18|17)[0-9]{9}$/.test($data.val()))){
        $(field + '-validation').html('手机号码格式不正确');
        return false;
      }
    }
    if(field === '#pwd'){
      //密码格式至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
      if(!( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test($data.val()) )){
        $(field + '-validation').html('密码设置不符合要求');
        return false;
      }
    }
    $msg.html("");
    return true;
  }
})
