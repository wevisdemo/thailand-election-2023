
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  return (
    <div className='bg-white'>
      <button className='flex flex-row items-center gap-x-[4px] px-[12px] py-[10px]
        hover:-translate-x-1 transition-all'
        onClick={() => router.back()}>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6.00229C9.61279 6.00229 8.16313 5.76592 7.77778 5.80231C7.15648 5.86099 6.85039 6.07797 6.22222 6.08336C5.18261 6.09228 4.93201 6.10681 3.89892 6.05363C3.66041 6.04136 3.55891 6.02661 3.33333 6.02661C3.56142 6.26053 3.49741 6.54869 3.72865 6.78057C4.59457 7.64889 7.27675 10.1757 6.38759 9.32892C5.72255 8.6956 4.99635 8.10134 4.30471 7.494C3.72001 6.98058 3.07335 6.48546 2.39777 6.08336C2.24099 5.99005 1.84772 5.92705 2.06292 5.80231C2.66754 5.45183 3.26015 5.11307 3.82514 4.70514C4.48991 4.22517 5.17603 3.76555 5.85126 3.2999C5.90459 3.26313 5.98242 3.20969 6.01585 3.15398C6.17108 2.89528 6.54475 2.75736 6.67988 2.5" stroke="#090909" stroke-linecap="round" />
        </svg>
        <div className='typo-ibmplex typo-b6 leading-[150%]'>
          กลับไปหน้าแรก
        </div>
      </button>
      <div className='max-w-[650px] mx-auto'>
        <div className='flex flex-col justify-center items-center py-[78px]
          desktop:py-[62px]'>
          <div className='text-center font-bold typo-h3 typo-kondolar'>เกี่ยวกับโครงการ</div>
        </div>
        <div className='px-[36px] flex flex-col
          desktop:px-0 '>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>เป้าหมาย</div>
            <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>ที่มาของข้อมูล & ข้อจำกัด</div>
            <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>อาสาสมัครร่วมพัฒนา</div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>เขียนโปรแกรม</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>ออกแบบ</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>สืบค้นและรวบรวมข้อมูล</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>บรรณาธิการ</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>ประสานงานและจัดการอื่นๆ</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
          </div>
          <div className='flex flex-col gap-y-[15px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>ดาวน์โหลดข้อมูล</div>
            <ul className='list-inside list-disc'>
              <li><a>data 1 (hyperlink)</a></li>
              <li><a> data 2 (hyperlink)</a></li>
            </ul>
            <button className='flex flex-row gap-[10px] items-center justify-center 
          rounded-[100px] border-black border-[3px]
          py-[10px] px-[20px] mx-auto mb-[20px]
          desktop:my-[60px]'>
              <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.98933 1.72478C1.4893 2.08362 2.23191 8.88525 2.23191 10.1402C2.23191 10.7029 1.89375 12.5669 2.69478 12.5964C4.67992 12.6695 6.68295 12.5964 8.66999 12.5964C11.3602 12.5964 14.2166 12.9588 17.0016 12.9588C20.41 12.9588 20.7717 13.5082 20.41 10.5943C20.41 7.68815 20.2893 5.73103 20.41 3.53671C20.4612 2.60674 21.4508 1.72478 19.863 1.72478C18.271 1.72478 16.679 1.72478 15.087 1.72478C12.7516 1.72478 10.4163 1.72478 8.08089 1.72478C6.73129 1.72478 4.18961 1.57427 2.98933 1" stroke="#090909" stroke-width="2" stroke-linecap="round" />
                <path d="M1.5 1.64722C2.21295 1.73249 2.69391 2.60882 3.27778 2.97034C4.0382 3.44117 5.0721 4.15045 5.74691 4.74237C6.74976 5.62202 8.07882 6.24572 9.2037 6.96332C9.98236 7.46005 10.7919 8.01063 11.5988 8.45183C12.0376 8.69178 13.3283 7.54158 13.8086 7.2941C14.8699 6.74731 15.7758 5.87568 16.8827 5.42756C18.537 4.75782 19.7789 3.04678 21.5 2.49779" stroke="#090909" stroke-width="2" stroke-linecap="round" />
              </svg>
              <div className='typo-b6 leading-[150%] typo-ibmplex font-bold'>
                Feedback
              </div>
            </button>
          </div>
        </div>
        <election-bottom
          index-path="/mpasset"
          about-path="/mpasset/about"
        ></election-bottom>
      </div>
      <election-footer></election-footer>
    </div >
  )
}

export default About

