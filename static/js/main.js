/**
 * Created by yantianyu on 2017/1/24.
 */

function render(obj) {
    if (obj.isAccoutOn == true || obj.isAccoutOn == "true") {
        $('#h2_text').text('"愿天堂没有傻龙"正在被占用');
        $('#cbtest').prop('checked', true);
    } else {
        $('#h2_text').text('"愿天堂没有傻龙"闲置中');
        $('#cbtest').prop('checked', false);
    }
}

$.get({
    url: '/get-status',
    cache: false,
    type: 'GET',
    success: function (obj) {
        render(obj);
    }
});

$('#cbtest').click(function () {
    $.get({
        url: '/set-status',
        cache: false,
        type: 'GET',
        data: {
            isAccoutOn: $('#cbtest').prop('checked')
        },
        success: function (obj) {
            render(obj);
        }
    });
});