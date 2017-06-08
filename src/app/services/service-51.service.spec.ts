/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service51Service } from './service-51.service';

describe('Service51Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service51Service]
    });
  });

  it('should ...', inject([Service51Service], (service: Service51Service) => {
    expect(service).toBeTruthy();
  }));
});
