export default function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <div className="auth-tabs">
      <button
        className={activeTab === "signin" ? "active" : ""}
        onClick={() => setActiveTab("signin")}
      >
        Sign In
      </button>

      <button
        className={activeTab === "signup" ? "active" : ""}
        onClick={() => setActiveTab("signup")}
      >
        Sign Up
      </button>
    </div>
  );
}
