const ProductList = () => {
  return (
    <div className="animate-slide-up flex flex-col min-h-[80vh] gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="h-16 card w-full" />
        <div className="h-16 card w-full" />
        <div className="h-16 card w-full" />
        <div className="h-16 card w-full" />
      </div>

      <div className="flex-grow w-full card" />
    </div>
  );
};

export default ProductList;
