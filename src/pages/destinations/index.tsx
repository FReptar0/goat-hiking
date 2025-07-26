import { NextPage } from "next";

import DefaultLayout from "@/pages/layouts/default";
import { UnderConstruction } from "@/components/under-construction";

const DestinationsPage: NextPage = () => {
  return (
    <DefaultLayout>
      <UnderConstruction />
    </DefaultLayout>
  );
};

export default DestinationsPage;
