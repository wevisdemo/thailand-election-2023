import { NestedPeoplePartyHistory } from "@thailand-election-2023/database";
import { ImageAttachment } from "@thailand-election-2023/database/dist/models/image";

export interface PersonCustom {
  Id: number;
  Title: string;
  Name: string;
  IsMp: boolean;
  IsSenator: boolean;
  IsActive: boolean;
  IsCabinet: boolean;
  IsPmCandidate?: boolean;
  MpType: string;
  MpProvince: string | null;
  MpZone: string | null;
  MpList: '22';

  // custom field
  Images: ImageAttachment[] | string | null;
  PeoplePartyHistory?: NestedPeoplePartyHistory[];
  PartyName: string
  Party: {
    Id: number;
    Name: string;
    Color?: string | null;
    Images?: string | null;
  } | null;
  countDirector: number;
  countCompShare: number;
  totalValueShare: number;
  totalPctShare: number;
  companyType: string[]
}

export interface CredenData {
  full_address: string;
  financial: FinancialData[];
  value_share: number;
  submit_obj_big_type: string;
  company_name_th: string;
  pct_share: number;
  obj_tname: string;
  company_id: string;
  reg_date: string;
  company_name_en: string;
  tsic: string;
  cap_amt: number;
  company_value: number;
  company_type_th: string;
  company_shareholder?: ShareholderData[]
  count_shareholder: number;
  gov_fund_proj: DGAData[]
}

export interface FinancialData {
  year: string;
  income: number;
}

export interface DGAData {
  ลำดับ: number;
  รหัสโครงการ: number;
  ชื่อโครงการฯ: string;
  ชื่อประเภทโครงการ: string;
  ชื่อหน่วยงาน: string;
  ชื่อหน่วยงานย่อย: string;
  ชื่อวิธีการฯ: string;
  ชื่อกลุ่มวิธีการฯ: string;
  วันที่ประกาศฯ: string;
  วงเงินงบประมาณ_บาท: number;
  ราคากลาง_บาท: number;
  ราคารวมทุกสัญญา_บาท: number;
  ปีงบประมาณ: number;
  วันที่เกิดรายการ: string;
  จังหวัด: string;
  จังหวัด_อังกฤษ: string;
  เขต_อำเภอ: string;
  เขต_อำเภอ_อังกฤษ: string;
  แขวง_ตำบล: string;
  แขวง_ตำบล_อังกฤษ: string;
  สถานะโครงการ: string;
  พิกัดของโครงการ: string;
  ละติจูดของโตรงการ: string;
  ลองจิจูดของโตรงการ: string;
  เลขนิติบุคคล13หลัก: string;
  ผู้ชนะการเสนอราคา: string;
  เลขที่สัญญา: string;
  วันที่ลงนามในสัญญา: string;
  วันที่สิ้นสุดสัญญา: string;
  งบประมาณในสัญญา_บาท: number;
  สถานะสัญญา: string;
}

export interface ShareholderData {
  Lastname: string;
  value_share: number;
  Nationality: string;
  pct_share: number;
  count_share: number;
  Firstname: string;
  person?: PersonCustom;
}