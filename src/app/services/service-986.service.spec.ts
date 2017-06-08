/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service986Service } from './service-986.service';

describe('Service986Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service986Service]
    });
  });

  it('should ...', inject([Service986Service], (service: Service986Service) => {
    expect(service).toBeTruthy();
  }));
});
