/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service490Service } from './service-490.service';

describe('Service490Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service490Service]
    });
  });

  it('should ...', inject([Service490Service], (service: Service490Service) => {
    expect(service).toBeTruthy();
  }));
});
