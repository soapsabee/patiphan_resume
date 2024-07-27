import React from 'react'
import DownloadIcon from '../../assets/icons/download.svg'
import DocumentIcon from '../../assets/icons/document.svg'
import resumePdf from '../../assets/pdf/Patiphan_Resume.pdf'

export const DownloadPDF = () => {
    return (
        <div className="container mx-auto h-screen flex justify-center items-center">
            <div >
                <div className="grid grid-cols-1 text-center">
                    <div className="flex justify-center">
                    <DocumentIcon className="w-20 text-titleCustom" />
                    </div>
                    <p className="text-sm">Patiphan_Resume.pdf</p>
                </div>

                <br />
                <a href={resumePdf} download="Patiphan_Resume">

                    <button className="bg-bgCustom hover:bg-blue-700 text-white py-2 px-4 rounded">
                        <div className="flex space-x-4">
                            <DownloadIcon className="w-5" /> <p className="text-sm ">ดาวน์โหลดไฟล์ Resume</p>
                        </div>

                    </button>
                </a>
            </div>

        </div>
    )
}
