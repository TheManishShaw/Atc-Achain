export function CustomError({ message }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl  bg-white px-4 `}
    >
      <h1 className="my-10 px-6">Error message : {message}</h1>
    </div>
  );
}
