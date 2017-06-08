/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service508Service } from './service-508.service';

describe('Service508Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service508Service]
    });
  });

  it('should ...', inject([Service508Service], (service: Service508Service) => {
    expect(service).toBeTruthy();
  }));
});
