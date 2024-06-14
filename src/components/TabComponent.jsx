import React, { useState } from 'react';
import TabPosts from './TabPosts';
import TabSignature from './TabSignature';
import TabMidia from './TabMidia';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Posts');

  const renderContent = () => {
    switch (activeTab) {
      case 'Posts':
        return <TabPosts />
      case 'Respostas':
        return <TabPosts />
      case 'Assinaturas':
        return <TabSignature />
      case 'Destaques':
        return <TabPosts />
      case 'Mídia':
        return <TabMidia />
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-black h-[6vh] flex justify-around items-center cursor-pointer border-b border-[#2F3336]">
        {['Posts', 'Respostas', 'Assinaturas', 'Destaques', 'Mídia'].map((tab, index) => (
          <div
            key={tab}
            className={`relative w-full h-full flex flex-col items-center justify-center text-[#525659] hover:bg-[#181818] ${
              activeTab === tab ? 'text-[#DCDEDF] font-bold' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tab}</span>
            {activeTab === tab && ( 
              <div className={`absolute bottom-0 h-1 w-14 rounded-full ${index === 2 ? 'bg-[#C936CC] w-20' : 'bg-[#1D9BF0]'} `}></div>
            )}
          </div>
        ))}
      </div>
      <div className="p-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
