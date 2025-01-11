const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Cryptocurrencies</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Bitcoin
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
