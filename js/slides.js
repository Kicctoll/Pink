$('document').ready(function () {
    let contCom = $('#contComments');
    let slidesCom = $(contCom).find('.slides li');
    let curSlideCom = $(slidesCom).first();

    let dotsCom = $(contCom).find('.dots a');
    let firstDotCom = $(dotsCom).first();
    let lastDotCom = $(dotsCom).last();
    $(firstDotCom).addClass('active');

    let arrowCom = $(contCom).find('.arrow');

    $(dotsCom).click(function (event) {
        event.preventDefault();
        slideShow(contCom, slidesCom, curSlideCom, this, dotsCom);
    });

    $(arrowCom).click(function (event) {
        event.preventDefault();
        slideArrowShow(slidesCom, curSlideCom, this, lastDotCom, dotsCom);
    });

    function slideShow(cont, slides, curSlide, clickedDot, dots) {
        let prevIndex = $(curSlide).index();
        let nextIndex = $(clickedDot).parent().index();
        let margin = 100 * nextIndex;
        let parentSlide = $(slides).parent();

        if(nextIndex > prevIndex) {
            $(parentSlide).animate({
                marginLeft: (-margin) + '%'
            }, {
                duration: 500
            });
        } else if(nextIndex < prevIndex) {
            $(parentSlide).animate({
                marginLeft: (-margin) + '%'
            }, {
                duration: 500
            });
        }

        selectCur(curSlide, slides, prevIndex, nextIndex, dots);
    }

    function slideArrowShow(cont, curSlide, clickedArrow, lastDot, dots) {
        let prevIndex = $(curSlide).index();
        let nextIndex = undefined;
        let lastIndex = $(lastDot).parent().index();

        if($(clickedArrow).hasClass('a-left')) {
            nextIndex = prevIndex - 1;
            if(nextIndex < 0) {
                nextIndex = lastIndex;
            }
        } else if($(clickedArrow).hasClass('a-right')) {
            nextIndex = prevIndex + 1;
            if(nextIndex > lastIndex) {
                nextIndex = 0;
            }
        }

        let margin = nextIndex * 100;
        $(cont.parent()).animate({
            marginLeft: -(margin) + '%'
        }, {
            duration: 500
        });

        selectCur(curSlide, cont, prevIndex, nextIndex, dots);
    }

    function selectCur(curSlide, slides, prevIndex,nextIndex, dots) {
        if($(curSlide).parent().parent().is('#contComments')) {
            curSlideCom = $(slides).eq(nextIndex);
        }
        $(dots).eq(prevIndex).removeClass('active');
        $(dots).eq(nextIndex).addClass('active');
    }
});