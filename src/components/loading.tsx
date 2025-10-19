import "./loading.css";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {/* Custom animated loader */}
        <span className="loader"></span>
       
      </div>
    </div>
  );
}