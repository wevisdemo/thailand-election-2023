import { ReactNode } from "react"
import {
  Agri,
  Art,
  Bank,
  Const,
  Edu,
  Elec,
  Food,
  Health,
  Housing,
  IR,
  Logis,
  Manage,
  Manu,
  Media,
  Mine,
  Pack,
  Prop,
  Protect,
  Sci,
  Service,
  Water,
} from '../components/util/Icon-biz'

export type BusinessType = {
  name: string
  code: string
  value?: number
  percentage?: number
  icon?: ReactNode
}

export const BusinessTypeData: BusinessType[] = [
  { name: 'ทุกหมวดธุรกิจ', code: 'all' },
  { name: 'เกษตรกรรม ป่าไม้ ประมง', code: 'Agri', icon: <Agri /> },
  { name: 'ศิลปะ ความบันเทิง', code: 'Art', icon: <Art /> },
  { name: 'การเงิน ประกันภัย', code: 'Bank', icon: <Bank /> },
  { name: 'ก่อสร้าง', code: 'Const', icon: <Const /> },
  { name: 'การศึกษา', code: 'Edu', icon: <Edu /> },
  { name: 'ไฟฟ้า ก๊าซ ไอน้ำ', code: 'Elec', icon: <Elec /> },
  { name: 'ที่พัก อาหาร', code: 'Food', icon: <Food /> },
  { name: 'สุขภาพ สังคมสงเคราะห์', code: 'Health', icon: <Health /> },
  { name: 'จ้างงานในครัวเรือน', code: 'Housing', icon: <Housing /> },
  { name: 'องค์การระหว่างประเทศ ภาคีสมาชิก', code: 'IR', icon: <IR /> },
  { name: 'ขนส่ง ที่เก็บสินค้า', code: 'Logis', icon: <Logis /> },
  { name: 'การบริหาร บริการสนับสนุน', code: 'Manage', icon: <Manage /> },
  { name: 'การผลิต', code: 'Manu', icon: <Manu /> },
  { name: 'ข่าวสาร การสื่อสาร', code: 'Media', icon: <Media /> },
  { name: 'เหมืองแร่ เหมืองหิน', code: 'Mine', icon: <Mine /> },
  { name: 'ขายส่งปลีก ซ่อมยานยนต์', code: 'Pack', icon: <Pack /> },
  { name: 'อสังหาริมทรัพย์', code: 'Prop', icon: <Prop /> },
  { name: 'บริหารราชการ ป้องกันประเทศ', code: 'Protect', icon: <Protect /> },
  { name: 'กิจกรรมวิชาชีพ วิทยาศาสตร์ วิชาการ', code: 'Sci', icon: <Sci /> },
  { name: 'การบริการด้านอื่น ๆ', code: 'Service', icon: <Service /> },
  { name: 'การจัดการน้ำเสียและของเสียฯ', code: 'Water', icon: <Water /> },
]
















