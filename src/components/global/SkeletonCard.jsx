
export function SkeletonCard() {
  return (
    <div className="product-card skeleton-card">
      <div className="card-image-container skeleton"></div>
      <div className="card-content">
        <div className="skeleton s-line w-80"></div>
        <div className="skeleton s-line w-50"></div>
        <div className="skeleton s-line w-30"></div>
        <div className="skeleton s-line w-70"></div>
      </div>
    </div>
  );
}