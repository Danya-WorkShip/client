import React, { useState } from 'react'
import classes from './CenterTrackPanelPart.module.scss';
import TrackProgressBar from './TrackProgressBar/TrackProgressBar';

const CenterTrackPanelPart = () => {
  const [isPlaying, setIsPlaying] = useState(true) 
  return (
    <div className={classes.CenterTrackPanelPart}>
        <div className={classes.UpperPart}>
          <div className={classes.LeftManagePart}>
            <div className={classes.StreamMusic}><svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.76606 1.32271C3.7503 2.33138 2.94456 3.52888 2.39483 4.84683C1.8451 6.16478 1.56216 7.57736 1.56216 9.00391C1.56216 10.4305 1.8451 11.843 2.39483 13.161C2.94456 14.4789 3.7503 15.6764 4.76606 16.6851C4.90837 16.8314 4.98711 17.0274 4.98533 17.2309C4.98355 17.4343 4.90139 17.6289 4.75654 17.7728C4.61169 17.9166 4.41574 17.9982 4.2109 18C4.00606 18.0017 3.80872 17.9235 3.66137 17.7822C2.50058 16.6294 1.57978 15.2609 0.951563 13.7547C0.323342 12.2485 0 10.6342 0 9.00391C0 7.37362 0.323342 5.75929 0.951563 4.25311C1.57978 2.74692 2.50058 1.37838 3.66137 0.225615C3.80872 0.0842823 4.00606 0.00607813 4.2109 0.00784591C4.41574 0.00961369 4.61169 0.0912123 4.75654 0.235067C4.90139 0.378921 4.98355 0.573521 4.98533 0.776954C4.98711 0.980387 4.90837 1.17638 4.76606 1.32271ZM8.08166 4.61554C6.90998 5.77953 6.25176 7.35803 6.25176 9.00391C6.25176 10.6498 6.90998 12.2283 8.08166 13.3923C8.1543 13.4644 8.21192 13.5501 8.25123 13.6443C8.29054 13.7386 8.31077 13.8396 8.31077 13.9416C8.31077 14.0436 8.29054 14.1446 8.25123 14.2389C8.21192 14.3331 8.1543 14.4188 8.08166 14.4909C8.00903 14.5631 7.92279 14.6203 7.82789 14.6593C7.73298 14.6984 7.63127 14.7185 7.52854 14.7185C7.42582 14.7185 7.3241 14.6984 7.22919 14.6593C7.13429 14.6203 7.04806 14.5631 6.97542 14.4909C6.24975 13.7704 5.6741 12.915 5.28136 11.9735C4.88862 11.0321 4.68648 10.023 4.68648 9.00391C4.68648 7.98484 4.88862 6.97575 5.28136 6.03428C5.6741 5.0928 6.24975 4.23739 6.97542 3.51689C7.12212 3.3712 7.32108 3.28936 7.52854 3.28936C7.736 3.28936 7.93497 3.3712 8.08166 3.51689C8.22836 3.66258 8.31077 3.86018 8.31077 4.06622C8.31077 4.27225 8.22836 4.46985 8.08166 4.61554V4.61554ZM16.9191 3.51689C16.9917 3.44464 17.0779 3.38731 17.1728 3.3482C17.2677 3.30908 17.3695 3.28895 17.4722 3.28895C17.575 3.28895 17.6768 3.30908 17.7717 3.3482C17.8666 3.38731 17.9528 3.44464 18.0254 3.51689C18.751 4.23739 19.3267 5.0928 19.7194 6.03428C20.1122 6.97575 20.3143 7.98484 20.3143 9.00391C20.3143 10.023 20.1122 11.0321 19.7194 11.9735C19.3267 12.915 18.751 13.7704 18.0254 14.4909C17.9527 14.5631 17.8665 14.6203 17.7716 14.6593C17.6767 14.6984 17.575 14.7185 17.4722 14.7185C17.3695 14.7185 17.2678 14.6984 17.1729 14.6593C17.078 14.6203 16.9918 14.5631 16.9191 14.4909C16.8465 14.4188 16.7889 14.3331 16.7496 14.2389C16.7102 14.1446 16.69 14.0436 16.69 13.9416C16.69 13.8396 16.7102 13.7386 16.7496 13.6443C16.7889 13.5501 16.8465 13.4644 16.9191 13.3923C18.0908 12.2283 18.749 10.6498 18.749 9.00391C18.749 7.35803 18.0908 5.77953 16.9191 4.61554C16.8464 4.54347 16.7886 4.45785 16.7493 4.36358C16.7099 4.26932 16.6896 4.16827 16.6896 4.06622C16.6896 3.96416 16.7099 3.86311 16.7493 3.76885C16.7886 3.67458 16.8464 3.58897 16.9191 3.51689ZM20.2347 0.227167C20.3812 0.0817121 20.5799 0 20.7871 0C20.9942 0 21.1929 0.0817121 21.3394 0.227167C23.6833 2.55521 25 5.71254 25 9.00468C25 12.2968 23.6833 15.4542 21.3394 17.7822C21.1921 17.9235 20.9947 18.0017 20.7899 18C20.585 17.9982 20.3891 17.9166 20.2442 17.7728C20.0994 17.6289 20.0172 17.4343 20.0155 17.2309C20.0137 17.0274 20.0924 16.8314 20.2347 16.6851C21.2505 15.6764 22.0562 14.4789 22.606 13.161C23.1557 11.843 23.4386 10.4305 23.4386 9.00391C23.4386 7.57736 23.1557 6.16478 22.606 4.84683C22.0562 3.52888 21.2505 2.33138 20.2347 1.32271C20.0883 1.17721 20.006 0.979897 20.006 0.774162C20.006 0.568426 20.0883 0.371114 20.2347 0.225615V0.227167ZM15.6254 9.00391C15.6254 9.82701 15.2961 10.6164 14.7101 11.1984C14.124 11.7804 13.3292 12.1074 12.5004 12.1074C11.6716 12.1074 10.8767 11.7804 10.2907 11.1984C9.70465 10.6164 9.37541 9.82701 9.37541 9.00391C9.37541 8.18081 9.70465 7.39141 10.2907 6.80939C10.8767 6.22737 11.6716 5.90039 12.5004 5.90039C13.3292 5.90039 14.124 6.22737 14.7101 6.80939C15.2961 7.39141 15.6254 8.18081 15.6254 9.00391V9.00391Z" fill="white"/></svg></div>
            <div className={classes.Shape}><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.75C0 3.55109 0.0688872 3.36032 0.191507 3.21967C0.314127 3.07902 0.480435 3 0.653846 3H1.30769C4.18723 3 6.31223 4.86 7.68138 6.627C8.32215 7.455 8.81254 8.28 9.15385 8.925C9.49385 8.28 9.98554 7.455 10.6263 6.627C11.9955 4.86 14.1205 3 17 3V4.5C14.6488 4.5 12.8507 6.015 11.6045 7.623C10.9306 8.4985 10.3519 9.46456 9.88092 10.5C10.3515 11.5354 10.9298 12.5014 11.6032 13.377C12.852 14.985 14.6514 16.5 17 16.5V18C14.1205 18 11.9955 16.14 10.6263 14.373C10.0764 13.6592 9.58364 12.8901 9.15385 12.075C8.81385 12.72 8.32215 13.545 7.68138 14.373C6.31223 16.14 4.18723 18 1.30769 18H0.653846C0.480435 18 0.314127 17.921 0.191507 17.7803C0.0688872 17.6397 0 17.4489 0 17.25C0 17.0511 0.0688872 16.8603 0.191507 16.7197C0.314127 16.579 0.480435 16.5 0.653846 16.5H1.30769C3.65892 16.5 5.457 14.985 6.70323 13.377C7.37708 12.5015 7.95583 11.5354 8.42677 10.5C7.95624 9.46464 7.37793 8.49858 6.70454 7.623C5.45569 6.015 3.65631 4.5 1.30769 4.5H0.653846C0.480435 4.5 0.314127 4.42098 0.191507 4.28033C0.0688872 4.13968 0 3.94891 0 3.75Z" fill="white"/><path d="M17 6.53821V0.390717C17 0.316447 17.019 0.243723 17.0546 0.181059C17.0903 0.118396 17.1412 0.068388 17.2014 0.0368907C17.2615 0.00539337 17.3285 -0.00628912 17.3944 0.00321122C17.4603 0.0127116 17.5224 0.0430015 17.5734 0.090534L20.8741 3.16428C21.042 3.32063 21.042 3.6083 20.8741 3.76465L17.5734 6.83839C17.5224 6.88593 17.4603 6.91622 17.3944 6.92572C17.3285 6.93522 17.2615 6.92354 17.2014 6.89204C17.1412 6.86054 17.0903 6.81053 17.0546 6.74787C17.019 6.68521 17 6.61248 17 6.53821V6.53821ZM17 20.6093V14.4618C17 14.3875 17.019 14.3148 17.0546 14.2521C17.0903 14.1895 17.1412 14.1395 17.2014 14.108C17.2615 14.0765 17.3285 14.0648 17.3944 14.0743C17.4603 14.0838 17.5224 14.1141 17.5734 14.1616L20.8741 17.2354C21.042 17.3917 21.042 17.6794 20.8741 17.8357L17.5734 20.9095C17.5224 20.957 17.4603 20.9873 17.3944 20.9968C17.3285 21.0063 17.2615 20.9946 17.2014 20.9631C17.1412 20.9316 17.0903 20.8816 17.0546 20.8189C17.019 20.7563 17 20.6836 17 20.6093V20.6093Z" fill="white"/></svg></div>
          </div>
          <div className={classes.CenterManagePart}>
            <div className={classes.Previous}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.107929 0.365306C0.00745246 0.566239 -0.029803 3.90178 0.0258921 7.77794L0.126745 14.8253L1.90184 14.9125L3.67655 15L3.78343 11.8513L3.88993 8.70229L9.06882 11.8507C11.9172 13.5822 14.4148 14.92 14.6195 14.8232C15.1388 14.5774 15.1208 0.383154 14.6007 0.137314C14.3858 0.0356958 13.0736 0.654039 11.6842 1.51131C10.2949 2.36888 7.93083 3.80995 6.43008 4.71386L3.70177 6.35759V3.17894V0H1.99667C0.965935 0 0.218943 0.14451 0.107929 0.365306Z" fill="white"/></svg>
            </div>
            {isPlaying
              ?
              <div className={classes.Stop} onClick={() => setIsPlaying(false)}>
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="4" height="16" fill="white"/><rect x="8" width="4" height="16" fill="white"/></svg>
              </div>
              :
              <div className={classes.Play} onClick={() => setIsPlaying(true)}>
                <svg style={{width: 25, height: 25, marginLeft: 2}} fill="white" width="800px" height="800px" viewBox="-7 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.688v18.906c0 0.344 0.156 0.625 0.469 0.813 0.125 0.094 0.344 0.125 0.5 0.125s0.281-0.031 0.438-0.125l16.375-9.438c0.313-0.219 0.5-0.5 0.5-0.844 0-0.313-0.188-0.594-0.5-0.813l-16.375-9.438c-0.563-0.406-1.406 0.094-1.406 0.813z"></path></svg>
              </div>
            }
            <div className={classes.Next}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8921 0.365306C14.9925 0.566239 15.0298 3.90178 14.9741 7.77794L14.8733 14.8253L13.0982 14.9125L11.3234 15L11.2166 11.8513L11.1101 8.70229L5.93118 11.8507C3.08283 13.5822 0.585204 14.92 0.380487 14.8232C-0.138832 14.5774 -0.120769 0.383154 0.399302 0.137314C0.614181 0.0356958 1.9264 0.654039 3.31577 1.51131C4.70514 2.36888 7.06917 3.80995 8.56992 4.71386L11.2982 6.35759V3.17894V0H13.0033C14.0341 0 14.7811 0.14451 14.8921 0.365306Z" fill="white"/></svg>
            </div>
          </div>
          <div className={classes.RightManagePart}>
            <div className={classes.Repeat}><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0014 4.18191V2.71591H5.00135C4.32062 2.71584 3.65112 2.88951 3.05625 3.22047C2.46139 3.55143 1.96082 4.02873 1.60195 4.60719C1.24308 5.18565 1.03778 5.84612 1.00547 6.5261C0.973169 7.20607 1.11494 7.88303 1.41735 8.49291C1.44664 8.55174 1.46405 8.61576 1.46859 8.68132C1.47313 8.74688 1.46472 8.8127 1.44382 8.875C1.42293 8.93731 1.38997 8.9949 1.34682 9.04447C1.30368 9.09404 1.25119 9.13462 1.19235 9.16391C1.13352 9.19319 1.0695 9.2106 1.00394 9.21514C0.938377 9.21968 0.872564 9.21127 0.810256 9.19037C0.747948 9.16948 0.690365 9.13652 0.640795 9.09337C0.591225 9.05023 0.55064 8.99774 0.521355 8.93891C0.142928 8.1765 -0.0346035 7.3301 0.00557431 6.47989C0.0457521 5.62968 0.302309 4.80379 0.750946 4.08047C1.19958 3.35714 1.82544 2.76032 2.56925 2.34653C3.31306 1.93274 4.15019 1.71568 5.00135 1.71591H11.0014V0.249906C11.0014 0.202403 11.0149 0.155888 11.0404 0.115807C11.0659 0.0757274 11.1023 0.0437416 11.1453 0.0235956C11.1884 0.00344966 11.2362 -0.00402258 11.2833 0.00205393C11.3304 0.00813044 11.3749 0.0275042 11.4114 0.0579065L13.7714 2.02391C13.8914 2.12391 13.8914 2.30791 13.7714 2.40791L11.4114 4.37391C11.3749 4.40431 11.3304 4.42368 11.2833 4.42976C11.2362 4.43584 11.1884 4.42836 11.1453 4.40822C11.1023 4.38807 11.0659 4.35609 11.0404 4.31601C11.0149 4.27593 11.0014 4.22941 11.0014 4.18191ZM14.8114 4.26791C14.9301 4.20896 15.0673 4.19955 15.1929 4.24174C15.3186 4.28393 15.4223 4.37427 15.4814 4.49291C15.8598 5.25532 16.0373 6.10171 15.9971 6.95192C15.957 7.80214 15.7004 8.62802 15.2518 9.35134C14.8031 10.0747 14.1773 10.6715 13.4335 11.0853C12.6896 11.4991 11.8525 11.7161 11.0014 11.7159H5.00135V13.1819C5.00134 13.2294 4.98779 13.2759 4.96229 13.316C4.93679 13.3561 4.9004 13.3881 4.85738 13.4082C4.81436 13.4284 4.76649 13.4358 4.71938 13.4298C4.67226 13.4237 4.62786 13.4043 4.59135 13.3739L2.23135 11.4079C2.20322 11.3844 2.18058 11.3551 2.16505 11.3219C2.14952 11.2887 2.14147 11.2525 2.14147 11.2159C2.14147 11.1793 2.14952 11.1431 2.16505 11.1099C2.18058 11.0767 2.20322 11.0474 2.23135 11.0239L4.59135 9.05791C4.62786 9.0275 4.67226 9.00813 4.71938 9.00205C4.76649 8.99598 4.81436 9.00345 4.85738 9.0236C4.9004 9.04374 4.93679 9.07573 4.96229 9.11581C4.98779 9.15589 5.00134 9.2024 5.00135 9.24991V10.7159H11.0014C11.6822 10.7161 12.3518 10.5426 12.9468 10.2117C13.5418 9.88082 14.0425 9.40354 14.4015 8.82505C14.7605 8.24656 14.9659 7.58602 14.9982 6.90597C15.0306 6.22591 14.8888 5.54886 14.5864 4.93891C14.5274 4.82021 14.518 4.68297 14.5602 4.55734C14.6024 4.43171 14.6927 4.32797 14.8114 4.26891V4.26791Z" fill="white"/></svg></div>
            <div className={classes.DownloadTrack}><svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78125 14C0.98845 14 1.18716 14.0843 1.33368 14.2343C1.48019 14.3843 1.5625 14.5878 1.5625 14.8V18.8C1.5625 19.2243 1.72712 19.6313 2.02015 19.9314C2.31317 20.2314 2.7106 20.4 3.125 20.4H21.875C22.2894 20.4 22.6868 20.2314 22.9799 19.9314C23.2729 19.6313 23.4375 19.2243 23.4375 18.8V14.8C23.4375 14.5878 23.5198 14.3843 23.6663 14.2343C23.8128 14.0843 24.0115 14 24.2188 14C24.426 14 24.6247 14.0843 24.7712 14.2343C24.9177 14.3843 25 14.5878 25 14.8V18.8C25 19.6487 24.6708 20.4626 24.0847 21.0627C23.4987 21.6629 22.7038 22 21.875 22H3.125C2.2962 22 1.50134 21.6629 0.915291 21.0627C0.32924 20.4626 0 19.6487 0 18.8V14.8C0 14.5878 0.08231 14.3843 0.228823 14.2343C0.375336 14.0843 0.57405 14 0.78125 14Z" fill="white"/><path d="M11.8427 17.7596C11.9289 17.8358 12.0314 17.8963 12.1442 17.9375C12.257 17.9788 12.3779 18 12.5 18C12.6221 18 12.743 17.9788 12.8558 17.9375C12.9686 17.8963 13.0711 17.8358 13.1573 17.7596L18.7277 12.851C18.9021 12.6973 19 12.489 19 12.2717C19 12.0545 18.9021 11.8461 18.7277 11.6925C18.5534 11.5389 18.317 11.4526 18.0704 11.4526C17.8239 11.4526 17.5874 11.5389 17.4131 11.6925L13.4284 15.2055V0.818115C13.4284 0.601138 13.3306 0.393047 13.1565 0.23962C12.9824 0.086194 12.7462 0 12.5 0C12.2538 0 12.0176 0.086194 11.8435 0.23962C11.6694 0.393047 11.5716 0.601138 11.5716 0.818115V15.2055L7.58689 11.6925C7.41256 11.5389 7.17612 11.4526 6.92958 11.4526C6.68304 11.4526 6.4466 11.5389 6.27227 11.6925C6.09794 11.8461 6 12.0545 6 12.2717C6 12.489 6.09794 12.6973 6.27227 12.851L11.8427 17.7596V17.7596Z" fill="white"/></svg></div>
          </div>
        </div>
        <div className={classes.LowerPart}>
          <TrackProgressBar left={0} right={100} onChange={(e) => {}}/>
        </div>
    </div>
  )
}

export default CenterTrackPanelPart