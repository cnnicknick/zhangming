

// ���ҳ�浼����ʱ����ҳ�������ʽ����Ҫ����jQuery Easing���
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// ҳ�����ʱ��������Ŀ�굼����
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// ��Ӧ�˵�����ʱ���Զ��رղ˵���
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});