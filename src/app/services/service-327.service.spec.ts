/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service327Service } from './service-327.service';

describe('Service327Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service327Service]
    });
  });

  it('should ...', inject([Service327Service], (service: Service327Service) => {
    expect(service).toBeTruthy();
  }));
});
