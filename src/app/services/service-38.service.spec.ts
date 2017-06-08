/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service38Service } from './service-38.service';

describe('Service38Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service38Service]
    });
  });

  it('should ...', inject([Service38Service], (service: Service38Service) => {
    expect(service).toBeTruthy();
  }));
});
