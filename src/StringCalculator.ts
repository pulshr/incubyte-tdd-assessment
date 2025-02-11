export class StringCalculator {
  static calculate(numbers: string): number {
    if (!numbers) return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2).replace(/[*]/g, "\\$&"));
      numbers = parts[1];
    }
    const numList = numbers.split(delimiter).map(Number);
    const negatives = numList.filter((num) => num < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    console.log(delimiter.source);
    if (delimiter.source === "\\*") {
      return numList.reduce((prod, num) => prod * num, 1);
    }
    return numList.reduce((sum, num) => sum + num, 0);
  }
}
