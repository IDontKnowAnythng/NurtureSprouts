import { TestBed } from '@angular/core/testing';

import { AddNewsService } from './news.service';

describe('AddNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewsService = TestBed.get(AddNewsService);
    expect(service).toBeTruthy();
  });
});
