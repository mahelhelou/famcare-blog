const featuredBlogPosts = new Swiper('.featured-blog .swiper', {
	speed: 7500,
	delay: 400,
	autoplay: {
		disableOnInteraction: false
	},
	spaceBetween: 20,
	loop: true,
	// number of slides per view
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true
	}
})

$('.featured-blog .swiper').featuredBlogPosts
