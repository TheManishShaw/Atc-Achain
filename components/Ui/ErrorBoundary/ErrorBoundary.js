import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <div className="">
                <h2 className="font-bold text-2xl">Oops, there is an error!</h2>
                  <h1 className="my-2 text-gray-800 font-bold text-2xl">
                    Looks like you{"'"}ve found the doorway to the great nothing
                  </h1>
                  <p className="my-2 text-gray-800">
                    Sorry about that! Please visit our hompage to get where you
                    need to go.
                  </p>
                  <button
                    type="button"
                    onClick={() => this.setState({ hasError: false })}
                    className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-btn-primary text-white hover:bg-btn-secondary focus:outline-none focus:ring-2 focus:ring-btn-primary focus:ring-opacity-50"
                  >
                    Take me there!
                  </button>
                </div>
              </div>
            {/*   <div>
            <img className="w-72 opacity-50 ml-56 pt-28" src="/assets/icons/svg/bug_fixing.svg" /> 
              </div> */}
            </div>
          </div>
          <div>
            <img  src="/assets/icons/svg/bug_fixing.svg" />
          </div>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
