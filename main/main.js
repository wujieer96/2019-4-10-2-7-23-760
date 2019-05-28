module.exports = function main(inputs) {
    // write your code here...
    var price=0;
    if inputs[distance]<=2{
	price=inputs[parkTime]*0.25+6;
	price=Math.round(price);
	};
    else if inputs[distance]>2 && inputs[distance]<=8 {
	price=inputs[parkTime]*0.25+6+(inputs[distance]-2)*0.8;
	price=Math.round(price);
	};
    else if inputs[distance]>8{
	price=inputs[parkTime]*0.25+10.8+(inputs[distance]-8)*1.2;
	price=Math.round(price);
	};
    return price;
};
