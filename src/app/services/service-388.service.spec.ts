/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service388Service } from './service-388.service';

describe('Service388Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service388Service]
    });
  });

  it('should ...', inject([Service388Service], (service: Service388Service) => {
    expect(service).toBeTruthy();
  }));
});
