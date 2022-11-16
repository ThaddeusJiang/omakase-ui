import { AddressForm } from "@omakase-ui/react-e-components";

const Page = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className=" text-center text-2xl font-semibold">AddressForm</h1>
      <section className=" container mx-auto max-w-xl rounded p-4">
        <AddressForm onSubmit={onSubmit} disableAutoComplete={true} />
      </section>
    </>
  );
};

export default Page;
