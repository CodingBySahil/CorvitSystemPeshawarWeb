

function NavbarButtons({ text,classes }) {
  return (
    <button className={` font-semibold px-5 py-2 rounded-full shadow-md  transition-all duration-300 ${ classes }`} >
      { text }
    </button>
  );
}

export default NavbarButtons;
