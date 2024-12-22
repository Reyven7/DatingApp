import { HttpParams, HttpResponse } from '@angular/common/http';
import { signal } from '@angular/core';
import { PaginatedResult } from '../_models/pagination';

export function setPaginationResponce<T>(
  responce: HttpResponse<T>,
  paginatedResultSignal: ReturnType<typeof signal<PaginatedResult<T> | null>>
) {
  paginatedResultSignal.set({
    items: responce.body as T,
    pagination: JSON.parse(responce.headers.get('Pagination')!),
  });
}

export function setPaginationHeaders(pageNumber: number, pageSize: number) {
  let params = new HttpParams();

  if (pageNumber && pageSize) {
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return params;
}
