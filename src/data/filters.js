
import React, { Fragment } from 'react'
import whiteManaUrl from '../../static/images/icons/mana_white.svg'
import redManaUrl from '../../static/images/icons/mana_red.svg'
import greenManaUrl from '../../static/images/icons/mana_green.svg'
import blueManaUrl from '../../static/images/icons/mana_blue.svg'
import blackManaUrl from '../../static/images/icons/mana_black.svg'

const manaIconByColor = {
  white: whiteManaUrl,
  red: redManaUrl,
  green: greenManaUrl,
  blue: blueManaUrl,
  black: blackManaUrl,
}

const ManaCheckboxContent = ({ color }) => (
  <Fragment>
    <img src={manaIconByColor[color.toLowerCase()]} alt={`${color} mana icon`} height={16} />
    <span style={{ marginLeft: '8px' }}>{color}</span>
  </Fragment>
)

const color = [
  { id: 'filter_color_white', name: 'white', content: <ManaCheckboxContent color="White" /> },
  { id: 'filter_color_red', name: 'red', content: <ManaCheckboxContent color="Red" /> },
  { id: 'filter_color_green', name: 'green', content: <ManaCheckboxContent color="Green" /> },
  { id: 'filter_color_blue', name: 'blue', content: <ManaCheckboxContent color="Blue" /> },
  { id: 'filter_color_black', name: 'black', content: <ManaCheckboxContent color="Black" /> },
]

const rarity = [
  { id: 'filter_rarity_common', name: 'common', content: 'Common' },
  { id: 'filter_rarity_uncommon', name: 'uncommon', content: 'Uncommon' },
  { id: 'filter_rarity_rare', name: 'rare', content: 'Rare' },
  { id: 'filter_rarity_mythic', name: 'mythic', content: 'Mythic' },
]

const type = [
  { id: 'filter_type_creature', name: 'creature', content: 'Creature' },
  { id: 'filter_type_sorcery', name: 'sorcery', content: 'Sorcery' },
  { id: 'filter_type_instant', name: 'instant', content: 'Instant' },
  { id: 'filter_type_enchantment', name: 'enchantment', content: 'Enchantment' },
  { id: 'filter_type_land', name: 'land', content: 'Land' },
]

export { color, rarity, type }
