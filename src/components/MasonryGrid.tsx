import React from 'react';

interface MasonryGridProps {
    children: React.ReactNode;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {children}
            </div>
        </div>
    );
};

export default MasonryGrid;
