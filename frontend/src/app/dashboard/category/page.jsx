import Link from "next/link";

const Category = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-10 mb-10">
        <h4 className="text-2xl font-bold">Category</h4>
        <Link
          href="/dashboard/category/add"
          className="button button-sm button-primary"
        >
          Add Category
        </Link>
      </div>
    </>
  );
};

export default Category;
