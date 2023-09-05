var iFileName = "Parasol - Weapon.js";
RequiredSheetVersion("13.0.6");

SourceList["HB"] = {
	name : "Parasol", 
	abbreviation : "HB", 
	group : "Homebrew",
	url : "https://www.dandwiki.com/wiki/Parasol_(5e_Equipment)",
	date: "2023/09/06"
};

WeaponsList["parasol"] = {
    name : "Parasol",
    source : ["HB", 0],
    regExpSearch : /parasol/i,
    type : "Improvised Weapons",
    ability : 1,
    abilitytodamage : true,
    damage : [1, 6, "Bludgeoning"],
    range : "Melee",
    description : "Improvised, Finesse, Heavy, Special, Versatile (1d8), Special Block ",
    tooltip : "Special Block: The parasol can be used as a shield as well as a weapon, giving a +2 bonus to the wielders' AC when open; but being unable to be used as a weapon while open. A bonus action can open or close the parasol, and it follows all of the rules and restrictions of a shield (Can't have 2 shields, etc.). If being used as a shield and it blocks an attack, the weapon takes damage from blocking the attack. This damage only affects the shielding ability, and causes it to have 1 less of a bonus to the wielders' AC each time it takes this damage. If this damage causes it to have no bonus, it loses the ability to shield attacks, and loses its Special property. To determine if the parasol blocked the attack, determine the wielders' AC without it. If an attack hit that number or higher but didn't hit the wielder, it was blocked by the parasol. Rarely, a different version of the item can be made, with the intent of it being used specifically for combat.",
    list : "melee",
	weight : 10,
}

