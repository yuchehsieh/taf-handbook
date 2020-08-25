import React, {Component} from 'react';
import '../App.css';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import {Link as RouteLink} from 'react-router-dom';

import img_login_progress from '../images/login-process.png';
import img_dashboard from '../images/dashbaord.png';
import img_inbox from '../images/inbox.png';
import img_login from '../images/login.png';
import img_homepage from '../images/home-page.png';
import img_inbox_new from '../images/inbox-new.png';
import img_process1 from '../images/process1.png';
import img_process2 from '../images/process2.png';
import img_process3 from '../images/process3.png';
import img_process4 from '../images/process4.png';
import img_switch_window from '../images/img_switc_window.png';
import img_font_size from '../images/font-size.png';
import img_language from '../images/language.png';
import img_user from '../images/user.png';
import img_change_password from '../images/change-password.png';
import img_deputy from '../images/deputy.png';
import img_notification from '../images/notification.png';
import img_launch_pad from '../images/launch-pad.png';
import img_logout from '../images/logout.png';
import img_add_group_example from '../images/add-group-example-data.png';
import img_add_group1 from '../images/add-group1.png';
import img_add_group2 from '../images/add-group2.png';
import img_add_group3 from '../images/add-group3.png';
import img_add_group4 from '../images/add-group4.png';
import img_add_group5 from '../images/add-group5.png';
import img_lookup_perfect_candidate1 from '../images/lookup-perfect-candidate1.png';
import img_lookup_perfect_candidate2 from '../images/lookup-perfect-candidate2.png';
import img_add_perfect_candidate_example from '../images/add-perfect-candidate-example.png';
import img_add_perfect_candidate1 from '../images/add-perfect-candidate1.png';
import img_add_perfect_candidate2 from '../images/add-perfect-candidate2.png';
import img_add_perfect_candidate3 from '../images/add-perfect-candidate3.png';
import img_add_perfect_candidate4 from '../images/add-perfect-candidate4.png';
import img_add_perfect_candidate5 from '../images/add-perfect-candidate5.png';
import img_add_perfect_candidate6 from '../images/add-perfect-candidate6.png';
import img_add_perfect_candidate_form from '../images/add-perfect-candidate-form.png';
import img_add_gender1 from '../images/add-gender1.png';
import img_add_gender2 from '../images/add-gender2.png';
import img_add_gender3 from '../images/add-gender3.png';
import img_add_age1 from '../images/add-age1.png';
import img_add_age2 from '../images/add-age2.png';
import img_add_age3 from '../images/add-age3.png';
import img_add_identity_type1 from '../images/add-identity-type1.png';
import img_add_identity_type2 from '../images/add-identity-type2.png';
import img_add_identity_type3 from '../images/add-identity-type3.png';
import img_add_resident_place1 from '../images/add-resident-place1.png';
import img_add_resident_place2 from '../images/add-resident-place2.png';
import img_add_resident_place3 from '../images/add-resident-place3.png';
import img_add_resident_place4 from '../images/add-resident-place4.png';
import img_add_resident_place5 from '../images/add-resident-place5.png';
import icon_homepage from '../images/icon_homepage.png';
import icon_arrow_down from '../images/icon_arrow_down.png';
import icon_arrow_up from '../images/icon-arrow-up.png';
import icon_switch_window1 from '../images/icon_switch_window1.png';
import icon_switch_window2 from '../images/icon_switch_window2.png';
import icon_switch_window3 from '../images/icon_switch_window3.png';
import icon_file from '../images/icon_file.png';
import icon_search from '../images/icon-search.png';

import video_login from '../images/video_login.mp4';
import {routePath} from "../utils/constants";


