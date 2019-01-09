
describe('Bish Bosh', function(){

    it('should retrieve the right text content for number divided by firtDivision value', function(){
        
        const [number, firstDivision, secondDivision] = [6, 3, 10];
        let {className, textContent} = bishBosh(number, firstDivision, secondDivision)
        expect(textContent).toMatch('Bish');
    });

    it('should retrieve the right class name for number divided by firtDivision value', function(){
        
        const [number, firstDivision, secondDivision] = [6, 3, 10];
        let {className, textContent} = bishBosh(number, firstDivision, secondDivision)
        expect(className).toMatch('bishColor');
    });

    it('should retrieve the right text content for number divided by secondDivision value', function(){
        
        const [number, firstDivision, secondDivision] = [8, 3, 4];
        let {className, textContent} = bishBosh(number, firstDivision, secondDivision)
        expect(textContent).toMatch('Bosh');
    });

    it('should retrieve the right class name for number divided by secondDivision value', function(){
        
        const [number, firstDivision, secondDivision] = [8, 3, 4];
        let {className, textContent} = bishBosh(number, firstDivision, secondDivision)
        expect(className).toMatch('boshColor');
    });

    it('should retrieve the right text content for number divided by firtDivision AND secondDivision value', function(){
        
        const [number, firstDivision, secondDivision] = [12, 3, 4];
        let {className, textContent} = bishBosh(number, firstDivision, secondDivision)
        expect(textContent).toMatch('Bish Bosh');
    });

    it('should retrieve the right class name for number divided by firtDivision AND secondDivision value', function(){
        
        const [number, firstDivision, secondDivision] = [12, 3, 4];
        let {className, textContent} = bishBosh(number, firstDivision, secondDivision)
        expect(className).toMatch('bishBoshColor');
    });

})