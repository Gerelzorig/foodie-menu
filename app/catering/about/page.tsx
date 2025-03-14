import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col gap-4">
        <div className="animate-fade-in chatterbox text-5xl my-6 text-center md:text-left">
          EVERYONE LOVES THE FLAVOUR
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-semibold">Бидний тухай</div>
            <div>
              2022 оны 02 сард хүргэлтийн гал тогоо нээн ажиллуулан,
              хэрэглэгчдэд бүтээгдэхүүнээ хүргэж эхэлснээр манай Гүчү Чикен
              (Gochu chicken) брэндийн үндсэн суурь тавигдсан. Үйл ажиллагаа
              маань амжилттай явагдаж, хэрэглэгчдэд улам илүү хүрч чадсанаар
              2022 оны 4 сарын 15нд Гүчү Фүүд ХХК байгуулагдан хоол
              үйлдвэрлэлийн салбарт албан ёсоор нэгдсэн.
            </div>
            <div>
              Бид солонгос тусгай жорын шарсан тахианы бүтээгдэхүүнээр үйл
              ажиллагаа явуулдаг бөгөөд анхны салбар болох 95м.кв талбайтай
              25-30 хүний суудалтай Гүчү Кореан Чикэн салбараа хотын төвд
              Сөүлийн гудамжинд 2022.06.01-нд нээсэн.
            </div>
          </div>
          <div
            className="animate-slide-right bg-cover bg-center rounded-lg shadow md:block hidden"
            style={{ backgroundImage: "url('/food/bugalga_honey_sweet.jpg')" }}
          ></div>
          <div className="animate-fade-in rounded-lg overflow-hidden shadow md:hidden block">
            <img src="/food/bugalga_honey_sweet.jpg" alt="delivery" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-semibold">Салбарууд</div>
        <div>
          Улаанбаатар хотод үйл ажиллагаа явуулдаг 6 салбар, хөдөө орон нутагт 3
          салбар, явуулын хоол үйлдвэрлэл үйлчилгээ үзүүлдэг 2 машин болон
          бүтээгдэхүүн хагас боловсруулалтын нэгдсэн бэлтгэл цехтэйгээр үйл
          ажиллагаагаа явуулж байна.
        </div>
        <div className="grid grid-cols-12 mb-8 mx-0 md:mx-36">
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Төв салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2022.12</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Хүүхдийн 100 салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2023.05</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Цирк салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2023.06</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Зуслан салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2023.06</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Яармаг салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2023.08</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Эрдэнэт салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2023.09</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Зайсан салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2023.10</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Хөвсгөл салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2024.09</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Драгон салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2024.12</div>
          <div className="border-r col-span-6 md:col-span-8 font-bold">
            Баян-Өлгий салбар
          </div>
          <div className="text-right col-span-6 md:col-span-4">2024.12</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
