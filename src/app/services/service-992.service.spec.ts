/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service992Service } from './service-992.service';

describe('Service992Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service992Service]
    });
  });

  it('should ...', inject([Service992Service], (service: Service992Service) => {
    expect(service).toBeTruthy();
  }));
});
