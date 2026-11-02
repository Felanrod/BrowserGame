export class Character {
  charName: string
  charClass: string
  charLevel: number
  charExp: number[]
  charStats: Record<string, number>
  isItTrue: boolean

  constructor(charName: string) {
    this.charName = charName
    this.charClass = this.rollClass()
    this.charLevel = 1
    this.charExp = [0, 10]
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
    if (trueNum === 1) {
      trueOrFalse = !trueOrFalse
    }
    return trueOrFalse
  }
  rollClass(): string {
    const classList: string[] = ['Warrior', 'Wizard', 'Cleric']
    const charClass: string = classList[Math.floor(Math.random() * classList.length)] as string
    return charClass
  }
  levelUpDelay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  async increaseEXP(expGained: number): Promise<void> {
    let expDiff: number
    while (expGained > 0) {
      expDiff = (this.charExp[1] as number) - (this.charExp[0] as number)
      console.log('Exp Gained is ' + expGained)
      console.log('Exp Diff is ' + expDiff)
      if (expGained >= expDiff) {
        ;(this.charExp[0] as number) += expDiff
        expGained -= expDiff
        await this.levelUpDelay(1500)
        this.charLevel++
        console.log('You Leveled up')
        this.charExp[0] = 0
        this.charExp[1] = Math.round((this.charExp[1] as number) * 1.3)
        await this.levelUpDelay(750)
      } else {
        ;(this.charExp[0] as number) += expGained
        expGained = 0
        console.log("You Didn't Level")
      }
    }
  }
}
