/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service578Service } from './service-578.service';

describe('Service578Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service578Service]
    });
  });

  it('should ...', inject([Service578Service], (service: Service578Service) => {
    expect(service).toBeTruthy();
  }));
});
