import React from "react";

const withErrorBoundary = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.log("Logged error:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div
            style={{
              color: "red",
              backgroundColor: "lightyellow",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <h1>Oops! Đã xảy ra lỗi.</h1>
            <p>{this.state.error.toString()}</p>
          </div>
        );
      }
      return <Component {...this.props} />;
    }
  };
};

export default withErrorBoundary;
