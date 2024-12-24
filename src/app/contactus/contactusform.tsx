"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

import HoursPage from "./hourspage";

export default function ContactUsForm() {
  const [files, setFiles] = useState([]);

  // دالة تغيير الملفات
  function handleChange(e) {
    // نحول FileList إلى مصفوفة
    const selectedFiles = Array.from(e.target.files);
    // ندمجها مع الملفات السابقة
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    // إذا أردت السماح للمستخدم برفع نفس الملف مجددًا لاحقاً
    e.target.value = null;

    // (اختياري) تستطيع طباعة العدد
    console.log("عدد الملفات:", selectedFiles.length);
  }

  // دالة حذف ملف من المصفوفة
  function handleRemove(index) {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="py-20 px-20 ">
        <p className="text-3xl text-green-400 mb-5">Contact Us</p>
        <div className="md:flex md:justify-between">
          <div className="md:w-1/2">
            <p className="text-3xl text-green-400 mb-10">Get a Free Quote!</p>
            <form action="" className="">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border-b border-green-600 focus:outline-0 mb-10 p-2 text-green-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full border-b border-green-600 focus:outline-0 mb-10 p-2 text-green-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                className="w-full border-b border-green-600 focus:outline-0 mb-10 p-2 text-green-600"
              />
              <input
                type="text"
                name="address"
                placeholder="Address (Street, City, Zip Code)"
                className="w-full border-b border-green-600 focus:outline-0 mb-10 p-2 text-green-600"
              />
              <textarea
                placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
                name="textarea"
                className="w-full border-b border-green-600 focus:outline-0 mb-10 p-2 min-h-36 "
              ></textarea>

              <div className="my-10">
                {/* حقل الملفات */}
                <input
                  type="file"
                  name="uploadfile"
                  id="uploadfile"
                  multiple
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="uploadfile"
                  className="cursor-pointer text-green-600 text-xl"
                >
                  <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                  Attach Files
                </label>

                {/* عرض قائمة الملفات */}
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2 text-sm text-gray-500">
                      Attachments ({files.length})
                    </p>
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-100 p-2 mb-2"
                      >
                        <span>
                          {file.name} ({(file.size / 1024).toFixed(2)} KB)
                        </span>
                        <button
                          onClick={() => handleRemove(index)}
                          className="text-red-600 hover:text-red-800"
                          type="button"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="submit"
                value="SEND"
                className="text-center bg-green-600 text-white w-full cursor-pointer py-4 mt-5 mb-20 drop-shadow-2xl shadow-box-custom hover:bg-green-500"
              />
            </form>
          </div>
          <div className="md:w-1/2 md:px-20">
            <p className="text-2xl text-green-400 mb-5">
              Better yet, see us in person!
            </p>
            <p className="text-xl text-green-400 mb-5">
              We stay in constant communication with our customers until the job
              is done. To get a free quote, or if you have questions or special
              requests, just drop us a line.
            </p>
            <p className="text-2xl text-green-400 mb-5">Hands2Clean</p>
            <p className="text-xl text-green-400 mb-5">
              9687 Main St, Suite C Fairfax, Virginia 22031, United States
            </p>
            <Link href="tel:7038321222" className="text-xl text-green-400 mb-5">
              703-832-1222
            </Link>
            <p className="text-xl text-green-400 mb-10 my-5">Hours</p>
            <HoursPage></HoursPage>
          </div>
        </div>
      </div>
    </>
  );
}
