export class Animal {
  protected makeSound(): void {
    console.log("Some generic animal sound...");
  }

  public speak(): void {
    this.makeSound();
  }
}
