/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service285Service } from './service-285.service';

describe('Service285Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service285Service]
    });
  });

  it('should ...', inject([Service285Service], (service: Service285Service) => {
    expect(service).toBeTruthy();
  }));
});
