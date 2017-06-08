/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service887Service } from './service-887.service';

describe('Service887Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service887Service]
    });
  });

  it('should ...', inject([Service887Service], (service: Service887Service) => {
    expect(service).toBeTruthy();
  }));
});
