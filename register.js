$(function(){var t=$("#name"),e=$("#phone"),o=$("#pwd"),n=$("#code"),a=$("#btn");function l(t){var e=$(t),o=$(t+"-validation");return"#name"!==t||/^(?!(\d+)$)[\u4e00-\u9fffa-zA-Z\d\_]+$/.test(e.val())?"#phone"!==t||/^0?(13|14|15|18|17)[0-9]{9}$/.test(e.val())?"#pwd"!==t||/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(e.val())?("#code"===t&&""!==e.val()&&$("#code-validation").html(""),o.html(""),1):(o.html("密码包含英文大小写、数字，长度为8-16位"),void e.select()):(o.html("手机号码格式不正确"),void e.select()):(o.html("用户名仅支持中英文、数字和下划线且不能为纯数字"),void e.select())}$("#register").click(function(){l("#name")&&l("#phone")&&l("#pwd")&&l("#code")}),t.focusout(function(){l("#name")}),e.focusout(function(){l("#phone")}),o.focusout(function(){l("#pwd")}),n.focusout(function(){l("#code")}),a.click(function(){var t,e=60;t=setInterval(function(){-1===--e?(clearInterval(t),a.val("发送验证码"),n.removeAttr("disabled"),$("#code-validation").html("")):(a.attr("disabled",!0),""!==n.val()?$("#code-validation").html(""):$("#code-validation").html("若未收到短信，请60s后再次尝试"),a.val(e+"s后再次尝试"))},1e3)})});