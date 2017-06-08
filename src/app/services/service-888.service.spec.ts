/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service888Service } from './service-888.service';

describe('Service888Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service888Service]
    });
  });

  it('should ...', inject([Service888Service], (service: Service888Service) => {
    expect(service).toBeTruthy();
  }));
});
