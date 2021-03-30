// Selects dummy text
const dummyText = [
    'Cookie chocolate cake soufflé wafer marzipan jelly-o fruitcake. Gingerbread pastry carrot cake apple pie powder dragée cupcake cotton candy. Tiramisu tiramisu cookie topping gummies danish. Caramels jelly cupcake chupa chups jelly chocolate cake. Gingerbread candy marshmallow chupa chups lemon drops chupa chups. Toffee chocolate cake lemon drops gummi bears danish jelly beans topping icing soufflé. Gummies cookie wafer. Jelly lemon drops cheesecake liquorice tiramisu cupcake cheesecake. Apple pie apple pie toffee cookie cake cake chocolate marshmallow.',
    'Bear claw donut caramels cheesecake donut marshmallow muffin wafer. Pastry marzipan icing cake chocolate oat cake candy canes ice cream jelly beans. Toffee jujubes pastry. Candy canes wafer jelly beans. Tart brownie wafer. Candy canes jelly-o bear claw cookie. Caramels carrot cake lollipop. Cotton candy jelly-o pie jelly-o jujubes chocolate jelly beans apple pie caramels. Cotton candy tootsie roll halvah icing jelly-o sesame snaps gummies.',
    'Chocolate chocolate cake dessert brownie bonbon cookie sesame snaps pastry marshmallow. Chocolate fruitcake jujubes soufflé cotton candy chocolate bar donut. Bonbon jujubes icing macaroon cotton candy toffee. Marshmallow jelly-o chocolate bear claw macaroon jelly chocolate bar fruitcake. Candy canes gingerbread jelly beans caramels pudding. Cake sesame snaps toffee powder candy macaroon jelly-o biscuit powder. Dragée donut gummi bears brownie bonbon bonbon halvah. Jelly beans liquorice sugar plum chocolate cake.',
    'Marzipan cotton candy caramels. Muffin dragée sweet roll tart muffin caramels. Toffee liquorice fruitcake gummies liquorice gingerbread. Oat cake carrot cake cookie tart donut jelly fruitcake oat cake chocolate bar. Cotton candy danish croissant cupcake chocolate bar bonbon candy danish wafer. Biscuit cupcake sweet chocolate bar marshmallow liquorice tart.',
    'Brownie chocolate donut donut. Tiramisu chocolate cake cookie. Sweet roll cookie jujubes lemon drops cheesecake cotton candy cookie. Apple pie cheesecake soufflé jelly beans tiramisu apple pie pie cheesecake chocolate. Ice cream sweet roll pie. Danish ice cream halvah dragée croissant. Biscuit wafer jujubes dessert chocolate topping cheesecake. Donut toffee lemon drops dragée lemon drops. Donut candy cheesecake pudding croissant. Lemon drops cotton candy candy canes.',
    'Chupa chups cake fruitcake sugar plum muffin cake biscuit apple pie pudding. Bonbon marzipan lollipop pastry gingerbread danish cake jujubes. Candy canes bear claw liquorice. Caramels powder marshmallow gummi bears jelly-o. Marshmallow toffee bear claw tiramisu bear claw soufflé pudding. Danish apple pie cupcake dragée halvah cotton candy sweet tiramisu pie. Marzipan candy muffin. Caramels liquorice jelly-o cheesecake cupcake muffin sesame snaps ice cream dessert.',
    'Brownie dragée gingerbread sugar plum pastry. Macaroon candy soufflé sugar plum halvah candy tootsie roll. Cake jelly-o marshmallow. Cotton candy donut powder sweet roll toffee tootsie roll cotton candy jelly beans. Muffin lollipop donut biscuit croissant cake jelly-o tiramisu pie. Icing tiramisu caramels sweet roll gummi bears bear claw macaroon apple pie danish. Lollipop cake toffee. Biscuit chocolate caramels caramels biscuit sweet sugar plum. Cookie macaroon ice cream jelly-o caramels pastry lemon drops. Chupa chups fruitcake cookie.',
    'Bonbon gingerbread chupa chups sugar plum chocolate jelly beans. Jelly-o liquorice chocolate cake jelly beans dessert bear claw chupa chups tootsie roll soufflé. Fruitcake croissant chocolate bar chupa chups gingerbread tart chocolate cookie cupcake. Jelly-o powder dessert tart. Chocolate donut ice cream apple pie. Cotton candy donut gummies lollipop apple pie. Sweet roll chocolate bar gummi bears chocolate cake. Candy canes apple pie cupcake sweet muffin lollipop. Wafer wafer sugar plum jelly lemon drops topping. Brownie sweet danish.',
    'Chocolate wafer toffee. Soufflé macaroon wafer. Sugar plum gummies cookie. Pastry muffin cotton candy. Pudding jelly dragée. Danish soufflé dragée liquorice marzipan donut. Gummies dragée jelly-o biscuit pudding chupa chups.',
    'Sweet roll marzipan cotton candy soufflé biscuit jujubes pudding cheesecake pastry. Lemon drops brownie cake sweet. Gummi bears marzipan tart caramels. Toffee cake carrot cake liquorice donut chupa chups ice cream. Sweet roll oat cake sweet icing icing sesame snaps caramels jelly. Tiramisu wafer fruitcake tart cupcake sweet roll. Candy dessert marshmallow gummi bears biscuit muffin macaroon jujubes.'
]

// Get items
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const values = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    // the value sless than 0 or ''
    if(values <= 0 || values > dummyText.length -1) {
        result.innerHTML = `<p>${dummyText[random]}</p>`;
    } else {
        const sliceArray = dummyText.slice(0, values);
        const finalTxt = sliceArray.map(text => `<p>${text}</p>`).join('');

        // Show the finalTxt
        result.innerHTML = finalTxt;
    }
})