class paper extends BaseClass
{
	constructor(x, y)
	{
		super(x,y,70,70);
		this.image = loadImage("paper.png");
		this.x=x;
		this.y=y;

	}
	display()
	{
	 super.display();
	}

}