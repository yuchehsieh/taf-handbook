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
import img_switch_window from './images/img_switc_window.png';
import img_font_size from './images/font-size.png';
import img_language from './images/language.png';
import img_user from './images/user.png';
import img_change_password from './images/change-password.png';
import img_deputy from './images/deputy.png';
import img_notification from './images/notification.png';
import img_launch_pad from './images/launch-pad.png';
import img_logout from './images/logout.png';

import icon_homepage from './images/icon_homepage.png';
import icon_arrow_down from './images/icon_arrow_down.png';
import icon_switch_window1 from './images/icon_switch_window1.png';
import icon_switch_window2 from './images/icon_switch_window2.png';
import icon_switch_window3 from './images/icon_switch_window3.png';

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
                    <div className="header-element">視窗切換</div>
                    <div className="header-element">字體</div>
                    <div className="header-element">語言</div>
                    <div className="header-element">用戶</div>
                    <div className="header-element">變更密碼</div>
                    <div className="header-element">我的代理人</div>
                    <div className="header-element">通知</div>
                    <div className="header-element">發射台</div>
                    <div className="header-element">登出</div>
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
                    <Link to="switch-window" className="header-element" smooth={true} duration={500}>
                        視窗切換
                    </Link>
                    <Link to="font-size" className="header-element" smooth={true} duration={500}>
                        字體
                    </Link>
                    <Link to="language" className="header-element" smooth={true} duration={500}>
                        語言
                    </Link>
                    <Link to="user" className="header-element" smooth={true} duration={500}>
                        用戶
                    </Link>
                    <Link to="change-password" className="header-element" smooth={true} duration={500}>
                        變更密碼
                    </Link>
                    <Link to="deputy" className="header-element" smooth={true} duration={500}>
                        我的代理人
                    </Link>
                    <Link to="notification" className="header-element" smooth={true} duration={500}>
                        通知
                    </Link>
                    <Link to="launch-pad" className="header-element" smooth={true} duration={500}>
                        發射台
                    </Link>
                    <Link to="logout" className="header-element" smooth={true} duration={500}>
                        登出
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
                                    按下『登入』鍵，系統即進入首頁畫面。如圖二。
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

                <Element className="Chapter" name="switch-window">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_switch_window})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>視窗切換</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            按下視窗切換圖示，會顯示使用者最近一次登入好聘之後，所有開啟過的視窗名稱，如圖九。點選其他視窗名稱，畫面即會進行切換。
                        </p>

                        <p className="first-layer-no-list-style">
                            <span
                                style={{
                                    background: `url(${icon_switch_window1}) 0% 0% / contain no-repeat`,
                                    width: '2em',
                                    height: '1.5em',
                                    display: 'inline-flex'
                                }}
                            />
                            非目前開啟視窗
                        </p>
                        <p className="first-layer-no-list-style">
                             <span
                                 style={{
                                     background: `url(${icon_switch_window2}) 0% 0% / contain no-repeat`,
                                     width: '2em',
                                     height: '1.5em',
                                     display: 'inline-flex'
                                 }}
                             />
                            目前開啟視窗
                        </p>
                        <p className="first-layer-no-list-style">
                            <span
                                style={{
                                    background: `url(${icon_switch_window3}) 0% 0% / contain no-repeat`,
                                    width: '2em',
                                    height: '1.5em',
                                    display: 'inline-flex'
                                }}
                            />
                            關閉視窗
                        </p>
                    </div>
                </Element>

                <Element className="Chapter" name="font-size">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_font_size})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>字體</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            按下字體圖示，可自行調整字型大小。
                        </p>

                        <p className="first-layer-no-list-style">
                            圖一：10號字型
                        </p>
                        <p className="first-layer-no-list-style">
                            圖二：20號字型
                        </p>
                    </div>
                </Element>

                <Element className="Chapter" name="language">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_language})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>語言</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            按下語文會顯示好聘支援的所有語系。目前支援的語文包括繁體中文、簡體中文與英文。
                        </p>

                        <p className="first-layer-no-list-style">
                            選擇某一種語文，系統的操作介面會自動切換為該語系。
                        </p>
                        <p className="first-layer-no-list-style">
                            英文版如圖一。
                        </p>
                        <p className="first-layer-no-list-style">
                            繁體中文如圖二。
                        </p>
                    </div>
                </Element>

                <Element className="Chapter" name="user">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_user})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>用戶</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            按下用戶鍵，如圖一
                        </p>
                        <ul className="first-layer">
                            <li>
                                用戶名稱出現在第一行。
                            </li>

                            <li>
                                <span className="Text-underline">變更密碼</span>
                            </li>

                            <li>
                                <span className="Text-underline">我的代理人</span>：可自行設定代理人。
                            </li>

                            <li>
                                按下『登入』鍵，系統即進入首頁畫面。如圖二。
                            </li>

                            <li>
                                <span className="Text-underline">登出</span>：退出好聘系統
                            </li>
                        </ul>

                    </div>
                </Element>

                <Element className="Chapter" name="change-password">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_change_password})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>變更密碼</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            進入好聘首頁，按下用戶鍵，出現下拉選單。
                        </p>
                        <ul className="first-layer">
                            <li>
                                按下『變更密碼』鍵。
                            </li>

                            <li>
                                輸入『新密碼』
                            </li>

                            <li>
                                再次輸入『新密碼』
                            </li>

                            <li>
                                按下『確認』鍵
                            </li>
                        </ul>

                    </div>
                </Element>

                <Element className="Chapter" name="deputy">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_deputy})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>我的代理人</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            好聘支援2種方式設定代理人。我的代理人是自行設定代理人。也可由<span className="Text-underline">委由他人設定代理人</span>。
                        </p>
                        <p className="first-layer-no-list-style">
                            進入好聘首頁，按下K用戶鍵，出現下拉選單。
                        </p>
                        <ul className="first-layer">
                            <li>
                                按下『我的代理人』鍵。出現『我的代理人』彈跳視窗。
                            </li>

                            <li>
                                輸入『代理人』
                            </li>

                            <li>
                                在『開始時間』輸入『代理生效時間』
                            </li>

                            <li>
                                在『結束時間』輸入『代理結束時間』
                            </li>

                            <li>
                                勾選，系統發出電郵通知代理人。
                            </li>

                            <li>
                                按下『確認』鍵
                            </li>
                        </ul>

                    </div>
                </Element>

                <Element className="Chapter" name="notification">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_notification})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>我的代理人</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            按下通知鍵，使用者即可查閱好聘系統發出自己的所有郵件。節省使用者切換電子郵件的時間。
                        </p>
                        <ul className="first-layer">
                            <li>
                                清除所有通知。
                            </li>

                            <li>
                                放大郵件，方便查看
                            </li>

                            <li>
                                清除該封通知。
                            </li>
                        </ul>

                    </div>
                </Element>

                <Element className="Chapter" name="launch-pad">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_launch_pad})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>發射台</h1>
                        </div>

                        <p className="first-layer-no-list-style">
                            發射台收藏好聘所有可以執行的APP，按其功能分為我的最愛、職缺管理、選才管理、錄取管理、人才管理、系統管理等6大類。
                        </p>

                        <p className="first-layer-no-list-style">
                            系統會自動上鎖用戶無權限使用的ＡＰＰ。
                        </p>
                    </div>
                </Element>

                <Element className="Chapter" name="logout">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_logout})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <div className="Chapter-body">
                        <div className="Chapter-body-title-group">
                            <h1>登出</h1>
                        </div>

                        <ul className="first-layer">
                            <li>
                                按下用戶鍵。如圖一。
                            </li>

                            <li>
                                登出：退出好聘系統
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