class General extends Component {

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
                    <div className="header-element">新增組織-範例資料</div>
                    <div className="header-element">新增組織</div>
                    <div className="header-element">前往招聘流程</div>
                    <div className="header-element">前往回覆面談可用時間</div>
                    <div className="header-element">前往回覆面談評核</div>
                    <div className="header-element">查詢完美候選人原型</div>
                    <div className="header-element">新增完美候選人原型-範例資料</div>
                    <div className="header-element">新增完美候選人原型</div>
                    <div className="header-element">新增性別</div>
                    <div className="header-element">新增年齡</div>
                    <div className="header-element">新增身份類別</div>
                    <div className="header-element">新增居住地</div>
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
                    <Link to="add-group-example" className="header-element" smooth={true} duration={500}>
                        新增組織-範例資料
                    </Link>
                    <Link to="add-group" className="header-element" smooth={true} duration={500}>
                        新增組織
                    </Link>
                    <RouteLink to={routePath.hiringOperation}>
                        <p className="header-element">前往招聘流程</p>
                    </RouteLink>
                    <RouteLink to={routePath.replyForInterviewAvailableTime}>
                        <p className="header-element">前往回覆面談可用時間</p>
                    </RouteLink>
                    <RouteLink to={routePath.replyToTheInterviewReview}>
                        <p className="header-element">前往回覆面談評核</p>
                    </RouteLink>
                    <Link to="lookup-perfect-candidate" className="header-element" smooth={true} duration={500}>
                        查詢完美候選人原型
                    </Link>
                    <Link to="add-perfect-candidate-example" className="header-element" smooth={true} duration={500}>
                        新增完美候選人原型-範例資料
                    </Link>
                    <Link to="add-perfect-candidate" className="header-element" smooth={true} duration={500}>
                        新增完美候選人原型
                    </Link>
                    <Link to="add-gender" className="header-element" smooth={true} duration={500}>
                        新增性別
                    </Link>
                    <Link to="add-age" className="header-element" smooth={true} duration={500}>
                        新增年齡
                    </Link>
                    <Link to="add-identity-type" className="header-element" smooth={true} duration={500}>
                        新增身份類別
                    </Link>
                    <Link to="add-resident-place" className="header-element" smooth={true} duration={500}>
                        新增居住地
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
                            <span className="Text-danger">圖四。</span>工作完成後，代辦事項即自動消失。</p>

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

