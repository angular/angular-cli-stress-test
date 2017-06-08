/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service931Service } from './service-931.service';

describe('Service931Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service931Service]
    });
  });

  it('should ...', inject([Service931Service], (service: Service931Service) => {
    expect(service).toBeTruthy();
  }));
});
