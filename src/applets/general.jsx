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
import img_add_personality1 from '../images/add-personality1.png';
import img_add_personality2 from '../images/add-personality2.png';
import img_add_personality3 from '../images/add-personality3.png';
import img_set_salary1 from '../images/set-salary1.png';
import img_set_salary2 from '../images/set-salary2.png';
import img_set_salary3 from '../images/set-salary3.png';
import img_set_education_related from '../images/set-educatation-related.png';
import img_set_academic_degree1 from '../images/set-academic-degree1.png';
import img_set_academic_degree2 from '../images/set-academic-degree2.png';
import img_set_academic_degree3 from '../images/set-academic-degree3.png';
import img_set_school1 from '../images/set-school1.png';
import img_set_school2 from '../images/set-school2.png';
import img_set_school3 from '../images/set-school3.png';
import img_set_department1 from '../images/set-department1.png';
import img_set_department2 from '../images/set-department2.png';
import img_set_department3 from '../images/set-department3.png';
import img_set_department4 from '../images/set-department4.png';
import img_set_department5 from '../images/set-department5.png';
import img_set_grade1 from '../images/set-grade1.png';
import img_set_grade2 from '../images/set-grade2.png';
import img_set_grade3 from '../images/set-grade3.png';
import img_set_workExp_related from '../images/set-workExp-related.png';
import img_set_seniority1 from '../images/set-seniority1.png';
import img_set_seniority2 from '../images/set-seniority2.png';
import img_set_seniority3 from '../images/set-seniority3.png';
import img_set_target_company1 from '../images/set-target-company1.png';
import img_set_target_company2 from '../images/set-target-company2.png';
import img_set_target_company3 from '../images/set-target-company3.png';
import img_set_exclude_company1 from '../images/set-exclude-company1.png';
import img_set_exclude_company2 from '../images/set-exclude-company2.png';
import img_set_exclude_company3 from '../images/set-exclude-company3.png';
import img_set_skills_related from '../images/set-skills-related.png';
import img_set_license1 from '../images/set-license1.png';
import img_set_license2 from '../images/set-license2.png';
import img_set_license3 from '../images/set-license3.png';
import img_set_expertise_and_computer_skills from '../images/set-expertise-and-computer-skills.png';
import img_set_language_skills1 from '../images/set-language-skills1.png';
import img_set_language_skills2 from '../images/set-language-skills2.png';
import img_set_language_skills3 from '../images/set-language-skills3.png';
import img_set_language_skills4 from '../images/set-language-skills4.png';
import img_set_language_skills5 from '../images/set-language-skills5.png';
import img_set_language_skills6 from '../images/set-language-skills6.png';
import img_set_language_skills_form from '../images/set-language-skills-form.png';
import img_lookup_job1 from '../images/lookup-job1.png';
import img_lookup_job2 from '../images/lookup-job2.png';
import img_lookup_job3 from '../images/lookup-job3.png';
import img_add_job_example from '../images/add-job-example.png';
import img_add_job1 from '../images/add-job1.png';
import img_add_job2 from '../images/add-job2.png';
import img_add_job3 from '../images/add-job3.png';
import img_lookup_req1 from '../images/lookup-req1.png';
import img_lookup_req2 from '../images/lookup-req2.png';
import img_lookup_req3 from '../images/lookup-req3.png';
import img_add_req_example from '../images/add-req-example.png';
import img_add_req1 from '../images/add-req1.png';
import img_add_req2 from '../images/add-req2.png';
import img_add_req3 from '../images/add-req3.png';
import img_add_req4 from '../images/add-req4.png';
import img_add_req5 from '../images/add-req5.png';
import img_add_req6 from '../images/add-req6.png';
import img_add_req7 from '../images/add-req7.png';
import img_add_req8 from '../images/add-req8.png';
import img_add_req9 from '../images/add-req9.png';
import img_add_req10 from '../images/add-req10.png';
import img_add_req11 from '../images/add-req11.png';
import img_add_req12 from '../images/add-req12.png';
import img_add_req13 from '../images/add-req13.png';
import img_add_req14 from '../images/add-req14.png';
import img_add_req15 from '../images/add-req15.png';
import img_add_req16 from '../images/add-req16.png';
import img_add_req17 from '../images/add-req17.png';
import img_add_req18 from '../images/add-req18.png';
import img_add_req19 from '../images/add-req19.png';
import img_req_activation1 from '../images/req-activation1.png';
import img_req_activation2 from '../images/req-activation2.png';
import img_req_activation3 from '../images/req-activation3.png';
import img_add_req_ad1 from '../images/add-req-ad-new1.png';
import img_add_req_ad2 from '../images/add-req-ad-new2.png';
import img_end_receive1 from '../images/end-receive1.png';
import img_end_receive2 from '../images/end-receive2.png';
import img_update_req1 from '../images/update-req1.png';
import img_update_req2 from '../images/update-req2.png';
import img_end_req1 from '../images/end-req1.png';
import img_end_req2 from '../images/end-req2.png';
import hired_onhold_notification_onhold_cover from '../images/hired-onhlold-notification-onhold-cover.png';
import hired_onhold_notification_onhold1 from '../images/hired-onhlold-notification-onhold1.png';
import hired_onhold_notification_onhold2 from '../images/hired-onhlold-notification-onhold2.png';
import hired_onhold_notification_hired_cover from '../images/hired-onhlold-notification-hired-cover.png';
import hired_onhold_notification_hired1 from '../images/hired-onhlold-notification-hired1.png';
import hired_onhold_notification_hired2 from '../images/hired-onhlold-notification-hired2.png';
import hired_onhold_notification_hired3 from '../images/hired-onhlold-notification-hired3.png';
import hired_onhold_notification_hired4 from '../images/hired-onhlold-notification-hired4.png';
import hired_onhold_notification_hired5 from '../images/hired-onhlold-notification-hired5.png';
import hired_onhold_notification_hired6 from '../images/hired-onhlold-notification-hired6.png';
import img_to_report_list_cover from '../images/to-report-list-cover.png';
import img_to_report_list1 from '../images/to-report-list1.png';
import img_to_report_list2 from '../images/to-report-list2.png';
import img_recruiter_control_cover from '../images/recruiter-control-cover.png';
import img_recruiter_control1 from '../images/recruiter-control1.png';
import img_rc_search_screening_candidate_cover from '../images/rc-search-screening-candidate-cover.png';
import img_rc_search_screening_candidate1 from '../images/rc-search-screening-candidate1.png';
import img_rc_search_screening_candidate2 from '../images/rc-search-screening-candidate2.png';
import img_rc_search_screening_candidate3 from '../images/rc-search-screening-candidate3.png';
import img_rc_search_screening_candidate4 from '../images/rc-search-screening-candidate4.png';
import img_rc_review_new_applicant_cover from '../images/rc-review-new-applicant-cover.png';
import img_rc_review_new_applicant1 from '../images/rc-review-new-applicant1.png';
import img_rc_review_applied_status_cover from '../images/rc-review-applied-status-cover.png';
import img_rc_review_applied_status1 from '../images/rc-review-applied-status1.png';
import img_rc_refer_req_cover from '../images/rc-refer-req-cover.png';
import img_rc_refer_req1 from '../images/rc-refer-req1.png';
import img_rc_add_phone_record_cover from '../images/rc-add-phone-record-cover.png';
import img_rc_add_phone_record1 from '../images/rc-add-phone-record1.png';
import img_rc_add_reference_check_cover from '../images/rc-add-reference-check-cover.png';
import img_rc_add_reference_check1 from '../images/rc-add-reference-check1.png';
import img_rc_success_change_applied_status_cover from '../images/rc-success-change-applied-status-cover.png';
import img_rc_success_change_applied_status1 from '../images/rc-success-change-applied-status1.png';
import img_rc_success_change_applied_status2 from '../images/rc-success-change-applied-status2.png';
import img_rc_success_change_applied_status3 from '../images/rc-success-change-applied-status3.png';
import img_rc_review_all_applied_status_cover from '../images/rc-review-all-applied-stauts-cover.png';
import img_rc_review_all_applied_status1 from '../images/rc-review-all-applied-stauts1.png';
import img_rc_review_basic_info_cover from '../images/rc-review-basic-info-cover.png';
import img_rc_review_basic_info1 from '../images/rc-review-basic-info1.png';
import img_rc_review_basic_info2 from '../images/rc-review-basic-info2.png';
import img_rc_add_referer_cover from '../images/rc-add-referer-cover.png';
import img_rc_add_referer1 from '../images/rc-add-referer1.png';
import img_rc_add_referer2 from '../images/rc-add-referer2.png';
import img_rc_add_emergency_contact_cover from '../images/rc-add-emergency-contact-cover.png';
import img_rc_add_emergency_contact1 from '../images/rc-add-emergency-contact1.png';
import img_rc_add_emergency_contact2 from '../images/rc-add-emergency-contact2.png';
import img_rc_set_black_list_cover from '../images/rc-set-black-list-cover.png';
import img_rc_set_black_list1 from '../images/rc-set-black-list1.png';
import img_rc_set_black_list2 from '../images/rc-set-black-list2.png';
import img_rc_set_confidential_cover from '../images/rc-set-confidential-cover.png';
import img_rc_set_confidential1 from '../images/rc-set-confidential1.png';
import img_rc_set_confidential2 from '../images/rc-set-confidential2.png';
import img_rc_record_recruiting_cost_cover from '../images/rc-record-recruiting-cost-cover.png';
import img_rc_record_recruiting_cost1 from '../images/rc-record-recruiting-cost1.png';
import img_rc_record_recruiting_cost2 from '../images/rc-record-recruiting-cost2.png';
import img_rc_record_recruiting_cost3 from '../images/rc-record-recruiting-cost3.png';
import img_rc_record_recruiting_cost4 from '../images/rc-record-recruiting-cost4.png';
import img_rc_review_workExp_cover from '../images/rc-review-workExp-cover.png';
import img_rc_review_workExp1 from '../images/rc-review-workExp1.png';
import img_rc_add_workExp_cover from '../images/rc-add-workExp-cover.png';
import img_rc_add_workExp1 from '../images/rc-add-workExp1.png';
import img_rc_add_workExp2 from '../images/rc-add-workExp2.png';
import img_rc_review_educationExp_cover from '../images/rc-review-educationExp-cover.png';
import img_rc_review_educationExp1 from '../images/rc-review-educationExp1.png';

