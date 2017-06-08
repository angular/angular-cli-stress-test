/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service724Service } from './service-724.service';

describe('Service724Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service724Service]
    });
  });

  it('should ...', inject([Service724Service], (service: Service724Service) => {
    expect(service).toBeTruthy();
  }));
});
