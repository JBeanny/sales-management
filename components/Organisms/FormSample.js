import React from "react";

const FormSample = () => {
  return (
    <div className="w-[500px] mt-8 p-2 bg-light_primary text-primary flex flex-col gap-4 rounded-lg">
      <span className="font-bold text-xl">គម្រូទិន្នន័យ</span>
      <span>
        ឈ្មោះទំនិញ : <span className="text-secondary">ថង់</span>
      </span>
      <span>
        ឈ្មោះបន្ទាប់បន្សំទំនិញ : <span className="text-secondary">ថង់-1</span>
      </span>
      <span>
        តម្លៃ : <span className="text-secondary">៛ 10000</span>
      </span>
      <span>
        ប្រភេទនៃការលក់ : <span className="text-secondary">ជាកញ្ចប់</span>
      </span>
      <span>
        ប្រភេទទំនិញ : <span className="text-secondary">ផ្លាស្ទិច</span>
      </span>
    </div>
  );
};

export default FormSample;
