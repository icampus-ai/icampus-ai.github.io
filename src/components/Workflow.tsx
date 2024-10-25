import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import codeImg from '../assets/code.jpg';
import { checklistItems } from '../constants/index';

interface ChecklistItem {
  title: string;
  description: string;
}

const ChecklistItemCard: React.FC<ChecklistItem> = ({ title, description }) => (
  <div className="flex items-start mt-6">
    <CheckCircle2 className="text-orange-500 w-6 h-6 mr-4" />
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-neutral-500">{description}</p>
    </div>
  </div>
);

const Workflow: React.FC = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Accelerate Your</span> {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Evaluation</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <img src={codeImg} alt="Code" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
        <div className="w-full lg:w-1/2 lg:pl-10">
          {checklistItems.map((item, index) => (
            <ChecklistItemCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;