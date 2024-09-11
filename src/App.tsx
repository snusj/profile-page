import './App.css';

import profile from './assets/music.png';

function App() {
  return (
    <>
      <div className="wrapper">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={profile} className="profileImage" alt="profile_image" />
          <p style={{ fontSize: '3em' }}>CHOI SUNG JUN</p>
        </div>
        <ul>
          <li>Republic of Korea</li>
          <li>Seoul National University (Undergraduate Student)</li>
          <li>College of Natural Sciences</li>
          <li>Department of Mathematical Sciences</li>
        </ul>
      </div>
    </>
  );
}

export default App;
