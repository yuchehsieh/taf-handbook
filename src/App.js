import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

import img_login_progress from './images/login-process.png';
import img_dashboard from './images/dashbaord.png';
import img_inbox from './images/inbox.png';

import login from './images/login.png';
import video_login from './images/video_login.mp4';


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header" style={{opacity: 0}}>
                    <div className="header-element">登入步驟</div>
                    <div className="header-element">首頁</div>
                    <div className="header-element">收件匣</div>
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
                </header>

                <body className="App-body">

                <Element className="Chapter" name="login-progress" style={{flexDirection: 'column'}}>

                    <video autoPlay loop muted style={{width: '-webkit-fill-available', alignSelf: 'flex-start'}}>
                        <source src={video_login} type="video/mp4"/>
                    </video>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                    <div
                        className="Chapter-image"
                        style={{
                            background: `url(${login})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>登入步驟</h1>
                            <h4>＊必要步驟</h4>
                        </div>

                        <ul className="first-layer">
                            <li>
                                ＊使用者在瀏覽器輸入貴公司專屬的好聘網址，即可前往登入畫面，<br/><span className="Text-red">如圖一</span>。建議瀏覽器：Chrome、Firefox、Edge、Safari。<br/>若為
                                <span className="Text-bold">首次登入，請參考</span>開通郵件所提供的網址。
                            </li>

                            <li>
                                ＊輸入用戶名稱。若為<span className="Text-bold">首次登入，請參考</span>開通郵件所提供的用戶名稱。
                            </li>

                            <li>
                                ＊輸入用戶密碼。若為<span className="Text-bold">首次登入，請參考</span>開通郵件所提供的用戶密碼。
                            </li>

                            <li>
                                保持登錄狀態：使用者『勾選』保持登錄狀態，當再度嘗試登入，不需輸入用戶名稱與密碼，即可自動登入。
                            </li>

                            <li>
                                ＊按下『登入』鍵，系統即進入首頁畫面。<span className="Text-red">如圖二</span>。
                            </li>

                            <li>
                                忘記密碼。請參照<span className="Text-underline">忘記密碼</span>專篇。
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
                    <div className="Chapter-image"
                         style={{
                             background: `url(${img_dashboard})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>首頁 如圖三</h1>
                        </div>

                        <ul className="first-layer">
                            <li>
                                標題列。
                                <ul className="second-layer">
                                    <li>好聘識別標誌</li>
                                    <li>軟體名稱</li>
                                    <li>目前頁面名稱</li>
                                    <li>使用者姓名</li>
                                    <li>首頁：回到首頁</li>
                                    <li><span className="Text-underline">收件匣</span>：收藏試用者的待辦事項。圖七</li>
                                    <li><span className="Text-underline">儀表板</span>：提供招聘ＫＰＩ、招聘鳥瞰、招聘漏斗、徵才管道分析。圖八</li>
                                    <li><span className="Text-underline">視窗切換</span>：顯示使用者登入好聘後所有開啟的視窗，可進行切換。圖九</li>
                                    <li><span className="Text-underline">語言</span>：選擇語系。目前提供繁中、簡中、英文。如圖十</li>
                                    <li><span className="Text-underline">字體</span>：調整字體大小。如圖十一</li>
                                    <li><span className="Text-underline">用戶</span>：使用者資訊、設定代理人、變更密碼如圖十二。</li>
                                    <li><span className="Text-underline">通知</span>：通知：收藏好聘發給使用者的電子郵件。如圖十三。</li>
                                    <li><span className="Text-underline">發射台</span>：所有的ＡＰＰ收攏於發射台。如圖十四。</li>
                                </ul>
                            </li>

                            <li>
                                ＊輸入用戶名稱。若為<span className="Text-bold">首次登入，請參考</span>開通郵件所提供的用戶名稱。
                            </li>

                            <li>
                                ＊輸入用戶密碼。若為<span className="Text-bold">首次登入，請參考</span>開通郵件所提供的用戶密碼。
                            </li>

                            <li>
                                保持登錄狀態：使用者『勾選』保持登錄狀態，當再度嘗試登入，不需輸入用戶名稱與密碼，即可自動登入。
                            </li>

                            <li>
                                ＊按下『登入』鍵，系統即進入首頁畫面。<span className="Text-red">如圖二</span>。
                            </li>

                            <li>
                                忘記密碼。請參照<span className="Text-underline">忘記密碼</span>專篇。
                            </li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="inbox">
                    <div className="Chapter-image"
                         style={{
                             background: `url(${img_inbox})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>收件匣 如圖四</h1>
                        </div>

                        <ul className="first-layer">
                            <li>
                                收藏使用者的目前所有的待辦事項，系統會自動偵測代辦事項是否完成，完成後即自動消失。圖七
                            </li>
                        </ul>
                    </div>
                </Element>

                </body>
            </div>
        );
    }
}

export default App;
