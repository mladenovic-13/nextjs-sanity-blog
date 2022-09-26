export const postsData = {
  CS: [
    {
      id: 1,
      title: "BST implementacija",
      desc: "Za implementaciju pojedinacnih cvorova BST-a koristimo klasu `Node`, koja sadrzi podatak koji cuvamo u cvoru i pokazivace na levo i desno podstablo.",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/cs-bst-implementacija",
    },
    {
      id: 2,
      title: "MergeSort",
      desc: "Algoritam sortiranja objedinjavanjem deli niz na dva dela cije se duzine razlikuju najvise za 1, rekurzivno sortira svaki od njih i objedinjuje sortirane polovine. ",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/cs-mergesort",
    },
    {
      id: 3,
      title: "Formiranje hipa - Flojd",
      desc: "Jedan nacin da se od niza formira hip (u istom memorijskom prostoru) je da se krene od praznog hipa i da se jedan po jedan element ubacuju u hip",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/cs-flojdov-metod-formiranja-hipa",
    },
  ],
  CSS: [
    {
      id: 1,
      title: "Flexbox Layout",
      desc: "Flexible Box Model (Flexbox) je jednodimenzijalni (red ili kolona) model rasporedjivanja elemenata na HTML stranici, suprotno od CSS Grid-a koji je dvodimenzionalni model.",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/css-flexbox-layout",
    },
    {
      id: 2,
      title: "Grid Layout",
      desc: "CSS Grid Layout omogucava da grupisemo elemente u redove i kolone. Radi se o dvodimenzionalnom pozicioniranju. Mrezu (grid) formiraju horizontalne i vertikalne linije.",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/css-grid-layout",
    },
    {
      id: 3,
      title: "CSS Responsive Design",
      desc: "U ranijim danima web programiranja, stranice su pravljene za uredjaje sa tacno odredjenom velicinom ekrana, danas imamo problem.",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/css-responsive-design",
    },
  ],
  JavaScript: [
    {
      id: 1,
      title: "Promisi",
      desc: "Promisi kao sto sama rec kaze obecavaju da ce neki rezultat biti vracan nekada u buducnosti. Oni nam ne garantuju kada ce se operacija tacno zavrsiti.",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/js-promisi",
    },
    {
      id: 2,
      title: "Async/await",
      desc: "Async funkcije, kao i kljucna rec await, dodate su u JavaScript kao sintaksicki secer.",
      imgURL:
        "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
      postURL: "/post/js-async",
    },
  ],
};

export const socialLinks = {
  instagram: "https://www.instagram.com/_mladenovic13_/",
  github: "https://github.com/mladenovic-13",
  linkedin: "https://www.linkedin.com/in/nikola-mladenovic-2355371a0",
  email: "mladenovic13.dev@gmail.com",
};

export const navbarItems = [
  { title: "Home", route: "/" },
  { title: "About Me", route: "/about" },
  { title: "Projects", route: "/projects" },
  { title: "Contact Me", route: "/contact" },
  { title: "Blog", route: "/blog" },
];
