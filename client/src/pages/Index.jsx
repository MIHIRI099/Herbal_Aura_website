const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#wellness">WELLNESS</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#hair-products">HAIR PRODUCTS</a></li>
          <li><a href="#skin-products">SKIN PRODUCTS</a></li>
          <li><a href="#prescription">PRESCRIPTION</a></li>
        </ul>
      </nav>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <NavigationBar />
      <img src="/images/your-image.jpg" alt="Image Description" />
    </div>
  );
};

export default Index;
