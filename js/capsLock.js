    function capsLock(e){
        var keyCode = 0;
        var shiftKey=false;
        keyCode=e.keyCode;
        shiftKey=e.shiftKey;
        if (((keyCode >= 65 && keyCode <= 90)&& !shiftKey) || ((keyCode >= 97 && keyCode <= 122) && shiftKey))
        {
            alert("CapsLock이 켜져 있습니다.");
            return;
        }
    }