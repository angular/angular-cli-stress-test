/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service153Service } from './service-153.service';

describe('Service153Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service153Service]
    });
  });

  it('should ...', inject([Service153Service], (service: Service153Service) => {
    expect(service).toBeTruthy();
  }));
});
