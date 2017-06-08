/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service624Service } from './service-624.service';

describe('Service624Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service624Service]
    });
  });

  it('should ...', inject([Service624Service], (service: Service624Service) => {
    expect(service).toBeTruthy();
  }));
});
