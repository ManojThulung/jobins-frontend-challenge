// Generate a dynamic page header using ulr params
export const formatHeaderText = (pathname) => {
  if (pathname === "/") return "Dashboard";

  // Split the input string by non-alphanumeric characters (e.g., '-', '_', etc.)
  const words = pathname.split(/[^a-zA-Z0-9]+/);

  // captalized the first letter and join them with space.
  const formattedText = words
    .map((word, index) => {
      const capitalizedWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

      return capitalizedWord;
    })
    .join(" ");

  return formattedText;
};
