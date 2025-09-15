import { Button } from '../ui/button';

type EffectsToolProps = {
  selectedEffect?: string | null;
  onSelectEffect?: (effect: string) => void;
  onGenerate?: () => void;
  canGenerate?: boolean;
};

export const EffectsTool = ({
  selectedEffect,
  onSelectEffect,
  onGenerate,
  canGenerate
}: EffectsToolProps) => {
  const effects = ['Fashion', 'Minimalist', 'Polaroid', 'Cartoon'];

  return (
    <section className="effects-tool">
      <div className="effects-tool__container">
        <h3 className="effects-tool__title">Effects</h3>
        <div className="effects-tool__actions">
          {effects.map(effect => (
            <Button
              key={effect}
              variant="secondary"
              size="sm"
              aria-pressed={selectedEffect === effect}
              onClick={() => onSelectEffect?.(effect)}
            >
              {effect}
            </Button>
          ))}
          <Button
            variant="primary"
            size="sm"
            disabled={!canGenerate}
            onClick={onGenerate}
          >
            Generate
          </Button>
        </div>
      </div>
    </section>
  );
};
