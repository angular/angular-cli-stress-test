/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service443Service } from './service-443.service';

describe('Service443Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service443Service]
    });
  });

  it('should ...', inject([Service443Service], (service: Service443Service) => {
    expect(service).toBeTruthy();
  }));
});
