import { TestBed, inject } from '@angular/core/testing';

import { MainSidebarService } from './main-sidebar.service';

describe('MainSidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainSidebarService]
    });
  });

  it('should be created', inject([MainSidebarService], (service: MainSidebarService) => {
    expect(service).toBeTruthy();
  }));
});
