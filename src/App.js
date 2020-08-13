import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

import img_login_progress from './images/login-process.png';
import img_dashboard from './images/dashbaord.png';
import img_inbox from './images/inbox.png';
import img_login from './images/login.png';
import img_homepage from './images/home-page.png';
import img_inbox_new from './images/inbox-new.png';
import img_process1 from './images/process1.png';
import img_process2 from './images/process2.png';
import img_process3 from './images/process3.png';
import img_process4 from './images/process4.png';

import icon_homepage from './images/icon_homepage.png';
import icon_arrow_down from './images/icon_arrow_down.png';

import video_login from './images/video_login.mp4';


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header" style={{opacity: 0}}>
                    <div className="header-element">登入步驟</div>
                    <div className="header-element">首頁</div>
                    <div className="header-element">收件匣</div>
                    <div className="header-element">處理</div>
                </header>
                <header className="App-header" style={{position: 'fixed'}}>
                    <Link to="login-progress" className="header-element" smooth={true} duration={500}>
                        登入步驟
                    </Link>
                    <Link to="dashboard" className="header-element" smooth={true} duration={500}>
                        首頁
                    </Link>
                    <Link to="inbox" className="header-element" smooth={true} duration={500}>
                        收件匣
                    </Link>
                    <Link to="process" className="header-element" smooth={true} duration={500}>
                        處理
                    </Link>
                </header>

                <body className="App-body">

                <Element className="Chapter" name="login-progress" style={{flexDirection: 'column'}}>

                    <video autoPlay loop muted style={{width: '-webkit-fill-available', alignSelf: 'flex-start'}}>
                        <source src={video_login} type="video/mp4"/>
                    </video>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>
                        <div
                            className="Chapter-Single-image"
                            style={{
                                background: `url(${img_login})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                        <div className="Chapter-body">

                            <div className="Chapter-body-title-group">
                                <h1>登入步驟</h1>
                                {/*<h4>＊必要步驟</h4>*/}
                            </div>

                            <ul className="first-layer">
                                <li>
                                    使用者在瀏覽器輸入貴公司專屬的好聘網址，按下『確認』鍵，進入登入畫面，如圖一。若為首次登入，請參考開通郵件所提供的網址。
                                </li>

                                <li>
                                    輸入用戶名稱與用戶密碼。若為首次登入，請參考開通郵件所提供的用戶名稱與用戶密碼。
                                </li>

                                <li>
                                    保持登錄狀態：使用者『勾選』保持登錄狀態，當再度嘗試登入，不需輸入用戶名稱與密碼，即可自動登入。
                                </li>

                                <li>
                                    按下『登入』鍵，系統即進入首頁畫面。。如圖二。
                                </li>

                                <li>
                                    忘記密碼。請參照忘記密碼。
                                </li>

                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項<span style={{color: 'red'}}>符</span>系統會自動偵測代辦事項是否完成<span style={{color: 'red'}}>號</span>完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消*/}
                                {/*</li>*/}

                            </ul>
                        </div>

                    </div>
                </Element>

                <Element className="Chapter" name="dashboard">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_homepage})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>首頁</h1>
                        </div>

                        {/* 單一的標列無 li 樣式 */}
                        <p className="first-layer-no-list-style">首頁如圖一，由三大部分組成。</p>

                        <ul className="first-layer">
                            <li>
                                標題列。
                                <ul className="second-layer">
                                    <li>
                                        <span
                                            style={{
                                                background: `url(${icon_homepage}) 0% 0% / contain no-repeat`,
                                                width: '3em',
                                                height: '2em',
                                                display: 'inline-flex'
                                            }}
                                        />
                                        好聘識別標誌
                                    </li>
                                    <li>好聘：軟體名稱</li>
                                    <li>首頁：目前作業名稱</li>
                                    <li>歡迎：歡迎使用者</li>
                                    <li>首頁：進入好聘首頁。</li>
                                    <li><span className="Text-underline">收件匣</span>：收藏使用者的所有待辦事項。</li>
                                    <li><span className="Text-underline">儀表板</span>：提供招聘績效、招聘全貌、招聘資源分析。</li>
                                    <li><span className="Text-underline">視窗切換</span>：收藏使用者登入好聘後開啟而尚未關閉的所有視窗，視窗之間可進行切換。
                                    </li>
                                    <li><span className="Text-underline">語言</span>：選擇語系。目前提供繁中、簡中、英文。</li>
                                    <li><span className="Text-underline">字體</span>：調整字體大小。</li>
                                    <li><span className="Text-underline">用戶</span>：提供使用者資訊，可設定代理人、變更密碼以及登出。</li>
                                    <li><span className="Text-underline">通知</span>：收藏好聘發給使用者的電子郵件內文。</li>
                                    <li><span className="Text-underline">發射台</span>：好聘的ＡＰＰ都收藏在發射台。</li>
                                </ul>
                            </li>

                            <li>
                                代辦事項。
                                <p className="second-layer-no-list-style">以圖型分類別呈現使用者在初選、決選、錄取三階段的代辦事項數量。</p>
                            </li>

                            <li>
                                甄選行程。
                                <p className="second-layer-no-list-style">顯示使用者的所有甄試行程、今日測驗行程、今日面談行程。</p>
                            </li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="inbox">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_inbox_new})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>收件匣</h1>
                        </div>

                        <p className="first-layer-no-list-style">收件匣首頁收藏使用者所有的待辦事項，如
                            <span className="Text-red">圖四。</span>工作完成後，代辦事項即自動消失。</p>

                        <ul className="first-layer">
                            <li>
                                按下『所有代辦事項』右方
                                <span
                                    style={{
                                        background: `url(${icon_arrow_down}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                圖示 可按照『代辦事項分類』進行篩選。代辦事項可分為14類
                                <ul className="second-layer" style={{listStyle: 'decimal'}}>
                                    <li>新進履歷</li>
                                    <li>初選審核</li>
                                    <li>初選安排甄試</li>
                                    <li>初選面談評核</li>
                                    <li>初選測驗評核</li>
                                    <li>新派履歷</li>
                                    <li>決選審核</li>
                                    <li>決選安排甄試</li>
                                    <li>決選面談評核</li>
                                    <li>決選測驗評核</li>
                                    <li>資歷查核</li>
                                    <li>備取決策</li>
                                    <li>錄取通知</li>
                                    <li>報到</li>
                                </ul>
                            </li>

                            <li><span className="Text-underline">處理</span>：使用者點選某一筆資料，按下處理圖示，系統會自動進入處理畫面。</li>
                            <li>重新整理：同步後台資料。</li>
                            <li>回前畫面：系統回到前一個畫面。</li>
                            <li>檔案總管：系統回到該作業的首頁。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="process">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_process1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_process2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_process3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_process4})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>處理</h1>
                        </div>

                        <p className="first-layer-no-list-style">範例：處理『新進履歷』代辦事項。</p>
                        <p className="first-layer-no-list-style">進入路徑：首頁->收件匣</p>

                        <ul className="first-layer">
                            <li>
                                按下『所有代辦事項』右方
                                <span
                                    style={{
                                        background: `url(${icon_arrow_down}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                的三角形圖示。如圖一
                            </li>
                            <li>選擇『新進履歷』。畫面會篩選出所有『新進履歷』的代辦事項。如圖二。</li>
                            <li>選擇特定代辦事項，按下『處理』圖示, 如畫面三。</li>
                            <li>開始讀取新進履歷。如畫面四。</li>
                        </ul>
                    </div>
                </Element>

                </body>
            </div>
        );
    }
}

export default App;
