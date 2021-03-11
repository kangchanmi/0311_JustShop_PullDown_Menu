$(function () {

    $("button#tabBtn1").click(function () {

        /* 버튼 모양 변경 시작 */
        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        /* 내용 변경 시작 */
        $("div#tabContents1").css({
            "display": "block"
        });
        $("div#tabContents2").css({
            "display": "none"
        });
    });


    $("button#tabBtn2").click(function () {

        /* 버튼 모양 변경 시작 */
        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });


        /* 내용 변경 시작 */
        $("div#tabContents1").css({
            "display": "none"
        });
        $("div#tabContents2").css({
            "display": "block"
        });
    });

    /*모달레이어 팝업 시작*/
    $("div#tabContents1 td a:first-child").click(function () {
        $("div#modalLayerBG").css({
            "display": "block"
        });
    });

    $("button#closeBtn").click(function () {
        $("div#modalLayerBG").css({
            "display": "none"
        });
    });
    /*모달레이어 팝업 끝*/

    /*풀다운 메뉴 시작*/
    $("nav#gnb ul li").mouseover(function () {
        $(this).children("ul").stop().slideDown(400);
    });

    $("nav#gnb ul li").mouseout(function () {
        $(this).children("ul").stop().slideUp(400);
    });
    /*풀다운 메뉴 끝*/


}); /*  $(function() {} );*/

/*
중괄호, 소괄호의
순서와 짝맞춤에
아주아주 주의한다.
$("선택자").메서드();
*/
