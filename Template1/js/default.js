function ShowStaticsForLoanNew() {
    $.ajax({
        type: "POST",
        url: "/Home/ShowStaticsForLoanNew",
    }).done(function (data) {
        $('#divStaticsForLoanNew').html(data);
    });
}

function ShowStaticsForInviteLoanNew() {
    $.ajax({
        type: "POST",
        url: "/Home/ShowStaticsForInviteLoanNew",
    }).done(function (data) {
        $('#divStaticsForInviteLoanNew').html(data);
    });
}

function ShowListNewsInHomePage() {
    if (isMobile == 0) {
        $.ajax({
            type: "POST",
            url: "/Home/NewsInHomePage",
        }).done(function (data) {
            $('#topnewsinhomepage').html(data);
        });
    }

}

function GetTopNewsInListPage() {
    $.ajax({
        type: "POST",
        url: "/News/TopNewInList",
    }).done(function (data) {
        $('#topnewsinlistpage').html(data);
    });
}

function ShowListLoanLatest() {

    $.ajax({
        type: "POST",
        url: "/Home/ListLoanLatest",
    }).done(function (data) {
        $('#ListLoanLatest').replaceWith(data);
        // Đơn vay mới nhất
        var tm_table_swiper = new Swiper('.tm-table-swiper', {
            loop: true,
            slidesPerView: 7,
            direction: 'vertical',
            // centeredSlides: true,
            autoplay: 3500,
            autoplayDisableOnInteraction: false
        });
    });

}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var aff = getParameterByName('aff');
var campaign = getParameterByName('campaign');
var utmSource = getParameterByName('utm_source');

(function () {

    if (getCookie('Tima_aff') == '') {
        if (aff != "") {
            setCookie('Tima_aff', aff, 30);

            //xóa bản ghi của gtv
            deleteCookie('Tima_GTV');
        }
    }

    if (campaign != "") {
        setCookie('Campaign', campaign, 30);
    }

    if (getCookie('Tima_GTV') == '') {
        //set cookies cho gtv
        if (utmSource != "" && utmSource == "gtv-9999") {
            setCookie('Tima_GTV', utmSource, 30);

            //xóa cookies của aff và campain
            deleteCookie('Campaign');
            deleteCookie('Tima_aff');
        }
    }




})();
//break iframe
if (this != top) {
    top.document.location.href = this.document.location.href;
}

if (getCookie('tkld') == '') {
    setCookie('tkld', guid(), 18250);
}