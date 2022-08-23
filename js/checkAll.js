    function checkAll() {
        if (!checkName(form.name.value)) {
            return false;
        }        
        if (!checkid(form.id.value)) {
            return false;
        }
        if (!checkPassword(form.id.value, form.pw.value, form.pwck.value)) {
            return false;
        }
        if (!checkPhoneNum(form.num2.value, form.num3.value)) {
            return false;
        }
        if (!checkAddress(form.postcode.value,form.Address.value)){
            return false;
        }
        if (!checkMail(form.email.value)) 
            return false;
        if (!checkBirth(form.birth.value)) {
            return false;
        }
            /*
        if (!checkFavorite()) {
            return false;
        }
        if (!checkIntro()) {
            return false;
        }*/
        alert("회원가입이 완료되었습니다.")
        return true;
        
    }
    // 공백 확인 함수
    function checkBlank(value, dataName) {
        if (value == "") {
            alert(dataName + " 입력해주세요.");
            return false;
        }
        return true;
    }

    function checkName(name) {
        if (!checkBlank(name, "이름을"))
            return false;

        var nameRegExp = /^[가-힣]{2,4}$/; //이름 유효성 검사
        if (!nameRegExp.test(name)) {
            alert("이름이 올바르지 않습니다.");
            return false;
        }
        return true; //확인 완료시
    }

    function checkid(id) {
        //Id 입력 확인
        if (!checkBlank(id, "아이디를"))
            return false;

        var idRegExp = /^[a-zA-z0-9]{8,16}$/; //아이디 유효성 검사
        if (!idRegExp.test(id)) {
            alert("아이디는 8~16자의 영문 대소문자와 숫자만 사용 가능합니다.");
            form.id.value = "";
            form.id.focus();
            return false;
        }
        return true; //확인 완료시
    }

    function checkPassword(id, pw, pwck) {
        //비밀번호가 입력 확인
        if (!checkBlank(pw, "비밀번호를"))
            return false;
        //비밀번호 확인 입력 확인
        if (!checkBlank(pwck, "비밀번호 확인을"))
            return false;

        var pwRegExp = /^[a-zA-z0-9]{8,16}$/; //비밀번호 유효성 검사
        if (!pwRegExp.test(pw)) {
            alert("비밀번호는 8~16자의 영문 대소문자와 숫자만 사용 가능합니다.");
            form.pw.value = "";
            form.pw.focus();
            return false;
        }
        //비밀번호와 비밀번호 확인 불일치
        if (pw != pwck) {
            alert("비밀번호가 일치하지 않습니다.");
            form.pw.value = "";
            form.pwck.value = "";
            form.pwck.focus();
            return false;
        }

        //아이디와 비밀번호가 동일할 때
        if (id == pw) {
            alert("아이디와 비밀번호는 같을 수 없습니다.");
            form.pw.value = "";
            form.pwck.value = "";
            form.pwck.focus();
            return false;
        }
        return true; //확인 완료시
    }

    function checkMail(email) {
        //email 입력 확인
        if (!checkBlank(email, "이메일을"))
            return false;

        /*var emailRegExp = /^[0-9a-zA-Z]([+-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!emailRegExp.test(email)) {
            alert("이메일 주소를 올바르게 입력해주세요.");
            form.email.value = "";
            form.email.focus();
            return false;
        }*/
        return true; //확인 완료시
    }

    function checkPhoneNum(num2, num3) {
        //PhoneNum 입력 확인
        if (!checkBlank(num2, "휴대폰 번호 앞자리를")
                || !checkBlank(num3, "휴대폰 번호 뒷자리를"))
            return false;

        //전화번호 길이 확인
        if (num2.length < 3 || num3.length < 4) {
            alert("휴대폰 번호를 정확히 입력해주세요.");
            form.num2.value = "";
            form.num3.value = "";
            form.num2.focus();
            return false;
        }
        return true; //확인 완료시
    }

    //주소 입력 확인
    function checkAddress(postcode,Address,){
        if (!checkBlank(postcode, "우편번호를")
                || !checkBlank(Address, "주소를"))
            return false; //확인 완료시
        return true;
    }
    function checkBirth(birth) { 
        if(!checkBlank(birth, "생년월일을"))
            return false;
        var year = Number(birth.substr(0,4)); // 입력한 값 4번째 자리까지 년도 
        var month = Number(birth.substr(4,2)); // 입력한 값 4번째 자리부터 2자리 숫자 월 
        var day = Number(birth.substr(6,2)); // 입력한 값 6번째 자리부터 2자리 숫자 일
        var today = new Date(); // 날짜 변수 선언 
        var yearNow = today.getFullYear(); // 올해 년도 

        if (birth.length==8) { // 년도의 경우 1900보다 작거나 yearNow보다 크다면 false 반환
            if (1900 > year || year > yearNow){ 
                alert("출생년도를 확인해 주세요.");
                return false; 
            } 
            if (month < 1 || month > 12) { 
                alert("생년월일을 확인해 주세요.");
                return false; 
            } 
            if (day < 1 || day > 31) { 
                alert("생년월일을 확인해 주세요.");
                return false; 
            } 
            if ((month==4 || month==6 || month==9 || month==11) && day==31) { 
                alert(month+"월은 31일이 존재하지 않습니다. 생년월일을 확인해 주세요.");
                return false; 
            } 
            if (month == 2) { 
                var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
                if (day>29 || (day==29 && !isleap)) { 
                    alert(year+"년 2월은 "+day+"일이 존재하지 않습니다. 생년월일을 확인해 주세요.");
                    return false; 
                } 
            } 
            return true;
        } 
    }
    /*
    function checkFavorite() {
        var checkedFavorite = document.getElementsByName("favorite");
 
        //체크된 값이 하나라도 존재하면 true
        for (var i = 0; i < checkedFavorite.length; i++) {
            if (checkedFavorite[i].checked == true) {
                return true;
            }
        }
        alert("관심분야를 체크해주세요.");
        return false;
    }
 
    */