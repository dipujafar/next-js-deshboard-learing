import dashboardIcon from "@/assets/image/Category.png";
import accIcon from "/public/dashboard/icons/3 User.png";
import addDoctorIcon from "/public/dashboard/icons/addDoctor.png";
import settingIcon from "/public/dashboard/icons/Setting.png";
import termsIcon from "/public/dashboard/icons/terms.png"
import policyIcon from "/public/dashboard/icons/policy.png"

export const links = [
  {
    key: "dashboard",
    icon: dashboardIcon,
    label: "Dashboard",
  },
  {
    key: "accounts",
    icon: accIcon,
    label: "Accounts",
  },
  {
    key: "add-doctor",
    icon: addDoctorIcon,
    label: "Add Doctors",
  },
  [
    {
      key: "setting",
      icon: settingIcon,
      label: "Settings",
    },
    {
      key: "terms-condition",
      icon: termsIcon,
      label: "Terms & Condition",
    },
    {
      key: "privacy-policy",
      icon: policyIcon,
      label: "Privacy Policy",
    },
  ],
];
