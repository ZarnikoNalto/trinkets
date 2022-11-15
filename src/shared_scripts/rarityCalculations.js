export const _RARITY = {
    common: `--tr-rarity-common`,
    uncommon: `--tr-rarity-uncommon`,
    rare: `--tr-rarity-rare`,
    mystic: `--tr-rarity-mystic`,
    legendary: `--tr-rarity-legendary`,
    pony: `--tr-rarity-pony`
}

export function rareToColor(rare) {
    return `border-color: var(${rare})`        
}