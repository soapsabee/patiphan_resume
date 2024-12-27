import React from 'react'
import CocLogo from '../../assets/images/PSU_CoC_ENG.png'

export const AboutMe = () => {



    return (
        <>

            <div className='flex flex-col md:flex-row md:pl-40 md:pr-80 mt-[-50px] gap-20 '>

            

                <div className="flex flex-col sm:ml-5 sm:mr-5">
                    <div>
                        <h1 className='text-titleCustom'>SKILLS</h1>
                        <hr />
                    </div>
                    <div className='flex flex-row gap-4 mt-10 sm:flex-wrap'>
                        <div className=" p-1 text-center flex items-center text-white h-[50px]">
                            <svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE" />
                            </svg>
                            <p className='ml-1'>REACT.JS</p>
                        </div>
                        <div className=" p-1 text-center flex items-center text-white h-[50px]">
                            <svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7868 21.556C22.8939 21.4433 23.7338 20.505 23.6956 19.3789C23.6575 18.253 22.703 17.3522 21.5577 17.3522H21.4814C20.2978 17.3897 19.3817 18.3656 19.4199 19.5291C19.4581 20.0921 19.6871 20.58 20.0307 20.9178C18.7327 23.4326 16.7475 25.2717 13.7698 26.8106C11.7464 27.8615 9.6468 28.2369 7.54715 27.9742C5.82918 27.749 4.49301 26.9984 3.65301 25.7596C2.43144 23.9205 2.31695 21.9312 3.34773 19.942C4.07312 18.5157 5.21828 17.4647 5.94367 16.9392C5.79098 16.4513 5.56187 15.6256 5.44738 15.0251C-0.0882044 18.9661 0.484491 24.2959 2.16426 26.8106C3.42402 28.6873 5.98187 29.8509 8.80691 29.8509C9.57039 29.8509 10.3339 29.7757 11.0975 29.5882C15.9841 28.6498 19.6872 25.7972 21.7868 21.556ZM28.5059 16.9018C25.6045 13.5613 21.3287 11.7222 16.4421 11.7222H15.8314C15.4878 11.0466 14.7624 10.5961 13.9607 10.5961H13.8843C12.7009 10.6337 11.7848 11.6095 11.8229 12.7731C11.8611 13.8991 12.8154 14.7999 13.9607 14.7999H14.037C14.8769 14.7624 15.6023 14.2369 15.9077 13.5237H16.5948C19.4963 13.5237 22.2449 14.3494 24.7265 15.9634C26.6352 17.202 28.0096 18.816 28.7731 20.7677C29.4221 22.3441 29.3839 23.883 28.6967 25.1967C27.6278 27.1859 25.8336 28.2744 23.4666 28.2744C21.9395 28.2744 20.4889 27.824 19.7253 27.4862C19.3054 27.8615 18.5418 28.462 18.0073 28.8375C19.649 29.5881 21.3287 30.001 22.9321 30.001C26.597 30.001 29.3076 28.0116 30.3384 26.0224C31.4454 23.8454 31.369 20.0921 28.5059 16.9018ZM9.1123 22.1939C9.15051 23.3199 10.1049 24.2206 11.2502 24.2206H11.3266C12.51 24.1832 13.4262 23.2073 13.388 22.0438C13.3499 20.9177 12.3954 20.017 11.2502 20.017H11.1739C11.0975 20.017 10.9829 20.017 10.9067 20.0544C9.3414 17.5022 8.69242 14.7248 8.92152 11.7221C9.0741 9.47006 9.83769 7.51828 11.1739 5.9043C12.2809 4.51555 14.4188 3.83996 15.8696 3.80252C19.9162 3.7274 21.634 8.68179 21.7486 10.6711C22.2449 10.7837 23.0848 11.0465 23.6575 11.2342C23.1993 5.15382 19.3817 2.00098 15.7169 2.00098C12.2809 2.00098 9.1123 4.44067 7.85242 8.04387C6.09637 12.8481 7.24164 17.4647 9.37949 21.1055C9.18871 21.3682 9.0741 21.7811 9.1123 22.194V22.1939Z" fill="#764ABC" />
                            </svg>
                            <p className='ml-1'>REDUX</p>
                        </div>

                        <div className=" p-1 text-center flex items-center  text-white h-[50px]">
                            <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_typescript</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" fill="#007acc" /></svg>
                            <p className='ml-1'>Typescript</p>

                        </div>
                        <div className=" p-1 text-center flex items-center text-white h-[50px]">
                            <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Next.js icon</title><path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" /></svg>
                            <p className='ml-1'>Next.js</p>

                        </div>
                        <div className=" p-1 text-center flex items-center text-white h-[50px]">
                            <svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B" />
                                <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B" />
                            </svg>
                            <p className='ml-1'>Node.js</p>

                        </div>
                    </div>
                    <div className='flex flex-col mt-5 '>
                        <div>
                            <h1 className='text-titleCustom'>EXPERIENCE</h1>
                            <hr />
                        </div>

                            <div className='p-5'>
                                <div class="relative pl-8 sm:pl-32 py-6 group">
                                    <div class="font-medium text-white mb-1 sm:mb-0">ICON FRAMEWORK</div>
                                    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">AUG , 2021</time>
                                        <div class="text-xl font-bold text-slate-100">Frontend Developer</div>
                                    </div>
                                    <div class="text-gray-400">The products I contributed to developing are called Line Customer Portal, Line Digital Mortgage, and Developer Portal. All are related to real estate services. The goal of Line Customer Portal is to provide services to homeowners who have purchased real estate from the project. Line Digital Mortgage is to provide the public with services to apply for loans to buy a house or condo. And Developer Portal is aimed at making the home sales process for developers easier in a digital format.</div>
                                </div>
                                <div class="relative pl-8 sm:pl-32 py-6 group">
                                    {/* <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The IPO</div> */}
                                    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">CURRENT</time>
                                        {/* <div class="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div> */}
                                    </div>
                                    {/* <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
                                </div>
                            </div>
                    </div>
                    {/* <div>
                        <h1 className='text-titleCustom'>About Me</h1>
                        <div className="">
                            <p className="text-lg text-titleCustom"> ข้อมูลส่วนตัว / การศึกษา</p>
                            <p className="text-sm mt-2 text-gray-400"> ชื่อจริง นาย ปฏิภาณ วิบูลย์ชาติ ชื่อเล่น แจ็ค อายุ {calculateAge()} ปี </p>
                            <p className="text-sm text-gray-400">จบการศึกษาในสาขา วิศวกรรมซอฟต์แวร์ วิทยาลัยการจัดการคอมพิวเตอร์
                            </p>
                            <p className="text-sm text-gray-400">
                                มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต GPA 3.55
                            </p>
                        </div>
                        <div className="col-start-1 w-80 max-sm:w-52 mt-10">
                            <img src={CocLogo}></img>
                        </div>


                    </div> */}
                    {/* <div className=' md:pt-0 ml-20'>
                        <div className="grid grid-cols-2 col-start-1 w-52 gap-1">
                            <p className="text-lg col-span-2 text-titleCustom">SKILLS</p>
                            <div className=" p-1 text-center  text-white">
                                <p>HTML</p>
                            </div>
                            <div className="p-1 text-center bg-red-400 text-white">
                                <p>javascript</p>
                            </div>
                            <div className="p-1 text-center bg-blue-400	 text-white">
                                <p>TypeScript</p>
                            </div>
                            <div className="p-1 text-center bg-cyan-500 text-white">
                                <p>React.js</p>
                            </div>
                            <div className="p-1 text-center bg-indigo-400 text-white">
                                <p>RTK Query</p>
                            </div>
                            <div className="p-1 text-center bg-green-400 text-white">
                                <p>Node.js</p>
                            </div>
                            <div className="col-span-2 p-1 text-center bg-yellow-400 text-white">
                                <p>Git Command</p>
                            </div>
                        </div>
                    </div> */}

                </div>

                {/* <div className="flex flex-wrap md:justify-around md:space-x-24  rounded-full p-10">


                    <div>
                        <p className="text-lg text-titleCustom">สรุปลักษณะของงานที่เคยทำ</p>
                        <p className="text-sm text-gray-400">
                            งานของผมคือรับผิดชอบพัฒนา Web Application ตาม UI/UX Design
                        </p>
                        <p className="text-sm text-gray-400">
                            โดยให้สามารถเข้าใช้งานได้ผ่าน Line Richmenu ( Line API )
                        </p>
                        <p className="text-sm text-gray-400">
                            และพัฒนา Web App CRUD ทั่วไป
                        </p>
                        <p className="text-sm text-gray-400">
                            UI Framework ที่เคยใช้งานได้แก่ MUI , Antd, Tailwind css,
                        </p>
                        <p className="text-sm text-gray-400">
                            มีประสบการณ์พัฒนาในฝั่ง back-end
                        </p>
                    </div>
                    <div className="md:pt-0 pt-6 col-start-2 max-sm:col-start-1">
                        <p className="text-lg text-titleCustom">ประสบการณ์</p>
                        <div class="relative w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-titleCustom">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            <div class="ml-6">
                                <h4 class="font-bold text-titleCustom">Frontend Development.</h4>
                                <p className="text-sm text-gray-400">
                                    บริษัท Icon Framework Co.,Ltd
                                </p>
                                <p className="text-sm text-gray-400">
                                    ตําแหน่ง - FrontEnd Developer
                                </p>
                                <p className="text-sm text-gray-400">
                                    ( React, Nodejs, C# , Line API )
                                </p>
                                <br />
                                <div className="rounded-lg w-20 h-1 bg-bgCustom">
                                    <i className="
                             absolute 
                             border-bgCustom
                             border-t-2
                             border-b-0
                             border-r-2
                             border-l-0 
                             inline-block 
                             p-1
                             transform rotate-45 translate-x-20 -translate-y-1 " style={{
                                        }}></i>
                                    <p className={"text-gray-400"} style={{
                                        position: "absolute",
                                        transform: "translate(110px, -10px)"
                                    }}> 3 ปี </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div> */}

            </div>




        </>
        // <div className={`mx-auto p-10 ${isTabletOrMobile && "mt-20"}`}>

        //     <div className="container w-500 h-full filter drop-shadow-lg bg-white p-10">

        //         <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 ">
        //             <div className="grid gap-4">
        //                 <div className="col-span-2">
        //                     <p className="text-4xl max-sm:text-2xl text-titleCustom"> ปฏิภาณ วิบูลย์ชาติ</p>
        //                 </div>
        //                 {
        //                     isMobile ? <div className="col-start-1 col-span-1 ">
        //                         <p className="text-lg text-titleCustom"> ข้อมูลส่วนตัว</p>
        //                         <p className="text-sm mt-2"> ชื่อจริง นาย ปฏิภาณ วิบูลย์ชาติ </p>
        //                         <p className="text-sm ">ชื่อเล่น แจ็ค อายุ {calculateAge()} ปี</p>
        //                         <p className="text-sm ">จบการศึกษาในสาขา วิศวกรรมซอฟต์แวร์</p>
        //                         <p className="text-sm "> วิทยาลัยการจัดการคอมพิวเตอร์</p>
        //                         <p className="text-sm ">มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต</p>
        //                     </div>
        //                         :
        //                         <div className="col-start-1 col-span-1 ">
        //                             <p className="text-lg text-titleCustom"> ข้อมูลส่วนตัว / การศึกษา</p>
        //                             <p className="text-sm mt-2"> ชื่อจริง นาย ปฏิภาณ วิบูลย์ชาติ ชื่อเล่น แจ็ค อายุ {calculateAge()} ปี </p>
        //                             <p className="text-sm ">จบการศึกษาในสาขา วิศวกรรมซอฟต์แวร์ วิทยาลัยการจัดการคอมพิวเตอร์
        //                             </p>
        //                             <p className="text-sm ">
        //                                 มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต GPA 3.55
        //                             </p>
        //                         </div>
        //                 }

        //                 <div className="col-start-1 w-80 max-sm:w-52">
        //                     <img src={CocLogo}></img>
        //                 </div>

        //                 <div className="grid grid-cols-2 col-start-1 w-52 gap-1">
        //                     <p className="text-lg col-span-2 text-titleCustom">ทักษะทางสาขา</p>
        //                     <div className=" p-1 text-center bg-gray-400 text-white">
        //                         <p>HTML</p>
        //                     </div>
        //                     <div className="p-1 text-center bg-red-400 text-white">
        //                         <p>javascript</p>
        //                     </div>
        //                     <div className="p-1 text-center bg-blue-400	 text-white">
        //                         <p>TypeScript</p>
        //                     </div>
        //                     <div className="p-1 text-center bg-cyan-500 text-white">
        //                         <p>React.js</p>
        //                     </div>
        //                     <div className="p-1 text-center bg-indigo-400 text-white">
        //                         <p>RTK Query</p>
        //                     </div>
        //                     <div className="p-1 text-center bg-green-400 text-white">
        //                         <p>Node.js</p>
        //                     </div>
        //                     <div className="col-span-2 p-1 text-center bg-yellow-400 text-white">
        //                         <p>Git Command</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="grid gap-4">
        //                 <div className="col-start-2 max-sm:col-start-1">
        //                     <p className="text-lg text-titleCustom">ประสบการณ์</p>
        //                     <p className="text-sm">
        //                         บริษัท Icon Framework Co.,Ltd
        //                     </p>
        //                     <p className="text-sm">
        //                         ตําแหน่ง - FrontEnd Developer
        //                     </p>
        //                     <p className="text-sm">
        //                         ( React, Nodejs, C# , Line API )
        //                     </p>
        //                     <br />
        //                     <div className="rounded-lg w-20 h-1 bg-bgCustom">
        //                         <i className="
        //                     absolute 
        //                     border-bgCustom
        //                     border-t-2
        //                     border-b-0
        //                     border-r-2
        //                     border-l-0 
        //                     inline-block 
        //                     p-1
        //                     transform rotate-45 translate-x-20 -translate-y-1 " style={{
        //                             }}></i>
        //                         <p style={{
        //                             position: "absolute",
        //                             transform: "translate(110px, -10px)"
        //                         }}> 3 ปี </p>

        //                     </div>

        //                 </div>

        //                 <div className="col-start-2 col-end-3 col-span-1 max-sm:col-start-1">
        //                     <p className="text-lg text-titleCustom">สรุปลักษณะของงานที่เคยทำ</p>
        //                     <p className="text-sm">
        //                         งานของผมคือรับผิดชอบพัฒนา Web Application ตาม UI/UX Design โดยให้สามารถเข้าใช้งานได้ผ่าน Line Richmenu ( Line API ) และพัฒนา Web App CRUD ทั่วไป
        //                     </p>
        //                     <p className="text-sm">

        //                     </p>
        //                     <p className="text-sm">
        //                         UI Framework ที่เคยใช้งานได้แก่ MUI , Antd, Tailwind css,
        //                         มีประสบการณ์พัฒนาในฝั่ง back-end เล็กน้อย
        //                     </p>
        //                 </div>


        //                 <div className="col-start-2 max-sm:col-start-1">
        //                     <p className="text-lg text-titleCustom">ติดต่อ</p>
        //                     <p className="text-sm">patiphan.soap@gmail.com</p>
        //                     <p className="text-sm">062-053-1717</p>

        //                 </div>
        //             </div>



        //         </div>



        //     </div>

        // </div >
    )
}
