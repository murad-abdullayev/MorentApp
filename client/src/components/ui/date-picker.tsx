import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

type Props = {
  onChange: (data?: Date) => void;
  hidePastDates?: boolean;
  defaultDate: string | null;
};

export function DatePicker({
  onChange,
  hidePastDates = false,
  defaultDate,
}: Props) {
  const [date, setDate] = useState<Date | undefined>(
    defaultDate ? new Date(defaultDate) : undefined
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-full justify-start text-left p-0 hover:bg-transparent text-xs !text-secondary-300 font-medium tracking-[-0.24px]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            onChange(date);
            setDate(date);
          }}
          initialFocus
          disabled={hidePastDates ? { before: new Date() } : undefined}
        />
      </PopoverContent>
    </Popover>
  );
}
