import React from "react";

function App() {
  return (
    <div>
      <div className="flex justify-center ">
        <img src="/logo2.png" alt="" />
      </div>

      <form className="bg-sky-100  flex flex-col gap-10 p-7 mt-5">
        <h1 className="text-xl  border-b-2 pb-3 border-sky-900">
          Buta Vakansiya
        </h1>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">1. Ad</label>
          <input
            type="text"
            className="border placeholder:p-1  rounded-md focus:outline-none p-2 border-sky-500"
            placeholder="adinizi qeyd edin"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">2. Soyad</label>
          <input
            type="text"
            className="border placeholder:p-1  rounded-md focus:outline-none p-2 border-sky-500"
            placeholder="soyadınızı qeyd edin"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">3. Ata adı</label>
          <input
            type="text"
            className="border placeholder:p-1  rounded-md focus:outline-none p-2 border-sky-500"
            placeholder="ata adınızı qeyd edin"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">3. Əlaqə Nömrəsi</label>
          <input
            type="number"
            className="border placeholder:p-1  rounded-md focus:outline-none p-2 border-sky-500"
            placeholder="əlaqə nömrəsini qeyd edin"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">3. Mail</label>
          <input
            type="number"
            className="border placeholder:p-1  rounded-md focus:outline-none p-2 border-sky-500"
            placeholder="mail adresini qeyd edin"
          />
        </div>

        <button className="border p-2 rounded-md cursor-pointer text-white text-xl font-semibold bg-sky-700">
          Göndər
        </button>
      </form>
    </div>
  );
}

export default App;
