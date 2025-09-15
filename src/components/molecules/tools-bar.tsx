import { Button } from '../ui/button';

export const ToolsBar = () => {
  return (
    <section className="tools-bar">
      <div className="tools-bar__group">
        <Button variant="secondary" size="sm">
          100%
        </Button>
        <Button variant="secondary" size="sm">
          {'<'}
        </Button>
        <Button variant="secondary" size="sm">
          {'>'}
        </Button>
        <Button variant="primary" size="sm">
          Export
        </Button>
      </div>
    </section>
  );
};
