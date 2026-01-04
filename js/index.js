//ハンバーガーメニュー
jQuery('#js-button-drawer').on('click', function () {
  jQuery(this).toggleClass('is-checked');
  jQuery('#js-drawer').slideToggle();
  jQuery('body').toggleClass('is-fixed');
});

// メニュー内のリンクがクリックされたらメニューを閉じるか、スムーズスクロールする
jQuery('.header__nav-link').on('click', function (e) {
  // ハンバーガーメニューが表示されている（スマホ表示）場合
  if (jQuery('#js-button-drawer').is(':visible')) {
    // メニューを閉じる
    jQuery('#js-button-drawer').removeClass('is-checked');
    jQuery('#js-drawer').slideUp();
    jQuery('body').removeClass('is-fixed');
    // この場合、デフォルトのアンカー動作（ジャンプ）に任せる
  } else {
    // PC表示の場合はスムーズスクロールを実行
    e.preventDefault(); // デフォルトのアンカー動作をキャンセル
    let href = jQuery(this).attr('href');
    let target = jQuery(href);
    if (target.length) {
      jQuery('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        500, // 500ミリ秒かけてスクロール
      );
    }
  }
});

// スクロールダウンボタンがクリックされたら#serviceにスクロール
jQuery('.scroll-down').on('click', function () {
  jQuery('html, body').animate(
    {
      scrollTop: jQuery('#service').offset().top,
    },
    500,
  );
});
