import encodeMorse from '../morseCoder'

describe('tests for encodeMorse', () => {
    test('Should return HEY JUDE', () => {
        expect(encodeMorse('HEY JUDE')).toBe(".... . -.--   .--- ..- -.. .")
    })

    test('Should return HEY JUDE', () => {
        expect(encodeMorse('hey jude')).toBe(".... . -.--   .--- ..- -.. .")
    })

    test('Should return SOS without spaces', () => {
        expect(encodeMorse(' SOS ')).toBe("...---...")
    })

    test('Should return  SOS', () => {
        expect(encodeMorse('SOS')).toBe("...---...")
    })
})