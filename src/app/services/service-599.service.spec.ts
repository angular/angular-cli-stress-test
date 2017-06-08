/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service599Service } from './service-599.service';

describe('Service599Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service599Service]
    });
  });

  it('should ...', inject([Service599Service], (service: Service599Service) => {
    expect(service).toBeTruthy();
  }));
});
