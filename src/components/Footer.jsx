import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://coinmarketcap.com/currencies/ethereum/">Market</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://www.coinbase.com/"> Exchange</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://www.elliptic.co/crypto-course?utm_feeditemid=&utm_device=c&utm_term=cryptocurrency%20education&utm_source=google&utm_medium=ppc&utm_campaign=Elliptic+Learn+-+Global+-+Atomicdust&hsa_cam=18863736219&hsa_grp=144108225035&hsa_mt=p&hsa_src=g&hsa_ad=634004364123&hsa_acc=1733825540&hsa_net=adwords&hsa_kw=cryptocurrency%20education&hsa_tgt=kwd-356451268060&hsa_ver=3&gclid=CjwKCAjw5dqgBhBNEiwA7PryaD4D6K_WadZJ4CSHvAaVRpRQY_myfvCK_E7CQKkxzVlv1To4eOAi0hoCwm4QAvD_BwE">
          Tutorials</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="nkbihfbeogaeaoehlefnkodbefgpgknn/home.html">Wallets</a></p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2"><a href="mailto:siddhardhasiddhu46@gmail.com"> @siddhardha.com </a></p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs"><a href="mailto:siddhardhasiddhu46@gmail.com"> @siddhardha </a></p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
