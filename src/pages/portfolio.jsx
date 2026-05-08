
import { useState, useEffect } from "react";
import AOS from "aos";

import a1 from '../assets/img/portfolio/app-1.jpg'
import a2 from '../assets/img/portfolio/homeclean.avif'
import a3 from '../assets/img/portfolio/app-3.jpg'
import p1 from '../assets/img/portfolio/product-1.jpg'
import p2 from '../assets/img/portfolio/product-2.jpg'
import p3 from '../assets/img/portfolio/product-3.jpg'
import b1 from '../assets/img/portfolio/books-1.jpg'
import b2 from '../assets/img/portfolio/books-2.jpg'
import b3 from '../assets/img/portfolio/books-3.jpg'
import br1 from '../assets/img/portfolio/branding-1.jpg'
import br2 from '../assets/img/portfolio/branding-2.jpg'
import br3 from '../assets/img/portfolio/branding-3.jpg'
import t1 from '../assets/img/team/team-1.jpg'
import t2 from '../assets/img/team/team-2.jpg'
import t3 from '../assets/img/team/team-3.jpg'

function Portfolio() {
const portfolioData = [
    { id: 1, category: "app", img: a1, title: "App 1" },
    { id: 2, category: "app", img: a2, title: "App 2" },
    { id: 3, category: "app", img: a3, title: "App 3" },

    { id: 4, category: "product", img: p1, title: "Product 1" },
    { id: 5, category: "product", img: p2, title: "Product 2" },
    { id: 6, category: "product", img: p3, title: "Product 3" },

    { id: 7, category: "branding", img: br1, title: "Branding 1" },
    { id: 8, category: "branding", img: br2, title: "Branding 2" },
    { id: 9, category: "branding", img: br3, title: "Branding 3" },

    { id: 10, category: "books", img: b1, title: "Books 1" },
    { id: 11, category: "books", img: b2, title: "Books 2" },
    { id: 12, category: "books", img: b3, title: "Books 3" },
  ];

  const [filter, setFilter] = useState("all");

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">

        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>CHECK OUR PORTFOLIO</p>
        </div>

        <div className="container">

          {/* FILTERS */}
          <ul className="portfolio-filters d-flex justify-content-center" data-aos="fade-up">
            <li className={filter === "all" ? "filter-active" : ""} onClick={() => setFilter("all")}>All</li>
            <li className={filter === "app" ? "filter-active" : ""} onClick={() => setFilter("app")}>App</li>
            <li className={filter === "product" ? "filter-active" : ""} onClick={() => setFilter("product")}>Product</li>
            <li className={filter === "branding" ? "filter-active" : ""} onClick={() => setFilter("branding")}>Branding</li>
            <li className={filter === "books" ? "filter-active" : ""} onClick={() => setFilter("books")}>Books</li>
          </ul>

          {/* ITEMS */}
           <div className="row gy-4 portfolio-container">
  {portfolioData
    .filter(item => filter === "all" || item.category === filter)
    .map((item, index) => (
      <div
        key={item.id}
        className="col-lg-4 col-md-6 portfolio-item"
        data-aos="zoom-in"
        data-aos-delay={index * 100}
      >
        <div className="portfolio-content h-100">
          <img src={item.img} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>{item.title}</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href={item.img} className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
            </a>
            <a href="#" className="details-link">
              <i className="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
      </div>
    ))}
</div>

          {/* <div className="row gy-4 mt-4" data-aos="fade-up" data-aos-delay="200">

            {portfolioData
              .filter(item => filter === "all" || item.category === filter)
              .map(item => (
                <div className="col-lg-4 col-md-6 portfolio-item" key={item.id}>
                  <div className="portfolio-content h-100">
                    <img src={item.img} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href={item.img} className="glightbox preview-link">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a href="#" className="details-link">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

          </div> */}

        </div>
      </section>
      {/* /Portfolio Section */}

      {/* Team Section (UNCHANGED) */}
      <section id="team" className="team section light-background">

        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>CHECK OUR TEAM</p>
        </div>

        <div className="container">
          <div className="row gy-5">

            <div className="col-lg-4 col-md-6">
              <div className="member">
                <div className="pic"><img src={t1} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member">
                <div className="pic"><img src={t2} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member">
                <div className="pic"><img src={t3} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      {/* /Team Section */}
    </>
  );
}

export default Portfolio;

// import { useState } from "react";

// import a1 from '../assets/img/portfolio/app-1.jpg'
// import a2 from '../assets/img/portfolio/app-2.jpg'
// import a3 from '../assets/img/portfolio/app-3.jpg'
// import p1 from '../assets/img/portfolio/product-1.jpg'
// import p2 from '../assets/img/portfolio/product-2.jpg'
// import p3 from '../assets/img/portfolio/product-3.jpg'
// import b1 from '../assets/img/portfolio/books-1.jpg'
// import b2 from '../assets/img/portfolio/books-2.jpg'
// import b3 from '../assets/img/portfolio/books-3.jpg'
// import br1 from '../assets/img/portfolio/branding-1.jpg'
// import br2 from '../assets/img/portfolio/branding-2.jpg'
// import br3 from '../assets/img/portfolio/branding-3.jpg'
// import t1 from '../assets/img/team/team-1.jpg'
// import t2 from '../assets/img/team/team-2.jpg'
// import t3 from '../assets/img/team/team-3.jpg'
// function Portfolio(){
//         const portfolioData = [
//       { id: 1, category: "app", img: a1, title: "App 1" },
//       { id: 2, category: "app", img: a2, title: "App 2" },
//       { id: 3, category: "app", img: a3, title: "App 3" },

