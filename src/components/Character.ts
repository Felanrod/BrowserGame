export class Character {
  charName: string
  charStats: Record<string, number>
  isItTrue: boolean

  // constructor(charName: string, charStats: Record<string, number>, isItTrue: boolean) {
  constructor(charName: string) {
    this.charName = charName
    this.charStats = this.rollStats()
    this.isItTrue = this.isItTrulyTrue()
  }

  sum(accumulator: number, currentValue: number): number {
    return accumulator + currentValue
  }

  rollStats(): Record<string, number> {
    const numOfStats = 6
    const numOfStatRolls = 4
    const dieSides = 6

    const statNames: string[] = ['Strength', 'Agility', 'Stamina', 'Intellect', 'Charisma', 'Luck']
    const statsHolder: number[] = []

    for (let i = 0; i < numOfStats; i++) {
      const rolls = []
      const initialValue = 0
      for (let j = 0; j < numOfStatRolls; j++) {
        rolls.push(Math.floor(Math.random() * dieSides) + 1)
        //console.log(rolls)
      }
      rolls.splice(rolls.indexOf(Math.min(...rolls)), 1)
      statsHolder.push(rolls.reduce(this.sum, initialValue))
      //console.log(statsHolder)
    }
    const stats: Record<string, number> = {}
    statNames.forEach((statName: string, i: number) => {
      stats[statName] = statsHolder[i]!
    })
    return stats
  }
  isItTrulyTrue() {
    let trueOrFalse: boolean = true
    const trueNum: number = Math.floor(Math.random() * 2) + 1
    console.log('True Num is ' + trueNum)
    if (trueNum === 1) {
      trueOrFalse = !trueOrFalse
    }
    return trueOrFalse
  }
}
