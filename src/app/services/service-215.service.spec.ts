/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service215Service } from './service-215.service';

describe('Service215Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service215Service]
    });
  });

  it('should ...', inject([Service215Service], (service: Service215Service) => {
    expect(service).toBeTruthy();
  }));
});
