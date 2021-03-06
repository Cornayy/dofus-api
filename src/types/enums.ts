import { registerEnumType } from '@nestjs/graphql';

export enum EquipmentType {
    HAT = 'Hat',
    AMULET = 'Amulet',
    BELT = 'Belt',
    RING = 'Ring',
    BOOTS = 'Boots',
    CLOAK = 'Cloak',
    SHIELD = 'Shield',
    BACKPACK = 'Backpack',
    TROPHY = 'Trophy',
    LIVING_OBJECT = 'Living object',
    DOFUS = 'Dofus',
}

export enum WeaponType {
    STAFF = 'Staff',
    AXE = 'Axe',
    DAGGER = 'Dagger',
    HAMMER = 'Hammer',
    PICKAXE = 'Pickaxe',
    SCYTHE = 'Scythe',
    SHOVEL = 'Shovel',
    SOUL_STONE = 'Soul stone',
    SWORD = 'Sword',
    TOOL = 'Tool',
    WAND = 'Wand',
}

export enum ResourceType {
    CEREAL = 'Cereal',
    ALCHEMY_EQUIPMENT = 'Alchemy equipment',
    ALLOY = 'Alloy',
    BARK = 'Bark',
    BONE = 'Bone',
    BUD = 'Bud',
    CARAPACE = 'Carapace',
    COMBAT_RESOURCE = 'Combat Resource',
    CORRUPTION_RUNE = 'Corruption Rune',
    DREAM_RESOURCES = 'Dream Resources',
    DUNGEON_KEEPER_ESSENCE = 'Dungeon keeper essence',
    DYE = 'Dye',
    EAR = 'Ear',
    EGG = 'Egg',
    EXPLORATION_EQUIPMENT = 'Exploration equipment',
    EYE = 'Eye',
    FABRIC = 'Fabric',
    FEATHER = 'Feather',
    FISH = 'Fish',
    FLOUR = 'Flour',
    FRUIT = 'Fruit',
    GARMENT = 'Garment',
    GUTTED_FISH = 'Gutted fish',
    HAIR = 'Hair',
    IDOL = 'Idol',
    JELLY = 'Jelly',
    KEY = 'Key',
    KWISMAS = 'Kwismas',
    LEATHER = 'Leather',
    LEG = 'Leg',
    LIQUID = 'Liquid',
    MAP = 'Map',
    MAP_FRAGMENT = 'Map fragment',
    Meat = 'Meat',
    Metaria = 'Metaria',
    MISCELLANEOUS_RESOURCES = 'Miscellaneous resources',
    MUSHROOM = 'Mushroom',
    OIL = 'Oil',
    ORE = 'Ore',
    PEBBLE = 'Pebble',
    PET_FOOD = 'Pet Food',
    PLANK = 'Plank',
    PLANT = 'Plant',
    POWDER = 'Powder',
    PRECIOUS_STONE = 'Precious stone',
    PREPARATION = 'Preparation',
    ROOT = 'Root',
    SAP = 'Sap',
    SEED = 'Seed',
    SHELL = 'Shell',
    SKIN = 'Skin',
    SMITHMAGIC_ORB = 'Smithmagic orb',
    SMITHMAGIC_POTION = 'Smithmagic potion',
    SMITHMAGIC_RUNE = 'Smithmagic rune',
    SOUVENIR = 'Souvenir',
    STONE = 'Stone',
    STUFFED_TOY = 'Stuffed toy',
    SUBSTRATE = 'Substrate',
    TAIL = 'Tail',
    TRANSCENDENCE_RUNE = 'Transcendence Rune',
    VEGETABLE = 'Vegetable',
    WING = 'Wing',
    WOOD = 'Wood',
    WOOL = 'Wool',
    WRAPPING_PAPER = 'Wrapping paper',
}

export enum ConsumableType {
    POTION = 'Potion',
    CHEST = 'Chest',
    BREAD = 'Bread',
    VARIOUS = 'Various',
    EDIBLE_MEAT = 'Edible meat',
    DRINK = 'Drink',
    TREAT = 'Treat',
    BOX_OF_FRAGMENTS = 'Box of fragments',
    EDIBLE_FISH = 'Edible fish',
    BREEDING_ITEM = 'Breeding item',
    CONQUEST_POTION = 'Conquest potion',
    PET_POTION = 'Pet potion',
    PERCEPTOR_DELEVELING_POTION = 'Perceptor deleveling potion',
    EXPERIENCE_SCROLL = 'Experience scroll',
    BEER = 'Beer',
    SPELL_LEARLING_SCROLL = 'Spell-learning scroll',
    EMOTE_SCROLL = 'Emote scroll',
    MIMISYMBIC = 'Mimisymbic',
    CONTAINER = 'Container',
    SMILIES_SCROLL = 'Smilies scroll',
    TITLE_SCROLL = 'Title Scroll',
    MAGIC_STONE = 'Magic stone',
    EMOTE_POTION = 'Emote potion',
    CHARACTERISTIC_SCROLL = 'Characteristic scroll',
    SEEKER_SCROLL = 'Seeker scroll',
    FAIRYWORK = 'Fairywork',
    TELEPORTATION_POTION = 'Teleportation potion',
    HAVEN_BAG_POPOCKET = 'Haven Bag Popocket',
    PURSE_OF_KAMAS = 'Purse of Kamas',
    PETSMOUNT_POTION = 'Petsmount potion',
    ORNAMENTAL_SCROLL = 'Ornamental Scroll',
}

export enum PetType {
    PETSMOUNT = 'Petsmount',
    PET = 'Pet',
}

registerEnumType(ConsumableType, { name: 'ConsumableType' });
registerEnumType(EquipmentType, { name: 'EquipmentType' });
registerEnumType(WeaponType, { name: 'WeaponType' });
registerEnumType(ResourceType, { name: 'ResourceType' });
registerEnumType(PetType, { name: 'PetType' });
