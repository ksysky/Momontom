// 메인 슬라이더
$('.slider > .btn > div').click(function(){
    var $clickedBtn = $(this);
    
    var $slider = $clickedBtn.closest('.slider');
    
    var isLeft = $clickedBtn.index() == 0;
    
    var $present = $slider.find('.slide > .active');
    
    var $post = null;
    
    if(isLeft) {
        $post = $present.prev();
    }
    else {
        $post = $present.next();
    }
    
    if ( $post.length == 0 ) {
        if(isLeft) {
            $post = $slider.find('.slide > div:last-child');    
        }
        else {
            $post = $slider.find('.slide > div:first-child');   
        }
    }
    
    $present.removeClass('active');
    $post.addClass('active');
});


// 이벤트 슬라이더
$('.event > .btn_ev > div').click(function(){
    var $btns = $(this);
    
    var $event = $btns.closest('.event');
    
    var isLeft = $btns.index() == 0;
    
    var $present = $event.find('.slide_ev > .active');
    
    var $post = null;
    
    if(isLeft) {
        $post = $present.prev();
    }
    else {
        $post = $present.next();
    }
    
    if($post.length == 0) {
        if(isLeft) {
            $post = $event.find('.slide_ev > div:last-child');
        }
    else {
            $post = $event.find('.slide_ev > div:first-child');
        }
    }
    
    $present.removeClass('active');
    $post.addClass('active');
});

// MD 상품 슬라이더
$('.md_slider .page_btns > div').click(function(){
    $(this).addClass('active');
    $(this).siblings('.active').removeClass('active');
    
    var index = $(this).index();
    
    var $slider = $(this).closest('.md_slider');
    
    $slider.find('.md_slide > div.active').removeClass('active');
    $slider.find('.md_slide > div').eq(index).addClass('active');
});
