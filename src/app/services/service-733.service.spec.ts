/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service733Service } from './service-733.service';

describe('Service733Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service733Service]
    });
  });

  it('should ...', inject([Service733Service], (service: Service733Service) => {
    expect(service).toBeTruthy();
  }));
});
