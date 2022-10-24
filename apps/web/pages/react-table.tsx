import { DataTable } from "@omakase-ui/react-table";
import { useMemo } from "react";

import { MockReactTableColumns, MockMembers } from "../../../mocks/members";

const ReactTableExample = () => {
  const columns = useMemo(() => MockReactTableColumns, []);
  return (
    <>
      <h1 className=" text-center text-2xl font-semibold">
        react-table example
      </h1>
      <section className=" container mx-auto">
        <DataTable
          columns={columns}
          data={MockMembers}
          sort={["name", "asc"]}
        />
      </section>
    </>
  );
};

export default ReactTableExample;
