/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service797Service } from './service-797.service';

describe('Service797Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service797Service]
    });
  });

  it('should ...', inject([Service797Service], (service: Service797Service) => {
    expect(service).toBeTruthy();
  }));
});
