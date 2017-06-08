/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service225Service } from './service-225.service';

describe('Service225Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service225Service]
    });
  });

  it('should ...', inject([Service225Service], (service: Service225Service) => {
    expect(service).toBeTruthy();
  }));
});
