const posts = [
    { id: 1, title: "Post #1", author: "Author of Post #1", text: "Fusce arcu nunc, luctus ac porttitor ac, venenatis sagittis mauris. Suspendisse tempus vehicula urna, vel dictum nibh suscipit vitae. Maecenas aliquet diam nec ligula tempus, vel congue leo tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis tortor, luctus ac turpis tempor, efficitur malesuada lacus. Ut interdum quam erat, ac ultricies odio euismod id." },
    { id: 2, title: "Post #2", author: "Author of Post #2", text: "Cras luctus enim ut libero dapibus, nec iaculis felis varius. Quisque at est feugiat, porta odio non, placerat risus. Cras massa justo, feugiat vel dapibus a, facilisis eget ex. Mauris convallis leo sed est vestibulum, congue aliquam nisi mollis. Etiam sodales dolor feugiat justo semper, nec placerat nisl placerat. Nam congue nisi ac magna scelerisque condimentum. Ut eget laoreet metus. Suspendisse in fermentum nisl, eget rhoncus risus." },
    { id: 3, title: "Post #3", author: "Author of Post #3", text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras lobortis enim fermentum lectus laoreet, sed elementum tortor consectetur. Donec eu felis ipsum. Proin et erat ut massa facilisis posuere nec vitae nisi. Maecenas pretium lectus sapien, nec finibus est iaculis eget. Etiam non nunc pharetra, dapibus ligula ullamcorper, porta quam. Morbi tempus nisi sem, ac efficitur massa convallis in." },
    { id: 4, title: "Post #4", author: "Author of Post #4", text: "Sed tempor neque vel iaculis facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae facilisis lacus, id venenatis turpis. Morbi arcu risus, lobortis at tempor ac, pretium quis erat. Donec pharetra semper tortor non vestibulum. Nam rutrum nulla sit amet nibh tincidunt interdum. Donec iaculis ut massa ac rhoncus." },
    { id: 5, title: "Post #5", author: "Author of Post #5", text: "Aliquam eleifend, diam quis tempus aliquam, ex lectus mattis erat, varius feugiat velit massa eu ligula. Mauris vitae ultrices purus, quis fermentum odio. Cras mollis tincidunt arcu eu eleifend. Sed nisl lorem, elementum sollicitudin sapien in, hendrerit auctor orci. Aliquam convallis quam orci, sit amet consequat neque rhoncus eu." }
];

const comments = [
    { id: 1, postId: 1, text: "Comment #1 for Post #1" },
    { id: 2, postId: 2, text: "Comment #2 for Post #2" },
    { id: 3, postId: 3, text: "Comment #3 for Post #3" },
    { id: 4, postId: 4, text: "Comment #4 for Post #4" },
    { id: 5, postId: 5, text: "Comment #5 for Post #5" },
    { id: 6, postId: 1, text: "Comment #6 for Post #1" },
    { id: 7, postId: 2, text: "Comment #7 for Post #2" },
    { id: 8, postId: 3, text: "Comment #8 for Post #3" },
    { id: 9, postId: 4, text: "Comment #9 for Post #4" },
    { id: 10, postId: 5, text: "Comment #10 for Post #5" },
    { id: 11, postId: 1, text: "Comment #11 for Post #1" },
    { id: 12, postId: 2, text: "Comment #12 for Post #2" },
    { id: 13, postId: 3, text: "Comment #13 for Post #3" },
    { id: 14, postId: 4, text: "Comment #14 for Post #4" },
    { id: 15, postId: 5, text: "Comment #15 for Post #5" },
    { id: 16, postId: 1, text: "Comment #16 for Post #1" },
    { id: 17, postId: 2, text: "Comment #17 for Post #2" },
    { id: 18, postId: 3, text: "Comment #18 for Post #3" },
    { id: 19, postId: 4, text: "Comment #19 for Post #4" },
    { id: 20, postId: 5, text: "Comment #20 for Post #5" }
];

export { posts, comments };