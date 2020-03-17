$(function(){
  var $name = $('#name'),
      $phone = $('#phone'),
      $pwd = $('#pwd'),
      $code = $('#code'),
      $btn = $('#btn'),
      $register = $('#register');
  $register.click(function(){
    if(!validata('#name') || !validata('#phone') || !validata('#pwd') || !validata('#code')) return;
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
  $code.focusout(function(){
    if(!validata('#code')){

    }
  })
  $btn.click(function(){
    var timer;
    var i = 60;
    timer = setInterval(function(){
      i--;
      if(i === -1){
        clearInterval(timer);
        $btn.val('发送验证码');
        $code.removeAttr('disabled')
        $('#code-validation').html('');
      }else{
        $btn.attr('disabled',true);
        if($code.val() !== ''){
          $('#code-validation').html('');
        }else{
          $('#code-validation').html('若未收到短信，请60s后再次尝试');
        }
        $btn.val(i+'s后再次尝试');
      }
    },1000);
  })
  function validata(field){
    var $data = $(field),
        $msg = $(field + '-validation');
    if(field === '#name'){
      if(!(/^(?!(\d+)$)[\u4e00-\u9fffa-zA-Z\d\_]+$/.test($data.val()))){
        $msg.html("用户名仅支持中英文、数字和下划线且不能为纯数字");
        $data.select();
        return false;
      }
    }
    if(field === '#phone'){
      if(!(/^0?(13|14|15|18|17)[0-9]{9}$/.test($data.val()))){
        $msg.html('手机号码格式不正确');
        $data.select();
        return false;
      }
    }
    if(field === '#pwd'){
      //密码格式至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
      if(!( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test($data.val()) )){
        $msg.html('密码包含英文大小写、数字，长度为8-16位');
        $data.select();
        return false;
      }
    }
    if(field === '#code'){
      if($data.val() !== ''){
        $('#code-validation').html('');
      }
    }
    $msg.html("");
    return true;
  }
})
