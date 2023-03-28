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
  short?: string
  shortEn?: string
  code: string
  value?: number
  percentage?: number
  icon?: ReactNode
}

export const BusinessTypeData: BusinessType[] = [
  { name: 'ทุกหมวดธุรกิจ', code: 'all' },
  { code: 'A', name: "เกษตรกรรม การป่าไม้ และการประมง", short: 'เกษตรกรรม ป่าไม้ ประมง', shortEn: 'Agri', icon: <Agri /> },
  { code: 'B', name: "การทำเหมืองแร่ และเหมืองหิน", short: 'เหมืองแร่ เหมืองหิน', shortEn: 'Mine', icon: <Mine /> },
  { code: 'C', name: "การผลิต", short: 'การผลิต', shortEn: 'Manu', icon: <Manu /> },
  { code: 'D', name: "ไฟฟ้า ก๊าซ ไอน้ำ และระบบการปรับอากาศ", short: 'ไฟฟ้า ก๊าซ ไอน้ำ', shortEn: 'Elec', icon: <Elec /> },
  { code: 'E', name: "การจัดหาน้ำการจัดการน้ำเสียและของเสียรวมถึงกิจกรรมที่เกี่ยวข้อง", short: 'การจัดการน้ำเสียและของเสียฯ', shortEn: 'Water', icon: <Water /> },
  { code: 'F', name: "การก่อสร้าง", short: 'ก่อสร้าง', shortEn: 'Const', icon: <Const /> },
  { code: 'G', name: "การขายส่งและการขายปลีกการซ่อมยานยนต์และจักรยานยนต์ ", short: 'ขายส่งปลีก ซ่อมยานยนต์', shortEn: 'Pack', icon: <Pack /> },
  { code: 'H', name: "การขนส่งและสถานที่เก็บสินค้า", short: 'ขนส่ง ที่เก็บสินค้า', shortEn: 'Logis', icon: <Logis /> },
  { code: 'I', name: "ที่พักแรมและบริการด้านอาหาร", short: 'ที่พัก อาหาร', shortEn: 'Food', icon: <Food /> },
  { code: 'J', name: "ข้อมูลข่าวสารและการสื่อสาร", short: 'ข่าวสาร การสื่อสาร', shortEn: 'Media', icon: <Media /> },
  { code: 'K', name: "กิจกรรมทางการเงินและการประกันภัย", short: 'การเงิน ประกันภัย', shortEn: 'Bank', icon: <Bank /> },
  { code: 'L', name: "กิจกรรมเกี่ยวกับอสังหาริมทรัพย์ ", short: 'อสังหาริมทรัพย์', shortEn: 'Prop', icon: <Prop /> },
  { code: 'M', name: "กิจกรรมวิชาชีพวิทยาศาสตร์และกิจกรรมทางวิชาการ", short: 'กิจกรรมวิชาชีพ วิทยาศาสตร์ วิชาการ', shortEn: 'Sci', icon: <Sci /> },
  { code: 'N', name: "กิจกรรมการบริหารและบริการสนับสนุน", short: 'การบริหาร บริการสนับสนุน', shortEn: 'Manage', icon: <Manage /> },
  { code: 'O', name: "การบริหารราชการ การป้องกันประเทศและการประกันสังคมภาคบังคับ", short: 'บริหารราชการ ป้องกันประเทศ', shortEn: 'Protect', icon: <Protect /> },
  { code: 'P', name: "การศึกษา", short: 'การศึกษา', shortEn: 'Edu', icon: <Edu /> },
  { code: 'Q', name: "กิจกรรมด้านสุขภาพและงานสังคมสงเคราะห์", short: 'สุขภาพ สังคมสงเคราะห์', shortEn: 'Health', icon: <Health /> },
  { code: 'R', name: "ศิลปะ ความบันเทิงและนันทนาการ", short: 'ศิลปะ ความบันเทิง', shortEn: 'Art', icon: <Art /> },
  { code: 'S', name: "กิจกรรมการบริการอื่นๆ", short: 'การบริการด้านอื่น ๆ', shortEn: 'Service', icon: <Service /> },
  { code: 'T', name: "กิจกรรมการจ้างงานในครัวเรือน กิจกรรมการผลิต สินค้าและบริการที่ทำขึ้นเอง เพื่อใช้ในครัวเรือน", short: 'จ้างงานในครัวเรือน', shortEn: 'Housing', icon: <Housing /> },
  { code: 'U', name: "กิจกรรมขององค์การระหว่างประเทศและภาคีสมาชิก", short: 'องค์การระหว่างประเทศ ภาคีสมาชิก', shortEn: 'IR', icon: <IR /> },
]
