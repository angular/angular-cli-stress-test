/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service311Service } from './service-311.service';

describe('Service311Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service311Service]
    });
  });

  it('should ...', inject([Service311Service], (service: Service311Service) => {
    expect(service).toBeTruthy();
  }));
});
