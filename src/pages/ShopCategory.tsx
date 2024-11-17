interface ShopCategoryProps {
  category: string;
}

const ShopCategory = ({ category }: ShopCategoryProps) => {
  return (
    <div>
      ShopCategory: {category}
    </div>
  );
};

export default ShopCategory;
