/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service307Service } from './service-307.service';

describe('Service307Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service307Service]
    });
  });

  it('should ...', inject([Service307Service], (service: Service307Service) => {
    expect(service).toBeTruthy();
  }));
});
