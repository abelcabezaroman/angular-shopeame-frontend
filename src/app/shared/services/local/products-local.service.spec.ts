import { TestBed } from '@angular/core/testing';

import { ProductsLocalService } from './products-local.service';

describe('ProductsLocalService', () => {
  let service: ProductsLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
