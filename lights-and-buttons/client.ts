namespace lightsAndButtons {
  
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
    if (lightsAndButtons.ButtonClient.getCreatedCount() === 0) {
        role = 'button'
    } else {
        role = 'button' + (lightsAndButtons.ButtonClient.getCreatedCount() + 1)
    }
    
    return new ButtonClient(role)
  }

  
  export class LightClient extends modules.LightbulbClient {

    private static instanceCount = 0;

    constructor(role: string) {
      super(role)
    }

    static getCreatedCount(): number {
      return LightClient.instanceCount;
    }

    /**
     * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
     * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
     */
    //% group="Light"
    //% blockId=jacdac_light_brightness___set
    //% block="set %light brightness to %value (\\%)"
    //% weight=100
    //% value.min=0
    //% value.max=100
    //% value.defl=100
    setBrightness(value: number) {
      super.setBrightness(value);
    }
  }

  /**
   * Create a light client and automtically set it to a variable.
   */
  //% group="Light"
  //% block="Create Light"
  //% blockSetVariable=light
  //% weight=101
  export function createlight(): LightClient {
      
    let role = "";
    if (lightsAndButtons.LightClient.getCreatedCount() === 0) {
        role = 'light'
    } else {
        role = 'light' + (lightsAndButtons.LightClient.getCreatedCount() + 1)
    }
    
    return new LightClient(role)
  }
}
  