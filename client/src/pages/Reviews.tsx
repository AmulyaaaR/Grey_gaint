import { useReviews, useCreateReview } from "@/hooks/use-reviews";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReviewSchema, type InsertReview } from "@shared/schema";
import { Star, Quote, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Reviews() {
  const { data: reviews, isLoading } = useReviews();
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-20 min-h-screen bg-background relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Client <span className="text-primary">Voices</span></h1>
            <p className="text-white/60 max-w-lg">Hear from those who have experienced the Grey Giant standard of excellence.</p>
          </div>
          <ReviewDialog open={open} onOpenChange={setOpen} />
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-white/5 animate-pulse rounded-none" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews?.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-8 flex flex-col hover:border-white/30 transition-colors"
              >
                <Quote className="w-10 h-10 text-white/20 mb-6" />
                <p className="text-white/80 font-light italic mb-8 flex-grow">"{review.comment}"</p>
                <div className="mt-auto">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-white fill-white" : "text-white/20"}`}
                      />
                    ))}
                  </div>
                  <p className="text-white font-serif tracking-wide">{review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (o: boolean) => void }) {
  const { mutate, isPending } = useCreateReview();

  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      name: "",
      rating: 5,
      comment: ""
    }
  });

  const onSubmit = (data: InsertReview) => {
    mutate(data, {
      onSuccess: () => {
        onOpenChange(false);
        form.reset();
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-8">
          <Plus className="mr-2 h-4 w-4" /> Add Review
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Share Your Experience</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/5 border-white/10 focus:border-white rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="focus:outline-none"
                          onClick={() => field.onChange(star)}
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${star <= field.value ? "text-white fill-white" : "text-white/20"
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-white/5 border-white/10 focus:border-white rounded-none min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-white text-black hover:bg-white/90 rounded-none"
            >
              {isPending ? "Submitting..." : "Post Review"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
