/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service939Service } from './service-939.service';

describe('Service939Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service939Service]
    });
  });

  it('should ...', inject([Service939Service], (service: Service939Service) => {
    expect(service).toBeTruthy();
  }));
});
