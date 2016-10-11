

// 点击页面导航条时控制页面滚动方式，需要加载jQuery Easing插件
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// 页面滚动时高亮顶部目标导航条
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// 响应菜单单击时后自动关闭菜单项
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});