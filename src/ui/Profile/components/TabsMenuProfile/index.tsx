import React, {useEffect} from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getUserInfoAsync, userInfoSelector} from "../../../../store/userInfoSlicer";

import userProfile from './assets/userProfile.svg'
import settingIcon from './assets/settings.svg'
import payment from './assets/payment.svg'
import referral from './assets/referal.svg'
import arrowLeft from './assets/arrowLeft.svg'

const TabsMenuProfile = () => {
  const userName = useSelector(userInfoSelector);
  console.log("####: userName", userName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoAsync())
  }, []);
  return (
    <div className={s.wrap}>
      <div className={s.titleBlock}>
        <div className={s.name}>
          <p>{userName !== null ? userName.firstName : ""}</p>
          <p>{userName !== null ? userName.lastName : ""}</p>
        </div>
        <div className={s.status}>
          <div className={cn(s.active, s.inactive)}>
            Status
          </div>
          <div className={s.daysLeft}>
            30 days left
          </div>
        </div>
        <div className={s.tabs}>
          <div className={cn(s.item, s.itemActive)}>
            <img src={userProfile} alt="icon"/>
            <p>Profile</p>
          </div>
          <div className={cn(s.item)}>
            <img src={settingIcon} alt="icon"/>
            <p>Account settings</p>
          </div>
          <div className={cn(s.item)}>
            <img src={payment} alt="icon"/>
            <p>Payments</p>
          </div>
          <div className={cn(s.item)}>
            <img src={referral} alt="icon"/>
            <p>Referral</p>
          </div>
          <div className={cn(s.item)}>
            <img src={arrowLeft} alt="icon"/>
            <p>Log out</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TabsMenuProfile;