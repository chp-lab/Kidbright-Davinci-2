
#if (ARDUINO >= 100)
 #include "Arduino.h"
#else
 #include "WProgram.h"
#endif
#include "Wire.h"


#define MLX90614_I2CADDR 0x5A

// RAM
#define MLX90614_RAWIR1 0x04
#define MLX90614_RAWIR2 0x05
#define MLX90614_TA 0x06
#define MLX90614_TOBJ1 0x07
#define MLX90614_TOBJ2 0x08
// EEPROM
#define MLX90614_TOMAX 0x20
#define MLX90614_TOMIN 0x21
#define MLX90614_PWMCTRL 0x22
#define MLX90614_TARANGE 0x23
#define MLX90614_EMISS 0x24
#define MLX90614_CONFIG 0x25
#define MLX90614_ADDR 0x0E
#define MLX90614_ID1 0x3C
#define MLX90614_ID2 0x3D
#define MLX90614_ID3 0x3E
#define MLX90614_ID4 0x3F


class Setup_wire_OLED  {
 public:
  Setup_wire_OLED(uint8_t addr = MLX90614_I2CADDR);
  boolean begin(uint8_t SDA_Pin,uint8_t SCL_Pin);
  uint32_t readID(void);

  float add_valueTemp = 0;

 private:
  float readTemp(uint8_t reg);

  uint8_t  _SDAPin;
  uint8_t  _SCLPin;

  uint8_t _addr;
  uint16_t read16(uint8_t addr);
  void write16(uint8_t addr, uint16_t data);
};

