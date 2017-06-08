/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service676Service } from './service-676.service';

describe('Service676Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service676Service]
    });
  });

  it('should ...', inject([Service676Service], (service: Service676Service) => {
    expect(service).toBeTruthy();
  }));
});
