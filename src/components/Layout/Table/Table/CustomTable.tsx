import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { CustomBarLoader, Spinner } from 'components/common';
import { useRef, useState } from 'react';
import {
  LoadingStatus,
  LoadingText,
  PageInfo,
  PaginationButton,
  PaginationButtonGroup,
  PaginationButtonLabel,
  PaginationContainer,
  PaginationPageContainer,
  PaginationPageInput,
  Table,
  TableBody,
  TableContainer,
  TableHeader,
} from './styles';

interface TableProps {
  headerComponent: React.ReactNode;
  loading: boolean;
  limit?: number;
  page?: number;
  totalRows: number;
  data: any[];
  handlePageChange?: (page: number) => void;
  renderBody: (item: any, index: number) => void;
}

export const CustomTable = ({
  headerComponent,
  limit = 10,
  page = 1,
  totalRows,
  data,
  loading,
  renderBody,
  handlePageChange,
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const pageRef = useRef<HTMLInputElement>(null);

  let totalPages = Math.floor(totalRows / limit);
  totalPages = totalRows % limit === 0 ? totalPages : totalPages + 1;
  const toPage = currentPage * limit > totalRows ? totalRows : currentPage * limit;
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onPageChange(parseInt(event.target.value));
      if (pageRef.current) {
        pageRef.current.blur();
      }
    }
  };

  const onPageChange = async (page: number) => {
    let pageChange = page;
    if (page < 1) {
      pageChange = 1;
    }
    if (page >= totalPages) {
      pageChange = totalPages;
    }
    setCurrentPage(pageChange);
    if (pageRef.current) {
      pageRef.current.value = pageChange + '';
    }
    await handlePageChange?.(pageChange);
  };

  return (
    <TableContainer>
      <CustomBarLoader loading={loading} width={'100%'} height={2} />
      <p className="visible md:invisible text-sm">
        Showing row {currentPage * limit - 9} to {currentPage * limit} of {totalRows}
      </p>
      <Table>
        <TableHeader>{headerComponent}</TableHeader>
        <TableBody>{data.map((item, index) => renderBody(item, index))}</TableBody>
      </Table>
      <PaginationContainer>
        <PaginationButtonGroup>
          <PaginationButton onClick={() => onPageChange(currentPage - 1)}>
            <ChevronLeftIcon className="text-red-400 dark:text-green-400 w-6 h-6 " />
            <PaginationButtonLabel>PREVIOUS</PaginationButtonLabel>
          </PaginationButton>
          <PaginationPageContainer>
            <PaginationPageInput
              ref={pageRef}
              defaultValue={currentPage}
              onKeyDown={handleKeyDown}
            ></PaginationPageInput>
            <span className="text-xs">out of {totalPages}</span>
          </PaginationPageContainer>
          <PaginationButton onClick={() => onPageChange(currentPage + 1)}>
            <PaginationButtonLabel>NEXT</PaginationButtonLabel>
            <ChevronRightIcon className="text-red-400 dark:text-green-400 w-6 h-6 " />
          </PaginationButton>
        </PaginationButtonGroup>

        {loading && (
          <LoadingStatus>
            <LoadingText> Loading</LoadingText> <Spinner size={10} loading={loading} />
          </LoadingStatus>
        )}
        <PageInfo>
          Showing row {currentPage * limit - 9} to {toPage} of {totalRows}
        </PageInfo>
      </PaginationContainer>
    </TableContainer>
  );
};
