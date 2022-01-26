import decodeMorse from '../morseDecoder'

describe('tests for decodeMorse', () => {
    test('Should return result HEY JUDE', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe("HEY JUDE")
    })

    test('Should return result SOS', () => {
        expect(decodeMorse('...---...')).toBe("SOS")
    })

    test('Should return result SOS without spaces', () => {
        expect(decodeMorse('   ...---...   ')).toBe("SOS")
    })
})