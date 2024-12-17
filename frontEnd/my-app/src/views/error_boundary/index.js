import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Cập nhật state để hiển thị giao diện lỗi
    console.log("Có lỗi chạy vào đây ngay");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Bạn có thể ghi log lỗi ở đây
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Hiển thị giao diện thay thế
      return <h1>Đã xảy ra lỗi. Vui lòng thử lại sau.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
