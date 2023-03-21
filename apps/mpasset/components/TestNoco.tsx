import React from 'react'
import { getPoliticianList, getPoliticianListCount, IDs003001Csv, IAdditionalPositions, IPreviosJob } from '../models/PoliticianList'

type Props = {}



const Pagination = ({ numPage, pageInfo, handleChangePage }: { numPage: number, pageInfo: IDs003001Csv['pageInfo'], handleChangePage: Function }) => {
  const renderPagination = React.useCallback(() => {
    let content = [];
    for (let i = 1; i < numPage; i++) {
      content.push(<button key={`page-${i}`} className={`border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
      inline-flex justify-center items-center
      wv-ibmplex wv-semibold wv-u5 ${pageInfo.page === i ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleChangePage({ offset: String((i - 1) * pageInfo.pageSize), limit: pageInfo.pageSize })}
      >{i}</button>);
    }
    return content;
  }, [pageInfo, numPage, handleChangePage])

  return (
    <div className='flex flex-row  justify-center gap-x-[2px]'>
      <button className='border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
            inline-flex justify-center items-center disabled:opacity-20'
        disabled={pageInfo.isFirstPage}
        onClick={() => handleChangePage({ offset: String((pageInfo.page - 2) * pageInfo.pageSize), limit: pageInfo.pageSize })}
      >
        <svg width={9} height={12} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.15991 1.41L3.57991 6L8.15991 10.59L6.74991 12L0.749912 6L6.74991 0L8.15991 1.41Z" fill="white" />
        </svg>
      </button>
      {pageInfo && renderPagination()}
      <button className='border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
          inline-flex justify-center items-center disabled:opacity-20'
        disabled={pageInfo.isLastPage}
        onClick={() => handleChangePage({ offset: String((pageInfo.page) * pageInfo.pageSize), limit: pageInfo.pageSize })}
      >
        <svg width={9} height={12} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.840088 1.41L5.42009 6L0.840088 10.59L2.25009 12L8.25009 6L2.25009 0L0.840088 1.41Z" fill="white" />
        </svg>
      </button>
    </div>
  )
}

const TestNoco = (props: Props) => {

  const fetchFromNoco = React.useCallback(
    async (params: { offset: string, limit: string }) => {
      console.log(params);
      await getPoliticianList(params).then((value) => {


        let data = value
        data['list'] = value.list.map((data: any) => ({
          ...data,
          PreviousJobs: JSON.parse(data.PreviousJobs),
          AdditionalPositions: JSON.parse(data.AdditionalPositions)
        }))
        setPageData(data)
      })
    },
    [],
  )

  React.useEffect(() => {
    fetchFromNoco({ offset: '0', limit: '100' })
  }, [fetchFromNoco])


  const [pageData, setPageData] = React.useState<IDs003001Csv>()



  return (
    <div>
      {pageData && pageData.pageInfo &&
        <Pagination
          numPage={Math.ceil(pageData.pageInfo.totalRows / pageData.pageInfo.pageSize) + 1}
          pageInfo={pageData.pageInfo}
          handleChangePage={fetchFromNoco} />}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <td>Role</td>
            <td>TitleTh</td>
            <th>FirstNameTh</th>
            <th>LastNameTh</th>
            <th>AdditionalPositions</th>
            <th>PreviousJobs</th>
          </tr>
        </thead>
        <tbody>
          {pageData && pageData.list.map((data) => (
            <tr key={data.PersonId} className='divide-x-2 divide-y-2'>
              <td>{data.Id}</td>
              <td>{data.Role}</td>
              <td>{data.TitleTh}</td>
              <td>{data.FirstNameTh}</td>
              <td>{data.LastNameTh}</td>
              <td>
                <table>
                  {typeof data.AdditionalPositions === "object" &&
                    data.AdditionalPositions &&
                    data.AdditionalPositions.map((pos: IAdditionalPositions, index: number) => (
                      <tr key={`${data.PersonId}-add-${index}-${pos.company}`}>
                        <td>{pos.company.title}</td>
                        <td>{pos.position_title}</td>
                      </tr>
                    ))}
                </table>
              </td>
              <td>
                <table>
                  {typeof data.PreviousJobs === "object" &&
                    data.PreviousJobs &&
                    data.PreviousJobs.map((pos: IPreviosJob, index: number) => (
                      <tr key={`${data.PersonId}-prev-${index}-${pos.company}`}>
                        <td>{pos.company.title}</td>
                        <td>{pos.position_title}</td>
                      </tr>
                    ))}
                </table>
              </td>
              {/* <td>{JSON.stringify(}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {pageData && pageData.pageInfo &&
        <Pagination
          numPage={Math.ceil(pageData.pageInfo.totalRows / pageData.pageInfo.pageSize) + 1}
          pageInfo={pageData.pageInfo}
          handleChangePage={fetchFromNoco} />}

    </div>
  )
}

export default TestNoco