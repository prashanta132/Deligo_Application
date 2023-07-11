import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import { useState } from "react";
import { GoogleMap, Marker } from "google-maps-react";
import { TbCurrentLocation } from "react-icons";
import { MdExplore } from "react-icons";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;
import styles from "styles/grid.module.scss";
import React, { useEffect } from "react";
import Image from "next/image";
import TestimonialSlider from "components/Testinomial";
import Footer from "components/Footer";
import SearchLocation from "@layouts/components/SearchLocation";
import SignUpPage from "@layouts/components/SignUp";

const Home = ({ banner, posts }) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  // const [searchValue, setSearchValue] = useState("");
  // const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  // const [markerPosition, setMarkerPosition] = useState(null);

  // const handleSearchChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform search or call API with the searchValue
  //   console.log("Searching for:", searchValue);
  // };

  // const handleLocateClick = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       setMapCenter({ lat: latitude, lng: longitude });
  //       setMarkerPosition({ lat: latitude, lng: longitude });
  //     });
  //   }
  // };

  // const handleExploreClick = () => {
  //   // Perform explore action, e.g., show nearby places, etc.
  //   console.log("Exploring nearby places");
  // };

  return (
    <Base>
      <>
        {/* Banner */}
        <section className="section banner relative pb-0 bg-green-100">
          <ImageFallback
            className="absolute bottom-0 left-0 z-[-1]"
            src={"/images/hero_background.png"}
            width={1905}
            height={295}
            alt="banner-shape"
            priority
          />

          <div className="container">
            <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
              <div
                className={
                  banner.image_enable
                    ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left"
                    : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left"
                }
              >
                <div className="banner-title">
                  {markdownify(banner.title, "h1")}
                  {markdownify(banner.title_small, "span")}
                </div>
                {markdownify(banner.content, "p", "mt-4")}
                {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-6"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
                )}
              </div>
              {banner.image_enable && (
                <div className="col-9 lg:col-6">
                  <ImageFallback
                    className="mx-auto object-contain"
                    src={banner.image}
                    width="250"
                    height="25"
                    sizes="100vw"
                    priority={true}
                    alt="Banner Image"
                  />
                </div>
              )}
            </div>
            {/* <SearchLocation/> */}
            <SignUpPage/>
            {/* <form onSubmit={handleSearchSubmit} className="mb-4 flex">
            <input
              type="text"
              placeholder="Search for a location"
              className="rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="rounded-r-md bg-blue-500 px-4 py-2 text-white focus:outline-none focus:ring focus:ring-blue-500 hover:bg-blue-600"
            >
              Search
            </button>
          </form>
          <div style={{ width: "100%", height: "400px" }}>
            <GoogleMap
              google={typeof window.google}
              initialCenter={mapCenter}
              center={mapCenter}
              zoom={14}
              onClick={(t, map, coord) => {
                setMarkerPosition(coord.latLng);
              }}
            >
              {markerPosition && <Marker position={markerPosition} />}
            </GoogleMap>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleLocateClick}
              className="mr-2 inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white focus:outline-none focus:ring focus:ring-blue-500 hover:bg-blue-600"
            >
              <TbCurrentLocation className="mr-2 h-4 w-4" />
              Locate Me
            </button>
            <button
              type="button"
              onClick={handleExploreClick}
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white focus:outline-none focus:ring focus:ring-blue-500 hover:bg-blue-600"
            >
              <MdExplore className="mr-2 h-4 w-4" />
              Explore
            </button>
          </div> */}
          </div>
        </section>

        {/* Home main */}
        <section className="section">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-4">Deligo is Best Delivery Service Near You</h1>
              <p className="mb-4 text-2xl">Deligo is a one-stop shop for all your daily necessities. You can shop for groceries, and pharmacy items, order food, and send important parcels from one place to another from the comfort of your home.</p>
              <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Order Now</button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/delivery-boy.jpg" alt="Image" className="w-medium" />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/grocery.png"
                alt="Image 1"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/pharmacy.png"
                alt="Image 2"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/fathers.png"
                alt="Image 3"
                className="w-full h-auto"
              />
            </div>
          </div>
          <section className="bg-emerald-200 py-16 px-4 md:px-8 lg:px-16 xl:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2">
                <img
                  src="/images/result.png"
                  alt="App Screenshot"
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                <h1 className="text-4xl font-bold text-teal-800 mb-4">Complete Multipurpose eBusiness Solution</h1>
                <p className="text-teal-800 mb-8 text-2xl">
                  Deligo is a Laravel and Flutter Framework-based multi-vendor food, grocery, eCommerce, parcel, and pharmacy delivery system. It has six modules to cover all your business function
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=yourapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-teal-800 text-white font-bold rounded-md px-4 py-2"
                  >
                    <img
                      src="/icons/google_play.png"
                      alt="Google Play"
                      className="w-6 h-6 mr-2"
                    />
                    Google Play
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/yourapp/id1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-teal-800 text-white font-bold rounded-md px-4 py-2"
                  >
                    <img
                      src="/icons/app.png"
                      alt="App Store"
                      className="w-6 h-6 mr-2"
                    />
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold text-center mb-4">Let’s  Start  Earning  with  Deligo</h1>
            <p className="text-2xl text-center font-thin mb-4">Join our online marketplace revolution and boost your income.</p>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 text-black flex flex-col items-center p-4 mb-4 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <img src="/images/seller.jpg" alt="Image 1" className="w-1/2 md:w-1/4 mb-4" />
                  <div>
                    <h1 className="text-3xl font-bold text-center mb-4">Become a Seller</h1>
                    <p className="text-center md:text-left md:ml-4 mb-4">
                      Register as seller & open shop in 6amMart to start your business
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
                  </div>
                </div>

              </div>
              <div className="w-full md:w-1/2  text-black flex flex-col items-center p-4">
                <div className="flex flex-col md:flex-row items-center">

                  <img src="/images/delivery-man.png" alt="Image 2" className="w-1/2 md:w-1/4 mb-4" />
                  <div>
                    <h1 className="text-3xl font-bold text-center mb-4">Become a Delivery Man</h1>
                    <p className="text-center md:text-left md:ml-4 mb-4">
                      Register as delivery man and earn money
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              src="/images/banner.png"
              alt="Banner Image"
              className="w-full"
            />
          </div>




          {/* <div className="container mx-auto">
            <img
              src="/images/banner.png"
              alt="Banner Image"
              className="w-full h-auto sticky"
            />
          </div> */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let’s Manage Your Business Smartly</h1>

                <div className="flex lg:flex-row md:flex-col">
                  <button className="bg-green-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                      <span className="title-font font-medium">Google Play</span>
                    </span>
                  </button>
                  <button className="bg-green-200 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">Download on the</span>
                      <span className="title-font font-medium">App Store</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="/images/mobile-app.png" />
              </div>
            </div>
          </section>
        </section>
        <TestimonialSlider />

      </>

    </Base >
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
