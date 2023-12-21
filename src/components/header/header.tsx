// import "./header.css"

export const Header = () => {
  return (
    <div className='flex items-center p-2 pt-4 mb-5 '>
      <img className='w-[55px]' src='/logo.svg' alt='logo' />
      <span className='text-xl font-thin text-white'>To Do App</span>
    </div>
  );
};
