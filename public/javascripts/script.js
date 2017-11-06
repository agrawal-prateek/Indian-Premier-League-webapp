/**
 * Created by prateek on 11/5/17.
 */

'use strict';


(function () {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $scope.currentLink = getCurrentLinkFromRoute(current);
    });
});

if ($(window).width() < 768) {
    $(".width-greater").css('display', 'none');
}


if ($(window).width() > 768) {
    $(".width-less").css('display', 'none');
}

$(".demo02").animatedModal({
    modalTarget: 'modal-02',
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#3498db',
    // Callbacks
    beforeOpen: function () {
        console.log("The animation was called");
    },
    afterOpen: function () {
        console.log("The animation is completed");
    },
    beforeClose: function () {
        console.log("The animation was called");
    },
    afterClose: function () {
        console.log("The animation is completed");
    }
});

function matchDetail(matchId) {
    $.get("/matchDetail/" + matchId, function (data, status) {

        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.work').removeClass('active');
        $('.contain').removeClass('active');
        $('.modal-section').addClass('active');
        $('#hamburger').css('display', 'none');

        var matchDate = '';
        for (var i in data.date) {
            if (i > 9)
                break;
            matchDate += data.date[i];
        }
        $('.city').html(data.city);
        $('.date').html(matchDate);
        $('.team1').html(data.team1);
        $('.team2').html(data.team2);
        $('.toss-winner').html(data.toss_winner);
        $('.toss-decision').html(data.toss_decision);
        $('.winner').html(data.winner);
        $('.win-by-runs').html(data.win_by_runs);
        $('.win-by-wickets').html(data.win_by_wickets);
        $('.venue').html(data.venue);
        $('.umpire1').html(data.umpire1);
        $('.umpire2').html(data.umpire2);
    });
}

$('#btn-close-modal').on('click', function () {
    $('.home').addClass('active');
    $('.about').removeClass('active');
    $('.work').removeClass('active');
    $('.contain').removeClass('active');
    $('.modal-section').removeClass('active');
    $('#hamburger').css('display', 'block');
});

$('#hamburger').on('click', function () {
    $('section').scrollTop(0);

    $('.home').removeClass('active');
    $('.about').removeClass('active');
    $('.work').removeClass('active');

    $('.contain').toggleClass('active');

    $('#nav-tag').css('display', 'none');
    $('#home1').css('display', 'block');

    return false;
});

$('.home').on('click', function () {
    if ($('.contain').hasClass('active')) {
        $('.contain').toggleClass('active');
        $('.home').addClass('active');
        $('#hamburger').removeClass('is-open').addClass('is-closed');
        $('#nav-tag').css('display', 'block');
        $('#home1').css('display', 'none');
    }
});

$('.about').on('click', function () {
    if ($('.contain').hasClass('active')) {
        $('.contain').toggleClass('active');
        $('.about').addClass('active');
        $('#hamburger').removeClass('is-open').addClass('is-closed');
        $('#nav-tag').css('display', 'block');
        $('#home1').css('display', 'none');
    }
});

$('.work').on('click', function () {
    if ($('.contain').hasClass('active')) {
        $('.contain').toggleClass('active');
        $('.work').addClass('active');
        $('#hamburger').removeClass('is-open').addClass('is-closed');
        $('#nav-tag').css('display', 'block');
        $('#home1').css('display', 'none');
    }
});

