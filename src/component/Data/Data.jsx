// variables
const dashboardIcon = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);
const settingIcon = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const logoutIcon = (
  <svg width="24" height="21" viewBox="0 0 24 21" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.50002 0C1.10219 0 0.720654 0.158037 0.439346 0.439346C0.158037 0.720654 0 1.10219 0 1.50002V19.5003C0 19.8981 0.158037 20.2796 0.439346 20.5609C0.720654 20.8422 1.10219 21.0003 1.50002 21.0003C1.89785 21.0003 2.27939 20.8422 2.56069 20.5609C2.842 20.2796 3.00004 19.8981 3.00004 19.5003V1.50002C3.00004 1.10219 2.842 0.720654 2.56069 0.439346C2.27939 0.158037 1.89785 0 1.50002 0ZM16.9397 13.9397C16.6665 14.2226 16.5153 14.6015 16.5187 14.9948C16.5221 15.3881 16.6799 15.7643 16.958 16.0424C17.2361 16.3206 17.6123 16.4783 18.0056 16.4817C18.3989 16.4851 18.7778 16.334 19.0608 16.0607L23.5608 11.5607C23.842 11.2794 24 10.8979 24 10.5001C24 10.1024 23.842 9.72092 23.5608 9.43963L19.0608 4.93957C18.9224 4.7963 18.7569 4.68202 18.5739 4.60341C18.3908 4.52479 18.194 4.48341 17.9948 4.48168C17.7957 4.47995 17.5981 4.51791 17.4138 4.59333C17.2295 4.66875 17.062 4.78013 16.9211 4.92097C16.7803 5.06181 16.6689 5.22929 16.5935 5.41364C16.5181 5.59799 16.4801 5.79551 16.4818 5.99468C16.4836 6.19385 16.525 6.39069 16.6036 6.57369C16.6822 6.7567 16.7965 6.92222 16.9397 7.06059L18.8793 9.00012H7.5001C7.10227 9.00012 6.72073 9.15816 6.43943 9.43947C6.15812 9.72077 6.00008 10.1023 6.00008 10.5001C6.00008 10.898 6.15812 11.2795 6.43943 11.5608C6.72073 11.8421 7.10227 12.0002 7.5001 12.0002H18.8793L16.9397 13.9397Z"
      fill="#23268C"
    />
  </svg>
);

export const Menu = [
  { title: "Dashboard", icon: dashboardIcon },
  { title: "Setting", icon: settingIcon },
  { title: "Logout", icon: logoutIcon },
];