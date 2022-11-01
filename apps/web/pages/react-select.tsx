import { useRouter } from "next/router";

import React from "react";
import Select, {
  components,
  OptionProps,
  MultiValueGenericProps,
  SingleValueProps,
  NoticeProps,
} from "react-select";
import CreatableSelect from "react-select/creatable";

const MemberSelectInputOption = (props: OptionProps) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          alt="jiang.jifa"
          src="https://avatars.githubusercontent.com/u/17308201?v=4"
          style={{ width: 30, height: 30, borderRadius: "50%" }}
        />
        <div style={{ marginLeft: 10 }}>
          <div style={{ fontWeight: "bold" }}>{props.label}</div>
          <div style={{ fontSize: 12, color: "#999" }}>@{props.label}</div>
        </div>
      </div>
    </components.Option>
  );
};

const MemberSelectMultiValueLabel = (props: MultiValueGenericProps) => {
  return (
    <components.MultiValueLabel {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          alt="jiang.jifa"
          src="https://avatars.githubusercontent.com/u/17308201?v=4"
          style={{ width: 30, height: 30, borderRadius: "50%" }}
        />
        <div style={{ marginLeft: 10 }}>
          <div style={{ fontWeight: "bold" }}>{props.children}</div>
          <div style={{ fontSize: 12, color: "#999" }}>@{props.children}</div>
        </div>
      </div>
    </components.MultiValueLabel>
  );
};

const MemberSelectSingleValue = ({ children, ...props }: SingleValueProps) => (
  <components.SingleValue {...props}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        alt="jiang.jifa"
        src="https://avatars.githubusercontent.com/u/17308201?v=4"
        style={{ width: 30, height: 30, borderRadius: "50%" }}
      />
      <div style={{ marginLeft: 10 }}>
        <div style={{ fontWeight: "bold" }}>{children}</div>
        <div style={{ fontSize: 12, color: "#999" }}>@{children}</div>
      </div>
    </div>
  </components.SingleValue>
);

const NoOptionsMessage = (props: NoticeProps) => {
  return (
    <components.NoOptionsMessage {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontWeight: "bold" }}>{props.children}</div>
      </div>
    </components.NoOptionsMessage>
  );
};

export const Standard = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Select
      options={options}
      isClearable
      components={{
        NoOptionsMessage,
      }}
    />
  );
};

export const SingleMemberSelectInput = () => {
  const options = [
    { value: "TJ", label: "TJ" },
    { value: "ThaddeusJiang", label: "ThaddeusJiang" },
    { value: "jiang.jifa", label: "Jiang Jifa" },
  ];
  return (
    <Select
      options={options}
      components={{
        Option: MemberSelectInputOption,
        SingleValue: MemberSelectSingleValue,
      }}
      isClearable
    />
  );
};

export const MultiMemberSelectInput = () => {
  const options = [
    { value: "TJ", label: "TJ" },
    { value: "ThaddeusJiang", label: "ThaddeusJiang" },
    { value: "jiang.jifa", label: "Jiang Jifa" },
  ];
  return (
    <Select
      options={options}
      components={{
        Option: MemberSelectInputOption,
        MultiValueLabel: MemberSelectMultiValueLabel,
      }}
      isMulti
    />
  );
};

export const CreatableTagInput = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return <CreatableSelect isClearable options={options} isMulti />;
};

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
        react-select example
      </h1>

      <section className=" container mx-auto">
        <h2 className="text-xl font-semibold">Select</h2>
        <Standard />
      </section>

      <section className=" container mx-auto">
        <h2 className="text-xl font-semibold">SingleMemberSelectInput</h2>
        <SingleMemberSelectInput />
      </section>

      <section className=" container mx-auto">
        <h2 className="text-xl font-semibold">MultiMemberSelectInput</h2>
        <MultiMemberSelectInput />
      </section>

      <section className=" container mx-auto">
        <h2 className="text-xl font-semibold">CreatableTagInput</h2>
        <CreatableTagInput />
      </section>
    </>
  );
};

export default Page;