import icon_homepage from '../images/icon_homepage.png';
import icon_arrow_down from '../images/icon_arrow_down.png';
import icon_arrow_up from '../images/icon-arrow-up.png';
import icon_switch_window1 from '../images/icon_switch_window1.png';
import icon_switch_window2 from '../images/icon_switch_window2.png';
import icon_switch_window3 from '../images/icon_switch_window3.png';
import icon_file from '../images/icon_file.png';
import icon_search from '../images/icon-search.png';
import icon_circle_add from '../images/icon-circle-add.png';
import icon_radio_box from '../images/icon_radio_box.png';
import icon_cross from '../images/icon-cross.png';
import icon_start_activation from '../images/icon-start-activation.png';
import icon_one_click_publish from '../images/icon-one-click-publish.png';
import icon_end_receive from '../images/icon-end-receive.png';
import icon_save_activate from '../images/icon-save-activate.png';
import icon_update_req1 from '../images/icon-update-req1.png';
import icon_update_req2 from '../images/icon-update-req2.png';
import icon_end_req from '../images/icon-end-req.png';
import icon_add_text from '../images/icon-add-text.png';
import icon_add_req from '../images/icon-add-req.png';
import icon_switch from '../images/icon-switch.png';

import video_login from '../images/video_login.mp4';
import {routePath} from "../utils/constants";
import {
    ChapterBody,
    ChapterCoverImage,
    ChapterFirstLayerNoListStyle, ChapterSecondLayerNoListStyle,
    ChapterTitleGroup,
    MultiImage,
    MultiImageContainer
} from "./Components/ChapterComponents";


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
                    <div className="header-element">新增人格特質</div>
                    <div className="header-element">設定薪資</div>
                    <div className="header-element">設定與教育相關的條件：學位、學校、科系、成績</div>
                    <div className="header-element">設定學位</div>
                    <div className="header-element">設定學校</div>
                    <div className="header-element">設定科系</div>
                    <div className="header-element">設定成績</div>
                    <div className="header-element">設定與工作經驗相關的條件：年資、目標公司、排除公司</div>
                    <div className="header-element">設定年資</div>
                    <div className="header-element">設定目標公司</div>
                    <div className="header-element">設定排除公司</div>
                    <div className="header-element">設定與技能相關的條件：證照、專長、電腦技能、語言能力、駕照</div>
                    <div className="header-element">設定證照</div>
                    <div className="header-element">設定專長</div>
                    <div className="header-element">設定電腦技能</div>
                    <div className="header-element">設定語言能力</div>
                    <div className="header-element">設定駕照</div>
                    <div className="header-element">查詢職務</div>
                    <div className="header-element">新增職務-範例資料</div>
                    <div className="header-element">新增職務</div>
                    <div className="header-element">查詢職缺</div>
                    <div className="header-element">新增職缺-範例資料</div>
                    <div className="header-element">新增職缺</div>
                    <div className="header-element">職缺生效</div>
                    <div className="header-element">刊登職缺廣告</div>
                    <div className="header-element">截止收件</div>
                    <div className="header-element">更新刊登</div>
                    <div className="header-element">結束招聘</div>
                    <div className="header-element">錄取/備取通知-備取</div>
                    <div className="header-element">錄取/備取通知-錄取</div>
                    <div className="header-element">待報到清單</div>
                    <div className="header-element">招聘指揮台</div>
                    <div className="header-element">招聘指揮台-查詢初選階段候選人</div>
                    <div className="header-element">招聘指揮台-審閱新進履歷</div>
                    <div className="header-element">招聘指揮台-審閱本次應徵狀態</div>
                    <div className="header-element">招聘指揮台-轉薦職缺</div>
                    <div className="header-element">招聘指揮台-新增通話紀錄</div>
                    <div className="header-element">招聘指揮台-新增資歷查核</div>
                    <div className="header-element">招聘指揮台-人才開發成功-修改應徵狀態</div>
                    <div className="header-element">招聘指揮台-審閱所有應徵狀態</div>
                    <div className="header-element">招聘指揮台-審閱基本資料</div>
                    <div className="header-element">招聘指揮台-新增推薦人</div>
                    <div className="header-element">招聘指揮台-新增緊急聯絡人</div>
                    <div className="header-element">招聘指揮台-設定黑名單</div>
                    <div className="header-element">招聘指揮台-設定機密履歷</div>
                    <div className="header-element">招聘指揮台-紀錄招聘費用</div>
                    <div className="header-element">招聘指揮台-審核工作經驗</div>
                    <div className="header-element">招聘指揮台-新增工作經驗</div>
                    <div className="header-element">招聘指揮台-審核教育經驗</div>
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
                    <Link to="add-personality" className="header-element" smooth={true} duration={500}>
                        新增人格特質
                    </Link>
                    <Link to="set-salary" className="header-element" smooth={true} duration={500}>
                        設定薪資
                    </Link>
                    <Link to="set-education-related" className="header-element" smooth={true} duration={500}>
                        設定與教育相關的條件：學位、學校、科系、成績
                    </Link>
                    <Link to="set-academic-degree" className="header-element" smooth={true} duration={500}>
                        設定學位
                    </Link>
                    <Link to="set-school" className="header-element" smooth={true} duration={500}>
                        設定學校
                    </Link>
                    <Link to="set-department" className="header-element" smooth={true} duration={500}>
                        設定科系
                    </Link>
                    <Link to="set-grade" className="header-element" smooth={true} duration={500}>
                        設定成績
                    </Link>
                    <Link to="set-workExp-related" className="header-element" smooth={true} duration={500}>
                        設定與工作經驗相關的條件：年資、目標公司、排除公司
                    </Link>
                    <Link to="set-seniority" className="header-element" smooth={true} duration={500}>
                        設定年資
                    </Link>
                    <Link to="set-target-company" className="header-element" smooth={true} duration={500}>
                        設定目標公司
                    </Link>
                    <Link to="set-exclude-company" className="header-element" smooth={true} duration={500}>
                        設定排除公司
                    </Link>
                    <Link to="set-skills-related" className="header-element" smooth={true} duration={500}>
                        設定與技能相關的條件：證照、專長、電腦技能、語言能力、駕照
                    </Link>
                    <Link to="set-license" className="header-element" smooth={true} duration={500}>
                        設定證照
                    </Link>
                    <Link to="set-expertise" className="header-element" smooth={true} duration={500}>
                        設定專長
                    </Link>
                    <Link to="set-computer-skills" className="header-element" smooth={true} duration={500}>
                        設定電腦技能
                    </Link>
                    <Link to="set-language-skills" className="header-element" smooth={true} duration={500}>
                        設定語言能力
                    </Link>
                    <Link to="set-driving-license" className="header-element" smooth={true} duration={500}>
                        設定駕照
                    </Link>
                    <Link to="lookup-job" className="header-element" smooth={true} duration={500}>
                        查詢職務
                    </Link>
                    <Link to="add-job-example" className="header-element" smooth={true} duration={500}>
                        新增職務-範例資料
                    </Link>
                    <Link to="add-job" className="header-element" smooth={true} duration={500}>
                        新增職務
                    </Link>
                    <Link to="lookup-req" className="header-element" smooth={true} duration={500}>
                        查詢職缺
                    </Link>
                    <Link to="add-req-example" className="header-element" smooth={true} duration={500}>
                        新增職缺-範例資料
                    </Link>
                    <Link to="add-req" className="header-element" smooth={true} duration={500}>
                        新增職缺
                    </Link>
                    <Link to="req-activation" className="header-element" smooth={true} duration={500}>
                        職缺生效
                    </Link>
                    <Link to="add-req-ad" className="header-element" smooth={true} duration={500}>
                        刊登職缺廣告
                    </Link>
                    <Link to="end-receive" className="header-element" smooth={true} duration={500}>
                        截止收件
                    </Link>
                    <Link to="update-req" className="header-element" smooth={true} duration={500}>
                        更新刊登
                    </Link>
                    <Link to="end-req" className="header-element" smooth={true} duration={500}>
                        結束招聘
                    </Link>
                    <Link to="hired-onhold-notification-onhold" className="header-element" smooth={true} duration={500}>
                        錄取/備取通知-備取
                    </Link>
                    <Link to="hired-onhold-notification-hired" className="header-element" smooth={true} duration={500}>
                        錄取/備取通知-錄取
                    </Link>
                    <Link to="to-report-list" className="header-element" smooth={true} duration={500}>
                        待報到清單
                    </Link>
                    <Link to="recruiter-control" className="header-element" smooth={true} duration={500}>
                        招聘指揮台
                    </Link>
                    <Link to="rc-search-screening-candidate" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-查詢初選階段候選人
                    </Link>
                    <Link to="rc-review-new-applicant" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-審閱新進履歷
                    </Link>
                    <Link to="rc-review-applied-status" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-審閱新進履歷
                    </Link>
                    <Link to="rc-refer-req" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-轉薦職缺
                    </Link>
                    <Link to="rc-refer-req" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-新增通話紀錄
                    </Link>
                    <Link to="rc-add-reference-check" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-新增資歷查核
                    </Link>
                    <Link to="rc-success-change-applied-status" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-人才開發成功-修改應徵狀態
                    </Link>
                    <Link to="rc-review-all-applied-status" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-審閱所有應徵狀態
                    </Link>
                    <Link to="rc-review-basic-info" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-審閱基本資料
                    </Link>
                    <Link to="rc-add-referer" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-新增推薦人
                    </Link>
                    <Link to="rc-add-emergency-contact" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-新增緊急聯絡人
                    </Link>
                    <Link to="rc-set-black-list" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-設定黑名單
                    </Link>
                    <Link to="rc-set-confidential" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-設定機密履歷
                    </Link>
                    <Link to="rc-record-recruiting-cost" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-紀錄招聘費用
                    </Link>
                    <Link to="rc-review-workExp" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-審核工作經驗
                    </Link>
                    <Link to="rc-add-workExp" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-新增工作經驗
                    </Link>
                    <Link to="rc-review-educationExp" className="header-element" smooth={true} duration={500}>
                        招聘指揮台-審核教育經驗
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
                        <ChapterBody>

                            <ChapterTitleGroup>
                                <h1>登入步驟</h1>
                                {/*<h4>＊必要步驟</h4>*/}
                            </ChapterTitleGroup>

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
                        </ChapterBody>

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

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>首頁</h1>
                        </ChapterTitleGroup>

                        {/* 單一的標列無 li 樣式 */}
                        <ChapterFirstLayerNoListStyle>
                            首頁如圖一，由三大部分組成。
                        </ChapterFirstLayerNoListStyle>

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
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="inbox">
                    <div className="Chapter-Single-image"
                         style={{
                             background: `url(${img_inbox_new})`,
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />

                    <ChapterBody>
                        <ChapterTitleGroup>
                            <h1>收件匣</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            收件匣首頁收藏使用者所有的待辦事項，如
                            <span className="Text-danger">圖四。</span>工作完成後，代辦事項即自動消失。
                        </ChapterFirstLayerNoListStyle>

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
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="process">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_process1,
                                img_process2,
                                img_process3,
                                img_process4
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>處理</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：處理『新進履歷』代辦事項。
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            進入路徑：首頁->收件匣
                        </ChapterFirstLayerNoListStyle>

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
                    </ChapterBody>
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
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_group1,
                                img_add_group2,
                                img_add_group3,
                                img_add_group4,
                                img_add_group5,
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增組織</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            展示範例：新增雲境股份有限公司。
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            進入路徑：首頁 -> 發射台 -> 系統管理 -> 組織。
                            <span className="Text-danger">如圖一</span>
                        </ChapterFirstLayerNoListStyle>

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
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="lookup-perfect-candidate">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_lookup_perfect_candidate1,
                                img_lookup_perfect_candidate2,
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>查詢完美候選人原型</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            展示範例：查詢『售前工程師』的完美候選人原型。
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            進入路徑：首頁-> 發射台->職缺管理->完美候選人原型。
                        </ChapterFirstLayerNoListStyle>

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
                    </ChapterBody>
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
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_perfect_candidate1,
                                img_add_perfect_candidate2,
                                img_add_perfect_candidate3,
                                img_add_perfect_candidate4,
                                img_add_perfect_candidate5,
                                img_add_perfect_candidate6
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增完美候選人原型</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            展示範例：新增『售前工程師』的完美候選人原型。
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            進入路徑：首頁->發射台->職缺管理->完美候選人原型。
                        </ChapterFirstLayerNoListStyle>
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
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-gender">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_gender1,
                                img_add_gender2,
                                img_add_gender3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增性別</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將男性設定為偏好性別。
                        </ChapterFirstLayerNoListStyle>

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
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-age">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_age1,
                                img_add_age2,
                                img_add_age3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增年齡</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將偏好性別設定為20-30歲。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>根據範例，勾選偏好年齡。</li>
                            <li>尺標圖示會浮現。如圖二。</li>
                            <li>移動右尺標到30，如圖三。</li>
                            <li>移動左尺標到20。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-identity-type">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_identity_type1,
                                img_add_identity_type2,
                                img_add_identity_type3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增年齡</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將上班族設定為偏好身份。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>選單會展開如圖二，選定範例中指定身份『上班族』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖四。若要多選，可重複步驟3-4。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-resident-place">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_resident_place1,
                                img_add_resident_place2,
                                img_add_resident_place3,
                                img_add_resident_place4,
                                img_add_resident_place5
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增年齡</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將台灣設定為必要居住地。將桃竹苗設定為完美居住地。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>選單會展開如圖二，可輸入『台灣』或是部分關鍵字進行搜尋(好聘支持異體字，不論輸入『台灣』或是『臺灣』，都會搜尋到。)或是滑動選單選定範例中指定國家『台灣』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>將游標移到完美居住地的國家欄，重複步驟3-4，選擇台灣，如圖三。</li>
                            <li>將游標移到完美居住地的城市欄，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖四，滑動選單選定範例中指定國家『台北市』。重複步驟6-7，選擇『新北市』與『基隆市』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖五。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-personality">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_personality1,
                                img_add_personality2,
                                img_add_personality3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增人格特質</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將『外向』設定為偏好身份。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>
                                選單會展開如圖二，選定範例中指定的人格特質『外向』。選單內容不足，請參照
                                <span className="Text-underline">新增人格特質。</span>
                            </li>
                            <li>成果。如圖三。若要多選，可重複步驟3-4。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-salary">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_salary1,
                                img_set_salary2,
                                img_set_salary3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增人格特質</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將目前年薪設定為60萬（以下）。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>表格會向下展開。將游標移年薪欄位，依照範例輸入600000。</li>
                            <li>將游標移向幣別欄位，按下欄位空白處，選單會展開如圖二，選定範例中指定的『台幣』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖三。若要多選，可重複步驟3。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-education-related" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>設定與教育相關的條件：
                            <span className="Text-underline">
                                <Link to="set-academic-degree" smooth={true} duration={500}>
                                學位
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-school" smooth={true} duration={500}>
                                學校
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-department" smooth={true} duration={500}>
                                科系
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-grade" smooth={true} duration={500}>
                                成績
                                </Link>
                            </span>
                        </h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_set_education_related})`,
                            height: '25em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Element>

                <Element className="Chapter" name="set-academic-degree">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_academic_degree1,
                                img_set_academic_degree2,
                                img_set_academic_degree3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定學位</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將碩士設定為必要學位。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>表格會向下展開。UI設計是採取選單模式。如圖二。每個條件都有3個選才標準：</li>
                            <ul className="second-layer" style={{listStyle: 'none'}}>
                                <li>必要學位最低要求：一旦選擇特定學位，比特定學位高的學位都會自動被加入。（候選人未達必要學位最低要求，會被淘汰。候選人學歷等於或是高於設定學位，會通過初選。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。如果候選人學歷高於必要條件，且偏好與必要學位沒有輸入，也會被給予基本分數。
                                    ）
                                </li>
                                <li>偏好學位（搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。）</li>
                                <li>完美學位（搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。） 。請依照真實情況酌情填寫。</li>
                            </ul>
                            <li>將游標移到必要學位最低要求欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>
                                選單會展開如圖二，選定範例中指定學位『碩士』。，具備碩士、博士等學位會通過篩選。選單內容不足，
                                <span className="Text-underline Text-danger">請電郵好聘support@talentonline.io。</span>
                            </li>
                            <li>成果。如圖三。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-school">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_school1,
                                img_set_school2,
                                img_set_school3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>
                        <ChapterTitleGroup>
                            <h1>設定學校</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將台清交設定為完美學校。
                        </ChapterFirstLayerNoListStyle>

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
                                如圖ㄧ。表格會向下展開。
                            </li>
                            <li>
                                將游標移向
                                <span
                                    style={{
                                        background: `url(${icon_circle_add}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。
                            </li>
                            <li>新增：學校選單會顯示出來，如圖二。選單內容不足，
                                <span className="Text-danger Text-underline">請電郵好聘support@talentonline.io。</span>
                            </li>
                            <li>可點擊搜尋鍵，輸入名稱/國家進行搜尋。</li>
                            <li>或是點選特定學校。按shift鍵，可連續多選。按Command/CTRL可不連續多選。按新增鍵。</li>
                            <li>成果。如圖三。若要多選，可重複步驟2-5。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-department">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_department1,
                                img_set_department2,
                                img_set_department3,
                                img_set_department4,
                                img_set_department5,
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定科系</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            將電算機學門設定為必要科系。
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            將軟體相關科系設定為完美科系。
                        </ChapterFirstLayerNoListStyle>

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
                                <li>必要（候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。 ）</li>
                                <li>偏好（搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。）</li>
                                <li>完美（搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。）。請依照真實情況酌情填寫。</li>
                            </ul>
                            <li>科系可從學門、學類、科系來選擇。點選某一個學門或是學類，該學門或是學類的所有科系都會被選入。將游標移到必要科系，點擊學門欄位，從選單中選擇『商業及管理學門』。成果如圖</li>
                            <li>將游標移到必要科系的學門欄，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，輸入『電算學門』部分或是全部關鍵字或是滑動選單選定範例中指定學門『電算學門』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>將游標移到完美科系的科系欄。</li>
                            <li>在科系欄位輸入『軟體』，選單會顯示所有具備『軟體』關鍵字的科系。</li>
                            <li>酌情點選選項。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖五。若要多選，再度點擊欄位空白處，即可再度選擇。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-grade">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_grade1,
                                img_set_grade2,
                                img_set_grade3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定成績</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將『C』設定為必要成績。
                        </ChapterFirstLayerNoListStyle>

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
                                <li>必要（候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。 ）</li>
                                <li>偏好（搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。）</li>
                                <li>完美（搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。）。請依照真實情況酌情填寫。</li>
                            </ul>
                            <li>將游標移到必要欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，選定範例中指定的成績『C 60-69分 3點』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖三。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-workExp-related" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>設定與工作經驗相關的條件：
                            <span className="Text-underline">
                                <Link to="set-seniority" smooth={true} duration={500}>
                                年資
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-target-company" smooth={true} duration={500}>
                                目標公司
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-exclude-company" smooth={true} duration={500}>
                                排除公司
                                </Link>
                            </span>
                        </h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_set_workExp_related})`,
                            height: '25em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Element>

                <Element className="Chapter" name="set-seniority">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_seniority1,
                                img_set_seniority2,
                                img_set_seniority3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定年資</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將『小於2年工作經驗』設定為必要年資。
                        </ChapterFirstLayerNoListStyle>

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
                                <li>必要（候選人未達必要條件，會被淘汰。搭配履歷評分，如果候選人達到必要條件，會被給予基本分數。 ）</li>
                                <li>偏好（搭配履歷評分，如果候選人達到偏好條件，會被給予較高分數。）</li>
                                <li>完美（搭配履歷評分，如果候選人達到完美條件，會被給予最高分數。）。請依照真實情況酌情填寫。</li>
                            </ul>
                            <li>將游標移到必要欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，選定範例中指定的年資『小於2年工作經驗』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖三。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-target-company">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_target_company1,
                                img_set_target_company2,
                                img_set_target_company3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定目標公司</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將『台灣積體電路製造股份有限公司』設定為完美公司。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>表格會向下展開。將游標移向新增按鈕。</li>
                            <li>
                                將游標移向
                                <span
                                    style={{
                                        background: `url(${icon_circle_add}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕，公司選單會顯示出來，如圖二。選單內容不足，請參照
                                <span className="Text-underline">設定公司、同義字</span>
                                。
                            </li>
                            <li>點擊搜尋鍵，輸入名稱/產業類別進行搜尋。</li>
                            <li>或是點選特定公司。按shift鍵，可連續多選。按Command/CTRL可不連續多選。按新增鍵。</li>
                            <li>成果。如圖三。若要多選，可重複步驟3-5。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-exclude-company">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_exclude_company1,
                                img_set_exclude_company2,
                                img_set_exclude_company3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定排除公司</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將關係企業『雲敬銀行』設定為排除公司。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>表格會向下展開。將游標移排除公司欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>
                                選單會展開如圖二，選定範例中指定的公司『雲敬銀行股份有限公司』。選單內容不足，請參照
                                <span className="Text-underline">設定公司、同義字</span>
                                。
                            </li>
                            <li>成果。如圖三。若要多選，可重複步驟3。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-skills-related" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>設定與技能相關的條件：
                            <span className="Text-underline">
                                <Link to="set-license" smooth={true} duration={500}>
                                證照
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-expertise" smooth={true} duration={500}>
                                專長
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-computer-skills" smooth={true} duration={500}>
                                電腦技能
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-language-skills" smooth={true} duration={500}>
                                語言能力
                                </Link>
                            </span>、
                            <span className="Text-underline">
                                <Link to="set-driving-license" smooth={true} duration={500}>
                                駕照
                                </Link>
                            </span>
                        </h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_set_skills_related})`,
                            height: '25em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Element>

                <Element className="Chapter" name="set-license">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_license1,
                                img_set_license2,
                                img_set_license3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定證照</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將TOEIC設定為必要證照。
                        </ChapterFirstLayerNoListStyle>

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
                            <li>表格會向下展開。UI設計是採取選單模式。如圖二。</li>
                            <li>將游標移到必要欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖二，選定範例中指定的證照『TOEIC』。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>成果。如圖三。若要多選，可重複步驟3-4。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-expertise">
                    <MultiImageContainer>
                        <MultiImage srcArray={[img_set_expertise_and_computer_skills]}/>
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定專長</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將TOEIC設定為必要證照。
                        </ChapterFirstLayerNoListStyle>

                        <div
                            style={{
                                backgroundColor: '#3ab2a6',
                                width: '70%',
                                height: '10em',
                                marginLeft: '2em',
                                marginTop: '2em',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            video
                        </div>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-computer-skills">
                    <MultiImageContainer>
                        <MultiImage srcArray={[img_set_expertise_and_computer_skills]}/>
                    </MultiImageContainer>


                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定電腦技能</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將TOEIC設定為必要證照。
                        </ChapterFirstLayerNoListStyle>
                        <div
                            style={{
                                backgroundColor: '#3ab2a6',
                                width: '70%',
                                height: '10em',
                                marginLeft: '2em',
                                marginTop: '2em',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            video
                        </div>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-language-skills">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_set_language_skills1,
                                img_set_language_skills2,
                                img_set_language_skills3,
                                img_set_language_skills4,
                                img_set_language_skills5,
                                img_set_language_skills6,
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>設定語言能力</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：將日文設定為必要語文能力，如下。
                        </ChapterFirstLayerNoListStyle>

                        <div
                            style={{
                                background: `url(${img_set_language_skills_form}) 0% 0% / contain no-repeat`,
                                height: '5em',
                                marginLeft: '2em',
                            }}
                        />

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
                                如圖ㄧ。UI設計是採取表格模式。
                            </li>
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_circle_add}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。
                            </li>
                            <li>
                                新增：外語能力視窗會自動談跳出來，如圖二。將游標移到『語系』欄，按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_down}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。
                            </li>
                            <li>選定範例指定語系『日文』，如圖三。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>
                                將游標移到『聽』欄，如圖四，按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_down}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。
                            </li>
                            <li>選定範例指定程度『精通』。</li>
                            <li>重複步驟5-6，完成『說』『讀』『寫』。如圖五，按確定鍵。</li>
                            <li>成果如圖六。</li>
                            <li>如要選多個語系，請重複步驟2-7，完成新增其他語系。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="set-driving-license" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>駕照：按照語言的template，修改成駕照</h1>
                    </div>
                </Element>

                <Element className="Chapter" name="lookup-job">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_lookup_job1,
                                img_lookup_job2,
                                img_lookup_job3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>
                        <ChapterTitleGroup>
                            <h1>查詢職務</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：依照職類『營運企劃』查詢職務
                        </ChapterFirstLayerNoListStyle>
                        <ChapterFirstLayerNoListStyle>
                            進入路徑：首頁->發射台->職缺管理-> 職務。如圖一。
                        </ChapterFirstLayerNoListStyle>

                        <ul className="first-layer">
                            <li>
                                輸入職務名稱或是選擇職類，依照範例點選職類欄，選擇營運企劃，按下
                                <span
                                    style={{
                                        background: `url(${icon_search}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                進行篩選。如圖一。
                            </li>
                            <li>可以選擇資歷、員工類型、進行篩選。依照範例，在類別選擇『我的職缺』，按下『使用』鍵，即可顯示篩選結果。</li>
                            <li>成果如圖三</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-job-example" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>新增職務-範例資料</h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_add_job_example})`,
                            height: '54em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Element>

                <Element className="Chapter" name="add-job">

                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_job1,
                                img_add_job2,
                                img_add_job3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增職務</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            展示範例：新增售前工程師的職務。
                        </ChapterFirstLayerNoListStyle>

                        <ChapterFirstLayerNoListStyle>
                            進入路徑：首頁->發射台->職缺管理-> 職務。如圖一。
                        </ChapterFirstLayerNoListStyle>

                        <ul className="first-layer">
                            <li>參照查詢職務</li>
                            <li>按下右上方『新增』按鈕。</li>
                            <li>進入『新增職務』畫面，如『圖二』。</li>
                            <li>職務名稱：依範例輸入『售前工程師』。</li>
                            <li>完美候選人原型：選擇『售前工程師』，如果選項不足，請參照新增完美候選人原型。</li>
                            <li>職類：選擇『職類』依範例選擇『工程技術』。若職類不足，參照新增內部職類。</li>
                            <li>資歷：選擇『資歷』，依範例選擇『基層人員』。若資歷不足，參照新增資歷。</li>
                            <li>員工類型：依範例選擇『全職』。若員工類型不足，參照新增員工類型。</li>
                            <li>建議職等：依範例輸入職等『7』</li>
                            <li>輸入雇用薪資預算。選擇幣別：『台幣』、輸入年薪薪資範圍-最低薪資：450000、輸入年薪薪資範圍-最低薪資：600000。</li>
                            <li>將『工作內容』與『擔當責任』輸入職務內容。</li>
                            <li>按下『儲存』鍵。</li>
                            <li>成果如圖三。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="lookup-req">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_lookup_req1,
                                img_lookup_req2,
                                img_lookup_req3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>查詢職缺</h1>
                        </ChapterTitleGroup>

                        <ChapterFirstLayerNoListStyle>
                            範例：查詢我的職缺
                        </ChapterFirstLayerNoListStyle>

                        <ul className="first-layer">
                            <li>可以依照類別、招聘區域、工作據點、職類，或是輸入職缺名稱進行篩選。依照範例，在類別選擇『我的職缺』，按下『使用』鍵，即可顯示篩選結果。</li>
                            <li>成果如圖三</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-req-example" style={{flexDirection: 'column'}}>
                    <div className="Chapter-body-title-group" style={{width: '99%'}}>
                        <h1>新增職缺-範例資料</h1>
                    </div>
                    <div
                        style={{
                            background: `url(${img_add_req_example})`,
                            height: '70em',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Element>

                <Element className="Chapter" name="add-req">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_req1, img_add_req2, img_add_req3,
                                img_add_req4, img_add_req5, img_add_req6,
                                img_add_req7, img_add_req8, img_add_req9,
                                img_add_req10, img_add_req11, img_add_req12,
                                img_add_req13, img_add_req14, img_add_req15,
                                img_add_req16, img_add_req17, img_add_req18, img_add_req19,
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>新增職缺</h1>
                        </ChapterTitleGroup>

                        <ul className="first-layer">
                            <li>按下右上方『新增』按鈕，如圖三。</li>
                            <li>進入新增職缺畫面，如圖四。</li>
                            <li>招聘區域：選單會提供招聘人員隸屬的所有招聘區域，選擇該職缺隸屬的招聘區域：『雲敬台灣』。如果招聘區域不足，請參照新增招聘區域。</li>
                            <li>工作據點：選單會提供全公司的工作據點，供招聘人員選擇。選擇『雲敬總公司』。如果工作據點不足，請參照新增工作據點。</li>
                            <li>職務：選擇要招聘的職務名稱『售前工程師』。如果選項不足，請參照新增職務。系統會自動帶出職務與完美候選人原型的預設資料。</li>
                            <li>用人部門：選擇該職缺的部門『營業部』。</li>
                            <li>機密職缺：招聘全程保密，職缺、履歷、甄試等資訊除了招聘團隊之外，其他人都無法取得。勾選即為機密職缺。</li>
                            <li>外部職缺名稱：徵才廣告上顯示的職缺名稱</li>
                            <li>需求人數：預計雇用人數</li>
                            <li>聘僱形式：招聘合約的形式。如果聘僱形式不足，請參照新增雇用類別。</li>
                            <li>高階：如為高階職類，請勾選。</li>
                            <li>是否出差或外派：職務如需出差或外派，請選擇。如果都不需要，請保持空白。</li>
                            <li>出差頻率：前一選項如果選擇出差，請填寫出差頻率（出差頻率＝出差日數/全年日數）</li>
                            <li>班別：酌情選擇班別</li>
                            <li>要輪班：若要輪班，請勾選。</li>
                            <li>休假制度：酌情選擇</li>
                            <li>可上班日：酌情選擇</li>
                            <li>點選職缺要求，系統已經自動帶出完美候選人原型的預設資料，可酌情修改。</li>
                            <li>
                                點擊
                                <span
                                    style={{
                                        background: `url(${icon_circle_add}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕
                            </li>
                            <li>新增：身障類別視窗會彈跳出來，如圖七。</li>
                            <li>將游標移到身障類別欄位，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖八，選定範例中指定的身障類別『顏面損傷』。選單內容不足，選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>將游標移到身障等級欄位如圖九，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖九，選定範例中指定的身障等級『輕度』，如圖十。選單內容不足，選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>需要殘障手冊：如果需要殘障手冊佐證，請勾選。</li>
                            <li>按確定鍵。</li>
                            <li>請在此輸入其他要求：如果有其他職缺要求無法透過選單載明，請在此一欄位表達。</li>
                            <li>測驗項目與面談指南資料是由組織帶入。可酌情微調。</li>
                            <li>招聘人員：將游標移到招聘人員欄位如圖十一，點擊欄位空白處或是右方下三角形。</li>
                            <li>招聘人員：將游標移到招聘人員欄位如圖十一，點擊欄位空白處或是右方下三角形。</li>
                            <li>選單會展開如圖十二，選定範例中指定的招聘人員『盧比』。選單內容不足，請參照<span className="Text-underline">新增帳號</span>。</li>
                            <li>雇用主管：重複步驟31-32，選擇雇用主管。選單內容不足，請參照<span className="Text-underline">新增帳號</span>。</li>
                            <li>職務連絡人：重複步驟31-32，選擇職務連絡人。選單內容不足，請參照<span className="Text-underline">新增帳號</span>。</li>
                            <li>面談人員：如圖十三，重複步驟31-32，選擇面談人員。選單內容不足，請參照<span className="Text-underline">新增帳號</span>。</li>
                            <li>職缺發佈管道：如圖十三，重複步驟31-32，選擇徵才管道。選單內容不足，請電郵好聘support@talentonline.io。</li>
                            <li>按右上方『儲存』鍵，如圖十三。</li>
                            <li>如要生效職缺，參照<span className="Text-underline">生效職缺</span>。</li>
                            <li>如要刊登職缺，請參照<span className="Text-underline">刊登職缺，如圖十五</span>。</li>
                            <li>設定與自動化相關的條件：履歷評分、履歷篩選，如圖十七。</li>
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
                                按鈕。表格會向下展開。如圖十八。
                            </li>
                            <li>
                                履歷評分：若要啟動履歷評分，請將
                                <span
                                    style={{
                                        background: `url(${icon_radio_box}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                開關撥至右方。
                            </li>
                            <li>
                                若要啟動特定項目，請將
                                <span
                                    style={{
                                        background: `url(${icon_radio_box}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                開關撥至右方。項目的狀態若為
                                <span
                                    style={{
                                        background: `url(${icon_cross}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                ，代表該職缺條件未設定。若要啟動，請到職缺要求的頁面進行設定。選單內容不足，請電郵好聘support@talentonline.io。
                            </li>
                            <li>好聘履歷評分可支援星級加權，直覺式地輸入該項目是幾顆星，系統會自動計算出該項目佔整體的比重。</li>
                            <li>成果如圖十七。</li>
                            <li>
                                設定履歷篩選。按下
                                <span
                                    style={{
                                        background: `url(${icon_arrow_up}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。表格會向下展開。如圖十八。
                            </li>
                            <li>
                                履歷篩選：若要啟動履歷篩選，請將
                                <span
                                    style={{
                                        background: `url(${icon_radio_box}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                開關撥至右方。
                            </li>
                            <li>畫面會出現自動分派、自動拒絕的選項，如圖十九，請酌情選擇。若啟動自動分派，通過履歷篩選的履歷會自動分派給用人主管，進入決選階段。若不啟動，招聘人員可自行分派，請參照裁示-分派。若啟動自動拒絕，未能通過履歷篩選的履歷會自動進入給拒絕管理。若不啟動，招聘人員可自行拒絕，請參照裁示-拒絕。倘若履歷篩選、自動分派、自動拒絕都啟動即為全自動初選。</li>
                            <li>
                                若要啟動特定項目，請將
                                <span
                                    style={{
                                        background: `url(${icon_radio_box}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                開關撥至右方。項目的狀態若為
                                <span
                                    style={{
                                        background: `url(${icon_cross}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                ，代表該職缺要求的必要條件未設定。若要啟動，請到職缺要求的頁面進行設定。選單內容不足，請電郵好聘support@talentonline.io。
                            </li>
                            <li>按右上方『儲存』鍵，如圖二十。</li>
                            <li>如要生效職缺，參照<span className="Text-underline">生效職缺</span>。如要接續刊登職缺，請參照<span
                                className="Text-underline">刊登職缺，如圖十五</span>。
                            </li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="req-activation">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_req_activation1,
                                img_req_activation2,
                                img_req_activation3
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>
                        <ChapterTitleGroup>
                            <h1>職缺生效</h1>
                        </ChapterTitleGroup>

                        <ul className="first-layer">
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_start_activation}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。
                            </li>
                            <li>出現『確定要生效？』畫面，按下確定鍵，職缺即刻生效，如圖二。</li>
                            <li>如有任何修正，請按下儲存/生效按鈕，再行生效職缺。</li>
                            <li>如要刊登職缺，請參照<span className="Text-underline">刊登職缺</span>。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="add-req-ad">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_add_req_ad1,
                                img_add_req_ad2
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>刊登職缺廣告</h1>
                        </ChapterTitleGroup>


                        <ul className="first-layer">
                            <li>
                                請確認職缺發布管道已選擇，按下
                                <span
                                    style={{
                                        background: `url(${icon_one_click_publish}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1.4em',
                                        display: 'inline-flex'
                                    }}
                                />
                                一鍵刊登按鈕。
                            </li>
                            <li>
                                出現模擬徵才管道版面的職缺廣告，如圖十七，確定內容後。請按右上角
                                <span
                                    style={{
                                        background: `url(${icon_one_click_publish}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1.4em',
                                        display: 'inline-flex'
                                    }}
                                />
                                一鍵刊登按鈕。職缺即刻送往職缺管道，按其規定程序刊登。
                            </li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="end-receive">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_end_receive1,
                                img_end_receive2
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>截止收件</h1>
                        </ChapterTitleGroup>

                        <ul className="first-layer">
                            <li>
                                如果履歷已經足夠，可按下
                                <span
                                    style={{
                                        background: `url(${icon_end_receive}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕。
                            </li>
                            <li>會出現確定要截止收件？的畫面。按『確定』鍵。徵才廣告會提前下架，生效的職缺也無法再執行增加職缺功能。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="update-req">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_update_req1,
                                img_update_req2
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>

                        <ChapterTitleGroup>
                            <h1>更新刊登</h1>
                        </ChapterTitleGroup>

                        <ul className="first-layer">
                            <li>
                                請修改職缺內容，按下
                                <span
                                    style={{
                                        background: `url(${icon_save_activate}) 0% 0% / contain no-repeat`,
                                        width: '3em',
                                        height: '1.4em',
                                        display: 'inline-flex'
                                    }}
                                />
                                儲存/生肖按鈕，如圖一。
                            </li>
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_update_req1}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1em',
                                        display: 'inline-flex'
                                    }}
                                />
                                更新刊登按鈕。
                            </li>
                            <li>
                                出現模擬徵才管道版面的職缺廣告，如圖二，確定內容後。請按右上角
                                <span
                                    style={{
                                        background: `url(${icon_update_req2}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1.4em',
                                        display: 'inline-flex'
                                    }}
                                />
                                更新刊登按鈕。更新職缺即刻送往職缺管道，按其規定程序再行刊登。
                            </li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="end-req">
                    <MultiImageContainer>
                        <MultiImage
                            srcArray={[
                                img_end_req1,
                                img_end_req2
                            ]}
                        />
                    </MultiImageContainer>

                    <ChapterBody>
                        <ChapterTitleGroup>
                            <h1>結束招聘</h1>
                        </ChapterTitleGroup>

                        <ul className="first-layer">
                            <li>
                                按下
                                <span
                                    style={{
                                        background: `url(${icon_end_req}) 0% 0% / contain no-repeat`,
                                        width: '4em',
                                        height: '1em',
                                        display: 'inline-flex'
                                    }}
                                />
                                按鈕，如圖一。
                            </li>
                            <li>出現確定招聘結束？畫面。如圖二，按下確定鍵。</li>
                        </ul>
                    </ChapterBody>
                </Element>

                <Element className="Chapter" name="hired-onhold-notification-onhold" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={hired_onhold_notification_onhold_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    hired_onhold_notification_onhold1,
                                    hired_onhold_notification_onhold2,
                                ]}
                            />
                        </MultiImageContainer>
                        <ChapterBody>

                            <ChapterTitleGroup>
                                <h1>錄取/備取作業</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁->發射台->錄取管理->錄取/備取作業
                                <span className="Text-danger">如圖一</span>。
                            </ChapterFirstLayerNoListStyle>

                            <ul className="first-layer">
                                <li>點選下三角形，選擇備取。</li>
                                <li>點選特定備取人選。</li>
                                <li>按下『編輯』圖示。</li>
                                <li>按下決策或是右方下三角形。</li>
                                <li>選擇『錄取』：備取轉錄取。</li>
                                <li>選擇『拒絕』：備取轉拒絕。</li>
                            </ul>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="hired-onhold-notification-hired" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={hired_onhold_notification_hired_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    hired_onhold_notification_hired1,
                                    hired_onhold_notification_hired2,
                                    hired_onhold_notification_hired3,
                                    hired_onhold_notification_hired4,
                                    hired_onhold_notification_hired5,
                                    hired_onhold_notification_hired6,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>錄取/備取作業</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁->發射台->錄取管理->錄取/備取作業
                                <span className="Text-danger">如圖一</span>。
                            </ChapterFirstLayerNoListStyle>

                            <ul className="first-layer">
                                <li>點選下三角形，選擇備取。</li>
                                <li>點選特定備取人選。</li>
                                <li>按下『編輯』圖示。</li>
                                <li>按下決策或是右方下三角形。</li>
                                <li>選擇『錄取』：備取轉錄取。</li>
                                <li>選擇『拒絕』：備取轉拒絕。</li>
                            </ul>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="to-report-list" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_to_report_list_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_to_report_list1,
                                    img_to_report_list2
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>錄取/備取作業</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁->發射台->錄取管理->待報到清單。
                                <span className="Text-danger">如圖一</span>。
                            </ChapterFirstLayerNoListStyle>

                            <ul className="first-layer">
                                <li>點選特定人選。</li>
                                <li>按下編輯。</li>
                                <li>如圖二。員工工號：輸入員工編號。</li>
                                <li>到職日：預計到職日，可酌情修改。</li>
                                <li>聘僱邀約狀態：接受。（唯獨狀態）</li>
                                <li>決策日：人選接受聘僱邀約的日期。（唯獨狀態）</li>
                                <li>電子郵件：提供3個選擇讓ＩＴ建立公司電郵。</li>
                                <li>汽車車號：安排停車位。</li>
                                <li>機車車號：安排停車位。</li>
                                <li>點擊儲存草稿圖示。</li>
                            </ul>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="recruiter-control" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_recruiter_control_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_recruiter_control1
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>招聘指揮台</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁->選才管理->招聘指揮台
                                <span className="Text-danger">如圖一</span>。
                            </ChapterFirstLayerNoListStyle>

                            <ul className="first-layer">
                                <li>『初選候選人』：詳列所有正在進行初選的候選人名單。</li>
                                <li>『決選候選人』：詳列所有進入決選階段的候選人名單。</li>
                                <li>『資歷查核』：詳列用人主管要求查核資歷的候選人名單。點擊資歷查核，操作方式請參照資歷查核。</li>
                                <li>『甄試管理』：
                                    <ul className="second-layer">
                                        <li>待安排/甄試約詢：所有送出甄試約詢的要求。</li>
                                        <li>甄試邀約/已安排：所有已邀約的甄試安排。</li>
                                        <li>甄試變更/待變更：所有要求變更甄試行程的要求。</li>
                                    </ul>
                                </li>
                            </ul>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-search-screening-candidate" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_search_screening_candidate_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_search_screening_candidate1,
                                    img_rc_search_screening_candidate2,
                                    img_rc_search_screening_candidate3,
                                    img_rc_search_screening_candidate4,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>查詢初選階段候選人</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁->選才管理->招聘指揮台。
                                <span className="Text-danger">如圖一</span>。
                            </ChapterFirstLayerNoListStyle>

                            <ul className="first-layer">
                                <li>
                                    點擊『初選候選人』或是右方
                                    <span
                                        style={{
                                            background: `url(${icon_arrow_down}) 0% 0% / contain no-repeat`,
                                            width: '2em',
                                            height: '1.5em',
                                            display: 'inline-flex'
                                        }}
                                    />
                                    『下三角形』圖示，如圖一。有兩個選項，如圖二。
                                    <ul className="second-layer">
                                        <li>選擇初選候選人</li>
                                        <li>選擇職缺</li>
                                    </ul>
                                </li>
                                <li>選擇特定候選人，如圖三。</li>
                                <li>點選編輯圖示，進行處理。</li>
                            </ul>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-review-new-applicant" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_review_new_applicant_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_review_new_applicant1
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>招聘指揮台-審閱新進履歷</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入候選人檔案，如圖四。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                4. 詳列本次應徵紀錄。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                5. 詳列所有應徵紀錄。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                6-11. 詳列候選人履歷。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                12. 詳列後選人註記。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                13. 下達決策。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                14. 下達命令。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                15. 檢視文件格式唯獨履歷。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-review-applied-status" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_review_applied_status_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_review_applied_status1
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>

                            <ChapterFirstLayerNoListStyle>
                                4. 本次應徵紀錄：點擊候選人人名頁面，詳列候選人應徵紀錄，如圖三 。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                a. 增加職缺：若要將人才加入正在徵才的特定職缺，請按
                                <span
                                    style={{
                                        background: `url(${icon_add_req}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                圖示步驟，請參照『 收件匣-轉薦職缺』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                b. 新增通話紀錄：若要紀錄與候選人的通話紀錄，請按
                                <span
                                    style={{
                                        background: `url(${icon_add_text}) 0% 0% / contain no-repeat`,
                                        width: '2em',
                                        height: '1.5em',
                                        display: 'inline-flex'
                                    }}
                                />
                                圖示，相關步驟請參照『收件匣-通話紀錄』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                c. 新增資歷查核紀錄：若要紀錄資歷查核的資料，請按圖示，相關步驟請參照『收件匣- 查核資歷』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                d. 修改應徵狀態：修改應徵狀態，從非主動改成主動。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-refer-req" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_refer_req_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_refer_req1
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                i. 會顯示『新增：職缺輸入畫面』，如圖六。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 選擇『職缺名稱』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 按下『儲存』鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                如果要繼續推薦其他職缺，請重複步驟a-iii。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-add-phone-record" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_add_phone_record_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_add_phone_record1
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                i. 會顯示『新增：通話紀錄』輸入畫面，如圖六。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 選擇通話『類型』。選項不足，請參照<span className="Text-underline">新增通話類型</span>。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 選擇通話『目的』。 選項不足，請參照<span className="Text-underline">新增通話目的</span>。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 選擇通話『開始時間』 ，預設值：現在。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 輸入『分鐘』，預設值：5分鐘。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vi. 選擇『結果』。選項不足，請參照<span className="Text-underline">新增通話結果</span>。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vii. 輸入『說明』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                viii. 按下儲存鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                如果要繼續新增其他通話紀錄，請重複步驟b-viii。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-add-reference-check" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_add_reference_check_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_add_reference_check1
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                i. 會顯示『新增：資歷查核』輸入畫面，如圖六。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 選擇『查核日期』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 輸入『查核人姓名』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 輸入查核人『公司』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 輸入查核人『職位』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vi. 輸入查核人與候選人之間的『關係』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vii. 輸入『電子郵件』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                viii. 輸入『結果』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ix. 按下儲存鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                如果要繼續查核其他資歷，請重複步驟c-ix。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-success-change-applied-status" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_success_change_applied_status_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_success_change_applied_status1,
                                    img_rc_success_change_applied_status2,
                                    img_rc_success_change_applied_status3,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>人才開發-修改應徵狀態</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁->選才管理->招聘指揮台
                                <span className="Text-danger">如圖一</span>。
                            </ChapterFirstLayerNoListStyle>

                            <ul className="first-layer">
                                <li>
                                    點擊
                                    <span
                                        style={{
                                            background: `url(${icon_switch}) 0% 0% / contain no-repeat`,
                                            width: '2em',
                                            height: '1.5em',
                                            display: 'inline-flex'
                                        }}
                                    />
                                    轉換圖示。
                                </li>
                                <li>『非主動到主動應徵』視窗會彈跳出來。</li>
                                <li>若要增加通話紀錄，請將開關撥向右方，操作方式請參照新增<span className="Text-underline">紀錄通話</span>。</li>
                                <li>按確定鍵。</li>
                                <li>成果如圖四。應徵狀態轉為主動。</li>
                            </ul>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-review-all-applied-status" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_review_all_applied_status_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_review_all_applied_status1,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                5. 查詢所有應徵紀錄。：點擊應徵紀錄頁面，詳列候選人所有應徵紀錄，如圖六 。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-review-basic-info" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_review_basic_info_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_review_basic_info1,
                                    img_rc_review_basic_info2,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                6. 點擊『個人基本資料』頁面，詳列個人基本資料，如圖八。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                a. 輸入『姓氏』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                b. 輸入『名字』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                c. 照片：
                                <ChapterSecondLayerNoListStyle>
                                    i. 上傳照片：點擊檔案圖示，參照<span className="Text-underline">上傳圖檔</span>。
                                </ChapterSecondLayerNoListStyle>
                                <ChapterSecondLayerNoListStyle>
                                    ii. 下載照片：點擊下載圖示，參照下載圖檔。
                                </ChapterSecondLayerNoListStyle>
                                <ChapterSecondLayerNoListStyle>
                                    iii. 刪除照片：點擊刪除圖示
                                </ChapterSecondLayerNoListStyle>
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                d. 輸入『<span className="Text-danger">暱名</span>』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                e. 輸入『護照英文名』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                f. 輸入『電子郵件』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                g. 輸入『主要聯絡電話』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                h. 輸入『次要聯絡電話』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                <span className="Text-danger">i. 輸入『聯絡時間/方式』</span>
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                j. 輸入住址
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                k. 輸入『身分證字號』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                l. 輸入『性別』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                m. 輸入『生日』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                n. 輸入『身高』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                o. 輸入『體重』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                p. 輸入『婚姻狀態』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                q. 輸入『兵役狀態』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                r. 輸入『退伍時間』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                s. 選擇『<span className="Text-danger">身份類別</span>』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                t. 選擇『<span className="Text-danger">履歷來源</span>』
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                u. 新增推薦人：請參照『 招聘指揮台 』『新增推薦人』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 新增緊急聯絡人：請參照『 招聘指揮台 』『新增緊急聯絡人』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                w. 黑名單：將候選人列入黑名單，請參照『 招聘指揮台 』『列入黑名單』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                x. 機密候選人：將候選人列入 機密候選人。無法從查詢人才功能查詢到機密候選人。請參照『 招聘指揮台 』『列入機密候選人』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                y. 費用管理：紀錄候選人可報銷的費用。請參照『 招聘指揮台 』『紀錄候選人報銷費用』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                z. 儲存鍵：按『儲存鍵』會自動儲存變動過的個人基本資料。按v
                                <span style={{
                                    background: `url(${icon_add_text}) 0% 0% / contain no-repeat`,
                                    width: '2em',
                                    height: '1.5em',
                                    display: 'inline-flex'
                                }}/>按鈕新增的資料已經在彈跳視窗內儲存過了，即使不按此儲存鍵，資料仍會存在。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-add-referer" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_add_referer_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_add_referer1,
                                    img_rc_add_referer2,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>新增推薦人</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁-> 發射台->選才管理->招聘指揮台。如圖一
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                6. 點擊『個人基本資料』頁面，詳列個人基本資料，如圖一
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                u. 推薦人：
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                i. 按<span style={{
                                background: `url(${icon_add_text}) 0% 0% / contain no-repeat`,
                                width: '2em',
                                height: '1.5em',
                                display: 'inline-flex'
                            }}/> 圖示
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 新增：推薦人視窗會彈跳出來。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 姓名：輸入推薦人姓名。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 公司：輸入推薦人現行在職公司。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 職位：輸入推薦人現行在職職位。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vi. 關係：輸入推薦人與候選人關係。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vii. 電子郵件：輸入推薦人電子郵件。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                viii. 電話：輸入推薦人電話。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ix. 按『儲存』鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                如果要繼續輸入其他推薦人，請重複步驟u-ix。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-add-emergency-contact" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_add_emergency_contact_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_add_emergency_contact1,
                                    img_rc_add_emergency_contact2,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterTitleGroup>
                                <h1>新增緊急聯絡人</h1>
                            </ChapterTitleGroup>

                            <ChapterFirstLayerNoListStyle>
                                進入路徑：首頁-> 發射台->選才管理->招聘指揮台。如圖一
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                6. 點擊『個人基本資料』頁面，詳列個人基本資料，如圖一
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                v. 緊急聯絡人：
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                i. 按<span style={{
                                background: `url(${icon_add_text}) 0% 0% / contain no-repeat`,
                                width: '2em',
                                height: '1.5em',
                                display: 'inline-flex'
                            }}/> 圖示
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 『新增：面談緊急聯絡人』視窗會彈跳出來。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 輸入緊急聯絡人『名字』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 輸輸入緊急聯絡人『姓氏』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 『主要聯絡電話』：輸入緊急聯絡人最常用電話。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vi. 『次要聯絡電話』：輸入緊急聯絡人其他電話。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vii. 住址：輸入緊急聯絡人現行住址含『國家』、『郵遞區號』、『城市』、『區域』、『街道』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                viii. 輸入緊急聯絡人與候選人『關係』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ix. 按『儲存』鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                如果要繼續輸入其他推薦人，請重複步驟v-ix。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-set-black-list" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_set_black_list_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_set_black_list1,
                                    img_rc_set_black_list2,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                w.『列入黑名單』在個人基本資料頁面的下方。如圖三。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                勾選列入黑名單，會顯示輸入畫面，如圖四。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                i. 『黑名單期間（自）』：黑名單生效日期，系統會自動填入今日日期，若要修改日期，請點選右方行事曆圖示，酌情修改。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 『黑名單到期日（至）』是系統根據黑名單生效日期再加上貴組織設定的黑名單期限自動計算而成。若要修改，請參照建立組織，<span
                                className="Text-underline">修改黑名單期限</span>（月份）
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 輸入將候選人設為黑名單的『原因』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 按『儲存』鍵。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-set-confidential" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_set_confidential_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_set_confidential1,
                                    img_rc_set_confidential2,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                x.『機密候選人』在個人基本資料頁面的下方。如圖三。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                勾選機密候選人，會顯示輸入畫面，如圖四。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                i. 輸入將候選人設為機密候選人的『原因』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 按『儲存』鍵。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-record-recruiting-cost" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_record_recruiting_cost_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_record_recruiting_cost1,
                                    img_rc_record_recruiting_cost2,
                                    img_rc_record_recruiting_cost3,
                                    img_rc_record_recruiting_cost4
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                y.『費用管理』在個人基本資料頁面的下方。如圖三
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                y. 勾選 費用管理，如圖四。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                i. 點擊<span style={{
                                background: `url(${icon_circle_add}) 0% 0% / contain no-repeat`,
                                width: '2em',
                                height: '1.5em',
                                display: 'inline-flex'
                            }}/>新增符號。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 會顯示『新增：費用管理』輸入畫面，如圖五。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 輸入費用發生『日期』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 選擇特定費用項目，輸入『花費金額』。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 選擇『貨幣』種類。若在同一天有多項費用，請重複步驟iv-v。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vi. 按確定鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                viii. 若有其他日期的費用，請重複步驟iii-vi。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ix. 按下儲存鍵。
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-review-workExp" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_review_workExp_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_review_workExp1,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                7. 點擊『工作經驗』頁面，詳列個人經歷，如圖九。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                j. 新增工作經驗、<span className="Text-success">編輯</span>工作經驗、<span
                                className="Text-success">刪除</span>工作經驗
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-add-workExp" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_add_workExp_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_add_workExp1,
                                    img_rc_add_workExp2,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                i. 會顯示新增：工作經驗輸入畫面，如圖五。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ii. 到職日
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iii. 離職日
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                iv. 公司
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                v. 職務名稱
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vi. 產業類別
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                vii. 全球人數
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                viii. 主管姓名/職稱
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                ix. 雇用類別
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                x. 在職中
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                xi. 工作地點：國家、城市
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                xii. 薪資：年底薪、年度津貼、總年薪、幣別
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                xiii. 工作內容
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                xiv. 離職原因
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                xv. 按下儲存鍵。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                xvi. 要繼續輸入其他工作經驗，請重複步驟j-vi。
                            </ChapterFirstLayerNoListStyle>

                            <ChapterFirstLayerNoListStyle>
                                8. 點擊『教育』頁面，詳列個人學歷，如圖五。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                k. 新增學歷、<span className="Text-success">編輯學歷</span>、<span className="Text-success">刪除學歷</span>
                            </ChapterFirstLayerNoListStyle>

                        </ChapterBody>
                    </div>
                </Element>

                <Element className="Chapter" name="rc-review-educationExp" style={{flexDirection: 'column'}}>

                    <ChapterCoverImage src={img_rc_review_educationExp_cover}/>

                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '2em'}}>

                        <MultiImageContainer>
                            <MultiImage
                                srcArray={[
                                    img_rc_review_educationExp1,
                                ]}
                            />
                        </MultiImageContainer>

                        <ChapterBody>
                            <ChapterFirstLayerNoListStyle>
                                7. 點擊『工作經驗』頁面，詳列個人經歷，如圖九。
                            </ChapterFirstLayerNoListStyle>
                            <ChapterFirstLayerNoListStyle>
                                j. 新增工作經驗、<span className="Text-success">編輯</span>工作經驗、<span className="Text-success">刪除</span>工作經驗
                            </ChapterFirstLayerNoListStyle>
                        </ChapterBody>
                    </div>
                </Element>


                </body>
            </div>
        );
    }
}

export default General;
