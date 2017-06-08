/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service540Service } from './service-540.service';

describe('Service540Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service540Service]
    });
  });

  it('should ...', inject([Service540Service], (service: Service540Service) => {
    expect(service).toBeTruthy();
  }));
});
