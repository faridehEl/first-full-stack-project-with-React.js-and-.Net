namespace API.Entities
{
    public class Basket
    {
        public int id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
        public void AddItem(Product product, int Quantity)
        {

        }
    }
}