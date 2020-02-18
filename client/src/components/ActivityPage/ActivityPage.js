import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { ActivityTitle } from '../masterCss'
import Button from '../button'
import * as SC from './ActivityPage.style'
import { ReactComponent as TimeIcon } from '../../assets/svgs/activity_time.svg'
import { ReactComponent as AgesIcon } from '../../assets/svgs/activity_ages.svg'
import { ReactComponent as ListeningIcon } from '../../assets/svgs/activity_listening.svg'
import { ReactComponent as UnderstandingIcon } from '../../assets/svgs/activity_understanding.svg'
import { ReactComponent as SocialIcon } from '../../assets/svgs/activity_social.svg'
import { ReactComponent as SpeakingIcon } from '../../assets/svgs/activity_speaking.svg'
import VideoPopup from '../Popup/Popup'
import postFavActivity from '../../utils/postFavActivity'

//props are passed via a router Link so are stored within the location property
function ActivityPage({ currentActivity, userData }) {
  function addToFavourites() {
    const data = {id_activity: currentActivity.id, id_name:userData.userId};
    console.log('our data', data);
    postFavActivity(data).then(console.log).catch(console.log);
  }

  console.log(currentActivity)
  return (
    <SC.ActivityPage>
      <Header buttons />
      <ActivityTitle>{currentActivity.title}</ActivityTitle>
      {/* activity rating */}
      <section className="summary-container">
        <img
          src={currentActivity.image_url}
          alt="activity preview"
          className="activity-preview"
        ></img>
        <div className="details-container">
          <div className="row-container">
            <TimeIcon />
            <p>{currentActivity.duration} mins</p>
          </div>
          <div className="row-container">
            <AgesIcon />
            <p>
              Ages {currentActivity.lower_age_range}-
              {currentActivity.upper_age_range}
            </p>
          </div>
          <div className="row-container">Skills</div>
          {currentActivity.listening_attention && (
            <div className="row-container">
              <ListeningIcon />
              <p>Listening/Attention</p>
            </div>
          )}
          {currentActivity.understanding && (
            <div className="row-container">
              <UnderstandingIcon />
              <p>Understanding</p>
            </div>
          )}
          {currentActivity.speaking && (
            <div className="row-container">
              <SpeakingIcon />
              <p>Speaking</p>
            </div>
          )}
          {currentActivity.social && (
            <div className="row-container">
              <SocialIcon />
              <p>Social Interaction</p>
            </div> 
          )}
        </div>
      </section>
      <p className="activity-description">{currentActivity.description}</p>
      <VideoPopup />
      <Button buttonText="Add to Favourites"  handleClick={addToFavourites} secondary />
      {/* add review button - IGNORE? */}
      {/* reviews component - IGNORE? */}
      <Navbar />
    </SC.ActivityPage>
  )
}

export default ActivityPage
