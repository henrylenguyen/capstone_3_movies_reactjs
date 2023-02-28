import React from "react";
import "./styles/footer.scss";
import appStore from "assets/images/logo/appStore.png";
import googlePlay from "assets/images/logo/google.png";
import facebook from "assets/images/logo/facebook.png";
import zalo from "assets/images/logo/zalo.png";
import zion from "assets/images/logo/zionjfif.jfif";
import announce from "assets/images/logo/daThongBao-logo.cb85045e.png";
import cgv from "assets/images/logo/cgv.png";
import bhd from "assets/images/logo/bhdpng.png";
import galaxy from "assets/images/logo/galaxy.png";
import star from "assets/images/logo/star.png";
import dongda from "assets/images/logo/dongapng.png";
import beta from "assets/images/logo/beta.jfif";
import zalopay from "assets/images/logo/zalopay.png";
import vietinbank from "assets/images/logo/vietinbank.png";
import lotte from "assets/images/logo/lotte.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container mx-auto py-10 px-6">
        <div className="footer__top pb-10 border-b-2 border-solid border-zinc-100">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="footer__item col-span-1 text-center lg:text-left">
              <h2 className="text-base text-white mb-4 uppercase">TIX</h2>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm inline-block ">
                  FAQ
                </a>
                <a href="#" className="text-sm inline-block">
                  Brand Guidelines
                </a>
              </div>
            </div>

            <div className="footer__item col-span-1 text-center lg:text-left">
              <h2 className="text-base text-white mb-4 uppercase">
                Thỏa thuận
              </h2>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm inline-block">
                  Thỏa thuận sử dụng
                </a>
                <a href="#" className="text-sm inline-block">
                  Chích sách bảo mật
                </a>
              </div>
            </div>

            <div className="footer__item col-span-1 text-center lg:text-left">
              <h2 className="text-base text-white mb-4 uppercase">Đối tác</h2>
              <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={cgv} className="w-8" />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={galaxy} className="w-8" />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={dongda} className="w-8" />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={star} className="w-8" />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={bhd} className="w-8" />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={beta} className="w-8 rounded-full " />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={beta} className="w-8 rounded-full " />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={vietinbank} className="w-8 rounded-full " />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={zalopay} className="w-8 rounded-full " />
                  </a>
                </div>

                <div className="footer__item-container col-span-1">
                  <a href="#">
                    <img src={lotte} className="w-8 rounded-full " />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer__item col-span-1 text-center lg:text-left">
              <h2 className="text-base text-white mb-4 uppercase">Ứng dụng</h2>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="#" className="text-sm inline-block">
                  <img className="w-6" src={appStore} />
                </a>
                <a href="#" src="#" className="text-sm inline-block">
                  <img className="w-6" src={googlePlay} />
                </a>
              </div>
            </div>

            <div className="footer__item col-span-1 text-center lg:text-left">
              <h2 className="text-base text-white mb-4 uppercase">Liên hệ</h2>
              <div className="flex gap-4 justify-center lg:justify-start ">
                <a href="#" className="text-sm inline-block">
                  <img className="w-6" src={facebook} />
                </a>
                <a href="#" src="#" className="text-sm block">
                  <img className="w-6" src={zalo} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom py-6 ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="footer__item col-span-1 flex md:block justify-center">
              <img src={zion} className="w-2/5" />
            </div>
            <div className="footer__item col-span-1 md:col-span-3 text-center md:text-left">
              <h2 className="text-white text-base uppercase mb-4">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </h2>
              <div className="">
                <h6 className="text-white text-sm">
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </h6>
                <h6 className="text-white text-sm">
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                </h6>
                <h6 className="text-white text-sm">
                  Đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </h6>
                <h6 className="text-white text-sm">
                  Số Điện Thoại (Hotline): 1900 545 436
                </h6>
              </div>
            </div>
            <div className="footer__item col-span-1 flex md:block justify-center">
              <img src={announce} className="w-2/5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
