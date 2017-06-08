/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service680Service } from './service-680.service';

describe('Service680Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service680Service]
    });
  });

  it('should ...', inject([Service680Service], (service: Service680Service) => {
    expect(service).toBeTruthy();
  }));
});
