import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

import './index.css'
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";



import {
  FaArrowRight,
  FaWordpress,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTimes,
} from 'react-icons/fa'

import {
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiWoocommerce,
} from 'react-icons/si'

export default function App() {

  const [activeProject, setActiveProject] = useState(null)

useEffect(() => {

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  Fancybox.bind("[data-fancybox]", {

    animated: true,

    dragToClose: true,

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: [
          "zoom",
          "slideshow",
          "fullscreen",
          "close",
        ],
      },
    },

    Thumbs: {
      autoStart: false,
    },

  })

  return () => {
    Fancybox.destroy()
  }

}, [activeProject])

  const projects = [

    {
      title: 'AWS Landing Page',

      desc:
        'Modern AWS landing page with premium responsive layout.',

      longDesc:
    'This project includes premium UI sections, responsive layouts, smooth animations, optimized performance and scalable frontend architecture for enterprise users.',


      tech: 'React • UI/UX',

      gallery: [

        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',

      ],
    },

     {
      title: 'AWS Landing Page',

      desc:
        'Modern AWS landing page with premium responsive layout.',

        longDesc:
    'This project includes premium UI sections, responsive layouts, smooth animations, optimized performance and scalable frontend architecture for enterprise users.',


      tech: 'React • UI/UX',

      gallery: [

        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',

      ],
    },

    {
      title: 'Creative Agency',

      desc:
        'Creative agency website with modern clean sections.',

        longDesc:
    'This project includes premium UI sections, responsive layouts, smooth animations, optimized performance and scalable frontend architecture for enterprise users.',


      tech: 'WordPress • Branding',

      gallery: [

        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',

      ],
    },

    {
      title: 'WooCommerce Store',

      desc:
        'Premium ecommerce experience with optimized UI.',

        longDesc:
    'This project includes premium UI sections, responsive layouts, smooth animations, optimized performance and scalable frontend architecture for enterprise users.',


      tech: 'WooCommerce • Ecommerce',

      gallery: [

        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',

        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',

      ],
    },

  ]

  const skills = [

    {
      icon: <FaWordpress />,
      title: 'WordPress',
    },

    {
      icon: <FaReact />,
      title: 'React JS',
    },

    {
      icon: <SiJavascript />,
      title: 'JavaScript',
    },

    {
      icon: <SiTailwindcss />,
      title: 'Tailwind CSS',
    },

    {
      icon: <SiPhp />,
      title: 'PHP',
    },

    {
      icon: <SiWoocommerce />,
      title: 'WooCommerce',
    },

  ]

  return (

    <div className="main-wrapper">

      {/* NAVBAR */}

      <header className="navbar glass-navbar">

        <div className="container nav-flex">

          <div className="logo">
            DevWithMe.
          </div>

          <nav className="nav-links">

            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

          </nav>

          <button className="nav-btn">
            Hire Me
          </button>

        </div>

      </header>

      {/* HERO */}

      <section className="hero-section" id="home">

        <div className="container hero-layout">

          <div className="hero-left">

            <div className="hero-badge">
              Frontend Developer • WordPress Expert
            </div>

            <h1>

              Premium Websites
              With Modern
              User Experience

            </h1>

            <p>

              I create modern responsive websites with clean layouts,
              premium interfaces and scalable frontend systems.

            </p>

            <div className="hero-btns">

              <button className="primary-btn">

                Explore Work
                <FaArrowRight />

              </button>

              <button className="secondary-btn">
                Contact Me
              </button>

            </div>

          </div>

          <div className="hero-right">

            <div className="hero-image-card">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt=""
              />

            </div>

          </div>

        </div>

      </section>

     {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="container">
          
          <div className="section-title">
            <span>Portfolio</span>
            <h2>Featured Projects</h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="project-swiper"
          >
            {projects.map((project, index) => (
             <SwiperSlide key={index}>
            <div
              className="project-card"
              onClick={() => setActiveProject(project)}
            >

              <div className="project-image-wrap">
                <img src={project.gallery[0]} alt={project.title} />
              </div>

              <div className="project-content">

                <span>{project.tech}</span>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <button className="view-project-btn">
                  View Project
                </button>

              </div>

            </div>
          </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* GALLERY */}

        <section className="gallery-section" id="gallery">

          <div className="container">

            <div className="section-title">

              <span>Showcase</span>

              <h2>Project Gallery</h2>

            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={25}
              slidesPerView={2.5}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 2,
                },

                1200: {
                  slidesPerView: 2.5,
                },
              }}
              className="gallery-swiper"
            >

              {
                projects.flatMap((project) =>
                  project.gallery.map((image, index) => (

                    <SwiperSlide key={index}>

                      <a
                        href={image}
                        data-fancybox="gallery"
                        className="gallery-item"
                      >

                        <img src={image} alt="" />

                      </a>

                    </SwiperSlide>

                  ))
                )
              }

            </Swiper>

          </div>

        </section>

      {/* SKILLS */}

      <section className="skills-section" id="skills">

        <div className="container">

          <div className="section-title">

            <span>Expertise</span>

            <h2>Tools & Skills</h2>

          </div>

          <div className="skills-layout">

            {skills.map((item, index) => (

              <div className="skill-box" key={index}>

                <div className="skill-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-section" id="about">

        <div className="container about-layout">

          <div className="about-image">

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
              alt=""
            />

          </div>

          <div className="about-content">

            <span>About Me</span>

            <h2>

              Creative Frontend
              Developer & Designer

            </h2>

            <p>

              I focus on building visually engaging websites
              with premium user experience and clean frontend systems.

            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="contact-section" id="contact">

        <div className="container">

          <div className="contact-wrapper">

            <div className="contact-left">

              <span>Get In Touch</span>

              <h2>

                Let’s Build
                Something Amazing

              </h2>

            </div>

            <div className="contact-right">

              <div>
                <FaEnvelope />
                yourmail@gmail.com
              </div>

              <div>
                <FaGithub />
                github.com
              </div>

              <div>
                <FaLinkedin />
                linkedin.com
              </div>

            </div>

          </div>

        </div>

      </section>

     {/* MODAL */}

      {
        activeProject && (

          <div
            className="project-modal"
            onClick={() => setActiveProject(null)}
          >

            <div
              className="modal-box"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="close-btn"
                onClick={() => setActiveProject(null)}
              >
                <FaTimes />
              </button>

              {/* IMAGE SLIDER */}

         <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            className="modal-swiper"
          >

            {
              activeProject.gallery.map((img, index) => (

                <SwiperSlide
                  key={`${activeProject.title}-${index}`}
                >

                  <div
                    className="modal-image"
                    onClick={() => {

                      Fancybox.show(
                        activeProject.gallery.map((image) => ({
                          src: image,
                          type: "image",
                        })),
                        {
                          startIndex: index,
                        }
                      )

                    }}
                  >

                    <img src={img} alt="" />

                  </div>

                </SwiperSlide>

              ))
            }


            </Swiper>

              {/* CONTENT */}

              <div className="modal-content">

                <span>{activeProject.tech}</span>

                <h2>{activeProject.title}</h2>

                <p>{activeProject.longDesc}</p>

                <div className="tech-stack">

                  <div>React</div>
                  <div>Swiper</div>
                  <div>GSAP</div>
                  <div>Responsive</div>

                </div>

                <button className="primary-btn">
                  Visit Project
                </button>

              </div>

            </div>

          </div>

        )
      }






      {/* FOOTER */}

      <footer className="footer-section">

        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">

              <h2>DevWithJitendra</h2>

              <p>
                Crafting premium digital experiences with
                modern frontend systems, smooth animations
                and scalable website solutions.
              </p>

            </div>

            <div className="footer-links">

              <div className="footer-column">

                <span>Navigation</span>

                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#gallery">Gallery</a>
                <a href="#about">About</a>

              </div>

              <div className="footer-column">

                <span>Services</span>

                <a href="/">Frontend Development</a>
                <a href="/">WordPress Design</a>
                <a href="/">UI/UX Design</a>
                <a href="/">Landing Pages</a>

              </div>

              <div className="footer-column">

                <span>Connect</span>

                <a href="/">LinkedIn</a>
                <a href="/">GitHub</a>
                <a href="/">Instagram</a>
                <a href="/">Behance</a>

              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © 2026 Jeet. All Rights Reserved.
            </p>

            <div className="footer-socials">

              <a href="/">
                <FaGithub />
              </a>

              <a href="/">
                <FaLinkedin />
              </a>

              <a href="/">
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </footer>
    </div>

  )
}