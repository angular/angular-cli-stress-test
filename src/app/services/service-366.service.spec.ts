/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service366Service } from './service-366.service';

describe('Service366Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service366Service]
    });
  });

  it('should ...', inject([Service366Service], (service: Service366Service) => {
    expect(service).toBeTruthy();
  }));
});
