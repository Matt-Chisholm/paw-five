import react from "react";
import sit from "./images/sit.svg";


export default function TutorialItem(props) {
  return (
    <div
      className={`tutorial-item ${props.level}`}
      onClick={() => {
        props.onClick();
        props.changeBackButtonAction();
        props.changeBackButtonText("Back to Tutorials");
      }}
    >
      <div className={`icon __${props.name}`}>
        {/* {props.icon} */}
        {props.name === 'Sitting' && 
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5399 4.788C22.3719 4.188 23.3399 4 23.9999 4H26.8919C27.7979 3.99993 28.687 4.24602 29.4639 4.712L33.0299 6.852C33.3258 7.02973 33.5706 7.28098 33.7405 7.58133C33.9105 7.88167 33.9999 8.22089 33.9999 8.566V11C33.9999 11.7956 33.6839 12.5587 33.1213 13.1213C32.5587 13.6839 31.7956 14 30.9999 14H29.9999V30.076C30.8419 30.206 31.6859 30.52 32.3899 31.106C33.4099 31.954 33.9999 33.26 33.9999 35C33.9999 35.2652 33.8946 35.5196 33.707 35.7071C33.5195 35.8946 33.2652 36 32.9999 36H9.99994C8.74116 36.0001 7.51421 35.6044 6.49277 34.8687C5.47132 34.1331 4.70712 33.0948 4.30833 31.9008C3.90954 30.7069 3.89635 29.4178 4.27065 28.2159C4.64494 27.0141 5.38775 25.9604 6.39394 25.204C6.60623 25.0509 6.8701 24.9871 7.1289 25.0263C7.38771 25.0655 7.62081 25.2047 7.77816 25.4139C7.93551 25.6231 8.00456 25.8856 7.97049 26.1451C7.93642 26.4047 7.80195 26.6405 7.59594 26.802C6.92487 27.3062 6.42941 28.0087 6.17971 28.81C5.93 29.6114 5.93872 30.471 6.20461 31.2671C6.4705 32.0633 6.9801 32.7556 7.66125 33.246C8.3424 33.7365 9.16058 34.0003 9.99994 34C10.5759 34 10.9399 33.86 11.1799 33.7C11.4172 33.5363 11.607 33.3127 11.7299 33.052C11.8906 32.7234 11.9825 32.3654 11.9999 32V31.91L12.0079 31.69C12.0743 30.5323 12.2483 29.3834 12.5279 28.258C13.0539 26.158 14.1199 23.466 16.2919 21.292C19.9799 17.606 19.9999 12.662 19.9999 11V8C19.9999 6.474 20.6599 5.424 21.5399 4.788ZM21.8479 13.8C21.5379 16.312 20.5899 19.824 17.7079 22.708C15.8799 24.534 14.9459 26.842 14.4699 28.742C14.222 29.7382 14.0666 30.7552 14.0059 31.78C14.0033 31.838 14.0013 31.896 13.9999 31.954V32.066L13.9919 32.2C13.9477 32.8275 13.7777 33.4396 13.4919 34H25.8379C25.6379 33.36 25.2319 32.702 24.5339 32.336C24.0578 32.1001 23.5311 31.9847 22.9999 32H20.9999C20.7347 32 20.4804 31.8946 20.2928 31.7071C20.1053 31.5196 19.9999 31.2652 19.9999 31C19.9999 30.7348 20.1053 30.4804 20.2928 30.2929C20.4804 30.1054 20.7347 30 20.9999 30H22.9999C23.3519 30 23.6839 30.028 23.9999 30.08V25C23.9999 24.7348 24.1053 24.4804 24.2928 24.2929C24.4804 24.1054 24.7347 24 24.9999 24C25.2652 24 25.5195 24.1054 25.707 24.2929C25.8946 24.4804 25.9999 24.7348 25.9999 25V30.896C27.1599 31.732 27.6939 32.976 27.8959 34H31.8959C31.7459 33.344 31.4459 32.922 31.1099 32.644C30.5959 32.214 29.8499 32 28.9999 32C28.7347 32 28.4804 31.8946 28.2928 31.7071C28.1053 31.5196 27.9999 31.2652 27.9999 31V13C27.9999 12.7348 28.1053 12.4804 28.2928 12.2929C28.4804 12.1054 28.7347 12 28.9999 12H30.9999C31.2652 12 31.5195 11.8946 31.707 11.7071C31.8946 11.5196 31.9999 11.2652 31.9999 11V8.566L28.4359 6.426C27.9694 6.1467 27.4357 5.99945 26.8919 6H23.9999C23.6599 6 23.1279 6.11 22.7099 6.412C22.3399 6.676 21.9999 7.126 21.9999 8V11C21.9999 11.174 22.0599 11.456 22.2119 11.666C22.3259 11.826 22.5259 12 22.9999 12C23.4739 12 23.6739 11.824 23.7879 11.666C23.9211 11.469 23.9947 11.2378 23.9999 11C23.9999 10.7348 24.1053 10.4804 24.2928 10.2929C24.4804 10.1054 24.7347 10 24.9999 10C25.2652 10 25.5195 10.1054 25.707 10.2929C25.8946 10.4804 25.9999 10.7348 25.9999 11C25.9999 11.494 25.8599 12.212 25.4119 12.834C24.9259 13.508 24.1259 14 22.9999 14C22.607 14.0037 22.2166 13.936 21.8479 13.8V13.8ZM13.9999 32.002L12.9999 32L13.9999 32.002Z" fill="black"/>
          </svg>
        }
        {props.name === 'Bark' && 
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33339 20C3.33339 10.795 10.7951 3.33333 20.0001 3.33333C29.2051 3.33333 36.6667 10.795 36.6667 20C36.6667 29.205 29.2051 36.6667 20.0001 36.6667H3.33339L8.21505 31.785C6.66511 30.2391 5.43595 28.4021 4.59819 26.3796C3.76043 24.3572 3.3306 22.1891 3.33339 20V20ZM11.3801 33.3333H20.0001C22.6371 33.3333 25.215 32.5513 27.4077 31.0863C29.6003 29.6212 31.3093 27.5388 32.3184 25.1024C33.3276 22.6661 33.5917 19.9852 33.0772 17.3988C32.5627 14.8124 31.2928 12.4366 29.4281 10.5719C27.5634 8.7072 25.1877 7.43733 22.6013 6.92286C20.0148 6.40839 17.334 6.67243 14.8976 7.6816C12.4613 8.69077 10.3789 10.3997 8.91379 12.5924C7.44871 14.785 6.66672 17.3629 6.66672 20C6.66672 23.5867 8.08505 26.9417 10.5717 29.4283L12.9284 31.785L11.3801 33.3333V33.3333ZM18.3334 10H21.6667V30H18.3334V10ZM11.6667 15H15.0001V25H11.6667V15ZM25.0001 15H28.3334V25H25.0001V15Z" fill="black"/>
          </svg>          
        }
        {props.name === 'Sing' && 
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.2501 5C21.7776 5 18.0863 8.39375 17.5776 12.735L7.50007 26.9912L6.91382 27.85L7.61757 28.5925L8.63257 29.6087L5.35132 32.85L7.15007 34.65L10.3526 31.4075L12.0701 33.125L12.9688 32.5L27.3051 22.4212C31.6301 21.9 35.0001 18.2125 35.0001 13.75C35.0001 8.93125 31.0688 5 26.2501 5ZM26.2501 7.5C29.7163 7.5 32.5001 10.2837 32.5001 13.75C32.5042 14.9705 32.1509 16.1655 31.4838 17.1875L22.8126 8.515C23.8347 7.84832 25.0297 7.49548 26.2501 7.5V7.5ZM21.0151 10.3125L29.6876 18.985C28.6654 19.6517 27.4704 20.0045 26.2501 20C22.7838 20 20.0001 17.2162 20.0001 13.75C19.9959 12.5295 20.3492 11.3345 21.0163 10.3125H21.0151ZM17.9688 16.485C18.3999 17.77 19.1209 18.9386 20.0759 19.9003C21.0309 20.862 22.1944 21.5912 23.4763 22.0312L12.3826 29.8825L10.1563 27.5787L17.9688 16.485Z" fill="black"/>
          </svg>          
        }
        {props.name === 'Give A Pow' &&
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.125 12.5C32.2597 12.5 31.4138 12.7566 30.6944 13.2373C29.9749 13.7181 29.4142 14.4013 29.083 15.2008C28.7519 16.0002 28.6653 16.8799 28.8341 17.7285C29.0029 18.5772 29.4196 19.3567 30.0314 19.9686C30.6433 20.5804 31.4228 20.9971 32.2715 21.1659C33.1201 21.3347 33.9998 21.2481 34.7992 20.917C35.5987 20.5858 36.2819 20.0251 36.7627 19.3056C37.2434 18.5862 37.5 17.7403 37.5 16.875C37.4959 15.7159 37.0336 14.6055 36.214 13.786C35.3945 12.9664 34.2841 12.5041 33.125 12.5V12.5ZM33.125 18.75C32.7542 18.75 32.3917 18.64 32.0833 18.434C31.775 18.228 31.5346 17.9351 31.3927 17.5925C31.2508 17.2499 31.2137 16.8729 31.286 16.5092C31.3584 16.1455 31.537 15.8114 31.7992 15.5492C32.0614 15.287 32.3955 15.1084 32.7592 15.036C33.1229 14.9637 33.4999 15.0008 33.8425 15.1427C34.1851 15.2846 34.478 15.525 34.684 15.8333C34.89 16.1417 35 16.5042 35 16.875C35 17.3723 34.8025 17.8492 34.4508 18.2008C34.0992 18.5525 33.6223 18.75 33.125 18.75V18.75ZM11.25 16.875C11.25 16.0097 10.9934 15.1638 10.5127 14.4444C10.032 13.7249 9.34867 13.1642 8.54924 12.833C7.74982 12.5019 6.87015 12.4153 6.02148 12.5841C5.17282 12.7529 4.39326 13.1696 3.78141 13.7814C3.16956 14.3933 2.75288 15.1728 2.58407 16.0215C2.41526 16.8701 2.5019 17.7498 2.83303 18.5492C3.16416 19.3487 3.72492 20.032 4.44438 20.5127C5.16385 20.9934 6.00971 21.25 6.875 21.25C8.03406 21.2459 9.14446 20.7836 9.96405 19.964C10.7836 19.1445 11.2459 18.0341 11.25 16.875ZM6.875 18.75C6.50416 18.75 6.14165 18.64 5.83331 18.434C5.52497 18.228 5.28464 17.9351 5.14273 17.5925C5.00081 17.2499 4.96368 16.8729 5.03603 16.5092C5.10838 16.1455 5.28695 15.8114 5.54918 15.5492C5.8114 15.287 6.14549 15.1084 6.50921 15.036C6.87292 14.9637 7.24992 15.0008 7.59253 15.1427C7.93514 15.2846 8.22798 15.525 8.43401 15.8333C8.64003 16.1417 8.75 16.5042 8.75 16.875C8.75 17.3723 8.55246 17.8492 8.20083 18.2008C7.8492 18.5525 7.37228 18.75 6.875 18.75V18.75ZM14.375 13.75C15.2403 13.75 16.0862 13.4934 16.8056 13.0127C17.5251 12.532 18.0858 11.8487 18.417 11.0492C18.7481 10.2498 18.8347 9.37015 18.6659 8.52148C18.4971 7.67282 18.0804 6.89326 17.4686 6.28141C16.8567 5.66956 16.0772 5.25288 15.2285 5.08407C14.3799 4.91526 13.5002 5.0019 12.7008 5.33303C11.9013 5.66416 11.2181 6.22492 10.7373 6.94438C10.2566 7.66385 10 8.50971 10 9.375C10.0041 10.5341 10.4664 11.6445 11.286 12.464C12.1055 13.2836 13.2159 13.7459 14.375 13.75V13.75ZM14.375 7.5C14.7458 7.5 15.1084 7.60997 15.4167 7.816C15.725 8.02202 15.9654 8.31486 16.1073 8.65747C16.2492 9.00008 16.2863 9.37708 16.214 9.7408C16.1416 10.1045 15.9631 10.4386 15.7008 10.7008C15.4386 10.9631 15.1045 11.1416 14.7408 11.214C14.3771 11.2863 14.0001 11.2492 13.6575 11.1073C13.3149 10.9654 13.022 10.725 12.816 10.4167C12.61 10.1084 12.5 9.74584 12.5 9.375C12.5 8.87772 12.6975 8.40081 13.0492 8.04918C13.4008 7.69755 13.8777 7.5 14.375 7.5ZM25.625 13.75C26.4903 13.75 27.3362 13.4934 28.0556 13.0127C28.7751 12.532 29.3358 11.8487 29.667 11.0492C29.9981 10.2498 30.0847 9.37015 29.9159 8.52148C29.7471 7.67282 29.3305 6.89326 28.7186 6.28141C28.1067 5.66956 27.3272 5.25288 26.4785 5.08407C25.6299 4.91526 24.7502 5.0019 23.9508 5.33303C23.1513 5.66416 22.4681 6.22492 21.9873 6.94438C21.5066 7.66385 21.25 8.50971 21.25 9.375C21.2541 10.5341 21.7164 11.6445 22.536 12.464C23.3555 13.2836 24.4659 13.7459 25.625 13.75ZM25.625 7.5C25.9958 7.5 26.3584 7.60997 26.6667 7.816C26.975 8.02202 27.2154 8.31486 27.3573 8.65747C27.4992 9.00008 27.5363 9.37708 27.464 9.7408C27.3916 10.1045 27.2131 10.4386 26.9508 10.7008C26.6886 10.9631 26.3545 11.1416 25.9908 11.214C25.6271 11.2863 25.2501 11.2492 24.9075 11.1073C24.5649 10.9654 24.272 10.725 24.066 10.4167C23.86 10.1084 23.75 9.74584 23.75 9.375C23.75 8.87772 23.9475 8.40081 24.2992 8.04918C24.6508 7.69755 25.1277 7.5 25.625 7.5ZM29.2344 23.25C28.5992 22.9009 28.0391 22.4301 27.586 21.8644C27.1329 21.2987 26.7957 20.6492 26.5938 19.9531C26.1832 18.5213 25.3178 17.2619 24.1282 16.3655C22.9386 15.469 21.4896 14.9841 20 14.9841C18.5104 14.9841 17.0614 15.469 15.8718 16.3655C14.6822 17.2619 13.8168 18.5213 13.4063 19.9531C12.9991 21.3546 12.0559 22.5392 10.7813 23.25C9.557 23.9108 8.58821 24.9611 8.02832 26.2347C7.46844 27.5083 7.34947 28.9322 7.69026 30.281C8.03105 31.6298 8.81211 32.8264 9.90974 33.6811C11.0074 34.5359 12.3588 35 13.75 35C14.5813 34.9992 15.4042 34.8346 16.1719 34.5156C18.617 33.5027 21.3633 33.4971 23.8125 34.5C24.5828 34.83 25.412 35.0001 26.25 35C27.6425 35.0035 28.9964 34.5419 30.0967 33.6884C31.197 32.8348 31.9807 31.6383 32.3235 30.2886C32.6663 28.9389 32.5485 27.5134 31.9889 26.2383C31.4293 24.9631 30.4598 23.9114 29.2344 23.25V23.25ZM26.25 32.5C25.7402 32.5025 25.2352 32.4015 24.7656 32.2031C23.2563 31.5715 21.6361 31.2475 20 31.25C18.3591 31.2504 16.7344 31.5743 15.2188 32.2031C14.7552 32.4033 14.2549 32.5044 13.75 32.5C12.9124 32.5018 12.0982 32.223 11.4375 31.7082C10.7767 31.1934 10.3073 30.4722 10.1041 29.6595C9.90096 28.8469 9.97573 27.9896 10.3165 27.2244C10.6573 26.4592 11.2444 25.8301 11.9844 25.4375C12.9029 24.9302 13.7123 24.2467 14.3665 23.4263C15.0207 22.6059 15.5067 21.6646 15.7969 20.6563C16.0601 19.745 16.6124 18.9439 17.3705 18.3739C18.1286 17.8038 19.0515 17.4955 20 17.4955C20.9485 17.4955 21.8714 17.8038 22.6295 18.3739C23.3876 18.9439 23.9399 19.745 24.2031 20.6563C24.4933 21.6646 24.9793 22.6059 25.6335 23.4263C26.2877 24.2467 27.0971 24.9302 28.0156 25.4375H28.0313C28.7724 25.8308 29.3603 26.4612 29.7008 27.228C30.0413 27.9948 30.1149 28.8536 29.9097 29.6672C29.7045 30.4807 29.2325 31.2019 28.569 31.7155C27.9055 32.2291 27.089 32.5053 26.25 32.5V32.5Z" fill="black"/>
          </svg>           
        }
        {props.name === 'Come' && 
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.8917 34.7033H40V12.3567H9.57667V5.33334L0 14.91L9.57667 24.4867V17.465H34.8917V29.5983H4.98V34.7067L34.8917 34.7033Z" fill="black"/>
          </svg>          
        }
        {props.name === 'Lie Down' && 
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6666 15L19.9999 21.6667L13.3333 15" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30 35H10" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M35 28.3333H5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 5V21.6667" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>          
        }

        {/* {props.name === 'Sitting' &&
        } */}
      </div>
      <div className="right-side">
        <div className="title">
          {props.name}
        </div>
        <div className="level">
          <p>Level: {props.level}</p>
        </div>
      </div>
    </div>
  )
}

