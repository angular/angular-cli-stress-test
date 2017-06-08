/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service370Service } from './service-370.service';

describe('Service370Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service370Service]
    });
  });

  it('should ...', inject([Service370Service], (service: Service370Service) => {
    expect(service).toBeTruthy();
  }));
});
