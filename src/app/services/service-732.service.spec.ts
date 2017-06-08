/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service732Service } from './service-732.service';

describe('Service732Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service732Service]
    });
  });

  it('should ...', inject([Service732Service], (service: Service732Service) => {
    expect(service).toBeTruthy();
  }));
});
