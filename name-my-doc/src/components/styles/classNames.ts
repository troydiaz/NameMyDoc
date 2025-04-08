// adapted from https://pagedone.io/docs/hover-effect 
export const hoverButtonClass = "absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"

// adapted from https://pagedone.io/docs/hover-effect
    // Button container styles
export const hoverButtonWrapper = "relative border border-black group py-1.5 px-2.5 text-black cursor-pointer";

    // The animated underline span
export const hoverButtonUnderline = "absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all cursor-pointer";

// adapted from https://flowbite.com/docs/components/buttons/
export const gradientButtonClass = `
  text-black 
  bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 
  hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 
  focus:ring-4 focus:outline-none focus:ring-gray-400 
  dark:focus:ring-gray-600 
  font-medium rounded-lg 
  text-sm px-5 py-2.5 
  text-center me-2 mb-2 
  transition-all duration-300
`;
