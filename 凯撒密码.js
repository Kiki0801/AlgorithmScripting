<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    div {
        width: 1000px;
        height: 200px;
        background: red;
        visibility: hidden;
    }
</style>

<body>
<div id="div">测试一下</div>

</body>

</html>
<script>
    //凯撒密码方法(ROT13)
    //方法1
    function rot13(str) {
        var newString = [];
        // charCodeAt()返回0-65535之间的整数
        for (var i = 0; i < str.length; i++) {
            var temp = str.charCodeAt(i);
            // 如果字符是非大写英文字母(序号小于65或大于91)，将该字符直接放到newString中，并使用continue进入下一个循环
            if (temp < 65 || temp > 91) {
                // 返回字符串指定位置的字符
                newString.push(str.charAt(i));
                continue;
                // 如果序号大于77(N-Z字母)，使用String.fromCharCode()转找成该序号减13的字符，并且放入newString
            } else if (temp > 77) {
                String.fromCharCode();
                //根据序号(指定的Unicode编码中的序号)值来返回一个字符串
                newString.push(String.fromCharCode(temp - 13));
                // 如果序号小于78(N-Z字母)，使用String.fromCharCode()转找成该序号减13的字符，并且放入newString
            } else {
                newString.push(String.fromCharCode(temp + 13));
            }
        }
        return newString.join("");
    }

    //方法2
    function rot13(str) {
        var newString = "";
        for (var i in str) {
            var temp = str.charCodeAt(i);
            if (temp < 65 || temp > 91) {
                newString += str[i];
                continue;
            }
            if (temp > 77) {
                newString += String.fromCharCode(temp - 13);
            } else {
                newString += String.fromCharCode(temp + 13);
            }
        }
        return newString;
    }

    //方法3
    function rot13(str) {
        var tempArr = str.split("");
        var newString = [];
        for (var i = 0; i < tempArr.length; i++) {
            var temp = tempArr[i].charCodeAt(0);
            var unicode = temp - 13;
            if (unicode < 65) {
                unicode += 26;
            }
            if (temp < 65 || temp > 90) {
                newString.push(tempArr[i]);
            } else {
                newString.push(String.fromCharCode(unicode));
            }
        }
        return newString.join("");
    }

    //方法4
    function rot13(str) {
        var input = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var output = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
        str = str.toLowerCase().split("");
        for (var i = 0, l = str.length; i < l; i++) {
            if (input.indexOf(str[i]) !== -1) {
                var index = input.indexOf(str[i]);
                str[i] = output[index];
            }
        }
        str = str.join("").toUpperCase();
        return str;
    }

    //方法5
    function rot13(str) {
        var tempArr = str.split("");
        var newString = [];
        var alphaBets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
        for (i = 0; i < tempArr.length; i++) {
            var temp = tempArr[i];
            var minified = alphaBets.indexOf(temp) !== -1 ? (alphaBets.indexOf(temp) < 13 ? newString.push(alphaBets[alphaBets.indexOf(temp) + 13]) : newString.push(alphaBets[alphaBets.indexOf(tempArr[i]) - 13])) : newString.push(tempArr[i]);
        }
        return newString.join("");
        //Array to String
    }

    //方法6
    function isLetter(letter) {
        if (letter >= 65 && letter <= 90)       return true; else       return false;
    }
    function rot13(str) {
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            var letter = str.charCodeAt(i);
            if (isLetter(letter)) {
                if (isLetter(letter + 13))           newStr += String.fromCharCode(letter + 13); else {
                    var addTo64 = (letter + 13 ) - 90;
                    newStr += String.fromCharCode(64 + addTo64);
                }
            } else       newStr += String.fromCharCode(letter);
        }
        return newStr;
    }

    //方法7
    function rot13(str) {
        return (str ? str : this ).split('').map(function (_) {
            if (!_.match(/[A-Za-z]/)) return _;
            c = Math.floor(_.charCodeAt(0) / 97);
            k = (_.toLowerCase().charCodeAt(0) - 83 ) % 26 || 26;
            return String.fromCharCode(k + ((c == 0 ) ? 64 : 96 ));
        }).join('');
    }

    //方法8
    function rot13(str) {
        return str.replace(/[A-Za-z]/g, function (c) {
            return String.fromCharCode(c.charCodeAt(0) + ( c.toUpperCase() <= "M" ? 13 : -13 ));
        });
    }
    // 也可以将上面的代码换成下面这个
    /// / str.replace(/ [a-zA- Z ]/g,function(c){ return String .fromCharCode((c<= "Z" ?9 0 : 122 )>=(c=c.charCodeAt( 0 )+ 13 ) ?c :c- 26 );}); }

</script>