/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service382Service } from './service-382.service';

describe('Service382Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service382Service]
    });
  });

  it('should ...', inject([Service382Service], (service: Service382Service) => {
    expect(service).toBeTruthy();
  }));
});
