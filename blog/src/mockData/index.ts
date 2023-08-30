const posts = [
  {
    id: 1,
    img: require("@/assets/img/blog/blog-1.jpg"),
    title: "Cooking tips make cooking simple",
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    created_at: "May 4,2019",
    comments: [{},{}],
    slug: "#",
    isShowReadMore: false,
    content: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
    dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
    aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
    sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
    Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
    quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
    feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
<h3>The corner window forms a place within a place that is a resting point within the large
    space.</h3>
<p>The study area is located at the back with a view of the vast nature. Together with the other
    buildings, a congruent story has been managed in which the whole has a reinforcing effect on
    the components. The use of materials seeks connection to the main house, the adjacent
    stables</p>`,
    user: {
      firstname: 'Michael',
      lastname: 'Scofield',
      role: 'Admin',
      img: require('@/assets/img/blog/details/details-author.jpg'),
    },
    detailImg: require("@/assets/img/blog/details/details-pic.jpg"),
    category: [{ title: "Food" }],
    tags: [{ id: 1, title: "All"}, { id: 2, title: "Trending"}, { id: 3, title: "Cooking"}, { id: 4, title: "Healthy Food"}, { id: 5, title: "Life Style"}]
  },
  {
    id: 2,
    img: require("@/assets/img/blog/blog-2.jpg"),
    title: "6 ways to prepare breakfast for 30",
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    created_at: "May 4,2019",
    comments: [{},{}],
    slug: "#",
    isShowReadMore: false,
    content: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
    dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
    aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
    sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
    Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
    quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
    feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
<h3>The corner window forms a place within a place that is a resting point within the large
    space.</h3>
<p>The study area is located at the back with a view of the vast nature. Together with the other
    buildings, a congruent story has been managed in which the whole has a reinforcing effect on
    the components. The use of materials seeks connection to the main house, the adjacent
    stables</p>`,
    user: {
      firstname: 'Michael',
      lastname: 'Scofield',
      role: 'Admin',
      img: require('@/assets/img/blog/details/details-author.jpg'),
    },
    detailImg: require("@/assets/img/blog/details/details-pic.jpg"),
    category: [{ title: "Food" }],
    tags: [{ id: 1, title: "All"}, { id: 2, title: "Trending"}, { id: 3, title: "Cooking"}, { id: 4, title: "Healthy Food"}, { id: 5, title: "Life Style"}]
  },
  {
    id: 3,
    img: require("@/assets/img/blog/blog-3.jpg"),
    title: "Visit the clean farm in the US",
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    postDate: "May 4,2019",
    totalComment: 5,
    src: "#",
    isShowReadMore: false,
    content: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
    dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
    aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
    sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
    Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
    quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
    feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
<h3>The corner window forms a place within a place that is a resting point within the large
    space.</h3>
<p>The study area is located at the back with a view of the vast nature. Together with the other
    buildings, a congruent story has been managed in which the whole has a reinforcing effect on
    the components. The use of materials seeks connection to the main house, the adjacent
    stables</p>`,
    user: {
      firstname: 'Michael',
      lastname: 'Scofield',
      role: 'Admin',
      img: require('@/assets/img/blog/details/details-author.jpg'),
    },
    detailImg: require("@/assets/img/blog/details/details-pic.jpg"),
    category: [{ title: "Food" }],
    tags: [{ id: 1, title: "All"}, { id: 2, title: "Trending"}, { id: 3, title: "Cooking"}, { id: 4, title: "Healthy Food"}, { id: 5, title: "Life Style"}]
  },
];

const postCategories = [
  {
    id: 1,
    name: "apple",
    totalPost: 10,
  },
  {
    id: 2,
    name: "beauty",
    totalPost: 321,
  },
  {
    id: 3,
    name: "vegetables",
    totalPost: 5,
  },
  {
    id: 4,
    name: "fruit",
    totalPost: 10,
  },
  {
    id: 5,
    name: "healthy food",
    totalPost: 2,
  },
  {
    id: 6,
    name: "lifestyle",
    totalPost: 100,
  },
];
export { posts, postCategories };
