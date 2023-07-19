// import enpitsu_icon from '../../public/enpitsu_icon'

const Profile = () => {
  return (
    <main>
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Profile</h2>
        <div class="row g-5 py-5 row-cols-1 row-cols-lg-2">
          <div class="col d-flex align-items-start">
            <div class="icon-circle bg-light text-dark flex-shrink-0 me-3">
              <img src="rakko_icon.jpg" alt="rakko_icon" />
            </div>
            <div>
              <h2>猟虎</h2>
              <p>VS燃え尽き症候群編。秋が好き。アイカツ!を見てください。</p>
              <a href="https://twitter.com/ariganeniku" target="_blank" rel="noopener noreferrer">
                <img src="twitter_icon.png" alt="twitter_icon" height="30px" width="30px" />
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-circle bg-light text-dark flex-shrink-0 me-3">
              <img src="enpitsu_icon.jpg" alt="enpitsu_icon" />
            </div>
            <div>
              <h2>宴筆</h2>
              <p>大学卒業したけど未だ求職中．趣味はsteamの実績集めとゲームをウィッシュリストに入れることです．</p>
              <a href="https://twitter.com/enpitsu882" target="_blank" rel="noopener noreferrer">
                <img src="twitter_icon.png" alt="twitter_icon" height="30px" width="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
