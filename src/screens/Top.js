const Top = () => {
  return (
    <main>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={`${process.env.PUBLIC_URL}/ayaya.jpg`} class="d-block mx-lg-auto img-fluid" alt="ayaya" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">アリスの金で焼き肉が食べたい</h1>
            <div>
              <ul>
                <li>2023年7月20日　ホームページ開設</li>
                <li>2022年10月9日　東方紅楼夢18参加</li>
                <li>2017年10月22日　東方紅楼夢13参加</li>
                <li>2017年5月7日　第14回博麗神社例大祭参加</li>
                <li>2016年10月16日　第3回博麗神社秋季例大祭参加</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Top;
