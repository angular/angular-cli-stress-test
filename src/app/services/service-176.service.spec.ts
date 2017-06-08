/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service176Service } from './service-176.service';

describe('Service176Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service176Service]
    });
  });

  it('should ...', inject([Service176Service], (service: Service176Service) => {
    expect(service).toBeTruthy();
  }));
});
