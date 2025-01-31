export class StringCalculator {
  static add(numbers: string): number {
    if (!numbers) return 0;
    return parseInt(numbers); // Convert string to number
  }
}
