/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service209Service } from './service-209.service';

describe('Service209Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service209Service]
    });
  });

  it('should ...', inject([Service209Service], (service: Service209Service) => {
    expect(service).toBeTruthy();
  }));
});
