"use client";
import { useState, useEffect } from "react";
import MealCard, { type Meal } from "./MealCard";
import { Button } from "./ui/Button";
import AddMealModal from "./modals/AddMealModal";
import EditMealModal from "./modals/EditMealModal";
import DeleteMealModal from "./modals/DeleteMealModal";

const API_URL = "https://6852821e0594059b23cdd834.mockapi.io/Food";
const MEALS_PER_PAGE = 8;

export default function FeaturedMeals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Modal states
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch meals");
        const data: Meal[] = await response.json();
        // Sanitize data: convert empty strings to undefined for optional fields
        const sanitizedData = data.map((meal) => ({
          ...meal,
          logo: meal.logo && meal.logo.trim() !== "" ? meal.logo : undefined,
        }));
        setMeals(sanitizedData);
        // Display first 8 meals
        setDisplayedMeals(sanitizedData.slice(0, MEALS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = currentPage * MEALS_PER_PAGE;
    const endIndex = startIndex + MEALS_PER_PAGE;
    const nextMeals = meals.slice(startIndex, endIndex);
    
    if (nextMeals.length > 0) {
      setDisplayedMeals((prev) => [...prev, ...nextMeals]);
      setCurrentPage(nextPage);
    }
  };

  const remainingMeals = meals.length - displayedMeals.length;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = (meal: Meal) => {
    setEditModalOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = (meal: Meal) => {
    setDeleteModalOpen(true);
  };

  if (loading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Featured Meals
        </h2>
        <div className="flex justify-center items-center py-12">
          <p className="text-zinc-500">Loading meals...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Featured Meals
        </h2>

        {displayedMeals.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-zinc-500">No meals available</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {displayedMeals.map((meal) => (
                <MealCard
                  key={meal.id}
                  meal={meal}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {remainingMeals > 0 && (
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleLoadMore}
                  disabled={remainingMeals < MEALS_PER_PAGE}
                  className="w-auto px-8 sm:px-10"
                >
                  Load more &gt;
                </Button>
              </div>
            )}
          </>
        )}
      </section>

      <AddMealModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
      <EditMealModal open={editModalOpen} onClose={() => setEditModalOpen(false)} />
      <DeleteMealModal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} />
    </>
  );
}

