## Configuration

1. Create a `.env` file
   - Rename the [.env.sample](.env.sample) file to `.env` to fix it.

## Installation

```sh
# 1. download all libraries
yarn
# 2. Run project in localhost
yarn start
```
## Features

We create this boilerplate using NestJS's default boilerplate with the following add-on features:

- ***Craco - craco-alias***: hỗ trợ import file
- ***Redux toolkit***: Quản lí state
- ***Shopify/Polaris - Shopify/Polaris-Icon***: UI library
- ***react-apexcharts - apexcharts***: Vẽ biểu đồ
- ***Axios***: call API
- ***dotenv*** :đọc dữ liệu từ file .env
- ***react-error-boundary*** :bắt lỗi project
- ***react-router-dom*** :định tuyến
- ***react-persist*** :lưu state mong muốn vào cookies, khi app reload , tự động cập nhật giá trị từ cookies và state
- ***styled-components*** :Hỗ trợ css
- ***eslint - prettier*** :hỗ trợ fomat code


Please check the `package.json` for more details.


```js
src/ // the source code of the application
│  ├─ api/ // Khai báo các hàm bất đồng bộ xử call API
│  ├─ asset/ // chứa các file tĩnh như file Image , svg ...
│  ├─ components/ // Chứa các Components dùng chung cho cả project
│  ├─ config/ // cấu hình cho project
│  ├─ constants/ // Khai báo hằng số
│  ├─ contexts/ // utility modules
│  ├─ helpers/ // Khai báo các hàm có thể tái sử dụng cho cả project
│  ├─ HOCs/ 
│  ├─ hooks/ 
│  ├─ i18n/
│  │  ├─ en.json/ // xử lí đa ngôn ngữ
│  ├─ pages/ //Dựng UI cho các màn 
│  │  ├─ styled.ts/ // css sử dụng styled-component
│  │  ├─ index.tsx/ // Dựng UI
│  │  ├─ component/ // Dựng Component dùng chung cho riêng page
│  ├─ redux/ // Cấu hình redux
│  │  ├─ store.ts/ // cấu hình store cho redux
│  │  ├─ slice/ // khai báo slice cho các pages
│  ├─ routes/ // Khai báo các route
│  ├─ type/ // Khai báo các Interface
│  ├─ utils/
├─ package.json
├─ README.md
├─ .env.sample
├─ .gitignore
├─ tsconfig.json
```
