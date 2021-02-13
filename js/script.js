$(document).ready(function () {

    function showHide(hide, show, showImage) {
        hide.forEach(function (el) {
            el.toggle();
            el.addClass("animated fadeIn");
        });
        $(".portfolio i").toggleClass("fa-chevron-up fa-chevron-down");
        $(".description").toggle();
        $(".contract").toggle();
        show.addClass("animated fadeIn");
        show.toggleClass("box shortBox");
        show.toggleClass("col-lg-3 col-lg-12");
        showImage.toggle();
        showImage.addClass("animated fadeIn bottomSpacer")
    };

    //Expand and Contract Works

    $("#cubsQuiz").on("click", function () {
        showHide([$("#Bmdb"), $("#prs"), $("#chess")], $("#cubsQuiz"), $("#cubsQuizImage"));
    });
    $("#Bmdb").on("click", function () {
        showHide([$("#prs"), $("#cubsQuiz"), $("#chess")], $("#Bmdb"), $("#BmdbImage"));
    });
    $("#prs").on("click", function () {
        showHide([$("#Bmdb"), $("#cubsQuiz"), $("#chess")], $("#prs"), $("#prsImage"));
    });
    $("#chess").on("click", function () {
        showHide([$("#Bmdb"), $("#cubsQuiz"), $("#prs")], $("#chess"), $("#chessImage"));
    });
    $("#cubsQuizClose").on("click", function () {
        showHide([$("#Bmdb"), $("#prs"), $("#chess")], $("#cubsQuiz"), $("#cubsQuizImage"));
    });
    $("#BmdbClose").on("click", function () {
        showHide([$("#prs"), $("#cubsQuiz"), $("#chess")], $("#BmdbApp"), $("#BmdbImage"));
    });
    $("#prsClose").on("click", function () {
        showHide([$("#Bmdb"), $("#cubsQuiz"), $("#chess")], $("#prs"), $("#prsImage"));
    });
    $("#chessClose").on("click", function () {
        showHide([$("#Bmdb"), $("#cubsQuiz"), $("#prs")], $("#chess"), $("#chessImage"));
    });


    //Setting Scrolls
    $(".navbar-brand").click(function () {
        $(".hero").velocity("scroll", 1000);
    });
    $("#toProfile").click(function () {
        $("#intro").velocity("scroll", 1000);
    });
    $("#profileLink").click(function () {
        $("#intro").velocity("scroll", 1000);
    });
    $("#portfolioLink").click(function () {
        $("#works").velocity("scroll", 1000);
    });
    $("#contactLink").click(function () {
        $("#contact").velocity("scroll", 1000);
    });

    //Callout Styles
    $("#toProfile").velocity({
        translateY: "10px"
    }, {
        loop: 5
    });
});
