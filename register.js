$(function(){
  var $name = $('#name'),
      $phone = $('#phone'),
      $pwd = $('#pwd'),
      $code = $('#code'),
      $btn = $('#btn'),
      $register = $('#register');
  $register.click(function(){
    if(!validata($name) || !validata($phone) || !validata($pwd) || !validata($code)) return;
  })
  $btn.click(function(){

  })
  function validata(field){
    var data = $(field);
    if(field === '$name'){
      $(field + '-validation').html('不能为空！');
    }
    if(field === '$phone'){
      $(field + '-validation').html('不能为空');
    }
    if(field === '$code'){
      $(field + '-validation').html('不能为空');
    }
    if(field === 'code'){
      $(field + '-validation').html('不能为空');
    }
    $(field + '-validation').html("");
    return true;
  }
})
