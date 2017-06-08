/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service248Service } from './service-248.service';

describe('Service248Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service248Service]
    });
  });

  it('should ...', inject([Service248Service], (service: Service248Service) => {
    expect(service).toBeTruthy();
  }));
});
