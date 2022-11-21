export const _RARITY = {
    common: `--tr-rarity-common`,
    uncommon: `--tr-rarity-uncommon`,
    rare: `--tr-rarity-rare`,
    mystic: `--tr-rarity-mystic`,
    legendary: `--tr-rarity-legendary`,
    pony: `--tr-rarity-pony`
}

export function rareToBorderColor(rare) {
    return `border-color: var(${rare})`        
}

export function rarity_text_shadow(rarity) {
    return `text-shadow: 0px 0px 12px var(${rarity})`
}

export function rarity_color(rarity) {
    return `color: var(${rarity})`
}