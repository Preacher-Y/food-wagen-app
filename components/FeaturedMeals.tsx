"use client";
import { useState, useEffect, useCallback } from "react";
import MealCard, { type Meal } from "./MealCard";
import { Button } from "./ui/Button";
import AddMealModal from "./modals/AddMealModal";
import EditMealModal from "./modals/EditMealModal";
import DeleteMealModal from "./modals/DeleteMealModal";
import { useMealContext } from "@/contexts/MealContext";
import { ChevronRight } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const MEALS_PER_PAGE = 8;

type Props = {
  searchQuery?: string;
};

export default function FeaturedMeals({ searchQuery = "" }: Props) {
  const { refreshTrigger } = useMealContext();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch meals");
      const data: Meal[] = await response.json();
      let sanitizedData = data.map((meal) => ({
        ...meal,
        logo: meal.logo && meal.logo.trim() !== "" ? meal.logo : undefined,
      }));

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        sanitizedData = sanitizedData.filter((meal) =>
          meal.name.toLowerCase().includes(query)
        );
      }

      setMeals(sanitizedData);
      setDisplayedMeals(sanitizedData.slice(0, MEALS_PER_PAGE));
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals, refreshTrigger]);

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

  const handleEdit = (meal: Meal) => {
    setSelectedMeal(meal);
    setEditModalOpen(true);
  };

  const handleDelete = (meal: Meal) => {
    setSelectedMeal(meal);
    setDeleteModalOpen(true);
  };

  const handleModalSuccess = () => {
    fetchMeals();
  };

  if (loading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Featured Meals
        </h2>
        <div className="flex justify-center items-center py-12">
          <div className="w-8 h-8 border-4 border-zinc-500 border-t-white rounded-full animate-spin mr-3"></div>
          <p className="text-zinc-500">Loading meals...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Featured Meals
        </h2>

        {displayedMeals.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-zinc-500">No meals available</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
              <div className="flex max-w-md items-center gap-1 justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleLoadMore}
                  disabled={remainingMeals < MEALS_PER_PAGE}
                  className="w-auto px-8 sm:px-10 text-3xl"
                >
                 <span>Load more</span>
                 <ChevronRight className="w-4 h-4"/>
                </Button>
              </div>
            )}
          </>
        )}
      </section>

      <AddMealModal 
        open={addModalOpen} 
        onClose={() => setAddModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
      <EditMealModal 
        open={editModalOpen} 
        onClose={() => {
          setEditModalOpen(false);
          setSelectedMeal(null);
        }}
        meal={selectedMeal}
        onSuccess={handleModalSuccess}
      />
      <DeleteMealModal 
        open={deleteModalOpen} 
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedMeal(null);
        }}
        meal={selectedMeal}
        onSuccess={handleModalSuccess}
      />
    </>
  );
}

