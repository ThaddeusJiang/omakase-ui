import { Pagination } from "@omakase-ui/react-simple-components";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const query = router.query;
  const currentPage = query.page ? parseInt(query.page as string) : 1;

  const onChangePage = (page) => {
    router.push({
      query: { page },
    });
  };

  return (
    <>
      <h1 className=" text-center text-2xl font-semibold">
        react-simple-components example
      </h1>
      <section className=" container mx-auto">
        <h2 className="text-xl font-semibold">Pagination</h2>
        <Pagination
          start={(currentPage - 1) * 10 + 1}
          end={currentPage * 10 > 10015 ? 10015 : currentPage * 10}
          total={10015}
          currentPage={currentPage}
          totalPage={10}
          onChangePage={onChangePage}
        />
      </section>
    </>
  );
};

export default Page;
