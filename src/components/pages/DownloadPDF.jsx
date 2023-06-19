import React from 'react'
import DownloadIcon from '../../assets/icons/download.svg'
import DocumentIcon from '../../assets/icons/document.svg'
import resumePdf from '../../assets/pdf/Patiphan_Resume.pdf'

export const DownloadPDF = () => {
    return (
        <div class="container mx-auto h-screen flex justify-center items-center">
            <div >
                <div class="grid grid-cols-1 text-center">
                    <div class="flex justify-center">
                    <DocumentIcon class="w-20 text-titleCustom" />
                    </div>
                    <p class="text-sm">Patiphan_Resume.pdf</p>
                </div>

                <br />
                <a href={resumePdf} download="Patiphan_Resume">

                    <button class="bg-bgCustom hover:bg-blue-700 text-white py-2 px-4 rounded">
                        <div class="flex space-x-4">
                            <DownloadIcon class="w-5" /> <p class="text-sm ">ดาวน์โหลดไฟล์ Resume</p>
                        </div>

                    </button>
                </a>
            </div>

        </div>
    )
}
