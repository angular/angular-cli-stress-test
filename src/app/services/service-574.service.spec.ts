/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service574Service } from './service-574.service';

describe('Service574Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service574Service]
    });
  });

  it('should ...', inject([Service574Service], (service: Service574Service) => {
    expect(service).toBeTruthy();
  }));
});
