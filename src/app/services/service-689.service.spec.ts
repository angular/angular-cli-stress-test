/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service689Service } from './service-689.service';

describe('Service689Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service689Service]
    });
  });

  it('should ...', inject([Service689Service], (service: Service689Service) => {
    expect(service).toBeTruthy();
  }));
});