//       { id: 4, category: "product", img: p1, title: "Product 1" },
//       { id: 5, category: "product", img: p2, title: "Product 2" },
//       { id: 6, category: "product", img: p3, title: "Product 3" },

//       { id: 7, category: "branding", img: br1, title: "Branding 1" },
//       { id: 8, category: "branding", img: br2, title: "Branding 2" },
//       { id: 9, category: "branding", img: br3, title: "Branding 3" },

//       { id: 10, category: "books", img: b1, title: "Books 1" },
//       { id: 11, category: "books", img: b2, title: "Books 2" },
//       { id: 12, category: "books", img: b3, title: "Books 3" },
//     ];
//     const [filter, setFilter] = useState("all");

//     return(
//     <>
//     {/* <!-- Portfolio Section --> */}
//     <section id="portfolio" className="portfolio section">

//       {/* <!-- Section Title --> */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Portfolio</h2>
//         <p>CHECK OUR PORTFOLIO</p>
//       </div>
//       {/* <!-- End Section Title --> */}

//       <div className="container">

//         <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

//           <ul className="portfolio-filters" data-aos="fade-up">
//           <li className={filter === "all" ? "filter-active" : ""} onClick={() => setFilter("all")}>All</li>
//           <li className={filter === "app" ? "filter-active" : ""} onClick={() => setFilter("app")}>App</li>
//           <li className={filter === "product" ? "filter-active" : ""} onClick={() => setFilter("product")}>Product</li>
//           <li className={filter === "branding" ? "filter-active" : ""} onClick={() => setFilter("branding")}>Branding</li>
//           <li className={filter === "books" ? "filter-active" : ""} onClick={() => setFilter("books")}>Books</li>
//         </ul>

//           {/* <!-- End Portfolio Filters --> */}

//           <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//               <div className="portfolio-content h-100">
//                 <img src={a1} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>App 1</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={a1} title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//               <div className="portfolio-content h-100">
//                 <img src={p1} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Product 1</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={p1} title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//               <div className="portfolio-content h-100">
//                 <img src={br1} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Branding 1</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={br1} title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
//               <div className="portfolio-content h-100">
//                 <img src={b1} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Books 1</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={b1} title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//               <div className="portfolio-content h-100">
//                 <img src={a2} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>App 2</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={a2} title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//               <div className="portfolio-content h-100">
//                 <img src={p2} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Product 2</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={p2} title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//               <div className="portfolio-content h-100">
//                 <img src={br2} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Branding 2</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={br2} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
//               <div className="portfolio-content h-100">
//                 <img src={b2} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Books 2</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={b2} title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//               <div className="portfolio-content h-100">
//                 <img src={a3} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>App 3</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={a3} title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//               <div className="portfolio-content h-100">
//                 <img src={p3} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Product 3</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={p3} title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//               <div className="portfolio-content h-100">
//                 <img src={br3} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Branding 3</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={br3} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
//               <div className="portfolio-content h-100">
//                 <img src={b3} className="img-fluid" alt=""/>
//                 <div className="portfolio-info">
//                   <h4>Books 3</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a href={b3} title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                   <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- End Portfolio Item --> */}

//           </div>
//           {/* <!-- End Portfolio Container --> */}

//         </div>

//       </div>

//     </section>
//     {/* <!-- /Portfolio Section --> */}

//     {/* <!-- Team Section --> */}
//     <section id="team" className="team section light-background">

//       {/* <!-- Section Title --> */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Team</h2>
//         <p>CHECK OUR TEAM</p>
//       </div>
//       {/* <!-- End Section Title --> */}

//       <div className="container">

//         <div className="row gy-5">

//           <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
//             <div className="member">
//               <div className="pic"><img src={t1} className="img-fluid" alt=""/></div>
//               <div className="member-info">
//                 <h4>Walter White</h4>
//                 <span>Chief Executive Officer</span>
//                 <div className="social">
//                   <a href=""><i className="bi bi-twitter-x"></i></a>
//                   <a href=""><i className="bi bi-facebook"></i></a>
//                   <a href=""><i className="bi bi-instagram"></i></a>
//                   <a href=""><i className="bi bi-linkedin"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- End Team Member --> */}

//           <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
//             <div className="member">
//               <div className="pic"><img src={t2} className="img-fluid" alt=""/></div>
//               <div className="member-info">
//                 <h4>Sarah Jhonson</h4>
//                 <span>Product Manager</span>
//                 <div className="social">
//                   <a href=""><i className="bi bi-twitter-x"></i></a>
//                   <a href=""><i className="bi bi-facebook"></i></a>
//                   <a href=""><i className="bi bi-instagram"></i></a>
//                   <a href=""><i className="bi bi-linkedin"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- End Team Member --> */}

//           <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
//             <div className="member">
//               <div className="pic"><img src={t3} className="img-fluid" alt=""/></div>
//               <div className="member-info">
//                 <h4>William Anderson</h4>
//                 <span>CTO</span>
//                 <div className="social">
//                   <a href=""><i className="bi bi-twitter-x"></i></a>
//                   <a href=""><i className="bi bi-facebook"></i></a>
//                   <a href=""><i className="bi bi-instagram"></i></a>
//                   <a href=""><i className="bi bi-linkedin"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- End Team Member --> */}

//         </div>

//       </div>

//     </section>
//     {/* <!-- /Team Section --> */}

//     </>
//     )
// }
// export default Portfolio