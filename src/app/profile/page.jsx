const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-7xl font-bold text-center">Hey👋</h1>
      <p className="text-3xl font-bold text-center">Welcome to your profile!</p>
      <div className="flex flex-col mt-10 gap-y-1 items-center justify-center">
        <span className="text-xl font-bold">Name: Md. Ranju</span>
        <span className="text-xl font-bold">Email: ranju.md@gmail.com</span>
      </div>
    </div>
  );
};

export default Profile;
