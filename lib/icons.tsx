import type { IconType } from 'react-icons'
import {
  FaBolt,
  FaHelmetSafety,
  FaFire,
  FaToolbox,
  FaPlug,
  FaDolly,
  FaIndustry,
  FaGem,
  FaBuilding,
  FaOilCan,
  FaBuildingColumns,
  FaCar,
} from 'react-icons/fa6'

export const productIcons: Record<string, IconType> = {
  fasteners: FaBolt,
  'ppe-safety': FaHelmetSafety,
  'welding-consumables': FaFire,
  'hand-tools': FaToolbox,
  'power-tools': FaPlug,
  'lifting-solutions': FaDolly,
  'pipes-fittings': FaIndustry,
  'abrasives-adhesives': FaGem,
  'construction-consumables': FaBuilding,
}

export const industryIcons: Record<string, IconType> = {
  'oil-gas': FaOilCan,
  construction: FaBuilding,
  manufacturing: FaIndustry,
  automotive: FaCar,
}

export const defaultProductIcon: IconType = FaBuildingColumns
export const defaultIndustryIcon: IconType = FaBuildingColumns
