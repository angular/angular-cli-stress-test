/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service419Service } from './service-419.service';

describe('Service419Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service419Service]
    });
  });

  it('should ...', inject([Service419Service], (service: Service419Service) => {
    expect(service).toBeTruthy();
  }));
});
