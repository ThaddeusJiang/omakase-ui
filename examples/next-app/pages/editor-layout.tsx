import { EditorLayout } from "@omakase-ui/editor-layout";

const App = () => {
  const leftComponent = <div className=" w-full h-full bg-blue-100"></div>;
  const mainComponent = <div className="w-full h-full bg-blue-200"></div>;
  const rightComponent = <div className="w-full h-full bg-blue-400"></div>;
  const bottomComponent = <div className=" w-full h-full bg-blue-300 "></div>;

  return (
    <div>
      <EditorLayout
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        mainComponent={mainComponent}
        bottomComponent={bottomComponent}
      />
    </div>
  );
};

export default App;
