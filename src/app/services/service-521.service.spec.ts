/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service521Service } from './service-521.service';

describe('Service521Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service521Service]
    });
  });

  it('should ...', inject([Service521Service], (service: Service521Service) => {
    expect(service).toBeTruthy();
  }));
});
