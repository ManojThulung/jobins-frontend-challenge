const Brand = () => {
  return (
    <div className="animate-slide-up flex flex-col min-h-[80vh] gap-4">
      <div className="card h-20" />
      <div className="grid grid-cols-3 gap-4 flex-grow">
        <div className="card col-span-2" />
        <div className="card col-span-1" />
      </div>
    </div>
  );
};

export default Brand;
