import { NextPage } from "next";

import DefaultLayout from "@/pages/layouts/default";
import { UnderConstruction } from "@/components/under-construction";

const FAQPage: NextPage = () => {
  return (
    <DefaultLayout>
      <UnderConstruction />
    </DefaultLayout>
  );
};

export default FAQPage;
