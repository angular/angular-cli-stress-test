/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service547Service } from './service-547.service';

describe('Service547Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service547Service]
    });
  });

  it('should ...', inject([Service547Service], (service: Service547Service) => {
    expect(service).toBeTruthy();
  }));
});
