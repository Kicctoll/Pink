$('document').ready(function () {
    let replacedTablet = false;
    let replacedMobile = false;
    let img = $('.b-info-img:last-child img:first-child');

    let feedback = $('.fd-content');
    let replacedFeedback = false;

    if(window.innerWidth < 768 && window.innerWidth > 576) {
        replaceSrc(img, '.png', '-tablet.png');
        replacedTablet = true;
    }

    if(window.innerWidth < 576) {
        replaceSrc(img, '.png', '-mobile.png');
        replacedMobile = true;
    }

    if(window.innerWidth < 768) {
        changeFeedback(true, feedback);
        replacedFeedback = true;
    }

    window.onresize = function (event) {
        event.preventDefault();
        if(this.innerWidth < 768 && this.innerWidth > 576 && !replacedTablet) {
            if(replacedMobile !== true) {
                replaceSrc(img, '.png', '-tablet.png');
            } else {
                replaceSrc(img, '-mobile.png', '-tablet.png');
            }
            replacedTablet = true;
        } else  if(this.innerWidth > 768 && replacedTablet) {
            replaceSrc(img, '-tablet.png', '.png');
            replacedTablet = false;
        }

        if(this.innerWidth < 576 && !replacedMobile) {
            replaceSrc(img, '-tablet.png', '-mobile.png');
            replacedMobile = true;
        } else if(this.innerWidth > 576 && replacedMobile) {
            replaceSrc(img, '-mobile.png', '-tablet.png');
            replacedMobile = false;
        }

        if(this.innerWidth < 768 && !replacedFeedback) {
            changeFeedback(true, feedback);
            replacedFeedback = true;
        } else if(this.innerWidth > 768 && replacedFeedback) {
            changeFeedback(false, feedback);
            replacedFeedback = false;
        }
    };

    function replaceSrc(img, searchVal, replaceVal) {
        let src = $(img).attr('src');
        src = src.replace(searchVal, replaceVal);
        $(img).attr('src', src);
    }

    function changeFeedback(val, content) {
        let pattern = undefined;

        if(val === true) {
            $.each(content, function () {
               $(this).append("»");
               $(this).prepend("«");
            });
        } else if(val === false) {
            $.each(content, function () {
                let text = $(this).text().
                pattern = /(«|»)/g;
                text = text.replace(pattern, '');
                $(this).text(text);
            });
        }
    }
});

