'use client';
import { ToolsBar } from '@/components/molecules/tools-bar';
import { EffectsTool } from '@/components/molecules/effects-tool';
import { useState } from 'react';
import { generateImage } from '@/actions/generate-image';

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageSrc(url);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simula proceso de generación
    // await new Promise(r => setTimeout(r, 1500));
    await generateImage();
    setIsGenerating(false);
  };

  return (
    <div className="workspace">
      <ToolsBar />

      <div className="canvas-board">
        {!imageSrc ? (
          <label className="upload-drop" htmlFor="file-input">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="sr-only"
            />
            <div className="upload-drop__inner">
              <span className="upload-drop__title">Add photos or videos</span>
              <span className="upload-drop__hint">
                Click to upload or drag and drop
              </span>
            </div>
          </label>
        ) : (
          <div className="preview-wrapper">
            <img src={imageSrc} alt="uploaded" className="preview-image" />
            {isGenerating && (
              <div className="overlay-loading">
                <div className="spinner" />
              </div>
            )}
          </div>
        )}
      </div>

      <EffectsTool
        selectedEffect={selectedEffect}
        onSelectEffect={setSelectedEffect}
        onGenerate={handleGenerate}
        canGenerate={Boolean(imageSrc && selectedEffect && !isGenerating)}
      />
    </div>
  );
}
