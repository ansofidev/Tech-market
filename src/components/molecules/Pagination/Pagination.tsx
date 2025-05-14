import React, { useCallback } from 'react';
import Button from '../../atoms/button/Button';
import { ButtonTypes } from '@/types/ButtonTypes';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange(page);
    },
    [onPageChange],
  );

  const handlePrev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const newPage = Math.max(currentPage - 1, 1); // Минимум 1
      handlePageChange(newPage);
    },
    [currentPage, handlePageChange],
  );

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const newPage = Math.min(currentPage + 1, totalPages); // Максимум totalPages
      handlePageChange(newPage);
    },
    [currentPage, totalPages, handlePageChange],
  );

  const handlePageClick = useCallback(
    (page: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      handlePageChange(page);
    },
    [handlePageChange],
  );

  return (
    <div className="flex gap-4 justify-center items-center">
      <Button
        variant={ButtonTypes.arrow}
        icon={ChevronLeft}
        onClick={handlePrev}
        disabled={currentPage === 1}
      />

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <Button
              key={page}
              variant={ButtonTypes.numbered}
              content={page}
              bgColor={page === currentPage ? '#9747FF' : ''}
              onClick={handlePageClick(page)}
            />
          );
        })}
      </div>

      <Button
        variant={ButtonTypes.arrow}
        icon={ChevronRight}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