                <Element className="Chapter" name="add-group-example" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>新增組織-範例資料</h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_add_group_example})`,
                            height: '54em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionY: '-5em'
                        }}
                    />
                </Element>

                <Element className="Chapter" name="add-group">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_group1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_group2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_group3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_group4})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_group5})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>新增組織</h1>
                        </div>

                        <p className="first-layer-no-list-style">展示範例：新增雲境股份有限公司。</p>
                        <p className="first-layer-no-list-style">
                            進入路徑：首頁 -> 發射台 -> 系統管理 -> 組織。
                            <span className="Text-danger">如圖一</span>
                        </p>

                        <ul className="first-layer">
                            <li>
                                點擊
                                <span
                                    style={{
                                        background: `url(${icon_file}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                『檔案』圖示。彈跳出選擇檔案對話框，
                                <span className="Text-danger">如圖二</span>
                            </li>
                            <li>選擇LOGO圖檔。</li>
                            <li>按下『開啟』按鈕。</li>
                            <li>
                                <span className="Text-danger">如圖三</span>
                                。組織名稱：輸入『雲境股份有限公司』。
                            </li>
                            <li>統一編號：輸入『12345678』。</li>
                            <li>系統管理者電子郵件：輸入接收好聘招聘管理通知郵件負責人的電子郵件。輸入：『
                                <span className="Text-warn">andy@cloud.com</span>
                                』。
                            </li>
                            <li>徵才管道： 選擇全組織都會使用的徵才管道，被選定的徵才管道會自動帶入每一個招聘區域。輸入『104』。</li>
                            <li>應徵回覆天數：輸入填入天數，系統會同步有此規則的徵才管道。好聘規則：好聘會在接收到履歷的同時發出確認函。如：
                                應徵者於8月10日透過104應徵職缺，好聘會在8/11接收到此一履歷的同時，發出應徵者確認函。
                            </li>
                            <li>同意徵才管道顯示職缺聯絡人電子郵件：勾選，系統會同步有此規則的徵才管道，將職缺聯絡人電子郵件刊登於職缺資訊。（如何刊登聯絡人電話？）</li>
                            <li>黑名單感謝函延遲寄送天數：系統偵測到應徵者隸屬於黑名單，會自動剔除，而且會按照此一設定寄出感謝函。輸入3。如：8/10黑名單應徵職缺，系統會在8/13寄出感謝函。</li>
                            <li>黑名單期限（月份）：在設定期限之後，黑名單會自動解除。黑名單期限（月份）設為12，如應徵者於2020/8/8被設定為黑名單，黑名單會在2021/8/8失效。</li>
                            <li>限制淘汰者應徵相同職務天數：設定為365天。如：甲君應徵雲境公司物聯網事業群『業務工程師』，於2020/8/8被拒絕，，甲君在2021/7/8，再度應徵雲境公司車用電池事業群『業務工程師』的職務，系統會根據規則，拒絕甲君應徵。倘若甲君應徵資訊服務部『軟體工程師』，則不會被拒絕。</li>
                            <li>
                                <span className="Text-danger">如圖四</span>
                                。面談指南：全公司通用面談指南。輸入範例如下：
                                <p className="second-layer-no-list-style">面試指南</p>
                                <p className="second-layer-no-list-style">面試評核分為2部分：</p>
                                <ul className="second-layer">
                                    <li>雲境面談表：如附件。填寫完畢請以附件形式寄給recruiter@cloud.com。線上教育訓練：tutorial.talentonline.io/interview
                                        evaluation form/
                                    </li>
                                    <li>好聘面談評核：請於面談結束後三天完成線上評核。線上教育訓練：tutorial.talentonline.io/interview scorecard/</li>
                                </ul>
                            </li>
                            <li>
                                <span className="Text-danger">如圖五</span>
                                。測驗科目：全組織的必要測驗科目，測驗項目會帶入全組織的每一個招聘區域以及每一個
                                <span className="Text-success">仍在運作的職缺中</span>。
                            </li>
                            <li>
                                請參照
                                <span className="Text-underline">新增全組織的必要測驗項目</span>
                            </li>
                            <li>
                                請參照
                                <span className="Text-underline">修改全組織的必要測驗項目</span>
                            </li>
                            <li>
                                請參照
                                <span className="Text-underline">刪除全組織的必要測驗項目</span>
                            </li>
                            <li>按下儲存。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="lookup-perfect-candidate">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_lookup_perfect_candidate1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_lookup_perfect_candidate2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>查詢完美候選人原型</h1>
                        </div>

                        <p className="first-layer-no-list-style">展示範例：查詢『售前工程師』的完美候選人原型。</p>
                        <p className="first-layer-no-list-style">進入路徑：首頁-> 發射台->職缺管理->完美候選人原型。</p>

                        <ul className="first-layer">
                            <li>輸入完美候選人原型名稱(全名/關鍵字）或是選擇適用範圍（全公司/特定招聘區域）全名/關鍵字）。在名稱欄位輸入範例完美候選人原型名稱『 售前工程師』。
                            </li>
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_search}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                查詢圖示。
                            </li>
                            <li>成果如圖二。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="add-perfect-candidate-example" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>新增完美候選人原型-範例資料</h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_add_perfect_candidate_example})`,
                            height: '54em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Element>

                <Element className="Chapter" name="add-perfect-candidate">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate4})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate5})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate6})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>新增完美候選人原型</h1>
                        </div>

                        <p className="first-layer-no-list-style">展示範例：新增『售前工程師』的完美候選人原型。</p>
                        <p className="first-layer-no-list-style">進入路徑：首頁->發射台->職缺管理->完美候選人原型。</p>
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_perfect_candidate_form})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPositionX: '2.5em'
                             }}
                        />

                        <ul className="first-layer">
                            <li>
                                <span className="Text-danger">
                                參照
                                    <span className="Text-underline">
                                        <span style={{fontWeight: 'bold'}}>
                                        查詢
                                        </span>
                                        完美候選人原型
                                    </span>
                                </span>
                            </li>
                            <li>按下右上方『新增』按鈕。</li>
                            <li>進入新增完美候選人原型畫面，如『圖二』。可從4個面向定義完美候選人原型。</li>
                            <li>名稱：輸入『售前工程師』。</li>
                            <li>
                                適用範圍：按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_down}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                ，出現全公司以及所有的招聘區域，按照範例選擇『雲敬台灣』。雲境公司內部僅有雲境台灣招聘區域的招聘人員可以被授權使用『售前工程師』的完美候選人原型。若選擇全公司，所有的招聘人員都可以被授權使用此一完美後選人原型。
                            </li>
                            <li>
                                圖像：按下
                                <span
                                    style={{
                                        background: `url(${icon_file}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                『插入檔案』圖示，選擇『售前工程師』的識別圖檔。
                            </li>
                            <li>如圖三，選擇圖檔，按下開啟。</li>
                            <li>成果如圖四。</li>
                            <li>敘述：按照範例輸入『適用於各事業群的售前工程師』。</li>
                            <li>設定與個人簡歷相關的條件：性別、年齡、身份類型、居住地、人格特質、薪資。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="add-gender">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_gender1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_gender2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_gender3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>新增性別</h1>
                        </div>

                        <p className="first-layer-no-list-style">範例：將男性設定為偏好性別。</p>

                        <ul className="first-layer">
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_up}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                如圖ㄧ。
                            </li>
                            <li>表格會向下展開。UI設計是採取選單模式。每個條件都有3個選才標準：</li>
                            <ul className="second-layer" style={{listStyle: 'none'}}>
                                <li>必要：候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。</li>
                                <li>偏好：搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。</li>
                                <li>完美：搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。</li>
                            </ul>
                            <li>將游標移到偏好欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，選定範例中指定性別『男性』。選單內容不足，請參照新增性別。</li>
                            <li>成果。如圖四。若要多選，可重複步驟3-4。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="add-age">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_age1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_age2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_age3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>新增年齡</h1>
                        </div>

                        <p className="first-layer-no-list-style">範例：將偏好性別設定為20-30歲。</p>

                        <ul className="first-layer">
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_up}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                如圖ㄧ。
                            </li>
                            <li>表格會向下展開。UI設計是採取選單模式。每個條件都有3個選才標準：</li>
                            <ul className="second-layer" style={{listStyle: 'none'}}>
                                <li>必要：候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。</li>
                                <li>偏好：搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。 </li>
                                <li>完美：搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。</li>
                            </ul>
                            <li>根據範例，勾選偏好年齡。</li>
                            <li>尺標圖示會浮現。如圖二。</li>
                            <li>移動右尺標到30，如圖三。</li>
                            <li>移動左尺標到20。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="add-identity-type">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_identity_type1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_identity_type2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_identity_type3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>新增年齡</h1>
                        </div>

                        <p className="first-layer-no-list-style">範例：將上班族設定為偏好身份。</p>

                        <ul className="first-layer">
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_up}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                如圖ㄧ。
                            </li>
                            <li>表格會向下展開。UI設計是採取選單模式。每個條件都有3個選才標準：</li>
                            <ul className="second-layer" style={{listStyle: 'none'}}>
                                <li>必要：候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。</li>
                                <li>偏好：搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。 </li>
                                <li>完美：搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。</li>
                            </ul>
                            <li>將游標移到偏好欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，選定範例中指定身份『上班族』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖四。若要多選，可重複步驟3-4。</li>
                        </ul>
                    </div>
                </Element>

                <Element className="Chapter" name="add-resident-place">
                    <div className="Chapter-Multi-image-container">
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_resident_place1})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_resident_place2})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_resident_place3})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_resident_place4})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                        <div className="Chapter-Multi-image-image"
                             style={{
                                 background: `url(${img_add_resident_place5})`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat'
                             }}
                        />
                    </div>

                    <div className="Chapter-body">

                        <div className="Chapter-body-title-group">
                            <h1>新增年齡</h1>
                        </div>

                        <p className="first-layer-no-list-style">範例：將台灣設定為必要居住地。將桃竹苗設定為完美居住地。</p>

                        <ul className="first-layer">
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_up}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                如圖ㄧ。
                            </li>
                            <li>表格會向下展開。UI設計是採取選單模式。每個條件都有3個選才標準：</li>
                            <ul className="second-layer" style={{listStyle: 'none'}}>
                                <li>必要：候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。</li>
                                <li>偏好：搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。 </li>
                                <li>完美：搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。</li>
                            </ul>
                            <li>將游標移到偏好欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，可輸入『台灣』或是部分關鍵字進行搜尋(好聘支持異體字，不論輸入『台灣』或是『臺灣』，都會搜尋到。)或是滑動選單選定範例中指定國家『台灣』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>將游標移到完美居住地的國家欄，重複步驟3-4，選擇台灣，如圖三。</li>
                            <li>將游標移到完美居住地的城市欄，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖四，滑動選單選定範例中指定國家『台北市』。重複步驟6-7，選擇『新北市』與『基隆市』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖五。</li>
                        </ul>
                    </div>
                </Element>

                </body>
            </div>
        );
    }
}

export default General;
