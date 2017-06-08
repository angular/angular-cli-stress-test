/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service596Service } from './service-596.service';

describe('Service596Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service596Service]
    });
  });

  it('should ...', inject([Service596Service], (service: Service596Service) => {
    expect(service).toBeTruthy();
  }));
});
