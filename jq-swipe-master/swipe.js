/**
 * Created by baixiaosheng on 2016/4/13.
 */

var swipe = function (options) {
  var $that = this;
  var $slideWrapper = $that.children('.m-slide-wrapper');
  var $slideContent = $slideWrapper.children('.m-slide');

  var defaults = {};
  var opts = $.extend(defaults, options);

  var slideLength = $slideContent.length;
  var windowWidth = $(window).width();
  var touchStartX = 0, touchMoveX = 0;

  $slideContent.css('width', windowWidth);
  $slideWrapper.css('width', windowWidth * slideLength);

  var $slidePage = $('<div class="m-slide-pagination"></div>');
  for (var i = 0; i < slideLength; i++) {
    $slidePage.append($('<span></span>'));
  }
  var $slidePageItem = $slidePage.children();

  $that.append($slidePage);

  $slideContent.eq(0).addClass('m-slide-active');
  $slidePageItem.eq(0).addClass('m-slide-pagination-active');

  var slide = function () {
    var $active = $('.m-slide-active');
    var index = $slideContent.index($active);
    var translateX = -windowWidth * index;
    if (index == slideLength - 1) {
      $slideWrapper.css({
        'transform': 'translate(0px, 0px)',
        'transition-duration': '0.6s'
      });
      $slideContent.removeClass('m-slide-active');
      $slideContent.eq(0).addClass('m-slide-active');
      $slidePageItem.removeClass('m-slide-pagination-active');
      $slidePageItem.eq(0).addClass('m-slide-pagination-active');
    } else {
      $slideWrapper.css({
        'transform': 'translate(' + (translateX - windowWidth) + 'px, 0px)',
        'transition-duration': '0.6s'
      });
      $slideContent.removeClass('m-slide-active');
      $slideContent.eq(index + 1).addClass('m-slide-active');
      $slidePageItem.removeClass('m-slide-pagination-active');
      $slidePageItem.eq(index + 1).addClass('m-slide-pagination-active');
    }
  };

  var inter = setInterval(slide, 3000);

  $that[0].addEventListener('touchstart', function (e) {
    touchStartX = e.targetTouches[0].clientX;
    clearInterval(inter);
  }, false);
  $that[0].addEventListener('touchmove', function (e) {
    touchMoveX = e.targetTouches[0].clientX;
    var $active = $('.m-slide-active');
    var index = $slideContent.index($active);
    $slideWrapper.css({
      'transform': 'translate(' + -(touchStartX - touchMoveX + index * windowWidth) + 'px, 0px)',
      'transition-duration': '0s'
    });
  }, false);
  $that[0].addEventListener('touchend', function (e) {
    var move = touchStartX - touchMoveX;
    var $active = $('.m-slide-active');
    var index = $slideContent.index($active);
    var translateX = -windowWidth * index;
    if (move >= 0) {
      //left
      //最后一个
      if (index == slideLength - 1) {
        $slideWrapper.css({
          'transform': 'translate(' + translateX + 'px, 0px)',
          'transition-duration': '0.2s'
        });
      } else {
        if (Math.abs(move) < 100) {
          $slideWrapper.css({
            'transform': 'translate(' + translateX + 'px, 0px)',
            'transition-duration': '0.6s'
          });
        } else {
          $slideWrapper.css({
            'transform': 'translate(' + (translateX - windowWidth) + 'px, 0px)',
            'transition-duration': '0.6s'
          });
          $slideContent.removeClass('m-slide-active');
          $slideContent.eq(index + 1).addClass('m-slide-active');
          $slidePageItem.removeClass('m-slide-pagination-active');
          $slidePageItem.eq(index + 1).addClass('m-slide-pagination-active');
        }
      }
    }
    if (move < 0) {
      //right
      //第一个
      if (index == 0) {
        $slideWrapper.css({
          'transform': 'translate(' + translateX + 'px, 0px)',
          'transition-duration': '0.2s'
        });
      } else {
        if (Math.abs(move) < 100) {
          $slideWrapper.css({
            'transform': 'translate(' + translateX + 'px, 0px)',
            'transition-duration': '0.6s'
          });
        } else {
          $slideWrapper.css({
            'transform': 'translate(' + (translateX + windowWidth) + 'px, 0px)',
            'transition-duration': '0.6s'
          });
          $slideContent.removeClass('m-slide-active');
          $slideContent.eq(index - 1).addClass('m-slide-active');
          $slidePageItem.removeClass('m-slide-pagination-active');
          $slidePageItem.eq(index - 1).addClass('m-slide-pagination-active');
        }
      }
    }
    inter = setInterval(slide, 3000);
  }, false);
};
(function ($) {
  $.fn.extend({
    swipe: swipe
  });
  $(window).resize(function () {
    $('.m-slide-container').swipe();
  });
})(jQuery);