import React, { useContext, useState } from "react";

const AppContext = React.createContext();

//(1)Abbiamo bisogno di creare un componente che ci permette di wrappare tutti i componenti che vogliamo abbiano
//accesso tutte le variabili presenti nel context. Lo scopo è di wrappare e far si far si che tutti i componenti
//abbiano accesso alle nostre funzioni,varibili, o state. E per questo wrapperò l'intera applicazione dal file index.js.
const AppProvider = ({ children }) => {
  //A QUESTO PUNTO MI OCCUPO DELLA FUNZIONALITA' DELLA SIDEBAR.
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSideBarOpen(true);
  const closeSidebar = () => setIsSideBarOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //(2)Dopo di che creo direttamente il mio provider che prende il children props:
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        isModalOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  //'children' è tutto ciò che sta all'interno di un tag. In questo caso nel file index.js il nostro children è '<App/>'.
};

//(3)Eportazione del nostro provider e il context: un best-practice è quello di creare un 'custom hook' che ci permette
//di returnare una serie di valori che per noi sono di utilizzo frequente. Una delle regole delle 'custom hook' è che si inizia sempre con 'use':
const useGlobalContext = () => {
  return useContext(AppContext); //E' il modo con il quale si accede ad un determinato context.
};

export { AppProvider, useGlobalContext }; //(4)AppProvider: esportato nel file 'index.js' e useGlobalContext nel file 'Navbar.js'
