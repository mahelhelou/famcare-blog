const featuredBlogPosts = new Swiper('.featured-blog .swiper', {
	speed: 2500,
	autoplay: {
		delay: 1250,
		disableOnInteraction: false
	},
	spaceBetween: 20,
	loop: true,
	// number of slides per view
	slidesPerView: 1,
	pagination: {
		el: '.featured-blog .swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		type: 'bullets'
	}
})

$('.featured-blog .swiper').featuredBlogPosts
