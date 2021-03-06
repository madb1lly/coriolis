export const formats = {
  decimal: '.',
  thousands: ',',
  grouping: [3],
  currency: ['$', ''],
  dateTime: '%a %b %e %X %Y',
  date: '%m/%d/%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const terms = {
  PHRASE_ALT_ALL: 'Alt + Click to fill all slots',
  PHRASE_BACKUP_DESC: 'Backup of all Coriolis data to save or transfer to another browser/device',
  PHRASE_CONFIRMATION: 'Are you sure?',
  PHRASE_EXPORT_DESC: 'A detailed JSON export of your build for use in other sites and tools',
  PHRASE_FASTEST_RANGE: 'Consecutive max range jumps',
  PHRASE_IMPORT: 'Paste JSON or import here',
  PHRASE_LADEN: 'Ship mass + fuel + cargo',
  PHRASE_NO_BUILDS: 'No builds added to comparison!',
  PHRASE_NO_RETROCH: 'No Retrofitting changes',
  PHRASE_SELECT_BUILDS: 'Select builds to compare',
  PHRASE_SG_RECHARGE: 'Time from 50% to 100% charge',
  PHRASE_SG_RECOVER: 'Recovery (to 50%) after collapse',
  PHRASE_UNLADEN: 'Ship mass excluding fuel and cargo',
  PHRASE_UPDATE_RDY: 'Update Available! Click to refresh',
  PHRASE_ENGAGEMENT_RANGE: 'The distance between your ship and its target',
  PHRASE_SELECT_BLUEPRINT: 'Click to select a blueprint',
  PHRASE_BLUEPRINT_WORST: 'Worst primary values for this blueprint',
  PHRASE_BLUEPRINT_AVERAGE: 'Average primary values for this blueprint',
  PHRASE_BLUEPRINT_RANDOM: 'Random selection between worst and best primary values for this blueprint',
  PHRASE_BLUEPRINT_BEST: 'Best primary values for this blueprint',
  PHRASE_BLUEPRINT_RESET: 'Remove all modifications and blueprint',

  HELP_MODIFICATIONS_MENU: 'Click on a number to enter a new value, or drag along the bar for small changes',

  // Other languages fallback to these  values
  // Only Translate to other languages if the name is different in-game
  am: 'Auto Field-Maintenance Unit',
  bh: 'Bulkheads',
  bl: 'Beam Laser',
  bsg: 'Bi-Weave Shield Generator',
  c: 'Cannon',
  cc: 'Collector Limpet Controller',
  ch: 'Chaff Launcher',
  cr: 'Cargo Rack',
  cs: 'Manifest Scanner',
  dc: 'Docking Computer',
  ec: 'Electronic Countermeasure',
  fc: 'Fragment Cannon',
  fh: 'Fighter Hangar',
  fi: 'FSD Interdictor',
  fs: 'Fuel Scoop',
  fsd: 'Frame Shift Drive',
  ft: 'Fuel Tank',
  fx: 'Fuel Transfer Limpet Controller',
  hb: 'Hatch Breaker Limpet Controller',
  hr: 'Hull Reinforcement Package',
  hs: 'Heat Sink Launcher',
  kw: 'Kill Warrant Scanner',
  ls: 'Life Support',
  mc: 'Multi-cannon',
  ml: 'Mining Laser',
  mr: 'Missile Rack',
  mrp: 'Module Reinforcement Package',
  nl: 'Mine Launcher',
  pa: 'Plasma Accelerator',
  pas: 'Planetary Approach Suite',
  pc: 'Prospector Limpet Controller',
  pce: 'Economy Class Passenger Cabin',
  pci: 'Business Class Passenger Cabin',
  pcm: 'First Class Passenger Cabin',
  pcq: 'Luxury Passenger Cabin',
  pd: 'power distributor',
  pl: 'Pulse Laser',
  po: 'Point Defence',
  pp: 'Power Plant',
  psg: 'Prismatic Shield Generator',
  pv: 'Planetary Vehicle Hangar',
  rf: 'Refinery',
  rg: 'Rail Gun',
  s: 'Sensors',
  sb: 'Shield Booster',
  sc: 'Scanner',
  scb: 'Shield Cell Bank',
  sg: 'Shield Generator',
  t: 'thrusters',
  tp: 'Torpedo Pylon',
  ul: 'Burst Laser',
  ws: 'Frame Shift Wake Scanner',

  // Items on the outfitting page
  // Notification of restricted slot
  emptyrestricted: 'empty (restricted)',
  'damage dealt against': 'Damage dealt against',
  'damage received by': 'Damage received by',
  'against shields': 'Against shields',
  'against hull': 'Against hull',
  // 'ammo' was overloaded for outfitting page and modul info, so changed to ammunition for outfitting page
  ammunition: 'Ammo',

  // Unit for seconds
  secs: 's',

  rebuildsperbay: 'Rebuilds per bay',

  // Blueprint rolls
  worst: 'Worst',
  average: 'Average',
  random: 'Random',
  best: 'Best',
  reset: 'Reset',

  // Weapon, offence, defence and movement
  dpe: 'Damage per MJ of energy',
  dps: 'Damage per second',
  sdps: 'Sustained damage per second',
  dpssdps: 'Damage per second (sustained damage per second)',
  eps: 'Energy per second',
  epsseps: 'Energy per second (sustained energy per second)',
  hps: 'Heat per second',
  hpsshps: 'Heat per second (sustained heat per second)',
  'damage by': 'Damage by',
  'damage from': 'Damage from',
  'shield cells': 'Shield cells',
  'recovery': 'Recovery',
  'recharge': 'Recharge',
  'engine pips': 'Engine Pips',
  '4b': '4 pips and boost',
  'speed': 'Speed',
  'pitch': 'Pitch',
  'roll': 'Roll',
  'yaw': 'Yaw',
  'internal protection': 'Internal protection',
  'external protection': 'External protection',
  'engagement range': 'Engagement range',
  'total': 'Total',

  // Modifications
  ammo: 'Ammunition maximum',
  boot: 'Boot time',
  brokenregen: 'Broken regeneration rate',
  burst: 'Burst',
  burstrof: 'Burst rate of fire',
  clip: 'Ammunition clip',
  damage: 'Damage',
  distdraw: 'Distributor draw',
  duration: 'Duration',
  eff: 'Efficiency',
  engcap: 'Engines capacity',
  engrate: 'Engines recharge rate',
  explres: 'Explosive resistance',
  facinglimit: 'Facing limit',
  hullboost: 'Hull boost',
  hullreinforcement: 'Hull reinforcement',
  integrity: 'Integrity',
  jitter: 'Jitter',
  kinres: 'Kinetic resistance',
  maxfuel: 'Maximum fuel per jump',
  mass: 'Mass',
  optmass: 'Optimal mass',
  optmul: 'Optimal multiplier',
  pgen: 'Power generation',
  piercing: 'Piercing',
  power: 'Power draw',
  protection: 'Protection',
  range: 'Range',
  ranget: 'Range', // Range in time (for FSD interdictor)
  regen: 'Regeneration rate',
  reload: 'Reload',
  rof: 'Rate of fire',
  shield: 'Shield',
  shieldboost: 'Shield boost',
  shieldreinforcement: 'Shield reinforcement',
  shotspeed: 'Shot speed',
  spinup: 'Spin up time',
  syscap: 'Systems capacity',
  sysrate: 'Systems recharge rate',
  thermload: 'Thermal load',
  thermres: 'Thermal resistance',
  wepcap: 'Weapons capacity',
  weprate: 'Weapons recharge rate',

  // Help text
  HELP_TEXT: `
<h1>Introduction</h1>
Coriolis is a ship builder for Elite: Dangerous.  This help file provides you with the information you need to use Coriolis.

<h1>Importing Your Ship Into Coriolis</h1>
Often, you will want to start with your existing ship in Coriolis and see how particular changes might affect it, for example upgrading your FSD.  There are a number of tools that can be used to import your ship without you having to create it manually.  This has the added benefit of copying over any engineering modifications that have taken place as well. </p>

<h2>Importing Your Ship From EDDI</h2>
To import your ship from EDDI first ensure that your connection to the Frontier servers&apos; companion API is working.  To do this check the &apos;Companion App&apos; tab where you should see "Your connection to the companion app is operational".  If not then follow the instructions in the companion app tab in EDDI to connect to the Frontier servers.</p>

Once you have a working companion API connection go to the &apos;Shipyard&apos; tab.  At the right-hand side of each ship is an &apos;Export to Coriolis&apos; button that will open your default web browser in Coriolis with the ship&apos;s build. </p>

Note that Internet Explorer and Edge might not import correctly, due to their internal restrictions on URL length.  If you find that this is the case then please change your default browser to Chrome. </p>

<h2>Importing Your Ship From EDMC</h2>
To import your ship from EDMC once your connection to the Frontier servers&apos; companion API is working go to &apos;Settings -&gt;Configuration&apos; and set the &apos;Preferred Shipyard&apos; to &apos;Coriolis&apos;.  Once this is set up clicking on your ship in the main window will open your default web browser in Coriolis with the ship&apos;s build.</p>

Note that Internet Explorer and Edge might not import correctly, due to their internal restrictions on URL length.  If you find that this is the case then please change your default browser to Chrome. </p>

<h1>Understanding And Using The Outfitting Panels</h1>
The outfitting page is where you will spend most of your time, and contains the information for your ship.  Information on each of the panels is provided below. </p>

<h2>Key Values</h2>
Along the top of the screen are some of the key values for your build.  This is a handy reference for the values, but more information is provided for the values in the further panels. </p>

Here, along with most places in Coriolis, acronyms will have tooltips explaining what they mean.  Hover over the acronym to obtain more detail, or look in the glossary at the end of this help.</p>

<h2>Modules</h2>
The next set of panels laid out horizontally across the screen contain the modules you have put in your build.  From left to right these are the core modules, the internal modules, the hardpoints and the utility mounts.  These represent the available slots in your ship and cannot be altered.  Each slot has a class, or size, and in general any module up to a given size can fit in a given slot (exceptions being bulkheads, life support and sensors in core modules and restricted internal slots, which can only take a subset of module depending on their restrictions). </p>

To add a module to a slot left-click on the slot and select the required module.  Only the modules capable of fitting in the selected slot will be shown. </p>

To remove a module from a slot right-click on the module. </p>

To move a module from one slot to another drag it.  If you instead want to copy the module drag it whilst holding down the &apos;Alt&apos; key. </p>

<h2>Power Management</h2>
The power management panel provides information about power usage and priorities.  It allows you to enable and disable individual modules, as well as set power priorities for each module.</p>

<h2>Costs</h2>
The costs panel provides information about the costs for each of your modules, and the total cost and insurance for your build.  By default Coriolis uses the standard costs, however discounts for your ship, modules and insurance can be altered in the &apos;Settings&apos; at the top-right of the page.</p>

The retrofit costs provides information about the costs of changing the base build for your ship, or your saved build, to the current build.</p>

The reload costs provides information about the costs of reloading your current build.</p>

<h2>Offence Summary</h2>
The offence summary panel provides information about the damage that you deal with your weapons.</p>

The first headline gives an overall damage per second rating: this is the optimum amount of damage the build will do per second according to weapon statistics.  After that is a breakdown of the damage per second the build will do for each type of damage: absolute, explosive, kinetic, and thermal.</p>

The next headline gives an overall sustained damage per second rating: this is the optimum amount of damage the build will do per second over a longer period of time, taking in to account ammunition clip capacities and reload times.  After that is a breakdown of the sustained damage per second the build will do for each type of damage: absolute, explosive, kinetic, and thermal.</p>

The final headline gives an overall damage per energy rating: this is the amount of damage the build will do per unit of weapon capacitor energy expended.  After that is a breakdown of the damage per energy the build will do for each type of damage: absolute, explosive, kinetic, and thermal.</p>

<h2>Defence Summary</h2>
The defence summary panel provides information about the strength of your defences and the damage that you receive from opponents.</p>

The first headline gives your total shield strength (if you have shields), taking in to account your base shield plus boosters.  After that are the details of how long it will take for your shields to recover from 0 to 50% (recovery time) and from 50% to 100% (recharge time).  The next line provides a breakdown of the shield damage taken from different damage types.  For example, if you damage from kinetic is 60% then it means that a weapon usually dealing 10 points of damage will only deal 6, the rest being resisted by the shield.  Note that this does not include any resistance alterations due to pips in your SYS capacitor.</p>

The second headline gives your total shield cell strength (if you have shield cell banks).  This is the sum of the recharge of all of equipped shield cell banks.</p>

The third headline gives your total armour strength, taking in to account your base armour plus hull reinforcement packages.  The next line provides a breakdown of the hull damage taken from different damage types.  For example, if you damage from kinetic is 120% then it means that a weapon usually dealing 10 points of damage will deal 12.</p>

The fourth headline gives your total module protection strength from module reinforcement packages. The next line provides a breakdown of the protection for both internal and external modules whilst all module reinforcement packages are functioning.  For example, if external module protection is 20% then 10 points of damage will 2 points of damage to the module reinforcement packages and 8 points of damage to the module</p>

<h2>Movement Summary</h2>
The movement summary panel provides information about the build&apos;s speed and agility.</p>

Along the top of this panel are the number of pips you put in to your ENG capacitor, from 0 to 4 and also include 4 pips and boost (4b).  Along the side of this panel are the names of the metrics.  These are:
<dl>
<dt>Speed</dt><dd>The fastest the ship can move, in metres per second</dd>
<dt>Pitch</dt><dd>The fastest the ship can raise or lower its nose, in degrees per second</dd>
<dt>Roll</dt><dd>The fastest the ship can roll its body, in degrees per second</dd>
<dt>Yaw</dt><dd>The fastest the ship can turn its nose left or right, in degrees per second</dd>
</dl>

<h2>Jump Range</h2>
The jump range panel provides information about the build&apos; jump range.  The graph shows how the build&apos;s jump range changes with the amount of cargo on-board.  The slider can be altered to change the amount of fuel you have on-board.

<h2>Damage Dealt</h2>
The damage dealt panel provides information about the effectiveness of your build&apos;s weapons against opponents&apos; shields and hull at different engagement distances.</p>

The ship against which you want to check damage dealt can be selected by clicking on the red ship icon or the red ship name at the top of this panel.</p>

The main section of this panel is a table showing your weapons and their effectiveness.  Effectiveness against shields takes in to account the weapon and its engagement range, but does not consider the target ship&apos;s resistances.  Effectiveness against hull takes in to account the weapon and, its engagement range and the target&apos;s hardness, but does not consider the target ship&apos;s resistances.  This is because resistances will alter significantly depending on the target&apos;s build.</p>

Effective DPS and effective SDPS are the equivalent of DPS and SDPS for the weapon.  Effectiveness is a percentage value that shows how effective the DPS of the weapon is compared in reality against the given target compared to the weapon&apos;s stated DPS.  Effectiveness can never go above 100%.</p>

Total effective DPS, SDPS and effectiveness against both shields and hull are provided at the bottom of the table.</p>

At the bottom of this panel you can change your engagement range.  The engagement range is the distance between your ship and your target.  Many weapons suffer from what is known as damage falloff, where their effectiveness decreases the further the distance between your ship and your target.  This allows you to model the effect of engaging at different ranges.

Note that this panel only shows enabled weapons, so if you want to see your overall effectiveness for a subset of your weapons you can disable the undesired weapons in the power management panel.

<h2>Damage Received</h2>
The damage received panel provides information about the effectiveness of your build&apos;s defences against opponent&apos;s weapons at different engagement range.  Features and functions are the same as the damage dealt panel, except that it does take in to account your build&apos;s resistances.</p>

<h1>Keyboard Shortcuts</h1>
<dl>
<dt>Ctrl-e</dt><dd>open export dialogue (outfitting page only)</dd>
<dt>Ctrl-h</dt><dd>open help dialogue</dd>
<dt>Ctrl-i</dt><dd>open import dialogue</dd>
<dt>Ctrl-l</dt><dd>open shortlink dialogue</dd>
<dt>Esc</dt><dd>close any open dialogue</dd>
</dl>
<h1>Glossary</h1>
<dl>
<dt>Absolute damage</dt><dd>A type of damage, without any protection.  Absolute damage is always dealt at 100% regardless of if the damage is to shields, hull or modules, and irrespective of resistances</dd>
<dt>DPS</dt><dd>Damage per second; the amount of damage that a weapon or a ship can deal per second to a target under optimum conditions</dd>
<dt>EPS</dt><dd>Energy per second; the amount of energy that a weapon or a ship drains from the weapons capacitor per second when firing</dd>
<dt>HPS</dt><dd>Heat per second; the amount of heat that a weapon or a ship generates per second when firing</dd>
<dt>Effectivness</dt><dd>A comparison of the maximum DPS of a given weapon to the actual DPS of the given weapon in a specific situation.  DPS can be reduced by range to the target, the target&apos;s hull and shield resistances, and the target&apos;s hardness</dd>
<dt>Explosive damage</dt><dd>A type of damage, protected against by explosive resistance</dd>
<dt>Hardness</dt><dd>The inherent resistance to damage of a ship&apos;s hull.  Hardness is defined on a per-ship basis and there is currently nothing that can be done to change it.  Hardness of a ship&apos;s hull is compared to the piercing of weapons: if piercing is higher than hardness the weapon does 100% damage, otherwise it does a fraction of its damage calculated as piercing/hardness</dd>
<dt>Falloff</dt><dd>The distance at which a weapons starts to do less damage than its stated DPS</dd>
<dt>Kinetic damage</dt><dd>A type of damage, protected against by kinetic resistance</dd>
<dt>SDPS</dt><dd>Sustained damage per second; the amount of damage that a weapon or a ship can deal per second to a target, taking in to account ammunition reload</dd>
<dt>SEPS</dt><dd>Sustained energy per second; the amount of energy that a weapon or a ship drains from the weapons capacitor per second when firing, taking in to account ammunition reload</dd>
<dt>SHPS</dt><dd>Sustained heat per second; the amount of heat that a weapon or a ship generates per second when firing, taking in to account ammunition reload</dd>
<dt>Thermal damage</dt><dd>A type of damage, protected against by thermal resistance</dd>
</dl>

  `,
};
