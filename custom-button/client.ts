namespace customButton {
  
  export class ButtonClient extends modules.ButtonClient {

    private static instanceCount = 0;

    constructor(role: string) {
      super(role)
      ButtonClient.instanceCount++;
    }

    static getCreatedCount(): number {
      return ButtonClient.instanceCount;
    }

    /**
     * Code to run when a chosen event occurs
     * @param event Button pressed (down), held, released (up)
     */
    //% afterOnStart=1
    //% group="Button"
    //% block="on %button $event"
    //% blockId=on_press
    demoOnPress(event: jacdac.ButtonEvent, handler: () => void) { super.onEvent(event, handler) }

    /**
     * Returns the ms duration of the last button hold in ms
     */
    //% group="Button"
    //% block="%button hold duration (ms)"
    //% blockId=hold_duration
    demoHoldDuration(): number { return super.holdDuration() }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Button"
    //% block="%button pressed"
    //% blockId=is_pressed
    demoIsPressed(): boolean { return super.pressed() }

  }

  /**
   * Create a button client and automtically set it to a variable.
   */
  //% group="Button"
  //% block="Create Button"
  //% blockSetVariable=button
  //% weight=101
  export function createbutton(): ButtonClient {
      
    let role = "";
    if (customButton.ButtonClient.getCreatedCount() === 0) {
        role = 'button'
    } else {
        role = 'button' + (customButton.ButtonClient.getCreatedCount() + 1)
    }
    
    return new ButtonClient(role)
  }
}
  