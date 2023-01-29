import React, { useEffect, useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-3xl select-none font-bold sm:text-6xl">
          TODO <span className="font-light">LIST</span>
        </h1>
        <i
          onClick={() => setOpenModal(!openModal)}
          className="fa-solid fa-user text-xl sm:text-3xl hover:opacity-40 cursor-pointer duration-200"
        ></i>
      </div>
    </>
  );
}
