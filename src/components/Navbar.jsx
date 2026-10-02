import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/site'
import OrderMenu from './OrderMenu'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || orderOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, orderOpen])


  // ========================================
  // NAVIGATION CLICK
  // ========================================

  const handleNavClick = (event, item) => {
    // If Home is clicked while already on Home,
    // scroll back to the top of the page.
    if (item.to === '/' && pathname === '/') {
      event.preventDefault()

      setMenuOpen(false)

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }


  return (
    <>
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur-xl">

        {/* ========================================
            MAIN NAVBAR
        ======================================== */}

        <div className="page-shell grid h-[88px] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">

          {/* Logo */}

          <NavLink
            to="/"
            onClick={(event) => {
              if (pathname === '/') {
                event.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
            className="flex shrink-0 items-center gap-3 justify-self-start"
            aria-label="Green Cactus home"
          >
            <img
              src="/images/green-cactus-logo.png"
              alt="Green Cactus"
              className="h-16 w-16 rounded-full object-cover mix-blend-multiply"
            />

            <span className="hidden leading-none sm:block">

              <strong className="block font-display text-[1.4rem] tracking-wide text-forest">
                GREEN CACTUS
              </strong>

              <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-rust">
                Fresh Mexican Grill
              </span>

            </span>
          </NavLink>


          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <nav
            className="hidden items-center justify-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (

              <NavLink
                key={item.to}
                to={item.to}
                onClick={(event) =>
                  handleNavClick(event, item)
                }
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? 'nav-link-active'
                      : ''
                  }`
                }
              >
                {item.label}
              </NavLink>

            ))}
          </nav>


          {/* ========================================
              RIGHT SIDE
          ======================================== */}

          <div className="flex items-center gap-2 justify-self-end">

            {/* Desktop / tablet Order Online */}

            <button
              type="button"
              className="button-primary hidden items-center justify-center gap-2.5 sm:inline-flex"
              onClick={() => setOrderOpen(true)}
            >
              <ShoppingBag
                size={17}
                strokeWidth={2}
                className="shrink-0"
              />

              <span className="leading-none">
                Order Online
              </span>
            </button>


            {/* Mobile menu toggle */}

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 text-forest lg:hidden"
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

        </div>


        {/* ========================================
            MOBILE NAVIGATION
        ======================================== */}

        {menuOpen && (

          <nav
            className="border-t border-forest/10 bg-cream px-5 pb-7 pt-4 lg:hidden"
            aria-label="Mobile navigation"
          >

            <div className="mx-auto grid max-w-7xl gap-1">

              {navigation.map((item) => (

                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={(event) =>
                    handleNavClick(event, item)
                  }
                  className="rounded-xl px-4 py-3 text-lg font-semibold text-forest hover:bg-sage/10"
                >
                  {item.label}
                </NavLink>

              ))}


              {/* MOBILE ORDER BUTTON */}

              <button
                type="button"
                className="
                  mt-3
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-rust
                  px-6
                  py-4
                  text-cream
                  shadow-md
                  transition
                  hover:bg-rust/90
                  sm:hidden
                "
                onClick={() => {
                  setMenuOpen(false)
                  setOrderOpen(true)
                }}
              >

                <span className="inline-flex items-center justify-center gap-2.5">

                  <ShoppingBag
                    size={18}
                    strokeWidth={2}
                    className="shrink-0"
                  />

                  <span className="font-bold uppercase leading-none tracking-[0.12em]">
                    Order Online
                  </span>

                </span>

              </button>

            </div>

          </nav>

        )}

      </header>


      <OrderMenu
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
      />
    </>
  )
}