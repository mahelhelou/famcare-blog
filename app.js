const featuredBlogPosts = new Swiper('.featured-blog .swiper', {
	speed: 1750,
	autoplay: {
		enabled: true,
		disableOnInteraction: false,
		delay: 10000
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
