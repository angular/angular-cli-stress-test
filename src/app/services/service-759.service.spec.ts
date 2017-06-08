/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service759Service } from './service-759.service';

describe('Service759Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service759Service]
    });
  });

  it('should ...', inject([Service759Service], (service: Service759Service) => {
    expect(service).toBeTruthy();
  }));
});
