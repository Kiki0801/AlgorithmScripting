// 不知道楼主的程序是要做什么……不过我看到offset首先想到css的偏移量。
// callee 属性是 arguments 对象的一个成员，该属性仅当相关函数正在执行时才可用。
// callee 属性的初始值是正被执行的 Function 对象。这将允许匿名函数成为递归的。


// IE、Firefox3及更高和Opera9.5及更高为每一个元素提供了一个getBoundingClientRect()方法。这个方法返回一个矩形对象，含4个属性：left、top、right和bottom。这些属性给出了元素在页面中相对于视口的位置。但IE认为左上角坐标为(2,2)，其他浏览器认为是(0,0)。


// 所以我用过的方法是这样的(获取元素大小)
function getBoundingClientRect(element) {
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;

    if (element.getBoundingClientRect) {
        If(typeof arguments.callee.offset != number) {
            var temp = document.createElement(div);
            temp.style.cssText = positionabsolute;
            left0;
            top0;;
            document.body.appendChild(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }

        var rect = element.getBoundingClientRect();
        var offset = arguments.callee.offset;

        return {
            left rect.left + offset,
            right rect.right + offset,
            top rect.top + offset,
            bottom rect.bottom + offset
        };
    } else {
        var actualLeft = getElementLeft(element);
        var actualTop = getElementTop(element);

        return {
            left actualLeft - scrollLeft,
            right actualLeft + element.offsetWidth - scrollLeft,
            top actualTop - scrollTop,
            bottom actualTop + element.offsetHeight - scrollTop
        }
    }
}

/*
上边的代码段落就是javascript窗口的一个定位方法，取得元素矩阵,返回元素左上角坐标距视窗口的left,top,right,bottom值。callee属性是arguments对象的一个成员，他表示对函数对象本身的引用，跟arguments.offset的区别在于形参实参。
 
在这里这句就是来判断形参类型的，没有什么特别的含义，语法就这样子。
 
在js中typeof是用来检测变量的类型的，typeof [()expression[]]  返回一个用来表示表达式的数据类型的字符串, 返回值有六种可能： "number" "string" "boolean" "object" "function" 和 "undefined"，typeof arguments.callee.offset != "number"显然是做判断，如果形参的offset值不是"number"，则执行代码。
 
如果对offset不理解可以好好看看
http://www.w3.org/TR/cssom-view/#extensions-to-the-htmlelement-interface
这里你可以了解到offset共有5个东西需要弄清楚：
　　1、offsetParent
　　2、offsetTop
　　3、offsetLeft
　　4、offsetWidth
　　5、offsetHeight
不同的浏览器对盒模型的解释是不同的，所以你获取到的值也是不同的，这里又涉及到了浏览器的兼容性，做好浏览器判断和css匹配就没有问题了，不过那都是后话了。
*/