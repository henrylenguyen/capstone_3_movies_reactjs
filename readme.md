# Cấu trúc thư mục của reactjs

- **API:** Nơi chứa đựng các API làm việc với server
- **assets:** Nơi chứa các mục ảnh, âm thanh, videos....
- **components:** Nơi chứa các components tái sử dụng trong dự án
- **config:** Nơi chứa các file config như **_configureStore,rootSaga_**
- **constants:** Nơi chứa các type, constant
- **hooks:** Nơi chứa các hook, custom hook
- **layouts:** Nơi chứa layout khác
- **pages:** Nơi chứa các của pages, ví dụ: Home, Contact,...
- **routes:** Nơi chứa các routes của dự án
- **redux:** Nơi chứa các mục redux của dự án - Slice là mục chứa các tệp liên quan đến redux toolkit - Saga là mục chứa các tệp liên quan đến Redux Saga
- **utils:** Nơi chứa các hàm xử lý logic chung
- **schemas:** Nơi chứa schema dùng để xử lý validation

# Hướng dẫn khởi chạy dự án

### Khởi chạy dự án reactjs:

```
1. Mở terminal
2. npm start
```

# Hướng dẫn khởi tạo dự án vitejs

Vitejs là 1 công cụ build web cực kỳ nhanh và cập nhật nhanh chóng các thay đổi trong mã nguồn của bạn, mà không cần phải tải lại trang web hoặc khởi động lại ứng dụng. Giảm thiểu thời gian tải trang của ứng dụng, và pre-rendering, cho phép bạn tạo ra các trang web tĩnh với thời gian phản hồi nhanh và tối ưu hóa SEO.

```
   npm create vite@latest
```

### Lưu ý khi cài đặt

- **Project name:** Tên của dự án
- **Package name:** Tên gói dự án (để mặc định)
- **Select a framework:** Nếu là dự án react thì chọn react
- **Select a variant**: Tại đây chọn JavaScript
  **_=> Chạy tiếp dòng lệnh mà vitejs hiện ra. Now run: ...._**

# Cài đặt các thư viện cần thiết

## Sass (dùng để viết scss)

```
   npm i sass node-sass
```

## install axios (thư viện hỗ trợ API)

```
  npm i axios
```

## install react-router-dom (thư viện hỗ trợ về router)

```
  npm i react-router-dom
```

## install redux-logger (thư viện hỗ trợ về log thông tin)

```
  npm i redux-logger
```

## install redux saga (thư viện hỗ trợ và làm việc liên quan đến API)

```
  npm i redux-saga
```

## install redux toolkit (thư viện redux toolkit)

```
  npm install @reduxjs/toolkit
```

## install typeScript

```
  npm install typescript --save-dev
```

## install tailwind css

```
  npm install -D tailwindcss
  npx tailwindcss init
```

## install tailwind css dùng vitejs

```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
```

### config tailwind css

```
   content: ["./src/**/*.{html,js}"],
```

### config tailwind css vitejs

```
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

### import tailwind css

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

## install style-component (thư viện css in js)

```
  npm install --save styled-components
```

## install sweetAlert (thư viện về pop up thông báo)

```
  npm install sweetalert2
```

## install react-paginate (quản lý phân trang)

```
  npm i react-paginate
```

## install react-hook-form (quản lý form)

```
  npm i react-hook-form
```

## install yup (quản lý về validate)

```
  npm i yup
```

## install yup hook-form (validate với yup dành cho react-hook-form)

```
  npm install @hookform/resolvers yup
```

## install swiper (thư viện carousel)

```
   npm i swiper
```

## install material UI

```
  npm install @mui/material @emotion/react @emotion/styled
```

## install Ant Design

```
  npm i antd
```

## install loading skeleton

```
  npm i react-loading-skeleton
```

# install momentJS (Format lại date)

```
  npm install moment
```

# install clsx

```
  npm install clsx
```

# install animate.css

```
  npm install animate.css
```
