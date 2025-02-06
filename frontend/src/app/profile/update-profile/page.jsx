import { AvatarUpdate, ProfileUpdate } from "@/sections/profile";

const UpdateProfilePage = () => {
  return (
    <>
      <section className="section"></section>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <ProfileUpdate />
            </div>
            <div className="col-span-4">
              <AvatarUpdate />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProfilePage;
