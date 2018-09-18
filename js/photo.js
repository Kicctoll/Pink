$('document').ready(function () {
    let input = $("#avatar");
    let photo = $(".default");
    let defaultSrc = $(photo).attr('src');
    let btnPost = $('#toPost');
    let btnCancel = $('#cancel');

    $(input).on('input', function () {
        let file = this.files[0];
        if(file !== undefined) {
            let src = window.URL.createObjectURL(file);
            setWidthHeight(photo, '100%', '100%');
            $(photo).attr('src', src);

            btnPost.removeClass('disabled');
            btnCancel.removeClass('disabled');

            $(this).val(null);
            $(this).hide();
        }
    });
    
    $(btnCancel).click(function (event) {
        event.preventDefault();
        if(!$(this).hasClass('disabled')) {
            $(photo).attr('src', defaultSrc);
            setWidthHeight(photo, 'initial', 'initial');
            $(this).addClass('disabled');
            $(btnPost).addClass('disabled');

            $(input).show();
        }
    });

    $(btnPost).click(function (event) {
        event.preventDefault();
    });

    function setWidthHeight(object, width, height) {
        $(object).css('width', width);
        $(object).css('height', height);
    }
});