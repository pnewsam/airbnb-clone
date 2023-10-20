const links = [
  {
    title: "The Best Restaurants in San Diego",
    url: "/best-restaurants-in-san-diego",
  },
  {
    title: "The Best Restaurants in Orange County",
    url: "/best-restaurants-in-orange-county",
  },
  {
    title: "The Best Restaurants in Phoenix",
    url: "/best-restaurants-in-phoenix",
  },
  {
    title: "The Best Restaurants in Tucson",
    url: "/best-restaurants-in-tucson",
  },
  {
    title: "The Best Restaurants in Las Vegas",
    url: "/best-restaurants-in-las-vegas",
  },
];

export const Footer = () => (
  <footer className="bg-stone-100">
    <div className="CONTENT py-12 grid grid-cols-4">
      <div className="pr-6">
        <h5 className="font-display text-stone-700 text-xl mb-2">
          Airbnb Clone
        </h5>
        <p className="text-stone-700">
          Discover the best restaurants in your area.
        </p>
      </div>
      <div>
        <h5 className="text-stone-700 font-semibold mb-2">
          The Best Restaurants
        </h5>
        <div>
          {links.map((link) => (
            <a
              key={link.url}
              className="block text-sm text-stone-700 mb-2"
              href={link.url}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="py-4">
      <p className="text-xs text-stone-700 text-center">©Airbnb Clone 2023</p>
    </div>
  </footer>
);
