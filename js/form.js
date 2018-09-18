$('document').ready(function () {
    let replaced = false;

    let p = $('.b-intro-form p');
    let emailContact = $('.userInfoContact #email');
    let phoneContact  = $('.userInfoContact #phone');
    let p_require = $('.require');

    if(window.innerWidth < 576) {
        replaceStr(/!.+/i, '!', p);
        replaceStr(/для.*/i, 'поля', p_require);
        replacePlaceholder(emailContact[0], 'E-mail, пожалуйста');
        replacePlaceholder(phoneContact[0], 'Номер, пожалуйста');
        replaced = true;
    }

    window.onresize = function () {
        if(this.innerWidth < 576 && !replaced) {
            replaceStr(/!.+/i, '!', p);
            replaceStr(/для.*/i, 'поля', p_require);
            replacePlaceholder(emailContact[0], 'E-mail, пожалуйста');
            replacePlaceholder(phoneContact[0], 'Номер, пожалуйста');
            replaced = true;
        } else if(this.innerWidth > 576 && replaced) {
            replaceStr(/!/i, '! Пожалуйста, заполните форму ниже:', p);
            replaceStr(/поля/i, 'для заполнения', p_require);
            replacePlaceholder(emailContact[0], 'Введите почту');
            replacePlaceholder(phoneContact[0], '+38 XXX XXX-XX-XX');
            replaced = false;
        }
    };

    let btnSubmit = $('.userSubmit button');
    $(btnSubmit).click(function (event) {
        event.preventDefault();
    });

    function replaceStr(pattern, replacedVal, object) {
        let text = $(object).text();
        text = text.replace(pattern, replacedVal);
        $(object).text(text);
    }

    function replacePlaceholder(object, newVal) {
        object.placeholder = newVal;
    }
});