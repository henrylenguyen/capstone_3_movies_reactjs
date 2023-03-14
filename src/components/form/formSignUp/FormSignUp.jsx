import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { USER_GROUP } from "constants/constants";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaSignUp } from "schemas";
import CheckboxField from "../form-controls/CheckboxField";
import InputField from "../form-controls/InputField";
import Slide from "@mui/material/Slide";

function FormSignUp({ onSubmit }) {
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: `${USER_GROUP}`,
      hoTen: "",
      retypeMatKhau: "",
      hasAgree: false,
    },
    resolver: yupResolver(schemaSignUp),
  });

  function handleSubmit(values) {
    if (onSubmit) onSubmit(values);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  return (
    <section>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mb-5">
          <InputField label="Tài khoản*" name="taiKhoan" form={form} />
        </div>

        <div className="mb-5">
          <InputField label="Email*" name="email" form={form} />
        </div>

        <div className="mb-5">
          <InputField label="Họ tên*" name="hoTen" form={form} />
        </div>

        <div className="mb-5">
          <InputField label="Số điện thoại*" name="soDt" form={form} />
        </div>

        <div className="mb-5">
          <InputField
            type="password"
            label="Mật khẩu*"
            name="matKhau"
            form={form}
          />
        </div>

        <div className="mb-5">
          <InputField
            type="password"
            label="Nhập lại mật khẩu*"
            name="retypeMatKhau"
            form={form}
          />
        </div>

        <div className="mb-4">
          <CheckboxField
            name="hasAgree"
            form={form}
            label={
              <p>
                Tôi đã đồng ý với{" "}
                <span
                  className="underline text-blue-500 capitalize"
                  onClick={handleOpenDialog}
                >
                  Điều khoản
                </span>{" "}
                của MovieTheater
              </p>
            }
          />
        </div>

        <Button type="submit" className="w-full" variant="contained">
          Đăng ký
        </Button>
      </form>

      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Slide}
      >
        <DialogContent>
          <h2 className="text-3xl uppercase text-blue-500 text-center pb-4 border-b-2 border-zinc-900">
            Điều khoảng chung của MOVIETHEATER
          </h2>
          <p className="mt-4">
            Việc bạn sử dụng website này đồng nghĩa với việc bạn đồng ý với
            những thỏa thuận dưới đây.Nếu bạn không đồng ý, xin vui lòng không
            sử dụng website
          </p>
          <div className="mt-2 mb-4">
            <h4 className="font-bold text-base">
              1. Trách nhiệm của người sử dụng:
            </h4>
            <p>
              Khi truy cập vào trang web này, bạn đồng ý chấp nhận mọi rủi ro.
              MOVIETHEATER và các bên đối tác khác không chịu trách nhiệm về bất
              kỳ tổn thất nào do những hậu quả trực tiếp, tình cờ hay gián tiếp;
              những thất thoát, chi phí (bao gồm chi phí pháp lý, chi phí tư vấn
              hoặc các khoản chi tiêu khác) có thể phát sinh trực tiếp hoặc gián
              tiếp do việc truy cập trang web hoặc khi tải dữ liệu về máy; những
              tổn hại gặp phải do virus, hành động phá hoại trực tiếp hay gián
              tiếp của hệ thống máy tính khác, đường dây điện thoại, phần cứng,
              phần mềm, lỗi chương trình, hoặc bất kì các lỗi nào khác; đường
              truyền dẫn của máy tính hoặc nối kết mạng bị chậm…
            </p>
          </div>

          <div className="mt-2 mb-4">
            <h4 className="font-bold text-base">
              2. Về nội dung trên trang web:
            </h4>
            <p>
              Tất cả những thông tin ở đây được cung cấp cho bạn một cách trung
              thực như bản thân sự việc. MOVIETHEATER và các bên liên quan không
              bảo đảm, hay có bất kỳ tuyên bố nào liên quan đến tính chính xác,
              tin cậy của việc sử dụng hay kết quả của việc sử dụng nội dung
              trên trang web này. Nội dung trên website được cung cấp vì lợi ích
              của cộng đồng và có tính phi thương mại. Các cá nhân và tổ chức
              không được phép sử dụng nội dung trên website này với mục đích
              thương mại mà không có sự ưng thuận của CGV bằng văn bản. Mặc dù
              CGV luôn cố gắng cập nhật thường xuyên các nội dung tại trang web,
              nhưng chúng tôi không bảo đảm rằng các thông tin đó là mới nhất,
              chính xác hay đầy đủ. Tất cả các nội dung website có thể được thay
              đổi bất kỳ lúc nào.
            </p>
          </div>

          <div className="mt-2 mb-4">
            <h4 className="font-bold text-base">3. Về bản quyền:</h4>
            <p>
              MOVIETHEATER là chủ bản quyền của trang web này. Việc chỉnh sửa
              trang, nội dung, và sắp xếp thuộc về thẩm quyền của CGV. Sự chỉnh
              sửa, thay đổi, phân phối hoặc tái sử dụng những nội dung trong
              trang này vì bất kì mục đích nào khác được xem như vi phạm quyền
              lợi hợp pháp của MOVIETHEATER.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default FormSignUp;
