/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service572Service } from './service-572.service';

describe('Service572Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service572Service]
    });
  });

  it('should ...', inject([Service572Service], (service: Service572Service) => {
    expect(service).toBeTruthy();
  }));
});
