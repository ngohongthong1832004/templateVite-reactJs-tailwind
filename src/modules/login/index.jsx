import React from "react";

export const LoginModule = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-purple-700 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://truong.hanoi.edu.vn/images/CSDLDiaPhuong/HaNoi/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-lg font-bold uppercase">
            Sở Giáo Dục và Đào Tạo Thành Phố Hà Nội
          </h1>
        </div>
        <span className="text-sm">HOTLINE: 19004740</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
          {/* Left Section - Image */}
          <div className="bg-blue-100 flex items-center justify-center">
            <img
              src="https://truong.hanoi.edu.vn/images/Picsl1.png"
              alt="Report Graphic"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Section - Form */}
          <div className="p-8">
            <div className="mb-6 text-center">
              <h1 className="text-xl font-bold text-purple-700 uppercase">
                Đăng Nhập Hệ Thống
              </h1>
              <p className="text-sm text-gray-500">Quản lý nhân sự</p>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="unit">
                  Thông tin đơn vị
                </label>
                <select
                  id="unit"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="">Thông tin vai trò</option>
                  <option value="1">Quản lý</option>
                  <option value="2">Nhân viên kế toán</option>
                </select>
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  <span className="ml-2 text-sm text-gray-600">Lưu thông tin đăng nhập?</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Quên mật khẩu?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModule;
