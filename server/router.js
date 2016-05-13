var express = require('express');
var router = express.Router();

router.post('', function (req, res) {
  var fullText = req.body.mensagem;
  var status;
  if (!fullText) {
    status = 400;
  }

  if (status !== 400 ){
    var normalizedText = fullText.replace(/ /g,'').toLowerCase().normalize();
    var isPalindrome = palindrome(normalizedText);

    if (isPalindrome) {
      status = 200 ;
    } else {
      status = 400;
    }
  }

  function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
  }

  res.sendStatus(status);
})
module.exports = router;
