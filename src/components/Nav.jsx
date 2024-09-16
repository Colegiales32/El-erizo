import React, { useState, useEffect,useContext,useRef } from 'react';
import Burguer from './Burguer';
import ErizoContext from '../context/erizoContext';


const Nav = () => {
    const {clicked,setClicked} = useContext(ErizoContext)
    const [activeLink, setActiveLink] = useState('inicio');
    const menuRef = useRef(null);



    const handleScroll = (e, linkName) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const targetId = e.currentTarget.getAttribute('href'); // Obtiene el ID de la sección
        const targetElement = document.querySelector(targetId); // Selecciona la sección destino

        if (targetElement) {
            const offsetTop = targetElement.offsetTop; // Obtiene la posición de la sección
            window.scrollTo({
                top: offsetTop - 83, // Ajusta la posición del scroll restando la altura del nav
                behavior: 'smooth', // Añade un desplazamiento suave
            });
            setActiveLink(linkName); // Actualiza el enlace activo
            setTimeout(() => {
                setClicked(false);
            }, 1000);
        }
    };

    const handleClick = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        const handleScrollSpy = () => {
          const sections = document.querySelectorAll('section');
          let currentSection = 'Inicio';
      
          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Ajuste para compensar la altura del `nav`
            if (window.scrollY >= sectionTop) {
              currentSection = section.getAttribute('id');
            }
          });
      
          setActiveLink(currentSection);
        };
      
        window.addEventListener('scroll', handleScrollSpy);
      }, []);

      useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setClicked(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
      

    return (
        <nav ref={menuRef} className="fixed top-0 opacity-ani w-full z-50 h-20 sombra flex items-center bg-rosa-claro">
            <div className="lg:mx-16 mx-5 w-full flex flex-row justify-between selection:bg-celeste">
                <div>
                    <img src="/logofondo.jpg" alt="logo taller" className="w-12" />
                </div>
                <div className="lg:flex hidden flex-row items-center gap-7 text-base">
                <a
                        href="#inicio"
                        onClick={(e) => handleScroll(e, 'inicio')}
                        className={activeLink === 'inicio' ? 'link-active' : ''}
                    >
                        Inicio
                    </a>
                    <a
                        href="#cursos"
                        onClick={(e) => handleScroll(e, 'cursos')}
                        className={activeLink === 'cursos' ? 'link-active' : ''}
                    >
                        Cursos
                    </a>
                    <a
                        href="#nosotros"
                        onClick={(e) => handleScroll(e, 'nosotros')}
                        className={activeLink === 'nosotros' ? 'link-active' : ''}
                    >
                        Nosotros
                    </a>
                    <a
                        href="#opciones"
                        onClick={(e) => handleScroll(e, 'opciones')}
                        className={activeLink === 'opciones' ? 'link-active' : ''}
                    >
                        Otras opciones
                    </a>
                    <a
                        href="#contacto"
                        onClick={(e) => handleScroll(e, 'contacto')}
                        className={activeLink === 'contacto' ? 'link-active' : ''}
                    >
                        Contacto
                    </a>
                </div>
                <div className="lg:flex flex-row  hidden gap-8 items-center">
                    <a href="https://www.instagram.com/elerizoespaciocreativo/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 34" fill="none">
                        <path d="M1.5 17C1.5 9.45811 1.5 5.68547 3.84274 3.34274C6.18547 1 9.95642 1 17.5 1C25.0419 1 28.8145 1 31.1573 3.34274C33.5 5.68547 33.5 9.45642 33.5 17C33.5 24.5419 33.5 28.3145 31.1573 30.6573C28.8145 33 25.0436 33 17.5 33C9.95811 33 6.18547 33 3.84274 30.6573C1.5 28.3145 1.5 24.5436 1.5 17Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26.7765 7.7373H26.7596M25.0788 17.0005C25.0788 19.0105 24.2803 20.9383 22.859 22.3596C21.4376 23.7809 19.5099 24.5794 17.4998 24.5794C15.4898 24.5794 13.562 23.7809 12.1407 22.3596C10.7194 20.9383 9.9209 19.0105 9.9209 17.0005C9.9209 14.9904 10.7194 13.0627 12.1407 11.6413C13.562 10.22 15.4898 9.42152 17.4998 9.42152C19.5099 9.42152 21.4376 10.22 22.859 11.6413C24.2803 13.0627 25.0788 14.9904 25.0788 17.0005Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </a>
                    <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 33 32" fill="none">
<g clipPath="url(#clip0_247_766)">
<path d="M25.7513 19.2686L20.6309 16.7084C20.5301 16.6582 20.4179 16.6355 20.3055 16.6425C20.1931 16.6495 20.0846 16.6861 19.9908 16.7485L17.3282 18.5246C15.8646 17.8227 14.6843 16.6424 13.9824 15.1787L15.7585 12.5161C15.8209 12.4224 15.8574 12.3139 15.8645 12.2015C15.8715 12.0891 15.8487 11.9769 15.7985 11.8761L13.2383 6.75571C13.1852 6.64883 13.1033 6.55892 13.0018 6.49615C12.9003 6.43338 12.7832 6.40024 12.6639 6.40048C11.1361 6.40048 9.67093 7.00738 8.59064 8.08767C7.51035 9.16796 6.90345 10.6331 6.90345 12.1609C6.90726 15.7245 8.32459 19.1411 10.8444 21.6609C13.3643 24.1808 16.7809 25.5981 20.3445 25.6019C21.8722 25.6019 23.3374 24.995 24.4177 23.9147C25.498 22.8344 26.1049 21.3692 26.1049 19.8415C26.105 19.7226 26.0719 19.606 26.0095 19.5048C25.947 19.4036 25.8576 19.3219 25.7513 19.2686ZM20.3445 24.3218C17.1202 24.3184 14.029 23.0361 11.7491 20.7562C9.46926 18.4763 8.18694 15.3851 8.18355 12.1609C8.18336 11.0396 8.60367 9.95889 9.36148 9.13235C10.1193 8.30581 11.1595 7.79349 12.2767 7.69658L14.4848 12.1145L12.7247 14.7611C12.666 14.8484 12.6298 14.9489 12.6192 15.0535C12.6086 15.1582 12.6239 15.2638 12.6639 15.3611C13.5143 17.3828 15.1225 18.9911 17.1442 19.8415C17.2416 19.882 17.3475 19.8977 17.4525 19.8874C17.5574 19.8771 17.6582 19.841 17.7459 19.7823L20.3925 18.0221L24.8104 20.2303C24.7131 21.3475 24.2004 22.3875 23.3735 23.145C22.5467 23.9025 21.4658 24.3224 20.3445 24.3218ZM16.5042 2.76446e-07C13.7185 -0.000517465 10.981 0.726211 8.56232 2.1083C6.14369 3.49039 4.12777 5.47996 2.71397 7.88019C1.30017 10.2804 0.537485 13.0082 0.501347 15.7936C0.465209 18.5791 1.15687 21.3257 2.50792 23.7618L0.603782 29.4726C0.490955 29.8109 0.474581 30.174 0.556496 30.5211C0.63841 30.8682 0.815376 31.1856 1.06756 31.4378C1.31974 31.69 1.63717 31.867 1.98428 31.9489C2.33138 32.0308 2.69444 32.0144 3.03276 31.9016L8.74359 29.9974C10.8798 31.1811 13.2587 31.8601 15.6979 31.9823C18.1371 32.1046 20.5719 31.6669 22.8158 30.7027C25.0597 29.7385 27.0531 28.2735 28.6433 26.4199C30.2335 24.5663 31.3783 22.3733 31.99 20.0089C32.6017 17.6445 32.664 15.1714 32.1723 12.7792C31.6805 10.3869 30.6476 8.13903 29.1528 6.20764C27.6581 4.27626 25.741 2.71268 23.5485 1.63668C21.3561 0.560676 18.9464 0.000819316 16.5042 2.76446e-07ZM16.5042 30.7223C13.9159 30.7231 11.3732 30.0415 9.13242 28.7461C9.03504 28.6901 8.92476 28.6603 8.8124 28.6597C8.74329 28.6599 8.67466 28.6712 8.60918 28.6933L2.62793 30.6871C2.51516 30.7247 2.39414 30.7302 2.27844 30.7029C2.16274 30.6756 2.05693 30.6166 1.97286 30.5325C1.8888 30.4484 1.82982 30.3426 1.80251 30.2269C1.77521 30.1112 1.78066 29.9902 1.81827 29.8774L3.81202 23.8962C3.84078 23.8102 3.85094 23.7191 3.84184 23.6289C3.83274 23.5387 3.80457 23.4514 3.75922 23.3729C2.13622 20.5675 1.48441 17.3049 1.90492 14.0913C2.32542 10.8776 3.79472 7.89251 6.08489 5.59913C8.37505 3.30574 11.3581 1.83224 14.5711 1.40722C17.7842 0.982202 21.0477 1.62942 23.8554 3.24847C26.6631 4.86752 28.858 7.3679 30.0996 10.3617C31.3413 13.3555 31.5602 16.6754 30.7224 19.8063C29.8847 22.9372 28.0371 25.7042 25.4663 27.6779C22.8955 29.6516 19.7452 30.7217 16.5042 30.7223Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_247_766">
<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
                    </svg>
                    </a>
                </div>

                <div className="z-20 lg:hidden flex flex-col justify-center align-center">
                    <Burguer clicked={clicked} handleClick={handleClick}/> 
                </div>
                <div className={`links bg-right-top bg-cover max-w-[20rem] bg-no-repeat justify-between flex flex-col gap-9 items-center lg:hidden ${clicked ? 'active' : ''}`}>
                    <div className='h-1/6'></div>
                    <div className="h-4/6 items-center justify-center flex flex-col gap-4">
                    <a
                        href="#inicio"
                        onClick={(e) => handleScroll(e, 'inicio')}
                        className={activeLink === 'inicio' ? 'link-active' : ''}
                    >
                        Inicio
                    </a>
                    <a
                        href="#cursos"
                        onClick={(e) => handleScroll(e, 'cursos')}
                        className={activeLink === 'cursos' ? 'link-active' : ''}
                    >
                        Cursos
                    </a>
                    <a
                        href="#nosotros"
                        onClick={(e) => handleScroll(e, 'nosotros')}
                        className={activeLink === 'nosotros' ? 'link-active' : ''}
                    >
                        Nosotros
                    </a>
                    
                    <a
                        href="#opciones"
                        onClick={(e) => handleScroll(e, 'opciones')}
                        className={activeLink === 'opciones' ? 'link-active' : ''}
                    >
                        Otras opciones
                    </a>
                    <a
                        href="#contacto"
                        onClick={(e) => handleScroll(e, 'contacto')}
                        className={activeLink === 'contacto' ? 'link-active' : ''}
                    >
                        Contacto
                    </a>
                    </div>
                    
                <div className="h-1/6 pb-22 flex items-start justify-start flex-row gap-8">
                      <a href='https://www.instagram.com/elerizoespaciocreativo/'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                        <path d="M1.5 17C1.5 9.45811 1.5 5.68547 3.84274 3.34274C6.18547 1 9.95642 1 17.5 1C25.0419 1 28.8145 1 31.1573 3.34274C33.5 5.68547 33.5 9.45642 33.5 17C33.5 24.5419 33.5 28.3145 31.1573 30.6573C28.8145 33 25.0436 33 17.5 33C9.95811 33 6.18547 33 3.84274 30.6573C1.5 28.3145 1.5 24.5436 1.5 17Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26.7765 7.7373H26.7596M25.0788 17.0005C25.0788 19.0105 24.2803 20.9383 22.859 22.3596C21.4376 23.7809 19.5099 24.5794 17.4998 24.5794C15.4898 24.5794 13.562 23.7809 12.1407 22.3596C10.7194 20.9383 9.9209 19.0105 9.9209 17.0005C9.9209 14.9904 10.7194 13.0627 12.1407 11.6413C13.562 10.22 15.4898 9.42152 17.4998 9.42152C19.5099 9.42152 21.4376 10.22 22.859 11.6413C24.2803 13.0627 25.0788 14.9904 25.0788 17.0005Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </a> 
                    <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
<g clipPath="url(#clip0_247_766)">
<path d="M25.7513 19.2686L20.6309 16.7084C20.5301 16.6582 20.4179 16.6355 20.3055 16.6425C20.1931 16.6495 20.0846 16.6861 19.9908 16.7485L17.3282 18.5246C15.8646 17.8227 14.6843 16.6424 13.9824 15.1787L15.7585 12.5161C15.8209 12.4224 15.8574 12.3139 15.8645 12.2015C15.8715 12.0891 15.8487 11.9769 15.7985 11.8761L13.2383 6.75571C13.1852 6.64883 13.1033 6.55892 13.0018 6.49615C12.9003 6.43338 12.7832 6.40024 12.6639 6.40048C11.1361 6.40048 9.67093 7.00738 8.59064 8.08767C7.51035 9.16796 6.90345 10.6331 6.90345 12.1609C6.90726 15.7245 8.32459 19.1411 10.8444 21.6609C13.3643 24.1808 16.7809 25.5981 20.3445 25.6019C21.8722 25.6019 23.3374 24.995 24.4177 23.9147C25.498 22.8344 26.1049 21.3692 26.1049 19.8415C26.105 19.7226 26.0719 19.606 26.0095 19.5048C25.947 19.4036 25.8576 19.3219 25.7513 19.2686ZM20.3445 24.3218C17.1202 24.3184 14.029 23.0361 11.7491 20.7562C9.46926 18.4763 8.18694 15.3851 8.18355 12.1609C8.18336 11.0396 8.60367 9.95889 9.36148 9.13235C10.1193 8.30581 11.1595 7.79349 12.2767 7.69658L14.4848 12.1145L12.7247 14.7611C12.666 14.8484 12.6298 14.9489 12.6192 15.0535C12.6086 15.1582 12.6239 15.2638 12.6639 15.3611C13.5143 17.3828 15.1225 18.9911 17.1442 19.8415C17.2416 19.882 17.3475 19.8977 17.4525 19.8874C17.5574 19.8771 17.6582 19.841 17.7459 19.7823L20.3925 18.0221L24.8104 20.2303C24.7131 21.3475 24.2004 22.3875 23.3735 23.145C22.5467 23.9025 21.4658 24.3224 20.3445 24.3218ZM16.5042 2.76446e-07C13.7185 -0.000517465 10.981 0.726211 8.56232 2.1083C6.14369 3.49039 4.12777 5.47996 2.71397 7.88019C1.30017 10.2804 0.537485 13.0082 0.501347 15.7936C0.465209 18.5791 1.15687 21.3257 2.50792 23.7618L0.603782 29.4726C0.490955 29.8109 0.474581 30.174 0.556496 30.5211C0.63841 30.8682 0.815376 31.1856 1.06756 31.4378C1.31974 31.69 1.63717 31.867 1.98428 31.9489C2.33138 32.0308 2.69444 32.0144 3.03276 31.9016L8.74359 29.9974C10.8798 31.1811 13.2587 31.8601 15.6979 31.9823C18.1371 32.1046 20.5719 31.6669 22.8158 30.7027C25.0597 29.7385 27.0531 28.2735 28.6433 26.4199C30.2335 24.5663 31.3783 22.3733 31.99 20.0089C32.6017 17.6445 32.664 15.1714 32.1723 12.7792C31.6805 10.3869 30.6476 8.13903 29.1528 6.20764C27.6581 4.27626 25.741 2.71268 23.5485 1.63668C21.3561 0.560676 18.9464 0.000819316 16.5042 2.76446e-07ZM16.5042 30.7223C13.9159 30.7231 11.3732 30.0415 9.13242 28.7461C9.03504 28.6901 8.92476 28.6603 8.8124 28.6597C8.74329 28.6599 8.67466 28.6712 8.60918 28.6933L2.62793 30.6871C2.51516 30.7247 2.39414 30.7302 2.27844 30.7029C2.16274 30.6756 2.05693 30.6166 1.97286 30.5325C1.8888 30.4484 1.82982 30.3426 1.80251 30.2269C1.77521 30.1112 1.78066 29.9902 1.81827 29.8774L3.81202 23.8962C3.84078 23.8102 3.85094 23.7191 3.84184 23.6289C3.83274 23.5387 3.80457 23.4514 3.75922 23.3729C2.13622 20.5675 1.48441 17.3049 1.90492 14.0913C2.32542 10.8776 3.79472 7.89251 6.08489 5.59913C8.37505 3.30574 11.3581 1.83224 14.5711 1.40722C17.7842 0.982202 21.0477 1.62942 23.8554 3.24847C26.6631 4.86752 28.858 7.3679 30.0996 10.3617C31.3413 13.3555 31.5602 16.6754 30.7224 19.8063C29.8847 22.9372 28.0371 25.7042 25.4663 27.6779C22.8955 29.6516 19.7452 30.7217 16.5042 30.7223Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_247_766">
<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
</a>

                
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
