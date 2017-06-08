/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service863Service } from './service-863.service';

describe('Service863Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service863Service]
    });
  });

  it('should ...', inject([Service863Service], (service: Service863Service) => {
    expect(service).toBeTruthy();
  }));
});
