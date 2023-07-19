const Products = () => {
  return (
    <main>
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Products</h2>
        <div class="row g-5 py-5 row-cols-1 row-cols-lg-2">
          <div class="col d-flex align-items-start">
            <div class="img-cover bg-light text-dark flex-shrink-0 me-3">
              <img src="hifu_girls.jpg" alt="rakko_icon" height="300px" />
            </div>
            <div>
              <h2>秘封ガール</h2>
              <p>蓮子とメリーが物理学と神道について教え合う数学ガールオマージュ本</p>
              <p>発売日：2017年10月22日（東方紅楼夢13）</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
