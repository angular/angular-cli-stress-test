/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service85Service } from './service-85.service';

describe('Service85Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service85Service]
    });
  });

  it('should ...', inject([Service85Service], (service: Service85Service) => {
    expect(service).toBeTruthy();
  }));
});
