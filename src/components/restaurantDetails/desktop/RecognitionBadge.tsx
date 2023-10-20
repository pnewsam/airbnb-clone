import { Award, BadgeCheck, LucideIcon, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "../../ui/tooltip";

type BaseRecognitionBadge = {
  Icon: LucideIcon;
  text: string;
  tooltipContent: string;
};

const BaseRecognitionBadge = ({
  Icon,
  text,
  tooltipContent,
}: BaseRecognitionBadge) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger>
        <Badge
          variant="secondary"
          className="py-2 px-4 bg-amber-200 text-amber-950 hover:bg-amber-300"
        >
          <Icon className="w-4 h-4 mr-2" />
          <span className="text-xs">{text}</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="bg-stone-900 text-xs text-white">
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

type variant = "superlative" | "recommended" | "exceptional";

type Props = {
  variant: variant;
};

export const RecognitionBadge = ({ variant }: Props) => {
  switch (variant) {
    case "superlative":
      return (
        <BaseRecognitionBadge
          Icon={Trophy}
          text="Superlative"
          tooltipContent="The highest rating a restaurant can receive from Airbnb Clone."
        />
      );

    case "recommended":
      return (
        <BaseRecognitionBadge
          Icon={BadgeCheck}
          text="Recommended"
          tooltipContent="This restaurant is recommended by Airbnb Clone."
        />
      );

    case "exceptional":
      return (
        <BaseRecognitionBadge
          Icon={Award}
          text="Exceptional"
          tooltipContent="This restaurant is exceptional."
        />
      );
  }
};
