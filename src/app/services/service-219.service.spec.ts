/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service219Service } from './service-219.service';

describe('Service219Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service219Service]
    });
  });

  it('should ...', inject([Service219Service], (service: Service219Service) => {
    expect(service).toBeTruthy();
  }));
});
