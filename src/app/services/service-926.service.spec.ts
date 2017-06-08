/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service926Service } from './service-926.service';

describe('Service926Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service926Service]
    });
  });

  it('should ...', inject([Service926Service], (service: Service926Service) => {
    expect(service).toBeTruthy();
  }));
});
